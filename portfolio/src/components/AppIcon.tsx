import { useWindows } from "../context/WindowContext";
import type { DockApp } from "../types";

export default function AppIcon({ appId, icon: Icon, label }: DockApp) {
  const { openWindow } = useWindows();

  return (
    <li className="group relative">
      <button
        type="button"
        onClick={() => openWindow(appId)}
        aria-label={label}
        className="mac-app-icon"
      >
        <Icon size={24} strokeWidth={1.7} />
      </button>
      <span className="mac-app-label">{label}</span>
    </li>
  );
}
