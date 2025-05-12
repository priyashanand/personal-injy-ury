

const Section3 = () => {
  return (
    <div className='flex justify-between sm:bg-[#FAFAFA] sm:pb-28 pt-36 px-32 gap-20 '>
      
      <img src="/assets/section3img1.png" alt="" className="w-[50%]" />
      <div className=" flex flex-col w-[50%] justify-center">
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[48px] font-semibold text-black mb-0.5 sm:mb-4 leading-tight tracking-tighter">
          <span className="relative inline-block">Legal Support </span>
        </h1>
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[48px] font-semibold text-black mb-0.5 sm:mb-4 leading-tight tracking-tighter">
          <span className="relative inline-block">When You Need It Most </span>
        </h1>
        <div className="mx-auto text-gray-600 text-[13px] sm:text-lg md:text-[20px] leading-relaxed mt-4">
        Discover how leading attorneys are transforming personal injury representation through dedication, innovation, and client-centered strategies.
        </div>
        <button
            type="button"
            className=" bg-[#834CFF] hover:bg-[#6E3EDB] text-white font-medium py-3 px-0 sm:px-8 rounded-full text-[12px] sm:text-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 w-[30%] my-16"
          >
            Register Now
          </button>
      </div>
      
      

      
    </div>
  )
}

export default Section3