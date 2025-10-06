import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import ServiceSection from "@/components/service-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-full max-w-screen overflow-x-hidden">
        <Hero />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
