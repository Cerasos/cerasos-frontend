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
  {
    icon: "cloud",
    title: "Soluções em Nuvem",
    description: "Infraestrutura em nuvem escalável",
    details:
      "Construa e implante aplicações escaláveis na AWS, Azure e Google Cloud. Fornecemos serviços de migração, otimização e gerenciamento completos para garantir que sua infraestrutura seja confiável, segura e econômica.",
  },
  {
    icon: "zap",
    title: "Integração de IA",
    description: "Soluções de automação inteligente",
    details:
      "Aproveite o poder da inteligência artificial e machine learning para automatizar processos, obter insights e aprimorar a tomada de decisões. De processamento de linguagem natural à visão computacional, integramos IA de forma fluida nos seus fluxos de trabalho.",
  },
  {
    icon: "database",
    title: "Análise de Dados",
    description: "Insights que impulsionam decisões",
    details:
      "Transforme dados brutos em insights acionáveis com análises avançadas, visualizações e relatórios. Nossa equipe de ciência de dados ajuda a identificar tendências, prever resultados e tomar decisões baseadas em dados.",
  },
  {
    icon: "lock",
    title: "Cibersegurança",
    description: "Proteção de nível empresarial",
    details:
      "Proteja seus ativos digitais com soluções completas de segurança, incluindo testes de penetração, avaliações de vulnerabilidades, auditorias e monitoramento 24/7 para prevenir e responder a ameaças.",
  },
  {
    icon: "code",
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas",
    details:
      "Crie aplicações web responsivas e de alto desempenho utilizando as tecnologias e frameworks mais recentes. De single-page apps a portais empresariais complexos, entregamos experiências de usuário excepcionais.",
  },
  {
    icon: "cloud",
    title: "Soluções em Nuvem",
    description: "Infraestrutura em nuvem escalável",
    details:
      "Construa e implante aplicações escaláveis na AWS, Azure e Google Cloud. Fornecemos serviços de migração, otimização e gerenciamento completos para garantir que sua infraestrutura seja confiável, segura e econômica.",
  },
  {
    icon: "smartphone",
    title: "Aplicativos Mobile",
    description: "Soluções iOS e Android",
    details:
      "Desenvolvemos aplicativos nativos e multiplataforma que engajam usuários e impulsionam o crescimento do seu negócio. Nossas soluções mobile são otimizadas para performance, usabilidade e integração perfeita com seus sistemas.",
  },
  {
    icon: "bar-chart",
    title: "Business Intelligence",
    description: "Estratégias baseadas em dados",
    details:
      "Implemente soluções de BI poderosas que fornecem visibilidade em tempo real das operações. Criamos dashboards personalizados, relatórios e análises que capacitam sua equipe a tomar decisões informadas.",
  },
  {
    icon: "users",
    title: "Consultoria",
    description: "Orientação e suporte especializado",
    details:
      "Aproveite nossa experiência com consultoria estratégica em tecnologia. Ajudamos sua empresa na transformação digital, otimização de processos e implementação de melhores práticas para atingir objetivos de negócio.",
  },
  {
    icon: "cloud",
    title: "Soluções em Nuvem",
    description: "Infraestrutura em nuvem escalável",
    details:
      "Construa e implante aplicações escaláveis na AWS, Azure e Google Cloud. Fornecemos serviços de migração, otimização e gerenciamento completos para garantir que sua infraestrutura seja confiável, segura e econômica.",
  },
  {
    icon: "zap",
    title: "Integração de IA",
    description: "Soluções de automação inteligente",
    details:
      "Aproveite o poder da inteligência artificial e machine learning para automatizar processos, obter insights e aprimorar a tomada de decisões. De processamento de linguagem natural à visão computacional, integramos IA de forma fluida nos seus fluxos de trabalho.",
  },
  {
    icon: "database",
    title: "Análise de Dados",
    description: "Insights que impulsionam decisões",
    details:
      "Transforme dados brutos em insights acionáveis com análises avançadas, visualizações e relatórios. Nossa equipe de ciência de dados ajuda a identificar tendências, prever resultados e tomar decisões baseadas em dados.",
  },
  {
    icon: "cpu",
    title: "DevOps",
    description: "Implantações ágeis e seguras",
    details:
      "Acelere seu ciclo de desenvolvimento com práticas modernas de DevOps. Implementamos pipelines de CI/CD, infraestrutura como código e testes automatizados para entregas mais rápidas e confiáveis.",
  },
  {
    icon: "globe",
    title: "Transformação Digital",
    description: "Modernize sua empresa",
    details:
      "Guiamos sua organização em estratégias de transformação digital que modernizam operações, melhoram a experiência do cliente e criam novas fontes de receita por meio da tecnologia.",
  },
  {
    icon: "shield",
    title: "Conformidade",
    description: "Adesão regulatória",
    details:
      "Garanta que seus sistemas atendam aos padrões da indústria e regulamentações como GDPR, HIPAA e SOC 2. Fornecemos auditorias de conformidade, documentação e monitoramento contínuo.",
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
    icon: "server",
    title: "Infraestrutura",
    description: "Soluções robustas de servidores",
    details:
      "Projetamos e gerenciamos infraestruturas confiáveis que crescem junto com o seu negócio. Oferecemos soluções on-premise, em nuvem e híbridas, com alta disponibilidade e recuperação de desastres.",
  },
  {
    icon: "git-branch",
    title: "Controle de Versão",
    description: "Gestão de código",
    details:
      "Implemente boas práticas de versionamento com workflows Git, estratégias de branching e ferramentas de colaboração que mantêm sua equipe de desenvolvimento produtiva e organizada.",
  },
  {
    icon: "package",
    title: "Deploy",
    description: "Entrega contínua",
    details:
      "Implemente pipelines de deploy automatizados para entregas mais rápidas e seguras. Adotamos blue-green deployments, canary releases e estratégias de rollback para atualizações sem downtime.",
  },
  {
    icon: "code",
    title: "Desenvolvimento de APIs",
    description: "Serviços RESTful",
    details:
      "Criamos APIs robustas e escaláveis que alimentam suas aplicações e permitem integrações de terceiros. Projetamos APIs RESTful e GraphQL com documentação completa e segurança reforçada.",
  },
  {
    icon: "database",
    title: "Modelagem de Banco de Dados",
    description: "Armazenamento de dados otimizado",
    details:
      "Desenhamos esquemas de banco de dados eficientes e otimizamos a performance de consultas para SQL e NoSQL. Garantimos que sua camada de dados seja escalável, segura e de alta performance.",
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
        <div className=" mb-2 md:mb-12 p-10 text-center bg-[radial-gradient(ellipse_at_center,var(--background)_40%,transparent_80%)]">
          <h2 className="mb-4 font-sans text-4xl font-bold text-card-foreground md:text-5xl">
            O que fazemos por você
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Do desenvolvimento ao crescimento: serviços completos para acelerar
            sua jornada digital
          </p>
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
              length: isMobile ? 10 : 8,
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
