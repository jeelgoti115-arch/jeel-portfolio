import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const statsData = [
    { value: '4', label: 'Months Experience', icon: '🚀' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/JEEL_GOTI_RESUME.pdf'; // Update with your actual resume filename
    link.download = 'JEEL_GOTI_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-black text-white mb-24 text-center"
      >
        My <span className="text-gradient">Story</span>
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/20 rounded-3xl blur-3xl group-hover:blur-2xl group-hover:opacity-100 opacity-60 transition-all duration-1000"></div>
          <div className="relative aspect-square glass-card p-1 overflow-hidden shadow-2xl group-hover:shadow-cyan-500/20">
            <img 
              src="/aboutjeelimg.jpeg" 
              alt="Jeel Goti" 
              className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </motion.div>
        
        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block text-sm font-bold text-cyan-400 tracking-widest">WHO AM I</span>
            <h3 className="text-4xl md:text-5xl font-black text-white">Full Stack Developer</h3>
            <div className="h-1.5 w-24 gradient-line"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a passionate developer with a strong foundation in <span className="font-semibold text-cyan-300">Modern Web Technologies</span>. My journey into the digital world is fueled by a desire to create seamless, high-performance applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              With focused experience in <span className="font-semibold text-purple-300">React.js</span> and <span className="font-semibold text-pink-300">Node.js</span>, I bridge the gap between aesthetics and functionality, ensuring every project I touch is both beautiful and robust.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            {statsData.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="glass-card p-6 border-cyan-500/30 hover:border-cyan-500/60"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;

