import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";
import { languages, WALLPAPERS } from "../utils";
import { Moon, Sun } from "lucide-react";

export default function Settings() {
    const { wallpaper, setWallpaper, language, setLanguage, theme, setTheme } = useSettings();
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
            <h3 className="text-lg font-semibold mb-2">{t("pages.settings.selectTheme")}</h3>
            <div className="flex items-center gap-3 p-4">
                <Sun className="w-4 h-4 text-yellow-400" />

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    role="switch"
                    aria-checked={theme === "dark"}
                    aria-label={t("pages.settings.selectTheme")}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${theme === "dark" ? "bg-blue-500" : "bg-neutral-300"
                        }`}
                >
                    <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${theme === "dark" ? "translate-x-6" : "translate-x-0"
                            }`}
                    />
                </button>

                <Moon className="w-4 h-4 text-blue-300" />
            </div>
        </div >
    )
}