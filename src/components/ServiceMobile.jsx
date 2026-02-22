import React from 'react';
import { Link } from 'react-router-dom'; 
import mobileAppImg from '../assets/images/mobile app development.png';

const ServiceMobile = () => {
  // Routes updated to match App.js path configurations
  const points = [
    { name: "Android Apps", link: "/android-apps" },
    { name: "iOS Apps", link: "/ios-apps" },
    { name: "Cross-Platform", link: "/cross-platform-apps" }, 
    { name: "E-commerce Apps", link: "/ecommerce-apps" },
    { name: "Booking Apps", link: "/booking-apps" },
    { name: "Food Delivery", link: "/food-delivery-apps" }, 
    { name: "On-Demand Apps", link: "/on-demand-apps" }
  ];

  return (
    <section className="w-full bg-[#02050A] py-10 md:py-20 overflow-hidden pt-2 md:pt-2  px-2">
      <div className="max-w-[1445px] mx-auto px-4 md:px-16 lg:px-24">
        
        {/* Main Border Box - bg-[#0A0A0A] with 5px rounded corners */}
        <div className="w-full border border-white/10 rounded-[5px] p-6 md:p-12 lg:p-16 shadow-2xl bg-[#0a0a0a]">
          <div className="flex flex-col lg:flex-row-reverse items-stretch justify-between gap-10 lg:gap-20">
            
            {/* 1. Left Side: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              <Link to="/mobile-app-development" className="inline-block group/title">
                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-black mb-6 md:mb-8 leading-tight tracking-tight lg:whitespace-nowrap group-hover/title:text-[#F7A400] transition-colors">
                  Mobile App <span className="">Development</span>
                </h2>
              </Link>
              
              <p className="text-white text-[18px] md:text-[20px] mb-8 md:mb-10 leading-relaxed max-w-[450px] ">
                Crafting high-performance iOS and Android apps with a focus on smooth user experience.
              </p>

              {/* Point List */}
              <div className="flex flex-col w-full">
                {points.map((point, index) => (
                  <div key={index} className="w-full group">
                    <Link 
                      to={point.link} 
                      className="flex items-center gap-4 py-3 md:py-4 cursor-pointer w-full"
                    >
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 text-[#F7A400] transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                      </svg>
                      
                      <span className="text-white font-bold text-[18px] md:text-[20px] lg:text-[22px] transition-all duration-300 group-hover:text-[#F7A400]">
                        {point.name}
                      </span>
                    </Link>
                    {/* Bottom Divider */}
                    <div className="w-full h-[1px] bg-white/20 group-hover:bg-[#F7A400]/40 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Right Side: Image with 5px rounded corners */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-full rounded-[5px] overflow-hidden border border-white/10 shadow-sm">
                <img 
                  src={mobileAppImg} 
                  alt="Mobile App Development" 
                  className="absolute inset-0 w-full h-full  object-cover opacity-95 transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMobile;