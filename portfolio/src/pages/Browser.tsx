import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  House,
  Plus,
  RefreshCw,
  Search,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { webs } from "../data/data";

type BrowserTab = {
  id: number;
  title: string;
  history: string[];
  historyIndex: number;
};

const createTab = (id: number): BrowserTab => ({
  id,
  title: "New tab",
  history: [],
  historyIndex: -1,
});

function normalizeAddress(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(trimmed)) {
    return `http://${trimmed}`;
  }
  if (/^[^\s]+\.[^\s]+/.test(trimmed)) return `https://${trimmed}`;
  return `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`;
}

export default function Browser() {
  const { t } = useTranslation();
  const [tabs, setTabs] = useState<BrowserTab[]>([createTab(1)]);
  const [activeId, setActiveId] = useState(1);
  const [addressDraft, setAddressDraft] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const currentUrl = activeTab.history[activeTab.historyIndex] ?? "";
  const canGoBack = activeTab.historyIndex > 0;
  const canGoForward = activeTab.historyIndex < activeTab.history.length - 1;

  const webLinks = useMemo(
    () => webs.filter((web) => Boolean(web.codeUrl)),
    [],
  );

  const navigate = (rawAddress: string) => {
    const url = normalizeAddress(rawAddress);
    if (!url) return;
    setTabs((previous) =>
      previous.map((tab) => {
        if (tab.id !== activeId) return tab;
        const nextHistory = tab.history.slice(0, tab.historyIndex + 1);
        nextHistory.push(url);
        return {
          ...tab,
          title: webLinks.find((project) => project.codeUrl === url)?.title ?? new URL(url).hostname,
          history: nextHistory,
          historyIndex: nextHistory.length - 1,
        };
      }),
    );
    setAddressDraft(url);
    setReloadKey(0);
  };

  const addTab = () => {
    const nextId = Math.max(0, ...tabs.map((tab) => tab.id)) + 1;
    setTabs((previous) => [...previous, createTab(nextId)]);
    setActiveId(nextId);
    setAddressDraft("");
  };

  const closeTab = (id: number) => {
    if (tabs.length === 1) {
      setTabs([createTab(id)]);
      setAddressDraft("");
      return;
    }
    const index = tabs.findIndex((tab) => tab.id === id);
    const nextTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(nextTabs);
    if (activeId === id) {
      const nextTab = nextTabs[Math.max(0, index - 1)];
      setActiveId(nextTab.id);
      setAddressDraft(nextTab.history[nextTab.historyIndex] ?? "");
    }
  };

  const openExternal = () => {
    if (currentUrl) window.open(currentUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="browser-app flex h-full min-h-0 flex-col text-neutral-800 dark:text-neutral-100">
      <div className="browser-tabs flex min-w-0 items-center gap-1 border-b border-black/10 bg-black/[.035] px-2 pt-2 dark:border-white/10 dark:bg-white/[.035]">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveId(tab.id);
                setAddressDraft(tab.history[tab.historyIndex] ?? "");
              }}
              className={`group flex h-9 min-w-0 max-w-44 items-center gap-2 rounded-t-lg px-3 text-xs transition ${tab.id === activeId
                ? "bg-white text-neutral-800 shadow-sm dark:bg-neutral-800 dark:text-white"
                : "text-neutral-500 hover:bg-black/5 dark:text-neutral-400 dark:hover:bg-white/5"
                }`}
              title={tab.title}
            >
              <Globe size={13} className="shrink-0 opacity-60" />
              <span className="truncate">{tab.title === "New tab" ? t("browser.newTab") : tab.title}</span>
              <span
                role="button"
                tabIndex={0}
                aria-label={t("browser.closeTab")}
                onClick={(event) => {
                  event.stopPropagation();
                  closeTab(tab.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.stopPropagation();
                    closeTab(tab.id);
                  }
                }}
                className="ml-1 rounded p-0.5 opacity-50 hover:bg-black/10 hover:opacity-100 dark:hover:bg-white/10"
              >
                <X size={12} />
              </span>
            </button>
          ))}
          <button type="button" onClick={addTab} className="rounded-md p-2 text-neutral-500 hover:bg-black/10 dark:text-neutral-300 dark:hover:bg-white/10" aria-label={t("browser.newTab")}>
            <Plus size={15} />
          </button>
        </div>
      </div>

      <form
        className="flex items-center gap-1.5 border-b border-black/10 bg-white/75 px-3 py-2 dark:border-white/10 dark:bg-neutral-900/70"
        onSubmit={(event) => {
          event.preventDefault();
          navigate(addressDraft);
        }}
      >
        <button type="button" disabled={true} className="browser-control" aria-label={t("browser.back")}><ArrowLeft size={16} /></button>
        <button type="button" disabled={true} className="browser-control" aria-label={t("browser.forward")}><ArrowRight size={16} /></button>
        <button type="button" onClick={() => setReloadKey((value) => value + 1)} disabled={!currentUrl} className="browser-control" aria-label={t("browser.reload")}><RefreshCw size={15} /></button>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-black/10 bg-black/[.035] px-3 dark:border-white/10 dark:bg-white/[.06]">
          <Search size={14} className="shrink-0 text-neutral-400" />
          <input
            disabled={true}
            value={addressDraft}
            placeholder={t("browser.addressPlaceholder")}
            aria-label={t("browser.addressPlaceholder")}
            className="h-8 min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-neutral-400"
          />
          {currentUrl && <button type="button" onClick={() => { setTabs((previous) => previous.map((tab) => tab.id === activeId ? { ...tab, history: [], historyIndex: -1, title: "New tab" } : tab)); setAddressDraft(""); }} className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200" aria-label={t("browser.home")}><House size={14} /></button>}
        </div>
        {currentUrl && <button type="button" onClick={openExternal} className="browser-control" aria-label={t("browser.openExternal")} title={t("browser.openExternal")}><ExternalLink size={15} /></button>}
      </form>

      <main className="relative min-h-0 flex-1 overflow-hidden bg-white dark:bg-neutral-950">
        {currentUrl ? (
          <iframe
            key={`${activeId}-${currentUrl}-${reloadKey}`}
            src={currentUrl}
            title={activeTab.title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full border-0 bg-white"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads"
          />
        ) : (
          <div className="h-full overflow-y-auto px-5 py-8 sm:px-10 sm:py-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/20"><Globe size={29} /></div>
                <h1 className="text-2xl font-semibold tracking-tight">{t("browser.welcome")}</h1>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{t("browser.subtitle")}</p>
              </div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[.14em] text-neutral-400">{t("browser.projects")}</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {webLinks.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => navigate(project.codeUrl)}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-black/10 bg-black/[.025] p-3 text-left transition hover:-translate-y-0.5 hover:bg-black/[.05] hover:shadow-md dark:border-white/10 dark:bg-white/[.035] dark:hover:bg-white/[.07]"
                  >
                    {project.imageUrl ? <img src={project.imageUrl} alt="" className="h-11 w-11 shrink-0 rounded-lg object-cover" /> : <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-blue-500"><Globe size={20} /></span>}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{project.title}</span>
                      <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">{new URL(project.codeUrl).hostname}</span>
                    </span>
                    <ExternalLink size={14} className="shrink-0 text-neutral-400 transition group-hover:text-blue-500" />
                  </button>
                ))}
              </div>
              <p className="mt-6 text-center text-xs leading-relaxed text-neutral-400">{t("browser.footerHint")}</p>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}
