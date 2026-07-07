import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

import Footer from "@/components/footer";
import { CONTACT_EMAIL, CONTACT_PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

type ScreenshotCard = {
  title: string;
  label: string;
  description: string;
  image: string;
};

const sectorScreenshots: ScreenshotCard[] = [
  {
    title: "Imobiliárias",
    label: "Site de imóveis",
    description: "Catálogo, filtros, captação de leads, agenda de visitas e WhatsApp.",
    image: "/screenshots/imobiliaria.png",
  },
  {
    title: "Restaurantes",
    label: "Pedidos online",
    description: "Cardápio, combos, delivery, mesas e relacionamento com clientes.",
    image: "/screenshots/pizzaria.png",
  },
  {
    title: "Turismo e hospedagem",
    label: "Reservas",
    description: "Disponibilidade, pagamentos, experiências locais e CRM de hóspedes.",
    image: "/screenshots/turismo.png",
  },
  {
    title: "Varejo e ecommerce",
    label: "Loja virtual",
    description: "Produtos, estoque, pedidos, campanhas e painel gerencial.",
    image: "/screenshots/varejo.png",
  },
  {
    title: "Saúde e estética",
    label: "Agenda e atendimento",
    description: "Catálogo, lembretes, estoque, atendimento e NF-e.",
    image: "/screenshots/saude.png",
  },
  {
    title: "Moda, praia, beleza e pet",
    label: "Vitrine e agenda",
    description: "Ecommerce, serviços, campanhas, fidelidade e recompra.",
    image: "/screenshots/moda-beleza-pet.png",
  },
  {
    title: "Eventos e lazer",
    label: "Ingressos",
    description: "Reservas, check-in, listas e comunicação automática.",
    image: "/screenshots/eventos.png",
  },
  {
    title: "Automotivo e náutico",
    label: "Orçamentos",
    description: "Agendamentos, catálogo, histórico, pós-venda e CRM.",
    image: "/screenshots/automotivo.png",
  },
];

const systemScreenshots: ScreenshotCard[] = [
  {
    title: "Painel gerencial",
    label: "Dashboard",
    description: "Indicadores, pedidos, receita, estoque, atividades e automações em tempo real.",
    image: "/screenshots/dashboard.png",
  },
  {
    title: "CRM comercial",
    label: "Clientes e vendas",
    description: "Leads do WhatsApp, pipeline, follow-up, agenda e resumo com IA.",
    image: "/screenshots/crm.png",
  },
  {
    title: "ERP sob medida",
    label: "Operação",
    description: "Produtos, estoque, pedidos, financeiro, ações rápidas e NF-e.",
    image: "/screenshots/erp.png",
  },
  {
    title: "Assistente IA",
    label: "Chat integrado",
    description: "Relatórios, respostas, automações e contexto do negócio no mesmo sistema.",
    image: "/screenshots/ai-chat.png",
  },
];

const quietSegments = [
  "Imobiliárias",
  "Turismo e hospedagem",
  "Restaurantes",
  "Varejo e ecommerce",
  "Farmácias, clínicas e estética",
  "Moda, praia, beleza e pet",
  "Eventos, lazer e entretenimento",
  "Automotivo, mobilidade e náutico",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cerasos",
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
    <>
      <main id="top" className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <section className="px-5 pb-12 pt-32 text-center sm:px-8 lg:px-12 lg:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-[#8b1a1e]">
              Santa Catarina
            </p>
            <h1 className="mx-auto mt-5 max-w-5xl text-[clamp(2.45rem,10vw,8rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#1d1d1f]">
              Desenvolvimento de Software em Santa Catarina
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#3b3b3f] sm:text-4xl">
              Sistemas inteligentes sob medida para sua empresa
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73]">
              Criamos sistemas personalizados com inteligência artificial integrada
              para empresas de Santa Catarina.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b1a1e]"
              >
                Conversar
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#produto"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0066cc] transition hover:text-[#004a99]"
              >
                Ver o sistema
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-7xl">
            <Image
              src="/screenshots/hero-suite.png"
              alt="Mockup premium de sistemas Cerasos em notebook, celular, dashboard, CRM e assistente inteligente"
              width={1586}
              height={992}
              priority
              className="h-auto w-full rounded-lg shadow-[0_26px_90px_rgba(0,0,0,0.16)]"
            />
          </div>
        </section>

        <section id="produto" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold text-[#8b1a1e]">Um sistema. A operação inteira.</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#1d1d1f] sm:text-6xl">
                Do site ao painel interno, sem parecer complicado.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
                A Cerasos cria sites, dashboards, ERP, CRM, chats e automações
                com o mesmo objetivo: deixar a empresa mais simples de operar.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {systemScreenshots.map((item, index) => (
                <ProductPanel key={item.title} item={item} priority={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[#8b1a1e]">Sites por setor</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                  Cada negócio com uma vitrine própria.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#6e6e73] lg:ml-auto">
                Os exemplos são fictícios, mas o formato é real: páginas claras,
                rápidas, com captação de contato, vendas e gestão integradas.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {sectorScreenshots.slice(0, 4).map((item, index) => (
                <ScreenshotFeature key={item.title} item={item} priority={index < 2} />
              ))}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {sectorScreenshots.slice(4).map((item) => (
                <ScreenshotFeature key={item.title} item={item} compact />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#000] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold text-[#d9a3a5]">Inteligência Artificial integrada</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                A IA entra no fluxo de trabalho. Não em outra aba.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#a1a1a6]">
                Assistentes inteligentes ajudam com atendimento, vendas, relatórios,
                automações, respostas rápidas e consultas aos dados do negócio.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-6xl">
              <Image
                src="/screenshots/ai-chat.png"
                alt="Screenshot de assistente inteligente interno com pedidos, clientes e automações"
                width={1586}
                height={992}
                className="h-auto w-full rounded-lg shadow-[0_26px_90px_rgba(255,255,255,0.12)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-semibold text-[#8b1a1e]">Feito sob medida</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                  O setor muda. O padrão de qualidade não.
                </h2>
              </div>

              <div>
                <div className="grid gap-px overflow-hidden rounded-lg border border-[#d2d2d7] bg-[#d2d2d7] sm:grid-cols-2">
                  {quietSegments.map((segment) => (
                    <div key={segment} className="bg-[#f5f5f7] p-5 text-lg font-semibold text-[#1d1d1f]">
                      {segment}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-lg leading-8 text-[#6e6e73]">
                  Cada projeto pode incluir site próprio, sistema gerencial,
                  ecommerce, pedidos, pagamentos, agenda, estoque, emissão de NF-e,
                  CRM, ERP, relatórios, WhatsApp e automações com inteligência
                  artificial. A arquitetura fica por nossa conta; para sua equipe,
                  a experiência precisa ser simples.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="desenvolvimento-software-sc" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#8b1a1e]">SEO local</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Desenvolvimento de Software em Santa Catarina para empresas que precisam operar melhor.
            </h2>
            <div className="mx-auto mt-8 space-y-5 text-lg leading-8 text-[#6e6e73]">
              <p>
                A Cerasos atua com desenvolvimento de software em Santa Catarina para
                empresas que precisam de sistemas sob medida, automação comercial,
                sistema gerencial, ERP, CRM e site próprio integrado à operação.
              </p>
              <p>
                Criamos sistemas para imobiliárias, restaurantes, farmácias, lojas,
                varejistas, comércio geral e empresas locais que querem menos
                processos manuais e mais controle.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.055em] sm:text-7xl">
              Software sob medida. Sem ruído.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73]">
              Transforme processos manuais em sistemas inteligentes, integrados e
              fáceis de usar.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b1a1e]"
            >
              Entrar em contato
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function ProductPanel({
  item,
  priority = false,
}: {
  item: ScreenshotCard;
  priority?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-lg bg-[#f5f5f7]">
      <Image
        src={item.image}
        alt={`${item.title}: ${item.description}`}
        width={1586}
        height={992}
        priority={priority}
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm font-semibold text-[#8b1a1e]">{item.label}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.description}</p>
      </div>
    </article>
  );
}

function ScreenshotFeature({
  item,
  compact = false,
  priority = false,
}: {
  item: ScreenshotCard;
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_14px_50px_rgba(0,0,0,0.08)]">
      <Image
        src={item.image}
        alt={`${item.title}: ${item.description}`}
        width={1586}
        height={992}
        priority={priority}
        className={`w-full object-cover ${compact ? "aspect-[16/11]" : "aspect-[16/10]"}`}
      />
      <div className={compact ? "p-5" : "p-6"}>
        <p className="text-sm font-semibold text-[#8b1a1e]">{item.label}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.description}</p>
      </div>
    </article>
  );
}
