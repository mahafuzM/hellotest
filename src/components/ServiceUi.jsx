import React from 'react';
import { Link } from 'react-router-dom'; 
import uiuxImg from '../assets/images/uiux design.png';

const ServiceUi = () => {
  // Links updated according to App.jsx routing paths
  const points = [
    { name: "Web & Mobile UI", link: "/web-mobile-ui" },
    { name: "UX & Wireframing", link: "/ux-wireframing" },
    { name: "Interactive Prototype", link: "/interactive-prototype" },
    { name: "SaaS & Dashboards", link: "/saas-dashboard" }, 
    { name: "Design Systems", link: "/design-system" },      
    { name: "Landing Page UI", link: "/landing-page-ui" },
    { name: "App Interfaces", link: "/app-interface" }       
  ];

  return (
    <section className="w-full bg-[#02050A] py-10 md:py-20 overflow-hidden  pt-2 md:pt-2 px-2">
      <div className="max-w-[1445px] mx-auto px-4 md:px-16 lg:px-24">
        {/* Main Card Border - Rounded 5px as requested */}
        <div className="w-full border border-white/10 rounded-[5px] p-6 md:p-12 lg:p-16 shadow-2xl bg-[#0A0A0A]">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20">
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* Main Title Link - Navigates to UIUXDesign.jsx page */}
              <Link to="/ui-ux-design" className="inline-block group">
                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-black mb-6 md:mb-8 leading-tight tracking-tight group-hover:text-[#F7A400] transition-colors cursor-pointer">
                  UI/UX <span className="">Design</span>
                </h2>
              </Link>
              
              <p className="text-white text-[16px] md:text-[18px] mb-8 md:mb-10 leading-relaxed ">
                <span className="block">Creating intuitive, user-centric interfaces that blend</span>
                <span className="block">aesthetics with seamless functionality.</span>
              </p>

              <div className="flex flex-col w-full">
                {points.map((point, index) => (
                  <div key={index} className="w-full group">
                    {/* Sub-item links properly mapped here */}
                    <Link to={point.link} className="flex items-center gap-4 py-3 md:py-4 cursor-pointer">
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 text-[#F7A400] transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                      </svg>
                      <span className="text-white font-semibold text-[18px] md:text-[20px] lg:text-[22px] transition-all duration-300 group-hover:text-[#F7A400]">
                        {point.name}
                      </span>
                    </Link>
                    <div className="w-full h-[1px] bg-white/20 group-hover:bg-[#F7A400]/40 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

           <div className="w-full lg:w-1/2 lg:self-start lg:sticky lg:top-10">
  {/* Image Container - matches the height of the list perfectly */}
  <div className="relative rounded-[5px] overflow-hidden border border-white/10 shadow-sm bg-[#0a0a0a]">
    <img 
      src={uiuxImg} 
      alt="UI/UX design" 
      // object-cover ensures the box is filled, matching the list level
      className="w-full h-full min-h-[400px] lg:min-h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUi;