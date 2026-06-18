"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/** A button that subtly leans toward the cursor — a small, tactile flourish. */
export function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-signal text-coal hover:bg-ieee hover:text-white"
      : "border border-paper/25 text-paper hover:border-signal hover:text-signal";

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
