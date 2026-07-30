'use client';

import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl text-pretty">
              Curiosity and continuous learning drive everything I do. Here's my story.
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground-secondary leading-relaxed">
                I'm a pre-final year Computer Science student at Thapar Institute of Engineering & Technology, passionate about building intelligent software that solves real-world problems through engineering, AI, and thoughtful product design.
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                My journey spans full-stack development, machine learning, and product thinking. I've worked on healthcare AI systems, supply chain optimization, and government digital transformation projects at KPMG.
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                Beyond code, I believe in the power of collaboration, continuous learning, and shipping products that matter. I've led 10+ member teams, secured ₹10L+ in sponsorships, and consistently delivered results.
              </p>
            </motion.div>

            {/* Interests Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { title: 'Software Engineering', desc: 'Building scalable, production-ready systems' },
                { title: 'Artificial Intelligence', desc: 'ML/DL for real-world problem solving' },
                { title: 'Full Stack Development', desc: 'From frontend to database architecture' },
                { title: 'Product Design', desc: 'User-centric thinking and UX excellence' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 rounded-lg bg-surface border border-surface-secondary hover:border-accent transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
