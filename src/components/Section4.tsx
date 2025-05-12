import React from 'react';


const Section4: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-32">
      <div className=" mx-auto px-4">
        {/* Title */}
        <div className=" flex flex-col items-left pb-20">
          <h1 className="text-[24px] sm:text-[64px] font-semibold text-black mb-1 leading-tight tracking-tighter">            
            <span className="relative inline-block">
            Make sure you’re 
            </span>
            <span className='text-[#834CFF]'> winning
            </span>
          </h1>
          <h1 className="text-[24px] sm:text-[64px] font-semibold text-black mb-1 leading-tight tracking-tighter">            
            <span className="relative inline-block">
            where it matters most
            </span>
          </h1>
        </div>

        {/* First Row */}
        <div className='flex flex-row gap-6'>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 md:w-[40%]">
              <div className={`flex-1 rounded-2xl bg-white p-6 shadow-sm border border-gray-200 `}>
                <img src="/assets/section4img6.png" alt="" className=''/>
                <h3 className="text-[32px] font-semibold text-gray-900 mb-2">Intake Automation</h3>
                <p className="text-gray-600 text-[20px] mb-4">Automatically onboard qualified clients with smart AI forms and medical triage.</p>
                <div className="flex w-full h-auto justify-center items-center  bg-gray-200 rounded-3xl py-24 px-10" ><img src="/assets/section4img1.png" alt="" /></div>
              </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 w-[60%] ">
            <div className={`flex-1 flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-200 `}>
              <div>
                <img src="/assets/section4img6.png" alt="" className=''/>
                <h3 className="text-[32px] font-semibold text-gray-900 mb-2">Demand Package Builder</h3>
                <p className="text-gray-600 text-[20px] mb-4">Quickly auto-generate polished demand letters from medical records and case data. Reduce hours of manual drafting.</p>
              </div>
              <div className=" flex w-full h-full  justify-center  bg-gray-200 rounded-3xl py-24 px-10" >
                <div>
                  <img src="/assets/section4img3.png" alt="" className=' '/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className='flex flex-row gap-6 '>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 w-[60%] ">
            <div className={`flex-1 flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-200 `}>
              <div>
                <img src="/assets/section4img6.png" alt="" className=''/>
                <h3 className="text-[32px] font-semibold text-gray-900 mb-2">Demand Package Builder</h3>
                <p className="text-gray-600 text-[20px] mb-4">Quickly auto-generate polished demand letters from medical records and case data. Reduce hours of manual drafting.</p>
              </div>
              <div className=" flex w-full h-full  justify-center  bg-gray-200 rounded-3xl py-24 px-10" >
                <div>
                  <img src="/assets/section4img3.png" alt="" className=' '/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 md:w-[40%]">
            <div className={`flex-1 flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-200 `}>
              <div>
                <img src="/assets/section4img6.png" alt="" className=''/>
                <h3 className="text-[32px] font-semibold text-gray-900 mb-2">Intake Automation</h3>
                <p className="text-gray-600 text-[20px] mb-4">Automatically onboard qualified clients with smart AI forms and medical triage.</p>
              </div>
              <div className="flex w-full h-full justify-center items-center  bg-gray-200 rounded-3xl px-10" ><img src="/assets/section4img4.png" alt="" /></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Section4;
