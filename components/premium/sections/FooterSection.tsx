"use client";

import { motion } from "framer-motion";
import PremiumCard3D from "@/components/premium/PremiumCard3D";

export default function FooterSection() {
  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="space-y-8 mb-16">
          {[
            {
              title: "P.S.:",
              content: "Cada dia que você adia esta decisão, seus concorrentes ficam mais fortes no digital. Não deixe que eles dominem seu mercado. Aja agora."
            },
            {
              title: "P.P.S.:",
              content: "Lembre-se: oferecemos garantia tripla. Você não tem nada a perder e um império digital para ganhar."
            },
            {
              title: "P.P.P.S.:",
              content: "Daqui a 1 ano, você pode estar dominando seu mercado ou assistindo outros dominarem. A escolha é sua."
            }
          ].map((ps, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PremiumCard3D glowColor="blue">
                <p className="text-lg">
                  <span className="font-bold text-yellow-400">{ps.title}</span> {ps.content}
                </p>
              </PremiumCard3D>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PremiumCard3D glowColor="violet" className="text-center">
            <h3 className="text-3xl font-bold mb-8">
              Ainda tem dúvidas? Fale com nosso time agora:
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "📱", label: "WhatsApp:", value: "(91) 984 255 658" },
                { icon: "📧", label: "E-mail:", value: "contato@lordproducoes.com" },
                { icon: "🌐", label: "Site:", value: "lordproducoes.com" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                >
                  <div className="text-3xl mb-3">{contact.icon}</div>
                  <p className="font-bold text-yellow-400 mb-2">{contact.label}</p>
                  <p className="text-white">{contact.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-10">
              <p className="text-gray-400 mb-4">
                © 2024 Lord Produções - CNPJ: 35.526.725/0001-00
              </p>
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
                Transformando Pixels em Lucro Desde 2007
              </p>
              
              <motion.blockquote
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl italic border border-yellow-500/20"
              >
                <p className="text-xl text-yellow-200 mb-4">
                  &quot;A diferença entre o sucesso e o fracasso no digital não é o talento. 
                  É ter a estratégia certa e a equipe certa. Nós somos essa equipe.&quot;
                </p>
                <p className="font-bold text-yellow-300">
                  - Diretor, Lord Produções
                </p>
              </motion.blockquote>
            </div>
          </PremiumCard3D>
        </motion.div>
      </div>
    </section>
  );
}