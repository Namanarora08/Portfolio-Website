'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/data';

export function Achievements() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl sm:text-5xl font-bold">Achievements</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Recognition and awards that validate my work.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={`${achievement.title}-${index}`}
                variants={itemVariants}
                className="group relative p-6 rounded-lg border border-surface-secondary bg-surface hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-5 h-5 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground pr-12">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-accent">{achievement.award}</p>
                  <p className="text-sm text-foreground-secondary">{achievement.organization}</p>
                  <p className="text-xs text-foreground-secondary pt-2 border-t border-surface-secondary mt-2 pt-2">
                    {achievement.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
