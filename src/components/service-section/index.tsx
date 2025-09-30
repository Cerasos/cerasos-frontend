import React from "react";

import {
  Users,
  Zap,
  Cloud,
  Database,
  Lock,
  Code,
  Smartphone,
  BarChart,
  Cpu,
  Globe,
  Shield,
  Layers,
  Workflow,
  Server,
  GitBranch,
  Package,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const floatingWords = [
  // Core Tech
  "Soluções em Nuvem",
  "Integração de IA",
  "Machine Learning",
  "Deep Learning",
  "Blockchain",
  "Criptografia",
  "Cibersegurança",
  "Big Data",
  "Análise de Dados",
  "Business Intelligence",
  "Edge Computing",
  "Quantum Computing",

  // Dev & Infra
  "DevOps",
  "CI/CD",
  "Kubernetes",
  "Docker",
  "Serverless",
  "Microsserviços",
  "Cloud Native",
  "Infraestrutura",
  "API First",
  "RESTful APIs",
  "GraphQL",
  "Open Source",

  // Produtos Digitais
  "Web Apps",
  "Apps Mobile",
  "UX/UI",
  "Design System",
  "Prototipagem",
  "MVP",
  "Escalabilidade",
  "Low Code",
  "No Code",
  "Progressive Web Apps",
  "Front-end",
  "Back-end",
  "Full Stack",

  // Automação & Dados
  "Automação",
  "RPA",
  "Data Lake",
  "Data Warehouse",
  "ETL",
  "Streaming Data",
  "Predictive Analytics",
  "Data Science",
  "DataOps",
  "Observabilidade",
  "Monitoramento",

  // Negócios & Startup Culture
  "Transformação Digital",
  "Growth Hacking",
  "Lean Startup",
  "Agilidade",
  "Design Thinking",
  "OKRs",
  "Escalabilidade",
  "Customer Centric",
  "Disrupção",
  "Innovation",
  "Product Market Fit",
  "Go To Market",

  // Cloud & Serviços
  "SaaS",
  "PaaS",
  "IaaS",
  "FinOps",
  "Multi-Cloud",
  "Hybrid Cloud",
  "Edge Services",
  "API Economy",
];

const services = [
  {
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Infraestrutura flexível e escalável",
  },
  {
    icon: Zap,
    title: "Integração de IA",
    description: "Automação inteligente para acelerar resultados",
  },
  {
    icon: Database,
    title: "Análise de Dados",
    description: "Insights que geram impacto real",
  },
  {
    icon: Lock,
    title: "Cibersegurança",
    description: "Proteção digital para o seu negócio",
  },
  {
    icon: Code,
    title: "Web Apps",
    description: "Aplicações modernas e performáticas",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Experiências nativas para iOS e Android",
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Estratégias orientadas por dados",
  },
  {
    icon: Users,
    title: "Consultoria",
    description: "Mentoria e suporte especializado",
  },
  {
    icon: Cpu,
    title: "DevOps",
    description: "Entrega rápida e sem fricção",
  },
  {
    icon: Globe,
    title: "Transformação Digital",
    description: "Leve sua empresa para o futuro",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Conformidade de forma simples",
  },
  {
    icon: Layers,
    title: "Integração de Sistemas",
    description: "Conexões ágeis entre plataformas",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Fluxos mais simples e eficientes",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "Servidores robustos e escaláveis",
  },
  {
    icon: GitBranch,
    title: "Controle de Versão",
    description: "Gestão de código prática e segura",
  },
  {
    icon: Package,
    title: "Deploy",
    description: "Entrega contínua sem complicações",
  },
  {
    icon: Code,
    title: "Desenvolvimento de APIs",
    description: "APIs REST para integrar tudo",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "Armazenamento otimizado e inteligente",
  },
];

const ServiceSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-card px-4 py-20">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {floatingWords.map((word, index) => (
          <div
            key={index}
            className="absolute animate-float font-sans text-sm font-bold text-foreground md:text-lg"
            style={{
              left: `${(index * 23) % 100}%`,
              top: `${(index * 17) % 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${15 + (index % 5) * 2}s`,
            }}
          >
            {word}
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold text-card-foreground md:text-5xl">
            O que fazemos por você
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Do desenvolvimento ao crescimento: serviços completos para acelerar
            sua jornada digital
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-background">
              <CardContent className="flex flex-col items-center p-3 text-center">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mb-1 text-xs font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-[10px] leading-tight text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
