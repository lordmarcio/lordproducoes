"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Urgency() {
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

  const losses = [
    { action: "Seu concorrente está capturando", value: "10 novos leads" },
    { action: "50 pessoas procuraram seu serviço e", value: "não te encontraram" },
    { action: "R$ 5.000 em vendas foram para", value: "outra empresa" },
    { action: "Sua autoridade digital continua", value: "inexistente" }
  ];

  const steps = [
    "Clique no botão abaixo e preencha o formulário de qualificação",
    "Nossa equipe analisará seu negócio em 24 horas",
    "Se aprovado, agendaremos uma Sessão Estratégica GRATUITA de 45 minutos",
    "Mostraremos exatamente como podemos multiplicar seus resultados",
    "Você decide se quer fazer parte do seleto grupo que domina o digital"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">O Custo de</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Não Agir
            </span>{" "}
            <span className="font-inter">Agora</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-2xl mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-red-600">
            <Clock className="w-8 h-8 inline mr-2" />
            Enquanto você pondera esta decisão:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {losses.map((loss, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl"
              >
                <TrendingDown className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">{loss.action}</p>
                  <p className="font-bold text-red-600 text-lg">{loss.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl"
          >
            <p className="text-2xl font-bold">
              Cada dia sem uma estratégia digital profissional{" "}
              <span className="text-yellow-300">custa dinheiro</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-12 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            A Escolha é Sua: <span className="text-yellow-300">Evolua</span> ou Seja{" "}
            <span className="text-red-400">Deixado Para Trás</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-red-900/30 p-8 rounded-2xl border-2 border-red-500"
            >
              <h4 className="text-2xl font-bold mb-4 text-red-400">Opção 1:</h4>
              <p className="text-lg mb-4">
                Continuar fazendo o que sempre fez. Posts aleatórios. Anúncios que não convertem. 
                Site parado no tempo.
              </p>
              <p className="text-red-300 font-bold">E torcer para que algo mude.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-900/30 p-8 rounded-2xl border-2 border-green-500"
            >
              <h4 className="text-2xl font-bold mb-4 text-green-400">Opção 2:</h4>
              <p className="text-lg mb-4">
                Dar o passo que separa empresas medianas de empresas extraordinárias. 
                Investir em uma estratégia profissional.
              </p>
              <p className="text-green-300 font-bold">E colher os frutos de um negócio que cresce no automático.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-red-600 rounded-3xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-4">⏰ Tempo Restante:</h4>
              <div className="flex justify-center space-x-4 text-4xl font-bold">
                <div className="bg-white text-red-600 rounded-xl p-4">
                  <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <div className="text-sm">HORAS</div>
                </div>
                <div className="bg-white text-red-600 rounded-xl p-4">
                  <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <div className="text-sm">MIN</div>
                </div>
                <div className="bg-white text-red-600 rounded-xl p-4">
                  <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <div className="text-sm">SEG</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-xl mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="font-playfair">Próximos</span>{" "}
            <span className="text-blue-600">Passos</span>
          </h3>
          <p className="text-xl text-center mb-8 text-red-600 font-bold">
            (Ação Imediata Necessária)
          </p>

          <div className="space-y-4 mb-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-center"
          >
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all">
              <span className="flex items-center justify-center">
                🚀 QUERO TRANSFORMAR MEU NEGÓCIO AGORA
                <ArrowRight className="ml-2 w-8 h-8" />
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-lg font-bold text-red-600 mb-2">
              <AlertTriangle className="w-6 h-6 inline mr-2" />
              Atenção: Apenas 5 Vagas Disponíveis
            </p>
            <p className="italic text-gray-600">
              Esta oferta especial expira em 72 horas ou quando as 5 vagas forem preenchidas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}