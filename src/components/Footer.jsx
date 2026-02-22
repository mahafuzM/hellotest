import React from 'react';
import { Link } from 'react-router-dom'; 
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronsRight, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const RunningIcons = () => (
  <div className="relative flex items-center overflow-hidden ml-1 w-8 h-6">
    <div className="flex gap-0" style={{ animation: 'arrowNoGap 3.5s infinite linear' }}>
      {[20, 50, 100, 20, 50, 100].map((op, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white shrink-0" style={{ opacity: op / 100 }}>
          <path d="M6.45 17.45L11.9 12L6.45 6.55L7.5 5.5L14 12L7.5 18.5L6.45 17.45ZM12.45 17.45L17.9 12L12.45 6.55L13.5 5.5L20 12L13.5 18.5L12.45 17.45Z" />
        </svg>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-12 md:pt-20 pb-10 font-poppins border-t border-white/5">
      <style>
        {`@keyframes arrowNoGap { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }`}
      </style>

      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Flex layout bebohar kora hoyeche jate width control kora jay */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16 md:mb-20">
          
          {/* Column 1: Brand Info - Eita ektu beshi width nibe (flex-[1.5]) */}
         {/* Column 1: Brand Info - Optimized Width & Working Link */}
<div className="flex-[1.5] space-y-6 md:space-y-8">
  <Link 
    to="/home" 
    onClick={() => window.scrollTo(0, 0)} 
    className="inline-block hover:opacity-80 transition-opacity"
  >
    <h2 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight">
      CampaignSquat Ltd
    </h2>
  </Link>
  
  {/* max-w-[400px] text-tike 4 line e spread korbe */}
  <p className="text-white text-[14px] md:text-[16px] leading-[1.6] text-left max-w-[400px] ">
    Where innovation meets excellence. We craft stunning websites and high-impact 
    digital experiences, blending creativity with precision to elevate your brand.
  </p>
  
  <div className="flex flex-wrap justify-start gap-3 pt-2">
    {[Facebook, Instagram, Youtube, Linkedin, Twitter].map((Icon, index) => (
      <a 
        key={index} 
        href="#"
        className="w-11 h-11 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-white hover:bg-[#f7a400] hover:text-black hover:border-[#f7a400] transition-all duration-300 shadow-sm"
      >
        <Icon size={20} />
      </a>
    ))}
  </div>
</div>

          {/* Column 2, 3, & 4: Sobgulo soman width nibe (flex-1) */}
          <div className="flex-1 text-left">
           <Link to="/service" onClick={() => window.scrollTo(0, 0)}>
          <h4 className="text-[20px] md:text-[22px] font-bold mb-6 md:mb-8 text-white tracking-wider hover:text-[#f7a400] transition-colors cursor-pointer inline-block">
            Services
            </h4>
           </Link>
            <ul className="space-y-3 text-white text-[14px] md:text-[16px]">
              {["UI/UX Design", "Web Development", "Software Development", "Mobile App Development"].map((item) => (
                <li key={item} className="flex items-center justify-start gap-2 group cursor-pointer">
                  <ChevronsRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                  <a href="#" className="hover:text-[#f7a400] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 text-left">
            <h4 className="text-[20px] md:text-[22px] font-bold mb-6 md:mb-8 text-white tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-white text-[14px] md:text-[16px]">
              {["About Us", "Our Project", "Our Product", "Blog", "Contact", "Careers"].map((item) => (
                <li key={item} className="flex items-center justify-start gap-2 group cursor-pointer">
                  <ChevronsRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                  <Link to={item === "Careers" ? "/careers" : "#"} className="hover:text-[#f7a400] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 text-left">
            <h4 className="text-[20px] md:text-[22px] font-bold mb-4 md:mb-6 text-white tracking-wider ">Contact Us</h4>
            <ul className="space-y-4 text-white text-[16px]">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-white shrink-0 mt-1" />
                <a href="mailto:sales@campaignsquat.com" className="hover:text-[#f7a400] break-all">sales@campaignsquat.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-white shrink-0 mt-1" />
                <a href="tel:+8801330093408" className="hover:text-[#f7a400]">+88 01330093408</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-white shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block mb-1 text-[14px] md:text-[16px]">Bangladesh</span>
                  <p className="leading-snug text-white text-[12px] md:text-[14px]">Shohid Moshiur Rahman Sharak, Jhenaidah 7300, Khulna, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-white shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block mb-1 text-[14px] md:text-[16px]">UK</span>
                  <p className="leading-snug text-white text-[12px] md:text-[14px]">Unit 13 Freeland Park, Poole, England, BH16 6FA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hiring CTA Card */}
    <div className="bg-[#02050A] border border-white/10 rounded-[5px] p-8 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-lg">
  <div className="text-center lg:text-left">
    <h3 className="text-[20px] md:text-[22px] font-bold mb-2 text-white tracking-tight">Careers</h3>
    <p className="text-white text-[16px] max-w-xl mb-5">Shape the future of CampaignSquat with us! Join our innovative team.</p>
    
    <style>{`
      @keyframes whiteToOrange {
        0% {
          color: #ffffff; /* একদম সাদা */
          text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff;
        }
        100% {
          color: #F7A400; /* তোমার অরেঞ্জ কালার */
          text-shadow: 0 0 10px #F7A400, 0 0 20px #F7A400, 0 0 40px #F7A400;
        }
      }

      .blinking-neon {
        font-weight: 800;
      
        
        letter-spacing: 1px;
        animation: whiteToOrange 2s ease-in-out infinite alternate;
        display: inline-block;
      }
    `}</style>

    <div>
        <h4 className="blinking-neon text-[14px] md:text-[16px] lg:text-[18px] font-semibold mb-4 ">
          We Are Hiring!
        </h4>
    </div>
  </div>
  
  <Link to="/careers" className="w-full sm:w-auto bg-[#f7a400] text-black font-semibold px-6 py-2 rounded-[5px] border-2 border-[#F7A400] flex items-center justify-center hover:bg-[#0A0A0A] hover:border-[#F7A400] transition-all text-[12px] md:text-[15px] group hover:text-white">
    <div className="flex items-center">
        <span>Click Here</span>
        <RunningIcons />
    </div>
  </Link>
</div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-white text-[14px] md:text-[18px] font-light">
            © {new Date().getFullYear()} CampaignSquat Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;