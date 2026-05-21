import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const accentGradient = 'from-cyan-500 to-cyan-500';

  const projects = [
    {
      title: 'Solar System',
      description: 'A comprehensive frontend project showcasing the solar system with HTML, CSS, and JavaScript. Demonstrates deployment best practices.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/jeelgoti115-arch/solar-system',
    },
    {
      title: 'CSMS',
      description: 'Web application for vehicle flow control at service stations. Built during internship with robust backend infrastructure.',
      tags: ['Node.js', 'API', 'MongoDB', 'Express.js'],
      link: 'https://github.com/jeelgoti115-arch/csms',
    },
    {
      title: 'Roofhero',
      description: 'Modern roof service system for Australia market. Built as company project with smooth animations and responsive design.',
      tags: ['React', 'Tailwind', 'Animations'],
      link: 'https://github.com/jeelgoti115-arch/RoofHero',
    },
    {
      title: 'Text Summarizer',
      description: 'AI-powered summarization tool using GPT-4.0 model. Supports PDFs, text, and images with intelligent processing.',
      tags: ['React', 'AI', 'Node.js'],
      link: 'https://github.com/jeelgoti115-arch/text-summarizer/',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-6 max-w-7xl mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest mb-4 uppercase">MY WORK</span>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Showcasing my latest work across different technologies and domains</p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className={`glass-card overflow-hidden border-cyan-500/20 hover:border-cyan-500/50 flex flex-col h-full`}>
              {/* Top accent bar */}
              <div className={`h-1 bg-gradient-to-r ${accentGradient}`}></div>
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 bg-gradient-to-br ${project.color} bg-opacity-10 rounded-xl border border-white/10 group-hover:border-white/30 transition-all`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-gradient-to-r ${project.color} bg-opacity-5 border-white/10 text-cyan-300 hover:border-cyan-500/50 transition-all`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;