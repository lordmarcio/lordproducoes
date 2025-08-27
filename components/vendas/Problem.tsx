"use client";

import { motion } from "framer-motion";
import { TrendingDown, AlertCircle, XCircle } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-playfair">A</span>{" "}
            <span className="font-space-grotesk text-red-600">Dura Realidade</span>{" "}
            <span className="font-inter">Que Ninguém Quer Admitir</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 mb-12 shadow-xl"
        >
          <p className="text-xl md:text-2xl text-center mb-8">
            Sabe qual é a diferença entre o negócio que fatura{" "}
            <span className="font-bold text-red-600">R$ 50 mil</span> por mês e o que fatura{" "}
            <span className="font-bold text-green-600">R$ 500 mil</span>?
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl text-center"
            >
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="font-semibold text-gray-800">Não é o produto</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl text-center"
            >
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="font-semibold text-gray-800">Não é o preço</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl text-center"
            >
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="font-semibold text-gray-800">Não é a qualidade</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-3xl font-bold text-blue-600">
              É a capacidade de converter <span className="underline decoration-wavy">atenção</span> em <span className="text-green-600">vendas</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl mb-12"
        >
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            🚨 O segredo que as agências tradicionais não querem que você saiba:
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Ter 100 mil seguidores no Instagram <strong>NÃO</strong> significa ter clientes</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Gastar R$ 10 mil em anúncios <strong>NÃO</strong> garante retorno</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Ter um site bonito <strong>NÃO</strong> traz vendas</span>
            </li>
          </ul>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-white rounded-2xl shadow-lg"
          >
            <p className="text-2xl font-bold text-center">
              O que traz vendas é{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                MÍDIA DE ALTA CONVERSÃO
              </span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Por Que <span className="text-red-600">87%</span> das Empresas{" "}
            <span className="font-playfair italic">Falham</span> no Digital
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Depois de <span className="font-bold">17 anos</span> produzindo conteúdo que já gerou{" "}
            <span className="font-bold text-green-600">milhões em vendas</span> para nossos clientes, 
            descobrimos algo perturbador:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Vídeos sem roteiro que ninguém assiste até o fim",
              "Sites que demoram 8 segundos para carregar (e perdem 74% dos visitantes)",
              "Anúncios que queimam dinheiro sem trazer um único cliente",
              "Redes sociais que viram um cemitério digital"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl flex items-start"
              >
                <AlertCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-left text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-3xl max-w-3xl mx-auto shadow-2xl"
          >
            <p className="text-xl mb-4">Mas o pior de tudo?</p>
            <p className="text-2xl font-bold">
              Elas nem sabem que estão perdendo dinheiro. Porque ninguém mede o que realmente importa:{" "}
              <span className="text-yellow-300 text-3xl">CONVERSÃO</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}