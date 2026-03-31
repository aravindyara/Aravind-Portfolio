import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BarChart3, Bot, Settings, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Query Languages",
      icon: <Code2 className="w-6 h-6 text-primary-500" />,
      skills: ["Python (Pandas, NumPy)", "SQL (Joins, Subqueries, Window functions)"]
    },
    {
      title: "Machine Learning",
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      skills: ["Regression", "Classification", "Clustering", "NLP (Basics)", "Hugging Face (Deployment)"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
      skills: ["Exploratory Data Analysis", "Data Manipulation & Cleaning", "Matplotlib", "Seaborn", "Power BI"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      skills: ["n8n", "APIs", "Webhooks", "MySQL", "VS Code", "Google Colab", "MS Excel"]
    }
  ];

  return (
    <section id="skills" className="pt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Technical <span className="text-gradient">Skills</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/80 rounded-2xl shadow-sm border border-slate-100">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-white/50 text-slate-700 font-medium rounded-full text-sm border border-slate-200/50 hover:bg-white hover:shadow-sm hover:border-primary-200 hover:text-primary-700 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
