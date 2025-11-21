import React from 'react';
import { CheckIcon, CrownIcon } from './Icons';

const PricingElegant: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 font-elegant text-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-slate-500 font-serif italic text-lg mb-2">Excellence in Service</p>
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6">Membership Tiers</h2>
          <div className="w-24 h-1 bg-slate-300 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {/* Silver */}
          <div className="p-12 hover:bg-slate-50 transition-colors duration-500">
            <h3 className="text-2xl font-serif font-bold text-slate-700 mb-2">Silver</h3>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">Essential access for individuals seeking quality and consistency.</p>
            <div className="text-4xl font-serif font-bold text-slate-900 mb-8">$200<span className="text-lg font-normal text-slate-400">/mo</span></div>
            
            <button className="w-full py-3 border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all mb-10">
              Select Plan
            </button>

            <ul className="space-y-4 text-slate-600 text-sm">
               <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Access to Lounge</li>
               <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Daily Refreshments</li>
               <li className="flex items-center gap-3 text-slate-300 line-through"><span className="w-1 h-1 bg-slate-200 rounded-full"></span> Private Office</li>
            </ul>
          </div>

          {/* Gold (Featured) */}
          <div className="p-12 bg-slate-900 text-white relative transform scale-100 lg:scale-105 shadow-2xl z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center -mt-6 shadow-lg border-4 border-white">
                <CrownIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2 mt-4 text-center lg:text-left">Gold</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">Premium privileges for the discerning professional.</p>
            <div className="text-5xl font-serif font-bold text-yellow-500 mb-8">$500<span className="text-xl font-normal text-slate-500">/mo</span></div>
            
            <button className="w-full py-4 bg-yellow-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-yellow-500 transition-all mb-10 shadow-lg">
              Join Gold
            </button>

            <ul className="space-y-4 text-slate-300 text-sm">
               <li className="flex items-center gap-3"><CheckIcon className="w-4 h-4 text-yellow-500"/> All Silver Benefits</li>
               <li className="flex items-center gap-3"><CheckIcon className="w-4 h-4 text-yellow-500"/> Priority Booking</li>
               <li className="flex items-center gap-3"><CheckIcon className="w-4 h-4 text-yellow-500"/> Private Meeting Rooms</li>
               <li className="flex items-center gap-3"><CheckIcon className="w-4 h-4 text-yellow-500"/> Dedicated Concierge</li>
            </ul>
          </div>

          {/* Platinum */}
          <div className="p-12 hover:bg-slate-50 transition-colors duration-500">
            <h3 className="text-2xl font-serif font-bold text-slate-700 mb-2">Platinum</h3>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">Unlimited possibilities for enterprise and elite members.</p>
            <div className="text-4xl font-serif font-bold text-slate-900 mb-8">$900<span className="text-lg font-normal text-slate-400">/mo</span></div>
            
            <button className="w-full py-3 border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all mb-10">
              Select Plan
            </button>

            <ul className="space-y-4 text-slate-600 text-sm">
               <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> All Gold Benefits</li>
               <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> 24/7 Private Access</li>
               <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Chauffeur Service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingElegant;