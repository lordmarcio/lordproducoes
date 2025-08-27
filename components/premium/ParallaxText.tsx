"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ParallaxText({ 
  children, 
  className = "",
  speed = 0.5,
  direction = "up"
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
    down: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]),
    left: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
    right: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
  };

  const styleProps = {
    up: { y: transforms.up },
    down: { y: transforms.down },
    left: { x: transforms.left },
    right: { x: transforms.right }
  };

  return (
    <motion.div
      ref={ref}
      style={styleProps[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}