import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, BrainCircuit } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full glass border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <BrainCircuit className="text-primary-600 w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-slate-800">Yara Aravind</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Skills</a>
            <a href="#why-hire-me" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Why Hire Me</a>
            <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Projects</a>
          </div>
          <div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
