import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ onMenuClick }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-slate-950/40 backdrop-blur-md shadow-2xl z-50 px-6 py-4 flex justify-between items-center border-b border-slate-900/50"
    >
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onMenuClick}
          className="p-2 hover:bg-slate-900 rounded-lg transition-colors text-slate-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
        <Link 
          to="/"
          className="cursor-pointer"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block"
          >
            Jeel Goti
          </motion.span>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        {['Resume', 'GitHub', 'LinkedIn'].map((item, idx) => {
          const links = {
            'Resume': '/jeel-goti-Resume.pdf',
            'GitHub': 'https://github.com/jeelgoti115-arch',
            'LinkedIn': 'https://www.linkedin.com/in/jeel-goti-b9a984280/'
          };
          
          return (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.05) }}
              href={links[item]} 
              target={item !== 'Resume' ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 font-medium transition-colors border-b-2 border-transparent hover:border-indigo-400"
            >
              {item}
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;

