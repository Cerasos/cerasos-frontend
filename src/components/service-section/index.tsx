"use client";
import React, { useEffect, useState } from "react";

import ServiceCard from "./_components/service-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/is-mobile";
import Autoplay from "embla-carousel-autoplay";

const services = [
  // ------------------ NOVOS SERVIÇOS ------------------
  {
    icon: "file-text",
    title: "Emissão Automática de Comprovantes",
    description: "Envios automáticos e personalizados",
    details:
      "Gere e envie comprovantes automaticamente via WhatsApp ou e-mail após cada venda ou pagamento. Reduza tarefas manuais e ofereça uma experiência mais ágil e profissional aos seus clientes.",
  },

  {
    icon: "message-square",
    title: "Chatbot e Atendimento Automático",
    description: "Atendimento inteligente 24h",
    details:
      "Automatize o atendimento da sua empresa com chatbots personalizados que respondem de forma natural e eficiente. Ofereça suporte instantâneo aos clientes, reduza filas de espera e aumente a produtividade do seu time.",
  },
  {
    icon: "shopping-cart",
    title: "Sistema de Pedidos Automático",
    description: "Pedidos rápidos e integrados",
    details:
      "Simplifique a gestão de pedidos com um sistema automatizado que conecta seu atendimento, estoque e pagamentos. Ideal para comércios e restaurantes que buscam agilidade e redução de erros operacionais.",
  },
  {
    icon: "utensils",
    title: "Cardápio Digital e Automático",
    description: "Gestão prática de produtos",
    details:
      "Substitua cardápios físicos por uma versão digital dinâmica e totalmente gerenciável. Atualize preços e itens em tempo real e ofereça uma experiência moderna e interativa aos seus clientes.",
  },
  {
    icon: "share-2",
    title: "Integração com WhatsApp e Redes Sociais",
    description: "Automatize suas conversas",
    details:
      "Centralize suas comunicações com integração direta ao WhatsApp, Instagram e outras plataformas. Gerencie atendimentos, envios automáticos e campanhas em um só lugar.",
  },
  {
    icon: "credit-card",
    title: "Link de Pagamento Automático",
    description: "Cobranças simples e seguras",
    details:
      "Gere e envie links de pagamento automáticos em segundos. Facilite o processo de venda, reduza inadimplência e ofereça mais praticidade para seus clientes.",
  },
  {
    icon: "bar-chart-3",
    title: "Painel de Estatísticas e Relatórios",
    description: "Acompanhe seus resultados",
    details:
      "Tenha acesso a métricas detalhadas sobre vendas, atendimentos e desempenho geral. Nossos painéis ajudam você a tomar decisões baseadas em dados e otimizar estratégias de crescimento.",
  },
  {
    icon: "wrench",
    title: "Customização de Sistemas",
    description: "Soluções sob medida",
    details:
      "Desenvolvemos sistemas personalizados conforme as necessidades do seu negócio. Desde integrações até novas funcionalidades, criamos tecnologia que se adapta à sua realidade.",
  },
  {
    icon: "database",
    title: "Modelagem de Banco de Dados",
    description: "Armazenamento de dados otimizado",
    details:
      "Desenhamos esquemas de banco de dados eficientes e otimizamos a performance de consultas para SQL e NoSQL. Garantimos que sua camada de dados seja escalável, segura e de alta performance.",
  },

  {
    icon: "calendar",
    title: "Agendamento de Serviços Online",
    description: "Gestão prática e automatizada",
    details:
      "Permita que seus clientes agendem horários e serviços de forma automática, com integração direta ao WhatsApp e notificações em tempo real. Ideal para clínicas, salões e prestadores de serviço.",
  },
  {
    icon: "wallet",
    title: "Integração com Sistemas de Pagamento",
    description: "Conecte vendas e automação financeira",
    details:
      "Integramos sua plataforma com gateways como Pix, PagSeguro, Mercado Pago e outros. Otimize seu processo de cobrança e simplifique o fluxo financeiro da sua empresa.",
  },
  {
    icon: "calculator",
    title: "Sistema de Orçamentos Automático",
    description: "Cotações rápidas e inteligentes",
    details:
      "Crie um sistema que gera orçamentos automáticos com base nas preferências do cliente. Agilidade no atendimento e aumento nas taxas de conversão.",
  },
  {
    icon: "package",
    title: "Gestão de Produtos e Estoque",
    description: "Controle total em tempo real",
    details:
      "Monitore entradas, saídas e disponibilidade de produtos com um painel moderno e integrado. Receba alertas automáticos e mantenha o estoque sempre atualizado.",
  },
  {
    icon: "layout-dashboard",
    title: "Painel de Administração Personalizado",
    description: "Controle completo da sua operação",
    details:
      "Tenha um painel administrativo visual e intuitivo para gerenciar clientes, pedidos, pagamentos e métricas. Desenvolvido sob medida para o seu modelo de negócio.",
  },
  {
    icon: "bell",
    title: "Notificações e Lembretes Automáticos",
    description: "Comunicação eficiente e imediata",
    details:
      "Automatize lembretes de agendamento, pagamentos e entregas via WhatsApp, SMS ou e-mail. Reduza faltas e melhore a experiência do cliente.",
  },
  {
    icon: "gift",
    title: "Sistema de Fidelidade Digital",
    description: "Recompense clientes automaticamente",
    details:
      "Crie programas de pontos e recompensas digitais integrados ao seu sistema de atendimento. Aumente a retenção e o engajamento dos seus clientes com praticidade.",
  },
  {
    icon: "book-open",
    title: "Catálogo Digital Interativo",
    description: "Venda de forma moderna e automatizada",
    details:
      "Exiba seus produtos de maneira dinâmica e atrativa com filtros, busca inteligente e integração direta ao carrinho de compras ou WhatsApp.",
  },
  {
    icon: "code",
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas",
    details:
      "Crie aplicações web responsivas e de alto desempenho utilizando as tecnologias e frameworks mais recentes. De single-page apps a portais empresariais complexos, entregamos experiências de usuário excepcionais.",
  },
  {
    icon: "smartphone",
    title: "Aplicativos Mobile",
    description: "Soluções iOS e Android",
    details:
      "Desenvolvemos aplicativos nativos e multiplataforma que engajam usuários e impulsionam o crescimento do seu negócio. Nossas soluções mobile são otimizadas para performance, usabilidade e integração perfeita com seus sistemas.",
  },
  {
    icon: "file-text",
    title: "Envio Automático de Notas Fiscais",
    description: "Burocracia resolvida com tecnologia",
    details:
      "Automatize a emissão e o envio de notas fiscais diretamente do seu sistema. Integração com plataformas municipais e estaduais, garantindo conformidade, agilidade e redução de erros operacionais.",
  },
  {
    icon: "database",
    title: "Análise de Dados",
    description: "Insights que impulsionam decisões",
    details:
      "Transforme dados brutos em insights acionáveis com análises avançadas, visualizações e relatórios. Nossa equipe de ciência de dados ajuda a identificar tendências, prever resultados e tomar decisões baseadas em dados.",
  },
  {
    icon: "globe",
    title: "Transformação Digital",
    description: "Modernize sua empresa",
    details:
      "Guiamos sua organização em estratégias de transformação digital que modernizam operações, melhoram a experiência do cliente e criam novas fontes de receita por meio da tecnologia.",
  },
  {
    icon: "layers",
    title: "Integração de Sistemas",
    description: "Conectividade sem falhas",
    details:
      "Conecte sistemas e aplicações diferentes para criar um ecossistema tecnológico unificado. Nossas soluções garantem fluxo de dados eficiente e automação de processos em toda a infraestrutura.",
  },
  {
    icon: "workflow",
    title: "Automação de Processos",
    description: "Fluxos de trabalho eficientes",
    details:
      "Elimine tarefas manuais e otimize operações com automação inteligente. De RPA a orquestração de workflows, ajudamos sua empresa a fazer mais com menos.",
  },
  {
    icon: "code",
    title: "Desenvolvimento de APIs",
    description: "Serviços RESTful",
    details:
      "Criamos APIs robustas e escaláveis que alimentam suas aplicações e permitem integrações de terceiros. Projetamos APIs RESTful e GraphQL com documentação completa e segurança reforçada.",
  },
  {
    icon: "users",
    title: "Consultoria",
    description: "Orientação e suporte especializado",
    details:
      "Aproveite nossa experiência com consultoria estratégica em tecnologia. Ajudamos sua empresa na transformação digital, otimização de processos e implementação de melhores práticas para atingir objetivos de negócio.",
  },
];

const ServiceSection = () => {
  const [api, setApi] = React.useState<CarouselApi | null>();
  const [currentCard, setCurrentCard] = React.useState<number | null>(null);
  const [current, setCurrent] = useState(0);

  const isMobile = useIsMobile();

  const handleCardClick = (index: number) => {
    setCurrentCard(index);
  };

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      id="services"
      className="relative overflow-hidden bg-card px-4 py-4 pb-20 overflow-x-hidden max-h-[100dvh - 4rem]"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className=" mb-2 md:mb-4 p-10 text-center bg-[radial-gradient(ellipse_at_center,var(--background)_40%,transparent_80%)]">
          <h2 className=" font-sans text-4xl font-bold text-card-foreground md:text-5xl">
            O que fazemos por você
          </h2>
          {/* <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Do desenvolvimento ao crescimento: serviços completos para acelerar
            sua jornada digital
          </p> */}
        </div>

        <Carousel
          opts={{ align: "start" }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent className="ml-[-2]">
            {Array.from({
              length: Math.ceil(services.length / 2),
            }).map((_, i) => (
              <CarouselItem
                key={i}
                className="basis-1/2 md:basis-1/4 flex flex-col gap-4 select-none"
              >
                {services.slice(i * 2, i * 2 + 2).map((service, index) => (
                  <Dialog key={`dialog-card-${i}-${index}`}>
                    <DialogContent
                      className="py-12 gap-8"
                      showCloseButton={false}
                    >
                      <DialogClose asChild>
                        <Button
                          type="button"
                          className="absolute top-4 right-4 rounded-full w-10 h-10 bg-gray-200/20 hover:bg-gray-400/10 flex group"
                        >
                          <X className="text-gray-600 text-4xl w-10 h-10 group-hover:text-gray-400" />
                        </Button>
                      </DialogClose>
                      <DialogHeader>
                        <DialogTitle className="flex flex-row gap-4 items-center">
                          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200/30">
                            <DynamicIcon
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              name={services[currentCard || 0].icon as any}
                              className="h-8 w-8 gray-600"
                            />
                          </div>
                          <div className="mb-1 text-lg font-bold text-foreground">
                            {services[currentCard || 0].title}
                          </div>
                        </DialogTitle>
                        <DialogDescription className="">
                          {services[currentCard || 0].description}
                        </DialogDescription>
                      </DialogHeader>
                      {services[currentCard || 0].details}
                    </DialogContent>
                    <DialogTrigger>
                      <ServiceCard
                        key={`service-card-${i}-${index}`}
                        index={i * 2 + index}
                        handleCardClick={handleCardClick}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        details={service.details}
                      />
                    </DialogTrigger>
                  </Dialog>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-50 absolute left-[-60] bg-gray-200/30 border-none text-gray-600 hover:bg-gray-400/10 hover:text-gray-400 disabled:text-gray-400 disabled:bg-gray-100/20" />
          <CarouselNext className="z-50 absolute right-[-60] bg-gray-200/30 border-none text-gray-600 hover:bg-gray-400/10 hover:text-gray-400 disabled:text-gray-400 disabled:bg-gray-100/20" />
          <div className="absolute bottom-[-40] left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {Array.from({
              length: isMobile ? 13 : 11,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                  current === index
                    ? "w-8 bg-gray-600"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceSection;
