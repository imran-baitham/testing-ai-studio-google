import React, { useState } from 'react';
import { CheckIcon } from './Icons';

const PricingMinimal: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billing === 'monthly' ? 19 : 15,
      description: 'Essential features for small teams.',
      features: ['5 Projects', 'Basic Analytics', '48h Support Response', '1 Team Member'],
      highlight: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: billing === 'monthly' ? 49 : 39,
      description: 'Advanced tools for scaling business.',
      features: ['Unlimited Projects', 'Advanced Analytics', '24h Support Response', '5 Team Members', 'Custom Domain'],
      highlight: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: billing === 'monthly' ? 99 : 89,
      description: 'Maximum power and control.',
      features: ['Unlimited Everything', 'Custom Reporting', '1h Support Response', 'Unlimited Members', 'SSO & Audit Logs'],
      highlight: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className="py-24 bg-white font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Pricing</h2>
          <p className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Simple, transparent pricing</p>
          <p className="text-lg text-gray-500">No credit card required. Cancel anytime.</p>
          
          {/* Toggle */}
          <div className="mt-8 flex justify-center items-center gap-3">
            <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className={`${billing === 'yearly' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
            </button>
            <span className={`text-sm font-medium ${billing === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>Yearly <span className="text-indigo-600 text-xs font-bold ml-1">(Save 20%)</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gray-900 text-white ring-4 ring-gray-900 shadow-xl scale-105 z-10' 
                  : 'bg-white text-gray-900 ring-1 ring-gray-200 hover:shadow-lg'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-lg font-semibold ${plan.highlight ? 'text-indigo-400' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`mt-4 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                </div>
              </div>
              
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className={`flex-none w-5 h-5 ${plan.highlight ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-lg py-3 px-4 text-sm font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                plan.highlight 
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500' 
                  : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 focus-visible:outline-indigo-600'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingMinimal;