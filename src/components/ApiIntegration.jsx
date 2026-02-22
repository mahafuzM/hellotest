import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Plus, Minus, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

/** * API Integration Service Page
 * Optimized for Campaignsquat Ltd. - High Authority SEO Strategy
 */

// images inputs
import heroImage from '../assets/images/Enterprise API Integration Services Campaignsquat.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/API User Experience Audit for Campaignsquat Ltd.webp";
import accessibilityImg from "../assets/images/Secure Payment Gateway Integration and PCI Compliance.webp";
import businessImg from "../assets/images/Real-time API Data Synchronization and CRM Integration.webp";
import scalableImg from "../assets/images/AI-Powered API Monitoring and Performance Optimization.webp";
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import iterationImg from '../assets/images/web-design.png';
import handoffImg from '../assets/images/deployment.png';
import sideImg from '../assets/images/Campaignsquat engineering excellence in custom software development (1).webp';
import img1 from '../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp';
import img2 from '../assets/images/rpvu1v3dzk7wzyresb1u.jpg';
import img3 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img4 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7.webp';
import img5 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp';
import img6 from '../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp';
import img7 from '../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png';
import img8 from '../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp';
import BrandSlider from './BrandSlider';

const ApiIntegration = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Phase 2: Expertise Content
   const expertiseData = [
  {
    title: "Third-Party Endpoints",
    desc: "We connect your platform with various third-party service endpoints to expand functional capabilities without any friction. Our team ensures that every external tool works in perfect harmony with your core system for a professional user experience.",
    img: uxIcon,
    alt: "Third-Party API Endpoints and Service Integration"
  },
  {
    title: "RESTful API Development",
    desc: "Developing secure and scalable RESTful architectures that allow for seamless data exchange between your web and mobile apps. We prioritize clean code and technical documentation to ensure long-term stability and high-performance digital operations.",
    img: researchIcon,
    alt: "RESTful API Development and Scalable Architecture"
  },
  {
    title: "Real-Time Data Syncing",
    desc: "Implementing advanced synchronization logic to ensure that your business data remains consistent across all integrated platforms. We build secure bridges that handle massive data flows while maintaining absolute accuracy and professional speed.",
    img: webIcon,
    alt: "Real-Time Data Syncing and Cross-Platform Integration"
  },
  {
    title: "Secure Authentication",
    desc: "Integrating robust OAuth and secure authentication protocols to protect your API layers from unauthorized access. Our experts ensure that every data transmission is encrypted and follows global security standards for a safe digital ecosystem.",
    img: auditIcon,
    alt: "Secure API Authentication and OAuth Integration"
  }
];

    // Phase 2: Feature Content (Alternating Blocks)
  const featureData = [
  {
    title: ["Custom API Development and Integration Pro"],
    desc: "Before coding, we conduct a deep UX audit to ensure your bespoke software integration solutions feel natural. Campaignsquat Ltd. provides custom API development and integration using an API-first application development approach. We eliminate friction by mapping data flows that prioritize speed. By focusing on autonomous API orchestration, we deliver highly intuitive software that connects your complex systems without compromising your backend speed.",
    img: uxAuditImg,
    reverse: false,
    alt: "Custom API development and orchestration architecture"
  },
  {
    title: ["Payment Gateway API Integration Services"],
    desc: "We specialize in high-stakes payment gateway API integration requiring 100% uptime and high-security API encryption with zero-trust protocols. Whether scaling a marketplace or a SaaS, our third-party API integration services handle complex tax, multi-currency, and instant payouts. Campaignsquat Ltd. ensures that every transaction is processed through a professional, hardened pipeline, protecting your revenue and customer trust in every digital touchpoint.",
    img: accessibilityImg,
    reverse: true,
    alt: "Secure payment gateway API integration and encryption"
  },
  {
    title: ["Real-Time Data Synchronization APIs Tech"],
    desc: "Stop relying on outdated batches. Our software focuses on real-time data synchronization APIs across your CRM and marketing automation sync and e-commerce and logistics API sync. By optimizing GraphQL and webhook optimization, we ensure your team makes decisions based on the most current data. Campaignsquat Ltd. creates a professional ecosystem where information moves via serverless API architectures, eliminating data silos and improving speed.",
    img: businessImg,
    reverse: false,
    alt: "Real-time data synchronization and GraphQL API logic"
  },
  {
    title: ["AI and LLM API Integration and Monitoring"],
    desc: "Modern infrastructure requires legacy system API connectivity and AI and LLM API integration. We utilize advanced AI-driven monitoring tools that alert you to latency spikes before they impact users. Our automated auditing ensures your software remains compliant with industry standards and long-term scalability. Campaignsquat Ltd. delivers professional oversight for your integrations, ensuring your digital infrastructure remains stable and secure.",
    img: scalableImg,
    reverse: true,
    alt: "AI and LLM API integration with performance monitoring"
  }
];

    // Phase 2: Process Content
   const processSteps = [
    { 
        // Step 1: Discovery & Mapping
        title: "Discovery & Mapping", 
        description: "Analyzing your tech stack to document all endpoints and create a comprehensive data-flow architecture.", 
        image: discoveryImg, 
        alt: "API discovery phase and comprehensive data-flow architecture mapping" 
    },
    { 
        // Step 2: Agile Development
        title: "Agile Development", 
        description: "Using iterative sprints to build API logic, ensuring clean code and full documentation at every milestone.", 
        image: designImg, 
        alt: "Agile API development sprints with clean code and technical documentation" 
    },
    { 
        // Step 3: Rigorous QA Testing
        title: "Rigorous QA Testing", 
        description: "Conducting load testing and security scans to ensure your integration remains stable under heavy traffic.", 
        image: iterationImg, 
        alt: "Rigorous API quality assurance with load testing and security vulnerability scans" 
    },
    { 
        // Step 4: Deployment & Support
        title: "Deployment & Support", 
        description: "Continuous monitoring and versioning support to ensure your software stays compatible with future updates.", 
        image: handoffImg, 
        alt: "Continuous API monitoring, versioning support, and software compatibility updates" 
    }
];

const points = [
    "OAuth 2.0 & JWT Security Protocols", 
    "Ultra-Low Latency Response Times", 
    "Scalable Rate Limiting Logic", 
    "Auto-Generated Swagger Documentation", 
    "24/7 Endpoint Uptime Monitoring"
];

    const industryData = [
    { 
        title: "FinTech Systems", 
        desc: "We build secure connections to global banking APIs and payment gateways using multi-layer encryption to ensure safe and rapid financial transactions.", 
        img: img1, 
        alt: "FinTech API Solutions and Banking Integration" 
    },
    { 
        title: "E-commerce Hubs", 
        desc: "Our experts develop real-time sync between your inventory and global marketplaces like Amazon or eBay for automated fulfillment and stock accuracy.", 
        img: img2, 
        alt: "E-commerce API Integration for Inventory Management" 
    },
    { 
        title: "Travel & Booking", 
        desc: "We integrate GDS systems for real-time flight, hotel, and car rental availability updates to provide users with instant booking data.", 
        img: img3, 
        alt: "Travel Booking API System and GDS Integration" 
    },
    { 
        title: "Health-Tech Portals", 
        desc: "Our team connects diagnostic centers and labs with patient portals under strict HIPAA compliance to ensure secure medical data flow.", 
        img: img4, 
        alt: "Healthcare Software Integration and HIPAA Compliance" 
    },
    { 
        title: "Social Media Tech", 
        desc: "We develop automated analytics and cross-platform posting tools via official API channels to optimize your digital brand performance.", 
        img: img5, 
        alt: "Social Media Automation and Analytics API" 
    },
    { 
        title: "Logistics & Supply", 
        desc: "Our designers craft real-time GPS tracking and carrier API integrations to provide total visibility across global supply chain networks.", 
        img: img6, 
        alt: "Logistics and Tracking API for Supply Chain" 
    },
    { 
        title: "Gov-Tech Solutions", 
        desc: "We build secure digital ID and government database connectivity to streamline public service delivery with absolute data integrity.", 
        img: img7, 
        alt: "Government Technology Solutions and Secure API" 
    },
    { 
        title: "EdTech Platforms", 
        desc: "Our team develops integrated virtual classrooms with payment, result, and student management portals for a unified learning experience.", 
        img: img8, 
        alt: "EdTech Platform Integration and Student Management" 
    },
];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom API Integration & Scalable Software Development",
        "serviceType": "API Integration and Software Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd.",
            "url": "https://www.campaignsquat.com"
        },
        "description": "Elevate your enterprise with custom API integration and software development. Secure, scalable solutions to sync your data and automate workflows.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom API Design" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Third-Party Sync" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legacy Bridges" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Auditing" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do you ensure data security during API transmissions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We utilize industry-standard protocols including AES-256 encryption, OAuth2, and JWT, alongside regular penetration testing to ensure zero-leakage environments and secure authorized endpoints."
                }
            },
            {
                "@type": "Question",
                "name": "Can you integrate legacy software with modern cloud applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in bridging legacy on-premise systems with modern clouds. We build custom middleware and wrapper APIs that allow data sync without compromising stability or total rebuilds."
                }
            },
            {
                "@type": "Question",
                "name": "Will this integration slow down my existing software performance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We utilize asynchronous processing and optimized caching layers to ensure that API calls happen in the background without affecting your frontend speed or user experience."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide documentation for the custom APIs you develop?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide comprehensive, auto-generated Swagger/OpenAPI documentation. This makes it simple for your internal team to manage, test, and extend the architecture in the future."
                }
            },
            {
                "@type": "Question",
                "name": "Can you scale the software as our user base grows?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our systems are built on cloud-native architectures (AWS/Azure) that allow for horizontal scaling, ensuring your API handles 100 or 1,000,000 requests with the same low-latency speed."
                }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom API Integration & Scalable Software Development | Campaignsquat Ltd.</title>
                <meta name="description" content="Elevate your enterprise with custom API integration and software development. Secure, scalable solutions to sync your data and automate workflows. Book a consult!" />
                <link rel="canonical" href="https://www.campaignsquat.com/api-integration" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Custom API Integration & Scalable Software Development | Campaignsquat Ltd." />
                <meta property="og:description" content="Elevate your enterprise with custom API integration and software development. Secure, scalable solutions to sync data." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.campaignsquat.com/api-integration" />
                <meta property="og:image" content={heroImage} />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* --- Hero Section --- */}
            <section className="relative w-full flex items-center mt-4 md:mt-20   overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">Custom API Integration and Scalable Software Development Agency</h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal opacity-90">
                                Overcome data silos with robust API solutions designed for performance. Campaignsquat Ltd. builds seamless connectivity that empowers your enterprise to scale faster, automate workflows, and reduce tech debt. Our custom frameworks ensure secure and fast digital growth globally. 
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                               <button aria-label="Book a consultation for integration roadmap" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px]  transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                               Get Your Integration Roadmap
                                </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[85%] h-[85%] blur-[100px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Enterprise API Integration Services Campaignsquat" 
                                className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.03]" 
                                loading="eager"
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                </div>
            </section>

             {/* Slider Section */}
             <section className="w-full overflow-hidden pt-20 md:pt-30 py-12 md:py-20 ">
                <BrandSlider />
            </section>

            {/* --- Expertise Section --- */}
          <section className="bg-[#0A0A0A] py-12 md:py-20  border-y border-white/5">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 text-center relative ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Custom API Integration Service Expertise Pro </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto font-medium leading-relaxed">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* গ্রিড লেআউট: ২-কলামে আপডেট করা হয়েছে (lg:grid-cols-2) */}
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
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                    {/* রিফাইন্ড গ্লো ইফেক্ট */}
                    <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#F7A400]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>
            {/* --- Features Section --- */}
            <section className="py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="flex flex-col gap-28 md:gap-48">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2 text-left">
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1">{line}</span>)}
                                    </h2>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light max-w-[580px] opacity-80">{item.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px] border border-white/10">
                                        <div className="absolute inset-0 bg-[#F7A400]/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                        <img src={item.img} alt={item.alt} loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105 shadow-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4--- Process Section --- */}
           <section className="w-full bg-[#02050A] py-12 md:py-20  border-t border-white/5">
    <div className="max-w-[1445px] mx-auto px-6 text-center ">
        <div className="mb-24">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6 tracking-tight">
               Our Strategic API Integration Pro
            </h2>
            <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light leading-relaxed">
                A disciplined engineering approach to connecting high-performance software and data flows. 
            </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group cursor-default">
                    
                    {/* Circle Wrapper - Size increased to w-48 h-48 */}
                    <div className="relative mb-14 w-44 h-44 md:w-48 md:h-48 flex items-center justify-center">
                        {/* Rotating Border Layer */}
                        <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 group-hover:rotate-[360deg] group-hover:left-0 opacity-40"></div>
                        
                        {/* Main Circle - Icon size increased to w-20 h-20 */}
                        <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 group-hover:border-[#F7A400]/60 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden">
                            <img 
                                src={step.image} 
                                alt={step.alt} 
                                loading="lazy" 
                                className="w-20 h-20 md:w-24 md:h-24 brightness-0 invert opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" 
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <h3 className="text-white text-[26px] md:text-[28px] font-bold mb-5 group-hover:text-[#F7A400] transition-colors duration-300">
                        {step.title}
                    </h3>
                    <p className="text-white text-[16px] md:text-[17px] font-light max-w-[300px] leading-[1.6]">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* --- Why Choose Section --- */}
          <section className="py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-32 -mt-10 md:-mt-16 lg:-mt-24">
        <div className="w-full lg:w-1/2 text-left order-2 lg:order-1 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F7A400]/5 blur-[100px] -z-10"></div>
            
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-4 leading-tight">
                Why is Campaignsquat Ltd the best Api Integration Software & Devlopment service provider?
            </h2>

            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-8 max-w-xl">
                Integrate your digital ecosystem with high-performance API solutions designed for speed, security, and effortless data flow.
            </p>

            <div className="flex flex-col gap-6 mb-12">
                {points.map((point, index) => (
                    <div key={index} className="flex items-center gap-5 group">
                        <div className="w-6 h-6 rounded-full border-2 border-[#F7A400] flex items-center justify-center group-hover:bg-[#F7A400] transition-all duration-300">
                            <Check className="text-[#F7A400] group-hover:text-black w-5 h-5 stroke-[3px]" />
                        </div>
                        <span className="text-white text-[16px] md:text-[18px] font-medium opacity-90">{point}</span>
                    </div>
                ))}
            </div>

            <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                <button aria-label="Get started with API integration" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-4 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                    Get Started
                </button>
            </Link>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group overflow-hidden rounded-[10px] border border-white/5">
                <img src={sideImg} alt="Scalable API Software Development Campaignsquat" loading="lazy" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105 shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] to-transparent opacity-30"></div>
            </div>
        </div>
    </div>
</section>

            {/* --- Industry Expertise Section --- */}
          <section className="py-12 md:py-20  relative z-10 overflow-hidden">
    {/* Running Border Animation CSS */}
    <style>{`
        @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
        .border-run-container:hover .running-border { opacity: 1; }
        .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
        .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
    `}</style>

    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
                Our Industry-Specific Custom API Expertise for Global Connectivity
            </h2>
            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">
                Campaignsquat Ltd. provides expert custom API integration for diverse industries to drive digital success. We build scalable, high-performance connectivity solutions that ensure seamless user journeys and robust backend stability across all your global business sectors and platforms.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {industryData.map((item, index) => (
                <div key={index} className="border-run-container group">
                    {/* Animated Border */}
                    <div className="running-border"></div>
                    
                    {/* Card Content */}
                    <div className="card-content flex flex-col">
                        <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                            <img 
                                src={item.img} 
                                alt={item.alt} 
                                loading="lazy" 
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col text-left">
                            <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white text-[14px] md:text-[15px] font-light opacity-90 leading-relaxed">
                                {item.desc}
                            </p>
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

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

   const faqs = [
    {
        question: "How do you ensure data security during API transmissions?",
        answer: "We utilize industry-standard protocols including AES-256 encryption, OAuth2, and JWT, alongside regular penetration testing to ensure zero-leakage environments and secure authorized endpoints."
    },
    {
        question: "Can you integrate legacy software with modern cloud applications?",
        answer: "Yes, we specialize in bridging legacy on-premise systems with modern clouds. We build custom middleware and wrapper APIs that allow data sync without compromising stability or total rebuilds."
    },
    {
        question: "Will this integration slow down my existing software performance?",
        answer: "No. We utilize asynchronous processing and optimized caching layers to ensure that API calls happen in the background without affecting your frontend speed or user experience."
    },
    {
        question: "Do you provide documentation for the custom APIs you develop?",
        answer: "Absolutely. We provide comprehensive, auto-generated Swagger/OpenAPI documentation. This makes it simple for your internal team to manage, test, and extend the architecture in the future."
    },
    {
        question: "Can you scale the software as our user base grows?",
        answer: "Our systems are built on cloud-native architectures (AWS/Azure) that allow for horizontal scaling, ensuring your API handles 100 or 1,000,000 requests with the same low-latency speed."
    }
];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Just Ask Us Some Questions
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Expert-level answers to proactively address your technical integration concerns.
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

export default ApiIntegration;