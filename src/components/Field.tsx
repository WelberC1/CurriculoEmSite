import { useEffect, useRef } from 'react';

// A sea of points seen in perspective: waves roll toward the viewer up to a glowing
// horizon, the cursor lifts and lights the surface, and scroll quiets it behind content.
const COLORS = ['#5b2bc2', '#7c3aed', '#a78bfa', '#d9ceff', '#ffffff'];

export function Field() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, cols = 0, rows = 0, narrow = false;
    const NEAR = 1.3, FAR = 13;

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      narrow = w < 900;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = narrow ? 84 : 160;
      rows = narrow ? 60 : 90;
    };
    build();

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, px: 0, py: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    const onLeave = () => {
      mouse.tx = mouse.ty = -9999;
    };

    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const t = still ? 6 : (now - start) / 1000;
      const scroll = window.scrollY;
      const hero = Math.max(0, 1 - scroll / h);
      const level = 0.22 + 0.78 * hero;

      mouse.x += (mouse.tx - mouse.x) * 0.1;
      mouse.y += (mouse.ty - mouse.y) * 0.1;
      const on = mouse.tx > -9000;
      mouse.px += ((on ? mouse.tx / w - 0.5 : 0) - mouse.px) * 0.04;
      mouse.py += ((on ? mouse.ty / h - 0.5 : 0) - mouse.py) * 0.04;

      const f = w * (narrow ? 0.9 : 0.55);
      const cx = w * 0.5 - mouse.px * 40;
      // The horizon climbs a little as you leave the hero, so the sea flattens behind text.
      const horizon = h * 0.46 + mouse.py * 24 - (1 - hero) * h * 0.12;
      const camH = 1.5;

      ctx.clearRect(0, 0, w, h);

      // Horizon glow: the light the sea reflects.
      const glow = ctx.createRadialGradient(cx, horizon, 0, cx, horizon, w * 0.6);
      glow.addColorStop(0, `rgba(167, 139, 250, ${0.4 * level})`);
      glow.addColorStop(0.35, `rgba(124, 58, 237, ${0.16 * level})`);
      glow.addColorStop(1, 'rgba(124, 58, 237, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const flow = t * 0.9;
      const mR = narrow ? 110 : 180;

      for (let r = rows - 1; r >= 0; r--) {
        const z = NEAR + (FAR - NEAR) * Math.pow(r / (rows - 1), 1.6);
        const depth = Math.min(1, (FAR - z) / (FAR * 0.55)) * Math.min(1, (z - NEAR) / 0.6 + 0.2);
        const zw = z + flow;
        for (let c = 0; c < cols; c++) {
          const u = c / (cols - 1) - 0.5;
          const x = u * (2.2 + z * 1.25);
          let y =
            0.46 * Math.sin(x * 0.55 + zw * 0.42 - t * 0.3) * Math.cos(zw * 0.55 - x * 0.2) +
            0.2 * Math.sin((x - zw) * 1.1 + t * 0.9) +
            0.07 * Math.sin(x * 2.3 + zw * 1.9);

          let sx = cx + (x / z) * f;
          let sy = horizon + ((camH - y) / z) * f * 0.62;
          if (sx < -10 || sx > w + 10 || sy > h + 10) continue;

          const d = Math.hypot(sx - mouse.x, sy - mouse.y);
          const lift = d < mR ? Math.pow(1 - d / mR, 2) : 0;
          if (lift > 0) {
            y += lift * (0.55 + 0.15 * Math.sin(d * 0.06 - t * 5));
            sy = horizon + ((camH - y) / z) * f * 0.62;
            sx += ((sx - mouse.x) / (d || 1)) * lift * 10;
          }

          const k = Math.min(1, Math.max(0, (y + 0.35) / 0.95 + lift * 0.6));
          // Keep the sea calmer behind the hero copy on wide screens.
          const side = narrow ? 1 : 0.55 + 0.45 * Math.min(1, Math.max(0, (sx / w - 0.18) / 0.4));
          const a = depth * (0.32 + 0.9 * k * k) * level * (side * hero + (1 - hero));
          if (a < 0.02) continue;

          const s = Math.max(0.8, (4.2 / z) * (0.6 + 0.8 * k));
          ctx.globalAlpha = Math.min(1, a);
          ctx.fillStyle = COLORS[Math.min(4, Math.floor(k * 4.2))];
          ctx.fillRect(sx - s / 2, sy - s / 2, s, s);
        }
      }
      ctx.globalAlpha = 1;
      if (!still) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const redraw = () => {
      if (still) requestAnimationFrame(draw);
    };
    const onResize = () => {
      build();
      redraw();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', redraw, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    canvas.dataset.ready = 'true';

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', redraw);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} className="field" aria-hidden="true" />;
}
