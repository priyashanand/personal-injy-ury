const Section9 = () => {
  return (
    <div className="bg-[url(/assets/imagebg.png)] bg-cover bg-center flex flex-col items-center justify-center py-24 px-4 sm:px-8">
      {/* Title */}
      <div className="text-3xl sm:text-4xl md:text-[64px] text-white text-center font-semibold leading-tight tracking-tighter">
      Start Winning More Cases in Less Time
      </div>

      {/* Mobile: Split message */}
      <div className="block sm:hidden text-white text-center mt-4 text-base">
        Experience the future of client intake with
      </div>
      <div className="block sm:hidden text-white text-center mt-1 text-base ">
        CasePilot without any delay now
      </div>

      {/* Desktop: Single-line version */}
      <div className="hidden sm:block text-white text-center mt-12 text-lg">
        Firms using our platform reduce preparation time by 70% 
      </div>
      <div className="hidden sm:block text-white text-center text-lg">
      and close cases faster—without hiring extra staff.
      </div>

      {/* CTA Button */}
      <button className="bg-[#834CFF] text-white py-3 px-6 rounded-full mt-8 font-semibold text-sm sm:text-base">
        Book a Demo
      </button>
    </div>
  );
};

export default Section9;
