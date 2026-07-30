'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Experience</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Internships and projects that shaped my career.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative pl-8 border-l-2 border-surface-secondary hover:border-accent transition-colors duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-surface border-2 border-accent rounded-full group-hover:scale-125 transition-transform duration-300" />

                {/* Content Card */}
                <div className="p-6 rounded-lg bg-surface border border-surface-secondary hover:border-accent/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-accent font-semibold">{exp.position}</p>
                    </div>
                    <span className="text-sm text-foreground-secondary whitespace-nowrap">{exp.period}</span>
                  </div>

                  {exp.client && (
                    <p className="text-sm text-foreground-secondary mb-3">Client: {exp.client}</p>
                  )}

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-foreground-secondary flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-foreground-secondary mt-4">{exp.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
