import { useTranslation } from "react-i18next";
import type { DockApp } from "../types";
import Icon from "./DockIcon";

export default function Dock({ apps }: { apps: DockApp[] }) {
  const { t } = useTranslation();

  return (
    <nav className="mac-dock" aria-label="Application dock">
      <ul className="flex items-end gap-1.5 sm:gap-2">
        {apps.map((app) => (
          <Icon key={app.appId} appId={app.appId} icon={app.icon} label={t(app.label)} />
        ))}
      </ul>
    </nav>
  );
}
