import { useEffect, useRef } from "react";
import logo from "@/assets/resonance-logo.jpg";

// Downscaled for fast pixel processing; the canvas is then scaled up via CSS.
const PROCESS_WIDTH = 640;

/**
 * Renders the real Resonance Diagnostic logo — same source file as everywhere
 * else on the site — but recoloured for dark surfaces: the navy "diagnostic" /
 * "by Kargill Healthcare LLP" wordmark and vertical line (designed for white
 * backgrounds) become white, exactly as a brand's standard dark-background
 * logo variant would. Shapes, typography and proportions are untouched —
 * only the navy pixels' colour changes. The green wordmark and the red
 * heartbeat accent are left exactly as they are in the source file.
 *
 * Used wherever the logo sits on a dark background (the preloader, the
 * footer) — on light backgrounds (navbar) the source file already has full
 * contrast and should be used directly instead.
 */
export function LogoOnDark({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;

    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      const scale = PROCESS_WIDTH / img.naturalWidth;
      const w = PROCESS_WIDTH;
      const h = Math.round(img.naturalHeight * scale);
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h);

      const frame = ctx.getImageData(0, 0, w, h);
      const px = frame.data;
      for (let i = 0; i < px.length; i += 4) {
        const a = px[i + 3] ?? 0;
        if (a === 0) continue;
        const r = px[i] ?? 0;
        const g = px[i + 1] ?? 0;
        const b = px[i + 2] ?? 0;
        // Navy pixels are clearly blue-dominant; the green wordmark and red
        // heartbeat accent are not, so they pass through unchanged.
        if (b > g + 15 && b > r + 40) {
          px[i] = 255;
          px[i + 1] = 255;
          px[i + 2] = 255;
        }
      }
      ctx.putImageData(frame, 0, 0);
    };
    img.src = logo;

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Resonance Diagnostic by Kargill Healthcare LLP"
    />
  );
}
