import { useWindows } from '../context/WindowContext'
import type { WindowInstance } from '../types'
import { APP_REGISTRY } from '../utils'

export default function Window({ instance }: { instance: WindowInstance }) {
    const { closeWindow, toggleShow, toggleMax, focusWindow } = useWindows()
    const { id, appId, show, max, zIndex, x, y } = instance
    const { title, component: Content } = APP_REGISTRY[appId]

    if (!show) return null

    return (
        <div
            onMouseDown={() => focusWindow(id)}
            style={
                max
                    ? { zIndex, top: '1rem', left: '1rem', right: '1rem', bottom: '6rem' }
                    : { zIndex, top: y, left: x }
            }
            className={`window fixed bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-200 ${max ? '' : 'w-[600px]'
                }`}
        >
            <div className="window-titlebar flex items-center gap-2 px-4 py-2 bg-white/10 border-b border-white/20 cursor-move">
                <button className="w-3 h-3 rounded-full bg-red-500" onClick={() => closeWindow(id)} />
                <button className="w-3 h-3 rounded-full bg-yellow-500" onClick={() => toggleMax(id)} />
                <button className="w-3 h-3 rounded-full bg-green-500" onClick={() => toggleShow(id)} />
                <span className="ml-2 text-sm text-white/80 font-medium">{title}</span>
            </div>
            <div className="window-content p-6 text-white overflow-auto" style={max ? { maxHeight: 'calc(100% - 40px)' } : {}}>
                <Content />
            </div>
        </div>
    )
}