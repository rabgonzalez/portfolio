import { TriangleAlert } from 'lucide-react'
import { useWindows } from '../context/WindowContext'

export default function Trash({ windowId }: { windowId: string }) {
    const { clearWindows, closeWindow } = useWindows()

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-8 py-6 text-center gap-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500/15 mb-3">
                <TriangleAlert className="w-7 h-7 text-red-500" strokeWidth={2} />
            </div>

            <h1 className="text-[15px] font-semibold text-white">
                Are you sure you want to clear all windows?
            </h1>
            <p className="text-[13px] text-white/60 max-w-[280px] mb-5">
                This action cannot be undone. All open windows will be closed immediately.
            </p>

            <div className="flex flex-col w-full max-w-[220px] gap-2">
                <button
                    className="w-full py-1.5 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-[13px] font-medium transition-colors"
                    onClick={() => closeWindow(windowId)}
                >
                    Cancel
                </button>
                <button
                    className="w-full py-1.5 rounded-md bg-white/10 hover:bg-white/15 active:bg-white/20 text-red-400 text-[13px] font-medium transition-colors"
                    onClick={clearWindows}
                >
                    Clear Windows
                </button>
            </div>
        </div>
    )
}