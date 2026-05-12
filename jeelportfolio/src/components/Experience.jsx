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
        className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
      >
        Professional <span className="text-gradient">Experience</span>
      </motion.h2>
      
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-10 border-l-2 border-white/5"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            
            <div className="glass-card p-8 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                  <p className="text-slate-500 font-medium text-lg mt-1">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 bg-sky-500/10 text-sky-400 text-xs font-bold rounded-full uppercase tracking-widest border border-sky-500/20 w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;

