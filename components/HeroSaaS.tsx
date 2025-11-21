import React from 'react';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';

const HeroSaaS: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 font-sans bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              v2.0 is now live
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Manage your team <br className="hidden lg:block" />
              <span className="text-indigo-600">with clarity.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Streamline workflows, track progress, and ship faster. The all-in-one platform designed for high-performing engineering teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm hover:shadow-md">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                <PlayCircle className="w-5 h-5 mr-2 text-gray-500" />
                Watch Demo
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Visual / Mockup */}
          <div className="lg:col-span-6 relative">
            {/* Decorative blob */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Bar */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white border border-gray-200 rounded flex-1 h-6 ml-4"></div>
              </div>
              {/* UI Content Mockup */}
              <div className="p-6 grid grid-cols-3 gap-4">
                 <div className="col-span-1 bg-gray-50 h-32 rounded-lg"></div>
                 <div className="col-span-2 bg-indigo-50 h-32 rounded-lg border border-indigo-100 p-4">
                    <div className="w-1/2 h-3 bg-indigo-200 rounded mb-2"></div>
                    <div className="w-3/4 h-3 bg-indigo-200 rounded"></div>
                 </div>
                 <div className="col-span-3 bg-gray-50 h-24 rounded-lg flex items-center p-4 gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="flex-1 space-y-2">
                        <div className="w-full h-2 bg-gray-200 rounded"></div>
                        <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSaaS;