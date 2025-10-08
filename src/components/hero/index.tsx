"use client";
import { ArrowDown } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";

const slides = [{ index: 0 }, { index: 1 }, { index: 2 }];

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-[calc(100vh-4rem)] w-screen overflow-x-hidden mt-16">
      <Carousel
        setApi={setApi}
        className="relative z-10 mx-auto w-full max-w-full h-[calc(100vh-4rem)] "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={
          [
            // Autoplay({
            //   delay: 5000,
            //   stopOnMouseEnter: true,
            // }),
          ]
        }
      >
        <CarouselContent className="h-[calc(100vh-4rem)]  gap-0">
          <CarouselItem
            key={0}
            className="relative flex flex-col w-full h-[calc(100vh-4rem)] "
          >
            <div className=" bg-[url('/assets/bg.png')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px] " />
            <div className="relative z-10 mx-auto w-full md:w-4xl text-center h-[calc(100vh-4rem)]  flex flex-col items-center justify-center ">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
                Transformando{" "}
                <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 ">
                  Negócios
                </span>{" "}
                Através da Inovação
              </h1>

              <p className="mb-8 text-md leading-relaxed text-white md:text-xl">
                Impulsionamos organizações com soluções tecnológicas avançadas
                que promovem crescimento, eficiência e sucesso sustentável na
                era digital
              </p>
            </div>
          </CarouselItem>
          <CarouselItem
            key={1}
            className="relative flex flex-col w-full h-[calc(100vh-4rem)] "
          >
            <div className=" bg-[url('/assets/bg-2.png')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px]" />
            <div className="relative z-10 mx-auto w-full md:w-4xl text-center h-[calc(100vh-4rem)]  flex flex-col items-center justify-center ">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
                Conectando{" "}
                <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 ">
                  tecnologia
                </span>{" "}
                e resultados
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white md:text-xl ">
                Ajudamos empresas a se reinventarem com soluções digitais
                inteligentes, otimizando processos, aumentando a produtividade e
                garantindo um crescimento consistente em um mundo cada vez mais
                conectado.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem
            key={2}
            className="relative flex flex-col w-full h-[calc(100vh-4rem)] "
          >
            <div className=" bg-[url('/assets/bg-4.jpg')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px]" />
            <div className="relative z-10 mx-auto w-full md:w-4xl text-center h-[calc(100vh-4rem)]  flex flex-col items-center justify-center ">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
                Inovação que{" "}
                <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 ">
                  transforma
                </span>{" "}
                o futuro
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white md:text-xl ">
                Capacitamos organizações a liderarem seu mercado por meio de
                tecnologias inovadoras, promovendo eficiência operacional, novas
                oportunidades de negócios e sucesso duradouro na era digital.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex z-50 absolute left-4 bg-black/10 border-none text-primary hover:bg-primary/10 hover:text-primary" />
        <CarouselNext className="hidden md:flex z-50 absolute right-8 bg-black/10 border-none text-primary hover:bg-primary/10 hover:text-primary" />
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                current === index
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      <button
        onClick={scrollToServices}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white transition-colors hover:text-primary cursor-pointer "
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
