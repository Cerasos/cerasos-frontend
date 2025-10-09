import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-[#002a53] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl text-white">
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
                href="mailto:cerasosco@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                cerasosco@gmail.com
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
                href="tel:11959463759"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +55 (11) 95946-3759
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
