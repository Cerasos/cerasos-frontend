import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ready to transform your business? Get in touch with our team to
            discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                Email
              </h3>
              <p className="mb-3 text-muted-foreground">
                Reach out for inquiries and support
              </p>
              <a
                href="mailto:contact@company.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                contact@company.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                Phone
              </h3>
              <p className="mb-3 text-muted-foreground">
                Speak with our sales team
              </p>
              <a
                href="tel:+18005551234"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +1 (800) 555-1234
              </a>
            </CardContent>
          </Card>

          <Card className="border-border bg-card md:col-span-2">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                Headquarters
              </h3>
              <p className="text-muted-foreground">
                123 Business Avenue, Suite 500, San Francisco, CA 94105
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg bg-card p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-card-foreground">
            Connect With Us
          </h3>
          <p className="mb-6 text-muted-foreground">
            Follow us to stay updated on the latest news and insights
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://company.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-5 w-5" />
                Website
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
