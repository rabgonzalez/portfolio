import type { DockApp } from "../types";
import Icon from "./DockIcon";

export default function Dock({ apps }: { apps: DockApp[] }) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <ul className="flex items-end gap-3 bg-white/20 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border border-white/30">
        {apps.map(app => (
          <Icon key={app.appId} appId={app.appId} icon={app.icon} label={app.label} />
        ))}
      </ul>
    </nav>
  )
}