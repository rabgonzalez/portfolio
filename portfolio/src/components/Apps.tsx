import { useTranslation } from "react-i18next";
import type { DockApp } from "../types";
import AppIcon from "./AppIcon";

export default function Apps({ apps }: { apps: DockApp[] }) {
  const { t } = useTranslation();

  return (
    <nav className="fixed left-3 top-3 z-10 sm:left-5 sm:top-5" aria-label="Applications">
      <ul className="flex flex-col gap-3 sm:gap-4">
        {apps.map((app) => (
          <AppIcon key={app.appId} appId={app.appId} icon={app.icon} label={t(app.label)} />
        ))}
      </ul>
    </nav>
  );
}
