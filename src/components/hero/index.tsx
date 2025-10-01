"use client";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center px-4 py-20">
      <div className="overflow-hidden bg-[url('/assets/bg.png')] bg-gradient-to-b from-background to-muted absolute inset-0 bg-cover bg-bottom blur-[2px]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl text-white">
          Transformando{" "}
          <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200">
            Negócios
          </span>{" "}
          Através da Inovação
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-white md:text-xl ">
          Impulsionamos organizações com soluções tecnológicas avançadas que
          promovem crescimento, eficiência e sucesso sustentável na era digital
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* <Button
            size="lg"
            className="w-full shadow-lg sm:w-auto"
            onClick={scrollToContact}
          >
            Fale com Especialista
          </Button> */}
        </div>
      </div>

      <div className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-2 shadow-sm absolute bottom-16 left-1/2 z-10 -translate-x-1/2">
        <span className="text-sm font-medium text-muted-foreground">
          Soluções Tecnológicas
        </span>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
