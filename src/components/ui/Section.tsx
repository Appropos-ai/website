'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'default' | 'secondary' | 'none';
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  containerSize = 'lg',
  background = 'default' 
}: SectionProps) {
  const backgrounds = {
    default: 'bg-background',
    secondary: 'bg-background-secondary',
    none: '',
  };
  
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`py-20 md:py-28 lg:py-32 ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </motion.section>
  );
}
