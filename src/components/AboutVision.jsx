import React from 'react';
/* 1. Importing the image from assets */
import visionImg from '../assets/images/pexels-fauxels-3182812.jpg';
import { Link } from 'react-router-dom';

const AboutVision = () => {
  return (
    <section className="w-full bg-[#02050A] py-12 md:py-24 font-poppins overflow-hidden pt-4 md:pt-6">
      {/* Container matching Navbar padding responsive */}
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* LEFT SIDE: Image Section - Responsive Height */}
          <div className="w-full lg:w-[46%]"> 
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <img 
                src={visionImg} 
                alt="Our Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content Section */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center text-left">
            
            {/* Header Text - Responsive Font Size */}
            <h2 
              className="text-white font-bold leading-[1.3] md:leading-[1.5] mb-6  text-[30px] md:text-[36px]  " 
            >
              Your Success is Our Reputation <br className="hidden sm:block" /> Powered by CampaignSquat Ltd 
            </h2>

            {/* Description Text - Responsive Font Size */}
            <p 
              className="text-white font-normal leading-[1.6] md:leading-[1.5] mb-8 text-[16px] md:text-[18px]" 
            >
              At Campaignsquat Ltd., we believe that true digital excellence isn’t just about delivering a project; it’s about building a partnership rooted in transparency and integrity. We treat every line of code and every pixel as a reflection of our commitment to your brand. When you choose us, you’re not just hiring an agency—you’re gaining a dedicated team that is as invested in your business growth as you are.
            </p>

            {/* Button - Mobile optimized: Centered on mobile, original on desktop */}
            <div className="mt-2 flex justify-center sm:justify-start">
              <Link to="/home/projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#F7A400] text-black hover:text-white font-semibold py-2 md:py-2 px-4 md:px-6 rounded-[5px] text-[14px] md:text-[15px] hover:bg-transparent border-2 border-[#F7A400] transition-all active:scale-95">
                  Our Project
                </button>
              </Link>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;