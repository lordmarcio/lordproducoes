"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import AnimatedButton from "@/components/premium/AnimatedButton";
import ParallaxText from "@/components/premium/ParallaxText";

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 72,
    minutes: 0, 
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
              <span className="font-playfair">O Custo de</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Não Agir
              </span>{" "}
              <span className="font-inter">Agora</span>
            </h2>
          </ParallaxText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PremiumCard3D glowColor="orange">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-400 mb-8">
                ⏰ Enquanto você pondera esta decisão:
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                {[
                  "Seu concorrente está capturando 10 novos leads",
                  "50 pessoas procuraram seu serviço e não te encontraram",
                  "R$ 5.000 em vendas foram para outra empresa", 
                  "Sua autoridade digital continua inexistente"
                ].map((loss, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    <div className="text-2xl">📉</div>
                    <p className="text-gray-200">{loss}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-6 border border-red-500/30">
                <p className="text-2xl font-bold text-red-400">
                  Cada dia sem uma estratégia digital profissional custa dinheiro.
                </p>
              </div>
            </div>
          </PremiumCard3D>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PremiumCard3D glowColor="pink">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">
                A Escolha é Sua: <span className="text-yellow-400">Evolua</span> ou Seja{" "}
                <span className="text-red-400">Deixado Para Trás</span>
              </h3>

              <div className="bg-red-600/20 rounded-3xl p-8 mb-8 border border-red-500/30">
                <h4 className="text-2xl font-bold mb-4">⏰ Tempo Restante:</h4>
                <div className="flex justify-center space-x-4 text-4xl font-bold">
                  <div className="bg-white/10 text-red-400 rounded-xl p-4 border border-red-500/30">
                    <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <div className="text-sm text-gray-300">HORAS</div>
                  </div>
                  <div className="bg-white/10 text-red-400 rounded-xl p-4 border border-red-500/30">
                    <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <div className="text-sm text-gray-300">MIN</div>
                  </div>
                  <div className="bg-white/10 text-red-400 rounded-xl p-4 border border-red-500/30">
                    <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <div className="text-sm text-gray-300">SEG</div>
                  </div>
                </div>
              </div>

              <AnimatedButton variant="success" size="xl" gooey={true}>
                🚀 GARANTIR MINHA VAGA AGORA
              </AnimatedButton>

              <p className="text-lg font-bold text-red-400 mt-8">
                ⚠️ Atenção: Apenas 5 Vagas Disponíveis
              </p>
            </div>
          </PremiumCard3D>
        </motion.div>
      </div>
    </section>
  );
}