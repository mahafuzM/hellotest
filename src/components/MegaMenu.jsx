import React from 'react';
import { Link } from 'react-router-dom';
import uiIcon from '../assets/images/curve.png';
import webIcon from '../assets/images/coding.png';
import softIcon from '../assets/images/stack.png';
import mobIcon from '../assets/images/mobile-development.png';

const MegaMenu = () => {
  const serviceData = [
    {
      title: "UI/UX Design",
      image: uiIcon,
      path: "/service/ui-ux-design", 
      items: [
        { name: "Web & Mobile UI", link: "/service/web-mobile-ui" },
        { name: "UX & Wireframing", link: "/service/ux-wireframing" },
        { name: "Interactive Prototype", link: "/service/interactive-prototype" },
        { name: "SaaS & Dashboards", link: "/service/saas-dashboard" },
        { name: "Design Systems", link: "/service/design-system" },
        { name: "Landing Page UI", link: "/service/landing-page-ui" },
        { name: "App Interfaces", link: "/service/app-interface" }
      ]
    },
    {
      title: "Web Design & Development",
      image: webIcon,
      path: "/service/web-design-development", 
      items: [
        { name: "Custom Websites", link: "/service/custom-websites" },
        { name: "WordPress Dev", link: "/service/wordpress-development" }, 
        { name: "Landing Pages", link: "/service/landing-pages" },
        { name: "Corporate Sites", link: "/service/corporate-sites" },
        { name: "Personal Branding", link: "/service/personal-branding" },
        { name: "Site Optimization", link: "/service/site-optimization" },
        { name: "E-Commerce Dev", link: "/service/ecommerce-development" } 
      ]
    },
    {
      title: "Software Development",
      image: softIcon,
      path: "/service/software-development", 
      items: [
        { name: "Custom CRM", link: "/service/custom-crm" },
        { name: "ERP Systems", link: "/service/erp-systems" },
        { name: "Business Automation", link: "/service/business-automation" },
        { name: "Inventory & Billing", link: "/service/inventory-billing" },
        { name: "HRM Systems", link: "/service/hrm-systems" },
        { name: "SaaS Solutions", link: "/service/saas-solutions" },
        { name: "API Integration", link: "/service/api-integration" }
      ]
    },
    {
      title: "Mobile App Development",
      image: mobIcon,
      path: "/service/mobile-app-development", 
      items: [
        { name: "Android Apps", link: "/service/android-apps" },
        { name: "iOS Apps", link: "/service/ios-apps" },
        { name: "Cross-Platform", link: "/service/cross-platform-apps" }, 
        { name: "E-Commerce Apps", link: "/service/ecommerce-apps" },
        { name: "Booking Apps", link: "/service/booking-apps" },
        { name: "Food Delivery", link: "/service/food-delivery-apps" }, 
        { name: "On-Demand Apps", link: "/service/on-demand-apps" }
      ]
    }
  ];

  return (
    /* Pixel system-e daine shoranur jonno left value adjust kora holo */
    <div className=" md:top-full lg:top-full md:-right-[175px]  max-w-full   lg:xl:left-[195px] relative w-full pointer-events-auto flex justify-center z-[50]">
      <div className="w-full lg:max-w-[1400px] px-2 md:px-8 lg:px-10">
        <div className="bg-[#0A0A0A] border-[1px] lg:border-[2px] border-[#8C9096]/30 rounded-[5px] p-4 md:p-8 lg:p-6 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {serviceData.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#02050A] border border-[#8C9096]/20 rounded-xl p-4 md:p-6 transition-all duration-300 flex flex-col group hover:border-[#F7A400] hover:shadow-[0_0_20px_rgba(247,164,0,0.1)]"
              >
                <Link to={service.path} className="flex items-center gap-3 mb-4 cursor-pointer group/title">
                  <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center p-2 shrink-0 group-hover/title:scale-110 transition-transform">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <h3 className="text-white font-bold text-[14px] md:text-[17px] leading-tight group-hover/title:text-[#F7A400] transition-colors">
                    {service.title}
                  </h3>
                </Link>

                <div className="w-full h-[1px] bg-[#8C9096]/10 mb-4"></div>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.link} 
                        className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer group/item transition-all"
                      >
                        <span className="text-[#F7A400] text-lg font-black transition-transform group-hover/item:translate-x-1">
                          →
                        </span>
                        <span className="text-[12.5px] md:text-[14.5px] font-medium">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;