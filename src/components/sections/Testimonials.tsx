'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Section, Card } from '@/components/ui';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'Appropos transformed our entire digital infrastructure. Their team delivered beyond our expectations, and the new platform has increased our efficiency by 300%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Systems',
    content: 'Working with Appropos was a game-changer. Their expertise in cloud architecture helped us scale from 10K to 1M users seamlessly.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Director',
    company: 'InnovateLab',
    content: 'The mobile app they built for us has received incredible feedback from our users. Professional team, great communication, and outstanding results.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Founder',
    company: 'NextGen Solutions',
    content: 'From concept to launch, Appropos guided us every step of the way. They truly understand how to build products that users love.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Engineering',
    company: 'CloudFirst',
    content: 'Their security expertise gave us peace of mind. The audit they conducted identified critical vulnerabilities we had overlooked.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Managing Director',
    company: 'Global Ventures',
    content: 'Appropos delivered our enterprise solution on time and under budget. Their agile approach kept us informed and involved throughout.',
    rating: 5,
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

export default function Testimonials() {
  return (
    <Section id="testimonials" background="secondary">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium mb-4 block"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          What Our <span className="gradient-text">Clients</span> Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground-secondary max-w-2xl mx-auto"
        >
          Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
          working with Appropos.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.name} variants={itemVariants}>
            <Card glow="secondary" className="h-full">
              <div className="flex flex-col h-full">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-secondary/50 mb-4" />
                
                {/* Content */}
                <p className="text-foreground-secondary flex-grow mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-foreground-secondary">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
