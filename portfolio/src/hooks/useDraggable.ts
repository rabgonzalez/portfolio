import { useRef, useCallback, useEffect } from 'react'

export function useDraggable(
  onMove: (x: number, y: number) => void,
) {
  const dragState = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 })
  const onMoveRef = useRef(onMove)

    useEffect(() => {
    onMoveRef.current = onMove
  }, [onMove])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const dx = e.clientX - dragState.current.startX
    const dy = e.clientY - dragState.current.startY
    onMoveRef.current(dragState.current.originX + dx, dragState.current.originY + dy)
  }, [])

  const handlePointerUp = useCallback(() => {
    globalThis.removeEventListener('pointermove', handlePointerMove)
    globalThis.removeEventListener('pointerup', handlePointerUp)
  }, [handlePointerMove])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, currentX: number, currentY: number) => {
      // If click comes from window controls, don't start dragging
      if ((e.target as HTMLElement).closest('.window-controls')) return

      dragState.current = {
        startX: e.clientX,
        startY: e.clientY,
        originX: currentX,
        originY: currentY,
      }
      globalThis.addEventListener('pointermove', handlePointerMove)
      globalThis.addEventListener('pointerup', handlePointerUp)
    },
    [handlePointerMove, handlePointerUp]
  )

  useEffect(() => {
    return () => {
      globalThis.removeEventListener('pointermove', handlePointerMove)
      globalThis.removeEventListener('pointerup', handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  return { handlePointerDown }
}