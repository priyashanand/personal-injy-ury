const Section5 = () => {
  const features = [
    {
      title: "Smart Client Intake",
      description: "Automatically qualify leads with AI-driven forms and medical intake tools.",
      icon: "/assets/section4img8.png",
    },
    {
      title: "Medical Record Sync",
      description: "Seamlessly fetch and structure records for easy review and summaries.",
      icon: "/assets/section4img9.png",
    },
    {
      title: "Auto Demand Generation",
      description: "Turn records into demand letters with minimal manual effort.",
      icon: "/assets/section4img10.png",
    },
    {
      title: "AI Settlement Insights",
      description: "Predict case value with real-time data and improve negotiation outcomes.",
      icon: "/assets/section4img11.png",
    },
  ];

  return (
    <div className="px-6 md:px-20 lg:px-40 pt-24 pb-20 bg-white">
      <div className="hidden sm:flex flex-col">
      <div  className=" text-[64px] font-semibold leading-tight tracking-tighter">
          How do we work?
        </div>
      <div className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-20 py-8 pr-8 rounded-2xl">
      
        {/* Left Image */}
        <img
          src="/assets/section4img7.png"
          alt="Illustration"
          className="w-full lg:w-[50%] object-contain"
        />

        {/* Feature List */}
        <div className="flex flex-col justify-between  w-full lg:w-[50%] py-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2h-[15%]">
              <img src={feature.icon} alt="" className=" h-[60%] mt-1 p-2" />
              <div className="ml-8 ">
                <div className="text-[28px] font-semibold text-[#05011F] mb-5">{feature.title}</div>
                <div className="text-[18px] text-[#828282] mt-1">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>



      {/* mobile view */}
      <div className="sm:hidden flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-20 rounded-2xl">
      <div  className=" text-[24px] font-semibold leading-tight tracking-tighter">
          How do we work?
        </div>
        {/* Left Image */}
        <img
          src="/assets/section4img7.png"
          alt="Illustration"
          className="w-full"
        />

        {/* Feature List */}
        <div className="flex flex-col justify-center items-center space-y-8 w-full py-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col justify-center gap-2 ">
              <div className=" flex items-center">
                <img src={feature.icon} alt="" className="h-20 mt-1 p-2" />

                <div className="text-[16px] font-semibold text-[#05011F]">{feature.title}</div>
              </div>
              <div className="text-[13px] text-[#828282] mt-1 flex ml-3">{feature.description}</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
