"use client";

import PremiumBackground from "@/components/premium/PremiumBackground";
import GooeyEffect from "@/components/GooeyEffect";

import HeroSection from "@/components/premium/sections/HeroSection";
import ProblemSection from "@/components/premium/sections/ProblemSection";
import SolutionSection from "@/components/premium/sections/SolutionSection";
import ServicesSection from "@/components/premium/sections/ServicesSection";
import MethodSection from "@/components/premium/sections/MethodSection";
import CaseStudiesSection from "@/components/premium/sections/CaseStudiesSection";
import GuaranteeSection from "@/components/premium/sections/GuaranteeSection";
import PricingSection from "@/components/premium/sections/PricingSection";
import UrgencySection from "@/components/premium/sections/UrgencySection";
import FooterSection from "@/components/premium/sections/FooterSection";

export default function VendasPremiumPage() {
  return (
    <main className="relative min-h-screen">
      <PremiumBackground />
      <GooeyEffect />
      
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <MethodSection />
        <CaseStudiesSection />
        <GuaranteeSection />
        <PricingSection />
        <UrgencySection />
        <FooterSection />
      </div>
    </main>
  );
}