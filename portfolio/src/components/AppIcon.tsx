import { useWindows } from "../context/WindowContext"
import type { DockApp } from "../types";

export default function AppIcon({ appId, icon: Icon, label }: DockApp) {
  const { openWindow } = useWindows()

  return (
    <li className="group relative">
      <button
        onClick={() => openWindow(appId)}
        className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 hover:bg-white/30 hover:scale-110 transition-all duration-200"
      >
        <Icon size={26} strokeWidth={1.8} className="text-white" />
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white px-2 py-1 whitespace-nowrap">
        {label}
      </span>
    </li>
  )
}