import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Globe, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#002a53] px-4 py-20 texture-container"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl text-primary">
            Fale com a Gente
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Pronto para tirar sua ideia do papel ou acelerar seu negócio? Nosso
            time está aqui para ajudar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/20 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
              <p className="mb-3 text-muted-foreground">
                Entre em contato para dúvidas e suporte
              </p>
              <a
                href="mailto:contact@company.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                contact@company.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-white/20 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary " />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Telefone</h3>
              <p className="mb-3 text-muted-foreground">
                Converse direto com nosso time
              </p>
              <a
                href="tel:+18005551234"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +1 (800) 555-1234
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 rounded-lg bg-white/5 backdrop-blur-sm p-8 text-center border border-white/20">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Conecte-se com a gente
          </h3>
          <p className="mb-6 text-white/70">
            Acompanhe novidades, tendências e conteúdos exclusivos nas nossas
            redes
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5 text-primary" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <a
                href="https://company.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Website
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <a
                href="https://company.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5 text-primary" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
