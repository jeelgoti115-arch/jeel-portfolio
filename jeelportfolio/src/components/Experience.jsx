import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Web Developer',
      company: 'Sensussoft Software Pvt. Ltd.',
      period: 'January 2026 - April 2026',
      description: 'Learned Developing full Web-application using Html, React.js, Tailwind CSS, Node.js, Express.js, Python. Here i got knowledge of different computer languages for developing Software.'
    },
    {
      role: 'Python Delevelper with Django Intern',
      company: 'BrainyBeam Technologies',
      period: 'July-2025',
      description: 'Learned to develop the backend of web-applications using python with django framework during the days of internship'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Experience
      </motion.h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-indigo-900"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + 0.15, type: "spring", stiffness: 200 }}
              className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-950"
            ></motion.div>
            
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800 hover:border-indigo-500/30 transition-all group"
            >
              <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">{exp.period}</span>
              <h3 className="text-xl font-bold text-slate-100 mt-1 group-hover:text-white transition-colors">{exp.role}</h3>
              <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
              <p className="text-slate-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;

