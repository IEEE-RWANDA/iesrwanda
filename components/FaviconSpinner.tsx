"use client";

import { useEffect } from "react";

/**
 * Animates the browser-tab favicon to match the navbar emblem: it spins one
 * full turn over 15s, rests for 15s, and repeats. Favicons can't be animated
 * with CSS, so we redraw the emblem rotated onto a canvas and swap the
 * <link rel="icon"> href a few times a second (only while spinning).
 */
export function FaviconSpinner() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/emblem.png";

    // dedicated link element we own and update
    let link = document.querySelector<HTMLLinkElement>("link#spin-favicon");
    if (!link) {
      link = document.createElement("link");
      link.id = "spin-favicon";
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }

    let raf = 0;
    let startedAt: number | null = null;
    let lastDraw = 0;
    let loaded = false;
    img.onload = () => {
      loaded = true;
    };

    const CYCLE = 30000; // ms
    const SPIN = 15000; // ms of spinning, then rest

    const draw = (angle: number) => {
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate(angle);
      ctx.drawImage(img, -size / 2, -size / 2, size, size);
      ctx.restore();
      link!.href = canvas.toDataURL("image/png");
    };

    const tick = (t: number) => {
      if (startedAt === null) startedAt = t;
      const elapsed = (t - startedAt) % CYCLE;
      // throttle to ~12 fps; only redraw during the spin window
      if (loaded && elapsed < SPIN && t - lastDraw > 80) {
        lastDraw = t;
        const angle = (elapsed / SPIN) * Math.PI * 2;
        draw(angle);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
