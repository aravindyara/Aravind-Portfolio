import React from 'react';
import { Mail, Link, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/40 pt-16 pb-8 mt-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
        
        <h2 className="text-2xl font-bold text-slate-800">Yara Aravind</h2>
        <p className="text-sm text-slate-500 max-w-md">
          A passionate Data Science & Automation Engineer eager to build intelligent workflows and predictive models.
        </p>
        
        <div className="flex items-center gap-6 mt-4">
          <a href="mailto:aravindyara4@gmail.com" className="text-slate-400 hover:text-primary-600 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/aravindyara" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
            <Link className="w-6 h-6" />
          </a>
          <a href="tel:+919392204821" className="text-slate-400 hover:text-green-600 transition-colors">
            <Phone className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-xs text-slate-400 mt-8 pt-8 border-t border-slate-200/50 w-full">
          &copy; {new Date().getFullYear()} Yara Aravind. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
