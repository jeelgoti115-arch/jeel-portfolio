import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/html.png' },
    { name: 'Tailwind CSS', icon: '/tailwind.png' },
    { name: 'React.js', icon: '/reactjs.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'Python', icon: '/python.png' },
  ];

  const tools = [
    { name: 'VS Code', icon: '/vscode.png' },
    { name: 'Cursor', icon: '/cursor.png' },
    { name: 'Antigravity', icon: '/antigravity.png' },
    { name: 'Figma', icon: '/figma.png' },
    { name: 'Git & GitHub', icon: '/github.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillSection = ({ title, items }) => (
    <div className="mb-20">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-10 flex items-center gap-4"
      >
        <span className="w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></span>
        {title}
      </motion.h3>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {items.map((item) => (
          <motion.div 
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-6 flex flex-col items-center gap-4 group cursor-default"
          >
            <div className="w-14 h-14 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300">
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
      >
        Technical <span className="text-gradient">Arsenal</span>
      </motion.h2>
      
      <SkillSection title="Capabilities" items={skills} />
      <SkillSection title="Workflow Tools" items={tools} />
    </motion.section>
  );
};

export default Skills;

