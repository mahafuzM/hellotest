import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Technical SEO Integration

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/High-impact UI UX design excellence and user satisfaction - Campaignsquat (2).webp';
import mobileIcon from '../assets/images/research.png';
import gestureIcon from '../assets/images/ux-design (1).png';
import darkmodeIcon from '../assets/images/web-design.png';
import crossPlatformIcon from '../assets/images/3d-modeling.png'; 
import mobileUxImg from "../assets/images/App Wireframing and Prototyping.webp";
import gestureImg from "../assets/images/Comprehensive Mobile UX Audit.webp";
import darkLightImg from "../assets/images/Intelligent UIUX Design System.webp";
import platformImg from "../assets/images/Visual Motion Design Interface.webp";
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

const AppInterface = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Service Data for Schema
    const serviceDescription = "Elevate your brand with high-fidelity mobile experiences that merge pixel-perfect aesthetics with human-centric ergonomics. From startups to enterprises, Campaignsquat Ltd. builds apps people love to use daily. Our User-centric design ensures your product is scalable and intuitive.";

    // FAQ Data for Schema and Component
    const faqs = [
        {
            question: "What is the typical timeline for a complete mobile UI/UX redesign?",
            answer: "Most projects range from 4 to 8 weeks, depending on the number of unique screens and complexity of user flows. We prioritize a balanced pace to ensure thorough usability testing and pixel-perfect design quality."
        },
        {
            question: "Do you design specifically for both iOS and Android platforms?",
            answer: "Yes, we design for both platforms. We strictly follow Apple's Human Interface Guidelines (HIG) for iOS and Google's Material Design for Android to ensure your app feels native, intuitive, and high-performing on any device."
        },
        {
            question: "Can you provide interactive prototypes before development?",
            answer: "Absolutely. We provide high-fidelity interactive prototypes in Figma, allowing you to experience the app’s flow, transitions, and gestures before a single line of code is written. This reduces development rework and costs."
        },
        {
            question: "How do you handle the handoff to our internal development team?",
            answer: "We use industry-standard tools like Figma Dev Mode. We provide clean, organized design files with documented color tokens, typography systems, and animation specs to ensure a 100% design-to-code fidelity build."
        },
        {
            question: "Is post-launch design support available for new feature rollouts?",
            answer: "Yes, Campaignsquat Ltd. offers ongoing design-as-a-service packages. This ensures your app evolves alongside your user base, stays updated with the latest OS trends, and continues to grow its market share."
        }
    ];

    // Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Custom Mobile App Interface Design",
                "serviceType": "UI/UX Design",
                "provider": {
                    "@type": "Organization",
                    "name": "Campaignsquat Ltd"
                },
                "description": serviceDescription,
                "areaServed": "Worldwide"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

   const expertiseData = [
  {
    title: "Native Platform Design",
    desc: "We craft interfaces that respect the native patterns of iOS and Android to provide a familiar and intuitive feel. Our team ensures that your app follows platform-specific guidelines while maintaining a unique brand identity for global success.",
    img: crossPlatformIcon,
    alt: "Native Platform Design for iOS and Android"
  },
  {
    title: "Gesture Based Controls",
    desc: "Designing smooth and natural gesture navigation that allows users to move through your app effortlessly. We focus on ergonomic touch points and fluid motion to make sure the interface feels responsive and professional on every modern smartphone.",
    img: gestureIcon,
    alt: "Gesture Based Controls and Natural Navigation"
  },
  {
    title: "High User Retention UI",
    desc: "Focusing on aesthetic and functional balance to create interfaces that keep users coming back to your app daily. We utilize behavioral psychology to design layouts that drive high engagement levels and minimize friction in the user journey path.",
    img: mobileIcon,
    alt: "High User Retention UI and Engagement Design"
  },
  {
    title: "Pixel Perfect Assets",
    desc: "Delivering high-definition icons and visual assets that look sharp on the most advanced high-resolution screens. Our experts ensure that every button and layout component is polished and ready for a seamless transition to the development phase.",
    img: darkmodeIcon,
    alt: "Pixel Perfect Assets for High Resolution Screens"
  }
];

   const featureData = [
  {
    title: ["Deep UX Audits for Enhanced User Retention"],
    desc: "We do not just guess; we validate. Our comprehensive UX audits identify friction points in your current user journey. By focusing on one-handed usability and minimizing input effort, Campaignsquat Ltd. ensures your app is a joy to use, significantly reducing churn rates and increasing daily active usage through science-backed behavioral design. We transform complex mobile workflows into simple, professional paths that keep your users engaged daily.",
    img: mobileUxImg,
    reverse: false,
    alt: "Comprehensive Mobile UX Audit"
  },
  {
    title: ["Intuitive Gestures and Fluid Motion Logic"],
    desc: "Static buttons are a thing of the past. Our app interfaces utilize fluid motion and haptic-responsive gestures that provide instant psychological feedback. Whether it is a smooth swipe-to-delete or a subtle bounce at the end of a scroll, these micro-details create the premium, high-end feel that distinguishes your digital product. We focus on interaction design that feels natural and professional, ensuring a high-performance mobile experience always.",
    img: gestureImg,
    reverse: true,
    alt: "Visual Motion Design Interface"
  },
  {
    title: ["Visual Depth and Intelligent Dark Mode UI"],
    desc: "Lighting conditions change, and so should your digital product. We design interfaces with native dark mode support, ensuring perfect contrast and readability at any hour. Through the strategic use of shadows, blurs, and layering, we create a visual depth that makes the interface easier to navigate. Campaignsquat Ltd. prioritizes eye comfort and modern aesthetics to ensure your professional app remains accessible and stylish in any mobile environment.",
    img: darkLightImg,
    reverse: false,
    alt: "Intelligent UI/UX Design System"
  },
  {
    title: ["Unified Design for iOS and Android Growth"],
    desc: "Building for multiple platforms should not mean compromising on quality or brand identity. We create unified design languages that look stunning on both platforms while respecting specific OS guidelines. This ensures your users feel at home regardless of their device, while simplifying your development process and accelerating time-to-market. We build professional, scalable interfaces that maintain your core brand essence across the global market today.",
    img: platformImg,
    reverse: true,
    alt: "App Wireframing and Prototyping"
  }
];

    const processSteps = [
    { 
        // Step 1: User & Data Mapping
        title: "User & Data Mapping", 
        description: "Mapping out mobile usage patterns and environment-specific needs to solve real-world user problems today.", 
        image: discoveryImg, 
        alt: "App user persona and environment-specific mobile data mapping" 
    },
    { 
        // Step 2: Low-Fidelity Mapping
        title: "Low-Fidelity Mapping", 
        description: "Designing logical wireframes focused on navigation efficiency and gesture-based movement for mobile users.", 
        image: designImg, 
        alt: "Low-fidelity wireframing and gesture-based mobile navigation design" 
    },
    { 
        // Step 3: High-Fidelity Build
        title: "High-Fidelity Build", 
        description: "Applying brand-aligned visuals with touch-friendly elements for a premium and high-end mobile look and feel.", 
        image: iterationImg, 
        alt: "High-fidelity mobile UI design with touch-friendly premium elements" 
    },
    { 
        // Step 4: Technical Dev Handoff
        title: "Technical Dev Handoff", 
        description: "Delivering ready-to-code mobile assets and animation specs to ensure 100% design-to-code fidelity always.", 
        image: handoffImg, 
        alt: "Technical mobile app handoff with animation specs for developers" 
    }
];

    const points = [
        "Thumb-Friendly Navigation", 
        "Instant Haptic Feedback", 
        "Adaptive UI Components", 
        "Dynamic Dark Mode Assets", 
        "Optimized Asset Delivery"
    ];

    const industryData = [
        { title: "FinTech Apps", desc: "We design secure and simplified mobile banking experiences that focus on high-trust financial transactions and intuitive asset management.", img: img1, alt: "FinTech App Interface" },
        { title: "Social Platforms", desc: "Our experts build engaging feed layouts and seamless story interactions designed to maximize user retention and social connectivity.", img: img2, alt: "Social Media Platform Design" },
        { title: "Health Trackers", desc: "We create accessible interfaces for visualizing vitals and activity through mobile-first charts, prioritizing patient data clarity and ease.", img: img3, alt: "Healthcare App UI" },
        { title: "E-comm Mobile", desc: " Our team develops streamlined mobile shopping journeys and one-tap payment systems to ensure a frictionless retail experience on any screen.", img: img4, alt: "Mobile E-commerce Interface" },
        { title: "Travel Apps", desc: " We craft offline-ready navigation and quick booking flows designed for global travelers to ensure a reliable and fast experience on the go.", img: img5, alt: "Travel and Booking App" },
        { title: "Delivery Apps", desc: "Our designers build real-time tracking interfaces and intuitive order management tools to optimize the delivery experience for logistics.", img: img6, alt: "Delivery Tracking UI" },
        { title: "Fitness Apps", desc: " We create interactive workout guides and high-energy visuals designed to keep users motivated and engaged with their health goals.", img: img7, alt: "Fitness and Workout App" },
        { title: "Gaming UI", desc: "Our team develops immersive and responsive controls for mobile gamers, focusing on high-performance visual feedback and seamless navigation.", img: img8, alt: "Mobile Gaming Interface" },
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom Mobile App Interface Design | Campaignsquat Ltd</title>
                <meta name="description" content="Elevate your mobile product with Campaignsquat Ltd. Expert UI/UX design, thumb-driven layouts, and native iOS/Android interfaces. Book your audit today." />
                <link rel="canonical" href="https://campaignsquat.com/mobile-app-design" />
                <meta property="og:title" content="Custom Mobile App Interface Design | Campaignsquat Ltd" />
                <meta property="og:description" content="Expert UI/UX design for market leaders. High-fidelity mobile experiences by Campaignsquat Ltd." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-centerpt-6   mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[36px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                                Custom Mobile App Interface Design for Global Market Leaders 
                            </h1>
                            <p className="text-white text-[16px] md:text-[19px]  mx-auto lg:mx-0 leading-relaxed ">
                                {serviceDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Start Your Project Today" className="w-full sm:w-auto bg-[#F7A400] border-[#f7a400] border-2 text-black font-semibold py-3 px-10 text-[14px] md:text-[16px] rounded-[5px] transition-all duration-300 transform hover:bg-transparent hover:text-white active:scale-95 group">
                                        Start Your Project Today
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] blur-[80px] rounded-full"></div>
                            {/* LCP Optimization */}
                            <img 
                                src={heroImage} 
                                alt="Premium mobile app interface design showcase by Campaignsquat Ltd." 
                                className="relative z-10 w-full h-auto max-w-[550px] transition-transform duration-700 hover:scale-[1.02]" 
                                loading="eager"
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                </div>
            </section>

             <section className="w-full overflow-hidden pt-20 md:pt-30 py-12 md:py-20 ">
                <BrandSlider />
            </section>

            {/* 2. Expertise Section */}
           <section className="bg-[#0A0A0A] py-12 md:py-20  ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Strategic UI/UX Architecture for <span>Modern Mobile Ecosystems</span></h2>
            <p className="text-white text-[20px] md:text-[22px] mx-auto leading-relaxed font-medium">We engineer mobile interfaces that harmonize technical performance with intuitive user behavior to maximize retention.</p>
        </div>

        {/* গ্রিড লেআউট: ২-কলামে আপডেট করা হয়েছে (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={item.alt} 
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" 
                            loading="lazy" 
                            style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} 
                        />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                    {/* গ্র্যাডিয়েন্ট গ্লো ইফেক্ট */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* 3. Features Section */}
            <section className="py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
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
                                        <img src={item.img} alt={item.alt} className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" loading="lazy" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our App Interface UI Design Process</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light"> A disciplined, four-stage workflow designed to take your vision to a market-ready powerhouse.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img src={step.image} alt={step.alt} className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" loading="lazy" />
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
            <section className="py-12 md:py-20  relative z-[1] ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-6">
                                Why is Campaignsquat Ltd the best App interface UI/UX Design system service provider?
                            </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-8 max-w-[580px]">
                                We specialize in creating app interfaces that aren't just tools, but daily companions for your users. Quality design is the foundation of high user retention.
                            </p>

                            <div className="flex flex-col gap-3 md:gap-4 mb-10">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-5 h-5 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium leading-tight">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                    <button aria-label="Get Started with Campaignsquat Ltd" className="bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-6 md:px-10 py-2 md:py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img 
                                    src={sideImg} 
                                    alt="Mobile App Interface Design Showcase - User Centric Design" 
                                    className="w-full h-auto max-h-[600px] lg:max-h-[850px] object-contain  shadow-2xl" 
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className="py-12 md:py-20 relative z-10 overflow-hidden ">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="text-center max-w-6xl mx-auto mb-14 md:mb-22">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific App Interface Design Expertise for Results</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert custom app interface design for diverse industries to maximize user retention. We build high-performance, mobile-first layouts that ensure seamless user journeys and drive measurable business growth across all global market sectors and devices.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light opacity-90">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
            <Questions faqs={faqs} />
        </main>
    );
};

// Phase 2: Proactive FAQ (The Conversion Engine)
const Questions = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

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

export default AppInterface;