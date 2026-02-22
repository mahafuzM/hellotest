import React from 'react';
import { Link } from 'react-router-dom';

// Images Import
import qiraatImg from '../assets/images/Qiraat.webp';
import rivertelImg from '../assets/images/Rivertel.avif';
import taleekImg from '../assets/images/Taleek.avif';
import qiraat2Img from '../assets/images/Qiraat 2.jpg';
import rivertel2Img from '../assets/images/Rivertel 2.jpg';
import taleek2Img from '../assets/images/Taleek 2.jpg';

const CaseStudy = () => {
  // এখানে ঠিক ৬টি কার্ডের ডাটা রাখা হয়েছে
  const featuredCases = [
    { 
      id: 1, 
      image: rivertelImg, 
      title: "Farmercare", 
      fullName: "farmercare", 
      description: "Task Management Platform – Boosting Team Productivity with a Custom Solution" 
    },
    { 
  id: 2, 
  image: rivertel2Img, 
  title: "SafeNet Security SaaS",
  category: "Web Development", 
  fullName: "safenet-secure-remote-access-saas", 
 description: "A Zero-Trust Network Access platform securing 50,000+ sessions with high-speed tunneling and identity-based control."

},
    { 
      id: 31, 
      image: qiraat2Img, 
      title: "FSH Furniture", 
      fullName: "fsh-furniture-luxury-digital-transformation", 
      description: "FSH Furniture – Redefining Luxury Furniture Sales with a High-Performance Digital Transformation" 
    },
    { 
      id: 70, 
      image: taleek2Img, 
      title: "TaskSync", 
      fullName: "tasksync-custom-productivity-solution", 
      description: "A Custom-Built Productivity Hub Using Vue.js and Laravel for Agile Teams" 
    },
    { 
      id: 71, 
      image: rivertelImg, 
      title: "Healthcare Booking", 
      fullName: "healthcare-patient-booking-platform", 
      description: "Online Patient Booking Platform – Revolutionizing Healthcare Accessibility with Vue.js and Node.js" 
    },
    { 
      id: 72, 
      image: qiraatImg, 
      title: "Domailmax SaaS", 
      fullName: "domailmax-microservices-saas-platform", 
      description: "Domailmax Microservices SaaS Platform – Scalable Architecture with Go and Kubernetes" 
    }
  ];

  // Slug Generator Function
  const createSlug = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <section className="w-full bg-[#02050A] md:pt-6 pb-12 md:pb-24 px-4 md:px-16 font-['Poppins'] overflow-x-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-6 md:mb-8 tracking-tight">Featured Projects</h2>
          <p className="text-gray-300 text-[15px] md:text-[18px] max-w-4xl mx-auto leading-relaxed font-normal px-2">
            Where high-end UI/UX Design meets scalable Software Development. We build digital products engineered to accelerate your business growth.
          </p>
        </div>

        {/* Grid Layout - এখানে ঠিক ৬টি কার্ড রেন্ডার হবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-20 px-2 sm:px-12 xl:px-0">
          {featuredCases.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0A0A0A] border border-gray-800 flex flex-col overflow-hidden group transition-all duration-300 hover:border-[#f7a400] rounded-sm"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 md:p-8 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-white text-[14px] md:text-[16px] leading-relaxed line-clamp-3">{item.description}</p>
              </div>

              {/* Read More Button */}
              <Link
                to={`/projects/${createSlug(item.fullName)}`}
                state={{ title: item.title, image: item.image }}
                className="w-full py-2 bg-[#f7a400] text-black hover:text-white text-center font-semibold text-[14px] md:text-[15px] transition-all duration-300 border-t border-[#f7a400] hover:bg-black"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link to="/home/projects">
  <button className="px-10 py-2 bg-[#f7a400] text-black hover:text-white font-semibold text-[14px] md:text-[15px] rounded-[5px] border-2 border-[#f7a400] hover:bg-[#0A0A0A] transition-all duration-300 active:scale-95">
    View All Projects
  </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;