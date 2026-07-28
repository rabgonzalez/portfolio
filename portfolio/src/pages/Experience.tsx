// ExperienceTimeline.tsx
import { useTranslation } from "react-i18next";
import { experiences } from "../data/data";
import StackComponent from "../components/StackComponent";

function formatRange(start: string, end: string, locale: string) {
  const fmt = (d: string) => {
    const [y, m] = d.split("-").map(Number);
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
    }).format(new Date(y, m - 1));
  };
  return `${fmt(start)} — ${fmt(end)}`;
}

export default function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative pl-6">
      <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

      <ul className="space-y-6">
        {experiences.map((exp) => (
          <li key={exp.id} className="relative">
            {/* dot */}
            <span className="absolute -left-6 top-2 h-3 w-3 rounded-full bg-blue-300 ring-4 ring-white dark:ring-neutral-900" />

            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/25 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <img
                  src={exp.icon}
                  alt=""
                  className="h-8 w-8 rounded-md object-contain shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {t(exp.title)}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {t(exp.company)}
                  </p>
                </div>
                <span className="ml-auto shrink-0 text-[11px] font-medium text-gray-400 dark:text-gray-500">
                  {formatRange(exp.startDate, exp.endDate, i18n.language)}
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                {t(exp.description)}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <StackComponent key={tag.name} skill={tag} type="project" />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}