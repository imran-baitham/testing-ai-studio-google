import React from 'react';
import { Shield, Zap, Globe, ArrowUpRight } from 'lucide-react';

const HeroModern: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0f172a] font-modern overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          
          {/* Pill Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-white">The Future of Payments</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]">
            Financial freedom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              without borders.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-400 mb-10">
            Experience lightning-fast transactions, military-grade security, and a dashboard that feels like the future. Join 50,000+ users today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 hover:scale-105">
              Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: "Bank-Grade Security", desc: "256-bit encryption keeps your assets safe.", color: "text-green-400" },
            { icon: Zap, title: "Instant Transfers", desc: "Settlement in seconds, not days.", color: "text-yellow-400" },
            { icon: Globe, title: "Global Access", desc: "Spend anywhere with our borderless card.", color: "text-blue-400" }
          ].map((card, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 to-white/0 blur-2xl group-hover:from-white/10 transition-all"></div>
              <card.icon className={`h-10 w-10 ${card.color} mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroModern;