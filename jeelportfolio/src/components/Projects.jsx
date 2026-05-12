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
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ 
              y: -15,
              transition: { duration: 0.3 }
            }}
            className="group bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 border border-slate-800/50 flex flex-col"
          >
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors min-h-[3.5rem] flex items-center">{project.title}</h3>
              <p className="text-slate-400 mb-6 min-h-[6rem] line-clamp-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6 flex-1 content-start">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider h-fit">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a 
                whileHover={{ x: 5 }}
                href={project.link}
                className="inline-flex items-center gap-2 text-indigo-400 font-bold transition-all"
              >
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;