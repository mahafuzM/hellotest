import React from 'react';

const AboutMission = () => {
  return (
    <section className="w-full bg-[#02050A] py-16 md:py-24 font-poppins pt-4 md:pt-6 px-4 md:px-6">
      {/* 1445px Container with consistent padding */}
      <div className="max-w-[1445px] mx-auto px-4 md:px-12 lg:px-12 xl:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* --- Our Mission Card --- */}
          <div className="group bg-white/5 p-8 md:p-12 rounded-[5px] border border-[#02050A] hover:border-[#F7A400] transition-all duration-300 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              {/* Icon BG: Fixed #02050A, Border #F7A400 */}
              <div className="w-12 h-12 bg-[#02050A] rounded-full flex items-center justify-center border border-[#F7A400]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-[22px] md:text-[26px">Our Mission</h3>
            </div>
            {/* p tag text 16px, md text 18px kora hoyeche */}
            <p className="text-white text-[16px] md:text-[18px] leading-relaxed transition-opacity">
             To empower businesses by delivering high-quality, innovative digital solutions that bridge the gap between complex technology and user-friendly experiences. We strive to be a trusted partner for our global clients, providing cutting-edge UI/UX design, web development, and robust software solutions that drive measurable growth. Our focus is on creating scalable products that help brands thrive in an ever-evolving digital landscape today.
            </p>
          </div>

          {/* --- Our Vision Card --- */}
          <div className="group bg-white/5 p-8 md:p-12 rounded-[5px] border border-[#02050A] hover:border-[#F7A400] transition-all duration-300 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              {/* Icon BG: Fixed #02050A, Border #F7A400 */}
              <div className="w-12 h-12 bg-[#02050A] rounded-full flex items-center justify-center border border-[#F7A400]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-[22px] md:text-[26px]">Our Vision</h3>
            </div>
            {/* p tag text 16px, md text 18px kora hoyeche */}
            <p className="text-white text-[16px] md:text-[18px] leading-relaxed  transition-opacity">
             To become a global leader in digital transformation, recognized for our creativity, technical excellence, and integrity in every project. We envision a future where Campaignsquat Ltd. is the premier destination for brands seeking to redefine their digital presence through seamless design and world-class technology. Our goal is to set new industry standards by consistently delivering excellence that inspires users and scales businesses.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;