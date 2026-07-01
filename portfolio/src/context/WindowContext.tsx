import { createContext, useContext, useState, ReactNode } from 'react'
import type { WindowContextType, WindowInstance, AppId } from '../types'

const WindowContext = createContext<WindowContextType | null>(null)

let nextZ = 1

export function WindowProvider({ children }: { children: ReactNode }) {
    const [windows, setWindows] = useState<WindowInstance[]>([])

    const openWindow = (appId: AppId) => {
        const id = crypto.randomUUID()
        setWindows(prev => {
            const offset = (prev.length % 8) * 30
            return [
                ...prev,
                { id, appId, show: true, max: false, zIndex: nextZ++, x: 100 + offset, y: 80 + offset },
            ]
        })
    }

    const closeWindow = (id: string) =>
        setWindows(prev => prev.filter(w => w.id !== id))

    const toggleShow = (id: string) =>
        setWindows(prev => prev.map(w => (w.id === id ? { ...w, show: !w.show } : w)))

    const toggleMax = (id: string) =>
        setWindows(prev => prev.map(w => (w.id === id ? { ...w, max: !w.max } : w)))

    const focusWindow = (id: string) =>
        setWindows(prev => prev.map(w => (w.id === id ? { ...w, zIndex: nextZ++ } : w)))

    return (
        <WindowContext.Provider value={{ windows, openWindow, closeWindow, toggleShow, toggleMax, focusWindow }}>
            {children}
        </WindowContext.Provider>
    )
}

export function useWindows() {
    const ctx = useContext(WindowContext)
    if (!ctx) throw new Error('useWindows debe usarse dentro de WindowProvider')
    return ctx
}