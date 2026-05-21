import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onMenuClick }) => {
  const [time, setTime] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-2 flex justify-between items-center"
    >
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent backdrop-blur-xl border-b border-cyan-500/20"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-6 w-full justify-between">
        {/* Left Section - Logo & Time */}
        <div className="flex items-center gap-6">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onMenuClick}
            className="p-2.5 rounded-xl transition-all text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-cyan-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>

          <Link 
            to="/"
            className="cursor-pointer"
          >
            <motion.div
              className="flex flex-col"
            >
              <span className="text-2xl font-black bg-cyan-400 bg-clip-text text-transparent inline-block tracking-tighter">
                Jeel Goti
              </span>
              <span className="text-xs font-bold text-cyan-400 tracking-widest">PORTFOLIO</span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-cyan-500/20 text-[11px] font-mono text-cyan-300 ml-6 uppercase tracking-widest">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
            ></motion.div>
            {formatTime(time)}
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
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
                  transition={{ delay: 0.15 + (idx * 0.08) }}
                  href={links[item]} 
                  target={item !== 'Resume' ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-all relative group rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30"
                  whileHover={{ y: -2 }}
                >
                  <span className="flex items-center gap-2">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2.5 hover:bg-cyan-500/10 rounded-xl transition-all text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-cyan-500/30 shadow-2xl overflow-hidden py-2"
                >
                  {['Resume', 'GitHub', 'LinkedIn'].map((item) => {
                    const links = {
                      'Resume': '/jeel-goti-Resume.pdf',
                      'GitHub': 'https://github.com/jeelgoti115-arch',
                      'LinkedIn': 'https://www.linkedin.com/in/jeel-goti-b9a984280/'
                    };

                    return (
                      <motion.a
                        key={item}
                        whileHover={{ x: 4, backgroundColor: 'rgba(0, 217, 255, 0.1)' }}
                        href={links[item]}
                        target={item !== 'Resume' ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-3"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item}
                      </motion.a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

