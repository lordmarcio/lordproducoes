"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  loop = true
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
          setIsBlinking(false);
        } else {
          // Finished typing, wait then start deleting
          setIsBlinking(true);
          setTimeout(() => {
            if (loop || currentTextIndex < texts.length - 1) {
              setIsDeleting(true);
            }
          }, delayBetween);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          setIsBlinking(false);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => 
            loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)
          );
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetween, loop]);

  return (
    <div className={`font-mono ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: isBlinking ? [1, 0] : 1 }}
        transition={{ 
          duration: 0.8, 
          repeat: isBlinking ? Infinity : 0,
          repeatType: "reverse" 
        }}
        className="text-violet-500"
      >
        |
      </motion.span>
    </div>
  );
}