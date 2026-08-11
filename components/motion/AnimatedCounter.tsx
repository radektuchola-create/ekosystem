"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsapClient";
import { usePrefersReducedMotion } from "@/lib/motion";

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(counter.val)}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [value, suffix, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
