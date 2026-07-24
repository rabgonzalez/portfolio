import { APP_REGISTRY } from "./utils";

export type AppId = keyof typeof APP_REGISTRY;

export type DockApp = { appId: AppId; icon: any; label: string };

export type WindowInstance = {
  id: string;
  appId: AppId;
  max: boolean;
  zIndex: number;
  x: number;
  y: number;
};

export type WindowContextType = {
  windows: WindowInstance[];
  openWindow: (appId: AppId) => void;
  closeWindow: (id: string) => void;
  toggleMax: (id: string) => void;
  focusWindow: (id: string) => void;
  clearWindows: () => void;
  moveWindow: (id: string, x: number, y: number) => void;
};

export type skillType = {
  name: string;
  logo_url: string;
  color: string;
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: skillType[];
  codeUrl: string;
  imageUrl?: string;
};