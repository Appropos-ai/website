'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap 
} from 'lucide-react';
import { Section, Card } from '@/components/ui';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud architecture and deployment on AWS, Azure, and GCP with automated CI/CD pipelines.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Data pipelines, analytics platforms, and machine learning solutions to unlock insights from your data.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Security audits, penetration testing, and implementation of best practices to protect your digital assets.',
  },
  {
    icon: Zap,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs designed for performance, security, and seamless integration.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <Section id="services" background="secondary">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium mb-4 block"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          What We <span className="gradient-text">Offer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground-secondary max-w-2xl mx-auto"
        >
          We provide comprehensive software solutions tailored to your business needs, 
          from concept to deployment and beyond.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <Card glow="primary" className="h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground-secondary flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
