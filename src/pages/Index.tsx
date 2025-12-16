import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { Features } from "@/components/Features";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { PersonasSection } from "@/components/home/PersonasSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemsSection />
      <Features />
      <EcosystemSection />
      <ProofStrip />
      <PersonasSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
