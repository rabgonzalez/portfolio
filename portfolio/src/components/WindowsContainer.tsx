import Window from "./Window"
import { useWindows } from "../context/WindowContext"
import { useEffect, useRef } from "react"

export default function WindowsContainer() {
    const { windows, openWindow } = useWindows()
    const hasInitialized = useRef(false)

    useEffect(() => {
        if (hasInitialized.current) return
        openWindow("profile")
        hasInitialized.current = true

    }, [])

    return (
        <>
            {windows.map(w => (
                <Window key={w.id} instance={w} />
            ))}
        </>
    )
}