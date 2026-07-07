import type { DockApp } from "../types";
import AppIcon from "./AppIcon";

export default function Apps({ apps }: { apps: DockApp[] }) {
  return (
    <nav className="fixed top-4 left-4 pointer-events-none">
      <ul
        className="
            pointer-events-auto
            flex flex-col
            gap-8
          "
      >
        {apps.map(app => (
          <AppIcon
            key={app.appId}
            appId={app.appId}
            icon={app.icon}
            label={app.label}
          />
        ))}
      </ul>
    </nav>
  )
}