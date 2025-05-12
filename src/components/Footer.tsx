const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 text-sm text-gray-600 ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-14 sm:gap-56 sm:pl-40">
        {/* Left Column: Logo + Description + Mobile Newsletter */}
        <div className="flex-1 max-w-sm sm">
          <div className="flex items-center gap-2 mb-4">
            <img
              className="h-10 w-auto"
              src="assets/casePilotLogo.png"
              alt="CasePilot Logo"
            />
          </div>
          <p className="text-[14px] md:text-[16px] leading-relaxed">
            Streamline case workflows, eliminate repetitive tasks, and focus more on winning outcomes.
          </p>

          {/* Mobile Newsletter */}
          <div className="block md:hidden mt-8">
            <h3 className="text-black font-semibold text-[16px] mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-xl mb-4 text-sm"
            />
            <button className="w-full bg-[#834CFF] text-white py-3 rounded-xl text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Columns: Links + Providers + Desktop Newsletter */}
        <div className="flex flex-row justify-between sm:justify-normal gap-10 md:gap-36 flex-1">
          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold text-[16px] mb-6">Quick Links</h3>
            <ul className="space-y-6 text-[14px]">
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Providers */}
          <div>
            <h3 className="text-black font-semibold text-[16px] mb-6">Our Providers</h3>
            <ul className="space-y-6 text-[14px]">
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Attorneys</a></li>
              <li><a href="#">Support & Legal</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Desktop Newsletter */}
          <div className="hidden md:block max-w-xs">
            <h3 className="text-black font-semibold text-[16px] mb-6">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded-lg mb-6"
            />
            <button className="w-full bg-[#7B3EFF] text-white py-3 rounded-lg hover:bg-purple-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center w-full mt-12">
        <div className="text-center text-gray-400 text-[16px] border-t w-full pt-6">
          © Copyright 2025, All Rights Reserved by CasePilot
        </div>
      </div>
    </footer>
  );
};

export default Footer;
