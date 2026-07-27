import { ConstructionIcon } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black dark:bg-white mb-3">
                <ConstructionIcon className="mx-auto my-4 text-white/70 dark:text-black/70" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-center">Under Construction</h1>
        </div>
    )
}