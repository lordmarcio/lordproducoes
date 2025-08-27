"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";
import ParallaxText from "@/components/premium/ParallaxText";

export default function ServicesSection() {
  const services = [
    {
      title: "VÍDEOS QUE VENDEM",
      subtitle: "(Não Apenas Entretêm)",
      icon: "🎬",
      color: "pink",
      result: "3x mais visualizações, 5x mais engajamento, 10x mais vendas"
    },
    {
      title: "SITES QUE CONVERTEM", 
      subtitle: "(Não Apenas Existem)",
      icon: "🌐",
      color: "blue",
      result: "300% mais tráfego orgânico, 500% mais conversões"
    },
    {
      title: "TRÁFEGO PAGO QUE DÁ LUCRO",
      subtitle: "(Não Prejuízo)",
      icon: "💰",
      color: "green", 
      result: "CPL 60% menor, ROI 5x maior"
    },
    {
      title: "REDES SOCIAIS QUE ENGAJAM",
      subtitle: "(E Vendem)",
      icon: "📱",
      color: "violet",
      result: "200% mais engajamento, 400% mais vendas via Direct"
    },
    {
      title: "FUNIS DE VENDAS AUTOMÁTICOS",
      subtitle: "(O Santo Graal)",
      icon: "⚡",
      color: "orange",
      result: "30% de conversão em vendas, LTV 3x maior"
    }
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
              <span className="font-playfair">O Ecossistema</span>{" "}
              <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Digital Completo
              </span>
            </h2>
          </ParallaxText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Que Transforma Visitantes em <span className="font-bold text-green-400">Clientes Fiéis</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard3D glowColor={service.color}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-8xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      <span className="font-space-grotesk">{service.title}</span>
                    </h3>
                    <p className="text-gray-400 font-playfair italic text-lg mb-4">{service.subtitle}</p>
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                      <p className="font-bold text-green-400">
                        <span className="font-jetbrains-mono">Resultado médio:</span>{" "}
                        <span className="text-lg">{service.result}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </PremiumCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}