import Reveal from "@/components/reveal";
import { TABLE_ROWS } from "@/lib/sectors";

export default function TailoredSection() {
  return (
    <section style={{ padding: "clamp(64px, 8vw, 104px) clamp(16px, 4vw, 48px)" }}>
      <div
        className="mx-auto grid max-w-[1180px] items-start gap-x-14 gap-y-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        <div>
          <Reveal delay={100}>
            <p className="text-[13px] font-medium text-accent">Feito sob medida</p>
          </Reveal>
          <Reveal delay={190}>
            <h2
              className="mt-3.5 max-w-[16ch] font-medium"
              style={{
                fontSize: "clamp(28px, 3.6vw, 48px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              O setor muda, mas o padrão de qualidade continua o mesmo.
            </h2>
          </Reveal>
          <Reveal delay={270}>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.7] text-ink/58">
              Todo projeto parte da mesma base técnica: performance, acessibilidade,
              segurança e dado organizado. O que muda é o vocabulário, o fluxo e as
              metas de cada setor.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={320}
          className="overflow-hidden rounded-card border border-ink/10 bg-card"
        >
          {TABLE_ROWS.map(([left, right]) => (
            <div
              key={left}
              className="grid gap-x-5 gap-y-2 border-b border-ink/8 px-5 py-4 text-[14px]"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
            >
              <span className="text-ink/85">{left}</span>
              <span className="text-ink/55">{right}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
