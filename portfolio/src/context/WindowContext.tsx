import { createContext, useContext, useState, type ReactNode } from 'react'
import type { WindowContextType, WindowInstance, AppId } from '../types'
import { useIsMobile } from '../hooks/useIsMobile'

const WindowContext = createContext<WindowContextType | null>(null)

let nextZ = 1

export function WindowProvider({ children }: { children: ReactNode }) {
    const [windows, setWindows] = useState<WindowInstance[]>([])
    const isMobile = useIsMobile()

    const openWindow = (appId: AppId) => {
        const id = crypto.randomUUID()
        setWindows(prev => {
            const offset = (prev.length % 15) * 30
            return [
                ...prev,
                { id, appId, show: true, max: isMobile, zIndex: nextZ++, x: 100 + offset, y: 20 + offset, focus: true },
            ]
        })
    }

    const closeWindow = (id: string) =>
        setWindows(prev => prev.filter(w => w.id !== id))

    const toggleMax = (id: string) => {
        if (isMobile) return
        setWindows(prev => prev.map(w => (w.id === id ? { ...w, max: !w.max } : w)))
    }

    const focusWindow = (id: string) =>
        setWindows(prev => prev.map(w => (w.id === id ? { ...w, zIndex: nextZ++, focus: true } : { ...w, focus: false })))

    const clearWindows = () => setWindows([])

    const moveWindow = (id: string, x: number, y: number) => {
        setWindows(prev =>
            prev.map(w => (w.id === id ? { ...w, x, y } : w))
        )
    }

    return (
        <WindowContext.Provider value={{ windows, openWindow, closeWindow, toggleMax, focusWindow, clearWindows, moveWindow }}>
            {children}
        </WindowContext.Provider>
    )
}

export function useWindows() {
    const ctx = useContext(WindowContext)
    if (!ctx) throw new Error('useWindows must be used inside WindowProvider')
    return ctx
}