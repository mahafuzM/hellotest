import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Added for SEO

// images inputs
import heroImage from '../assets/images/Campaignsquat food delivery app development interface on mobile and tablet.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/UX audit and data analysis for food delivery app optimization.webp";
import accessibilityImg from "../assets/images/Advanced logistics routing and driver dispatch system interface.webp";
import businessImg from "../assets/images/Integrated multi-app ecosystem for food tech platforms.webp";
import scalableImg from "../assets/images/Customer loyalty program and engagement features in mobile app.webp";
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import iterationImg from '../assets/images/web-design.png';
import handoffImg from '../assets/images/deployment.png';
import sideImg from '../assets/images/mobile app.webp';
import img1 from '../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp';
import img2 from '../assets/images/rpvu1v3dzk7wzyresb1u.jpg';
import img3 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img4 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7.webp';
import img5 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp';
import img6 from '../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp';
import img7 from '../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png';
import img8 from '../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp';
import BrandSlider from './BrandSlider';

const FoodDelivery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "Real-Time GPS Tracking",
    desc: "We integrate advanced live-tracking systems that allow customers to monitor their orders from kitchen to doorstep. Our team focuses on high-precision location accuracy to ensure a professional and transparent delivery experience for every user.",
    img: researchIcon,
    alt: "Real-Time GPS Tracking and Live Order Monitoring"
  },
  {
    title: "Vendor Management Hub",
    desc: "Developing robust restaurant dashboards that simplify menu updates and order processing in real-time. We prioritize clean backend logic to ensure that vendors can manage high traffic volumes efficiently while maintaining professional speed today.",
    img: uxIcon,
    alt: "Vendor Management Hub and Restaurant Dashboard Design"
  },
  {
    title: "Secure Checkout Flow",
    desc: "Implementing encrypted payment systems and digital wallets for a fast and secure transaction process. Our experts design frictionless checkout journeys to maximize your conversion rates and build long-term trust within the global food market.",
    img: auditIcon,
    alt: "Secure Checkout Flow and Encrypted Payment Integration"
  },
  {
    title: "Smart Courier Logic",
    desc: "Building dedicated driver applications with optimized route mapping and instant delivery alerts. We focus on technical stability to ensure that your delivery fleet operates with absolute precision and provides a high-quality professional service.",
    img: webIcon,
    alt: "Smart Courier Logic and Delivery Route Optimization"
  }
];

    const featureData = [
    {
        // Section 1: AI-Powered Customer Experience
        title: ["AI Personalized Menus", "and Ordering UX Pro"],
        desc: "Most apps lose revenue due to friction. Campaignsquat Ltd. builds bespoke food delivery apps for local startups featuring AI-personalized menus and visual search. By using voice-activated food ordering and one-tap reordering, we ensure your mobile platform delivers a frictionless experience. Our deep-dive UX audits eliminate bottlenecks, boosting conversion rates through advanced search filters and multi-wallet payments for a seamless journey today.",
        img: uxAuditImg,
        alt: "AI-powered food delivery app interface with personalized menus",
        reverse: false,
    },
    {
        // Section 2: Smart Kitchen and Demand Insights
        title: ["Cloud Kitchen App", "Development and Insights"],
        desc: "Efficiency is the backbone of food tech. We engineer cloud kitchen app development solutions with predictive demand forecasting and real-time kitchen workflow optimization. Our systems offer AI demand insights to forecast peak hours and manage inventory synchronization for restaurants. Campaignsquat Ltd. delivers professional restaurant app solutions that automate menu engineering and billing, ensuring your operations remain agile and 100% accurate today.",
        img: accessibilityImg,
        alt: "Cloud kitchen workflow optimization and inventory management dashboard",
        reverse: true,
    },
    {
        // Section 3: Optimized Logistics and Eco-Tracking
        title: ["Custom Restaurant POS", "Sync and Logistics"],
        desc: "Achieve higher margins with route optimization and dynamic delivery fee management. We provide sustainable delivery tracking and eco-friendly delivery tracking software for 2026, displaying carbon savings. Whether it is contactless drone delivery integration or real-time GPS tracking, Campaignsquat Ltd. ensures your on-demand food delivery software stays ahead. Our professional rider apps include earnings trackers and AI-driven navigation logic today.",
        img: businessImg,
        alt: "GPS logistics tracking and delivery route optimization interface",
        reverse: false,
    },
    {
        // Section 4: Unified Multi-Vendor Ecosystem
        title: ["Multi Vendor Food", "Marketplace Architecture"],
        desc: "Future-proof your brand with a multi-vendor food marketplace and white-label food delivery solutions for franchises. We build unified ecosystems comprising dedicated apps for customers, riders, and owners, all synced via a central admin panel. By hire expert developers for custom restaurant POS sync, you ensure data integrity across your network. Campaignsquat Ltd. provides professional 360-degree connectivity that protects your global revenue.",
        img: scalableImg,
        alt: "Multi-vendor food marketplace ecosystem and admin panel architecture",
        reverse: true,
    },
];

    const processSteps = [
    { 
        // Step 1: Market Intelligence
        title: "Market Intelligence", 
        description: "Analyzing competitors and user behavior to define a unique market position and technical edge for you now.", 
        image: discoveryImg, 
        alt: "Food delivery market intelligence and competitive research for unique positioning" 
    },
    { 
        // Step 2: UX Blueprinting
        title: "UX Blueprinting", 
        description: "Mapping complex user flows and data structures to ensure long-term scalability and seamless navigation.", 
        image: designImg, 
        alt: "Food delivery app UX blueprinting and complex user flow mapping" 
    },
    { 
        // Step 3: Agile Development
        title: "Agile Development", 
        description: "Iterative coding with continuous testing and seamless third-party API integrations for a robust ecosystem.", 
        image: iterationImg, 
        alt: "Agile food tech development with iterative coding and API integration" 
    },
    { 
        // Step 4: Launch and Support
        title: "Launch and Support", 
        description: "Deploying to App Stores and providing 24/7 technical maintenance and optimization for sustained growth.", 
        image: handoffImg, 
        alt: "App Store deployment and continuous technical maintenance for food delivery apps" 
    }
];

    const points = ["Real-time GPS Monitoring", "Multi-vendor Support", "Contactless Delivery Options", "Advanced Rating Systems", "In-app Chat & Support"];

   const industryData = [
    { 
        title: "Cloud Kitchens", 
        desc: "We build optimized workflows specifically for delivery-only restaurant models to ensure rapid order processing and kitchen efficiency.", 
        img: img1, 
        alt: "Cloud kitchen management software interface" 
    },
    { 
        title: "Grocery Delivery", 
        desc: "Our experts develop inventory-heavy applications featuring weight-based pricing logic for accurate billing of fresh produce and staples.", 
        img: img2, 
        alt: "On-demand grocery delivery mobile app solution" 
    },
    { 
        title: "Alcohol & Drinks", 
        desc: "We create secure delivery systems featuring age-verification steps and specialized logistics to handle fragile bottled goods safely.", 
        img: img3, 
        alt: "Alcohol and beverage delivery app development" 
    },
    { 
        title: "Baking & Sweets", 
        desc: "Our team builds advanced pre-order management for custom cakes and delicate items to ensure perfect timing for every celebration.", 
        img: img4, 
        alt: "Online bakery and sweets ordering platform" 
    },
    { 
        title: "Organic & Fresh", 
        desc: "We develop direct-from-farm marketplaces featuring freshness tracking and soil-to-table visibility for health-conscious global consumers.", 
        img: img5, 
        alt: "Organic food and fresh produce marketplace app" 
    },
    { 
        title: "Pet Food Delivery", 
        desc: "Our designers craft subscription-based ordering systems for pet nutrition and recurring treats to drive long-term customer retention.", 
        img: img6, 
        alt: "Pet food subscription and delivery app" 
    },
    { 
        title: "Meat & Seafood", 
        desc: "We build temperature-controlled logistics tracking systems to ensure quality assurance and safety throughout the cold chain journey.", 
        img: img7, 
        alt: "Fresh meat and seafood delivery tracking system" 
    },
    { 
        title: "Daily Meal Kits", 
        desc: "Our team develops flexible subscription models for healthy, home-cooked meal prep with automated weekly menu rotations.", 
        img: img8, 
        alt: "Healthy meal kit subscription app development" 
    },
];

    // FAQ Data for Schema
    const faqSchemaData = [
        { q: "How long does it take to develop a custom food delivery app?", a: "Typically, an MVP (Minimum Viable Product) takes 12-16 weeks. The timeline varies based on complexity, integration requirements, and whether you are launching on single or multiple platforms (iOS, Android, and Web)." },
        { q: "Can your platform handle massive order spikes during peak hours?", a: "Absolutely. We build our food delivery platforms using scalable cloud architecture (AWS/Google Cloud). This allows your app to automatically scale resources during dinner rushes or holidays without any lag or downtime." },
        { q: "Will I own the source code after the project is complete?", a: "Yes. Campaignsquat Ltd. provides full Intellectual Property (IP) ownership and source code transfer upon project completion. You have total control over your platform's future development and scaling." },
        { q: "Do you integrate with existing restaurant POS systems?", a: "Yes, we specialize in custom API integrations. We can sync your delivery platform with existing POS systems like Toast, Square, or Clover to ensure seamless order flow and unified inventory management." },
        { q: "Do you provide separate apps for restaurants and delivery riders?", a: "Yes, we provide a full ecosystem. This includes the Customer App, the Merchant Dashboard (for order and menu management), and the Rider App (for navigation and earnings tracking), all synced in real-time." }
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Food Delivery App Development | Custom Solutions | Campaignsquat</title>
                <meta name="description" content="Leading food delivery app development company. We build scalable, high-conversion on-demand platforms. Get a free tech consultation from Campaignsquat Ltd." />
                <link rel="canonical" href="https://www.campaignsquat.com/food-delivery-app-development" />
                
                {/* OG Tags */}
                <meta property="og:title" content="Food Delivery App Development | Custom Solutions | Campaignsquat" />
                <meta property="og:description" content="Leading food delivery app development company. We build scalable, high-conversion on-demand platforms." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.campaignsquat.com/food-delivery-app-development" />

                {/* Service & FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Food Delivery App Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Campaignsquat Ltd"
                        },
                        "description": "Custom food delivery app development for scalable growth, featuring hyper-local precision and multi-app ecosystems."
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqSchemaData.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })}
                </script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]"> Custom Food Delivery App Development for Scalable Enterprise Growth</h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                               Empower your food tech venture with robust, high-performance mobile applications. We bridge the gap between complex logistics and seamless user experiences, ensuring your platform dominates the market. Our custom systems provide the reliability you need to succeed globally.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Launch Your Food Tech Startup" className="bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Launch Your Food Tech Startup Today
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            {/* Performance: Eager loading and high fetchpriority for Hero Image */}
                            <img 
                                src={heroImage} 
                                alt="Campaignsquat food delivery app development interface on mobile and tablet" 
                                loading="eager"
                                fetchpriority="high"
                                className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider Section */}
            <section className="w-full overflow-hidden pt-20 md:pt-30 py-12 md:py-20 ">
                <BrandSlider />
            </section>

            {/* 2. Expertise Section */}
           <section className="bg-[#0A0A0A] py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Food Delivery App Development Expertise Pro</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose. </p>
        </div>

        {/* lg:grid-cols-2 ব্যবহারে ডেস্কটপে ২ কলামে কার্ড শো করবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={`${item.title} icon for food delivery solutions`} 
                            loading="lazy" 
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" 
                            style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} 
                        />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* 3. Features Section */}
            <section className="py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full  ">
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2">
                                    {/* SEO Hierarchy: Changed to H3 inside loop */}
                                    <h3 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h3>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light text-left max-w-[580px]">{item.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px]">
                                        <div className="absolute -inset-4 bg-[#F7A400]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <img src={item.img} alt={item.alt} loading="lazy" className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="w-full bg-[#02050A] py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic Food Tech Engineering</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light"> A disciplined, agile-based framework designed to take your delivery concept to market leader. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img src={step.image} alt={step.alt} loading="lazy" className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    {/* SEO Hierarchy: Changed to H3 inside loop */}
                                    <h3 className="text-white text-[22px] md:text-[24px] lg:text-[26px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light max-w-[280px]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-12 md:py-20  relative z-[1]">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative  ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                Why is Campaignsquat Ltd the best Food Delivery Mobile Apps Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Success in food delivery requires speed and reliability. Campaignsquat builds the infrastructure that keeps orders flowing and customers satisfied.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                    <button aria-label="Get Started with Food Tech" className="bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat food delivery platform excellence and UI design" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className="py-12 md:py-20  relative z-10 overflow-hidden">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full  ">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Industry-Specific Food Delivery App Expertise for Global Markets</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">: Campaignsquat Ltd. provides expert food delivery app development for diverse industries to drive digital success. We build scalable, high-performance delivery solutions that ensure seamless user journeys and robust backend stability across all your global business sectors and kitchens.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        {/* SEO Hierarchy: Changed to H3 inside loop */}
                                        <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light opacity-90">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
            <Questions />
        </main>
    );
};

// Separated Questions Component
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
    {
        question: "How long does it take to develop a custom food delivery app?",
        answer: "Typically, an MVP (Minimum Viable Product) takes 12-16 weeks. The timeline varies based on complexity, integration requirements, and whether you are launching on single or multiple platforms (iOS, Android, and Web)."
    },
    {
        question: "Can your platform handle massive order spikes during peak hours?",
        answer: "Absolutely. We build our food delivery platforms using scalable cloud architecture (AWS/Google Cloud). This allows your app to automatically scale resources during dinner rushes or holidays without any lag or downtime."
    },
    {
        question: "Will I own the source code after the project is complete?",
        answer: "Yes. Campaignsquat Ltd. provides full Intellectual Property (IP) ownership and source code transfer upon project completion. You have total control over your platform's future development and scaling."
    },
    {
        question: "Do you integrate with existing restaurant POS systems?",
        answer: "Yes, we specialize in custom API integrations. We can sync your delivery platform with existing POS systems like Toast, Square, or Clover to ensure seamless order flow and unified inventory management."
    },
    {
        question: "Do you provide separate apps for restaurants and delivery riders?",
        answer: "Yes, we provide a full ecosystem. This includes the Customer App, the Merchant Dashboard (for order and menu management), and the Rider App (for navigation and earnings tracking), all synced in real-time."
    }
];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Expert-Led Food Tech Insights
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Quick answers to technical and business inquiries regarding your delivery platform.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border transition-all duration-300 rounded-[5px] md:rounded-[5px] ${
                                openIndex === index 
                                ? 'border-[#f7a400] bg-[#0A0A0A]' 
                                : 'border-[#02050a] bg-[#0A0A0A] hover:border-[#f7a400]'
                            }`}
                        >
                            <button
                                aria-expanded={openIndex === index}
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="text-[15px] md:text-[18px] font-semibold leading-tight transition-colors duration-300 pr-4 text-white">
                                    {faq.question}
                                </span>
                                <span className="shrink-0">
                                    {openIndex === index ? (
                                        <div className="bg-[#f7a400] p-1 md:p-1.5 rounded-full">
                                            <Minus size={18} className="md:w-[22px] md:h-[22px]" strokeWidth={3} color="black" />
                                        </div>
                                    ) : (
                                        <div className="bg-white/10 p-1 md:p-1.5 rounded-full">
                                            <Plus size={18} className="md:w-[18px] md:h-[18px]" strokeWidth={3} color="white" />
                                        </div>
                                    )}
                                </span>
                            </button>

                            <div 
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-5 md:px-8 pb-6 md:pb-8 text-white text-[14px] md:text-[16px] leading-relaxed font-normal">
                                    <div className="h-[1px] w-full bg-gray-800/50 mb-5 md:mb-6"></div>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoodDelivery;