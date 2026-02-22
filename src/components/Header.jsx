import React, { useState, useEffect } from 'react'; 
import headerBg from '../assets/images/124274 (1).jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const vimeoId = "1153559168"; 

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVideoOpen]);

  return (
    <section className="relative w-full bg-[#02050A] pt-2 md:pt-6 lg:pt-8 font-poppins overflow-hidden">
      
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes fadeInFast {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .typewriter-text {
          display: block; 
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #F7A400;
          margin: 0 auto;
          animation: 
            typing 1.8s steps(30, end) forwards,
            blink-caret .75s step-end infinite;
        }

        .typewriter-text-delayed {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #F7A400;
          width: 0;
          opacity: 0; 
          margin: 0 auto;
          animation: 
            typing 1.2s steps(20, end) forwards 2s,
            blink-caret .75s step-end infinite,
            opacityFix 0.1s forwards 2s; 
        }

        @keyframes opacityFix {
          to { opacity: 1; }
        }

        @media (max-width: 640px) {
          .typewriter-text {
            white-space: normal; 
            border-right: none;
            width: 100% !important;
            animation: fadeInFast 0.8s ease-out forwards; 
          }
          .typewriter-text-delayed {
            white-space: normal; 
            border-right: none;
            width: 100% !important;
            opacity: 0;
            animation: fadeInFast 0.8s ease-out forwards 0.6s; 
          }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #F7A400; }
        }

        .fade-in-up {
          animation: fadeInFast 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .running-border-container {
          position: relative;
          padding: 1.8px; 
          overflow: hidden;
          display: inline-block;
        }
        .running-border-line {
          position: absolute;
          width: 250%;
          height: 250%;
          top: -75%;
          left: -75%;
          background: conic-gradient(transparent, transparent, transparent, #F7A400);
          animation: rotate-border 4s linear infinite;
          z-index: 0;
        }
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .inner-content {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="mb-6 md:mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-[5px] border border-[#F7A400]/30 bg-[#92817A]/10 px-4 py-2 md:px-10 md:py-4 text-center">
            <span className="text-white text-[12px] sm:text-[14px] md:text-[20px] font-semibold block leading-tight whitespace-nowrap">
             Where Visionary Design Meets Enterprise-Grade Code
            </span>
          </div>
        </div>

        {/* Heading Section */}
       <div className="w-full max-w-[1300px] mb-6 md:mb-8 text-center flex flex-col items-center">
  <h1 className="text-white font-bold tracking-tight leading-[1.3] md:leading-tight 
                 text-[26px] sm:text-[28px] md:text-[36px] lg:text-[45px] xl:text-[52px] 2xl:text-[60px] 
                 typewriter-text px-2 break-words">
    
    {/* Mobile e "Engineering &" er por break hobe, Laptop e ager motoi thakbe */}
    Custom Software Engineering & <br className="block md:hidden" /> 
    High-End <br className="hidden md:block" /> 
    UI/UX Solutions
    
  </h1>
</div>

        {/* Paragraph Section */}
      <div className="w-full max-w-[1100px] mx-auto mb-8 md:mb-12 fade-in-up" style={{ animationDelay: '1.5s' }}>
  <p className="text-white text-[16px] md:text-[20px] leading-relaxed px-5 md:px-0 text-justify md:text-center tracking-tight md:tracking-normal">
    From UI/UX Design that captivates users to full-cycle Website Design & Development, we deliver high-performance solutions. Our expertise in Software Development ensures your business scales with secure, custom-built ERP and CRM systems.
  </p>
</div>

        {/* Button Section - বাটন সাইজ ছোট এবং ফন্ট Semibold করা হয়েছে */}
        <div className="mb-12 md:mb-24 w-full flex justify-center px-4 fade-in-up" style={{ animationDelay: '1.8s' }}> 
          <Link to="/home/contact" className="w-full sm:w-auto flex justify-center">
            <button className="w-auto min-w-[110px] md:min-w-[150px] bg-[#F7A400] text-black  hover:text-white font-semibold text-[14px] md:text-[15px] py-2 md:py-2 px-5 md:px-8 rounded-[5px] border-2 border-[#F7A400] hover:bg-transparent  transition-all duration-300 active:scale-95  whitespace-nowrap">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>

      {/* Image Preview Section */}
      <div className="w-full max-w-[1340px] mx-auto px-4 md:px-12 lg:px-18 xl:px-16 pb-20 md:pb-32 fade-in-up" style={{ animationDelay: '2s' }}>
        <div 
          className="running-border-container rounded-[5px] md:rounded-[5px] cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full"
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="running-border-line"></div>
          
          <div className="inner-content bg-[#02050A] rounded-[5px]  group">
            <img 
              src={headerBg} 
              alt="Product" 
              className="w-full h-[220px] sm:h-[350px] md:h-[550px] lg:h-[600px] xl:h-[640px]  object-cover transition-transform duration-700 group-hover:scale-105 " 
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300">
              <div className="w-14 h-14 md:w-24 md:h-24 bg-[#F7A400] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 active:scale-90">
                <svg viewBox="0 0 24 24" fill="black" className="w-7 h-7 md:w-16 md:h-16 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}    
      {isVideoOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white text-5xl font-thin hover:text-[#F7A400] transition-colors z-[1001]"
          >
            &times;
          </button>
          <div className="w-full max-w-[1440px] aspect-video bg-black overflow-hidden border border-white/10 shadow-2xl rounded-lg">
            <iframe 
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&badge=0&autopause=0`} 
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default Header;