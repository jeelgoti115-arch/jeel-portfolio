import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Let's Connect
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
      >
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mb-12"
      >
        <motion.a 
          whileHover={{ scale: 1.05, translateY: -5 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:jeelgoti115@gmail.com" 
          className="flex items-center gap-4 px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500 hover:text-indigo-400 transition-all font-semibold text-slate-300 group"
        >
          <img src="/mail.png" alt="Mail" className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform" />
          Mail
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05, translateY: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/jeel-goti-b9a984280/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500 hover:text-indigo-400 transition-all font-semibold text-slate-300 group"
        >
          <img src="/linkedln.png" alt="LinkedIn" className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform" />
          LinkedIn
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05, translateY: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/jeelgoti115-arch" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500 hover:text-indigo-400 transition-all font-semibold text-slate-300 group"
        >
          <img src="/github.png" alt="GitHub" className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform" />
          GitHub
        </motion.a>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-xl mx-auto space-y-4 bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full px-5 py-3 rounded-xl bg-slate-800 border-none text-white focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-5 py-3 rounded-xl bg-slate-800 border-none text-white focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-500"
          />
        </div>
        <textarea 
          placeholder="Message" 
          rows="4" 
          className="w-full px-5 py-3 rounded-xl bg-slate-800 border-none text-white focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-500"
        ></textarea>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default ContactMe;

