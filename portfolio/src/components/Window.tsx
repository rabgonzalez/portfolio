import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type WindowProps = {
    title?: string
    children?: ReactNode
}

export default function Window({ title, children }: WindowProps) {
    const [show, setShow] = useState<boolean>(true);
    const [max, setMax] = useState<boolean>(false);

    if (show) return (
        <div className={`window bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden mx-auto transition-all duration-200 ${max
            ? 'fixed top-4 left-4 right-4 bottom-28'
            : 'max-w-3xl mt-10'
            }`}>
            <div className="window-titlebar flex items-center gap-2 px-4 py-2 bg-white/10 border-b border-white/20">
                <Link to='/' className="w-3 h-3 rounded-full bg-red-500" />
                <button className="w-3 h-3 rounded-full bg-yellow-500" onClick={() => setMax(!max)} />
                <button className="w-3 h-3 rounded-full bg-green-500" onClick={() => setShow(!show)} />
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