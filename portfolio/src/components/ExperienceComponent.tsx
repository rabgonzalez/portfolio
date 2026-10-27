import { useTranslation } from "react-i18next";
import type { ExperienceType } from "../types";
import StackComponent from "./StackComponent";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { formatRange } from "../data/data";

export default function ExperienceComponent({ experience }: { experience: ExperienceType }) {
  const { t, i18n } = useTranslation();

  return (
    <article className="mac-card mac-experience-card group">
      <div className="flex items-start gap-3.5">
        <ImageWithSkeleton
          src={experience.icon}
          alt={t(experience.company)}
          containerClassName="mac-company-icon"
          className="object-contain p-1.5"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-[15px] font-semibold tracking-[-0.01em] text-black/85 dark:text-white/90 sm:text-base">
                {t(experience.title)}
              </h3>
              <p className="mt-0.5 truncate text-xs font-medium text-black/50 dark:text-white/50 sm:text-[13px]">
                {t(experience.company)}
              </p>
            </div>
            <span className="mac-date-pill">
              {formatRange(experience.startDate, experience.endDate, i18n.language)}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-[1.65] text-black/60 dark:text-white/60 sm:text-sm">
        {t(experience.description)}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {experience.tags.map((tag) => (
          <StackComponent key={tag.name} skill={tag} type="project" />
        ))}
      </div>
    </article>
  );
}
