"use client";

import { motion } from "framer-motion";
import { Search, Rocket, BarChart3, Trophy } from "lucide-react";

export default function Method() {
  const steps = [
    {
      letter: "L",
      title: "LEVANTAMENTO ESTRATÉGICO",
      icon: <Search className="w-12 h-12" />,
      description: "Analisamos profundamente seu negócio, mercado e concorrência. Identificamos oportunidades ocultas de crescimento que você nem sabia que existiam.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      letter: "O",
      title: "OTIMIZAÇÃO MULTICANAL",
      icon: <Rocket className="w-12 h-12" />,
      description: "Criamos um ecossistema digital integrado onde cada canal potencializa o outro, multiplicando seus resultados exponencialmente.",
      color: "from-purple-500 to-pink-500"
    },
    {
      letter: "R",
      title: "RESULTADOS MENSURÁVEIS",
      icon: <BarChart3 className="w-12 h-12" />,
      description: "Implementamos sistemas de tracking avançado que mostram exatamente de onde vem cada venda, permitindo escalar o que funciona.",
      color: "from-green-500 to-emerald-500"
    },
    {
      letter: "D",
      title: "DOMÍNIO DO MERCADO",
      icon: <Trophy className="w-12 h-12" />,
      description: "Posicionamos você como a autoridade inquestionável do seu nicho, fazendo a concorrência parecer amadora.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">O Método</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              L.O.R.D.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Sistema de 4 Passos Que <span className="font-bold">Garante Resultados</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start mb-6">
                <motion.div
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mr-6`}
                >
                  <span className="text-4xl font-bold">{step.letter}</span>
                </motion.div>
                <div className={`p-3 bg-gradient-to-r ${step.color} bg-opacity-10 rounded-xl`}>
                  <div className="text-gray-700">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-10 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            O Resultado Final?
          </h3>
          <p className="text-xl leading-relaxed">
            Você deixa de ser <span className="font-bold text-yellow-300">mais um no mercado</span> e se torna{" "}
            <span className="font-bold text-yellow-300 text-2xl">A REFERÊNCIA</span> que todos querem alcançar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}