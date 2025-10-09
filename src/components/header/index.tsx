"use client";
import React from "react";

import WppIcon from "@/assets/icons/wpp.svg";
import Image from "next/image";

import LogoFull from "@/assets/logos/logo-full.png";

const Header = () => {
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
  return (
    <header className="fixed min-h-16 w-screen top-0 left-0 px-4 md:px-10 z-50 bg-gray-100 border-b border-gray-400 shadow-lg flex items-center justify-center md:justify-between">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-transparent">
          <Image src={LogoFull} alt="Cerasos Logo" />
        </div>
      </div>

      <nav className="hidden items-center gap-6 md:flex">
        <button
          onClick={scrollToServices}
          className="text-sm font-medium text-black transition-colors hover:text-foreground cursor-pointer"
        >
          Serviços
        </button>
        <a
          href="tel:11959463759"
          className="flex flex-row items-center justify-center gap-2 text-sm font-medium text-black transition-colors hover:text-foreground cursor-pointer"
        >
          <Image src={WppIcon} alt="WhatsApp Icon" width={24} height={24} />
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
