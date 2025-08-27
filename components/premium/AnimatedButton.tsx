"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  gooey?: boolean;
}

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "lg", 
  className = "",
  onClick,
  gooey = false
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      bg: "bg-gradient-to-r from-violet-600 to-purple-600",
      glow: "shadow-violet-500/50",
      text: "text-white"
    },
    secondary: {
      bg: "bg-gradient-to-r from-gray-100 to-white border-2 border-violet-600", 
      glow: "shadow-gray-500/30",
      text: "text-violet-600"
    },
    danger: {
      bg: "bg-gradient-to-r from-red-600 to-orange-600",
      glow: "shadow-red-500/50", 
      text: "text-white"
    },
    success: {
      bg: "bg-gradient-to-r from-green-600 to-emerald-600",
      glow: "shadow-green-500/50",
      text: "text-white"
    }
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
    xl: "px-12 py-6 text-xl"
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <div className="relative inline-block" style={gooey ? { filter: "url(#gooey)" } : {}}>
      <motion.button
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative overflow-hidden rounded-full font-bold 
          transition-all duration-300 transform-gpu
          ${currentVariant.bg} ${currentVariant.text} ${currentSize}
          ${className}
        `}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
          animate={{
            x: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-xl ${currentVariant.glow}`}
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white/30 rounded-full scale-0"
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 0 : 1
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>

      {/* Floating glow orbs */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-sm"
            animate={{
              y: [-5, -15, -5],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm"
            animate={{
              y: [5, 15, 5],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
        </>
      )}
    </div>
  );
}