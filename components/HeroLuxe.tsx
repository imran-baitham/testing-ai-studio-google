import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroLuxe: React.FC = () => {
  return (
    <section className="relative bg-slate-50 font-elegant overflow-hidden min-h-[700px] flex items-center">
      {/* Decorative Background Split */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-200/50 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="py-12 order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-slate-900"></div>
             <span className="uppercase tracking-[0.2em] text-xs font-bold text-slate-500">Est. 2024 Collection</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-slate-900 leading-tight mb-8">
            Redefining <br />
            <span className="italic text-slate-600">Modern Luxury.</span>
          </h1>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md border-l-2 border-slate-300 pl-6">
            Experience the harmony of design and function. 
            Crafted for those who appreciate the finer details in digital architecture.
          </p>
          
          <div className="flex items-center gap-8">
            <button className="bg-slate-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors duration-300">
              Explore Collection
            </button>
            <a href="#" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900">
              View Lookbook
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: Image Composition */}
        <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2">
          {/* Main Image */}
          <div className="absolute inset-0 bg-slate-300 shadow-2xl overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
               alt="Interior design" 
               className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2s]"
             />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs hidden md:block">
             <p className="font-serif text-2xl text-slate-900 mb-2">"Timeless"</p>
             <p className="text-slate-500 text-sm leading-relaxed">
               Simplicity is the ultimate sophistication in modern design language.
             </p>
             <div className="mt-4 text-xs font-bold tracking-widest text-slate-400">LEONARDO D.</div>
          </div>

          {/* Outline Frame decoration */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-slate-400/50 z-[-1] hidden lg:block"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroLuxe;