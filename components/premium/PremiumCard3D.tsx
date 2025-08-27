"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface PremiumCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function PremiumCard3D({ 
  children, 
  className = "",
  glowColor = "violet"
}: PremiumCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const glowColors = {
    violet: "from-violet-600/30 to-purple-600/30",
    blue: "from-blue-600/30 to-cyan-600/30", 
    green: "from-emerald-600/30 to-green-600/30",
    pink: "from-pink-600/30 to-rose-600/30",
    orange: "from-orange-600/30 to-red-600/30"
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05, z: 50 }}
      transition={{ duration: 0.3 }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* Multiple glow layers for depth */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${glowColors[glowColor as keyof typeof glowColors]} rounded-3xl blur-3xl`}
        animate={{
          opacity: isHovered ? 1 : 0.3,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${glowColors[glowColor as keyof typeof glowColors]} rounded-3xl blur-xl`}
        animate={{
          opacity: isHovered ? 0.8 : 0.1,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content with glass effect */}
      <div 
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
        style={{ transform: "translateZ(50px)" }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(139, 92, 246, 0.3), transparent 50%)`
          }}
        />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${glowColors[glowColor as keyof typeof glowColors]} rounded-full`}
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%"
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -20],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}