import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { 
      name: 'Email', 
      icon: '✉️', 
      href: 'mailto:jeelgoti115@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      href: 'https://www.linkedin.com/in/jeel-goti-b9a984280/',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'GitHub', 
      icon: '🐙', 
      href: 'https://github.com/jeelgoti115-arch',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest mb-4 uppercase">CONTACT</span>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-6 mb-16"
      >
        {socialLinks.map((link, idx) => (
          <motion.a 
            key={link.name}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.href} 
            target={link.name !== 'Email' ? "_blank" : undefined}
            rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
            className={`glass-card flex items-center gap-3 px-8 py-5 hover:border-cyan-500/60 transition-all font-semibold text-slate-200 group border-cyan-500/20 hover:shadow-lg`}
            style={{
              animationDelay: `${idx * 0.1}s`
            }}
          >
            <span className="text-2xl group-hover:scale-125 transition-transform">{link.icon}</span>
            <span>{link.name}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <form className="glass-card p-10 md:p-12 space-y-8 border-cyan-500/20 hover:border-cyan-500/40 transition-all">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-sm font-bold text-cyan-400 uppercase tracking-wider block">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-3.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white focus:border-cyan-500/60 focus:bg-white/10 outline-none transition-all placeholder:text-slate-500 hover:border-cyan-500/40"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-sm font-bold text-cyan-400 uppercase tracking-wider block">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-3.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white focus:border-cyan-500/60 focus:bg-white/10 outline-none transition-all placeholder:text-slate-500 hover:border-cyan-500/40"
              />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="space-y-3"
          >
            <label className="text-sm font-bold text-cyan-400 uppercase tracking-wider block">Message</label>
            <textarea 
              placeholder="Tell me about your project or idea..." 
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-6 py-3.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white focus:border-cyan-500/60 focus:bg-white/10 outline-none transition-all placeholder:text-slate-500 hover:border-cyan-500/40 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary w-full py-4 text-lg font-bold flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>

          <p className="text-xs text-slate-500 text-center pt-4">
            I'll get back to you as soon as possible. Looking forward to hearing from you!
          </p>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default ContactMe;

