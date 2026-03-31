import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Hospital, Sparkles, Workflow, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Agent-Based Booking Automation",
      subtitle: "Using n8n & Telegram",
      icon: <Workflow className="w-8 h-8 text-blue-500" />,
      tags: ["n8n", "Telegram API", "REST APIs", "Webhooks", "Google Sheets"],
      description: "Designed and developed an end-to-end automation workflow using n8n to handle customer booking processes. Built an AI-driven conversational agent on Telegram to guide users through service selection, pricing, and booking confirmation.",
      link: "https://drive.google.com/file/d/1P2nrQrCIMPSg0_VQa66x4gm7dM4Ri4yI/view?usp=drive_link",
      image: "/booking-workflow.jpg",
      highlights: [
        "Implemented state-based workflow logic to manage multi-step user interactions dynamically.",
        "Automated data pipeline by storing customer responses into Google Sheets for tracking and analytics.",
        "Developed reusable and scalable workflow nodes for handling multiple users simultaneously.",
        "Reduced manual effort by automating complete booking lifecycle from inquiry to confirmation."
      ]
    },
    {
      title: "Blinkit Sales Analysis Dashboard",
      subtitle: "Power BI Data Analysis",
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      tags: ["Power BI", "Data Analysis", "SQL", "DAX", "Business Intelligence"],
      description: "Developed a comprehensive sales analysis dashboard for Blinkit to track KPIs, sales performance, and customer insights. Leveraged DAX for complex calculations and Power Query for data transformation.",
      link: "https://www.linkedin.com/posts/aravindyara_powerbi-dataanalytics-businessintelligence-ugcPost-7415679953872134144-NnpA",
      highlights: [
        "Cleaned and transformed raw sales data using Power Query to ensure data accuracy.",
        "Implemented DAX measures to calculate Total Sales, Average Order Value, and Year-over-Year growth.",
        "Visualized sales trends, category performance, and outlet productivity for executive decision-making.",
        "Optimized dashboard performance for seamless interactivity and real-time insights."
      ]
    },
    {
      title: "Hospital Exigency Forecast",
      subtitle: "Machine Learning Predictive Model",
      icon: <Hospital className="w-8 h-8 text-rose-500" />,
      tags: ["Python", "Pandas", "Scikit-learn", "SQL", "Hugging Face"],
      description: "Built a predictive model to determine whether patients require emergency admission based on vital health parameters.",
      highlights: [
        "Collected and preprocessed patient data, trained classification models including Decision Tree, Logistic Regression, and Gradient Boosting.",
        "Developed a web-based prediction interface using Hugging Face.",
        "Gradient Boosting achieved the best performance.",
        "Enabled real-time admission decision support to reduce hospital crowding."
      ]
    }
  ];

  return (
    <section id="projects" className="pt-24 pb-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col overflow-hidden group"
          >
            {project.image && (
              <div className="w-full h-40 overflow-hidden border-b border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                {index < 2 && (
                  <div className="px-2 py-0.5 bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary-100 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Featured
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h3>
              <p className="text-primary-600 text-sm font-medium mb-4">{project.subtitle}</p>
              
              {project.link && (
                <div className="mb-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary-600 hover:text-primary-700 font-bold transition-colors group/link uppercase tracking-wider"
                  >
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    View Case Study
                  </a>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-2">
                {project.highlights.slice(0, 3).map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-[11px] text-slate-600">
                    <span className="text-primary-500 font-bold">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="h-1.5 w-full bg-gradient-to-r from-primary-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
