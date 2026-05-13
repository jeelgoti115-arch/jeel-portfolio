import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Solar System',
      description: 'A Comprehensive project where i build only frontend of project and how to deploye frontend.',
      tags: ['HTML', 'Vanilla CSS', 'JavaScript'],
      link: 'https://github.com/jeelgoti115-arch/solar-system'
    },
    {
      title: 'CSMS',
      description: 'A web application that controlls the vehicle flow at service station. Implemented this project as per task during my internship period',
      tags: ['Node.js', 'API', 'MongoDB', 'Express.js'],
      link: 'https://github.com/jeelgoti115-arch/csms'
    },
    {
      title: 'Roofhero',
      description: 'A mordern Roofservice system in australia. Implemented this project as part of company project employee',
      tags: ['React', 'Tailwind', 'Animations'],
      link: 'https://github.com/jeelgoti115-arch/RoofHero'
    },
    {
      title: 'Text Summarizer',
      description: 'An small ai summarier tool that uses gpt4.0 model for summarization of pdfs,text or images.',
      tags: ['React', 'AI', 'Node.js'],
      link: 'https://github.com/jeelgoti115-arch/text-summarizer/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
      >
        <span className="text-gradient">Projects</span>
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="glass-card group flex flex-col overflow-hidden"
          >
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;