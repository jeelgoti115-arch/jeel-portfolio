import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'SSASIT, Surat',
      period: '2022 - 2026',
      grade: 'CGPA: 7.8/10.0',
      icon: '🎓',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Ashadeep Vidhyalaya 4',
      period: '2020 - 2022',
      grade: 'Score: 82%',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-6 max-w-6xl mx-auto relative"
    >
      {/* Background elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest mb-4 uppercase">EDUCATION</span>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          Academic <span className="text-gradient">Background</span>
        </h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className={`glass-card p-10 h-full border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden`}>
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`}></div>

              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-16 h-16 bg-gradient-to-br ${edu.color} bg-opacity-20 rounded-2xl flex items-center justify-center mb-8 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all border border-white/10`}
              >
                <span className="text-3xl">{edu.icon}</span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                {edu.degree}
              </h3>

              <p className="text-cyan-300 font-semibold mb-6 text-lg">
                {edu.institution}
              </p>

              <div className="flex flex-col gap-4 pt-6 border-t border-cyan-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Period</span>
                  <span className="text-cyan-300 font-bold">{edu.period}</span>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`inline-block bg-gradient-to-r ${edu.color} bg-opacity-20 text-cyan-300 px-6 py-3 rounded-full text-sm font-bold border border-cyan-500/30 w-fit`}
                >
                  {edu.grade}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;

