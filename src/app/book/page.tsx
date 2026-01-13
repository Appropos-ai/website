'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Video } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-12">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">
            Schedule a Call
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="gradient-text">Intro Call</span>
          </h1>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Let&apos;s discuss your project and explore how we can help bring your ideas to life. 
            Choose a time that works best for you.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">30 Minutes</div>
              <div className="text-sm text-foreground-secondary">Quick intro call</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Video className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="font-medium">Video Call</div>
              <div className="text-sm text-foreground-secondary">Google Meet</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium">Flexible Times</div>
              <div className="text-sm text-foreground-secondary">Pick what works for you</div>
            </div>
          </div>
        </motion.div>

        {/* Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/20 overflow-hidden"
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wUlaHdTrbwk_4Z9ID5grZKmllWqoKX_hg3B0xt3lpr77jGOzoYmDuPn434gA_UV291J_0jujg?gv=true"
            style={{ border: 0, backgroundColor: 'white' }}
            width="100%"
            height="600"
            frameBorder="0"
            title="Schedule an appointment with Appropos"
            className="rounded-lg bg-white"
          />
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-foreground-secondary">
            Prefer email?{' '}
            <a
              href="mailto:contact@appropos.ai"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              contact@appropos.ai
            </a>
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
