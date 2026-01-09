'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Users, Target, Award } from 'lucide-react';
import { Section } from '@/components/ui';

const values = [
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We work closely with you to understand your needs.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable outcomes that impact your bottom line.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on quality, delivering excellence in every project.',
  },
];

const highlights = [
  'Agile development methodology',
  'Transparent communication',
  'Dedicated project managers',
  'Post-launch support',
  'Scalable architecture',
  'Modern tech stack',
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4 block"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Building the <span className="gradient-text">Future</span> Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-secondary mb-6 text-lg"
          >
            At Appropos, we believe in the power of technology to transform businesses. 
            Founded with a vision to deliver innovative software solutions, we&apos;ve grown 
            into a trusted partner for companies worldwide.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground-secondary mb-8"
          >
            Our team of experienced developers, designers, and strategists work together 
            to bring your ideas to life. We combine creativity with technical expertise 
            to deliver solutions that exceed expectations.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground-secondary">{highlight}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Values */}
        <div className="space-y-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:bg-card-hover hover:border-border-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground-secondary">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-2xl p-6"
          >
            <p className="text-foreground italic">
              &ldquo;Our mission is to empower businesses with technology that drives growth, 
              efficiency, and innovation. We&apos;re not just developers – we&apos;re your partners 
              in digital transformation.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
