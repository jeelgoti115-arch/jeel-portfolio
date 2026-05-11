import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
    >
      <div className="w-full max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        >
          Hello, I'm <span className="text-indigo-400 drop-shadow-[0_0_20px_rgba(129,140,248,0.3)]">Jeel Goti</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate developer dedicated to building beautiful, functional, and user-centric digital experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, translateY: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 shadow-xl shadow-indigo-500/30 transition-all"
          >
            View My Work
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, translateY: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="px-8 py-3 border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm text-slate-300 rounded-full font-semibold hover:bg-slate-800/60 transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Introduction;

