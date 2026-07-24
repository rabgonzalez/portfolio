import { BrushCleaning } from 'lucide-react'
import { useWindows } from '../context/WindowContext'

export default function Cleaner({ windowId }: { windowId: string }) {
    const { clearWindows, closeWindow } = useWindows()

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-8 py-6 text-center gap-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500 dark:bg-red-500/70 mb-3">
                <BrushCleaning className="w-7 h-7 text-white" strokeWidth={2} />
            </div>

            <h1 className="text-[30px] font-semibold dark:text-white">
                Clear all windows
            </h1>
            <p className="text-[15px] text-black/60 dark:text-white/60 max-w-[280px] mb-5">
                All open windows will be closed immediately.
            </p>

            <div className="flex flex-col w-full max-w-[220px] gap-2">

                <button
                    className="w-full py-1.5 rounded-md bg-red-500 hover:bg-red-600 dark:text-white text-[13px] font-medium transition-colors"
                    onClick={clearWindows}
                >
                    Clear Windows
                </button>
                <button
                    className="w-full py-1.5 rounded-md bg-blue-500 hover:bg-blue-600 dark:text-white text-[13px] font-medium transition-colors"
                    onClick={() => closeWindow(windowId)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}