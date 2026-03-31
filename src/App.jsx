import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ValueProposition from './components/ValueProposition';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 text-slate-900">
      {/* Background animated blobs */}
      <div className="bg-blob bg-blue-300 w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
      <div className="bg-blob bg-purple-300 w-[600px] h-[600px] bottom-[-200px] right-[-100px]" style={{ animationDelay: '2s' }}></div>

      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        <Hero />
        <ValueProposition />
        <Skills />
        <WhyHireMe />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm relative z-10 border-t border-slate-100 mx-auto max-w-6xl">
        <p>© {new Date().getFullYear()} Yara Aravind. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
