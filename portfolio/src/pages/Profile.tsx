import { useTranslation } from "react-i18next";

export default function Profile() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row items-center justify-center">
            <div>
                <h1 className="text-2xl" style={{ fontWeight: 900 }}>{t("pages.profile.title")}</h1>
                <p>{t("pages.profile.description")}</p>
            </div>
            <img src="/profile.png" alt="Profile" className="bg-gray-200/20" style={{ width: "200px", height: "200px", borderRadius: "25%" }} />
        </div>
    )
}