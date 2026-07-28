import { useTranslation } from "react-i18next";
import { projects } from "../data/data";
import ProjectComponent from "../components/ProjectComponent";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-[28px] font-bold">{t("apps.projects")}</h1>
            <p className="text-sm leading-relaxed mb-4">
                {t("pages.projects.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {projects.map((project) => (
                    <ProjectComponent key={project.id} project={project} />
                ))}
            </div>
        </div >
    );
}