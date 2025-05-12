import { useState, useEffect } from 'react';

const items = [
  { text: 'AI-Powered Intake', img: '/assets/section2img1.png' },
  { text: 'Smart Case Tracking', img: '/assets/section2img2.png' },
  { text: 'Automated Lien Support', img: '/assets/section2img3.png' },
  { text: 'Automated Lien Support', img: '/assets/section2img4.png' },

];

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="bg-black sm:hidden flex flex-col justify-center items-center h-[150px] sm:flex-row sm:justify-between sm:h-auto sm:px-32">
      <div className=' text-[#A7A7A7] text-[12px] pb-4'>
      Trusted by Top PI Firms and Trial Lawyers
      </div>
      {items.map((item, index) => (
        <div
        key={index}
        className={`
          flex items-center transition-opacity duration-700 ease-in-out
          ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
          ${index === currentIndex ? 'flex' : 'hidden'}
          gap-3
          `}
          >
          <img src={item.img} alt="" className="h-[62px] sm:h-[52px] px-" />
          {/* <div className="text-white text-[16px] sm:text-[22px]">{item.text}</div> */}
        </div>
      ))}
    </div>
    <div className="bg-black hidden sm:flex justify-center items-center h-[112px] sm:flex-row sm:justify-between sm:h-auto sm:px-32">
      <div className=' text-white text-[24px]'>
      Trusted by Top PI Firms and Trial Lawyers
      </div>
      {items.map((item, index) => (
        <div
        key={index}
        className={`
          flex items-center transition-opacity duration-700 ease-in-out
          ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
          ${index === currentIndex ? 'flex' : 'hidden'}
          sm:flex sm:opacity-100 sm:py-10 gap-3
          `}
          >
          <img src={item.img} alt="" className="h-[62px] sm:h-[52px] px-" />
          {/* <div className="text-white text-[16px] sm:text-[22px]">{item.text}</div> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Section2;
