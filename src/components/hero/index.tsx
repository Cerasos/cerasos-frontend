"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-[url('/assets/bg-hero.png')] bg-gradient-to-b from-background to-muted px-4 py-20 backdrop-blur-xl bg-cover bg-bottom   background-position: center">
      <div className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-2 shadow-sm">
        <span className="text-sm font-medium text-muted-foreground">
          Soluções Tecnológicas
        </span>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl bg-radial from-white/10 to-white/0 backdrop-blur-md text-center rounded-xl p-4 border-white/20 border-[1px]">
        <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl text-white">
          Transformando{" "}
          <span className="bg-[#5ff4ff] bg-clip-text text-transparent">
            Negócios
          </span>{" "}
          Através da Inovação
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-white md:text-xl ">
          Impulsionamos organizações com soluções tecnológicas avançadas que
          promovem crescimento, eficiência e sucesso sustentável na era digital
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full shadow-lg sm:w-auto"
            onClick={scrollToContact}
          >
            Fale com Especialista
          </Button>
          {/* <Button
            size="lg"
            variant="ghost"
            className="w-full bg-transparent sm:w-auto text-white"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Saiba Mais
          </Button> */}
        </div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
