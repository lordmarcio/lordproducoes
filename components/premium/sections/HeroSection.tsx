"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/premium/AnimatedButton";
import MagneticElement from "@/components/premium/MagneticElement";
import TypewriterText from "@/components/premium/TypewriterText";
import ParallaxText from "@/components/premium/ParallaxText";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center text-white">
        
        {/* Alert Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <MagneticElement>
            <div className="px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-xl">
              <span className="text-red-300 font-semibold text-sm">
                ⚠️ 93% das empresas brasileiras estão invisíveis online
              </span>
            </div>
          </MagneticElement>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          <ParallaxText speed={0.2}>
            <span className="font-playfair">A</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Verdade Brutal
            </span>
          </ParallaxText>
          
          <br />
          
          <ParallaxText speed={-0.1}>
            <span className="font-inter">Sobre Porque</span>{" "}
            <span className="font-space-grotesk text-6xl text-red-500 font-black">93%</span>
          </ParallaxText>
          
          <br />
          
          <ParallaxText speed={0.3}>
            <span className="font-inter">das Empresas Brasileiras</span>
          </ParallaxText>
          
          <br />
          
          <ParallaxText speed={-0.2}>
            <span className="font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Estão Invisíveis
            </span>{" "}
            <span className="font-inter">na Internet</span>
          </ParallaxText>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
        >
          <p>
            E Como Uma Produtora com{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              17 Anos de Experiência
            </span>{" "}
            Está Mudando Este Jogo
          </p>
        </motion.div>

        {/* 8 Seconds Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <MagneticElement strength={0.2} range={150}>
            <div className="bg-black/40 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="font-jetbrains-mono text-red-400">⏱️</span>{" "}
                <TypewriterText 
                  texts={["8 Segundos", "8 Segundos...", "Apenas 8 Segundos"]}
                  className="text-red-400"
                />
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                <span className="font-playfair">Você tem</span>{" "}
                <span className="font-bold text-red-400">8 segundos</span>{" "}
                para capturar a atenção do seu cliente...
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                Ou ele vai para o seu{" "}
                <span className="text-red-400 underline decoration-wavy">concorrente</span>.
              </p>
            </div>
          </MagneticElement>
        </motion.div>

        {/* Opening Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 space-y-8"
        >
          <p className="text-lg text-gray-300">Caro Empresário,</p>
          
          <p className="text-2xl font-semibold max-w-4xl mx-auto leading-relaxed">
            Deixe-me fazer uma pergunta que pode{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">
              mudar completamente
            </span>{" "}
            o rumo do seu negócio nos próximos 12 meses:
          </p>

          <MagneticElement strength={0.3}>
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Quantos clientes você perdeu{" "}
                <span className="text-red-400 underline">HOJE</span>{" "}
                porque seu concorrente apareceu primeiro no Google?
              </p>
            </div>
          </MagneticElement>

          <p className="text-xl text-gray-400 italic">
            Se você não sabe a resposta... é porque provavelmente foram{" "}
            <span className="font-bold text-red-400">muitos</span>.
          </p>
        </motion.div>

        {/* Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 space-y-6 max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Veja, enquanto você lê estas linhas, existem{" "}
            <span className="font-bold text-blue-400">127 pessoas</span> na sua cidade procurando{" "}
            <span className="font-bold text-green-400">EXATAMENTE</span> pelo que você vende.
          </p>
          
          <p className="text-lg text-gray-300">Mas tem um problema...</p>

          <MagneticElement>
            <p className="text-3xl font-bold text-red-400">
              Elas nunca vão encontrar você.
            </p>
          </MagneticElement>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">Por quê?</p>
            <p className="text-xl leading-relaxed">
              Porque em 2024, não basta ter um negócio incrível. Não basta ter o melhor produto. 
              Não basta ter 30 anos de experiência.
            </p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Se você não existe na internet da MANEIRA CERTA, você simplesmente... não existe.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
          className="mb-16"
        >
          <AnimatedButton variant="primary" size="xl" gooey={true}>
            🚀 DESCOBRIR A SOLUÇÃO AGORA
          </AnimatedButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}