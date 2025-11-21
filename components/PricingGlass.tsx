import React from 'react';
import { LayersIcon, BoxIcon, ZapIcon } from './Icons';

const PricingGlass: React.FC = () => {
  return (
    <section className="py-32 font-modern relative overflow-hidden bg-[#0f172a]">
      {/* Atmospheric Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]"></div>
      <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-pink-500/20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Future Pricing</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Experience the depth of our glassmorphism architecture.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Crystal', price: '29', icon: BoxIcon, accent: 'from-blue-400 to-purple-400' },
            { name: 'Prism', price: '59', icon: LayersIcon, accent: 'from-purple-400 to-pink-400', popular: true },
            { name: 'Diamond', price: '99', icon: ZapIcon, accent: 'from-pink-400 to-orange-400' },
          ].map((plan, idx) => (
            <div 
              key={plan.name}
              className={`relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 hover:to-white/20 transition-all duration-500 ${plan.popular ? 'translate-y-[-1rem]' : ''}`}
            >
              {/* Card Content */}
              <div className="h-full bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center border border-white/10 shadow-2xl">
                
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-purple-500/30">
                    RECOMMENDED
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.accent} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="text-white w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-8">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">${plan.price}</span>
                  <span className="text-white/40 text-sm">/mo</span>
                </div>

                <div className="w-full space-y-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-center gap-2 text-white/70 text-sm">
                       <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${plan.accent}`}></div>
                       <span>Feature module {i}.0 loaded</span>
                    </div>
                  ))}
                </div>

                <button className={`mt-auto w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                  ? 'bg-white text-slate-900 hover:bg-gray-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}>
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGlass;