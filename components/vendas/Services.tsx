"use client";

import { motion } from "framer-motion";
import { Video, Globe, DollarSign, Share2, Zap, Play, Code, Megaphone, Mail, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Video className="w-10 h-10" />,
      title: "VÍDEOS QUE VENDEM",
      subtitle: "(Não Apenas Entretêm)",
      color: "from-red-500 to-pink-500",
      features: [
        "Roteiros baseados em gatilhos mentais que prendem atenção",
        "Edições com ritmo de blockbuster que mantêm o espectador hipnotizado",
        "CTAs estratégicos que geram ação imediata",
        "Thumbnails que geram até 400% mais cliques",
        "SEO para YouTube que coloca você na primeira página"
      ],
      result: "3x mais visualizações, 5x mais engajamento, 10x mais vendas"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "SITES QUE CONVERTEM",
      subtitle: "(Não Apenas Existem)",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Páginas que carregam em menos de 3 segundos (ou você perde 40% dos visitantes)",
        "Copy persuasiva que transforma curiosos em compradores",
        "Funis de conversão que guiam o cliente até a compra",
        "Landing pages com conversão acima de 20%",
        "SEO técnico que coloca você no topo do Google"
      ],
      result: "300% mais tráfego orgânico, 500% mais conversões"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "TRÁFEGO PAGO QUE DÁ LUCRO",
      subtitle: "(Não Prejuízo)",
      color: "from-green-500 to-emerald-500",
      features: [
        "Segmentação cirúrgica que encontra seu cliente ideal",
        "Criativos que param o scroll e geram cliques",
        "Copy que vende desde o primeiro contato",
        "Remarketing inteligente que recupera vendas perdidas",
        "Otimização contínua baseada em dados reais"
      ],
      result: "CPL 60% menor, ROI 5x maior"
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "REDES SOCIAIS QUE ENGAJAM",
      subtitle: "(E Vendem)",
      color: "from-purple-500 to-pink-500",
      features: [
        "Conteúdo estratégico que educa, entretém e vende",
        "Stories que geram urgência e ação imediata",
        "Lives que constroem autoridade e confiança",
        "Automação inteligente que responde 24/7",
        "Influencer marketing que multiplica seu alcance"
      ],
      result: "200% mais engajamento, 400% mais vendas via Direct"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "FUNIS DE VENDAS AUTOMÁTICOS",
      subtitle: "(O Santo Graal do Marketing Digital)",
      color: "from-orange-500 to-red-500",
      features: [
        "Páginas de captura que geram leads qualificados",
        "E-mail marketing que nutre e converte",
        "Webinários automáticos que vendem produtos de alto ticket",
        "Upsells e downsells que maximizam o ticket médio",
        "Automação completa do processo de vendas"
      ],
      result: "30% de conversão em vendas, LTV 3x maior"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">O Ecossistema</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Digital Completo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que Transforma Visitantes em <span className="font-bold">Clientes Fiéis</span>
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl text-white mr-4`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      <span className="font-space-grotesk">{service.title}</span>
                    </h3>
                    <p className="text-gray-600 font-playfair italic">{service.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="text-gray-400"
                >
                  <ArrowUpRight className="w-8 h-8" />
                </motion.div>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  {index === 0 && "Esqueça vídeos institucionais chatos que ninguém assiste."}
                  {index === 1 && "Seu site atual provavelmente é um CEMITÉRIO DIGITAL."}
                  {index === 2 && "90% das empresas QUEIMAM dinheiro com anúncios."}
                  {index === 3 && "Chega de postar por postar."}
                  {index === 4 && "O Santo Graal do marketing digital."}
                </p>
                
                <p className="font-bold text-lg mb-4">
                  {index === 0 && "Criamos MÁQUINAS DE CONVERSÃO EM VÍDEO:"}
                  {index === 1 && "Nós criamos MÁQUINAS DE VENDAS 24/7:"}
                  {index === 2 && "Nós criamos CAMPANHAS QUE MULTIPLICAM SEU INVESTIMENTO:"}
                  {index === 3 && "Criamos ESTRATÉGIAS QUE TRANSFORMAM SEGUIDORES EM CLIENTES:"}
                  {index === 4 && "Criamos SISTEMAS QUE VENDEM ENQUANTO VOCÊ DORME:"}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-r ${service.color} text-white p-6 rounded-2xl`}
              >
                <p className="font-bold text-lg">
                  <span className="font-jetbrains-mono">Resultado médio:</span>{" "}
                  <span className="text-xl">{service.result}.</span>
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}