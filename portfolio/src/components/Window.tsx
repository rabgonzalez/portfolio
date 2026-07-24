import { useWindows } from '../context/WindowContext'
import type { WindowInstance } from '../types'
import { APP_REGISTRY } from '../utils'
import { useDraggable } from '../hooks/useDraggable'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const WINDOW_WIDTH = 800

export default function Window({ instance }: { instance: WindowInstance }) {
    const { closeWindow, toggleMax, focusWindow, moveWindow } = useWindows()
    const { id, appId, max, zIndex, x, y, focus } = instance
    const { title, component: Content } = APP_REGISTRY[appId]
    const windowRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()

    const { handlePointerDown } = useDraggable((newX, newY) => moveWindow(id, newX, newY))

    const dragWindow = (e: React.PointerEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).closest(".window-controls")) return;

        if (max) {
            const rect = windowRef.current!.getBoundingClientRect()

            // Relative position of cursor from window (0 to 1)
            const relativeX = (e.clientX - rect.left) / rect.width

            const newX = e.clientX - relativeX * WINDOW_WIDTH
            const newY = rect.top

            moveWindow(id, newX, newY)
            toggleMax(id)
            handlePointerDown(e, newX, newY)
            return
        }
        handlePointerDown(e, x, y)
    }

    return (
        <div
            ref={windowRef}
            onPointerDown={() => focusWindow(id)}
            style={
                max
                    ? { zIndex, top: '1rem', left: '1rem', right: '1rem', bottom: '6rem' }
                    : { zIndex, top: y, left: x, width: WINDOW_WIDTH }
            }
            className={`window bg-white/40 dark:bg-black/70 backdrop-blur-xl fixed  rounded-xl shadow-2xl border border-white/20 dark:border-white/20 overflow-hidden transition-[width,height] duration-200 ${max ? '' : `w-[${WINDOW_WIDTH}px]`}`}
        >
            <div
                onPointerDown={dragWindow}
                className="window-titlebar flex items-center gap-2 px-4 py-2 bg-black/10 border-b border-white/20 cursor-move select-none"
            >
                <div className="window-controls flex items-center gap-2">
                    <button className="w-3 h-3 rounded-full bg-red-500" onClick={() => closeWindow(id)} />
                    <button className="w-3 h-3 rounded-full bg-yellow-500" onClick={() => toggleMax(id)} />
                    <button className="w-3 h-3 rounded-full bg-green-500" onClick={() => closeWindow(id)} />
                </div>
                <span className="ml-2 text-sm text-black/80 dark:text-white/80 font-medium" style={{ fontWeight: 900 }}>{t(title)}</span>
            </div>
            <div className="window-content p-6 text-black/80 dark:text-white/80 overflow-auto" style={max ? { maxHeight: 'calc(100% - 40px)' } : {}}>
                <Content windowId={id} />
            </div>
        </div>
    )
}