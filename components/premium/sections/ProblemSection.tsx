"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import MagneticElement from "@/components/premium/MagneticElement";
import ParallaxText from "@/components/premium/ParallaxText";

export default function ProblemSection() {
  const problems = [
    "Vídeos sem roteiro que ninguém assiste até o fim",
    "Sites que demoram 8 segundos para carregar (e perdem 74% dos visitantes)", 
    "Anúncios que queimam dinheiro sem trazer um único cliente",
    "Redes sociais que viram um cemitério digital"
  ];

  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        
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
              <span className="font-playfair">A</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Dura Realidade
              </span>{" "}
              <span className="font-inter">Que Ninguém Quer Admitir</span>
            </h2>
          </ParallaxText>
        </motion.div>

        {/* Main Problem Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <PremiumCard3D className="max-w-5xl mx-auto" glowColor="orange">
            <div className="text-center space-y-8">
              <p className="text-2xl md:text-3xl mb-8">
                Sabe qual é a diferença entre o negócio que fatura{" "}
                <span className="font-bold text-red-400">R$ 50 mil</span> por mês e o que fatura{" "}
                <span className="font-bold text-green-400">R$ 500 mil</span>?
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { text: "Não é o produto", icon: "❌" },
                  { text: "Não é o preço", icon: "❌" },
                  { text: "Não é a qualidade", icon: "❌" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <p className="font-semibold text-gray-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <MagneticElement>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    É a capacidade de converter{" "}
                    <span className="underline decoration-wavy decoration-blue-400">atenção</span>{" "}
                    em <span className="text-green-400">vendas</span>.
                  </p>
                </div>
              </MagneticElement>
            </div>
          </PremiumCard3D>
        </motion.div>

        {/* Secret Revelation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <PremiumCard3D glowColor="pink">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-3">
                🚨 O segredo que as agências tradicionais não querem que você saiba:
              </h3>
              
              <div className="space-y-4 text-lg">
                {[
                  "Ter 100 mil seguidores no Instagram NÃO significa ter clientes",
                  "Gastar R$ 10 mil em anúncios NÃO garante retorno", 
                  "Ter um site bonito NÃO traz vendas"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-400 text-xl mt-1">✗</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <MagneticElement className="mt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold text-center">
                    O que traz vendas é{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                      MÍDIA DE ALTA CONVERSÃO
                    </span>
                  </p>
                </div>
              </MagneticElement>
            </div>
          </PremiumCard3D>
        </motion.div>

        {/* 87% Failure Rate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ParallaxText speed={-0.1}>
            <h3 className="text-4xl md:text-5xl font-bold mb-12">
              Por Que <span className="text-red-500 font-black">87%</span> das Empresas{" "}
              <span className="font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Falham
              </span> no Digital
            </h3>
          </ParallaxText>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Depois de <span className="font-bold text-blue-400">17 anos</span> produzindo conteúdo que já gerou{" "}
            <span className="font-bold text-green-400">milhões em vendas</span> para nossos clientes, 
            descobrimos algo perturbador:
          </p>

          <MagneticElement>
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl font-semibold text-gray-200">
                A maioria das empresas está{" "}
                <span className="text-red-400 font-bold">jogando dinheiro fora</span>{" "}
                porque está fazendo marketing como se ainda estivéssemos em{" "}
                <span className="text-orange-400 font-bold">2010</span>.
              </p>
            </div>
          </MagneticElement>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard3D glowColor="orange">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">{problem}</p>
                  </div>
                </PremiumCard3D>
              </motion.div>
            ))}
          </div>

          {/* The Worst Part */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <PremiumCard3D glowColor="pink" className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                <p className="text-xl mb-6 text-gray-300">Mas o pior de tudo?</p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Elas nem sabem que estão perdendo dinheiro. Porque ninguém mede o que realmente importa:{" "}
                  <span className="text-yellow-400 text-4xl font-black">CONVERSÃO</span>.
                </p>
              </div>
            </PremiumCard3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}