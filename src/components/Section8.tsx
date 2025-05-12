import React, { useState } from 'react';

const PlusIcon: React.FC<{ className?: string }> = () => (
  <img src="/assets/section8img3.png" alt="expand" className="h-5 min-w-5 sm:h-6 sm:w-6" />
);

const MinusIcon: React.FC<{ className?: string }> = () => (
  <img src="/assets/section8img4.png" alt="collapse" className="h-5 min-w-5 sm:h-6 sm:w-6" />
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-6">
      <div className="border border-gray-200 rounded-2xl p-5 sm:p-10 bg-white shadow-sm">
        <button
          onClick={onClick}
          className="flex justify-between items-center w-full text-left focus:outline-none"
        >
          <div className=" text-lg sm:text-xl md:text-2xl font-medium text-black ">{question}</div>
          <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
        </button>
        {isOpen && (
          <div className="mt-4 text-gray-600 text-sm sm:text-[18px] leading-relaxed pr-1 sm:pr-8">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'Is there a free trial available?',
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: 'How does CasePilot integrate with our current tools?',
    answer:
      'CasePilot offers seamless integration with a variety of popular legal tools and platforms. We provide open APIs and dedicated support to ensure a smooth transition and interoperability with your existing workflow. Contact our support team for specific integration queries.',
  },
  {
    question: 'Can AI really help my law firm?',
    answer:
      'Absolutely! AI can automate repetitive tasks, provide data-driven insights for case strategy, improve client communication, and enhance overall efficiency. CasePilot leverages AI to help your firm save time, reduce errors, and focus on high-value legal work.',
  },
  {
    question: 'Does this replace my case management software?',
    answer:
      "CasePilot can serve as a comprehensive case management solution or complement your existing software by adding advanced AI-powered features. Its modular design allows for flexibility depending on your firm's specific needs.",
  },
  {
    question: 'How does lien negotiation work in CasePilot?',
    answer:
      'Our AI-powered lien negotiation module analyzes case data, historical outcomes, and provider billing to suggest optimal negotiation strategies. It automates communication and documentation, streamlining the entire lien resolution process for faster and more favorable settlements.',
  },
  {
    question: 'How long does CasePilot Case Management setup take?',
    answer:
      "Setup time varies depending on the complexity of your firm's data and customization requirements. However, our dedicated onboarding team works to get most firms up and running within a few days to a week. We prioritize a swift and smooth transition.",
  },
];

const Section8: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 pb-6 sm:py-20 sm:pb-28 md:px-48 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto pl-5 sm:pl-0">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-3xl md:text-[64px] font-semibold text-gray-900 pl-2 sm:pl-0 mb-4 sm:mb-8 text-left leading-tight tracking-tighter">
            Frequently Asked
          </h2>
          <h2 className="text-3xl sm:text-3xl md:text-[64px] font-semibold text-[#834CFF] pl-2 sm:pl-0 mb-10 sm:mb-20 text-left leading-tight tracking-tighter">
            Questions
          </h2>

          {/* FAQ List */}
          <div>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
