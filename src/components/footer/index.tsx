import Image from "next/image";

import LogoFull from "@/assets/logos/logo-full.png";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7] px-5 py-10 text-[#6e6e73] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 overflow-hidden rounded-md bg-white">
              <Image
                src={LogoFull}
                alt="Logo da Cerasos"
                width={40}
                height={40}
                className="scale-[1.35] object-contain"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f]">Cerasos</p>
              <p className="text-xs">Sistemas inteligentes sob medida</p>
            </div>
          </div>

          <div className="grid gap-3 text-sm sm:grid-cols-3 sm:gap-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#1d1d1f]">
              WhatsApp
            </a>
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="transition hover:text-[#1d1d1f]">
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-[#1d1d1f]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#d2d2d7] pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Itapema — Santa Catarina</p>
          <p>© {new Date().getFullYear()} Cerasos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
