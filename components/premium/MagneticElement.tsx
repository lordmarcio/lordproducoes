"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  range?: number;
}

export default function MagneticElement({ 
  children, 
  className = "", 
  strength = 0.3,
  range = 100 
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < range) {
        const force = 1 - distance / range;
        x.set(distanceX * strength * force);
        y.set(distanceY * strength * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, strength, range]);

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {children}
      
      {/* Magnetic glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur-xl -z-10"
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}