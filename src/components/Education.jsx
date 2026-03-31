import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="pt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Education & <span className="text-gradient">Certifications</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 glass-card p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/80 rounded-xl shadow-sm border border-slate-100">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Education</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-slate-200 relative">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-2 outline outline-4 outline-white"></div>
            <h4 className="text-lg font-bold text-slate-800">Bachelor of Technology</h4>
            <p className="text-slate-600 font-medium">Computer Science and Engineering</p>
            <p className="text-sm text-slate-500 mt-2">Swarna Bharathi Institute of Science and Technology, [JNTUH]</p>
            <p className="text-sm font-semibold text-primary-600 mt-1">Score: 73% | 2021-2025</p>
            <p className="text-xs text-slate-400 mt-1">Khammam</p>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 glass-card p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/80 rounded-xl shadow-sm border border-slate-100">
              <Award className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Certifications</h3>
          </div>
          
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">Data Analytics Job Simulation</h4>
                <p className="text-slate-500 text-sm">Issued by Deloitte</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">Machine Learning</h4>
                <p className="text-slate-500 text-sm">Issued by Coursera</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Interests */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 glass-card p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/80 rounded-xl shadow-sm border border-slate-100">
              <BookOpen className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Interests</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-emerald-500 font-bold">›</span>
              <span>Actively experimenting with n8n workflows, AI automation tools, and LLM-based agent integrations.</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-emerald-500 font-bold">›</span>
              <span>Exploring real-world datasets for feature engineering, predictive modeling, and pipeline optimization.</span>
            </li>
             <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-emerald-500 font-bold">›</span>
              <span>Staying current with evolving AI tools, workflow automation platforms, and agentic AI frameworks.</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
