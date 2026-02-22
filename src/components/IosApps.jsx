import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Added for SEO Metadata

// images inputs
import heroImage from '../assets/images/Premium iOS App Development Showcase.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/High Performance iOS Architecture.webp";
import accessibilityImg from "../assets/images/Apple Human Interface Guidelines Compliance.webp";
import businessImg from "../assets/images/iOS Data Privacy and Security.webp";
import scalableImg from "../assets/images/iCloud and Apple Pay Integration.webp";
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import iterationImg from '../assets/images/web-design.png';
import handoffImg from '../assets/images/deployment.png';
import sideImg from '../assets/images/mobile app.webp';
import img1 from '../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp';
import img2 from '../assets/images/rpvu1v3dzk7wzyresb1u.jpg';
import img3 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img4 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img5 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp';
import img6 from '../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp';
import img7 from '../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png';
import img8 from '../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp';
import BrandSlider from './BrandSlider';

const IosApps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  {
    title: "Swift-Based Framework",
    desc: "We build powerful and high-performance applications using Swift-based architecture for maximum speed and security. Our team ensures that your iOS app is optimized for the latest Apple hardware to provide a professional and stable user experience.",
    img: researchIcon,
    alt: "Swift-Based Framework and iOS Architecture Design"
  },
  {
    title: "Premium Apple UI/UX",
    desc: "Crafting elegant and intuitive interfaces that align with Apple’s strict design aesthetics and usability standards. We prioritize smooth animations and pixel-perfect layouts to ensure your brand stands out in the premium global mobile market.",
    img: uxIcon,
    alt: "Premium Apple UI UX Design and iOS Design Standards"
  },
  {
    title: "App Store Compliance",
    desc: "Ensuring your application meets all official App Store guidelines for a seamless approval and launch process. Our experts focus on technical performance and privacy standards to help your product gain instant trust and high visibility online.",
    img: auditIcon,
    alt: "App Store Compliance and iOS App Launch Optimization"
  },
  {
    title: "Apple Ecosystem Sync",
    desc: "Integrating your custom app across the entire Apple ecosystem including iPhone, iPad, and Apple Watch platforms. We build secure cloud-syncing features to maintain a professional and unified digital journey for all your loyal iOS device users.",
    img: webIcon,
    alt: "Apple Ecosystem Sync and iCloud Data Integration"
  }
];

    const featureData = [
  {
    title: ["Custom iOS App Development with SwiftUI"],
    desc: "We do not just write code; we engineer speed. Campaignsquat Ltd. provides custom iOS app development and SwiftUI development services using Xcode 26 optimization. By hire expert Swift developers for premium iPhone apps, we ensure your application remains responsive with async/await structured concurrency. Our technical precision reduces churn rates while aligning with the high expectations of modern users who demand native iPhone apps with fluid motion.",
    img: uxAuditImg,
    reverse: false,
    alt: "Native iOS development using SwiftUI and Xcode 26 optimization"
  },
  {
    title: ["Premium iOS UI and UX Design Solutions"],
    desc: "Navigating App Store guidelines requires a seasoned hand. Our team lives by Human Interface Guidelines and Liquid Glass design language, ensuring bespoke iOS app development for high-growth startups. We manage TestFlight beta management and App Store Connect submission to ensure faster approvals. Campaignsquat Ltd. ensures your professional interface is intuitive, utilizing WidgetKit and Live Activities to keep your customers engaged from the first tap.",
    img: accessibilityImg,
    reverse: true,
    alt: "Premium iOS UI and UX design following Human Interface Guidelines"
  },
  {
    title: ["Secure iOS Apps with Apple Intelligence"],
    desc: "In an era of data regulations, we offer privacy-first iOS app development for healthcare and fintech. Our developers specialize in secure iOS financial apps with Apple Intelligence integration and on-device Core ML and Vision frameworks. By building a Security by Design framework, Campaignsquat Ltd. protects your brand with App Intents for Siri and Spotlight. We provide professional security hardening that safeguards sensitive user data in every app.",
    img: businessImg,
    reverse: false,
    alt: "Secure iOS apps featuring Apple Intelligence and Core ML integration"
  },
  {
    title: ["Enterprise iOS Solutions and iPadOS Sync"],
    desc: "Unlock the power of the Apple ecosystem with enterprise iOS solutions and scalable iPadOS applications for enterprise workflow automation. We streamline experiences by implementing CloudKit data synchronization and Apple Watch app development. Whether migrating legacy mobile apps to modern SwiftUI architecture or custom iOS 26 feature integration for business, Campaignsquat Ltd. delivers professional, future-ready sync solutions for global market growth.",
    img: scalableImg,
    reverse: true,
    alt: "Enterprise iOS solutions with CloudKit and iPadOS synchronization"
  }
];

    const processSteps = [
    { 
        // Step 1: Strategic Discovery
        title: "Strategic Discovery", 
        description: "Defining technical requirements and user personas to ensure absolute alignment with your business goals.", 
        image: discoveryImg, 
        alt: "Strategic iOS app discovery phase and user persona alignment" 
    },
    { 
        // Step 2: Prototyping and UX
        title: "Prototyping and UX", 
        description: "Crafting high-fidelity wireframes and interactive prototypes to validate user flows before development.", 
        image: designImg, 
        alt: "High-fidelity iOS prototyping and interactive user experience design" 
    },
    { 
        // Step 3: Agile Swift Sprints
        title: "Agile Swift Sprints", 
        description: "Iterative development cycles where we build features with Swift and provide transparent progress updates.", 
        image: iterationImg, 
        alt: "Agile iOS development using Swift with iterative sprint cycles" 
    },
    { 
        // Step 4: Managed Deployment
        title: "Managed Deployment", 
        description: "Managing the entire App Store submission process, including metadata optimization and compliance checks.", 
        image: handoffImg, 
        alt: "Managed App Store submission with metadata and compliance optimization" 
    }
];
   const industryData = [
    { 
        title: "FinTech & Banking", 
        desc: "We build secure banking applications featuring Apple Pay integration and high-end native encryption for elite financial users.", 
        img: img1, 
        alt: "iOS FinTech App Solutions" 
    },
    { 
        title: "Premium E-commerce", 
        desc: "Our experts develop high-performance shopping experiences optimized for high-spending mobile shoppers on the iOS platform.", 
        img: img2, 
        alt: "iPhone E-commerce App" 
    },
    { 
        title: "Health & Fitness", 
        desc: "We create health tracking applications seamlessly integrated with Apple HealthKit and WatchOS for real-time activity monitoring.", 
        img: img3, 
        alt: "iOS HealthKit App Development" 
    },
    { 
        title: "Modern Education", 
        desc: "Our team builds interactive learning platforms with high-quality media support and native Apple Pencil functionality for students.", 
        img: img4, 
        alt: "iOS Educational Platform" 
    },
    { 
        title: "Business SaaS", 
        desc: "We develop powerful business dashboards featuring native iOS performance and interactive widgets for real-time data access.", 
        img: img5, 
        alt: "Business SaaS iOS App" 
    },
    { 
        title: "Real Estate Tech", 
        desc: "Our designers craft property discovery apps using ARKit for immersive 3D home tours and advanced location-based searches.", 
        img: img6, 
        alt: "ARKit Real Estate App" 
    },
    { 
        title: "Hospitality & Travel", 
        desc: "We build delightful travel and booking applications designed specifically for a global premium audience and luxury travelers.", 
        img: img7, 
        alt: "iOS Hospitality Booking App" 
    },
    { 
        title: "Lifestyle & Daily", 
        desc: "Our team develops custom lifestyle apps that integrate seamlessly into the Apple user’s daily routine with intuitive UI.", 
        img: img8, 
        alt: "iOS Lifestyle App" 
    },
];

    const points = ["Swift & SwiftUI Expertise", "Human Interface Compliance", "iCloud & Core Data Sync", "FaceID/TouchID Integration", "App Store Optimization (ASO)"];

    // SEO Data for Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom iOS App Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Expert custom iOS app development using Swift and SwiftUI. We deliver high-performance, secure, and scalable mobile solutions tailored for high-growth brands.",
        "serviceType": "Mobile App Development",
        "areaServed": "Worldwide"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "How long does it typically take to develop a custom iOS app?", "acceptedAnswer": { "@type": "Answer", "text": "Most MVP versions take 12–16 weeks. Complexity and third-party integrations dictate the final timeline." } },
            { "@type": "Question", "name": "Will you handle the App Store submission and approval process?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manage the entire submission lifecycle, ensuring your app meets all Apple Guidelines (HIG and Technical)." } },
            { "@type": "Question", "name": "Can you help scale the app after the initial launch?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our Scalable Architecture approach ensures that your codebase can handle rapid user growth without requiring a full rebuild." } },
            { "@type": "Question", "name": "How many revisions are included in the UI/UX design phase?", "acceptedAnswer": { "@type": "Answer", "text": "We operate on a collaborative feedback loop with two major revision rounds included after the initial concept." } },
            { "@type": "Question", "name": "Do you offer post-launch maintenance and support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide tiered support packages for OS updates, bug fixes, and performance monitoring." } }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom iOS App Development | Swift-Powered Business Solutions</title>
                <meta name="description" content="Build elite, high-performance apps with our expert custom iOS app development. We leverage Swift and SwiftUI to deliver secure, scalable, and premium user experiences." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Custom iOS App Development | Campaignsquat Ltd." />
                <meta property="og:description" content="Elevate your brand with premium iPhone applications engineered for speed and security." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center   mt-4 md:mt-20 overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]"> Custom iOS App Development Services for High-Growth Global Brands</h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                 Strengthen your digital presence with high-performance iPhone applications. Campaignsquat Ltd. combines Swift technical excellence with user-centric design to turn your complex business ideas into scalable mobile reality. Our custom solutions ensure your long-term success.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Launch Your iOS Project Today" className="bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Launch Your iOS Project Today
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Premium iOS App Development Showcase" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Custom iOS App Development Expertise Growth</h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহারের ফলে বড় স্ক্রিনে কার্ডগুলো চওড়া হয়ে এক লাইনে দুটি করে থাকবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                   
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={item.altText} 
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
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic iOS Development Pro</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">We combine technical precision with Apple's aesthetic standards to build world-class apps.</p>
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
                                Why is Campaignsquat Ltd the best ios Apps Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">At Campaignsquat, we specialize in creating iOS apps that don't just work—they provide a superior experience that reflects your brand’s excellence.</p>
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
                                    <button aria-label="Get Started with iOS Project" className="bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="iOS Excellence Design Concept" loading="lazy" className="w-full h-auto max-h-[650px] object-contain shadow-2xl" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Custom iOS App Expertise for Global Success</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert custom iOS app development for diverse industries to drive digital success. We build scalable, high-performance iOS solutions that ensure seamless user journeys and robust backend stability across all your global business sectors and Apple devices.</p>
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

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: "How long does it typically take to develop a custom iOS app?", answer: "Most MVP (Minimum Viable Product) versions take 12–16 weeks. However, complexity and third-party integrations dictate the final timeline. We provide a detailed roadmap and milestone-based schedule during the discovery phase." },
        { question: "Will you handle the App Store submission and approval process?", answer: "Yes. We manage the entire submission lifecycle, ensuring your app meets all Apple Guidelines (HIG and Technical) to minimize the risk of rejection and ensure a smooth, professional launch on the App Store." },
        { question: "Can you help scale the app after the initial launch?", answer: "Absolutely. Our 'Scalable Architecture' approach ensures that your codebase can handle rapid user growth and new feature additions without requiring a full rebuild, allowing your business to evolve seamlessly." },
        { question: "How many revisions are included in the UI/UX design phase?", answer: "We operate on a collaborative feedback loop with two major revision rounds included after the initial concept. This ensures the final design perfectly mirrors your brand vision while meeting user expectations." },
        { question: "Do you offer post-launch maintenance and support?", answer: "Yes, we provide tiered support packages for OS updates, bug fixes, and performance monitoring. This keeps your app running perfectly on the latest iOS versions and newer Apple hardware releases." }
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

export default IosApps;