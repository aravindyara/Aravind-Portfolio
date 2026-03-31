import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Link, Phone } from 'lucide-react';

const Hero = () => {
  const titles = [
    "Data Scientist",
    "Data Analyst",
    "Automation & AI Engineer"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-3 py-1 rounded-full w-max border border-primary-100">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Available for Opportunities</span>
          </div>
          
          <div className="h-[120px] sm:h-[160px] flex flex-col justify-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Aspiring <br />
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="text-gradient absolute left-0 top-0 w-full"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            With hands-on experience in Python, SQL, and machine learning, I'm passionate about building intelligent automation workflows and data-driven solutions. I apply programming fundamentals and analytical skills to bridge the gap between data insights and automated action.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="mailto:aravindyara4@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/aravindyara" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">
              <Link className="w-5 h-5 text-[#0A66C2]" />
              LinkedIn
            </a>
            <a href="tel:+919392204821" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">
              <Phone className="w-5 h-5 text-green-600" />
              Call Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 glass">
            <img src="/profile.jpg" alt="Yara Aravind" className="w-full h-full object-cover" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 -right-10 w-32 h-32 bg-primary-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
