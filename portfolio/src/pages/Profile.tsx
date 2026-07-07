import { useTranslation } from "react-i18next";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Profile() {
    const { t } = useTranslation();
    const titles = useTypewriter({
        words: t("pages.profile.titles", { returnObjects: true }) as string[]
    });

    return (
        <div className="flex flex-row items-center justify-center">
            <div>
                <h1 className="text-2xl" style={{ fontWeight: 900 }}>{t("pages.profile.title")}</h1>
                <h2 className="text-xl font-medium">
                    {titles}
                    <span className="typewriter-cursor">|</span>
                </h2>
                <p className="text-sm">{t("pages.profile.description")}</p>
            </div>
            <img src="/profile.png" alt="Profile" className="bg-gray-200/20" style={{ width: "200px", height: "200px", borderRadius: "25%" }} />
        </div>
    )
}