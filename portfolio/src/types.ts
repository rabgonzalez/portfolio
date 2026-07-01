import { APP_REGISTRY } from "./utils";

export type AppId = keyof typeof APP_REGISTRY;

export type DockApp = { appId: AppId; icon: any; label: string }

export type WindowInstance = {
    id: string
    appId: AppId
    show: boolean
    max: boolean
    zIndex: number
    x: number
    y: number
}

export type WindowContextType = {
    windows: WindowInstance[]
    openWindow: (appId: AppId) => void
    closeWindow: (id: string) => void
    toggleShow: (id: string) => void
    toggleMax: (id: string) => void
    focusWindow: (id: string) => void
}

