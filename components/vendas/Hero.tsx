"use client";

import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Paper Shaders Background */}
      <div className="absolute inset-0">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          speed={0.3}
          colors={[
            "#000000",
            "#8B5CF6",
            "#000000",
            "#A855F7",
            "#FFFFFF",
            "#000000",
            "#7C3AED",
            "#000000",
            "#9333EA",
          ]}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-60"
          speed={0.2}
          colors={[
            "#000000",
            "#8B5CF6",
            "#000000",
            "#A855F7",
            "#FFFFFF",
            "#000000",
            "#7C3AED",
            "#000000",
            "#9333EA",
          ]}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo centralizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">LP</span>
          </div>
        </motion.div>

        {/* Texto: Próximo Nível Digital */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight"
        >
          <span className="font-playfair text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            Próximo
          </span>{" "}
          <span className="font-space-grotesk">Nível</span>{" "}
          <span className="font-inter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Digital
          </span>
        </motion.h1>

        {/* Barra com cantos arredondados e círculos animados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-6 flex items-center justify-center">
            {/* SVG Filter para efeito gooey */}
            <svg className="absolute inset-0 w-0 h-0">
              <defs>
                <filter id="gooey">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooey" />
                  <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
                </filter>
              </defs>
            </svg>
            
            {/* Círculo esquerdo animado */}
            <motion.div
              animate={{ 
                x: [-20, 0, -20],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute left-4 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
              style={{ filter: "url(#gooey)" }}
            />
            
            {/* Círculo direito animado */}
            <motion.div
              animate={{ 
                x: [20, 0, 20],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
              style={{ filter: "url(#gooey)" }}
            />
            
            {/* Conteúdo separado por barras verticais */}
            <div className="flex items-center justify-center space-x-6 text-white font-medium text-lg">
              <span className="font-space-grotesk">Redes Sociais</span>
              <div className="w-px h-6 bg-white/40"></div>
              <span className="font-inter">SEO</span>
              <div className="w-px h-6 bg-white/40"></div>
              <span className="font-playfair">Posicionamento</span>
              <div className="w-px h-6 bg-white/40"></div>
              <span className="font-space-grotesk">Web</span>
              <div className="w-px h-6 bg-white/40"></div>
              <span className="font-inter">Audiovisual</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}