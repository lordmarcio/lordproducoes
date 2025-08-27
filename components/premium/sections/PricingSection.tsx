"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import AnimatedButton from "@/components/premium/AnimatedButton";
import ParallaxText from "@/components/premium/ParallaxText";

export default function PricingSection() {
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
              <span className="font-playfair">A Oportunidade</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Que Pode Mudar
              </span>{" "}
              <span className="font-inter">Seu Negócio Para Sempre</span>
            </h2>
          </ParallaxText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PremiumCard3D glowColor="violet" className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              PROGRAMA TRANSFORMAÇÃO DIGITAL 2024
            </h3>
            
            <p className="text-xl mb-8 text-gray-300">
              Para os próximos <span className="text-yellow-400 font-bold text-3xl">5 empresários</span> que se qualificarem:
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 mb-8">
              <p className="text-2xl mb-4 text-gray-200">TUDO MENCIONADO ACIMA POR APENAS</p>
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl font-bold text-yellow-400">12x</span>
                <span className="text-3xl ml-3 text-gray-200">de</span>
                <span className="text-6xl font-bold text-yellow-400 ml-3">R$ 2.997</span>
              </div>
              <p className="text-lg italic text-gray-300">
                Menos de R$ 100 por dia para ter uma equipe completa de marketing digital trabalhando para você.
              </p>
            </div>

            <AnimatedButton variant="success" size="xl" gooey={true}>
              🚀 QUERO TRANSFORMAR MEU NEGÓCIO AGORA
            </AnimatedButton>

            <p className="text-red-400 text-lg font-semibold mt-8">
              ⚠️ Mas tem um porém...
            </p>
          </PremiumCard3D>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PremiumCard3D glowColor="blue">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">
                Por Que Escolher a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Lord Produções
                </span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "EXPERIÊNCIA COMPROVADA - 17 anos no mercado",
                  "VISÃO 360° - Dominamos TODO o ecossistema digital", 
                  "RESULTADOS GARANTIDOS - ROI positivo ou devolvemos",
                  "TECNOLOGIA DE PONTA - Ferramentas mais avançadas",
                  "ATENDIMENTO PREMIUM - Acesso direto ao diretor"
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-200 text-left">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </PremiumCard3D>
        </motion.div>
      </div>
    </section>
  );
}