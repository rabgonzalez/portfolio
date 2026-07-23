import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";
import { languages, WALLPAPERS } from "../utils";

export default function Settings() {
    const { wallpaper, setWallpaper, language, setLanguage } = useSettings();
    const { t } = useTranslation();

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">{t("pages.settings.selectWallpaper")}</h3>
            <div className="grid grid-cols-3 gap-3 p-4">
                {WALLPAPERS.map(url => (
                    <button
                        key={url}
                        onClick={() => setWallpaper(url)}
                        className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${wallpaper === url ? 'border-blue-400 scale-105' : 'border-transparent hover:border-white/40'
                            }`}
                    >
                        <img src={url} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                ))}
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("pages.settings.selectLanguage")}</h3>
            <div className="grid grid-cols-3 gap-3 p-4">
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {t(lang.label)}
                        </option>
                    ))}
                </select>
            </div>
        </div >
    )
}