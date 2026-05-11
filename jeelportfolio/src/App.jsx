import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Introduction from './Components/Introduction';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import ContactMe from './Components/ContactMe';
import './Styles/App.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/introduction" replace />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
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