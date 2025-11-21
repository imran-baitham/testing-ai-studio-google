import React from 'react';
import { Star, Zap, MousePointer2 } from 'lucide-react';

const HeroNeoPop: React.FC = () => {
  return (
    <section className="relative bg-neo-yellow font-pop pt-20 pb-32 overflow-hidden border-b-4 border-black">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 bg-neo-purple w-16 h-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 bg-white w-24 h-24 rounded-full border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-6 z-0 hidden md:flex">
        <Zap className="w-10 h-10 text-black fill-current" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Floating Badge */}
        <div className="inline-block mb-8 bg-white border-4 border-black px-6 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black text-lg uppercase tracking-widest">The #1 Creative Tool</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-black leading-none mb-8 uppercase">
          Make It <br />
          <span className="text-white text-stroke-3 text-stroke-black relative inline-block px-4">
            <span className="absolute inset-0 bg-neo-purple transform skew-x-12 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -z-10"></span>
            Pop!
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-bold text-black mb-12 max-w-2xl mx-auto bg-white/50 p-4 rounded-xl border-2 border-black/10 backdrop-blur-sm">
          Don't be boring. Unleash your wildest ideas with our chaotic, colorful, and completely crazy design suite.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="w-full md:w-auto px-10 py-5 bg-white border-4 border-black text-black font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all active:shadow-none active:translate-y-2">
            Get Access Now
          </button>
          <button className="w-full md:w-auto px-10 py-5 bg-neo-purple border-4 border-black text-white font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all active:shadow-none active:translate-y-2 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 fill-current" /> View Showcase
          </button>
        </div>

        {/* Mockup / Sticker Area */}
        <div className="mt-16 relative max-w-3xl mx-auto">
           <div className="aspect-video bg-black border-4 border-black rounded-xl relative z-10 flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"></div>
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-black z-20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[15px] border-l-black border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-2"></div>
             </div>
           </div>
           
           {/* Floating stickers */}
           <div className="absolute -top-8 -left-12 bg-pink-400 border-4 border-black p-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12 hidden md:block z-20">
              <span className="font-bold text-lg">WOW!</span>
           </div>
           <div className="absolute -bottom-8 -right-8 bg-blue-400 border-4 border-black p-2 rounded-full w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12 hidden md:flex z-20">
              <MousePointer2 className="w-8 h-8" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNeoPop;