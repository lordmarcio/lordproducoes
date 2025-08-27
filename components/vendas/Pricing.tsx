"use client";

import { motion } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";

export default function Pricing() {
  const services = [
    { name: "Análise Completa do Seu Negócio", value: "R$ 5.000" },
    { name: "Estratégia Digital Personalizada", value: "R$ 8.000" },
    { name: "Produção de Vídeos de Alta Conversão", value: "R$ 15.000" },
    { name: "Site/Landing Page Otimizada", value: "R$ 10.000" },
    { name: "Gestão de Tráfego Pago por 3 Meses", value: "R$ 9.000" },
    { name: "Configuração de Funil de Vendas", value: "R$ 12.000" },
    { name: "Treinamento da Sua Equipe", value: "R$ 3.000" },
    { name: "Suporte Priority por 6 Meses", value: "R$ 6.000" }
  ];

  const reasons = [
    "Experiência Comprovada - 17 anos no mercado",
    "Visão 360° - Dominamos TODO o ecossistema digital",
    "Resultados Garantidos - ROI positivo ou devolvemos",
    "Tecnologia de Ponta - Ferramentas mais avançadas do mercado",
    "Atendimento Premium - Acesso direto ao diretor"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">O Que Você</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Recebe
            </span>{" "}
            <span className="font-inter">Ao Trabalhar Conosco</span>
          </h2>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg font-medium">{service.name}</span>
                </div>
                <span className="text-lg font-bold text-gray-600">(Valor: {service.value})</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-100 to-gray-50 p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">Valor Total:</span>
              <span className="text-3xl font-bold text-gray-700 line-through">R$ 68.000</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-3xl p-12 mb-12 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-6">
            A Oportunidade Que Pode Mudar Seu Negócio Para Sempre
          </h3>
          
          <p className="text-xl text-center mb-8">
            Sabemos que 2024 é o ano da virada digital. Empresas que não se adaptarem vão desaparecer.
            Por isso, criamos o
          </p>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h4 className="text-4xl font-bold text-yellow-300 mb-6">
              PROGRAMA TRANSFORMAÇÃO DIGITAL 2024
            </h4>
            
            <p className="text-xl mb-8">
              Para os próximos <span className="text-yellow-300 font-bold text-3xl">5 empresários</span> que se qualificarem:
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 mb-8">
              <p className="text-2xl mb-4">TUDO MENCIONADO ACIMA POR APENAS</p>
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl font-bold text-yellow-300">12x</span>
                <span className="text-3xl ml-3">de</span>
                <span className="text-6xl font-bold text-yellow-300 ml-3">R$ 2.997</span>
              </div>
              <p className="text-lg italic">
                Menos de R$ 100 por dia para ter uma equipe completa de marketing digital trabalhando para você.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all"
            >
              <span className="flex items-center">
                QUERO TRANSFORMAR MEU NEGÓCIO
                <ArrowRight className="ml-2 w-8 h-8" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-red-300 text-lg font-semibold">
              ⚠️ Mas tem um porém...
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Por Que Escolher a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Lord Produções
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">{reason.split(' - ')[0]}</span>
                  {reason.includes(' - ') && ` - ${reason.split(' - ')[1]}`}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}