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
      hour12: false,
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-slate-950/60 backdrop-blur-xl shadow-2xl z-50 px-6 py-4 flex justify-between items-center border-b border-white/5"
    >
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onMenuClick}
          className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 border border-transparent hover:border-white/10"
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
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold text-gradient inline-block tracking-tight"
          >
            Jeel Goti
          </motion.span>
        </Link>
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-mono text-slate-400 ml-4 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          {formatTime(time)}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
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
                className="text-sm text-slate-400 hover:text-white font-medium transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
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
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 border border-transparent hover:border-white/10"
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
                className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden py-2"
              >
                {['Resume', 'GitHub', 'LinkedIn'].map((item) => {
                  const links = {
                    'Resume': '/jeel-goti-Resume.pdf',
                    'GitHub': 'https://github.com/jeelgoti115-arch',
                    'LinkedIn': 'https://www.linkedin.com/in/jeel-goti-b9a984280/'
                  };
                  return (
                    <a
                      key={item}
                      href={links[item]}
                      target={item !== 'Resume' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

