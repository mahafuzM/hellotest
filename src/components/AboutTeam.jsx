import React from 'react';
import ceoImg from '../assets/images/300-01.png';

const AboutTeam = () => {
  return (
    <section className="w-full py-16 md:py-24 font-poppins  overflow-hidden">
      {/* Container with max-w, white background, and rounded corners */}
      <div className="max-w-[1350px] mx-auto bg-white rounded-[5px] px-6 md:px-16 lg:px-24 py-10  md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Image Section */}
          <div className="relative w-full max-w-[340px] md:max-w-[400px] shrink-0 pt-10 pl-10">
            
            {/* 1. Background Light Green Shape */}
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#d3f1d5] rounded-[5px] z-0"></div>
            
            {/* 2. Main CEO Image with White Border */}
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[5px] border border-white shadow-xl">
              <img 
                src={ceoImg} 
                alt="Md. Maharab Biswas Api" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* 3. Floating Experience Badge */}
            <div className="absolute bottom-6 -right-4 bg-white px-6 py-4 rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0,15)] z-20 border border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-[5px] h-10 bg-[#2E7D32] rounded-[5px]"></div>
                <div>
                  <p className="text-[12px] text-black font-semibold leading-none mb-1">
                    Experience
                  </p>
                  <p className="text-[12px] md:text-[18px] font-semibold text-[#1A1A1A] leading-none">
                    Full Stack
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content Section */}
          <div className="flex-1 text-left">
            <div className="inline-block bg-[#d3f1d5] text-[#2E7D32] px-6 py-2 rounded-[5px] text-[12px] md:text-[14px] font-semibold mb-6">
              Message from the CEO
            </div>

            <h2 className="text-[#1A1A1A] text-[22px] md:text-[30px] lg:text-[32px] font-bold leading-tight mb-6">
              Building the Future of  
              <span className="text-[#F7A400]"> Digital Innovation</span>
            </h2>

            <div className="mb-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 border-b border-gray-100 pb-6">
              <span className="text-[#1A1A1A] font-semibold text-[18px] md:text-[20px]">
                Md. Maharab Biswas Api
              </span>
              <span className="text-black font-medium text-[12px] md:text-[14px]">
                Founder & CEO, Campaignsquat Ltd
              </span>
            </div>

            <p className="text-black text-[12px] md:text-[16px] leading-relaxed mb-10 max-w-[850px]">
              At Campaignsquat Ltd, we are dedicated to bridging the gap between complex technology and meaningful business growth. As a Full Stack Web Developer, I have seen firsthand how the right digital architecture can transform an idea into a powerhouse. Our mission is to provide scalable, high-performance solutions that empower brands to lead in an ever-evolving digital landscape.
              <br /><br />
              Through innovation, precision, and a commitment to excellence, we build more than just websites—we create the digital infrastructure that drives long-term success. Together, we are crafting the next generation of digital experiences.
            </p>

            <div className="pt-2">
              <p className="text-[#1A1A1A] font-bold text-[14px] md:text-[18px] leading-none">
                Let's build the future — together.
              </p>
              <p className="text-black text-[12px] md:text-[14px] mt-3">
                Join us in redefining the digital frontier.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTeam;