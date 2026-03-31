import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Link, Download, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 pb-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Deploy Me on <span className="text-gradient">Your Team</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Infrastructure */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 glass p-8 md:p-12 rounded-[2.5rem] h-full"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Contact Infrastructure</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Ready to integrate high-velocity Data Science and AI pipelines into your organization?
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 transition-all duration-300 group-hover:scale-110">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <a href="mailto:aravindyara4@gmail.com" className="text-slate-700 font-medium hover:text-primary-600 transition-colors">aravindyara4@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all duration-300 group-hover:scale-110">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <a href="tel:+919392204821" className="text-slate-700 font-medium hover:text-indigo-600 transition-colors">+91 9392204821</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-110">
                <Link size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                <a href="https://www.linkedin.com/in/aravindyara" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">linkedin.com/in/aravindyara</a>
              </div>
            </div>
          </div>

          <a 
            href="https://drive.google.com/file/d/1FULPTUq99_bBeZ9ijBuv5zDwvB17KGAc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group"
          >
            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            DOWNLOAD RESUME (.PDF)
          </a>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass p-8 md:p-12 rounded-[2.5rem]"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name / Company</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe / TechCorp" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-500/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                <input 
                  type="email" 
                  placeholder="jane@techcorp.com" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-500/10 transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Project Requirements</label>
              <textarea 
                rows="4"
                placeholder="Let's build..." 
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-primary-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group"
            >
              INITIALIZE TRANSMISSION
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
