import Reveal from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/contact";

export default function FinalCta() {
  return (
    <section
      id="contato"
      className="flex flex-col items-center justify-center gap-[22px] border-t border-ink/7 text-center"
      style={{
        minHeight: "min(78vh, 720px)",
        padding: "clamp(104px, 13vw, 180px) clamp(16px, 4vw, 48px)",
      }}
    >
      <Reveal delay={100}>
        <h2
          className="max-w-[22ch] font-medium"
          style={{
            fontSize: "clamp(32px, 4.6vw, 62px)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
          }}
        >
          Software sob medida,{" "}
          <span className="text-accent">do jeito que a sua empresa trabalha.</span>
        </h2>
      </Reveal>

      <Reveal delay={210}>
        <p className="max-w-[50ch] text-[15px] leading-[1.7] text-ink/58">
          Conte qual parte da operação precisa funcionar melhor. Devolvemos escopo,
          prazo e um protótipo navegável para você testar.
        </p>
      </Reveal>

      <Reveal delay={300} className="mt-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-paper transition-[background-color,transform] duration-[160ms] ease-out hover:bg-accent active:scale-[0.97]"
        >
          Iniciar conversa <span className="opacity-65">&#8594;</span>
        </a>
      </Reveal>
    </section>
  );
}
