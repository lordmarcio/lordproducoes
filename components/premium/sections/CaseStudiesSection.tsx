"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import ParallaxText from "@/components/premium/ParallaxText";

export default function CaseStudiesSection() {
  const cases = [
    {
      name: "Clínica Preciore",
      quote: "Em 6 meses, quadruplicamos o número de consultas. O ROI foi de 1.200%. Nunca imaginei que o digital poderia trazer tantos pacientes qualificados.",
      results: ["400%", "70%", "1.200%"],
      color: "blue"
    },
    {
      name: "Rênan Ferreira", 
      quote: "A Lord transformou meu Instagram em uma máquina de vendas. Saí de 5 mil para 6 dígitos mensais em menos de 1 ano.",
      results: ["100k+", "8%", "20x"],
      color: "green"
    },
    {
      name: "Rachel Cossetti",
      quote: "O funil que criaram para mim vende sozinho. Acordo com notificações de vendas todos os dias.",
      results: ["R$ 50k", "35%", "5.000"],
      color: "violet"
    }
  ];

  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <ParallaxText speed={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="font-playfair">Casos de</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Sucesso
              </span>
            </h2>
          </ParallaxText>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PremiumCard3D glowColor={caseStudy.color}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{caseStudy.name}</h3>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <blockquote className="italic text-gray-300 mb-6 relative">
                    <span className="text-4xl text-gray-500 absolute -top-2 -left-2">&quot;</span>
                    <p className="relative z-10 pl-6">{caseStudy.quote}</p>
                  </blockquote>
                  <div className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="bg-white/5 p-3 rounded-xl">
                        <span className="text-2xl font-bold text-green-400">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PremiumCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}