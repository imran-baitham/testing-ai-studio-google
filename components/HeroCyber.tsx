import React from 'react';
import { Terminal, ArrowRight, Cpu } from 'lucide-react';

const HeroCyber: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center font-mono bg-cyber-dark text-white overflow-hidden py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff1a_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-cyber-primary/30 bg-cyber-primary/10 px-4 py-1.5 rounded-full text-cyber-primary text-sm mb-8 tracking-wide shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)]">
            <Terminal className="w-4 h-4" />
            <span>SYSTEM_READY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
            DEPLOY THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary animate-pulse">
              UNIMAGINABLE
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Next-gen infrastructure for developers who break boundaries. 
            Scale your backend with zero-latency global edge networks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-cyber-primary text-black font-bold tracking-wider uppercase overflow-hidden transition-all hover:bg-cyan-300 hover:shadow-[0_0_40px_-5px_rgba(0,240,255,0.5)] skew-x-[-10deg]">
              <span className="relative z-10 flex items-center gap-2 skew-x-[10deg]">
                Initialize Project <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-transparent border border-gray-700 text-gray-300 font-bold tracking-wider uppercase transition-all hover:border-white hover:text-white skew-x-[-10deg]">
              <span className="block skew-x-[10deg]">Read Docs</span>
            </button>
          </div>

          {/* Code Snippet Decoration */}
          <div className="mt-16 mx-auto max-w-2xl bg-[#0d1117] rounded-lg border border-gray-800 p-4 text-left shadow-2xl opacity-80 transform hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
               <span className="text-xs text-gray-500 ml-2">bash — 80x24</span>
            </div>
            <div className="font-mono text-sm text-green-400">
              <p><span className="text-purple-400">➜</span> <span className="text-cyan-300">~</span> npx create-future-app@latest</p>
              <p className="text-gray-500 animate-pulse mt-1">Initializing warp drive engine...</p>
              <p className="text-gray-500 mt-1">Done in 0.04s.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCyber;