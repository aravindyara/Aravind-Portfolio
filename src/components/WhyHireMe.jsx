import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Target, Settings, Share2, PieChart } from 'lucide-react';

const WhyHireMe = () => {
  const reasons = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "ML + Analytics + Automation",
      description: "A rare combination of predictive modeling, deep data insights, and autonomous agent creation."
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Hands-On Deployment",
      description: "Experience moving models out of Jupyter notebooks and entirely into production APIs."
    },
    {
      icon: <Target className="w-8 h-8 text-rose-500" />,
      title: "Business-Driven Mindset",
      description: "Every algorithm is optimized not just for accuracy metrics, but for tangible ROI."
    },
    {
      icon: <Settings className="w-8 h-8 text-amber-500" />,
      title: "Systems Problem Solver",
      description: "Built to tackle ambiguous problems, map data flows, and architect scalable solutions."
    },
    {
      icon: <Share2 className="w-8 h-8 text-emerald-500" />,
      title: "Agile & Scalable Delivery",
      description: "Committed to rapid iteration, clean code architecture, and high-impact deployment cycles."
    },
    {
      icon: <PieChart className="w-8 h-8 text-purple-500" />,
      title: "Data Storytelling",
      description: "Translating complex model outputs into compelling visual narratives for executive stakeholders."
    }
  ];

  return (
    <section id="why-hire-me" className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Why <span className="text-gradient">Hire Me</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-3xl hover:border-primary-200 transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            <div className="mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-100 w-fit group-hover:scale-110 group-hover:bg-white transition-all duration-300">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyHireMe;
