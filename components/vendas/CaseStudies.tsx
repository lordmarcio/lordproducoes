"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, DollarSign } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      name: "Clínica Preciore",
      role: "Setor de Saúde",
      quote: "Em 6 meses, quadruplicamos o número de consultas. O ROI foi de 1.200%. Nunca imaginei que o digital poderia trazer tantos pacientes qualificados.",
      results: [
        { metric: "400%", label: "mais consultas agendadas" },
        { metric: "70%", label: "redução no custo por aquisição" },
        { metric: "1.200%", label: "ROI" }
      ],
      achievement: "Posicionamento como referência regional",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Rênan Ferreira",
      role: "Empresário Digital",
      quote: "A Lord transformou meu Instagram em uma máquina de vendas. Saí de 5 mil para 6 dígitos mensais em menos de 1 ano.",
      results: [
        { metric: "100k+", label: "mensais de faturamento" },
        { metric: "8%", label: "taxa de conversão" },
        { metric: "20x", label: "crescimento em 12 meses" }
      ],
      achievement: "Sistema 100% automatizado",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Rachel Cossetti",
      role: "Consultora",
      quote: "O funil que criaram para mim vende sozinho. Acordo com notificações de vendas todos os dias.",
      results: [
        { metric: "R$ 50k", label: "no primeiro lançamento" },
        { metric: "35%", label: "conversão no webinário" },
        { metric: "5.000", label: "leads qualificados" }
      ],
      achievement: "Vendas no automático 24/7",
      gradient: "from-green-500 to-emerald-500"
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
            <span className="font-playfair">Casos de</span>{" "}
            <span className="font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Sucesso
            </span>{" "}
            <span className="font-inter">Que Provam Que Isso Funciona</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{caseStudy.name}</h3>
                  <p className="text-gray-600">{caseStudy.role}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="italic text-gray-700 mb-8 relative">
                <span className="text-6xl text-gray-200 absolute -top-4 -left-2">&quot;</span>
                <p className="relative z-10 pl-8">{caseStudy.quote}</p>
              </blockquote>

              <div className="space-y-4 mb-6">
                {caseStudy.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-white rounded-xl"
                  >
                    <span className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.gradient} text-transparent bg-clip-text`}>
                      {result.metric}
                    </span>
                    <span className="text-gray-600 text-sm">{result.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${caseStudy.gradient} text-white p-4 rounded-2xl text-center`}
              >
                <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">{caseStudy.achievement}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            Nossos Clientes Não São Apenas Números
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            São <span className="text-yellow-300 font-bold">parceiros de sucesso</span> que confiaram em nós para{" "}
            <span className="text-green-400 font-bold">transformar seus negócios</span> e hoje colhem os frutos de ter{" "}
            <span className="text-blue-400 font-bold">uma presença digital dominante</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-yellow-300 mb-2">500+</p>
              <p className="text-white/80">Clientes Atendidos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-yellow-300 mb-2">R$ 50M+</p>
              <p className="text-white/80">Gerados em Vendas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-yellow-300 mb-2">600%</p>
              <p className="text-white/80">ROI Médio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}