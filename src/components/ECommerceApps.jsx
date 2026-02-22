import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Added for SEO
// images inputs
import heroImage from '../assets/images/E-commerce App Development Services Campaignsquat.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/E commerce UX Audit and conversion optimization.webp";
import accessibilityImg from "../assets/images/Secure multi-gateway payment integration.webp";
import businessImg from "../assets/images/Scalable cloud-native app infrastructure.webp";
import scalableImg from "../assets/images/App user retention and push notification strategy.webp";
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

const ECommerceApps = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

 const expertiseData = [
  {
    title: "M-commerce User Flow",
    desc: "We design seamless mobile shopping journeys that prioritize speed and ease of use to boost your conversion rates. Our team focuses on intuitive product navigation to ensure that your customers enjoy a professional and frictionless digital store.",
    img: researchIcon,
    alt: "M-commerce User Flow and Conversion Optimization"
  },
  {
    title: "Secure Checkout Logic",
    desc: "Implementing robust and encrypted payment gateways to ensure safe transactions for your global customers. We prioritize secure data handling and smooth checkout flows to build long-term brand trust and maintain professional digital credibility.",
    img: uxIcon,
    alt: "Secure Checkout Logic and Encrypted Payment Gateways"
  },
  {
    title: "Real-Time Sync Systems",
    desc: "Building advanced inventory syncing modules that connect your mobile app with your web store effortlessly. We ensure that product availability and pricing remain accurate across all platforms to provide a professional and reliable user experience.",
    img: webIcon,
    alt: "Real-Time Inventory Sync Systems for M-commerce"
  },
  {
    title: "Push Engagement Tools",
    desc: "Integrating smart push notification systems to drive customer re-engagement and promote special offers effectively. Our experts focus on personalized user alerts to help your business increase retention rates and maximize total mobile sales revenue.",
    img: auditIcon,
    alt: "Push Engagement Tools and User Retention Strategy"
  }
];

   const featureData = [
  {
    title: ["AI Shopping Agents and Smart Personalization"],
    desc: "Most apps lose revenue due to friction. Campaignsquat Ltd. builds AI shopping agents for automated product discovery and visual search matching via camera scans. We implement dynamic UI layouts and smart product bundling tailored to individual user behavior. By prioritizing user-centricity and AI-driven recommendations, we ensure your mobile platform delivers a frictionless experience that boosts conversion rates and increases order value today.",
    img: uxAuditImg,
    reverse: false,
    alt: "AI-driven e-commerce personalization and smart product discovery"
  },
  {
    title: ["Immersive AR Virtual Try-on and 3D Visuals"],
    desc: "Bridge the gap with AR virtual try-on for apparel and 3D product visualization in virtual showrooms. We integrate live stream shopping for direct in-app ordering during demonstrations. Our 5G-ready architecture ensures edge-optimized performance for lightning-fast loading of high-res assets. Campaignsquat Ltd. delivers professional immersive experiences that reduce returns and increase consumer confidence through hardware-aware software solutions.",
    img: accessibilityImg,
    reverse: true,
    alt: "AR virtual try-on and 3D showroom for immersive mobile shopping"
  },
  {
    title: ["Frictionless One-Click Checkout and BNPL"],
    desc: "Security drives sales. We integrate one-click checkout and biometric authentication via Face ID or Fingerprint sensors. Our robust platforms support BNPL and crypto options alongside local gateways like bKash or SSLCommerz. Campaignsquat Ltd. ensures professional multi-currency support and real-time inventory synchronization across physical stores. We provide a secure environment that reduces transaction failures and builds long-term brand loyalty.",
    img: businessImg,
    reverse: false,
    alt: "One-click checkout with biometric security and local payment gateways"
  },
  {
    title: ["Gamified Loyalty and Real-Time GPS Tracking"],
    desc: "Retention is profitable. We implement gamified loyalty programs and hyper-local push notifications for delivery updates. Our agentic customer support bots handle real-time tracking and refunds effortlessly. With real-time GPS tracking for live map visualization of deliveries, we ensure total transparency. Campaignsquat Ltd. provides professional marketing and logistics tools that keep your brand top-of-mind and maximize your customer lifetime value.",
    img: scalableImg,
    reverse: true,
    alt: "E-commerce app loyalty gamification and live order tracking"
  }
];

   const processSteps = [
    { 
        // Step 1: Market Discovery
        title: "Market Discovery", 
        description: "Deep competitive research and stakeholder alignment to define your unique mobile app value proposition.", 
        image: discoveryImg, 
        alt: "E-commerce market research and mobile value proposition alignment" 
    },
    { 
        // Step 2: Store Architecture
        title: "Store Architecture", 
        description: "Mapping complex product taxonomies and user journey flows for high-speed mobile shopping experiences.", 
        image: designImg, 
        alt: "Mobile store architecture planning and product taxonomy mapping" 
    },
    { 
        // Step 3: Agile Development
        title: "Agile Development", 
        description: "Engineering the commerce engine with secure payment gateways and essential ERP integration for you.", 
        image: iterationImg, 
        alt: "Agile e-commerce app development with payment and ERP integration" 
    },
    { 
        // Step 4: Launch and Scale
        title: "Launch and Scale", 
        description: "Strategic deployment followed by post-launch performance optimization to ensure sustained app growth.", 
        image: handoffImg, 
        alt: "Strategic mobile store launch and post-launch performance scaling" 
    }
];

const points = ["Omni-channel Integration", "One-Click Checkout", "Advanced Sales Analytics", "SEO & Marketing Ready", "Scalable Cloud Hosting"];

const industryData = [
    { 
        title: "Fashion & Retail", 
        desc: "We build high-end visual stores featuring virtual try-on tools and interactive size guides to maximize user confidence.", 
        img: img1, 
        alt: "Fashion and retail app development" 
    },
    { 
        title: "Grocery Apps", 
        desc: "Our experts develop real-time inventory tracking and hyper-local scheduled delivery slots for seamless daily essentials management.", 
        img: img2, 
        alt: "Online grocery app solutions" 
    },
    { 
        title: "Electronics Tech", 
        desc: "We create platforms featuring detailed product specs, side-by-side comparisons, and high-security transaction portals for premium devices.", 
        img: img3, 
        alt: "Electronics e-commerce platform" 
    },
    { 
        title: "Beauty & Health", 
        desc: "Our team builds subscription models for recurring orders and personalized product routines to drive long-term customer loyalty.", 
        img: img4, 
        alt: "Health and beauty app development" 
    },
    { 
        title: "Multi-vendor Marketplaces", 
        desc: "We develop complex platforms featuring automated commission logic and centralized vendor management for large-scale digital hubs.", 
        img: img5, 
        alt: "Multi-vendor marketplace development" 
    },
    { 
        title: "Home Decor & Design", 
        desc: "Our designers craft AR-integrated shopping experiences to help users visualize furniture in real spaces before making a purchase.", 
        img: img6, 
        alt: "AR home decor app solutions" 
    },
    { 
        title: "B2B Commerce Hubs", 
        desc: "We build bulk ordering systems with custom pricing tiers and wholesale account management designed for global trade.", 
        img: img7, 
        alt: "B2B e-commerce platform development" 
    },
    { 
        title: "On-Demand Food Delivery", 
        desc: "Our team develops real-time ordering systems with live GPS tracking for both customers and drivers to ensure rapid fulfillment.", 
        img: img8, 
        alt: "On-demand food delivery app" 
    },
];
    // Schema Data Preparation
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "E-commerce App Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Custom high-performance e-commerce mobile app development services including UX audit, payment integration, and scalable cloud infrastructure.",
        "areaServed": "Global"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does a custom e-commerce app take to develop?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, an MVP (Minimum Viable Product) takes 12-16 weeks. We prioritize a modular approach to get you to market quickly while scaling features iteratively based on user data."
                }
            },
            {
                "@type": "Question",
                "name": "Will the app sync with my existing website (Shopify/Magento)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Definitely. We build seamless API integrations that connect your mobile app with your existing backend. This ensures inventory, orders, and customer data are updated everywhere in real-time."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle high traffic during flash sales or holidays?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We utilize scalable cloud architecture (AWS/Google Cloud). This means your app automatically scales to handle thousands of simultaneous users during peak seasons without crashing or slowing down."
                }
            },
            {
                "@type": "Question",
                "name": "Can you integrate local and international payment gateways?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We integrate secure solutions like Stripe and PayPal for global customers, and local gateways like SSLCommerz, bKash, or Nagad to ensure frictionless transactions everywhere."
                }
            },
            {
                "@type": "Question",
                "name": "What is your post-launch support and maintenance policy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer tiered SLA packages including 24/7 monitoring, security patches, and OS updates to ensure your app remains performant and compatible with the latest iOS and Android releases."
                }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>E-commerce App Development Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Scale your retail brand with custom e-commerce app development. High-performance, secure, and conversion-optimized mobile solutions by Campaignsquat Ltd." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="E-commerce App Development Services | Campaignsquat Ltd." />
                <meta property="og:description" content="High-performance, secure, and conversion-optimized mobile solutions for high-growth retail brands." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20 overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]"> Scalable E-commerce App Development for High-Growth Global Brands</h1>
                            <p className="text-white text-[16px] md:text-[19px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                               Reduce friction and drive retention with custom m-commerce solutions. Campaignsquat Ltd. builds high-performance mobile apps designed to turn casual browsers into loyal customers fast. Our secure platforms optimize your digital sales and ensure long-term business success globally.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                               <button aria-label="Start Your Project Today" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                              Start Your Project Today
                             </button>
                          </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            {/* Performance Optimization: Eager loading and fetchpriority for Hero */}
                            <img 
                                src={heroImage} 
                                alt="E-commerce App Development Services Campaignsquat" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our E-commerce App Development Expertise Growth</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* গ্রিড লেআউট ২-কলামে সেট করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={item.alt} 
                            loading="lazy" 
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" 
                            style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} 
                        />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">
                            {item.desc}
                        </p>
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
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h2>
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6"> Our Strategic E-commerce App Cycle</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A structured engineering roadmap to build and scale your online mobile store for success.</p>
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                 Why is Campaignsquat Ltd the best E-Commerce Mobile Apps Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Don't just launch a store; launch an experience. We combine psychological triggers with top-tier technology to help you dominate the mobile market.</p>
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
                                     <button aria-label="Get Started" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                      Get Started
                                      </button>
                                 </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="E-commerce growth and business success dashboard" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific E-commerce App Expertise for Global Growth</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert e-commerce app development for diverse industries to drive digital success. We build scalable, high-performance mobile storefronts that ensure seamless user journeys and robust backend stability across all your global business sectors and platforms.</p>
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
        question: "How long does a custom e-commerce app take to develop?",
        answer: "Typically, an MVP (Minimum Viable Product) takes 12-16 weeks. We prioritize a modular approach to get you to market quickly while scaling features iteratively based on user data."
    },
    {
        question: "Will the app sync with my existing website (Shopify/Magento)?",
        answer: "Definitely. We build seamless API integrations that connect your mobile app with your existing backend. This ensures inventory, orders, and customer data are updated everywhere in real-time."
    },
    {
        question: "How do you handle high traffic during flash sales or holidays?",
        answer: "We utilize scalable cloud architecture (AWS/Google Cloud). This means your app automatically scales to handle thousands of simultaneous users during peak seasons without crashing or slowing down."
    },
    {
        question: "Can you integrate local and international payment gateways?",
        answer: "Yes. We integrate secure solutions like Stripe and PayPal for global customers, and local gateways like SSLCommerz, bKash, or Nagad to ensure frictionless transactions everywhere."
    },
    {
        question: "What is your post-launch support and maintenance policy?",
        answer: "We offer tiered SLA packages including 24/7 monitoring, security patches, and OS updates to ensure your app remains performant and compatible with the latest iOS and Android releases."
    }
];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Proactive E-commerce FAQ
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Expert answers to help you make informed decisions for your retail growth.
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

export default ECommerceApps;