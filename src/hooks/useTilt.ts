import { useRef } from "react";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

/** Very subtle 3D tilt on hover — desktop, motion-safe only. */
export function useTilt<T extends HTMLElement>(strength = 5) {
  const ref = useRef<T | null>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || isTouchDevice() || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-6px)`;
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return { ref, onPointerMove, onPointerLeave } as const;
}
