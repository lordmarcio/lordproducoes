"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of viewport
      if (scrollPosition > windowHeight * 0.5 && !isClosed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
            
            {/* Main button */}
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl max-w-sm">
              <button
                onClick={handleClose}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="mb-4">
                <p className="font-bold text-lg mb-2">⚠️ Últimas 5 Vagas!</p>
                <p className="text-sm opacity-90">
                  Não perca a chance de transformar seu negócio com 17 anos de experiência.
                </p>
              </div>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                GARANTIR MINHA VAGA
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-3 -left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold"
            >
              HOT! 🔥
            </motion.div>
            
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -left-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold"
            >
              OFERTA LIMITADA
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}