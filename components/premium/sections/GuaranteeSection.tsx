"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import ParallaxText from "@/components/premium/ParallaxText";

export default function GuaranteeSection() {
  const guarantees = [
    {
      number: "#1",
      title: "Resultados em 90 Dias",
      description: "Se não gerarmos resultados mensuráveis em 90 dias, devolvemos 100% do seu investimento.",
      color: "blue"
    },
    {
      number: "#2", 
      title: "ROI Positivo em 6 Meses",
      description: "Garantimos ROI positivo em até 6 meses ou trabalhamos de graça até conseguir.",
      color: "green"
    },
    {
      number: "#3",
      title: "Satisfação Total",
      description: "A qualquer momento, se não estiver satisfeito, cancele sem multas ou penalidades.",
      color: "violet"
    }
  ];

  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <ParallaxText speed={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="font-playfair">Sua Garantia</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Tripla
              </span>
            </h2>
          </ParallaxText>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PremiumCard3D glowColor={guarantee.color}>
                <div className="text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <p className="text-4xl font-bold text-gray-400 mb-2">{guarantee.number}</p>
                  <h3 className="text-2xl font-bold mb-4 font-space-grotesk">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-300">
                    {guarantee.description}
                  </p>
                </div>
              </PremiumCard3D>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PremiumCard3D glowColor="orange">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8 text-red-400">
                ⚠️ Nem Todo Mundo Se Qualifica
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                Para garantir resultados extraordinários, só aceitamos clientes qualificados.
              </p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Temos apenas 5 vagas.
              </p>
            </div>
          </PremiumCard3D>
        </motion.div>
      </div>
    </section>
  );
}