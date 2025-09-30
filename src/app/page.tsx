import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import ServiceSection from "@/components/service-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
