'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';
import { HERO_STATS, SOCIAL_LINKS } from '@/lib/data';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-surface-secondary"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground-secondary">Available for opportunities</span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Software Engineer
                <br />
                <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  Building Intelligent
                </span>
                <br />
                & Impact-Driven
              </h1>
              <p className="text-lg text-foreground-secondary max-w-lg text-pretty">
                Pre-final year Computer Science student at Thapar Institute building scalable products, exploring emerging technologies, and solving meaningful real-world problems through engineering and AI.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-surface hover:bg-surface-secondary text-foreground font-semibold rounded-lg border border-surface-secondary transition-all duration-300 hover:scale-105">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href="https://github.com/namanarora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface hover:bg-surface-secondary transition-colors duration-200 hover:text-accent"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/naman-arora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface hover:bg-surface-secondary transition-colors duration-200 hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:naman0807arora@gmail.com"
                className="p-3 rounded-lg bg-surface hover:bg-surface-secondary transition-colors duration-200 hover:text-accent"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 blur-3xl" />
            <div className="relative h-full rounded-3xl border border-surface-secondary overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178036969750-XiqAgEEun11e70XzC4avWz3409xFQc.jpeg"
                alt="Naman Arora"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-20 border-t border-surface-secondary"
        >
          {HERO_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-foreground-secondary mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
