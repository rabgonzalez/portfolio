import { useSettings } from "../context/SettingsContext";
import { WALLPAPERS } from "../utils";

export default function Settings() {
    const { wallpaper, setWallpaper } = useSettings();

    return (
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
    )
}