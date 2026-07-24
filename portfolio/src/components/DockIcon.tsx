import { useWindows } from "../context/WindowContext"
import type { DockApp } from "../types";

export default function DockIcon({ appId, icon: Icon, label }: DockApp) {
  const { openWindow } = useWindows()

  return (
    <li className="group relative">
      <button
        onClick={() => openWindow(appId)}
        className="flex items-center justify-center w-14 h-14 rounded-xl bg-black/10 hover:bg-black/30 hover:scale-110 transition-all duration-200"
      >
        <Icon size={26} strokeWidth={1.8} className="text-white" />
      </button>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </li>
  )
}