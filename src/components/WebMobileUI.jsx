import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/Premium Web and Mobile UI Design Portfolio - Campaignsquat Ltd (1) .webp';
import responsiveIcon from '../assets/images/research.png';
import mobileIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import adaptiveIcon from '../assets/images/3d-modeling.png'; 
import webDevImg from "../assets/images/High-Performance Responsive Web Architecture and UI Design Showcase.webp";
import mobileDevImg from "../assets/images/Intuitive Native-Feel Mobile User Interface and UX Research.webp";
import interactionImg from "../assets/images/Purposeful UI Micro-Interactions and High-Fidelity Interactive Prototyping.webp";
import performanceImg from "../assets/images/Core Web Vitals Optimized UI Assets and Scalable Vector Graphics Design.webp";
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

const WebMobileUI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  { 
    title: "Responsive Interface UI", 
    desc: "We build highly responsive interfaces that adapt perfectly to all screen resolutions ensuring a consistent brand experience. Our focus on fluid layouts and adaptive grids allows your business to capture users on any mobile or desktop device world.", 
    img: webIcon, 
    alt: "Responsive Interface UI Design for multi-device compatibility" 
  },
  { 
    title: "Modern Visual Hierarchy", 
    desc: "Our experts utilize a strict visual hierarchy to guide users through the most critical conversion paths efficiently. We balance color theory and typography to make sure your core brand message is delivered with absolute clarity and global impact.", 
    img: mobileIcon, 
    alt: "Modern Visual Hierarchy and Brand Message Delivery" 
  },
  { 
    title: "Custom UI Components", 
    desc: "Designing unique and reusable UI components that streamline the development phase and maintain platform consistency. Our team creates bespoke icons and buttons tailored to your specific brand identity to ensure a truly distinct digital presence.", 
    img: responsiveIcon, 
    alt: "Custom Reusable UI Components and Bespoke Icon Design" 
  },
  { 
    title: "High-Fidelity Mockups", 
    desc: "We deliver high-fidelity mockups that provide a realistic view of the final product before the coding process begins. This step ensures that every interactive element is polished and optimized for the highest performance in today’s mobile market.", 
    img: adaptiveIcon, 
    alt: "High-Fidelity Product Mockups for Mobile and Web Performance" 
  }
];

    const featureData = [
  {
    title: ["Fast Responsive Web Systems That Convert"],
    desc: "In a digital-first economy, your web interface is your primary brand touchpoint. We engineer responsive ecosystems that prioritize accessibility and lightning-fast loading speeds across all platforms. By balancing heavy functional requirements with clean aesthetics, Campaignsquat Ltd. ensures your story is told consistently across every browser. Our focus on WCAG standards helps in reducing bounce rates while maximizing cross-device conversions today.",
    img: webDevImg,
    reverse: false,
    alt: "High-Performance Responsive Web Architecture and UI Design Showcase"
  },
  {
    title: ["Native Style Mobile UI for High Retention"],
    desc: "We specialize in designing mobile UIs that leverage native gestures and OS-specific patterns, drastically reducing the user learning curve. From thumb-friendly navigation to haptic-ready interactions, our design philosophy focuses on ergonomics. Our high-fidelity prototypes bridge the gap between human touch and digital response, ensuring a frictionless and immersive mobile journey that aligns perfectly with modern professional app standards.",
    img: mobileDevImg,
    reverse: true,
    alt: "Intuitive Native-Feel Mobile User Interface and UX Research"
  },
  {
    title: ["Micro-Interactions Built for Engagement"],
    desc: "The difference between a good UI and a great UI lies in subtle details. We use purposeful micro-animations to provide instant feedback and guide the user’s eye strategically. These interactive elements explain the logic of the interface, significantly increasing dwell time and user engagement. We deliver interactive prototypes that allow you to feel the product flow before a single line of code is written, ensuring a high-performance result.",
    img: interactionImg,
    reverse: false,
    alt: "Purposeful UI Micro-Interactions and High-Fidelity Interactive Prototyping"
  },
  {
    title: ["Asset Engineering for Speed & Web Vitals"],
    desc: "A beautiful interface must be lightning-fast. We prioritize performance from the first wireframe, optimizing visual assets and building scalable SVG-based icons to keep your interface snappy. Our design process ensures high-resolution visuals do not compromise speed, helping your site score higher on Core Web Vitals. We maintain world-class aesthetic standards while ensuring your platform remains technically superior and professional always.",
    img: performanceImg,
    reverse: true,
    alt: "Core Web Vitals Optimized UI Assets and Scalable Vector Graphics Design"
  }
];

    const processSteps = [
    { 
        // Step 1: Deep User Research
        title: "Deep User Research", 
        description: "Mapping site architecture and user journeys to align the UI with actual user needs and business KPIs.", 
        image: discoveryImg, 
        alt: "Deep User Research and UX Discovery Process for Web and Mobile" 
    },
    { 
        // Step 2: High-Fidelity Design
        title: "High-Fidelity Design", 
        description: "Creating pixel-perfect interface screens using industry-standard Figma workflows and brand visuals.", 
        image: designImg, 
        alt: "High-Fidelity Pixel-Perfect UI Design using Figma Workflows" 
    },
    { 
        // Step 3: Interactive Prototype
        title: "Interactive Prototype", 
        description: "Building clickable flows to test the look, feel, and usability of the application in real-time.", 
        image: iterationImg, 
        alt: "Clickable Interactive Prototyping for Real-time Usability Testing" 
    },
    { 
        // Step 4: Technical Asset Sync
        title: "Technical Asset Sync", 
        description: "Providing developers with organized design files and CSS specifications for a flawless, bug-free launch.", 
        image: handoffImg, 
        alt: "Technical Asset Sync and Organized Developer Handoff Documentation" 
    }
];

    const points = ["Pixel-Perfect Cross-Platform Consistency", "Mobile-First Design Methodology", "High-Fidelity Visual Prototypes", "Optimized for Core Web Vitals", "Full Browser & OS Compatibility"];

    const industryData = [
        { title: "FinTech App UI", desc: "We design high-trust web and mobile banking interfaces that simplify complex financial data through secure and intuitive user-centric design.", img: img1, alt: "FinTech Mobile App UI Design Portfolio" },
        { title: "E-comm Platforms", desc: " Our experts build high-converting e-commerce shopping experiences designed to maximize sales, reduce friction, and drive customer loyalty.", img: img2, alt: "E-commerce Web and Mobile Interface Design" },
        { title: "Health & Wellness", desc: " We create accessible, human-centric designs for healthcare applications that prioritize patient care, data clarity, and secure medical workflows.", img: img3, alt: "Healthcare and Wellness UI Design Solutions" },
        { title: "LMS Portals", desc: "Our team masters digital learning by building interactive and easy-to-navigate educational platforms for modern global students and teachers.", img: img4, alt: "Learning Management System (LMS) Portal UI Design" },
        { title: "SaaS Dashboards", desc: " We simplify complex B2B enterprise workflows with powerful, scalable, and user-friendly dashboard designs built for high-performance data management.", img: img5, alt: "SaaS Dashboard and Data Visualization UI Design" },
        { title: "Real Estate Web", desc: " We craft visually-driven web platforms for effortless property discovery, featuring immersive virtual tours and strategic lead generation tools.", img: img6, alt: "Real Estate Website UI Design and Property Listing Interface" },
        { title: "Travel & Booking", desc: " Our designers build delightful booking experiences and exploration tools that turn global travelers into recurring business assets on any device.", img: img7, alt: "Travel and Booking Application UI Design" },
        { title: "Delivery Mobile UI", desc: "We optimize delivery speed and convenience through frictionless mobile ordering interfaces and real-time tracking for complex logistics networks.", img: img8, alt: "Food and Logistics Delivery Mobile App UI Design" },
    ];

    // FAQ Content for Schema
    const faqs = [
        { question: "How long does a typical UI design project take?", answer: "Timelines vary by complexity, but a standard MVP UI design usually spans 4–6 weeks from research to final handoff." },
        { question: "Will I own the source files and intellectual property?", answer: "Absolutely. Campaignsquat Ltd. provides 100% ownership of all Figma files, assets, and design systems upon project completion." },
        { question: "How do you handle revisions if the design isn't quite right?", answer: "We include iterative feedback loops in our process, ensuring we align on wireframes before moving to high-fidelity visuals to minimize friction." },
        { question: "Can your designs scale as my product grows?", answer: "Yes. We build using 'Atomic Design' principles, creating scalable UI kits that allow your internal team to add new features effortlessly." },
        { question: "How do you ensure the design is easy for developers to build?", answer: "We use Figma’s Dev Mode and provide detailed documentation, including spacing, typography scales, and interaction states, to ensure zero-loss implementation." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Web & Mobile UI Design Services",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Campaignsquat Ltd"
        },
        "description": "Elevate your digital product with Campaignsquat Ltd. We build high-converting, responsive interfaces and native mobile apps with pixel-perfect precision.",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "UI Design Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Web Design" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Native Mobile UI Design" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <HelmetProvider>
            <main className="overflow-hidden font-poppins bg-[#02050a]">
                <Helmet>
                    <title>Custom Web & Mobile UI Design Services | Campaignsquat Ltd</title>
                    <meta name="description" content="Elevate your digital product with Campaignsquat Ltd. We build high-converting, responsive interfaces and native mobile apps with pixel-perfect precision." />
                    <link rel="canonical" href={window.location.href} />
                    <meta property="og:title" content="Custom Web & Mobile UI Design Services | Campaignsquat Ltd" />
                    <meta property="og:description" content="Elevate your digital product with Campaignsquat Ltd. We build high-converting, responsive interfaces and native mobile apps." />
                    <meta property="og:type" content="website" />
                    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                </Helmet>

                {/* 1. Hero Section */}
                <section className="relative w-full flex items-center mt-4 md:mt-20  overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 pt-2 md:pt-10 relative z-10 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                                <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] ">
                                   Custom Web & Mobile UI Design Services for Global Digital Brands
                                </h1>
                                <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                   Eliminate friction and drive user retention with high-performance, pixel-perfect interfaces. Campaignsquat Ltd. blends aesthetic mastery with technical precision to build scalable digital products. Our User-centric design ensures your brand stands out with a Mobile-first experience
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                   <Link to="/home/contact" className="w-full sm:w-auto">
                                     <button aria-label="Start Your Transformation" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Start Your Transformation
                                      </button>
                                </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                                <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                                <img 
                                    src={heroImage} 
                                    alt="Premium Web and Mobile UI Design Portfolio - Campaignsquat Ltd" 
                                    loading="eager" 
                                    fetchpriority="high"
                                    className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full overflow-hidden pt-20 md:pt-40 ">
                    <BrandSlider />
                </section>

                {/* 2. Expertise Section */}
                <section className="bg-[#0A0A0A] py-12 md:py-20">
    <div className="max-w-[1445px] mx-auto px-4 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20  mx-auto">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Web & Mobile UI Design Expertise for Growth</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose. </p>
        </div>

        {/* বড় স্ক্রিনে ২টা কার্ড দেখানোর জন্য grid-cols-2 ব্যবহার করা হয়েছে। 
           এটি আপনার max-w-[1445px] এর ভেতর থেকে ২ পাশে প্যাডিং ছেড়ে দিয়ে বাকি জায়গা সমান ২ ভাগে ভাগ করে নেবে।
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                   
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} />
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
                <section className="py-20 md:py-32">
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full py-12 md:py-20">
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
                <section className="w-full bg-[#02050A] py-12 md:py-20">
                    <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  w-full">
                        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Web & Mobile UI Design Process</h2>
                            <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">We follow a data-driven design framework to ensure every pixel serves a business objective.</p>
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
                <section className="py-12 md:py-20 lg:py-40 relative z-[1]">
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                            <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Web & Mobile UI Design service provider?</h2>
                                <p className="text-white text-[18px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We specialize in creating cohesive design languages that scale across web and mobile platforms without losing brand integrity.</p>
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
                                   <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                      <button aria-label="Book a Free Consultation" className=" bg-[#F7A400]  text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px]  px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 active:scale-95 group">
                                            Book a Free Consultation
                                      </button>
                                      </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                                <div className="relative flex justify-center lg:justify-end">
                                    <img src={sideImg} alt="Pixel-Perfect Web and Mobile Interface Design Showcase by Campaignsquat Ltd" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                    <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Industries Section */}
                <section className="py-12 md:py-20 relative z-10 overflow-hidden">
    {/* CSS Styles for the Running Border Animation */}
    <style>{`
        @keyframes rotate-border { 
            from { transform: rotate(0deg); } 
            to { transform: rotate(360deg); } 
        }
        .border-run-container { 
            position: relative; 
            padding: 2px; 
            overflow: hidden; 
            background: rgba(255, 255, 255, 0.05); 
            border-radius: 7px; 
        }
        .border-run-container:hover .running-border { 
            opacity: 1; 
        }
        .running-border { 
            position: absolute; 
            width: 250%; 
            height: 250%; 
            top: -75%; 
            left: -75%; 
            background: conic-gradient(transparent, transparent, transparent, #F7A400); 
            animation: rotate-border 3s linear infinite; 
            opacity: 0; 
            transition: opacity 0.3s; 
            z-index: 0; 
        }
        .card-content { 
            position: relative; 
            background: #0a0a0a; 
            border-radius: 5px; 
            z-index: 1; 
            height: 100%; 
        }
    `}</style>

    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
                Expert Web & Mobile UI/UX Design Solutions for Global Industries
            </h2>
            <p className="text-white text-[16px] md:text-[20px] lg:text-[20px] font-light">
                Build high-performance digital products with Campaignsquat Ltd. We deliver expert web and mobile UI/UX design solutions using custom frameworks that ensure pixel-perfect results and seamless user journeys. Our strategic approach transforms complex ideas into scalable reality.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {industryData.map((item, index) => (
                <div key={index} className="border-run-container group">
                    {/* Animated Border Element */}
                    <div className="running-border"></div>
                    
                    {/* Main Card Content */}
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

                <Questions faqs={faqs} />
            </main>
        </HelmetProvider>
    );
};

const Questions = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20 overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Common Questions About <span className="">UI Design</span>
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Quick answers to your most frequent inquiries about our web and mobile interface services.
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

export default WebMobileUI;