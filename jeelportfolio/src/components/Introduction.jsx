import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Introduction = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest mb-3">WELCOME TO MY TECH PROFILE</span>
          <div className="h-1.5 w-16 bg-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
        >
          Hello, I'm <span className="text-gradient">Jeel Goti</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
        >
          Passionate to Develop <span className="font-semibold text-cyan-300">high-performance</span> digital solutions with a focus on <span className="font-semibold text-purple-300">user experience</span> and <span className="font-semibold text-pink-300">clean architecture</span>.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <motion.button 
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="btn-primary text-lg"
          >
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="btn-secondary text-lg"
          >
            <span className="flex items-center justify-center gap-2">
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { label: '5+', desc: 'Projects' },
            { label: '2+', desc: 'Years' },
            { label: '100%', desc: 'Passion' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.label}</p>
              <p className="text-sm text-slate-400 uppercase tracking-wide">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Introduction;

