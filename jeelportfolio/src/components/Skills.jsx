import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/html.png' },
    { name: 'Tailwind CSS', icon: '/tailwind.png' },
    { name: 'React.js', icon: '/reactjs.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'Figma', icon: '/figma.png' },
    { name: 'Git & GitHub', icon: '/github.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'Python', icon: '/python.png' },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Skills and Tools
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              translateY: -10,
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.2)"
            }}
            className="p-6 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl shadow-xl transition-all flex flex-col items-center gap-4 group cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-slate-300">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

