import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: 'Introduction', path: '/introduction'},
    { name: 'About Me', path: '/about'},
    { name: 'Projects', path: '/projects'},
    { name: 'Skills & Tools', path: '/skills'},
    { name: 'Experience', path: '/experience'},
    { name: 'Education', path: '/education'},
    { name: 'Contact Me', path: '/contact'}
  ];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl z-[70] border-r border-cyan-500/20"
          >
            <div className="p-8 h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-0.5"
                >
                  <h2 className="text-3xl font-black text-white tracking-tight">Menu</h2>
                  <div className="h-1.5 w-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                </motion.div>

                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2.5 hover:bg-cyan-500/20 rounded-xl transition-all border border-cyan-500/20 hover:border-cyan-500/50 text-cyan-400 hover:text-cyan-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
 
              {/* Navigation */}
              <motion.nav 
                className=" flex-1 overflow-y-auto"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="group flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all border border-transparent hover:border-cyan-500/30"
                    >
                      <span className="text-base font-semibold tracking-wide">{item.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;

