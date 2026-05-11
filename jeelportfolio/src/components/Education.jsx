import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Global University of Technology',
      period: '2018 - 2022',
      grade: 'GPA: 3.8/4.0'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'City Public School',
      period: '2016 - 2018',
      grade: 'Score: 92%'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Education
      </motion.h2>
      
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
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 hover:shadow-indigo-500/10 transition-all"
          >
            <div className="w-12 h-12 bg-indigo-900/50 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
            <p className="text-slate-400 font-medium mb-1">{edu.institution}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">{edu.period}</span>
              <span className="text-indigo-400 font-semibold">{edu.grade}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;

