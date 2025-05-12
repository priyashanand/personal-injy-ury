

const Section6 = () => {
  return (
    <div>
    <div className="bg-[#141414] hidden sm:flex flex-row">
      <div className="w-[50%] flex flex-col justify-center items-left p-20 px-28" >
        <div className="font-semibold text-[#E4E4E4] text-[48px] leading-tight tracking-tighter]">Ready to Elevate Your 
        Personal Injury Practice?</div>
        <div className="flex">
          <div className="flex items-center">
            <button className=" text-[#A785F5] border border-[#AC87FF] p-5 px-12 rounded-full">
              Contact Us
            </button>
          </div>
          <img src="/assets/section6img3.png" alt="" className="px-8 py-4"/>
        </div>
      </div>
      <img src="/assets/section6img2.png" alt=""  className="w-[50%]"/>
    </div>


    <div className="bg-[#141414] sm:hidden flex flex-col">
      <div className="flex flex-col justify-center items-center p-8">
        
        <div className="font-semibold text-[#E4E4E4] text-[24px] leading-tight text-center">
          Ready to Elevate Your <br /> Personal Injury Practice?
        </div>

        <div className="flex items-center justify-center mt-4 space-x-4">
          <div className="w-[40%] h-8"></div>
          <button className="text-[#A785F5] border border-[#AC87FF] py-2 px-4 rounded-full text-[11px] whitespace-nowrap">
            Contact Us
          </button>

          <img src="/assets/section6img3.png" alt="" className="h-8" />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Section6;
