import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Videos } from "@/components/Videos";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Principles />
        <About />
        <Services />
        <Videos />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
