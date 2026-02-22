import React from 'react';
/* Importing 6 product images */
import img1 from '../assets/images/incomplete-order-plugin-campaignsquat.webp';
import img2 from '../assets/images/partial-checkout-tracker-campaignsquat.webp';
import img3 from '../assets/images/axilthemes-product-538x350.webp';
import img4 from '../assets/images/advanced-inventory-software-campaignsquat.webp'; // রিপ্লেস দিস উইথ নিউ ইমেজ
import img5 from '../assets/images/restaurant-management-system-campaignsquat.webp'; // রিপ্লেস দিস উইথ নিউ ইমেজ
import img6 from '../assets/images/school-management-software-campaignsquat.webp'; // রিপ্লেস দিস উইথ নিউ ইমেজ

const ProductFormCRM = () => {
  const productList = [
  {
    id: 1,
    name: "Incomplete Order WordPress Plugin By Campaignsquat Ltd",
    url: "incomplete-order-wordpress-plugin-by-campaignsquat-ltd",
    description: "Maximize your revenue by capturing every missed opportunity. This plugin identifies customers who leave their details but fail to complete a purchase. By tracking abandoned carts in real-time, Campaignsquat Ltd empowers you to reach out with automated recovery tools. It’s the ultimate solution for turning \"almost-buyers\" into loyal customers, ensuring your e-commerce store never loses a lead to a simple distraction.",
    image: img1,
    reverse: false 
  },
  {
    id: 2,
    name: "Partial Checkout Tracker WordPress Plugin By Campaignsquat Ltd",
    url: "partial-checkout-tracker-wordpress-plugin-by-campaignsquat-ltd",
    description: "Understand your customer's journey like never before. This tracker monitors the exact step where users drop off during the checkout process. By providing deep data insights into user behavior, it helps you identify friction points in your funnel. Developed by the expert team at Campaignsquat Ltd, this tool allows you to optimize your checkout flow, reduce abandonment rates, and create a seamless shopping experience for every visitor.",
    image: img2,
    reverse: true 
  },
  {
    id: 3,
    name: "WordPress Fake Order Detection Plugin By Campaignsquat Ltd",
    url: "wordpress-fake-order-detection-plugin-by-campaignsquat-ltd",
    description: "Protect your business from fraudulent transactions and bot-generated spam. This advanced security plugin uses intelligent verification logic to flag suspicious orders before they impact your fulfillment process. By filtering out fake data and malicious intent, Campaignsquat Ltd ensures your resources are focused only on genuine customers. It’s a vital layer of protection that saves you time, prevents inventory locks, and secures your profit.",
    image: img3,
    reverse: false 
  },
  {
    id: 4,
    name: "Advanced Inventory Management Software By Campaignsquat Ltd",
    url: "advanced-inventory-management-software-by-campaignsquat-ltd",
    description: "Take full control of your supply chain with our high-performance inventory system. Designed for growing businesses, it provides real-time tracking across multiple locations and automated low-stock alerts. Our software eliminates manual errors and ensures you always have the right products available. Built by the Campaignsquat Ltd expert team, it offers the technical precision needed to maintain a balanced, profitable, and scalable warehouse.",
    image: img4,
    reverse: true 
  },
  {
    id: 5,
    name: "Restaurant Management Software By Campaignsquat Ltd",
    url: "restaurant-management-software-by-campaignsquat-ltd",
    description: "Transform your dining operations with a complete digital ecosystem. This software integrates point-of-sale (POS), table management, and kitchen order tracking into one unified platform. From handling peak-hour rushes to managing digital menus and staff shifts, Campaignsquat Ltd provides the tools to streamline every service. It’s built to improve efficiency, reduce wait times, and allow you to focus on delivering a world-class dining experience.",
    image: img5,
    reverse: false 
  },
  {
    id: 6,
    name: "All In One School Management Software By Campaignsquat Ltd",
    url: "all-in-one-school-management-software-by-campaignsquat-ltd",
    description: "Simplify educational administration with our comprehensive management suite. This platform digitizes student admissions, attendance tracking, and automated fee collection in one secure place. By connecting teachers, students, and parents through a transparent digital interface, Campaignsquat Ltd makes school operations effortless. It is a robust, scalable solution designed to handle the complex needs of modern educational institutions.",
    image: img6,
    reverse: true 
  }
];

  return (
    <section className="w-full bg-[#02050A] py-16 md:py-32 overflow-hidden px-2">
      <div className="max-w-[1445px] mx-auto px-4 md:px-12 lg:px-20 xl:px-24">
        
        <div className="flex flex-col gap-20 md:gap-40">
          {productList.map((product) => (
            <div 
              key={product.id} 
              className={`flex flex-col ${product.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-28`}
            >
              
              {/* --- Text Content Side --- */}
              <div className="flex-1 space-y-6 md:space-y-10 text-left ">
                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2] ma:leading-[1.3]  ">
                  {product.name}
                </h2>
                
                <p className="text-white text-[16px] md:text-[18px] leading-[1.4] md:leading-[1.5] font-medium ">
                  {product.description}
                </p>
                
                <div className="pt-2 md:pt-8">
                  <a 
                    href={`/products/${product.url}`}
                    className="bg-[#F7A400] text-black hover:text-white font-semibold border-2 border-[#f7a400] py-2 px-8 md:py-2 md:px-10 rounded-[5px] hover:bg-[#02050A] transition-all active:scale-95 text-[14px] md:text-[15px] inline-block"
                  >
                    Get The Product
                  </a>
                </div>
              </div>

              {/* --- Image Side --- */}
              <div className="flex-1 w-full max-w-[540px] md:max-w-none ">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-white/5 rounded-[5px] blur-lg group-hover:bg-white/10 transition duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded-[5px]  border border-white/10 bg-[#0A0A0A]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-[250px] md:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFormCRM;