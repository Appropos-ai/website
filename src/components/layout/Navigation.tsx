'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button, Container } from '@/components/ui';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'py-5'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                  Appropos
                </span>
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-5 py-2 text-sm font-medium tracking-wide uppercase"
                  whileHover={{ y: -1 }}
                >
                  <span className={`transition-colors duration-300 ${
                    hoveredLink === link.name 
                      ? 'text-white' 
                      : 'text-foreground-secondary'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: hoveredLink === link.name ? '80%' : 0,
                      opacity: hoveredLink === link.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Glow effect */}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navGlow"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}
              
              <div className="ml-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Sparkles size={16} className="mr-1" />
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(20px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-background/90"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="relative z-50 flex flex-col items-center justify-center min-h-screen gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-3xl font-light tracking-widest uppercase text-foreground-secondary hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-4"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Sparkles size={18} className="mr-2" />
                  Get Started
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
