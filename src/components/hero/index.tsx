"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted px-4 py-20">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-2 border-primary/10 bg-primary/5" />

      {/* Medium circle - bottom left */}
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-primary/10 bg-primary/5" />

      {/* Small circle - top left */}
      <div className="absolute left-1/4 top-20 h-32 w-32 rounded-full border border-primary/10" />

      {/* Diagonal lines */}
      <div className="absolute right-1/4 top-1/4 h-48 w-px rotate-45 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/3 h-64 w-px rotate-12 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

      {/* Small squares */}
      <div className="absolute right-1/3 top-1/3 h-16 w-16 rotate-45 border border-primary/10" />
      <div className="absolute bottom-1/3 right-1/4 h-12 w-12 rotate-12 border border-primary/10 bg-primary/5" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-2 shadow-sm">
          <span className="text-sm font-medium text-muted-foreground">
            Soluções Tecnológicas
          </span>
        </div>

        <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
          Transformando{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Negócios
          </span>{" "}
          Através da Inovação
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Impulsionamos organizações com soluções tecnológicas avançadas que
          promovem crescimento, eficiência e sucesso sustentável na era digital
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full shadow-lg sm:w-auto"
            onClick={scrollToContact}
          >
            Falar com Especialista
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full bg-transparent sm:w-auto"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Saiba Mais
          </Button>
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
