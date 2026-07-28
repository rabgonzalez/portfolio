import { useTranslation } from "react-i18next";
import type { ExperienceType } from "../types";
import StackComponent from "./StackComponent";
import { formatRange } from "../data/data";

export default function ExperienceComponent({ experience }: { experience: ExperienceType }) {
    const { t, i18n } = useTranslation();

    return (<div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/25 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
            <img
                src={experience.icon}
                alt={t(experience.company)}
                className="h-8 w-8 rounded-md object-contain shrink-0"
            />
            <div className="min-w-0">
                <h3 className="sm:text-md text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {t(experience.title)}
                </h3>
                <p className="sm:text-sm text-xs text-gray-500 dark:text-gray-400 truncate">
                    {t(experience.company)}
                </p>
            </div>
            <span className="ml-auto shrink-0 text-[11px] font-medium text-gray-400 dark:text-gray-500">
                {formatRange(experience.startDate, experience.endDate, i18n.language)}
            </span>
        </div>

        <p className="mt-2 sm:text-sm text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
            {t(experience.description)}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
                <StackComponent key={tag.name} skill={tag} type="project" />
            ))}
        </div>
    </div>
    )
}
