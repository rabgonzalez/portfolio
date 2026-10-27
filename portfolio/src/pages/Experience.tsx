import { useTranslation } from "react-i18next";
import { experiences } from "../data/data";
import ExperienceComponent from "../components/ExperienceComponent";

export default function Experience() {
  const { t } = useTranslation();
  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );

  return (
    <section className="mac-page mac-experience-page">
      <div className="mac-page-heading">
        <span className="mac-eyebrow">Career</span>
        <h1>{t("apps.experience")}</h1>
      </div>

      <div className="mac-timeline">
        {sortedExperiences.map((experience, index) => (
          <div key={experience.id} className="mac-timeline-item" style={{ animationDelay: `${index * 70}ms` }}>
            <span className="mac-timeline-dot" />
            <ExperienceComponent experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
}
