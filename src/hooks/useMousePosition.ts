import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

/**
 * Hook to track mouse position within a specific element or globally.
 * Provides X and Y coordinates as MotionValues between -0.5 and 0.5 relative to target dimensions.
 */
export function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize values to range [-0.5, 0.5] for center-aligned parallax
      const valX = (event.clientX / window.innerWidth) - 0.5;
      const valY = (event.clientY / window.innerHeight) - 0.5;
      x.set(valX);
      y.set(valY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return { x, y };
}
