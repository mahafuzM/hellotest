import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // SEO Management

// ইমেজ ইমপোর্টসমূহ
import heroImage from '../assets/images/High-performance Enterprise SaaS Dashboard UI Design.webp';
import dataIcon from '../assets/images/research.png';
import chartIcon from '../assets/images/ux-design (1).png';
import layoutIcon from '../assets/images/web-design.png';
import settingsIcon from '../assets/images/3d-modeling.png'; 
import analyticsImg from "../assets/images/SaaS analytics dashboard interface.webp";
import workflowImg from "../assets/images/User-centric navigation design flow.webp";
import userMgmtImg from "../assets/images/Modular SaaS design system components.webp";
import reportsImg from "../assets/images/Widget-based modular UI layout.webp";
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

const SaaSDashboard = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const expertiseData = [
  {
    title: "Clean Data Visuals",
    desc: "We transform complex data sets into intuitive charts and graphs that allow users to make faster decisions through visual clarity. Our design focus remains on reducing cognitive load while displaying critical business metrics in a clean format.",
    img: chartIcon,
    alt: "Clean Data Visualization and Business Metrics Dashboard"
  },
  {
    title: "Intuitive User Control",
    desc: "Crafting seamless navigation systems and sidebar controls that simplify the management of complex SaaS operations and workflows. We ensure that every dashboard feature is easily accessible to help your clients maximize their daily productivity.",
    img: layoutIcon,
    alt: "Intuitive SaaS Navigation and User Control Systems"
  },
  {
    title: "Custom Widget Systems",
    desc: "Designing modular and customizable widget layouts that allow users to personalize their own dashboard view based on specific needs. This flexibility ensures a high-engagement experience that scales perfectly with your growing business platform.",
    img: dataIcon,
    alt: "Modular Custom Widget Systems for SaaS Personalization"
  },
  {
    title: "High-Performance Speed",
    desc: "Our experts build lightweight and optimized interface designs that ensure rapid loading times even when handling massive amounts of data. We balance visual aesthetics with technical stability to provide a smooth and professional user journey.",
    img: settingsIcon,
    alt: "High-Performance UI Design for Fast Loading Dashboards"
  }
];
   const featureData = [
  {
    title: ["Visualizing Complex Data with Precision"],
    desc: "Don’t let your users drown in data. We specialize in distilling massive, multi-layered datasets into high-impact visual stories. By prioritizing visual hierarchy and at-a-glance readability, our designs ensure your customers can make critical business decisions in seconds. Campaignsquat Ltd. focuses on data storytelling to increase the perceived value of your platform, effectively reducing technical support tickets and improving user clarity today.",
    img: analyticsImg,
    reverse: false,
    alt: "SaaS analytics dashboard interface with clear visual hierarchy"
  },
  {
    title: ["User-Centric Navigation for Smooth Flow"],
    desc: "Efficiency is the heartbeat of every successful SaaS platform. We design task-oriented interfaces that guide users through daily operations with zero friction. From smart filtering to automated bulk actions, every element is strategically placed to reduce clicks and maximize productivity. Our goal is to ensure your software feels like a powerful tool rather than a chore, maintaining a professional edge that drives long-term user engagement always.",
    img: workflowImg,
    reverse: true,
    alt: "User-centric navigation design flow for SaaS productivity"
  },
  {
    title: ["Scalable Design Systems for Future Growth"],
    desc: "Your UI should be an asset, not a bottleneck. We build robust, component-based design systems that handle role-based access and complex permissions seamlessly. This modular approach ensures your dashboard remains consistent as you scale from hundreds to millions of users. Campaignsquat Ltd. enables rapid feature deployment without compromising the integrity of the user experience, ensuring your professional SaaS product is built to last forever.",
    img: userMgmtImg,
    reverse: false,
    alt: "Modular SaaS design system components for role-based access"
  },
  {
    title: ["Modular Customization via Widget-Based UI"],
    desc: "Empower your power users with flexible, widget-based layouts. We design modular dashboard components that allow users to personalize their workspace by rearranging, pinning, or hiding data to fit their unique professional needs. This level of personalization significantly boosts user satisfaction and platform loyalty. We focus on creating adaptive interfaces that grow with your users, ensuring your brand remains a leader in the global SaaS market.",
    img: reportsImg,
    reverse: true,
    alt: "Widget-based modular UI layout for personalized SaaS dashboards"
  }
];

    const processSteps = [
    { 
        // Step 1: Audit & Discovery
        title: "Audit & Discovery", 
        description: "Analyzing user workflows and data touchpoints to eliminate friction and align the UI with your core KPIs.", 
        image: discoveryImg, 
        alt: "UX audit and data touchpoint discovery for SaaS dashboard optimization" 
    },
    { 
        // Step 2: Data Architecture
        title: "Data Architecture", 
        description: "Structuring complex information hierarchies for seamless navigation and multi-tenant dashboard layouts.", 
        image: designImg, 
        alt: "SaaS data architecture and multi-tenant information hierarchy mapping" 
    },
    { 
        // Step 3: High-Fidelity Design
        title: "High-Fidelity Design", 
        description: "Creating pixel-perfect UI with specialized data visualization and custom-engineered dashboard components.", 
        image: iterationImg, 
        alt: "High-fidelity UI design with specialized data visualization for dashboards" 
    },
    { 
        // Step 4: Dev-Ready Handoff
        title: "Dev-Ready Handoff", 
        description: "Delivering production-ready UI kits and documentation for rapid and error-free developer implementation.", 
        image: handoffImg, 
        alt: "SaaS UI kit and documentation handoff for rapid developer implementation" 
    }
];

    const points = ["Conversion-focused Data Visualization", "Drastic Reduction in User Cognitive Load", "Scalable Enterprise-Grade Design Systems", "Pixel-Perfect, Zero-Friction Developer Handoff", "Adaptive & Mobile-Responsive SaaS Layouts"];

    const industryData = [
        { title: "CRM Dashboards", desc: "We design advanced sales pipelines and lead conversion tracking interfaces for seamless customer relationship management and team performance.", img: img1, alt: "CRM dashboard UI design" },
        { title: "FinTech Panels", desc: "Our experts build secure, real-time transaction monitoring and complex financial reporting interfaces with absolute data precision and clarity.", img: img2, alt: "FinTech dashboard interface" },
        { title: "HR Tech & Portals", desc: "We create centralized employee management systems and automated recruitment workflows designed for modern, scalable human resource platforms.", img: img3, alt: "HR management portal design" },
        { title: "Marketing Analytics", desc: " Our team develops high-performance data visualization for multi-channel campaign tracking and real-time ROI performance metrics for global brands", img: img4, alt: "Marketing analytics performance dashboard" },
        { title: "Project Management", desc: " We build interactive Gantt charts and agile task tracking interfaces to boost team productivity and collaboration across complex enterprise projects.", img: img5, alt: "Project management tool UI" },
        { title: "Health Analytics", desc: " Our designers craft HIPAA-compliant patient data visualization and clinical reporting dashboards for modern healthcare providers and research labs.", img: img6, alt: "Healthcare data analytics dashboard" },
        { title: "E-comm Admin Panels", desc: " We optimize merchant dashboards for inventory control, order processing, and sales trend analysis through frictionless web and mobile interfaces.", img: img7, alt: "E-commerce admin panel interface" },
        { title: "DevOps Metrics", desc: "We build centralized UI management systems for massive screen counts to ensure strict brand consistency and scalable growth for global brands.", img: img8, alt: "DevOps infrastructure monitoring dashboard" }
    ];

    // Schema Data Preparation
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SaaS Dashboard UI/UX Design Services",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Transform complex data into intuitive interfaces. Expert SaaS dashboard design services to improve user retention and scalability.",
        "areaServed": "Worldwide"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "What is the typical timeline for a custom SaaS dashboard design?", "acceptedAnswer": { "@type": "Answer", "text": "A standard enterprise-grade dashboard design cycle usually takes 4–8 weeks. This timeline depends on the complexity of your data architecture and the number of unique user roles required." } },
            { "@type": "Question", "name": "How do you handle large-scale data visualization in dashboards?", "acceptedAnswer": { "@type": "Answer", "text": "We utilize 'Progressive Disclosure' and 'Visual Hierarchy' principles. Our strategy focuses on high-level KPIs first, providing seamless drill-down capabilities for granular data." } },
            { "@type": "Question", "name": "Do you provide developer-ready files for the final handoff?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We deliver fully organized Figma files with comprehensive design systems. This includes spacing scales, color tokens, typography, and interactive component states." } },
            { "@type": "Question", "name": "Can you redesign an existing or 'clunky' enterprise dashboard?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We begin with a technical UX Audit to identify friction points and re-engineer the interface to improve aesthetics and functional efficiency." } },
            { "@type": "Question", "name": "Is your dashboard design fully mobile-responsive?", "acceptedAnswer": { "@type": "Answer", "text": "Every dashboard engineered by Campaignsquat Ltd. is built with a 'Mobile-First' or 'Adaptive' mindset for desktop, tablet, or smartphone." } }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a] ">
            <Helmet>
                <title>SaaS Dashboard UI/UX Design Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Transform complex data into intuitive interfaces. Expert SaaS dashboard design services to improve user retention and scalability. Get a free design audit today!" />
                <link rel="canonical" href="https://yourdomain.com/saas-dashboard-design" />
                <meta property="og:title" content="SaaS Dashboard UI/UX Design Services | Campaignsquat Ltd." />
                <meta property="og:description" content="Expert SaaS dashboard design services to improve user retention and scalability." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center   mt-4 md:mt-20  overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                                Enterprise SaaS Dashboard UI/UX Design for Rapid Growth & Scale
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-light opacity-90">
                                 Eliminate churn and empower users with high-performance dashboard interfaces. Campaignsquat Ltd. blends advanced data visualization with user-centric design to transform complex workflows into intuitive visual stories. Our SaaS Design Services ensure your product is scalable and efficient.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Get a free design audit" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                        Get Your Design Audit
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="High-performance Enterprise SaaS Dashboard UI Design" 
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
            <section className="bg-[#0A0A0A] py-12 md:py-20">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-bold mb-6">
                Precision UI/UX Solutions for Modern SaaS Enterprises
            </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-light">
                We provide specialized design expertise that balances high-level aesthetics with functional data architecture to drive product adoption.
            </p>
        </div>

        {/* Grid layout: lg:grid-cols-2 ব্যবহারে ডেস্কটপে ২ কলামে কার্ড শো করবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img src={item.img} alt={item.alt} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} loading="lazy" />
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
            <section className="py-12 md:py-20">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="flex flex-col gap-24 md:gap-40">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8 tracking-tight">
                                        {item.title.map((line, i) => (
                                            <span key={i} className="block leading-[1.2] mb-1 last:mb-0">
                                                {line}
                                            </span>
                                        ))}
                                    </h2>
                                    <p className="text-white text-[16px] md:text-[19px] leading-relaxed font-light text-left max-w-[580px]">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group rounded-[8px] p-[1px] bg-gradient-to-br from-white/10 to-transparent">
                                        <div className="absolute -inset-4 bg-[#F7A400]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <div className="relative z-10 overflow-hidden rounded-[8px] border border-white/10 shadow-2xl">
                                            <img src={item.img} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-all duration-700 group-hover:scale-[1.05]" loading="lazy" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="w-full bg-[#02050A] py-12 md:py-20" aria-label="Our SaaS Design Process">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 -">
                    <header className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6 leading-tight">
                            Our SaaS Dashboard UI Design Process 
                        </h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light leading-relaxed">
                            A surgical roadmap to move from initial concept to developer-ready files with precision. 
                        </p>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <article key={index} className="flex flex-col items-center text-center group cursor-default">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0 opacity-50"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-2xl">
                                        <img src={step.image} alt={step.alt} className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" loading="lazy" />
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full flex flex-col items-center px-2">
                                    <h3 className="text-white text-[22px] md:text-[24px] lg:text-[26px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-12 md:py-20 lg:py-40 relative z-[1]" aria-labelledby="growth-section-title">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 id="growth-section-title" className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                Why is Campaignsquat Ltd the best SaaS Dashboard UI/UX Design service provider?
                            </h2>
                            <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">
                                We specialize in crafting high-performance SaaS dashboard experiences. 
                                Our designs don't just look professional—they empower your users to manage 
                                complex data effortlessly and achieve business goals faster.
                            </p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group transition-all duration-300">
                                        <div className="w-6 h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center group-hover:bg-[#F7A400]/10">
                                            <Check className="text-[#F7A400] w-4 h-4 md:w-5 md:h-5 stroke-[4px]" />
                                        </div>
                                        <span className="text-white/90 text-[16px] md:text-[18px] font-medium group-hover:text-white transition-colors">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                    <button aria-label="Start your SaaS UI project" className="bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-bold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group shadow-lg shadow-[#F7A400]/20">
                                        Boost Your SaaS UI
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="SaaS Analytics View Interface Design" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl transition-transform duration-700 hover:scale-[1.02]" loading="lazy" />
                                <div className="absolute inset-0 bg-[#F7A400]/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industry SaaS Solutions */}
            <section className="py-12 md:py-20 relative z-10 overflow-hidden" aria-labelledby="industry-solutions-heading">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; height: 100%; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; display: flex; flex-direction: column; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <h2 id="industry-solutions-heading" className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
                            Industry-Specific <span className="">SaaS Solutions</span>
                        </h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light max-w-3xl mx-auto leading-relaxed">
                            We design niche-focused analytics and management panels that solve the unique 
                            data challenges of world-class SaaS enterprises.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {industryData.map((item, index) => (
                            <article key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content">
                                    <div className="w-full aspect-[16/10] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                                    </div>
                                    <div className="p-6 flex flex-col text-left flex-grow">
                                        <h3 className="text-white text-[22px] md:text-[20px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </article>
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
        { question: "What is the typical timeline for a custom SaaS dashboard design?", answer: "A standard enterprise-grade dashboard design cycle usually takes 4–8 weeks. This timeline depends on the complexity of your data architecture and the number of unique user roles required to ensure a high-performance, tailored experience." },
        { question: "How do you handle large-scale data visualization in dashboards?", answer: "We utilize 'Progressive Disclosure' and 'Visual Hierarchy' principles to ensure users aren't overwhelmed. Our strategy focuses on high-level KPIs first, providing seamless drill-down capabilities for granular data without compromising cognitive load." },
        { question: "Do you provide developer-ready files for the final handoff?", answer: "Yes. We deliver fully organized Figma files with comprehensive design systems. This includes spacing scales, color tokens, typography, and interactive component states to ensure a pixel-perfect and seamless transition to your development team." },
        { question: "Can you redesign an existing or 'clunky' enterprise dashboard?", answer: "Absolutely. We begin with a technical UX Audit to identify friction points and performance bottlenecks. We then re-engineer the interface to improve modern aesthetics and functional efficiency while keeping your existing system's core integrity intact." },
        { question: "Is your dashboard design fully mobile-responsive?", answer: "Every dashboard engineered by Campaignsquat Ltd. is built with a 'Mobile-First' or 'Adaptive' mindset. We ensure your users enjoy a premium, high-performance experience whether they are accessing the platform via desktop, tablet, or smartphone." }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20 overflow-hidden font-poppins ">
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
                        <div key={index} className={`border transition-all duration-300 rounded-[5px] md:rounded-[5px] ${openIndex === index ? 'border-[#f7a400] bg-[#0A0A0A]' : 'border-[#02050a] bg-[#0A0A0A] hover:border-[#f7a400]'}`}>
                            <button
                                aria-expanded={openIndex === index}
                                aria-label={`Toggle question: ${faq.question}`}
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
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
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

export default SaaSDashboard;