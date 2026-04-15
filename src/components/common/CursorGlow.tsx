"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);

  // Smooth spring-based following — slow & luxurious like Antigravity
  const springX = useSpring(cursorX, { stiffness: 60, damping: 22, mass: 0.8 });
  const springY = useSpring(cursorY, { stiffness: 60, damping: 22, mass: 0.8 });

  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Detect touch device — skip effect on mobile
    isTouchDevice.current = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    if (isTouchDevice.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      style={{ mixBlendMode: "normal" }}
    >
      {/* Primary large glow orb */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: springX,
          top: springY,
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(8, 145, 178, 0.10) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)",
        }}
      />

      {/* Secondary tighter accent orb */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: springX,
          top: springY,
          width: 180,
          height: 180,
          background:
            "radial-gradient(circle, rgba(20, 199, 245, 0.12) 0%, rgba(20, 199, 245, 0.04) 60%, transparent 80%)",
        }}
      />
    </motion.div>
  );
}
