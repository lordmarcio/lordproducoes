"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import MagneticElement from "@/components/premium/MagneticElement";
import ParallaxText from "@/components/premium/ParallaxText";

export default function SolutionSection() {
  const benefits = [
    {
      icon: "⚡",
      text: "Cada vídeo que você posta gera pelo menos 10 novos leads qualificados",
      color: "yellow"
    },
    {
      icon: "🎯", 
      text: "Seu site converte 5% dos visitantes em clientes (a média nacional é 0,5%)",
      color: "blue"
    },
    {
      icon: "📈",
      text: "Seus anúncios têm ROI de 800% (para cada R$ 1 investido, voltam R$ 8)",
      color: "green"
    },
    {
      icon: "🤖",
      text: "Seu funil de vendas trabalha 24/7 vendendo no automático",
      color: "violet"
    }
  ];

  const testimonials = [
    {
      company: "Clínica Preciore",
      result: "multiplicar por 4 o número de consultas em apenas 6 meses",
      color: "blue"
    },
    {
      company: "Rênan Ferreira", 
      result: "transformar seu Instagram em uma máquina de vendas que fatura 6 dígitos por mês",
      color: "green"
    },
    {
      company: "dezenas de empresários",
      result: "descobrir o poder da Lord Produções",
      color: "violet"
    }
  ];

  const credentials = [
    { title: "Neuromarketing Aplicado", desc: "Sabemos exatamente quais cores, palavras e sons fazem seu cliente comprar" },
    { title: "Storytelling Cinematográfico", desc: "Nossos vídeos prendem atenção do primeiro ao último segundo" },
    { title: "Engenharia de Conversão", desc: "Cada elemento é testado e otimizado para maximizar vendas" },
    { title: "Inteligência de Dados", desc: "Decisões baseadas em números, não em achismos" }
  ];

  const stats = [
    "→ 3 prêmios em festivais de cinema (Guarnicê, Festival do Minuto RJ)",
    "→ Mais de 1.000 vídeos produzidos", 
    "→ 500+ funis de vendas estruturados",
    "→ Taxa média de conversão 5x acima do mercado",
    "→ ROI médio de 600% em campanhas de tráfego pago"
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
              <span className="font-playfair">A Revolução</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Silenciosa
              </span>{" "}
              <span className="font-inter">da Mídia de Alta Conversão</span>
            </h2>
          </ParallaxText>
        </motion.div>

        {/* Imagine Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <PremiumCard3D className="max-w-6xl mx-auto" glowColor="blue">
            <div className="text-center mb-12">
              <p className="text-3xl font-semibold mb-12 font-playfair italic text-gray-200">
                Imagine isto:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MagneticElement>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <p className="text-lg text-gray-200 leading-relaxed">{benefit.text}</p>
                    </div>
                  </MagneticElement>
                </motion.div>
              ))}
            </div>
          </PremiumCard3D>
        </motion.div>

        {/* Seems Impossible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <MagneticElement>
            <h3 className="text-4xl font-bold mb-12 text-red-400">
              Parece impossível?
            </h3>
          </MagneticElement>

          <div className="space-y-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <PremiumCard3D glowColor={testimonial.color}>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Era o que a <span className="font-bold text-white">{testimonial.company}</span> pensava antes de{" "}
                    <span className="text-green-400 font-bold">{testimonial.result}</span>.
                  </p>
                </PremiumCard3D>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PremiumCard3D className="max-w-6xl mx-auto" glowColor="violet">
            <div className="text-center mb-12">
              <ParallaxText speed={-0.1}>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">
                  Quem Somos e Por Que Isso Importa Para Você
                </h3>
              </ParallaxText>
              
              <p className="text-xl text-gray-300 mb-8">
                Não somos uma agência de marketing comum.
              </p>

              <MagneticElement>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-12">
                  Somos uma PRODUTORA DE RESULTADOS.
                </p>
              </MagneticElement>

              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                Com <span className="font-bold text-yellow-400">17 anos</span> transformando pixels em lucro, 
                desenvolvemos um método proprietário que combina:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MagneticElement>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full">
                      <h4 className="font-bold text-yellow-400 mb-3 text-lg">✅ {item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </MagneticElement>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
                Nossos números falam por si:
              </h4>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-200"
                  >
                    {stat}
                  </motion.p>
                ))}
              </div>
            </div>
          </PremiumCard3D>
        </motion.div>
      </div>
    </section>
  );
}