"use client";

import { useEffect, useState } from "react";

import BrandMark from "@/components/brand-mark";
import { WHATSAPP_URL } from "@/lib/contact";

const NAV = [
  { href: "#ia", label: "IA aplicada" },
  { href: "#setores", label: "Setores" },
  { href: "#regiao", label: "Santa Catarina" },
];

export default function SiteHeader() {
  const [floating, setFloating] = useState(false);
  /** A page loaded already scrolled would otherwise play the whole morph on arrival. */
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const settle = requestAnimationFrame(() => setSettled(true));
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(settle);
    };
  }, []);

  return (
    <div
      className="sticky top-0 z-60 box-border h-[61px]"
      style={{
        padding: floating ? "14px clamp(16px, 4vw, 48px)" : "0px",
        transition: settled ? "padding 420ms var(--ease-brand)" : "none",
      }}
    >
      <header
        className="mx-auto flex items-center justify-between gap-5 backdrop-blur-[14px]"
        style={{
          padding: floating
            ? "10px 12px 10px 20px"
            : "14px clamp(16px, 4vw, 48px)",
          borderRadius: floating ? "999px" : "0px",
          maxWidth: floating ? "1000px" : "100%",
          background: floating
            ? "rgba(255,255,255,0.82)"
            : "rgba(247,245,242,0.9)",
          border: `1px solid ${floating ? "rgba(23,17,15,0.1)" : "rgba(23,17,15,0)"}`,
          boxShadow: floating
            ? "0 14px 40px rgba(23,17,15,0.12)"
            : "0 1px 0 rgba(23,17,15,0.07)",
          transition: settled
            ? "padding 420ms var(--ease-brand), border-radius 420ms var(--ease-brand), max-width 420ms var(--ease-brand), background 300ms ease, border-color 300ms ease, box-shadow 420ms ease"
            : "none",
        }}
      >
        <a href="#top" aria-label="Cerasos, ir para o início">
          <BrandMark size={18} />
        </a>

        <nav className="hidden gap-7 text-[14px] text-ink/70 sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-paper transition-[background-color,transform] duration-[160ms] ease-out hover:bg-accent active:scale-[0.97]"
        >
          Conversar
        </a>
      </header>
    </div>
  );
}
