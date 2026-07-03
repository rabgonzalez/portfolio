import Window from "./Window"
import { useWindows } from "../context/WindowContext"

export default function WindowsContainer() {
    const { windows } = useWindows()
    return (
        <>
            {windows.map(w => (
                <Window key={w.id} instance={w} />
            ))}
        </>
    )
}