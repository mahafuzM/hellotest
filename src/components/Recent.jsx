import React from 'react';
import { Play } from 'lucide-react'; 
import study1 from '../assets/images/study 1.jpg';
import study2 from '../assets/images/study 2.jpg';

const Recent = () => {
  return (
    <section className="w-full bg-[#02050A] py-12 md:py-24 overflow-hidden font-poppins   pt-4 md:pt-6">
      
      {/* Side padding barano hoyeche px-10 theke px-20 porjonto desktop-e */}
      <div className="max-w-[1445px] mx-auto px-8 sm:px-14 md:px-14 lg:px-16 xl:px-18 text-center">
        
        {/* Header Section - mb-6 theke mb-4 kora hoyeche gap komanor jonno */}
        <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-6 tracking-tight text-balance">
         Our Recent Project  Videos
          </h2>
        
        {/* Paragraph - mb-12 theke mb-8 kora hoyeche jate grid-er sathe gap kome */}
        <p className="text-white text-[16px] sm:text-[16px] md:text-[20px] max-w-6xl mx-auto mb-8 md:mb-12 leading-relaxed opacity-90">
          Turning complex visions into high-performance reality. 
          Watch our latest work in action.
        </p>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          
          {/* Project Card 1 */}
          <div className="relative group cursor-pointer overflow-hidden rounded-[5px] border border-white/10 aspect-[16/10] md:aspect-[16/9.5] lg:aspect-[16/10]">
            <img 
              src={study1} 
              alt="Project Video 1" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#f7a400] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play fill="black" color="black" size={32} className="md:size-12 ml-1" />
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="relative group cursor-pointer overflow-hidden rounded-[5px] border border-white/10 aspect-[16/10] md:aspect-[16/9.5] lg:aspect-[16/10]">
            <img 
              src={study2} 
              alt="Project Video 2" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#f7a400] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play fill="black" color="black" size={32} className="md:size-12 ml-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recent;