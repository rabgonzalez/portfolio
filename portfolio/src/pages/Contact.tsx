import { FileUser, Mail, MapPin, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import RubenAbreuGonzalezCV from "../assets/cv/RubenAbreuGonzalez-CV.pdf";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="mac-page">
      <div className="mac-page-heading">
        <span className="mac-eyebrow">Get in touch</span>
        <h1>{t("pages.contact.title")}</h1>
      </div>

      <div className="mac-contact-card">
        <div className="mac-contact-glow" />
        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-black/90 dark:text-white sm:text-3xl">
              {t("pages.contact.subtitle")}
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-black/60 dark:text-white/60 sm:text-[15px]">
              {t("pages.contact.description")}
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <div className="mac-contact-detail">
                <span><MapPin size={15} strokeWidth={1.8} /></span>
                {t("pages.contact.location")}
              </div>
              <div className="mac-contact-detail">
                <span><Zap size={15} strokeWidth={1.8} /></span>
                {t("pages.contact.response")}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <a href="mailto:rubalba.rag@gmail.com" className="mac-primary-button">
              <Mail size={16} strokeWidth={1.8} />
              {t("pages.contact.emailCta")}
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <a href="https://github.com/rabgonzalez" target="_blank" rel="noreferrer" className="mac-secondary-button">GitHub</a>
              <a href="https://www.linkedin.com/in/rub%C3%A9n-abreu-gonz%C3%A1lez" target="_blank" rel="noreferrer" className="mac-secondary-button">LinkedIn</a>
            </div>
            <a href={RubenAbreuGonzalezCV} download className="mac-secondary-button">
              <FileUser size={16} strokeWidth={1.8} />
              {t("pages.contact.curriculumCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
