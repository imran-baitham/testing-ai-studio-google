import React from 'react';
import { CheckIcon, HexagonIcon, ZapIcon } from './Icons';

const PricingCyber: React.FC = () => {
  return (
    <section className="py-24 bg-cyber-dark font-mono text-gray-200 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyber-primary text-sm font-bold tracking-widest uppercase mb-4 inline-block px-3 py-1 border border-cyber-primary/30 bg-cyber-primary/10 rounded">
            System Upgrades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">Loadout</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Optimized infrastructure for high-velocity development teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              tier: 'Hacker',
              price: '0',
              icon: HexagonIcon,
              color: 'text-gray-400',
              border: 'border-gray-800',
              glow: '',
              btn: 'bg-transparent border border-gray-700 hover:border-gray-500 text-white'
            },
            {
              tier: 'Developer',
              price: '29',
              icon: ZapIcon,
              color: 'text-cyber-primary',
              border: 'border-cyber-primary/50',
              glow: 'shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)]',
              btn: 'bg-cyber-primary text-black hover:bg-cyan-300 font-bold'
            },
            {
              tier: 'Corp',
              price: '99',
              icon: HexagonIcon,
              color: 'text-cyber-secondary',
              border: 'border-cyber-secondary/50',
              glow: 'shadow-[0_0_30px_-5px_rgba(112,0,255,0.3)]',
              btn: 'bg-cyber-secondary text-white hover:bg-purple-600 font-bold'
            }
          ].map((plan) => (
            <div 
              key={plan.tier}
              className={`bg-cyber-card border ${plan.border} p-8 rounded-none relative group transition-all duration-300 hover:-translate-y-2 ${plan.glow}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`text-xl font-bold uppercase tracking-wider ${plan.color}`}>{plan.tier}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="ml-2 text-sm text-gray-500">/mo</span>
                  </div>
                </div>
                <plan.icon className={`w-8 h-8 ${plan.color} opacity-80`} />
              </div>

              <ul className="space-y-4 mb-10 text-sm text-gray-400">
                {['10k API Requests', '5 Team Members', '24/7 Logs', 'Community Support'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-1.5 h-1.5 rounded-sm mr-3 ${i < 2 ? 'bg-green-500' : 'bg-gray-700'}`}></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-4 uppercase tracking-wider text-sm transition-all ${plan.btn}`}>
                Initialize
              </button>
              
              {/* Decorative corner accents */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-600 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-600 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCyber;