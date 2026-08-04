"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const TRANSITION =
  "opacity 780ms var(--ease-brand), transform 940ms var(--ease-brand)";

type RevealProps = {
  /** stagger, in ms */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function Reveal({ delay = 0, className, style, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [calm, setCalm] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // reduced motion keeps the fade — it still says "this just arrived" — but drops the travel
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCalm(true);
    }

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.14 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown || calm ? "none" : "translateY(26px)",
        transition: calm ? "opacity 300ms ease" : TRANSITION,
        transitionDelay: calm ? "0ms" : `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
