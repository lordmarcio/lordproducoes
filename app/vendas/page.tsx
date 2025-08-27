"use client";
import Hero from "@/components/vendas/Hero";
import Problem from "@/components/vendas/Problem";
import Solution from "@/components/vendas/Solution";
import Method from "@/components/vendas/Method";
import Services from "@/components/vendas/Services";
import CaseStudies from "@/components/vendas/CaseStudies";
import Guarantee from "@/components/vendas/Guarantee";
import Pricing from "@/components/vendas/Pricing";
import Urgency from "@/components/vendas/Urgency";
import Footer from "@/components/vendas/Footer";
import FloatingCTA from "@/components/vendas/FloatingCTA";

export default function VendasPage() {
  return (
    <main className="relative bg-white text-gray-900 overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Method />
      <CaseStudies />
      <Guarantee />
      <Pricing />
      <Urgency />
      <Footer />
      <FloatingCTA />
    </main>
  );
}