import { useWindows } from "../context/WindowContext";
import type { WindowInstance } from "../types";
import { APP_REGISTRY } from "../utils";
import { useDraggable } from "../hooks/useDraggable";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../hooks/useIsMobile";

const WINDOW_WIDTH = 800;

export default function Window({ instance }: { instance: WindowInstance }) {
  const { closeWindow, toggleMax, focusWindow, moveWindow } = useWindows();
  const { id, appId, max, zIndex, x, y, focus } = instance;
  const { title, component: Content } = APP_REGISTRY[appId];
  const windowRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { handlePointerDown } = useDraggable((newX, newY) => moveWindow(id, newX, newY));

  const dragWindow = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return;

    if (max && windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      const newX = e.clientX - relativeX * WINDOW_WIDTH;
      const newY = rect.top;
      moveWindow(id, newX, newY);
      toggleMax(id);
      handlePointerDown(e, newX, newY);
      return;
    }

    handlePointerDown(e, x, y);
  };

  return (
    <div
      ref={windowRef}
      onPointerDown={() => focusWindow(id)}
      style={max ? { zIndex, top: "1rem", left: "1rem", right: "1rem", bottom: "5.75rem" } : { zIndex, top: y, left: x, width: WINDOW_WIDTH }}
      className={`mac-window ${max ? "is-maximized" : ""} ${focus ? "is-focused" : ""}`}
    >
      <div onPointerDown={dragWindow} style={{ touchAction: "none" }} className="mac-titlebar select-none">
        <div className="window-controls" onPointerDown={(e) => e.stopPropagation()}>
          <button type="button" aria-label="Close" className={`mac-traffic-light mac-close ${focus ? "is-active" : ""}`} onClick={() => focus ? closeWindow(id) : focusWindow(id)} />
          {!isMobile && <button type="button" aria-label="Minimize" className={`mac-traffic-light mac-minimize ${focus ? "is-active" : ""}`} onClick={() => focus ? closeWindow(id) : focusWindow(id)} />}
          <button type="button" aria-label="Maximize" className={`mac-traffic-light mac-maximize ${focus ? "is-active" : ""}`} onClick={() => focus ? toggleMax(id) : focusWindow(id)} />
        </div>
        <span className="mac-window-title">{t(title)}</span>
      </div>

      <div className="mac-window-content">
        <Content windowId={id} />
      </div>
    </div>
  );
}
