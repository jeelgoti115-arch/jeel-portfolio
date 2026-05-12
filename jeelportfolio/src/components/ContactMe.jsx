import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8"
      >
        Get in <span className="text-gradient">Touch</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light"
      >
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 mb-16"
      >
        {[
          { name: 'Email', icon: '/mail.png', href: 'mailto:jeelgoti115@gmail.com' },
          { name: 'LinkedIn', icon: '/linkedln.png', href: 'https://www.linkedin.com/in/jeel-goti-b9a984280/' },
          { name: 'GitHub', icon: '/github.png', href: 'https://github.com/jeelgoti115-arch' }
        ].map((link) => (
          <motion.a 
            key={link.name}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={link.href} 
            target={link.name !== 'Email' ? "_blank" : undefined}
            rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
            className="glass-card flex items-center gap-4 px-8 py-4 hover:border-sky-500/30 transition-all font-semibold text-slate-300 group"
          >
            <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all" />
            {link.name}
          </motion.a>
        ))}
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="max-w-xl mx-auto space-y-6 glass-card p-10 shadow-2xl"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2 text-left">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
        </div>
        <div className="space-y-2 text-left">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
          <textarea 
            placeholder="Tell me about your project..." 
            rows="5" 
            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600"
          ></textarea>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full py-4 text-lg"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default ContactMe;

