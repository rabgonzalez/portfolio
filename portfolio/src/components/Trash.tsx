import { Trash2 } from "lucide-react"
import { useWindows } from "../context/WindowContext"

export default function Trash() {
    const { clearWindows } = useWindows()

    return (
        <li className="group relative">
            <button
                onClick={() => clearWindows()}
                className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 hover:bg-white/30 hover:scale-110 transition-all duration-200"
            >
                <Trash2 size={26} strokeWidth={1.8} className="text-white" />
            </button>

            <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white px-2 py-1 whitespace-nowrap">
                Trash
            </span>
        </li>
    )
}