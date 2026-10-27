import { useTranslation } from "react-i18next";
import type { ProjectType } from "../types";
import StackComponent from "./StackComponent";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function ProjectComponent({ project }: { project: ProjectType }) {
  const { t } = useTranslation();

  return (
    <a
      href={project.codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mac-card mac-project-card group block overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden bg-black/[0.04] dark:bg-white/[0.04]">
        {project.imageUrl ? (
          <ImageWithSkeleton
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            containerClassName="h-full w-full"
            skeletonClassName="mac-image-skeleton"
            className="transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-black/40 dark:text-white/30">
            {project.title}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col gap-2.5 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="truncate text-[15px] font-semibold tracking-tight text-black/85 dark:text-white/90 sm:text-base">
            {project.title}
          </h2>
          <span className="mac-arrow" aria-hidden="true">↗</span>
        </div>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-black/55 dark:text-white/55 sm:text-sm">
          {t(project.description)}
        </p>
        <div className="mt-0.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <StackComponent key={tag.name} skill={tag} type="project" />
          ))}
        </div>
      </div>
    </a>
  );
}
