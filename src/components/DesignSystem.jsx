import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Technical SEO: Helmet for Metadata

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/Professional UIUX Design System Services Portfolio  Campaignsquat.webp';
import atomIcon from '../assets/images/research.png';
import colorIcon from '../assets/images/ux-design (1).png';
import componentIcon from '../assets/images/web-design.png';
import docIcon from '../assets/images/3d-modeling.png'; 
import atomicImg from "../assets/images/Scalable Atomic Design System Layout (1).webp";
import brandImg from "../assets/images/Enterprise Brand Visual Identity System (1).webp";
import libraryImg from "../assets/images/UI Component Kits for Fast Development (1).webp";
import manualImg from "../assets/images/Developer Handoff and Design Guidelines (1).webp";
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import iterationImg from '../assets/images/web-design.png';
import handoffImg from '../assets/images/deployment.png';
import sideImg from '../assets/images/High-impact UI UX design excellence and user satisfaction - Campaignsquat.webp';
import img1 from '../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp';
import img2 from '../assets/images/rpvu1v3dzk7wzyresb1u.jpg';
import img3 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img4 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7.webp';
import img5 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp';
import img6 from '../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp';
import img7 from '../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png';
import img8 from '../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp';
import BrandSlider from './BrandSlider';

const DesignSystem = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Schema Data extraction for Helmet
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Scalable UI/UX Design Systems & Atomic Design",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd"
        },
        "description": "Build enterprise-grade Design Systems with Campaignsquat. We specialize in Atomic Design, shared component libraries, and design tokens.",
        "serviceType": "UI/UX Design System Services"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does a custom Design System benefit my business scale?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A custom Design System acts as a single source of truth. It ensures visual consistency across multiple platforms, reduces design debt, and allows your team to ship new features 50% faster."
                }
            },
            {
                "@type": "Question",
                "name": "Do you integrate the design system with React or Tailwind?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we deliver synced Figma UI kits and reusable React/Tailwind component libraries, ensuring a pixel-perfect 1:1 match between the design and the final live product."
                }
            },
            {
                "@type": "Question",
                "name": "What is Atomic Design and why do you use it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Atomic Design is a methodology for breaking interfaces down into fundamental building blocks (atoms). This modular approach makes your UI extremely scalable and easier to maintain."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help document our existing design patterns?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide 'Living Documentation' that includes technical guidelines, accessibility standards (WCAG), and design tokens."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to build a full enterprise design system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A comprehensive Design System typically takes 4 to 8 weeks, including UI audit, component library building, and documentation."
                }
            }
        ]
    };

    const expertiseData = [
  {
    title: "Scalable Component Lib",
    desc: "We build a comprehensive library of reusable components that ensure a unified brand presence across all digital platforms and products. This systematic approach reduces development time and maintains design consistency as your business scales.",
    img: componentIcon,
    alt: "Scalable Reusable Component Library for Design Systems"
  },
  {
    title: "Unified Brand Identity",
    desc: "Establishing clear guidelines for typography, color palettes, and spacing to create a cohesive visual language for your global team. We ensure that every digital touchpoint reflects your brand values with absolute precision and professionality.",
    img: colorIcon,
    alt: "Unified Brand Identity Guidelines and Visual Language"
  },
  {
    title: "Agile Design Workflow",
    desc: "Our design systems streamline the transition between design and code, allowing for rapid updates and seamless team collaboration across the globe. We create a shared source of truth that helps maintain high performance and product integrity.",
    img: atomIcon,
    alt: "Agile Design Workflow and Shared Source of Truth"
  },
  {
    title: "Future-Proof Systems",
    desc: "Developing flexible frameworks that can evolve with new technologies and user requirements without losing core brand stability. Our team builds the foundational structures needed to support long-term digital growth and consistent user paths.",
    img: docIcon,
    alt: "Future-Proof Design Frameworks and Structural Stability"
  }
];

    const featureData = [
  {
    title: ["Scalable UI Consistency via Atomic Design"],
    desc: "As enterprise products grow, visual inconsistency leads to massive design debt. We solve this by building custom Design Systems based on Atomic Design principles. By creating a single source of truth for every button, input, and card, we ensure your product remains identical across every platform. This structured approach reduces cognitive load for users and builds long-term brand authority. Campaignsquat Ltd. ensures your UI is stable and professional.",
    img: atomicImg,
    reverse: false,
    alt: "Scalable Atomic Design System Layout"
  },
  {
    title: ["Enterprise Visual Language and Identity"],
    desc: "A professional Design System is the DNA of your brand identity. We do not just pick colors; we engineer a visual grammar that communicates your core values. From precision corner radii to custom motion curves, every detail is engineered to ensure your SaaS or FinTech product stands out with a premium, high-fidelity personality that generic kits cannot match. We build unique visual systems that define your professional market presence effectively.",
    img: brandImg,
    reverse: true,
    alt: "Enterprise Brand Visual Identity System"
  },
  {
    title: ["Ship Features 2X Faster With UI Component"],
    desc: "Stop wasting thousands of hours reinventing the wheel. Our Design Systems include production-ready Figma UI kits and React libraries that allow teams to drag and drop proven elements. This increases product shipping velocity by up to 50%, letting your engineers focus on high-level business logic rather than debating pixel paddings. Campaignsquat Ltd. provides the technical tools needed to launch professional features with absolute speed and precision.",
    img: libraryImg,
    reverse: false,
    alt: "UI Component Kits for Fast Development"
  },
  {
    title: ["Living Documentation for Design Handoff"],
    desc: "A system is only effective if it is usable. We provide Living Documentation—a detailed roadmap explaining the technical why behind every UI pattern. We integrate WCAG accessibility standards and developer-ready tokens, minimizing handoff friction and ensuring that your final production build is a pixel-perfect reflection of the design intent. Our documentation ensures a professional and seamless transition from design to functional code today.",
    img: manualImg,
    reverse: true,
    alt: "Developer Handoff and Design Guidelines"
  }
];

    const processSteps = [
    { 
        // Step 1: Strategic UI Audit
        title: "Strategic UI Audit", 
        description: "Auditing existing design patterns to identify inconsistencies and technical debt across your platforms.", 
        image: discoveryImg, 
        alt: "Strategic UI pattern audit to identify design inconsistencies and technical debt" 
    },
    { 
        // Step 2: Tokens & Design Logic
        title: "Tokens & Design Logic", 
        description: "Defining core design tokens, typography scales, and grid architectures for a unified brand experience.", 
        image: designImg, 
        alt: "Defining design tokens and typography scales for a scalable design system logic" 
    },
    { 
        // Step 3: Atomic Library Build
        title: "Atomic Library Build", 
        description: "Developing a robust library of atomic UI components and reusable organisms to ensure design scalability.", 
        image: iterationImg, 
        alt: "Building an atomic UI component library for scalable design system infrastructure" 
    },
    { 
        // Step 4: Handoff & Documents
        title: "Handoff & Documents", 
        description: "Delivering documented usage rules and best practices for engineering teams to ensure flawless execution.", 
        image: handoffImg, 
        alt: "Design system documentation and handoff for seamless developer implementation" 
    }
];
    const points = [
        "Pixel-Perfect Visual Consistency", 
        "50% Faster Time-to-Market", 
        "Scalable Atomic UI Logic", 
        "WCAG 2.1 Accessible Design", 
        "Unified Brand Experience (Web/Mobile)"
    ];

    const industryData = [
        { title: "Enterprise Systems", desc: "We build centralized UI management systems for massive screen counts to ensure strict brand consistency and scalable growth for global brands.", img: img1, alt: "Enterprise UI Management System" },
        { title: "FinTech Standards", desc: " Our experts create security-first accessible UI patterns and high-trust financial components designed for seamless banking and payment journeys.", img: img2, alt: "FinTech UI Design Framework" },
        { title: "Healthcare UI Kits", desc: " We design clear, inclusive, and high-precision UI components for medical applications that prioritize patient data clarity and accessibility.", img: img3, alt: "Healthcare Accessible UI Components" },
        { title: "SaaS Product Libraries", desc: "Our team develops scalable UI patterns optimized for data-dense dashboards and complex software tools to drive high-performance workflows.", img: img4, alt: "SaaS Dashboard Component Library" },
        { title: "E-comm Admin UI", desc: "We build modular dashboard systems for unified retail and order management, ensuring a frictionless experience for merchants across all devices.", img: img5, alt: "E-commerce Admin Panel Interface" },
        { title: "EdTech UX Kits", desc: " Our designers craft engaging and intuitive UI patterns tailored for diverse age groups, optimizing the digital learning experience for global students.", img: img6, alt: "EdTech User Experience Design" },
        { title: "Logistics Frameworks", desc: "We develop high-contrast, utility-first UI components for mission-critical apps, ensuring speed and reliability in complex supply chain tracking.", img: img7, alt: "Logistics Application Framework" },
        { title: "Retail Ecosystems", desc: "We create cohesive design systems across web, mobile, and digital storefronts to deliver a unified brand experience for modern retail customers.", img: img8, alt: "Retail Digital Brand Ecosystem" },
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            {/* Metadata Management */}
            <Helmet>
                <title>Scalable UI/UX Design Systems & Atomic Design | Campaignsquat Ltd</title>
                <meta name="description" content="Build enterprise-grade Design Systems with Campaignsquat. We specialize in Atomic Design, shared component libraries, and design tokens to eliminate debt and scale products faster." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Scalable UI/UX Design Systems | Campaignsquat Ltd" />
                <meta property="og:description" content="Build enterprise-grade Design Systems with Campaignsquat. We specialize in Atomic Design and shared component libraries." />
                <meta property="og:image" content={heroImage} />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                           <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                               Scalable UI/UX Design System Services for Modern Digital Brands
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Build to grow and designed to last. Campaignsquat Ltd. creates comprehensive Atomic Design Systems and modular UI kits that allow your product to scale effortlessly. Our developer-friendly handoffs and adaptive architecture ensure your platform remains high-performing and consistent.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto" aria-label="Contact us to architect your product">
                               <button className="bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all transform hover:bg-[#02050A] active:scale-95 group">
                                 Build Your Design System
                               </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            {/* Performance: Eager loading & fetchpriority for LCP */}
                            <img 
                                src={heroImage} 
                                alt="Professional UI/UX Design System Services Portfolio - Campaignsquat" 
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
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center  ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our UI/UX Design System Expertise for Growth</h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium">S We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose. </p>
        </div>

        {/* বড় স্ক্রিনে ২-কলাম গ্রিড নিশ্চিত করা হয়েছে */}
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
                        <p className="text-white text-[16px] md:text-[18px]  leading-relaxed font-light">
                            {item.desc}
                        </p>
                    </div>
                    {/* Hover Glow Effect */}
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
                                    {/* SEO: Hierarchy correction to H3 */}
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
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[22px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6"> Our UI/UX Design System Process</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">Creating a scalable design infrastructure through auditing, architecture, and documentation.</p>
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best UI/UX Design system service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We don't just deliver static designs; we build living ecosystems that grow with your company, saving you thousands in technical and design debt.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto" aria-label="Get started with our design systems">
                                     <button className=" bg-[#F7A400] text-black border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 hover:text-white active:scale-95 group">
                                        Get Started
                                    </button>
                              </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Scalable Design System Infrastructure Illustration" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className="py-12 md:py-20   relative z-10 overflow-hidden ">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Design System Expertise for Global Brands</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert UI/UX design system services for diverse industries to maintain visual consistency. We build scalable design infrastructure and modular libraries that ensure seamless workflows and high-performance digital products across all your business platforms.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
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

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does a custom Design System benefit my business scale?",
            answer: "A custom Design System acts as a single source of truth. It ensures visual consistency across multiple platforms, reduces design debt, and allows your team to ship new features 50% faster by using pre-built, production-ready components."
        },
        {
            question: "Do you integrate the design system with React or Tailwind?",
            answer: "Yes, we specialize in bridging the gap between design and code. We deliver synced Figma UI kits and reusable React/Tailwind component libraries, ensuring a pixel-perfect 1:1 match between the design and the final live product."
        },
        {
            question: "What is Atomic Design and why do you use it?",
            answer: "Atomic Design is a methodology for creating design systems by breaking interfaces down into fundamental building blocks (atoms). This modular approach makes your UI extremely scalable, easier to maintain, and highly consistent as your product grows."
        },
        {
            question: "Can you help document our existing design patterns?",
            answer: "Absolutely. We provide 'Living Documentation' that includes technical guidelines, accessibility standards (WCAG), and design tokens. This ensures that any new designer or developer can easily understand and use the system without friction."
        },
        {
            question: "How long does it take to build a full enterprise design system?",
            answer: "A comprehensive Design System typically takes 4 to 8 weeks. This timeline includes a full UI audit, foundation setup (colors, typography), building the atomic component library, and final developer handoff documentation."
        }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins -mt-10 md:-mt-16">
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

export default DesignSystem;