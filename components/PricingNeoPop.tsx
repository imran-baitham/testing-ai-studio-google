import React from 'react';
import { StarIcon } from './Icons';

const PricingNeoPop: React.FC = () => {
  return (
    <section className="py-24 bg-yellow-50 font-pop text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 transform -rotate-2">
            UNLOCK THE <span className="bg-neo-purple text-white px-4 py-1 transform rotate-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">MAGIC</span>
          </h2>
          <p className="text-xl font-medium text-gray-800">Pick a flavor that suits your style.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
            <div className="bg-blue-200 w-16 h-16 rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <StarIcon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Basic</h3>
            <div className="text-5xl font-black mb-6">$19</div>
            <p className="mb-8 font-medium text-gray-600 border-b-4 border-gray-100 pb-6">
              Perfect for hobbyists just messing around.
            </p>
            <ul className="space-y-3 mb-8 font-bold">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> 3 Projects
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> Community Access
              </li>
              <li className="flex items-center gap-2 opacity-25">
                 <div className="w-2 h-2 bg-gray-400 rounded-full"></div> No Support
              </li>
            </ul>
            <button className="w-full py-4 bg-blue-300 border-4 border-black rounded-xl font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
              GET IT
            </button>
          </div>

          {/* Plan 2 (Highlighted) */}
          <div className="bg-neo-yellow border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neo-purple text-white px-6 py-2 border-4 border-black font-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3 whitespace-nowrap">
              MOST POPULAR
            </div>
            <div className="bg-pink-300 w-16 h-16 rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <StarIcon className="w-8 h-8 text-black fill-black" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Pro</h3>
            <div className="text-5xl font-black mb-6">$49</div>
            <p className="mb-8 font-medium text-gray-900 border-b-4 border-black/10 pb-6">
              For the serious creators making waves.
            </p>
            <ul className="space-y-3 mb-8 font-bold">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> Unlimited Projects
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> Priority Support
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> Remove Watermark
              </li>
            </ul>
            <button className="w-full py-4 bg-neo-purple text-white border-4 border-black rounded-xl font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all hover:bg-purple-500">
              LET'S GO
            </button>
          </div>

           {/* Plan 3 */}
           <div className="bg-white border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
            <div className="bg-green-200 w-16 h-16 rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <StarIcon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Team</h3>
            <div className="text-5xl font-black mb-6">$99</div>
            <p className="mb-8 font-medium text-gray-600 border-b-4 border-gray-100 pb-6">
              Run your whole squad on one bill.
            </p>
            <ul className="space-y-3 mb-8 font-bold">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> 10 Team Members
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> Shared Folders
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div> SSO Login
              </li>
            </ul>
            <button className="w-full py-4 bg-green-300 border-4 border-black rounded-xl font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
              JOIN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNeoPop;