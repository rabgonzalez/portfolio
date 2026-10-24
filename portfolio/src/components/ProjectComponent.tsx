import { useTranslation } from "react-i18next";
import type { ProjectType } from "../types";
import StackComponent from "./StackComponent";

export default function ProjectComponent({ project }: { project: ProjectType }) {
    const { t } = useTranslation();

    return (
        <a
            key={project.id}
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl overflow-hidden border border-white/15 dark:border-black/15 bg-white/25 shadow-lg hover:border-white/30 hover:-translate-y-1 transition-all duration-200"
        >
            <div className="aspect-video w-full overflow-hidden bg-white/50 dark:bg-black/25">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/50 dark:text-white/30 text-sm">
                        {project.title}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2 p-4">
                <h2 className="text-base font-semibold dark:text-white">{project.title}</h2>
                <p className="text-sm text-black/70 dark:text-white/70 line-clamp-2">{t(project.description)}</p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                        <StackComponent key={tag.name} skill={tag} type="project" />
                    ))}
                </div>
            </div>
        </a>
    )
}