"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  const pss = [
    {
      title: "P.S.:",
      content: "Cada dia que você adia esta decisão, seus concorrentes ficam mais fortes no digital. Não deixe que eles dominem seu mercado. Aja agora."
    },
    {
      title: "P.P.S.:",
      content: "Lembre-se: oferecemos garantia tripla. Você não tem nada a perder e um império digital para ganhar. Clique agora e garanta sua vaga."
    },
    {
      title: "P.P.P.S.:",
      content: "Daqui a 1 ano, você pode estar dominando seu mercado ou assistindo outros dominarem. A escolha é sua. Faça a escolha certa."
    }
  ];

  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp Direto:",
      value: "(91) 984 255 658",
      link: "https://wa.me/5591984255658"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "E-mail Priority:",
      value: "contato@lordproducoes.com",
      link: "mailto:contato@lordproducoes.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Site:",
      value: "lordproducoes.com",
      link: "https://lordproducoes.com"
    }
  ];

  return (
    <footer className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 mb-16">
          {pss.map((ps, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl"
            >
              <p className="text-lg">
                <span className="font-bold text-yellow-300">{ps.title}</span> {ps.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-3xl p-10 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Ainda tem dúvidas? Fale com nosso time agora:
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:bg-white/20 transition-all"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    {contact.icon}
                  </div>
                </div>
                <p className="font-bold text-yellow-300 mb-2">{contact.label}</p>
                <p className="text-white">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-gray-700 pt-10"
        >
          <p className="text-gray-400 mb-4">
            © 2024 Lord Produções - CNPJ: 35.526.725/0001-00
          </p>
          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Transformando Pixels em Lucro Desde 2007
          </p>
          
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 p-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl italic"
          >
            <p className="text-xl text-yellow-200 mb-4">
              &quot;A diferença entre o sucesso e o fracasso no digital não é o talento. 
              É ter a estratégia certa e a equipe certa. Nós somos essa equipe.&quot;
            </p>
            <p className="font-bold text-yellow-300">
              - Diretor, Lord Produções
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </footer>
  );
}