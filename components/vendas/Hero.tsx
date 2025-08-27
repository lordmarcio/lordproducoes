"use client";

import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute inset-0 opacity-30">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          speed={0.1}
          colors={[
            "#E0E7FF",
            "#818CF8",
            "#F0F4FF",
            "#6366F1",
            "#FFFFFF",
            "#EEF2FF",
            "#A78BFA",
            "#F5F3FF",
            "#8B5CF6",
          ]}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-2 bg-red-50 border border-red-200 rounded-full"
        >
          <span className="text-red-600 font-semibold text-sm">
            ⚠️ 93% das empresas brasileiras estão invisíveis online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          <span className="font-playfair">A Verdade</span>{" "}
          <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Brutal
          </span>{" "}
          <span className="font-inter">Sobre Porque</span>{" "}
          <span className="font-space-grotesk text-red-600">93%</span>{" "}
          <span className="font-inter">das Empresas Brasileiras Estão</span>{" "}
          <span className="font-playfair italic underline decoration-wavy decoration-red-500">
            Invisíveis
          </span>{" "}
          <span className="font-inter">na Internet</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8"
        >
          E Como Uma Produtora com{" "}
          <span className="font-bold text-blue-600">17 Anos de Experiência</span>{" "}
          Está Mudando Este Jogo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-jetbrains-mono text-red-600">⏱️ 8 Segundos</span>
          </h2>
          <p className="text-xl text-gray-700">
            <span className="font-playfair">Você tem</span>{" "}
            <span className="font-bold text-red-600">8 segundos</span>{" "}
            para capturar a atenção do seu cliente...
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            Ou ele vai para o seu <span className="text-red-600 underline">concorrente</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700">Caro Empresário,</p>
          
          <p className="text-2xl font-semibold text-gray-900 max-w-3xl mx-auto">
            Deixe-me fazer uma pergunta que pode{" "}
            <span className="text-blue-600 underline decoration-wavy">
              mudar completamente
            </span>{" "}
            o rumo do seu negócio nos próximos 12 meses:
          </p>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl"
          >
            <p className="text-2xl md:text-3xl font-bold">
              Quantos clientes você perdeu <span className="underline">HOJE</span> porque seu 
              concorrente apareceu primeiro no Google?
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xl text-gray-600 italic"
          >
            Se você não sabe a resposta... é porque provavelmente foram{" "}
            <span className="font-bold text-red-600">muitos</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}