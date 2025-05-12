import React, { useState } from 'react';

// Check Icon Component
const CheckIcon: React.FC = () => (
  <img src="/assets/section7img1.png" alt="" className="h-6 pr-2" />
);

const plansData = [
  {
    name: 'Basic Plan',
    monthlyPrice: 99,
    annualPrice: 990,
    description: 'Ideal for small practices with low lien volume needs',
    features: [
      { text: 'Up to 50 new patients per month', included: true },
      { text: 'Human Review for accuracy', included: true },
      { text: 'Report tracking dashboard', included: true },
      { text: 'Detailed Account Manager', included: true },
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Professional Plan',
    monthlyPrice: 199,
    annualPrice: 1990,
    description: 'Ideal for growing practices that require constant guidance',
    features: [
      { text: 'Up to 50 new patients per month', included: true },
      { text: 'Human Review for accuracy', included: true },
      { text: 'Report tracking dashboard', included: true },
      { text: 'Detailed Account Manager', included: true },
    ],
    highlight: true,
    buttonText: 'Get Started Now',
  },
  {
    name: 'Custom Plan',
    monthlyPrice: 299,
    annualPrice: 2990,
    description: 'Tailored for large organizations with high lien volume needs',
    features: [
      { text: 'Custom solutions to fit your needs', included: true },
      { text: 'High volume report generation', included: true },
      { text: 'Detailed Account Manager', included: true },
      { text: 'Dedicated Support Line', included: true },
    ],
    buttonText: 'Contact Us',
  },
];

const Section7: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? plansData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === plansData.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:pt-36 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-[64px] font-semibold tracking-tighter text-gray-800 text-center mb-10 sm:mb-20">
          Flexible Plans
        </h2>

        {/* Toggle */}
        <div className="flex justify-center  mb-10">
          <div className="flex p-1 sm:p-2  rounded-2xl border shadow-sm w-[240px] sm:w-[360px]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`w-1/2 py-2 sm:py-4 text-[15px] sm:text-[16px] font-medium rounded-2xl transition-colors duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-[#834CFF] text-white shadow-md'
                  : 'text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`w-1/2 py-2 sm:py-4 text-[15px] sm:text-[16px] font-medium rounded-2xl transition-colors duration-300 ${
                billingCycle === 'annually'
                  ? 'bg-[#834CFF] text-white shadow-md'
                  : 'text-gray-700'
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Mobile View Carousel */}
        <div className="md:hidden relative ">
          <div className="flex justify-center">
            <div
              className={`w-[90%] mx-auto rounded-2xl shadow-lg p-6 py-8 flex flex-col transition-all duration-500 ${
                plansData[currentIndex].highlight
                  ? 'border-2 border-[#834CFF]'
                  : 'border border-gray-200'
              }`}
            >
              <h3 className="text-[18px] font-medium mb-4">{plansData[currentIndex].name}</h3>
              <div className="text-3xl font-bold">
                ${billingCycle === 'monthly'
                  ? plansData[currentIndex].monthlyPrice
                  : plansData[currentIndex].annualPrice}
                <span className="text-sm text-gray-500 ml-2">/{billingCycle === 'monthly' ? 'month' : ' year'}</span>
              </div>
              <p className="text-sm text-gray-600 mt-4 mb-2">{plansData[currentIndex].description}</p>
              <div className="h-[1px] bg-gray-300 my-4" />
              <ul className="space-y-5 flex-grow mb-10">
                {plansData[currentIndex].features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <CheckIcon />
                    <span className="text-[14px]">{f.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-semibold text-sm ${
                  plansData[currentIndex].highlight
                    ? 'bg-[#834CFF] text-white'
                    : 'bg-white text-[#834CFF] border-2 border-[#834CFF]'
                }`}
              >
                {plansData[currentIndex].buttonText}
              </button>
            </div>
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex justify-between items-center mt-4 px-8">
            <button onClick={handlePrev} className="text-2xl text-gray-700">
              ←
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {plansData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full ${
                    index === currentIndex ? 'bg-gray-800 w-10' : 'bg-gray-300 w-5'
                  }`}
                ></button>
              ))}
            </div>

            <button onClick={handleNext} className="text-2xl text-gray-700">
              →
            </button>
          </div>
        </div>

        {/* Desktop View Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 pt-10">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl shadow-lg p-6 py-12 flex flex-col ${
                plan.highlight ? 'border-2 border-[#834CFF]' : 'bg-white border'
              }`}
            >
              <h3 className="text-xl font- text-gray-800 mb-4">{plan.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-semibold text-gray-900">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-gray-500 text-sm ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              <p className="text-gray-600 text-[16px] mb-8 pt-4">{plan.description}</p>
              <div className="h-[0.5px] bg-slate-300" />
              <ul className="space-y-6 mt-10 mb-10 flex-grow">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start text-gray-700">
                    <CheckIcon />
                    <span className="text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`w-full py-5 px-4 rounded-full font-semibold text-[18px] ${
                  plan.highlight
                    ? 'bg-[#834CFF] text-white'
                    : 'bg-white text-[#834CFF] border-2 border-[#BFA3FF]'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
