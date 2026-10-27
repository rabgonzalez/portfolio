import { useWindows } from "../context/WindowContext";
import type { DockApp } from "../types";

export default function DockIcon({ appId, icon: Icon, label }: DockApp) {
  const { openWindow } = useWindows();

  return (
    <li className="group relative">
      <button
        type="button"
        onClick={() => openWindow(appId)}
        aria-label={label}
        className="mac-dock-icon"
      >
        <Icon size={26} strokeWidth={1.65} />
      </button>
      <span className="mac-tooltip">{label}</span>
    </li>
  );
}
