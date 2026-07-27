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
import wallpaper1 from "./assets/wallpapers/wallpaper.png";
import wallpaper2 from "./assets/wallpapers/wallpaper2.png";
import wallpaper3 from "./assets/wallpapers/wallpaper3.png";
import wallpaper4 from "./assets/wallpapers/wallpaper4.png";
import wallpaper5 from "./assets/wallpapers/wallpaper5.png";
import wallpaper6 from "./assets/wallpapers/wallpaper6.png";

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

export const WALLPAPERS = [
  wallpaper1,
  wallpaper2,
  wallpaper3,
  wallpaper4,
  wallpaper5,
  wallpaper6,
] as const;

export const languages = [
  { code: "en", label: "languages.english" },
  { code: "es", label: "languages.spanish" },
] as const;
