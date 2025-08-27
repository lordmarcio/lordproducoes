"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Clock } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">A Revolução</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Silenciosa
            </span>{" "}
            <span className="font-inter">da Mídia de Alta Conversão</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-2xl mb-16"
        >
          <p className="text-2xl font-semibold text-center mb-10 text-gray-800">
            <span className="font-playfair italic">Imagine</span> isto:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                text: "Cada vídeo que você posta gera pelo menos 10 novos leads qualificados",
                color: "text-yellow-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                text: "Seu site converte 5% dos visitantes em clientes (a média nacional é 0,5%)",
                color: "text-blue-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                text: "Seus anúncios têm ROI de 800% (para cada R$ 1 investido, voltam R$ 8)",
                color: "text-green-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                text: "Seu funil de vendas trabalha 24/7 vendendo no automático",
                color: "text-purple-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all"
              >
                <div className={`${item.color} flex-shrink-0`}>
                  {item.icon}
                </div>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8">
            <span className="text-red-600">Parece impossível?</span>
          </h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg text-left"
            >
              <p className="text-lg">
                Era o que a <span className="font-bold">Clínica Preciore</span> pensava antes de{" "}
                <span className="text-green-600 font-bold">multiplicar por 4</span> o número de consultas em apenas 6 meses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg text-left"
            >
              <p className="text-lg">
                Era o que o <span className="font-bold">Rênan Ferreira</span> achava antes de transformar seu Instagram em{" "}
                <span className="text-green-600 font-bold">uma máquina de vendas que fatura 6 dígitos</span> por mês.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg text-left"
            >
              <p className="text-lg">
                Era o que <span className="font-bold">dezenas de empresários</span> pensavam... até descobrirem o poder da{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Lord Produções
                </span>.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Quem Somos e Por Que Isso Importa Para Você
          </h3>

          <p className="text-xl text-center mb-8">
            Não somos uma agência de marketing comum.
          </p>

          <p className="text-3xl font-bold text-center mb-10 text-yellow-300">
            Somos uma PRODUTORA DE RESULTADOS.
          </p>

          <p className="text-lg text-center mb-10">
            Com <span className="font-bold text-yellow-300">17 anos</span> transformando pixels em lucro, 
            desenvolvemos um método proprietário que combina:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: "Neuromarketing Aplicado", desc: "Sabemos exatamente quais cores, palavras e sons fazem seu cliente comprar" },
              { title: "Storytelling Cinematográfico", desc: "Nossos vídeos prendem atenção do primeiro ao último segundo" },
              { title: "Engenharia de Conversão", desc: "Cada elemento é testado e otimizado para maximizar vendas" },
              { title: "Inteligência de Dados", desc: "Decisões baseadas em números, não em achismos" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
              >
                <h4 className="font-bold text-yellow-300 mb-2">✅ {item.title}</h4>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-6 text-yellow-300 text-center">Nossos números falam por si:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              {[
                "→ 3 prêmios em festivais de cinema (Guarnicê, Festival do Minuto RJ)",
                "→ Mais de 1.000 vídeos produzidos",
                "→ 500+ funis de vendas estruturados",
                "→ Taxa média de conversão 5x acima do mercado",
                "→ ROI médio de 600% em campanhas de tráfego pago"
              ].map((stat, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white/90"
                >
                  {stat}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}