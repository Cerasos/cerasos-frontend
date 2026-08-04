import AiSection from "@/components/ai-section";
import FinalCta from "@/components/final-cta";
import Hero from "@/components/hero";
import { HERO_TEXTURE } from "@/components/meteors";
import RegionSection from "@/components/region-section";
import SectorsCarousel from "@/components/sectors-carousel";
import { CONTACT_EMAIL, CONTACT_PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cerasos",
  url: SITE_URL,
  image: `${SITE_URL}/screenshots/hero-suite.png`,
  description:
    "Desenvolvimento de Software em Santa Catarina, sistemas inteligentes sob medida, ERP, CRM, automação comercial, sites próprios e inteligência artificial integrada.",
  areaServed: {
    "@type": "State",
    name: "Santa Catarina",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Catarina",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_TEL,
  sameAs: [WHATSAPP_URL],
  serviceType: [
    "Desenvolvimento de Software em Santa Catarina",
    "Software sob medida",
    "Automação Comercial",
    "Sistema Gerencial",
    "ERP",
    "CRM",
    "Site Próprio",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* the hero frame overhangs into the dark band, so both share one clip context */}
      <div className="relative overflow-hidden bg-paper">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: HERO_TEXTURE }}
        />
        <Hero />
        <AiSection />
      </div>

      <SectorsCarousel />
      <RegionSection />
      <FinalCta />
    </main>
  );
}
