import React from 'react';
import { Terminal, Upload, Code, Zap, Cpu, ArrowRight, Layers, Download, FileJson, Command, Shield, Wifi } from 'lucide-react';

const LandingPageCyber: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030305] font-mono text-gray-300 selection:bg-cyan-500/30 selection:text-cyan-100 relative overflow-hidden">
      
      {/* --- GLOBAL EFFECTS --- */}
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      {/* Ambient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030305]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded group-hover:bg-cyan-500/20 transition-all">
               <Terminal className="w-5 h-5 text-cyan-400" />
               <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]"></div>
            </div>
            <div className="flex flex-col">
                <span className="font-bold tracking-wider text-lg text-white">NEURAL_DEV</span>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] group-hover:text-cyan-400 transition-colors">SYSTEM ONLINE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {['Capabilities', 'Neural_Engine', 'Pricing'].map((item) => (
                <a key={item} href="#" className="relative py-2 hover:text-white transition-colors before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-500 hover:before:w-full before:transition-all duration-300">
                    /{item}
                </a>
            ))}
          </div>

          <button className="relative px-6 py-2 bg-transparent border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.6)] transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Initialize_Login</span>
            <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 relative">
            {/* Floating Decoration */}
            <div className="absolute -top-20 -left-20 w-40 h-40 border border-white/5 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none border-t-cyan-500/30"></div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-bold mb-8 shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              AI IMAGE-TO-CODE CONVERTER V4.0
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tight">
              PIXELS TO <br/>
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-gradient-x">
                  FUNCTION
                </span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
              Upload any UI screenshot. Our neural network generates production-ready 
              <span className="text-cyan-400 font-bold"> HTML + Tailwind CSS </span> 
              instantly. <br/>
              <span className="text-purple-400">// No hallucinations. 100% responsive.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider overflow-hidden hover:bg-cyan-400 transition-colors shadow-[0_0_30px_-5px_rgba(0,240,255,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start Conversion <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-3">
                 <Upload className="w-4 h-4 text-gray-400" /> View Documentation
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-xs text-gray-600 font-medium">
                <span className="flex items-center gap-2"><Shield className="w-3 h-3 text-green-500" /> ENTERPRISE SECURE</span>
                <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-yellow-500" /> 98ms LATENCY</span>
                <span className="flex items-center gap-2"><Wifi className="w-3 h-3 text-cyan-500" /> API ACCESS</span>
            </div>
          </div>

          {/* Right Column: Interactive Drop Zone Scanner */}
          <div className="lg:col-span-5 relative group perspective-[1000px]">
            
            {/* Holographic Card */}
            <div className="relative bg-[#08080c] border border-cyan-500/20 rounded-xl aspect-[4/5] md:aspect-square shadow-2xl overflow-hidden transform transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
                
                {/* Scanner Bar Animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.8)] z-20 animate-[scan_3s_linear_infinite]"></div>
                
                {/* Grid Overlay inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Header */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-black/50 border-b border-white/10 flex items-center justify-between px-4 z-10 backdrop-blur-md">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-[10px] text-cyan-500/70 font-mono tracking-widest">SCANNING_INPUT_STREAM</div>
                </div>

                {/* Drop Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 pb-8 px-8">
                    <div className="relative w-32 h-32 mb-8 group-hover:scale-110 transition-transform duration-500">
                        {/* Circle Glows */}
                        <div className="absolute inset-0 border border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-2 border border-purple-500/30 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Upload className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                        </div>
                    </div>
                    
                    <div className="text-center space-y-2 relative z-10">
                        <h3 className="text-xl font-bold text-white tracking-wide">Drop UI Assets</h3>
                        <p className="text-sm text-gray-500 max-w-[200px] mx-auto">Support for Figma exports, PNG, JPG, and WEBP layouts.</p>
                    </div>

                    {/* Supported Icons */}
                    <div className="flex gap-4 mt-8 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center border border-white/10">
                            <span className="text-[8px] font-bold">FIG</span>
                        </div>
                        <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center border border-white/10">
                            <span className="text-[8px] font-bold">PNG</span>
                        </div>
                        <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center border border-white/10">
                            <span className="text-[8px] font-bold">JPG</span>
                        </div>
                    </div>
                </div>
                
                {/* Decor Corners */}
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500 z-20"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500 z-20"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-500 z-20"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500 z-20"></div>
            </div>

            {/* Background Glow behind card */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-32 border-y border-white/5 bg-black relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-24">
             <span className="text-cyan-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">System Architecture</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">HOW IT WORKS</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
           </div>

           <div className="grid md:grid-cols-3 gap-12">
             {[
               { 
                   icon: Layers, 
                   title: "1. Data Ingestion", 
                   desc: "Drag and drop your mockup. Our system instantly parses high-fidelity vectors and raster images.", 
                   color: "text-cyan-400",
                   border: "hover:border-cyan-500/50"
               },
               { 
                   icon: Cpu, 
                   title: "2. Neural Processing", 
                   desc: "Computer vision models identify layout structure, typography styles, and spacing tokens.", 
                   color: "text-purple-400",
                   border: "hover:border-purple-500/50"
               },
               { 
                   icon: Code, 
                   title: "3. Code Synthesis", 
                   desc: "The engine compiles semantic HTML5 and Tailwind CSS utility classes ready for deployment.", 
                   color: "text-green-400",
                   border: "hover:border-green-500/50"
               }
             ].map((item, idx) => (
               <div key={idx} className={`group relative p-8 bg-[#0a0a10] border border-white/5 rounded-2xl transition-all duration-300 ${item.border} hover:-translate-y-2`}>
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white select-none">0{idx + 1}</div>
                 <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                 <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                 
                 {/* Bottom gradient line */}
                 <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all"></div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* --- CODE DEMO SECTION --- */}
      <section className="py-32 px-6 relative bg-[#030305]">
        <div className="max-w-6xl mx-auto">
            
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <FileJson className="w-6 h-6 text-purple-500" />
                GENERATION_LOGS
              </h2>
              <p className="text-gray-500 font-mono text-sm">Live preview of the neural output stream.</p>
            </div>
            <div className="flex gap-3">
               <div className="px-3 py-1.5 bg-[#0f0f16] border border-white/10 rounded text-xs text-gray-400 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> React 18
               </div>
               <div className="px-3 py-1.5 bg-cyan-950/30 border border-cyan-500/30 rounded text-xs text-cyan-400 flex items-center gap-2 shadow-[0_0_10px_-2px_rgba(0,240,255,0.3)]">
                 <Zap className="w-3 h-3" /> Tailwind v3.4
               </div>
            </div>
          </div>

          {/* IDE Container */}
          <div className="rounded-xl border border-white/10 bg-[#0a0a10] overflow-hidden shadow-2xl relative group">
            {/* Glow effect behind IDE */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* IDE Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#050505] border-b border-white/10">
              <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono opacity-60">components/Hero.tsx — Read Only</span>
              <div className="flex gap-3">
                <Download className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 min-h-[400px]">
              {/* Code View */}
              <div className="p-6 font-mono text-sm border-r border-white/10 bg-[#08080c] overflow-x-auto custom-scrollbar">
                <div className="flex flex-col space-y-1 leading-6">
                    <div className="text-gray-500 mb-4 select-none">// AI Generation Time: 240ms</div>
                    
                    <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                    <div className="mb-4"><span className="text-purple-400">import</span> {'{'} ArrowRight {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'lucide-react'</span>;</div>
                    
                    <div><span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">Hero</span>() {'{'}</div>
                    <div className="pl-4 text-gray-300"><span className="text-purple-400">return</span> (</div>
                    
                    <div className="pl-8 text-gray-400">&lt;<span className="text-red-400">section</span> <span className="text-yellow-200">className</span>=<span className="text-green-400">"relative bg-slate-900 py-20 overflow-hidden"</span>&gt;</div>
                    <div className="pl-12 text-gray-400">&lt;<span className="text-red-400">div</span> <span className="text-yellow-200">className</span>=<span className="text-green-400">"container mx-auto px-6 relative z-10"</span>&gt;</div>
                    
                    <div className="pl-16 text-gray-400">&lt;<span className="text-red-400">h1</span> <span className="text-yellow-200">className</span>=<span className="text-green-400">"text-5xl font-bold text-white mb-6"</span>&gt;</div>
                    <div className="pl-20 text-white">Build faster with AI</div>
                    <div className="pl-16 text-gray-400">&lt;/<span className="text-red-400">h1</span>&gt;</div>
                    
                    <div className="pl-16 text-gray-400">&lt;<span className="text-red-400">p</span> <span className="text-yellow-200">className</span>=<span className="text-green-400">"text-xl text-slate-300 mb-8 max-w-2xl"</span>&gt;</div>
                    <div className="pl-20 text-white">Transform your ideas into reality instantly.</div>
                    <div className="pl-16 text-gray-400">&lt;/<span className="text-red-400">p</span>&gt;</div>
                    
                    <div className="pl-16 text-gray-400">&lt;<span className="text-red-400">button</span> <span className="text-yellow-200">className</span>=<span className="text-green-400">"bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"</span>&gt;</div>
                    <div className="pl-20 text-white">Get Started</div>
                    <div className="pl-16 text-gray-400">&lt;/<span className="text-red-400">button</span>&gt;</div>
                    
                    <div className="pl-12 text-gray-400">&lt;/<span className="text-red-400">div</span>&gt;</div>
                    <div className="pl-8 text-gray-400">&lt;/<span className="text-red-400">section</span>&gt;</div>
                    
                    <div className="pl-4 text-gray-300">);</div>
                    <div>{'}'}</div>
                </div>
              </div>
              
              {/* Preview View */}
              <div className="bg-slate-900 relative flex flex-col justify-center p-8 md:p-12">
                 <div className="absolute top-4 right-4 px-2 py-1 bg-black/40 rounded text-[10px] text-white uppercase tracking-widest border border-white/10 backdrop-blur">Preview Output</div>
                 
                 {/* Rendered Mockup */}
                 <div className="border border-white/10 rounded-lg p-8 bg-slate-900 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h1 className="text-4xl font-bold text-white mb-4 relative z-10">Build faster with AI</h1>
                    <p className="text-lg text-slate-300 mb-8 relative z-10">Transform your ideas into reality instantly.</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 relative z-10">Get Started</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-[#010102] pt-20 pb-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="col-span-2 pr-10">
             <div className="flex items-center gap-3 text-white mb-6">
               <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                 <Terminal className="w-4 h-4 text-black" />
               </div>
               <span className="font-bold tracking-wider text-xl">NEURAL_DEV</span>
             </div>
             <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
               The industry standard for AI-assisted frontend development. 
               Empowering developers to ship beautiful interfaces at warp speed.
             </p>
             <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer text-gray-400"><Command className="w-4 h-4"/></div>
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer text-gray-400"><Code className="w-4 h-4"/></div>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Models & API</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">System Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
           <p>© 2024 NEURAL_DEV Inc. All rights reserved.</p>
           <div className="flex items-center gap-2 mt-4 md:mt-0">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-green-500/70 font-mono">OPERATIONAL</span>
           </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050505;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default LandingPageCyber;