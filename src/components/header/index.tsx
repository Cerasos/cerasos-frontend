import Image from "next/image";

import LogoMin from "@/assets/logos/logo-min.png";
import { WHATSAPP_URL } from "@/lib/contact";

const navItems = [
  { href: "#produto", label: "Sistema" },
  { href: "#solucoes", label: "Setores" },
  { href: "#desenvolvimento-software-sc", label: "Santa Catarina" },
];

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f5f7]/78 px-5 py-3 text-[#1d1d1f] backdrop-blur-2xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Ir para o início da página da Cerasos">
          <span className="flex h-8 w-8 shrink-0 overflow-hidden rounded-md bg-white">
            <Image
              src={LogoMin}
              alt="Logo da Cerasos"
              width={96}
              height={96}
              priority
              className="scale-[2.2] object-contain"
            />
          </span>
          <span className="text-sm font-semibold">Cerasos</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-medium text-[#424245] md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#000]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1d1d1f] px-4 py-2 text-xs font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b1a1e]"
        >
          Conversar
        </a>
      </div>
    </header>
  );
};

export default Header;
