import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800">
            <img 
              src="/aboutjeelimg.jpeg" 
              alt="Jeel Goti" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-100">Who am I?</h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            Passionate about leveraging technology to create impactful solutions, I am a Full Stack developer seeking a challenging opportunity to enhance my skills and contribute to achieving the goals of forward-thinking companies. I have 4 months of experience as intern student in the field. My journey began with internship training at Sensussoft software pvt. ltd., Surat, where I immersed myself in Front-End and Back-End technologies, mastering React.js and Node.js.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Seeking : A challenging role where I can apply my expertise and continue learning while contributing to the success of dynamic projects.
          </p>
          
          <div className="pt-4 flex gap-8">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="cursor-default"
            >
              <p className="text-indigo-400 font-bold text-2xl">4</p>
              <p className="text-slate-500">Months Experience</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="cursor-default"
            >
              <p className="text-indigo-400 font-bold text-2xl">0</p>
              <p className="text-slate-500">Projects Completed</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

