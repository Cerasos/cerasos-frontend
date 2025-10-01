import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import LogoMin from "@/assets/logos/logo-min.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 ">
        <div className="flex items-center gap-0 ">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-transparent pt-2">
            <Image src={LogoMin} alt="Cerasos Logo" />
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
            Serviços
          </button>
          <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
            Contato
          </button>
          <Button size="sm">Agende uma Conversa</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
