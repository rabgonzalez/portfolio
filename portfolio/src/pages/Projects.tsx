import { useTranslation } from "react-i18next";
import { projects } from "../data/data";
import ProjectComponent from "../components/ProjectComponent";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="mac-page">
      <div className="mac-page-heading">
        <span className="mac-eyebrow">{t("pages.projects.eyebrow")}</span>
        <h1>{t("apps.projects")}</h1>
        <p>{t("pages.projects.description")}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-mac-in" style={{ animationDelay: `${index * 55}ms` }}>
            <ProjectComponent project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
