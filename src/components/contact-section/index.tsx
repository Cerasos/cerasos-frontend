import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ReceiptIcon } from "lucide-react";
import WhatsAppIcon from "@/assets/image.png";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#002a53] px-4 py-10 max-h-[100dvh]"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl text-white">
            Fale com a Gente
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Pronto para tirar sua ideia do papel ou acelerar seu negócio? Nosso
            time está aqui para ajudar.
          </p>
        </div>

        <div className="grid gap-6 grid-rows-3">
          <Card className="border-white/20 bg-white/5 backdrop-blur-sm  max-h-[220px] md:max-h-[120px] py-2 px-2 md:px-8">
            <CardContent className="md:p-2 flex flex-col md:flex-row justify-start items-start md:items-center md:gap-8 gap-2 h-full">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col justify-between gap-0 p-0 m-0">
                <h3 className="text-xl font-bold text-white">
                  Entre em contato para dúvidas e suporte
                </h3>
                <a
                  href="mailto:cerasos@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  cerasos@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/20 bg-white/5 backdrop-blur-sm  max-h-[220px] md:max-h-[120px] py-2 px-2 md:px-8">
            <CardContent className="md:p-2 flex flex-col md:flex-row justify-start items-start md:items-center md:gap-8 gap-2 h-full">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src={WhatsAppIcon}
                  className="h-8 w-8"
                  alt="WhatsApp icon"
                />
              </div>
              <div className="flex flex-col justify-between gap-0 p-0 m-0">
                <h3 className="mb-2 text-xl font-bold text-white">
                  Converse direto com nosso time
                </h3>
                <a
                  href="https://wa.me/5511959463759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +55 (11) 95946-3759
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/20 bg-white/5 backdrop-blur-sm  max-h-[220px] md:max-h-[120px] py-2 px-2 md:px-8">
            <CardContent className="md:p-2 flex flex-col md:flex-row justify-start items-start md:items-center md:gap-8 gap-2 h-full">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ReceiptIcon className="h-8 w-8 text-primary " />
              </div>
              <div className="flex flex-col justify-between gap-0 p-0 m-0">
                <h3 className="mb-2 text-xl font-bold text-white">
                  Trabalhe conosco
                </h3>
                <div className=" flex flex-col md:flex-row text-muted-foreground">
                  <p>envie seu currículo para {` `}</p>
                  <a
                    href="mailto:cerasos@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors md:ml-2"
                  >
                    cerasos@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
