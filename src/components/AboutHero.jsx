import React from 'react';
/* 1. Import the hero image from assets */
import heroImg from '../assets/images/pexels-fauxels-3184421.jpg';

const AboutHero = () => {
  return (
    // Section-e px-4 (mobile) ar md:px-10 (laptop) add kora hoyeche jate side padding thake
    <section className="w-full bg-[#050505] pt-10 md:pt-16 pb-16 md:pb-20 px-4 md:px-10 lg:px-16 font-poppins">
      
      {/* Running Border Animation CSS */}
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .running-border-wrapper {
          position: relative;
          padding: 2px;
          overflow: hidden;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .running-border-line {
          position: absolute;
          width: 300%;
          height: 300%;
          top: -100%;
          left: -100%;
          background: conic-gradient(transparent, transparent, transparent, #F7A400);
          animation: rotate-border 4s linear infinite;
          z-index: 0;
        }
        .inner-img-box {
          position: relative;
          z-index: 1;
          background: #050505;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Main Container: Max width ektu komiye side padding ensure kora hoyeche */}
      <div className="max-w-[1250px] mx-auto flex flex-col items-center">
        
        {/* 2. Headline */}
        <h1 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-center mb-10 md:mb-16 max-w-[1000px] leading-[1.2] md:leading-tight">
          About Campaignsquat Ltd. <br className="hidden md:block" /> 
         Empowering Brands Through Digital Innovation
        </h1>
        <p className="text-white text-[16px] md:[18px] lg:text-[20px] text-center mb-10 md:mb-16 max-auto leading-relaxed">
         we don't just build digital products; we craft experiences that drive growth. We are a full-service digital agency dedicated to transforming complex challenges into seamless, user-centric solutions. From startups to established enterprises, we help businesses navigate the digital landscape with precision and creativity.
        </p>

        {/* 3. Hero Image Section */}
        {/* Laptop-e jate baire na jay tai w-[95%] deya hoyeche */}
        <div className="w-[100%] md:w-[95%] lg:w-full running-border-wrapper rounded-[10px] shadow-2xl border border-white/10">
          
          <div className="running-border-line"></div>

          {/* Height adjustment for laptop screens */}
          <div className="inner-img-box rounded-[5px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
            <img 
              src={heroImg} 
              alt="Digital Experiences"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;