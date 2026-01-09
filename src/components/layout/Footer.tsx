'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/ui';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Appropos-ai' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/appropos_ai' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/jeffreypelton/' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@appropos.ai' },
];

const footerLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold gradient-text cursor-pointer inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Appropos
            </motion.a>
            <p className="text-foreground-secondary text-sm mt-2">
              © {currentYear} Appropos. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-foreground-secondary hover:text-foreground text-sm transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-foreground-secondary hover:text-primary p-2 rounded-lg hover:bg-card transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-secondary text-xs">
            Building innovative software solutions for businesses worldwide.
          </p>
        </div>
      </Container>
    </footer>
  );
}
