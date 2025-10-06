import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import LogoFull from "@/assets/logos/logo-full.png";

const Header = () => {
  return (
    <header className="fixed min-h-16 w-screen top-0 left-0 px-4 md:px-10 z-50 bg-gray-100 border-b border-gray-400 shadow-lg flex items-center justify-center md:justify-between">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-transparent">
          <Image src={LogoFull} alt="Cerasos Logo" />
        </div>
      </div>

      <nav className="hidden items-center gap-6 md:flex">
        <button className="text-sm font-medium text-black transition-colors hover:text-foreground cursor-pointer">
          Serviços
        </button>
        <button className="text-sm font-medium text-black transition-colors hover:text-foreground cursor-pointer">
          Contato
        </button>
        <Button size="sm">Agende uma Conversa</Button>
      </nav>
    </header>
  );
};

export default Header;
