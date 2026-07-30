'use client';

import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-secondary bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-accent">NA</h3>
              <p className="text-foreground-secondary text-sm">
                Software Engineer • AI/ML Builder • Full Stack Developer • Product Thinker
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">Navigation</h4>
              <div className="flex flex-col gap-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground-secondary hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex gap-3">
                {[
                  {
                    name: 'GitHub',
                    icon: GitHub,
                    url: 'https://GitHub.com/namanarora',
                  },
                  {
                    name: 'LinkedIn',
                    icon: Linkedin,
                    url: 'https://linkedin.com/in/naman-arora',
                  },
                  {
                    name: 'Email',
                    icon: Mail,
                    url: 'mailto:naman0807arora@gmail.com',
                  },
                ].map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-secondary hover:bg-accent/20 text-foreground hover:text-accent transition-all"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-surface-secondary" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground-secondary">
            <p>
              © {currentYear} Naman Arora. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/sitemap.xml"
                className="hover:text-accent transition-colors"
              >
                Sitemap
              </a>
              <a
                href="/privacy"
                className="hover:text-accent transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
