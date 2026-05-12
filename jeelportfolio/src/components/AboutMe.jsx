import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
      >
        My <span className="text-gradient">Story</span>
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative aspect-square glass-card p-2 overflow-hidden shadow-2xl">
            <img 
              src="/aboutjeelimg.jpeg" 
              alt="Jeel Goti" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Full Stack Developer</h3>
            <div className="h-1.5 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"></div>
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            I am a passionate developer with a strong foundation in <span className="text-white font-medium">Modern Web Technologies</span>. My journey into the digital world is fueled by a desire to create seamless, high-performance applications that solve real-world problems.
          </p>
          
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            With focused experience in <span className="text-white font-medium">React.js</span> and <span className="text-white font-medium">Node.js</span>, I bridge the gap between aesthetics and functionality, ensuring every project I touch is both beautiful and robust.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="glass-card p-6 border-sky-500/10">
              <p className="text-sky-400 font-bold text-3xl mb-1">4+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Months Experience</p>
            </div>
            <div className="glass-card p-6 border-indigo-500/10">
              <p className="text-indigo-400 font-bold text-3xl mb-1">5+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Live Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;

