import Image from "next/image";

import Meteors from "@/components/meteors";
import { WHATSAPP_URL } from "@/lib/contact";

/**
 * The frame is taller than the box that reserves space for it, so it hangs past
 * the fold on purpose. `AiSection` pays the difference back in top padding —
 * the two magic numbers are paired and must move together. Both live in
 * `globals.css`, which also re-derives them for phones.
 */
export const HERO_FRAME_BOX = "var(--hero-frame-box)";
export const HERO_FRAME_HEIGHT = "var(--hero-frame-height)";

export default function Hero() {
  return (
    <section
      id="top"
      /* svh, not vh: a mobile URL bar collapsing mid-scroll would otherwise
         resize the hero and shove the overhanging frame around. Below md the
         height becomes a floor, so a long headline in landscape grows the
         section instead of spilling out of it. */
      className="relative flex h-[var(--hero-height)] flex-col items-center text-center max-md:h-auto max-md:min-h-[var(--hero-height)]"
      style={{ padding: "0 clamp(20px, 5vw, 64px)" }}
    >
      <Meteors />

      <div
        className="relative flex min-h-0 flex-1 flex-col items-center justify-center"
        style={{ padding: "min(3vh, 32px) 0 clamp(20px, 4vh, 44px) 0" }}
      >
        <a
          href="#setores"
          className="anim-rise inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-4 py-[7px] text-[14px] transition-colors hover:border-accent/80 active:border-accent/80 max-md:px-[18px] max-md:py-[13px] max-md:text-[15px]"
          style={{ "--dur": "0.7s", "--delay": "0.1s" } as React.CSSProperties}
        >
          <span className="text-accent">&#9670;</span> Conheça o sistema Cerasos{" "}
          <span className="opacity-60">&#8594;</span>
        </a>

        <h1
          className="anim-rise max-w-[20ch] text-balance font-medium text-ink"
          style={
            {
              margin: "min(2.6vh, 22px) 0 0 0",
              fontSize: "var(--hero-title)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              "--dur": "0.95s",
              "--delay": "0.24s",
            } as React.CSSProperties
          }
        >
          Software sob medida para empresas que precisam operar melhor.
        </h1>

        <p
          className="anim-rise max-w-[46ch] text-ink/80"
          style={
            {
              margin: "min(2.2vh, 20px) 0 0 0",
              fontSize: "var(--hero-sub)",
              lineHeight: 1.55,
              "--dur": "0.9s",
              "--delay": "0.42s",
            } as React.CSSProperties
          }
        >
          Site, painel gerencial, ERP, CRM e IA aplicada. Tudo desenvolvido em
          Santa Catarina e entregue como um sistema só.
        </p>

        <div
          className="anim-rise flex justify-center"
          style={
            {
              marginTop: "min(3vh, 26px)",
              "--dur": "0.9s",
              "--delay": "0.56s",
            } as React.CSSProperties
          }
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-ink px-[26px] py-[15px] text-[15px] font-medium text-paper transition-[background-color,transform] duration-[160ms] ease-out hover:bg-accent active:scale-[0.97]"
          >
            Começar um projeto <span className="opacity-55">&#8594;</span>
          </a>
        </div>
      </div>

      <div
        className="relative z-2 w-full max-w-[1180px] shrink-0 grow-0"
        style={{ height: HERO_FRAME_BOX }}
      >
        <div
          className="anim-fade absolute top-0 right-0 left-0 rounded-frame border border-white/90 p-2.5"
          style={
            {
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6))",
              boxShadow:
                "0 0 0 1px rgba(23,17,15,0.07), 0 -10px 40px rgba(255,255,255,0.85), 0 30px 90px rgba(23,17,15,0.14), 0 60px 140px rgba(168,28,28,0.10)",
              "--dur": "1.1s",
              "--delay": "0.72s",
            } as React.CSSProperties
          }
        >
          {/* specular hairline along the top edge */}
          <div
            className="pointer-events-none absolute top-[-1px] right-[12%] left-[12%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)",
            }}
          />
          {/* gloss falling off over the first quarter of the frame */}
          <div
            className="pointer-events-none absolute top-2.5 right-0 left-0 z-2 h-[26%] rounded-t-media"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.34), transparent)",
            }}
          />
          <div
            className="relative w-full overflow-hidden rounded-media"
            style={{ height: HERO_FRAME_HEIGHT }}
          >
            <Image
              src="/screenshots/ai-chat.png"
              alt="Assistente de IA da Cerasos respondendo dentro do painel do sistema"
              fill
              priority
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
