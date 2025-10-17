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
import { useIsMobile } from "@/hooks/is-mobile";

const slides = [{ index: 0 }, { index: 1 }, { index: 2 }];

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();

  const scrollToServices = () => {
    const services = document.getElementById("services");
    if (!services) return;

    const headerOffset = 62; // adjust this value
    const elementPosition = services.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-[calc(100dvh-4rem)] w-screen overflow-x-hidden mt-16">
      <Carousel
        setApi={setApi}
        className="relative z-10 mx-auto w-full max-w-full h-[calc(100dvh-4rem)] "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 7000,
            stopOnMouseEnter: true,
            stopOnFocusIn: isMobile ? true : false,
          }),
        ]}
      >
        <CarouselContent className="h-[calc(100dvh-4rem)]  gap-0">
          <CarouselItem
            key={0}
            className="relative flex flex-col w-full h-[calc(100dvh-4rem)] "
          >
            <div className=" bg-[url('/assets/bg.png')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px] " />
            <div className="relative z-10 mx-auto w-full md:w-4xl text-center h-[calc(100dvh-4rem)]  flex flex-col items-center justify-center ">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
                Transformando{" "}
                <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 ">
                  negócios
                </span>{" "}
                através da tecnologia
              </h1>

              <p className="mb-8 text-md leading-relaxed text-white md:text-xl">
                Somos responsáveis por trazer soluções tecnológicas para
                qualquer
                <br /> tipo de organização ou negócio.
                <br />
                Estamos na era digital, onde tudo pode ser resolvido com
                inovação e tecnologia
              </p>
            </div>
          </CarouselItem>
          <CarouselItem
            key={1}
            className="relative flex flex-col w-full h-[calc(100dvh-4rem)] "
          >
            <div className=" bg-[url('/assets/bg-2.png')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-right md:bg-bottom blur-[2px]" />
            <div className="relative z-10 mx-auto w-full md:w-4xl text-center h-[calc(100dvh-4rem)]  flex flex-col items-center justify-center ">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
                Inovação que{" "}
                <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 ">
                  transforma
                </span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white md:text-xl ">
                Nossa missão é impulsionar o crescimento de empresas com
                soluções que unem criatividade, automação e tecnologia.
                Transformamos ideias em ferramentas reais que facilitam o dia a
                dia e elevam o potencial do seu negócio.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem
            key={2}
            className="relative flex flex-col w-full h-[calc(100dvh-4rem)] "
          >
            <div className=" bg-[url('/assets/bg-4.jpg')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px]" />
            <div className="relative z-10 mx-auto w-full md:w-4xl text-center h-[calc(100dvh-4rem)]  flex flex-col items-center justify-center ">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
                Soluções que{" "}
                <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 ">
                  impulsionam
                </span>{" "}
                resultados
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white md:text-xl ">
                Aplicamos tecnologia de forma estratégica para simplificar
                rotinas e potencializar o desempenho da sua empresa.
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
