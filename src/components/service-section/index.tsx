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
  "Cloud Solutions",
  "AI Integration",
  "Data Analytics",
  "Cybersecurity",
  "DevOps",
  "Consulting",
  "Digital Transformation",
  "API Development",
  "Mobile Apps",
  "Web Development",
  "Automation",
  "Machine Learning",
  "Blockchain",
  "IoT Solutions",
  "Microservices",
  "Serverless",
  "Big Data",
  "Edge Computing",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "Cloud Native",
  "SaaS",
  "PaaS",
  "Infrastructure",
];

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Smart automation solutions",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Insights that drive decisions",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Enterprise-grade protection",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern web applications",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android solutions",
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Data-driven strategies",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Expert guidance and support",
  },
  { icon: Cpu, title: "DevOps", description: "Streamlined deployment" },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Modernize your business",
  },
  { icon: Shield, title: "Compliance", description: "Regulatory adherence" },
  {
    icon: Layers,
    title: "System Integration",
    description: "Seamless connectivity",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Efficient workflows",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Robust server solutions",
  },
  { icon: GitBranch, title: "Version Control", description: "Code management" },
  { icon: Package, title: "Deployment", description: "Continuous delivery" },
  { icon: Code, title: "API Development", description: "RESTful services" },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized data storage",
  },
];

const ServiceSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-card px-4 py-20">
      <div className="absolute inset-0 overflow-hidden opacity-5">
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
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Comprehensive solutions tailored to your business needs
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
