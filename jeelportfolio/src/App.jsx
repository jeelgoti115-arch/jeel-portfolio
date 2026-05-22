import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import './styles/App.css';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.98 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className="min-h-[calc(100vh-6rem)]"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/introduction" replace />} />
        <Route path="/introduction" element={<PageWrapper><Introduction /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutMe /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactMe /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute left-10 top-24 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl"
            animate={{ x: [0, 20, 0, -20], y: [0, -16, 0, 16] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-14 bottom-24 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl"
            animate={{ x: [0, -24, 0, 24], y: [0, 12, 0, -12] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 w-52 h-52 rounded-full bg-fuchsia-500/10 blur-3xl"
            animate={{ scale: [1, 1.05, 1, 0.95] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <main className="pt-24 pb-12">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;