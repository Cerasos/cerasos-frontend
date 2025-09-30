"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted px-4 py-20">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-2 shadow-sm">
          <span className="text-sm font-medium text-muted-foreground">
            Enterprise Solutions
          </span>
        </div>

        <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
          Transforming{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Business
          </span>{" "}
          Through Innovation
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Empowering organizations with cutting-edge solutions that drive
          growth, efficiency, and sustainable success in the digital age.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full shadow-lg sm:w-auto"
            onClick={scrollToContact}
          >
            Contact Sales
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
            Learn More
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
