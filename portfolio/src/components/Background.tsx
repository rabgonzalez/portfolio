import { useEffect, useState } from "react";
import { useSettings } from "../context/SettingsContext";
import DEFAULT_WALLPAPER from "../assets/wallpapers/wallpaper.png";

function preloadImage(src: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Unable to load wallpaper: ${src}`));
    image.src = src;
  });
}

export default function Background() {
  const { wallpaper } = useSettings();
  const [current, setCurrent] = useState(DEFAULT_WALLPAPER);
  const [pending, setPending] = useState<string | null>(null);
  const [pendingLoaded, setPendingLoaded] = useState(false);

  // Always validate the persisted/current wallpaper before displaying it.
  // This prevents a stale localStorage value from leaving the app with a blank background.
  useEffect(() => {
    let active = true;

    // Cancel any previous transition immediately.
    setPending(null);
    setPendingLoaded(false);

    preloadImage(wallpaper)
      .then(() => {
        if (!active) return;

        if (wallpaper === current) return;
        setPending(wallpaper);
        setPendingLoaded(true);
      })
      .catch(() => {
        if (!active) return;

        // If a previously saved URL is no longer valid, silently recover to
        // the bundled wallpaper instead of showing a broken/empty background.
        setPending(null);
        setPendingLoaded(false);
        localStorage.setItem("wallpaper", DEFAULT_WALLPAPER);
        setCurrent(DEFAULT_WALLPAPER);
      });

    return () => {
      active = false;
    };
  }, [wallpaper]);

  useEffect(() => {
    if (!pending || !pendingLoaded) return;

    const timer = window.setTimeout(() => {
      setCurrent(pending);
      setPending(null);
      setPendingLoaded(false);
    }, 520);

    return () => window.clearTimeout(timer);
  }, [pending, pendingLoaded]);

  return (
    <div id="background" aria-hidden="true">
      <div
        className="background-layer background-current"
        style={{ backgroundImage: `url(${current})` }}
      />
      {pending && (
        <div
          className={`background-layer background-next ${pendingLoaded ? "is-ready" : ""}`}
          style={{ backgroundImage: `url(${pending})` }}
        />
      )}
    </div>
  );
}
