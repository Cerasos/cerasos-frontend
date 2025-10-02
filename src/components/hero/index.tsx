"use client";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <button className="custom-prev absolute  left-2 top-1/2 z-10 -translate-y-1/2 bg-black/20 p-2 rounded-full hover:bg-black/50 cursor-pointer duration-300 transition-transform">
        <ChevronLeft className="text-primary w-6 h-6" />
      </button>
      <button className="custom-next absolute  right-6 top-1/2 z-10 -translate-y-1/2 bg-black/20 p-2 rounded-full hover:bg-black/50 cursor-pointer duration-300 transition-transform">
        <ChevronRight className="text-primary w-6 h-6" />
      </button>
      <div className="custom-pagination absolute bottom-2 flex gap-2" />
      <Swiper
        className="relative flex flex-col min-h-screen h-screen max-h-screen items-center justify-center px-4 py-20 overflow-hidden"
        slidesPerView={1}
        spaceBetween={50}
        loop
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide className="max-h-screen h-screen w-full flex flex-col relative items-center justify-center px-4 py-20 overflow-hidden">
          <div className="overflow-hidden bg-[url('/assets/bg.png')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px] overflow-hidden" />
          <div className="relative z-10 mx-auto max-w-4xl text-center h-full flex flex-col items-center justify-center overflow-hidden">
            <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl text-white">
              Transformando{" "}
              <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 overflow-hidden">
                Negócios
              </span>{" "}
              Através da Inovação
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white md:text-xl overflow-hidden">
              Impulsionamos organizações com soluções tecnológicas avançadas que
              promovem crescimento, eficiência e sucesso sustentável na era
              digital
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-screen w-full flex items-end justify-end mr-auto px-4 py-20 overflow-hidden ">
          <div className="overflow-hidden bg-[url('/assets/bg-2.png')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[5px]" />
          <div className="relative z-10 h-full flex flex-col overflow-hidden ml-auto max-w-xl text-left">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl text-white">
              Transformando{" "}
              <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 overflow-hidden">
                Negócios
              </span>{" "}
              Através da Inovação
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white md:text-xl overflow-hidden">
              Impulsionamos organizações com soluções tecnológicas avançadas que
              promovem crescimento, eficiência e sucesso sustentável na era
              digital
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-h-screen h-screen w-full flex flex-col relative items-center justify-center px-4 py-20 overflow-hidden">
          <div className="overflow-hidden bg-[url('/assets/bg-4.jpg')] bg-radial from-background to-muted absolute inset-0 max-w-screen bg-cover bg-bottom blur-[2px]" />
          <div className="relative z-10 mx-auto max-w-4xl text-center h-full flex flex-col items-center justify-end overflow-hidden">
            <h1 className="mb-6 font-sans text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl text-white">
              Transformando{" "}
              <span className="bg-[#5ff4ff] bg-clip-text text-transparent saturate-200 overflow-hidden">
                Negócios
              </span>{" "}
              Através da Inovação
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white md:text-xl overflow-hidden">
              Impulsionamos organizações com soluções tecnológicas avançadas que
              promovem crescimento, eficiência e sucesso sustentável na era
              digital
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-2 shadow-sm absolute bottom-16 left-1/2 z-10 -translate-x-1/2 overflow-hidden">
        <span className="text-sm font-medium text-muted-foreground">
          Soluções Tecnológicas
        </span>
      </div> */}

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white transition-colors hover:text-primary cursor-pointer overflow-hidden"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
