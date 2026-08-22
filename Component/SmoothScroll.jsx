"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Smoothness intensity (Lower = smoother/slower, default 0.1)
        duration: 2.5, // Scroll animation duration in seconds
        smoothWheel: true,
        wheelMultiplier: 1.2, // Lower multiplier = slower overall scroll speed
      }}
    >
      {children}
    </ReactLenis>
  );
}