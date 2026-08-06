"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TransitionEvent } from "react";

import Reveal from "@/components/reveal";
import { SECTORS } from "@/lib/sectors";

const N = SECTORS.length;
/** Two buffer cards up front, so every pos in [-1, N] has real cards on both sides. */
const SLIDES = 2 * N + 3;
const GAP = 20;
const TRACK_TRANSITION = "transform 700ms var(--ease-brand)";

/**
 * Fractional below `md`: a phone shows one card plus a slice of each neighbour,
 * which is what says "this slides" without an instruction. 900px and up is
 * untouched.
 */
const visibleFor = (width: number) => (width < 768 ? 1.4 : width < 900 ? 1 : 3);
/** How far a finger must travel before the drag counts as a swipe. */
const SWIPE_THRESHOLD = 44;

export default function SectorsCarousel() {
  const [pos, setPos] = useState(0);
  const [visible, setVisible] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(pos);
  posRef.current = pos;
  const swipe = useRef<{ x: number; y: number; horizontal: boolean | null } | null>(
    null,
  );
  /** Set by a swipe so the touch that ends on a side card doesn't also select it. */
  const swiped = useRef(false);

  useEffect(() => {
    const onResize = () => setVisible(visibleFor(window.innerWidth));
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const step = (dir: number) => setPos((p) => p + dir);

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    swiped.current = false;
    swipe.current = { x: touch.clientX, y: touch.clientY, horizontal: null };
  };

  /** Lock to one axis on the first few pixels, so a vertical drag still scrolls. */
  const onTouchMove = (event: React.TouchEvent) => {
    const start = swipe.current;
    if (!start || start.horizontal !== null) return;
    const touch = event.touches[0];
    const dx = Math.abs(touch.clientX - start.x);
    const dy = Math.abs(touch.clientY - start.y);
    if (dx > 8 || dy > 8) start.horizontal = dx > dy;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = swipe.current;
    swipe.current = null;
    if (!start?.horizontal) return;
    const dx = event.changedTouches[0].clientX - start.x;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    swiped.current = true;
    step(dx < 0 ? 1 : -1);
  };

  /**
   * pos and pos + N render an identical window, so rebasing into range with the
   * transition switched off is invisible.
   */
  const onTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    // card transforms bubble up here too — only the track's own slide should rebase
    if (event.target !== trackRef.current || event.propertyName !== "transform") {
      return;
    }
    const p = posRef.current;
    if (p >= N || p < 0) {
      const track = trackRef.current;
      if (track) track.style.transition = "none";
      setPos(((p % N) + N) % N);
      requestAnimationFrame(() => {
        if (trackRef.current) trackRef.current.style.transition = TRACK_TRANSITION;
      });
    }
  };

  const ratio = SLIDES / visible;
  const trackWidth = `calc(${(ratio * 100).toFixed(4)}% + ${(GAP * (ratio - 1)).toFixed(4)}px)`;
  // cqw resolves against the viewport-sized wrapper, so the slide can ride on
  // `transform` (composited) instead of `margin-left` (layout every frame)
  const trackOffset = `calc(-1 * ${pos + 2 - (visible - 1) / 2} * ((100cqw - ${(visible - 1) * GAP}px) / ${visible} + ${GAP}px))`;
  const current = ((pos % N) + N) % N;

  return (
    <section
      id="setores"
      className="bg-paper-alt"
      style={{ padding: "clamp(64px, 8vw, 104px) clamp(16px, 4vw, 48px)" }}
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal
          delay={100}
          className="grid items-start gap-x-14 gap-y-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          <div>
            <p className="text-[13px] font-medium text-accent">Setores que atendemos</p>
            <h2
              className="mt-3.5 max-w-[14ch] font-medium"
              style={{
                fontSize: "clamp(28px, 3.6vw, 48px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              Cada negócio com uma vitrine própria.
            </h2>
          </div>
          <p className="max-w-[52ch] text-[15px] leading-[1.7] text-ink/60 max-md:text-[16px] max-md:text-ink/65">
            Os templates mudam, mas o núcleo é o mesmo: site rápido, painel de controle,
            integrações e o fluxo de venda que o setor realmente usa.
          </p>
        </Reveal>

        <Reveal
          delay={220}
          className="mt-9 flex items-center justify-between gap-4"
        >
          <p className="text-[13px] text-ink/50" aria-live="polite">
            {String(current + 1).padStart(2, "0")} / {String(N).padStart(2, "0")} setores
          </p>
          <div className="flex gap-2 max-md:gap-2.5">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Setor anterior"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-[16px] transition-[color,border-color,transform] duration-[160ms] ease-out hover:border-accent hover:text-accent active:scale-[0.94] max-md:size-11"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Próximo setor"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-[16px] transition-[color,border-color,transform] duration-[160ms] ease-out hover:border-accent hover:text-accent active:scale-[0.94] max-md:size-11"
            >
              &#8594;
            </button>
          </div>
        </Reveal>

        <Reveal
          delay={300}
          className="mt-2"
          style={{
            overflowX: "clip",
            overflowY: "visible",
            padding: "30px 0",
            containerType: "inline-size",
          }}
        >
          <div
            ref={trackRef}
            onTransitionEnd={onTrackTransitionEnd}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="swipe-x flex items-center"
            style={{
              gap: GAP,
              width: trackWidth,
              transform: `translate3d(${trackOffset}, 0, 0)`,
              transition: TRACK_TRANSITION,
            }}
          >
            {Array.from({ length: SLIDES }, (_, k) => {
              const sector = SECTORS[(((k - 2) % N) + N) % N];
              const center = k === pos + 2;
              // the peeking neighbours on a phone stay near full size — shrink
              // them like the three-up desktop row and the slice reads as debris
              const scale = center ? 1 : visible >= 3 ? 0.78 : visible > 1 ? 0.88 : 0.86;

              return (
                <article
                  key={k}
                  onClick={
                    center
                      ? undefined
                      : () => {
                          if (swiped.current) return;
                          step(k - (pos + 2));
                        }
                  }
                  aria-hidden={!center}
                  className="min-w-0 overflow-hidden rounded-card bg-card"
                  style={{
                    flex: `0 0 calc((100% - ${(SLIDES - 1) * GAP}px) / ${SLIDES})`,
                    cursor: center ? "default" : "pointer",
                    border: `1px solid ${center ? "rgba(168,28,28,0.4)" : "rgba(23,17,15,0.08)"}`,
                    boxShadow: center
                      ? "0 26px 60px rgba(23,17,15,0.16)"
                      : "0 4px 14px rgba(23,17,15,0.05)",
                    transform: `scale(${scale})`,
                    opacity: center ? 1 : 0.5,
                    zIndex: center ? 3 : 1,
                    transition:
                      "transform 700ms var(--ease-brand), opacity 600ms ease, box-shadow 700ms ease, border-color 300ms ease",
                  }}
                >
                  <div className="relative aspect-[16/11] bg-shot">
                    <Image
                      src={sector.image}
                      alt={center ? sector.alt : ""}
                      fill
                      sizes="(max-width: 900px) 86vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="border-t border-ink/7 px-[18px] pt-4 pb-5">
                    <p className="text-[12px] font-medium text-accent">{sector.kicker}</p>
                    <p className="mt-1.5 text-[18px] font-medium tracking-[-0.015em]">
                      {sector.name}
                    </p>
                    <p
                      className="mt-1.5 line-clamp-2 text-[13px] leading-[1.6] text-ink/55"
                      style={{ minHeight: "calc(2 * 1.6 * 13px)" }}
                    >
                      {sector.desc}
                    </p>
                    {/* the row is always reserved — animating its height would
                        resize the whole track every time the centre changes */}
                    <div className="mt-3 flex h-10 items-center overflow-hidden">
                      <span
                        className="text-[13px] font-medium text-accent"
                        style={{
                          opacity: center ? 1 : 0,
                          transform: center ? "none" : "translateY(6px)",
                          transition: center
                            ? "opacity 380ms ease 200ms, transform 380ms var(--ease-brand) 200ms"
                            : "opacity 200ms ease, transform 200ms var(--ease-brand)",
                        }}
                      >
                        Ver o que entregamos &#8594;
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
