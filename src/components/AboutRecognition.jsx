import React from 'react';
import recognitionImg from '../assets/images/pexels-fauxels-3182812.jpg';

const AboutRecognition = () => {
  const data = [
    { platform: "Clutch", desc: "Top B2B Service Provider & UX Design Agency" },
    { platform: "Upwork", desc: "Top Rated Design & Devlopment Agency" },
    { platform: "Fiverr.", desc: "Pro-Verified Development Squad" }
  ];

  return (
    <section className="w-full bg-[#02050A] py-16 md:py-24 font-poppins overflow-hidden pt-4 md:pt-6">
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Image - Height balanced with text */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[620px] overflow-hidden rounded-[5px] border border-white/10 shadow-2xl">
              <img 
                src={recognitionImg} 
                alt="Our Recognition" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col">
            {/* Headline: Mobile 26px, Tablet 32px, Desktop 40px */}
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8 md:mb-12 tracking-tight leading-tight text-center lg:text-left">
              The Global Recognition
            </h2>

            <div className="flex flex-col">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="py-6 md:py-8 border-b border-white last:border-none group"
                >
                  {/* Platform Name: Mobile 40px, Tablet 50px, Desktop 72px */}
                  <h3 className="text-white font-bold text-[26px] md:text-[36px] lg:text-[44px] mb-2 md:mb-4 tracking-tighter group-hover:text-[#F7A400] transition-all duration-300">
                    {item.platform}
                  </h3>
                  {/* Description: Mobile 16px, Tablet 18px, Desktop 22px */}
                  <p className="text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutRecognition;