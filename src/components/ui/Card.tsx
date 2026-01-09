'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'primary' | 'secondary' | 'none';
}

export default function Card({ children, className = '', hover = true, glow = 'none' }: CardProps) {
  const glowStyles = {
    primary: 'hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50',
    secondary: 'hover:shadow-xl hover:shadow-secondary/30 hover:border-secondary/50',
    none: 'hover:shadow-lg hover:shadow-black/20',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : undefined}
      className={`bg-card border-2 border-border rounded-2xl p-6 transition-all duration-300 shadow-md shadow-black/10 ${hover ? 'hover:bg-card-hover hover:border-border-hover' : ''} ${glowStyles[glow]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
