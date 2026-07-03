import {
  Briefcase,
  Folder,
  Mail,
  Settings as SettingsIcon,
  Trash2,
  UserRound,
} from "lucide-react";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import type { DockApp } from "./types";

export const DOCK_APPS: DockApp[] = [
  { appId: "profile", icon: UserRound, label: "Profile" },
  { appId: "experience", icon: Briefcase, label: "Experience" },
  { appId: "projects", icon: Folder, label: "Projects" },
  { appId: "contact", icon: Mail, label: "Contact" },
  { appId: "settings", icon: SettingsIcon, label: "Settings" },
];

export const APPS: DockApp[] = [
  { appId: "trash", icon: Trash2, label: "Trash" },
  ...DOCK_APPS,
];

export const APP_REGISTRY = {
  trash: { title: "Trash", component: null },
  profile: { title: "Profile", component: Profile },
  experience: { title: "Experience", component: Experience },
  projects: { title: "Projects", component: Projects },
  contact: { title: "Contact", component: Contact },
  settings: { title: "Settings", component: Settings },
} as const;

const wallpaper = "/wallpapers";

export const WALLPAPERS = [
  wallpaper + "/wallpaper.png",
  wallpaper + "/wallpaper2.png",
  wallpaper + "/wallpaper3.png",
  wallpaper + "/wallpaper4.png",
  wallpaper + "/wallpaper5.png",
  wallpaper + "/wallpaper6.png",
] as const;
