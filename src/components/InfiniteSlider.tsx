const IMAGES = [
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
  "/assets/testimonial1.png",
];

export const InfiniteSlider = () => {
  return (
    <div>
      <div className="hidden sm:block bg-[#834CFF]">
        <div className="flex flex-col items-center py-5">
          <div className="text-[#EBEBEB] font-semibold text-[64px] leading-tight tracking-tighter pt-10">
          What do our Clients say
          </div>
          <div className="text-[#D9D9D9] text-[20px] leading-tight tracking-tighter py-8">
          From solo practitioners to high-volume trial attorneys, top firms rely on our AI tools to win more cases, faster.
          </div>
        </div>
        <div className="relative m-auto overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#3b82f6_0%,rgba(59,130,246,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#3b82f6_0%,rgba(59,130,246,0)_100%)] after:content-[''] py-5 pb-12">
          <div className="animate-infinite-slider flex w-[calc(1000px*10)] gap-x-8">
            {IMAGES.map((src, index) => (
              <div
                className="slide flex w-[500px] items-center justify-center"
                key={`first-${index}`}
              >
                <img src={src} alt={`testimonial ${index + 1}`} width={480} height={480} />
              </div>
            ))}
            {IMAGES.map((src, index) => (
              <div
                className="slide flex w-[500px] items-center justify-center"
                key={`second-${index}`}
              >
                <img src={src} alt={`testimonial ${index + 1}`} width={480} height={480} />
              </div>
            ))}
          </div>
        </div>
      </div>




      <div className="sm:hidden bg-[#834CFF]">
        <div className="flex flex-col items-center py-5">
          <div className="text-[#EBEBEB] font-semibold text-[24px] leading-tight tracking-tighter pt-10">
          What do our Clients say
          </div>
          <div className="text-[#D9D9D9] text-[12px] leading-tight tracking-tighter p-6">
          From solo practitioners to high-volume trial attorneys, top firms rely on our AI tools to win more cases, faster.
          </div>
        </div>
        <div className="relative m-auto overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-[''] py-5 pb-12">
          <div className="animate-infinite-slider flex w-[calc(700px*10)] gap-x-8">
            {IMAGES.map((src, index) => (
              <div
                className="slide flex w-[500px] items-center justify-center"
                key={`first-${index}`}
              >
                <img src={src} alt={`testimonial ${index + 1}`} width={480} height={480} />
              </div>
            ))}
            {IMAGES.map((src, index) => (
              <div
                className="slide flex w-[500px] items-center justify-center"
                key={`second-${index}`}
              >
                <img src={src} alt={`testimonial ${index + 1}`} width={480} height={480} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;