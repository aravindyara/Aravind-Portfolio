import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Professional <span className="text-gradient">Value Proposition</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden"
      >
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 leading-tight italic">
            "I don't just build models; I build intelligent systems that solve real business bottlenecks."
          </h3>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Positioned at the intersection of <span className="font-bold text-slate-800">Machine Learning, Data Architecture, and AI Workflow Automation</span>, 
            my expertise is in engineering pipelines that reduce operational drag and hyper-scale insightful decision-making. 
            My approach blends rigorous statistical methodology with production-ready software engineering.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ValueProposition;
