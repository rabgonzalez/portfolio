import { useTranslation } from "react-i18next";
import { useTypewriter } from "../hooks/useTypewriter";
import { skills } from "../data/data";

export default function Profile() {
    const { t } = useTranslation();
    const titles = useTypewriter({
        words: t("pages.profile.titles", { returnObjects: true }) as string[]
    });

    return (
        <div className="flex flex-row items-center gap-8 px-8 py-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-[28px] font-semibold tracking-tight text-neutral-900 dark:text-white">
                    {t("pages.profile.title")}
                </h1>

                <div className="rounded-lg bg-[#1e1e1e] px-4 py-2.5 shadow-inner ring-1 ring-black/10 w-100">
                    <h2 className="font-mono text-base text-white/90 h-6 flex items-center gap-2">
                        <span className="text-white/40">$</span>
                        {titles}
                        <span className="typewriter-cursor text-white">▌</span>
                    </h2>
                </div>

                <p className="text-sm leading-relaxed max-w-md">
                    {t("pages.profile.description")}
                </p>

                <h1 className="text-[20px]">Tech Stack</h1>
                <div className="flex flex-wrap gap-2">
                    {Object.values(skills).map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-2 rounded-md border px-3 py-2 w-fit"
                            style={{ backgroundColor: skill.color + "20", borderColor: skill.color }}
                        >
                            <img src={skill.logo_url} alt={skill.name} className="w-5 h-5" />
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <img
                src="/profile.png"
                alt="Profile"
                className="w-[200px] h-[200px] rounded-full object-cover bg-gray-200/10 ring-1 ring-black/5"
            />
        </div>
    )
}