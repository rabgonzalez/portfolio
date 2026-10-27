import { useTranslation } from "react-i18next";
import type { ExperienceType } from "../types";
import StackComponent from "./StackComponent";
import { formatRange } from "../data/data";

export default function ExperienceComponent({ experience }: { experience: ExperienceType }) {
    const { t, i18n } = useTranslation();

    return (
        <article
            className="
                group relative overflow-hidden rounded-xl
                border border-white/30 dark:border-white/10
                bg-white/30 dark:bg-black/25
                backdrop-blur-xl
                shadow-lg shadow-black/5 dark:shadow-black/20
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-white/40 dark:hover:bg-white/5
                hover:shadow-xl hover:shadow-black/10
            "
        >
            <div className="absolute inset-x-0 top-0 h-px bg-white/60 dark:bg-white/20" />

            <div className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                    <div
                        className="
                            flex h-11 w-11 shrink-0 items-center justify-center
                            rounded-xl border border-white/40 dark:border-white/10
                            bg-white/50 dark:bg-white/10
                            shadow-sm
                        "
                    >
                        <img
                            src={experience.icon}
                            alt={t(experience.company)}
                            className="h-7 w-7 rounded-lg object-contain"
                        />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold tracking-tight text-black/85 dark:text-white/90 sm:text-base">
                                    {t(experience.title)}
                                </h3>
                                <p className="truncate text-xs font-medium text-black/50 dark:text-white/50 sm:text-sm">
                                    {t(experience.company)}
                                </p>
                            </div>

                            <span
                                className="
                                    shrink-0 self-start rounded-full
                                    border border-black/5 dark:border-white/10
                                    bg-black/5 dark:bg-white/5
                                    px-2.5 py-1
                                    text-[10px] font-medium tracking-wide
                                    text-black/50 dark:text-white/50
                                "
                            >
                                {formatRange(experience.startDate, experience.endDate, i18n.language)}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-black/65 dark:text-white/65 sm:text-sm">
                    {t(experience.description)}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {experience.tags.map((tag) => (
                        <StackComponent key={tag.name} skill={tag} type="project" />
                    ))}
                </div>
            </div>
        </article>
    );
}
