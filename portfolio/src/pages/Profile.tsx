import { useTranslation } from "react-i18next";
import { useTypewriter } from "../hooks/useTypewriter";
import { skills } from "../data/data";
import StackComponent from "../components/StackComponent";
import profileImage from "../assets/profile.png";

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
                    <h2 className="font-mono text-base text-green-400/90 h-6 flex items-center gap-2">
                        <span className="text-green-400">$</span>
                        {titles}
                        <span className="typewriter-cursor text-green-400">▌</span>
                    </h2>
                </div>

                <p className="text-sm leading-relaxed max-w-md">
                    {t("pages.profile.description")}
                </p>

                <h1 className="text-[20px] mt-4">{t("pages.profile.techStack")}</h1>
                <div className="flex flex-wrap gap-2">
                    {Object.values(skills).map((skill) => (
                        <StackComponent key={skill.name} skill={skill} type="skill" />
                    ))}
                </div>
            </div>

            <img
                src={profileImage}
                alt="Profile"
                className="w-[200px] h-[200px] rounded-full object-cover bg-gray-200/10 ring-1 ring-black/5"
            />
        </div>
    )
}