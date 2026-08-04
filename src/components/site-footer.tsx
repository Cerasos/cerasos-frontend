import BrandMark from "@/components/brand-mark";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

const LINKS = [
  { href: "#ia", label: "IA aplicada" },
  { href: "#setores", label: "Setores" },
  { href: "#contato", label: "Contato" },
];

export default function SiteFooter() {
  return (
    <footer
      className="bg-paper-alt border-t border-ink/8"
      style={{ padding: "32px clamp(16px, 4vw, 48px) 26px clamp(16px, 4vw, 48px)" }}
    >
      <div
        className="mx-auto grid max-w-[1180px] items-start gap-x-10 gap-y-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        <BrandMark size={18} />

        <nav className="flex flex-col gap-2 text-[14px] text-ink/60">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-[14px] text-ink/60">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            WhatsApp
          </a>
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="transition-colors hover:text-accent">
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-accent">
            {CONTACT_EMAIL}
          </a>
        </div>

        <p className="text-[13px] text-ink/45">Santa Catarina &#183; Brasil</p>
      </div>

      <p className="mx-auto mt-6 max-w-[1180px] border-t border-ink/8 pt-4 text-[12px] text-ink/42">
        &#169; {new Date().getFullYear()} Cerasos. Todos os direitos reservados.
      </p>
    </footer>
  );
}
