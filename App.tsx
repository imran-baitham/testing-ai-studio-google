import React from 'react';
import HeroSaaS from './components/HeroSaaS';
import HeroCyber from './components/HeroCyber';
import HeroNeoPop from './components/HeroNeoPop';
import HeroLuxe from './components/HeroLuxe';
import HeroModern from './components/HeroModern';

const App: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Navigation / Intro */}
      <header className="py-12 px-6 text-center bg-gray-50 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Hero Section UI Kit</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A collection of 5 distinct, high-conversion hero section designs.
          Scroll down to explore different themes.
        </p>
      </header>

      <main className="flex flex-col">
        {/* Section 1: Clean & Minimal (SaaS) */}
        <div className="relative border-b border-gray-100">
          <div className="absolute top-0 left-4 bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-b z-20">THEME: MINIMAL SAAS</div>
          <HeroSaaS />
        </div>

        {/* Section 2: Cyber / Developer (Dark Mode) */}
        <div className="relative bg-cyber-dark border-b border-gray-800">
          <div className="absolute top-0 left-4 bg-cyber-primary text-cyber-dark text-xs font-bold px-2 py-1 rounded-b z-20">THEME: CYBER DEV</div>
          <HeroCyber />
        </div>

        {/* Section 3: Neo-Brutalist / Pop (Creative) */}
        <div className="relative border-b border-black">
           <div className="absolute top-0 left-4 bg-neo-black text-white text-xs font-bold px-2 py-1 z-20">THEME: NEO POP</div>
          <HeroNeoPop />
        </div>

        {/* Section 4: Elegant / Corporate (Serif) */}
        <div className="relative border-b border-slate-200">
          <div className="absolute top-0 left-4 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded-b z-20">THEME: ELEGANT LUXE</div>
          <HeroLuxe />
        </div>

        {/* Section 5: Glassmorphism (Modern App) */}
        <div className="relative bg-[#0f172a]">
          <div className="absolute top-0 left-4 bg-white/20 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded-b z-20">THEME: GLASS HOLOGRAPHIC</div>
          <HeroModern />
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Hero UI Kit Demo</p>
      </footer>
    </div>
  );
};

export default App;