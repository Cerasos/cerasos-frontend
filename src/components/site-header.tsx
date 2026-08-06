"use client";

import { useEffect, useState } from "react";

import BrandMark from "@/components/brand-mark";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

const NAV = [
  { href: "#ia", label: "IA aplicada" },
  { href: "#setores", label: "Setores" },
  { href: "#regiao", label: "Santa Catarina" },
];

export default function SiteHeader() {
  const [floating, setFloating] = useState(false);
  /** A page loaded already scrolled would otherwise play the whole morph on arrival. */
  const [settled, setSettled] = useState(false);
  /** Only reachable below `sm`, where the inline nav is hidden. */
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;

    document.body.dataset.menuOpen = "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    /** A rotation into landscape can put the inline nav back on screen. */
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      delete document.body.dataset.menuOpen;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  /**
   * The panel locks body scroll, so the anchor's own jump would be swallowed.
   * Close first, then scroll on the frame after the lock is gone.
   */
  const goToSection = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuOpen(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document.querySelector(href)?.scrollIntoView({ block: "start" }),
      ),
    );
  };

  return (
    <div
      className="sticky top-0 z-60 box-border h-[61px]"
      style={{
        padding: floating ? "14px clamp(16px, 4vw, 48px)" : "0px",
        transition: settled ? "padding 420ms var(--ease-brand)" : "none",
      }}
    >
      {/* before the header in the DOM so the bar keeps painting over it */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className="fixed inset-0 flex flex-col justify-between px-6 pt-[84px] pb-10 sm:hidden"
        style={{
          background: "rgba(247,245,242,0.97)",
          backdropFilter: "blur(18px)",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "none" : "translateY(-12px)",
          pointerEvents: menuOpen ? "auto" : "none",
          transition:
            "opacity 240ms ease, transform 420ms var(--ease-brand), visibility 0s linear " +
            (menuOpen ? "0s" : "240ms"),
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        <nav className="flex flex-col">
          {NAV.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={goToSection(item.href)}
              className="flex items-center gap-3 border-b border-ink/8 py-[18px] text-[26px] font-medium tracking-[-0.03em] active:text-accent"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "none" : "translateY(10px)",
                transition:
                  "opacity 420ms ease, transform 520ms var(--ease-brand)",
                transitionDelay: menuOpen ? `${90 + index * 70}ms` : "0ms",
              }}
            >
              <span className="text-[12px] text-accent">&#9670;</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className="flex flex-col gap-3 text-[15px] text-ink/60"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 420ms ease",
            transitionDelay: menuOpen ? "300ms" : "0ms",
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 active:text-accent"
          >
            WhatsApp
          </a>
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="py-1 active:text-accent">
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="py-1 active:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

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

        {/* Left as flat siblings, not wrapped in a row: below sm the hidden nav
            would strand this in the middle, so `ml-auto` pulls it beside the
            menu button — and at sm and up nothing about the bar changes. */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-paper transition-[background-color,transform] duration-[160ms] ease-out hover:bg-accent active:scale-[0.97] max-sm:ml-auto max-md:px-[18px] max-md:py-[11px]"
        >
          Conversar
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="-mx-2 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors active:bg-ink/6 sm:hidden"
        >
          <span className="relative block h-[11px] w-[19px]">
            <span
              className="absolute left-0 block h-[1.5px] w-full rounded-full bg-ink"
              style={{
                top: menuOpen ? "5px" : "0px",
                transform: menuOpen ? "rotate(45deg)" : "none",
                transition:
                  "top 200ms var(--ease-brand), transform 260ms var(--ease-brand) 120ms",
              }}
            />
            <span
              className="absolute left-0 block h-[1.5px] w-full rounded-full bg-ink"
              style={{
                top: menuOpen ? "5px" : "10px",
                transform: menuOpen ? "rotate(-45deg)" : "none",
                transition:
                  "top 200ms var(--ease-brand), transform 260ms var(--ease-brand) 120ms",
              }}
            />
          </span>
        </button>
      </header>
    </div>
  );
}
