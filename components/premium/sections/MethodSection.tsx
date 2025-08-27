"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import ParallaxText from "@/components/premium/ParallaxText";

export default function MethodSection() {
  const steps = [
    {
      letter: "L",
      title: "LEVANTAMENTO ESTRATÉGICO",
      description: "Analisamos profundamente seu negócio, mercado e concorrência. Identificamos oportunidades ocultas de crescimento que você nem sabia que existiam.",
      color: "blue"
    },
    {
      letter: "O", 
      title: "OTIMIZAÇÃO MULTICANAL",
      description: "Criamos um ecossistema digital integrado onde cada canal potencializa o outro, multiplicando seus resultados exponencialmente.",
      color: "violet"
    },
    {
      letter: "R",
      title: "RESULTADOS MENSURÁVEIS", 
      description: "Implementamos sistemas de tracking avançado que mostram exatamente de onde vem cada venda, permitindo escalar o que funciona.",
      color: "green"
    },
    {
      letter: "D",
      title: "DOMÍNIO DO MERCADO",
      description: "Posicionamos você como a autoridade inquestionável do seu nicho, fazendo a concorrência parecer amadora.",
      color: "orange"
    }
  ];

  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <ParallaxText speed={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="font-playfair">O Método</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-8xl font-black">
                L.O.R.D.
              </span>
            </h2>
          </ParallaxText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O Sistema de 4 Passos Que <span className="font-bold text-green-400">Garante Resultados</span>
          </p>
        </motion.div>

        {/* Method Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PremiumCard3D glowColor={step.color}>
                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ rotate: -180 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`w-20 h-20 bg-gradient-to-r ${
                      step.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                      step.color === 'violet' ? 'from-violet-500 to-purple-500' :
                      step.color === 'green' ? 'from-green-500 to-emerald-500' :
                      'from-orange-500 to-red-500'
                    } rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <span className="text-4xl font-bold">{step.letter}</span>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-space-grotesk">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </PremiumCard3D>
            </motion.div>
          ))}
        </div>

        {/* Final Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PremiumCard3D className="text-center" glowColor="violet">
            <h3 className="text-3xl font-bold mb-6 text-white">
              O Resultado Final?
            </h3>
            <p className="text-xl leading-relaxed text-gray-200">
              Você deixa de ser <span className="font-bold text-yellow-400">mais um no mercado</span> e se torna{" "}
              <span className="font-bold text-yellow-400 text-3xl">A REFERÊNCIA</span> que todos querem alcançar.
            </p>
          </PremiumCard3D>
        </motion.div>
      </div>
    </section>
  );
}