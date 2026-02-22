import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

/** * Business Automation Service Page
 * Optimized for SEO and Performance.
 * UI, Logic, and Content strictly preserved.
 */

// images inputs
import heroImage from '../assets/images/Custom Business Automation Software Development Visual.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Intelligent Business Workflow Automation.webp";
import accessibilityImg from "../assets/images/Centralized Data Dashboard for Business Control.webp";
import businessImg from "../assets/images/High-Precision Financial Software Automation.webp";
import scalableImg from "../assets/images/Scalable Microservices Automation Architecture (1).webp";
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

const BusinessAutomation = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const expertiseData = [
  {
    title: "Workflow Optimization",
    desc: "We design intelligent workflow systems that eliminate manual bottlenecks and accelerate your daily business cycles. Our team focuses on strategic task automation to ensure your staff can focus on high-value goals while improving overall output.",
    img: researchIcon,
    alt: "Workflow Optimization and Business Process Automation"
  },
  {
    title: "Smart Integration Hub",
    desc: "Building seamless bridges between your favorite digital tools to create a unified and automated ecosystem. We ensure that data flows perfectly across all platforms without human intervention to maintain professional grade speed and total accuracy.",
    img: uxIcon,
    alt: "Smart Integration Hub and Automated Digital Ecosystem"
  },
  {
    title: "Process Efficiency UI",
    desc: "Crafting intuitive user interfaces that simplify complex automation rules for your non-technical team members. Our experts prioritize a clean and professional layout that makes managing large scale business processes feel effortless and smooth.",
    img: webIcon,
    alt: "Process Efficiency UI for Complex Automation Rules"
  },
  {
    title: "Scalable Logic Engine",
    desc: "Developing robust backend engines that can handle growing amounts of automated triggers and data tasks. We build secure and flexible software architectures that grow with your company while maintaining a high-performance digital environment setup.",
    img: auditIcon,
    alt: "Scalable Logic Engine and Robust Backend Architecture"
  }
];
   const featureData = [
  {
    title: ["Custom Business Automation Solutions Pro"],
    desc: "Stop losing hours to repetitive tasks. Campaignsquat Ltd. provides custom business automation solutions and end-to-end workflow automation services that allow your team to focus on high-value strategy. We conduct a thorough cost-benefit analysis of business automation software to ensure maximum ROI. By reducing human error with custom automation, we ensure your business operates at total accuracy even during rapid and complex global scaling.",
    img: uxAuditImg,
    reverse: false,
    alt: "Custom business automation solutions and intelligent workflow ROI"
  },
  {
    title: ["AI-Driven Business Process Management Kit"],
    desc: "Visibility is the cornerstone of control. We build AI-driven business process management systems featuring autonomous AI agents for business tasks. These tools pull data from every department into one unified interface, empowering your management to identify trends instantly. Campaignsquat Ltd. delivers professional dashboards that offer absolute clarity, ensuring your leadership makes data-backed decisions based on real-time operational truth.",
    img: accessibilityImg,
    reverse: true,
    alt: "AI-driven business process management and unified data dashboards"
  },
  {
    title: ["Seamless API-First Automation Architecture"],
    desc: "Your software should grow with you. We utilize a seamless API-first automation architecture and hyper-automation of back-office operations to ensure your platform remains agile. Whether adding new regions or thousands of users, our modular systems scale effortlessly. Campaignsquat Ltd. ensures your professional infrastructure remains robust, protecting your initial investment while providing a stable foundation for your evolving digital ecosystem.",
    img: businessImg,
    reverse: false,
    alt: "API-first automation architecture and hyper-automation systems"
  },
  {
    title: ["Real-Time Data Sync Across Platforms Tech"],
    desc: "Modernize your fiscal health with cross-platform automation tools and real-time data synchronization across platforms. Our operational efficiency software development integrates directly with your core to provide automated audit trails and cash flow visibility. This precision reduces overhead costs and ensures total regulatory compliance across international markets. Campaignsquat Ltd. provides professional tools that eliminate manual data entry today.",
    img: scalableImg,
    reverse: true,
    alt: "Real-time data synchronization across platforms for business efficiency"
  }
];
   const processSteps = [
    { 
        // Step 1: Audit and Analysis
        title: "Audit and Analysis", 
        description: "Deep-dive into your current tech stack to find the highest-impact automation opportunities for your brand.", 
        image: discoveryImg, 
        alt: "Business tech stack audit and automation opportunity analysis" 
    },
    { 
        // Step 2: Logic Blueprint
        title: "Logic Blueprint", 
        description: "Designing the system architecture and data flow to ensure seamless cross-platform synchronization always.", 
        image: designImg, 
        alt: "System architecture design and cross-platform data flow blueprint" 
    },
    { 
        // Step 3: Agile Engineering
        title: "Agile Engineering", 
        description: "Rapid development cycles with continuous testing to ensure a zero-defect automation deployment for you.", 
        image: iterationImg, 
        alt: "Agile software engineering and zero-defect automation deployment" 
    },
    { 
        // Step 4: Scaling and Support
        title: "Scaling and Support", 
        description: "Ongoing performance monitoring and modular updates to keep your system ahead of market demands daily.", 
        image: handoffImg, 
        alt: "Continuous performance monitoring and modular scaling support" 
    }
];

const points = [
    "Full-Cycle Enterprise RPA", 
    "99.9% Operational Accuracy", 
    "Cross-Platform Sync Logic", 
    "Instant Notification Triggers", 
    "ROI-Driven Operational Scaling"
];

  const industryData = [
    { 
        title: "Fintech & Banking", 
        desc: "We build secure automation for loan approvals and fraud detection using bank-grade encryption to ensure total compliance.", 
        img: img1,
        alt: "Fintech Automation and Banking Software"
    },
    { 
        title: "E-commerce & Retail", 
        desc: "Our experts develop dynamic inventory management and behavioral-triggered customer journeys to drive higher lifetime value.", 
        img: img2,
        alt: "E-commerce Operations Automation"
    },
    { 
        title: "SaaS Operations", 
        desc: "We create automated user onboarding and recurring billing systems with intelligent support routing to reduce customer churn.", 
        img: img3,
        alt: "SaaS Business Process Automation"
    },
    { 
        title: "Digital Healthcare", 
        desc: "Our team builds streamlined patient scheduling and HIPAA-compliant automated report generation to maximize clinical efficiency.", 
        img: img4,
        alt: "Digital Healthcare Workflow Automation"
    },
    { 
        title: "Media & Advertising", 
        desc: "We develop AI-powered ad-spend tracking and automated multi-platform reporting for precise ROI and campaign performance.", 
        img: img5,
        alt: "Ad-Tech and Media Automation Solutions"
    },
    { 
        title: "Smart Logistics", 
        desc: "Our designers craft real-time fleet tracking and automated warehouse orchestration for total visibility across the supply chain.", 
        img: img6,
        alt: "Smart Logistics and Supply Chain Automation"
    },
    { 
        title: "Modern Education", 
        desc: "We build automated enrollment workflows, grading systems, and virtual classroom management designed for large-scale growth.", 
        img: img7,
        alt: "EdTech Learning Management Automation"
    },
    { 
        title: "HR & Global Payroll", 
        desc: "Our team develops simplified payroll calculations and automated tax filing systems for distributed and international teams.", 
        img: img8,
        alt: "HR Tech and Global Payroll Automation"
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Business Automation Software Development",
    "provider": {
        "@type": "Organization",
        "name": "Campaignsquat Ltd."
    },
    "description": "Engineer bespoke automation solutions to eliminate manual tasks and reduce costs. From workflow orchestration to API sync, we build systems for strategic growth.",
    "areaServed": "Global",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automation Services",
        "itemListElement": expertiseData.map((item) => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": item.title
            }
        }))
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How long does a typical automation project take to deploy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard enterprise builds range from 3 to 6 months. We utilize a modular deployment strategy that allows you to launch core features in weeks, securing early ROI while we scale."
            }
        },
        {
            "@type": "Question",
            "name": "Can your software integrate with our existing legacy systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We specialize in custom middleware and API development that bridges the gap between modern automation and older legacy databases without data loss."
            }
        },
        {
            "@type": "Question",
            "name": "What kind of security measures protect our sensitive business data?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement bank-grade TLS encryption, Multi-Factor Authentication (MFA), and strictly audited SOC2-compliant development practices to ensure your data remains secure."
            }
        },
        {
            "@type": "Question",
            "name": "How does automation improve our long-term ROI?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "By reducing manual labor hours by up to 70% and eliminating costly human errors in data processing, our clients typically see full project payback within the first 12–18 months."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide ongoing maintenance after the software launch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Campaignsquat Ltd. provides comprehensive SLA-backed support, including 24/7 monitoring, security patching, and iterative feature scaling as your business needs evolve."
            }
        }
    ]
};

    return (
        <HelmetProvider>
            <main className="overflow-hidden font-poppins bg-[#02050a]">
                <Helmet>
                    <title>Custom Business Automation Software for Scalable Operations | Campaignsquat Ltd.</title>
                    <meta name="description" content="Engineer bespoke automation solutions to eliminate manual tasks and reduce costs. From workflow orchestration to API sync, we build systems for strategic growth." />
                    <link rel="canonical" href={window.location.href} />
                    
                    {/* Open Graph Tags */}
                    <meta property="og:title" content="Custom Business Automation Software for Scalable Operations" />
                    <meta property="og:description" content="Eliminate manual bottlenecks with bespoke automation systems. Scale your business operations with intelligent workflow orchestration." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={heroImage} />

                    {/* Schema Markup */}
                    <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                </Helmet>

                {/* 1. Hero Section */}
                <section className="relative w-full flex items-center mt-4 md:mt-20  overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                    
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                                <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                                   Custom Business Automation Software for Scalable Enterprise Growth
                                </h1>
                                <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                    Remove repetitive manual tasks and minimize human error with bespoke automation. From intelligent workflow orchestration to seamless API integrations, Campaignsquat Ltd. builds high-performance systems that reduce costs and empower your team to focus on strategic growth.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                    <Link to="/home/contact" className="w-full sm:w-auto" aria-label="Get started with business automation services">
                                      <button className=" bg-[#F7A400] border-[#f7a400] border-2 text-black  hover:text-white font-semibold py-2  px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Request a Strategy Call
                                      </button>
                                   </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                                <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                                <img 
                                    src={heroImage} 
                                    alt="Custom Business Automation Software Development Visual" 
                                    className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
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

                {/* 2. Expertise Section */}
               <section className="bg-[#0A0A0A] py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Business Automation Software Expertise Pro</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">: We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* গ্রিড লেআউট: ২-কলামে আপডেট করা হয়েছে (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                   
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={`${item.title} Expertise Icon`} 
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" 
                            loading="lazy"
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
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                        <div className="flex flex-col gap-24 md:gap-44">
                            {featureData.map((item, index) => (
                                <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                    <div className="w-full md:w-1/2">
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
                    <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16   w-full">
                        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Business Automation Lifecycle</h2>
                            <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">From initial discovery to final optimization, we handle every aspect of your ROI journey. </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                    <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                        <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                        <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                            <img 
                                                src={step.image} 
                                                alt={step.alt} 
                                                loading="lazy"
                                                className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" 
                                            />
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
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative  ">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                            <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                    Why is Campaignsquat Ltd the best Business Automation Software & Devlopment service provider?
                                    </h2>
</h2>
                                <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We deliver high-impact automation solutions tailored to solve manual bottlenecks and turn your complex workflows into seamless experiences.</p>
                                <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                    {points.map((point, index) => (
                                        <div key={index} className="flex items-center gap-5 group">
                                            <div className="w-6 h-6 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                                <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" aria-hidden="true" />
                                            </div>
                                            <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-start">
                                    <Link to="/home/contact" className="inline-block w-full sm:w-auto" aria-label="Start your automation journey">
                                     <button className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[12px] md:text-[15px] rounded-[5px] px-8  md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                          Get Started
                                      </button>
                                   </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                                <div className="relative flex justify-center lg:justify-end">
                                    <img src={sideImg} alt="Business Automation Operational Excellence Illustration" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Business Automation Expertise for Success</h2>
                            <p className="text-white text-[16px] md:text-[20px] lg:text-[20px] font-light"> Campaignsquat Ltd. provides expert business automation software for diverse industries to solve complex operational problems. We build scalable, high-performance solutions that ensure seamless user journeys and robust backend stability across all your global business sectors.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                            {industryData.map((item, index) => (
                                <div key={index} className="border-run-container group">
                                    <div className="running-border"></div>
                                    <div className="card-content flex flex-col">
                                        <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                            <img 
                                                src={item.img} 
                                                alt={`${item.title} Automation Solutions`} 
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                                            />
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
            
                {/* Questions section is called here */}
                <Questions />
            </main>
        </HelmetProvider>
    );
};

// Separated Questions Component
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
        question: "How long does a typical automation project take to deploy?",
        answer: "Standard enterprise builds range from 3 to 6 months. We utilize a modular deployment strategy that allows you to launch core features in weeks, securing early ROI while we scale."
    },
    {
        question: "Can your software integrate with our existing legacy systems?",
        answer: "Absolutely. We specialize in custom middleware and API development that bridges the gap between modern automation and older legacy databases without data loss."
    },
    {
        question: "What kind of security measures protect our sensitive business data?",
        answer: "We implement bank-grade TLS encryption, Multi-Factor Authentication (MFA), and strictly audited SOC2-compliant development practices to ensure your data remains secure."
    },
    {
        question: "How does automation improve our long-term ROI?",
        answer: "By reducing manual labor hours by up to 70% and eliminating costly human errors in data processing, our clients typically see full project payback within the first 12–18 months."
    },
    {
        question: "Do you provide ongoing maintenance after the software launch?",
        answer: "Yes, Campaignsquat Ltd. provides comprehensive SLA-backed support, including 24/7 monitoring, security patching, and iterative feature scaling as your business needs evolve."
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
                        Quick answers to your most frequent inquiries
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
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                aria-expanded={openIndex === index}
                                aria-label={`Toggle answer for: ${faq.question}`}
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

export default BusinessAutomation;