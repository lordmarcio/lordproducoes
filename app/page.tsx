"use client";

import { motion } from "framer-motion";
import MeshGradientBackground from "@/components/MeshGradientBackground";
import MagneticButton from "@/components/MagneticButton";
import PremiumCard from "@/components/PremiumCard";
import AnimatedText from "@/components/AnimatedText";
import GooeyEffect from "@/components/GooeyEffect";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <MeshGradientBackground />
      <GooeyEffect />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <section className="min-h-screen flex flex-col items-center justify-center px-8">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="font-playfair italic">Lord</span>{" "}
              <span className="font-space-grotesk bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Produções
              </span>
            </h1>
            
          </motion.div>


        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="min-h-screen flex items-center justify-center px-8 py-20"
        >
          <div className="max-w-6xl w-full">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16"
            >
              <span className="font-playfair">Nossa</span>{" "}
              <span className="font-space-grotesk bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="group">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors duration-300">
                    <span className="font-jetbrains-mono text-violet-500">01.</span> Pré-Produção
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Roteirização, storyboard e planejamento estratégico para garantir resultados excepcionais
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    <span className="font-jetbrains-mono text-purple-500">02.</span> Produção
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Captação com equipamentos de última geração e equipe altamente especializada
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="group">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    <span className="font-jetbrains-mono text-pink-500">03.</span> Pós-Produção
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Edição, colorização e finalização com padrão internacional de qualidade
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors duration-300">
                    <span className="font-jetbrains-mono text-violet-500">04.</span> Distribuição
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Estratégias de lançamento e distribuição multiplataforma para máximo alcance
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
