"use client";
import React, { useState } from "react";

import ServiceCard from "./_components/service-card";

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
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [orderedServices, setOrderedServices] = useState<typeof services>([]);

  const displayServices =
    orderedServices.length > 0 ? orderedServices : services;

  const handleCardClick = (index: number) => {
    const clickedService = displayServices[index];
    const remainingServices = displayServices.filter((_, i) => i !== index);
    remainingServices.splice(2, 0, clickedService);
    setOrderedServices(remainingServices);
    setExpandedCard(2); // Always expand the first card after reordering
  };
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-card px-4 py-4"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 p-10 text-center bg-[radial-gradient(ellipse_at_center,var(--background)_40%,transparent_80%)]">
          <h2 className="mb-4 font-sans text-4xl font-bold text-card-foreground md:text-5xl">
            O que fazemos por você
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Do desenvolvimento ao crescimento: serviços completos para acelerar
            sua jornada digital
          </p>
        </div>

        <div className="max-h-[510px] overflow-hidden">
          <div
            className="grid auto-rows-fr grid-cols-3 gap-3 md:grid-cols-6"
            style={{ gridAutoFlow: "dense" }}
          >
            {displayServices.map((service, index) => (
              <ServiceCard
                index={index}
                expandedCard={expandedCard}
                setExpandedCard={setExpandedCard}
                handleCardClick={handleCardClick}
                key={`service-card-${index}`}
                title={service.title}
                description={service.description}
                icon={service.icon}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
