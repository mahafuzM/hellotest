import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Images Import
import Img1 from '../assets/images/Farmer Care Agriculture Management Dashboard UI Design.webp';
import Img2 from '../assets/images/MediCare Telemedicine and Health Tracking Mobile App Interface.webp';
import Img3 from '../assets/images/Modern Fashion E-commerce Website Landing Page UI UX.webp';
import Img4 from '../assets/images/FarmerCare Agriculture Investment and Finance App Design.webp';
import Img5 from '../assets/images/PulseFit Fitness and Wellness Activity Tracking UI Design.webp';

const Card = ({ item, index, total }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.96]);

  return (
    <div 
      ref={container}
      className="w-full sticky top-[10vh] flex justify-center items-start h-[90vh] sm:h-[80vh] md:h-[80vh] lg:h-[75vh] xl:h-[65vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        style={{ 
          scale,
          backgroundColor: item.color,
        }}
        className="w-full max-w-[1440px] h-full rounded-[5px] shadow-2xl overflow-hidden relative border border-black/10 flex flex-col"
      >
        {/* --- Card Link Overlay --- */}
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-50 cursor-pointer"
          aria-label={`View ${item.title} project`}
        />
        {/* ------------------------- */}

        {/* Card Header */}
        <div className="px-6 sm:px-10 md:px-14 py-4 border-b border-black/5 flex justify-between items-center bg-white/10">
          <span className="text-[14px] md:text-[18px] font-semibold text-black tracking-tighter">
            {item.title}
          </span>
        </div>

        {/* Card Content */}
        <div className="flex-1 px-6 sm:px-10 md:px-14 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
          
          {/* Left Side - Text */}
          <div className="space-y-6 text-black">
            <div className="space-y-3">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-black leading-[1.1] tracking-tight">
                {item.heading}
              </h2>
              <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-black max-w-[500px]">
                {item.description}
              </p>
            </div>

            <div className="flex gap-10 py-2">
              <div>
                <p className="text-[26px] md:text-[30px] font-semibold ">{item.pages}</p>
                <p className="text-[14px] text-black md:text-[16px] font-semibold ">Pages in Projects</p>
              </div>
              <div>
                <p className="text-[26px] md:text-[30px] font-semibold">{item.growth}</p>
                <p className="text-[14px] text-black md:text-[16px] font-semibold">Retention Growth</p>
              </div>
            </div>

            {/* CEO Section */}
            <div className="flex items-center justify-between p-1 sm:p-2 bg-black/10 backdrop-blur-sm rounded-[5px] w-full max-w-[380px] group transition-all border border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-400 rounded-full border-2 border-white/20 overflow-hidden shrink-0 shadow-sm">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${item.id}`} 
                    alt="CEO" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] sm:text-[16px] font-semibold text-black leading-tight">
                    Shubho Al-Farooque
                  </p>
                  <p className="text-[12px] sm:text-[14px] text-black font-medium leading-tight">
                    {item.title} CEO
                  </p>
                </div>
              </div>
              <div className="pr-2">
                <ArrowRight size={20} className="text-black/70 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Side - Image Preview */}
          <div className="relative h-[280px] sm:h-full max-h-[420px] w-full rounded-[5px] overflow-hidden shadow-inner border border-black/5" 
               style={{ backgroundColor: item.imgBg }}>
             <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-10">
                <div className="w-full h-[240px] sm:h-[320px] bg-white/20 backdrop-blur-md rounded-[5px] border border-white/30 flex items-center justify-center shadow-2xl rotate-2 translate-y-2 sm:translate-y-4 overflow-hidden transform-gpu">
                   <img 
                      src={item.projectImg} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-top antialiased"
                      style={{ 
                        imageRendering: 'auto',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'translateZ(0)' 
                      }}
                   />
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WorkByIndustry = () => {
  const industries = [
  { 
    title: 'Farmer Care', 
    heading: 'Modern Agricultural Platform',
    description: "A complete solution for farmers to manage their agriculture tasks and sales effectively.",
    pages: '40+',
    growth: '36%',
    color: '#B4F4BC', 
    imgBg: '#5bfa6f',
    projectImg: Img1,
    alt: 'Farmer Care Agriculture Management Dashboard UI Design',
    link: 'https://www.behance.net/gallery/237291061/Farmer-Care-Modern-Agricultural-Platform-UIUX-Design'
  },
  { 
    title: 'MediCare', 
    heading: 'Online Healthcare Solution',
    description: "A digital health solution focused on patient care management and real-time medical data tracking.",
    pages: '25+',
    growth: '42%',
    color: '#8c8fd1', 
    imgBg: '#5f60ec',
    projectImg: Img2,
    alt: 'MediCare Telemedicine and Health Tracking Mobile App Interface',
    link: 'https://www.behance.net/gallery/226935111/Online-Healthcare-mobile-app'
  },
  { 
    title: 'E-Commerce', 
    heading: 'Fashion E-commerce Landing Page',
    description: "High-converting landing page for modern fashion brands with seamless shopping experience.",
    pages: '60+',
    growth: '55%',
    color: '#ffb5c6', 
    imgBg: '#f53e82',
    projectImg: Img3,
    alt: 'Modern Fashion E-commerce Website Landing Page UI UX',
    link: 'https://www.behance.net/gallery/239998295/Fashion-E-commerce-Landing-Page'
  },
  { 
    title: 'Investment App', 
    heading: 'Agricultural Investment Platform',
    description: "Smart investment solutions specifically designed for the modern agricultural ecosystem.",
    pages: '35+',
    growth: '28%',
    color: '#ffe082', 
    imgBg: '#ffb800',
    projectImg: Img4,
    alt: 'FarmerCare Agriculture Investment and Finance App Design',
    link: 'https://www.behance.net/gallery/240637923/FarmerCare-Investment-App-for-Agriculture'
  },
  { 
    title: 'PulseFit', 
    heading: 'Complete Health & Wellness',
    description: "A fitness tracking ecosystem that helps users maintain their physical health through personalized data.",
    pages: '50+',
    growth: '48%',
    color: '#C9FFF7', 
    imgBg: '#00EBC2',
    projectImg: Img5,
    alt: 'PulseFit Fitness and Wellness Activity Tracking UI Design',
    link: 'https://www.behance.net/gallery/239332341/Online-E-learning-Website-UIUX-Design'
  },
];

  return (
    <section className="w-full bg-[#050505] relative overflow-clip pt-6 md:pt-8 pb-20">
      <div className="max-w-[1440px] px-6 sm:px-10 md:px-16 mx-auto">
        <div className="text-center mb-16 space-y-3 px-4">
          <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-semibold tracking-tighter leading-[1.2] md:leading-[1.3]">
            Global Excellence — Showcased on Behance
          </h2>
          <p className="text-white text-[16px] md:text-[20px] max-w-[500px] md:max-w-[850px] mx-auto font-medium leading-[1.3] ">
            Explore our high-impact UI/UX Design gallery. We turn complex ideas into intuitive, user-centric interfaces that drive real business results.
          </p>
        </div>

        <div className="flex flex-col relative items-center pb-[15vh] gap-8 md:gap-8 xl:gap:6">
          {industries.map((item, index) => (
            <Card key={item.id} item={item} index={index} total={industries.length} />
          ))}
        </div>

        <div className="flex justify-center md:pb-6 -mt-10 md:-mt-6">
          <a 
            href="https://www.behance.net/CampaignsquatAgency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#F7A400] hover:bg-[#02050A] border-2 border-[#F7A400] text-black hover:text-white px-6 md:px-8 py-2 rounded-[5px] font-semibold text-[14px] md:text-[15px] flex items-center gap-4 transition-all shadow-xl group active:scale-95"
          >
            Browse Our Behance Portfolio
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkByIndustry; 