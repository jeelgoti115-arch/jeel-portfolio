import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Web Developer',
      company: 'Sensussoft Software Pvt. Ltd.',
      period: 'January 2026 - April 2026',
      description: 'Developed full-stack web applications using HTML, React.js, Tailwind CSS, Node.js, Express.js, and Python. Acquired expertise in multiple programming languages and modern development practices.',
      icon: '💻'
    },
    {
      role: 'Python Developer with Django',
      company: 'BrainyBeam Technologies',
      period: 'July 2025',
      description: 'Learned backend development using Python with Django framework. Gained hands-on experience in building scalable web applications and working with databases.',
      icon: '🐍'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
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
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest mb-4 uppercase">JOURNEY</span>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8 relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent rounded-full md:left-1/2 md:translate-x-[-50%]"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`relative flex gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center md:left-1/2 md:translate-x-[-50%] z-10">
              <motion.div 
                whileHover={{ scale: 1.2, boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' }}
                className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-slate-950 shadow-lg flex items-center justify-center text-xl"
              >
                {exp.icon}
              </motion.div>
            </div>

            {/* Content */}
            <div className={`pl-24 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="glass-card p-8 md:p-10 border-cyan-500/20 hover:border-cyan-500/50 group h-full"
              >
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg mt-2">{exp.company}</p>
                    </div>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-widest border border-cyan-500/30 w-fit"
                  >
                    {exp.period}
                  </motion.span>
                </div>

                <p className="text-slate-300 leading-relaxed text-base">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;

