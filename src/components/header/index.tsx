import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import LogoFull from "@/assets/logos/logo-full.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-400 shadow-lg">
      {/* fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border-b border-white/30 shadow-xl */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-10">
        <div className="flex items-center gap-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-transparent">
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
      </div>
    </header>
  );
};

export default Header;
