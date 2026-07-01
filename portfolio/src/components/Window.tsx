import type { ReactNode } from 'react'

type WindowProps = {
    title?: string
    children?: ReactNode
}

export default function Window({ title, children }: WindowProps) {
    return (
        <div className="window bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden max-w-3xl mx-auto mt-10">
            <div className="window-titlebar flex items-center gap-2 px-4 py-2 bg-white/10 border-b border-white/20">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                {title && (
                    <span className="ml-2 text-sm text-white/80 font-medium">{title}</span>
                )}
            </div>

            <div className="window-content p-6 text-white">
                {children}
            </div>
        </div>
    )
}