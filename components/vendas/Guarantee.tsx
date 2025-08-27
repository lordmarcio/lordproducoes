"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, RefreshCw, XCircle } from "lucide-react";

export default function Guarantee() {
  const guarantees = [
    {
      icon: <Shield className="w-12 h-12" />,
      number: "#1",
      title: "Resultados em 90 Dias",
      description: "Se não gerarmos resultados mensuráveis em 90 dias, devolvemos 100% do seu investimento.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      number: "#2",
      title: "ROI Positivo em 6 Meses",
      description: "Garantimos ROI positivo em até 6 meses ou trabalhamos de graça até conseguir.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      number: "#3",
      title: "Satisfação Total",
      description: "A qualquer momento, se não estiver satisfeito, cancele sem multas ou penalidades.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const qualifications = [
    "Já faturam pelo menos R$ 30 mil/mês",
    "Estão comprometidos com crescimento real",
    "Têm produto/serviço de qualidade comprovada",
    "Podem investir em marketing consistentemente",
    "Querem dominar seu mercado, não apenas participar"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">Sua Garantia</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Tripla
            </span>{" "}
            <span className="font-inter">de Satisfação</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${guarantee.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}>
                {guarantee.icon}
              </div>
              
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-300 mb-2">{guarantee.number}</p>
                <h3 className="text-2xl font-bold mb-4 font-space-grotesk">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-10"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-red-600">
            ⚠️ Nem Todo Mundo Se Qualifica
          </h3>
          
          <p className="text-xl text-center mb-8 text-gray-700">
            Não trabalhamos com qualquer empresa. Para garantir resultados extraordinários, só aceitamos clientes que:
          </p>

          <div className="max-w-2xl mx-auto">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center mb-4 bg-white p-4 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{qual}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-2xl font-bold text-red-600 mb-4">
              Se você se encaixa nestes critérios...
            </p>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Temos apenas 5 vagas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}