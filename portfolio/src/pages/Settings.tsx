import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";
import { languages, WALLPAPERS } from "../utils";
import { Moon, Sun, Check } from "lucide-react";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function Settings() {
  const { wallpaper, setWallpaper, language, setLanguage, theme, setTheme } = useSettings();
  const { t } = useTranslation();

  return (
    <section className="mac-page">
      <div className="mac-page-heading">
        <span className="mac-eyebrow">{t("pages.settings.eyebrow")}</span>
        <h1>{t("apps.settings")}</h1>
      </div>

      <div className="space-y-7">
        <div>
          <h3 className="mac-section-title">{t("pages.settings.selectWallpaper")}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {WALLPAPERS.map((url, index) => (
              <button
                type="button"
                key={url}
                onClick={() => setWallpaper(url)}
                aria-label={`Wallpaper ${index + 1}`}
                aria-pressed={wallpaper === url}
                className={`mac-wallpaper ${wallpaper === url ? "is-selected" : ""}`}
              >
                <ImageWithSkeleton
                  src={url}
                  alt=""
                  loading="lazy"
                  containerClassName="h-full w-full"
                  skeletonClassName="rounded-[inherit]"
                  className="object-cover"
                />
                {wallpaper === url && (
                  <span className="mac-wallpaper-check"><Check size={13} strokeWidth={2.5} /></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mac-settings-row">
          <div>
            <h3 className="mac-section-title">{t("pages.settings.selectLanguage")}</h3>
            <p className="mac-setting-caption">{t("pages.settings.languageDescription")}</p>
          </div>
          <select className="mac-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{t(lang.label)}</option>
            ))}
          </select>
        </div>

        <div className="mac-settings-row">
          <div>
            <h3 className="mac-section-title">{t("pages.settings.selectTheme")}</h3>
            <p className="mac-setting-caption">{t("pages.settings.themeDescription")}</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Sun size={15} className="text-black/45 dark:text-white/45" />
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              role="switch"
              aria-checked={theme === "dark"}
              aria-label={t("pages.settings.selectTheme")}
              className={`mac-switch ${theme === "dark" ? "is-on" : ""}`}
            >
              <span />
            </button>
            <Moon size={15} className="text-black/45 dark:text-white/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
