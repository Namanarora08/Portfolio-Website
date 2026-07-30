'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Let's Connect</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Reach out for a quick chat.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'naman0807arora@gmail.com',
                    href: 'mailto:naman0807arora@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+91 8847524836',
                    href: 'tel:+918847524836',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Patiala, Punjab | Chandigarh, India',
                  },
                ].map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div key={contact.label} className="flex gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 h-fit">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-foreground-secondary text-sm">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-foreground font-semibold hover:text-accent transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-semibold">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-foreground-secondary">Connect with me</p>
                <div className="flex gap-4">
                  {[
                    { name: 'GitHub', url: 'https://GitHub.com/namanarora' },
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/naman-arora' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-surface border border-surface-secondary hover:border-accent text-foreground hover:text-accent transition-all"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-secondary focus:border-accent outline-none transition-colors text-foreground placeholder-foreground-secondary"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-secondary focus:border-accent outline-none transition-colors text-foreground placeholder-foreground-secondary"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-foreground">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-secondary focus:border-accent outline-none transition-colors text-foreground placeholder-foreground-secondary"
                  placeholder="Your company (optional)"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-secondary focus:border-accent outline-none transition-colors text-foreground placeholder-foreground-secondary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-green-900/20 border border-green-500/50 text-green-400 text-sm"
                >
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
