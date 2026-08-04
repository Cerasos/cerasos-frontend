import Image from "next/image";

import Reveal from "@/components/reveal";

/** Clears the hero frame's overhang — paired with `HERO_FRAME_BOX`/`HERO_FRAME_HEIGHT`. */
const HERO_OVERHANG =
  "calc(min(29.4vw, 51vh, 420px) + clamp(36px, 4.5vw, 72px))";

export default function AiSection() {
  return (
    <section className="relative" style={{ paddingTop: HERO_OVERHANG }}>
      <div
        id="ia"
        className="bg-night text-paper"
        style={{ padding: "clamp(64px, 8vw, 104px) clamp(16px, 4vw, 48px)" }}
      >
        <div className="mx-auto max-w-[1180px] text-center">
          <Reveal delay={100}>
            <p className="text-[13px] font-medium text-rose">
              Inteligência artificial aplicada
            </p>
          </Reveal>

          <Reveal delay={190}>
            <h2
              className="mx-auto mt-3.5 max-w-[22ch] font-medium"
              style={{
                fontSize: "clamp(28px, 3.6vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              A IA trabalha dentro do sistema, não em outra aba.
            </h2>
          </Reveal>

          <Reveal delay={280}>
            <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-[1.7] text-paper/60">
              Os agentes atendem no WhatsApp, qualificam o lead, atualizam o CRM
              e devolvem o resumo pronto. Tudo dentro do mesmo sistema, com os
              dados do seu negócio.
            </p>
          </Reveal>

          <Reveal delay={360} className="mt-10">
            <div className="relative aspect-[16/8.6] overflow-hidden rounded-media bg-paper">
              <Image
                src="/screenshots/hero-suite.png"
                alt="Painel gerencial da Cerasos com faturamento, funil de vendas e estoque em uma só tela"
                fill
                sizes="(max-width: 1180px) 100vw, 1180px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
