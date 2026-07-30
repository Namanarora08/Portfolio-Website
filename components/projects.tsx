'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export function Projects() {
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

  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Building intelligent solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group h-full rounded-xl border border-surface-secondary bg-surface hover:border-accent/50 transition-all duration-300 overflow-hidden hover:shadow-xl"
                whileHover={{ y: -8 }}
              >
                {/* Project Header */}
                <div className="p-6 space-y-4 h-full flex flex-col">
                  {/* Badge */}
                  <div className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent">
                    Featured
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-accent font-medium">{project.tagline}</p>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-surface-secondary text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-surface-secondary">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Projects Link */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <button className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors font-semibold">
              View All Projects ({PROJECTS.length})
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
