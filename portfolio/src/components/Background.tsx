import { useSettings } from "../context/SettingsContext";

export default function Background() {
    const { wallpaper } = useSettings();

    return (
        <div id="background" style={{ backgroundImage: `url('${wallpaper}')` }} />
    )
}