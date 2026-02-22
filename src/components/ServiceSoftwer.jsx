import React from 'react';
import { Link } from 'react-router-dom';
import softImg from '../assets/images/software development.png';

const ServiceSoftwer = () => {
  // Links set according to App.js and MegaMenu routes
  const points = [
    { name: "Custom CRM", path: "/custom-crm" },
    { name: "ERP Systems", path: "/erp-systems" },
    { name: "Business Automation", path: "/business-automation" },
    { name: "Inventory & Billing", path: "/inventory-billing" },
    { name: "HRM Systems", path: "/hrm-systems" },
    { name: "SaaS Solutions", path: "/saas-solutions" },
    { name: "API Integration", path: "/api-integration" }
  ];

  return (
    <section className="w-full bg-[#02050A] py-10 md:py-20 overflow-hidden pt-2 md:pt-2  px-2">
      
      {/* Container - Max Width 1445px */}
      <div className="max-w-[1445px] mx-auto px-4 md:px-16 lg:px-24">
        
        {/* Main Border Box - bg-[#0A0A0A] with 5px rounded corners */}
        <div className="w-full border border-white/10 rounded-[5px] p-6 md:p-12 lg:p-16 shadow-2xl bg-[#0A0A0A]">
          
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20">
            
            {/* 1. Left Side: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-black mb-6 md:mb-8 leading-tight tracking-tight lg:whitespace-nowrap">
                Software <span className="">Development</span>
              </h2>
              
              <p className="text-white text-[18px] md:text-[20px] mb-8 md:mb-10 leading-relaxed max-w-[460px]">
                Engineering robust, scalable, and custom software solutions to solve complex business problems.
              </p>

              {/* Point List */}
              <div className="flex flex-col w-full">
                {points.map((point, index) => (
                  <Link to={point.path} key={index} className="w-full group">
                    <div className="flex items-center gap-4 py-3 md:py-4">
                      
                      {/* Right Arrow Icon */}
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 text-[#F7A400] transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                      </svg>
                      
                      <span className="text-white font-bold text-base md:text-xl lg:text-[22px] transition-all duration-300 group-hover:text-[#F7A400]">
                        {point.name}
                      </span>
                    </div>
                    
                    {/* Bottom Divider */}
                    <div className="w-full h-[1px] bg-white/20 group-hover:bg-[#F7A400]/40 transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Right Side: Image with 5px rounded corners */}
         <div className="w-full lg:w-1/2 flex">
  {/* Container setup - flex ensures it stretches to match text height */}
  <div className="relative w-full rounded-[5px] overflow-hidden border border-white/10 bg-[#0a0a0a] flex items-stretch min-h-[450px] lg:min-h-full">
    <img 
      src={softImg} 
      alt="Software Development" 
      /* absolute inset-0 ensuring the image fills the entire height of the text level */
      className="absolute inset-0 w-full h-full object-cover opacity-90 transform hover:scale-105 transition-transform duration-700"
    />
    
    {/* Gradient Overlay - to keep the elite look and blend edges */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
  </div>
</div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceSoftwer;