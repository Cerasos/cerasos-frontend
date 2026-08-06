import Reveal from "@/components/reveal";

export default function RegionSection() {
  return (
    <section
      id="regiao"
      className="bg-paper text-center"
      style={{ padding: "clamp(64px, 8vw, 104px) clamp(16px, 4vw, 48px)" }}
    >
      <Reveal delay={100} className="mx-auto max-w-[780px]">
        <p className="text-[13px] font-medium text-accent">SC / Brasil</p>
        <h2
          className="mx-auto mt-3.5 font-medium"
          style={{
            fontSize: "clamp(26px, 3.2vw, 40px)",
            lineHeight: 1.14,
            letterSpacing: "-0.025em",
          }}
        >
          Desenvolvimento de software em Santa Catarina para empresas que precisam operar
          melhor.
        </h2>
        <p className="mx-auto mt-5 text-[15px] leading-[1.75] text-ink/58 max-md:text-[16px] max-md:text-ink/65">
          A Cerasos faz desenvolvimento de software em Santa Catarina para empresas que
          precisam de sistema sob medida, automação comercial, site responsivo, ERP, CRM
          e IA aplicada à própria operação.
        </p>
        <p className="mx-auto mt-3.5 text-[15px] leading-[1.75] text-ink/58 max-md:text-[16px] max-md:text-ink/65">
          Acompanhamos desde o primeiro diagnóstico até o sistema rodando em produção. No
          fim, sobra menos processo manual e a empresa ganha controle sobre a própria
          operação.
        </p>
      </Reveal>
    </section>
  );
}
