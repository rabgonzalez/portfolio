import {
  Briefcase,
  BrushCleaning,
  Folder,
  Mail,
  Settings as SettingsIcon,
  UserRound,
} from "lucide-react";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import type { DockApp } from "./types";
import Cleaner from "./pages/Cleaner";

export const DOCK_APPS: DockApp[] = [
  { appId: "profile", icon: UserRound, label: "apps.profile" },
  { appId: "experience", icon: Briefcase, label: "apps.experience" },
  { appId: "projects", icon: Folder, label: "apps.projects" },
  { appId: "contact", icon: Mail, label: "apps.contact" },
  { appId: "settings", icon: SettingsIcon, label: "apps.settings" },
];

export const APPS: DockApp[] = [
  { appId: "cleaner", icon: BrushCleaning, label: "apps.cleaner" },
  ...DOCK_APPS,
];

export const APP_REGISTRY = {
  cleaner: { title: "apps.cleaner", component: Cleaner },
  profile: { title: "apps.profile", component: Profile },
  experience: { title: "apps.experience", component: Experience },
  projects: { title: "apps.projects", component: Projects },
  contact: { title: "apps.contact", component: Contact },
  settings: { title: "apps.settings", component: Settings },
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

export const languages = [
  { code: "en", label: "languages.english" },
  { code: "es", label: "languages.spanish" },
] as const;
