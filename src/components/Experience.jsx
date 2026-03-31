import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Procorp Systems India Pvt Ltd",
      period: "Feb 2026 – Present",
      points: [
        "Performed API-based data extraction and end-to-end exploratory data analysis (EDA) including data cleaning, validation, and transformation to build reliable data pipelines.",
        "Contributed to ML model development by preparing structured datasets, performing feature engineering, and evaluating model performance.",
        "Independently designed and built AI agents and automation workflows using n8n, applying REST API integration, webhook handling, and multi-step workflow orchestration.",
        "Developed agentic workflow logic for real-world automation scenarios, gaining practical experience in AI-driven decision systems and pipeline design."
      ]
    },
    {
      title: "Data Science Trainee",
      company: "TechU Innovation Labs Pvt Ltd",
      period: "Aug 2025 – Jan 2026",
      points: [
        "Building hands-on expertise in Data preprocessing, EDA, Visualization, and Model development using real-world datasets.",
        "Working on multiple mini-projects to strengthen practical understanding of end-to-end data workflows and real-world problem-solving.",
        "Receiving structured training in Python, SQL, Excel, and Machine Learning, aligned with current industry standards."
      ]
    }
  ];

  return (
    <section id="experience" className="pt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Professional <span className="text-gradient">Experience</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12"
          >
            <div className="md:w-1/3 shrink-0">
              <div className="glass-card p-6 h-full flex flex-col justify-center sticky top-24">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                  {index === 0 ? <Briefcase className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                <p className="text-primary-600 font-semibold mt-1">{exp.company}</p>
                <p className="text-sm font-medium text-slate-500 mt-3 inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full w-max">
                  {exp.period}
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 glass-card p-8">
              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                    <p className="text-slate-600 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
