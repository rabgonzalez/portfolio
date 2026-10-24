import { FileUser, Mail, MapPin, Zap } from 'lucide-react';
import { useTranslation } from "react-i18next";
import RubenAbreuGonzalezCV from "../assets/cv/RubenAbreuGonzalez-CV.pdf";

export default function Contact() {
  const { t } = useTranslation();

  return (
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-semibold dark:text-white">
            {t("pages.contact.title")}
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-black/15 dark:from-white/15 to-transparent" />
        </div>

        <div className="overflow-hidden rounded-xl border border-white/15 dark:border-white/10 dark:border-black/15 bg-white/25 shadow-lg p-8 md:p-12">
          <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                {t("pages.contact.subtitle")}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-white/60">
                {t(
                  "pages.contact.description"
                )}
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-[13px] font-medium text-neutral-600 dark:text-white/70">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-red-500/50 bg-red-500/15">
                    <MapPin size={15} strokeWidth={1.75} />
                  </span>
                  <span>{t("pages.contact.location")}</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] font-medium text-neutral-600 dark:text-white/70">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-yellow-500/50 bg-yellow-500/15">
                    <Zap size={15} strokeWidth={1.75} />
                  </span>
                  <span>{t("pages.contact.response")}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:rubalba.rag@gmail.com"
                className="group flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-white py-3.5 px-6 text-[15px] font-medium text-white dark:text-black transition-colors duration-200 hover:bg-neutral-700 dark:hover:bg-neutral-200"
              >
                <Mail size={16} strokeWidth={1.75} />
                <span>{t("pages.contact.emailCta")}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/rabgonzalez"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 py-3 px-4 text-[14px] font-medium text-neutral-700 dark:text-white/80 transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rub%C3%A9n-abreu-gonz%C3%A1lez"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 py-3 px-4 text-[14px] font-medium text-neutral-700 dark:text-white/80 transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/15 dark:hover:border-white/20"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
               <a
               href={RubenAbreuGonzalezCV}
                download
                className="group flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-white py-3.5 px-6 text-[15px] font-medium text-white dark:text-black transition-colors duration-200 hover:bg-neutral-700 dark:hover:bg-neutral-200"
              >
                <FileUser size={16} strokeWidth={1.75} />
                <span>{t("pages.contact.curriculumCta")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}