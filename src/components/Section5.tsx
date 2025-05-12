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
      icon: "/assets/section4img8.png",
    },
    {
      title: "Auto Demand Generation",
      description: "Turn records into demand letters with minimal manual effort.",
      icon: "/assets/section4img8.png",
    },
    {
      title: "AI Settlement Insights",
      description: "Predict case value with real-time data and improve negotiation outcomes.",
      icon: "/assets/section4img8.png",
    },
  ];

  return (
    <div className="px-6 md:px-20 lg:px-40 py-12 bg-white">
      <div className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-20 p-8 rounded-2xl">
        {/* Left Image */}
        <img
          src="/assets/section4img7.png"
          alt="Illustration"
          className="w-full lg:w-[60%] object-contain"
        />

        {/* Feature List */}
        <div className="flex flex-col justify-between space-y-8 w-full lg:w-[40%] py-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 h-[15%]">
              <img src={feature.icon} alt="" className=" h-[100%] mt-1 p-2" />
              <div className="ml-8 ">
                <div className="text-[22px] font-semibold text-[#05011F] mb-5">{feature.title}</div>
                <div className="text-[16px] text-[#828282] mt-1">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
