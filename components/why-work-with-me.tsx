'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Target, Cpu, Layers, Users } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '@/lib/data';

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Brain,
  Target,
  Cpu,
  Layers,
  Users,
};

export function WhyWorkWithMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Why Work With Me</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              What makes me stand out as a teammate and builder.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_ME.map((item, index) => {
              const Icon = ICON_MAP[item.icon] || Brain;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-surface-secondary bg-surface hover:border-accent/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className="mb-4 p-3 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground-secondary">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 space-y-4"
          >
            <p className="text-lg text-foreground-secondary">
              Ready to work together? Let's get in touch.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
