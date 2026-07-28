import { experiences } from "../data/data";
import ExperienceComponent from "../components/ExperienceComponent";

export default function Experience() {
    experiences.sort((a, b) => {
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    });

    return (
        <div className="relative pl-6">
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

            <ul className="space-y-6">
                {experiences.map((exp) => (
                    <li key={exp.id} className="relative">
                        <span className="absolute -left-5 top-16 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-neutral-900" />
                        <ExperienceComponent experience={exp} />
                    </li>
                ))}
            </ul>
        </div>
    );
}