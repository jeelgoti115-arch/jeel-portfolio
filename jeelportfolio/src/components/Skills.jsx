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
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const SkillSection = ({ title, items, icon }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <motion.h3 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
      >
        <span className="text-2xl">{icon}</span>
        {title}
        <div className="flex-1 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent rounded-full ml-2"></div>
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
            whileHover={{ y: -12, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card p-6 flex flex-col items-center gap-4 group cursor-default border-cyan-500/20 hover:border-cyan-500/50"
          >
            <div className="w-16 h-16 flex items-center justify-center p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:drop-shadow-lg" 
              />
            </div>
            <span className="text-sm font-bold text-slate-300 group-hover:text-cyan-300 transition-colors text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

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
        className="text-center mb-20"
      >
        <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest mb-4 uppercase">EXPERTISE</span>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Modern tools and technologies I use to build amazing digital experiences</p>
      </motion.div>
      
      <SkillSection title="Languages & Frameworks" items={skills} icon="⚙️" />
      <SkillSection title="Development Tools" items={tools} icon="🛠️" />
    </motion.section>
  );
};

export default Skills;

