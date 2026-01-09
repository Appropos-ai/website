'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-semibold tracking-wide rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 border border-white/20 backdrop-blur-sm',
      secondary: 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 border border-white/20',
      outline: 'border-2 border-primary/50 bg-transparent text-foreground hover:border-primary hover:bg-primary/10 focus-visible:ring-primary backdrop-blur-sm',
      ghost: 'bg-transparent text-foreground hover:bg-white/5 focus-visible:ring-primary',
    };
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    // Premium shimmer animation for primary variant
    const shimmerEffect = variant === 'primary' && (
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{
          translateX: ['100%', '-100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </motion.div>
    );
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ 
          scale: 1.03,
          y: -2,
        }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {shimmerEffect}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
