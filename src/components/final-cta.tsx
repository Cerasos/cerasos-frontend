import Reveal from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/contact";

export default function FinalCta() {
  return (
    <section
      id="contato"
      /* the desktop block reserves 78vh of air around three lines of copy; on a
         phone that much emptiness reads as a loading state, so it tightens */
      className="flex min-h-[min(78vh,720px)] flex-col items-center justify-center gap-[22px] border-t border-ink/7 px-[clamp(16px,4vw,48px)] py-[clamp(104px,13vw,180px)] text-center max-md:min-h-[min(62svh,480px)] max-md:gap-[18px] max-md:py-[84px]"
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
        <p className="max-w-[50ch] text-[15px] leading-[1.7] text-ink/58 max-md:text-[16px] max-md:text-ink/65">
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
