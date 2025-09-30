import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60">
            <span className="font-sans text-sm font-bold text-primary-foreground">
              E
            </span>
          </div>
          <span className="font-sans text-lg font-bold text-foreground">
            Enterprise
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
            About
          </button>
          <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
            Examples
          </button>
          <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
            Contact
          </button>
          <Button size="sm">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
