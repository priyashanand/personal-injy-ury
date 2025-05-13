import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: lucide icons

const cards = [
  {
    imgMain: "/assets/section4img1.png",
    title: "Intake Automation",
    desc: "Automatically onboard qualified clients with smart AI forms and medical triage."
  },
  {
    imgMain: "/assets/section4img2.png",
    title: "Demand Package Builder",
    desc: "Quickly auto-generate polished demand letters from medical records and case data. Reduce hours of manual drafting."
  },
  {
    imgMain: "/assets/section4img3.png",
    title: "Settlement Calculator",
    desc: "AI-backed valuation engine gives real-time case worth estimates based on injury, treatment, and jurisdiction."
  },
  {
    imgMain: "/assets/section4img4.png",
    title: "Lien Detection",
    desc: "Automatically manage negotiation tasks, and track settlements."
  }
];

const Section4 = () => {
  const [current, setCurrent] = useState(0);
  const max = cards.length - 1;

  const handlePrev = () => setCurrent(current === 0 ? max : current - 1);
  const handleNext = () => setCurrent(current === max ? 0 : current + 1);

  return (
    <div className="sm:hidden bg-[#FFFFFF] pb-20 sm:pb-32 pt-5">
      {/* <span ><img src="/assets/section4img1.png" alt="" className="h-20"/></span> */}
      <div className="sm:hidden pb-8 sm:py-20 px-6 md:px-40 ">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold text-black mb-0 sm:mb-4 leading-tight text-center md:text-left tracking-tighter pt-10">
          Empowering Innovation <span className="text-gray-400">- Leading </span>solutions
        </h1>
      </div>
      <div className="hidden sm:flex sm:flex-col pb-8 sm:py-20 px-6 md:px-40 ">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold text-black mb-0 sm:mb-4 leading-tight text-center md:text-left tracking-tighter">
          Empowering Innovation
        </h1>
        <div className="flex">
          <img src="/assets/section4img1.png" alt="" className="h-20 pr-3"/>
          <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold text-black mb-0 sm:mb-4 leading-tight text-center md:text-left tracking-tighter ">
            <span className="text-gray-400"> - Leading </span> solutions
          </h1>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-7 px-6 md:px-40">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl w-1/3 flex flex-col justify-between overflow-hidden "
          >
            <div className="bg-[#FAFAFA] border rounded-3xl p-10">
              <img src={card.imgMain} alt="" className="h-auto w-full object-contain mx-auto mb-6" />
              <img src="/assets/section4img6.png" alt="" className="h-16 object-contain mb-6 " />
              <div className="text-[28px] font-semibold text-left mb-5">{card.title}</div>
              <div className="text-[18px] text-left text-gray-700">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View Carousel */}
      <div className="md:hidden px-3 relative">
        <div className="flex items-center justify-between mb-4">
          <button onClick={handlePrev} className="p-2">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {cards.map((card, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="bg-white border rounded-3xl shadow-md p-6">
                    <div className="p-5 bg-[#D1DDFF] rounded-xl flex items-center justify-center ">

                    <img src={card.imgMain} alt="" className="h-auto w-full object-contain" />
                    </div>
                    {/* <img src="/assets/section4img6.png" alt="" className="h-16 object-contain mb-6" /> */}
                    <div className="text-xl font-semibold my-6">{card.title}</div>
                    <div className="text-gray-700 text-sm">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="p-2">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-2 ">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${i === current ? "bg-gray-800 w-10" : "bg-gray-300 w-5"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
