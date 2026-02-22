import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// images imports remain same
import heroImage from '../assets/images/Elite Cross-Platform App Development Agency Interface Design.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Unified App Architecture for iOS and Android.webp";
import accessibilityImg from "../assets/images/High Performance Cross-Platform Mobile App Performance.webp";
import businessImg from "../assets/images/Rapid MVP Launch Strategy with Flutter and React Native.webp";
import scalableImg from "../assets/images/Cross Device Brand Consistency UI Design.webp";
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

const CrossPlatform = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "Unified Codebase Logic",
    desc: "We build robust applications using a unified codebase that runs seamlessly on both iOS and Android platforms. Our team focus remains on reducing development time and costs while maintaining a professional and high-performance digital experience.",
    img: researchIcon,
    alt: "Unified Codebase Logic for iOS and Android"
  },
  {
    title: "Flutter & React Native",
    desc: "Developing modern apps with Flutter and React Native to ensure native-like performance and smooth animations. We prioritize technical agility to help your brand launch across multiple markets quickly with a stable and professional mobile product.",
    img: uxIcon,
    alt: "Flutter and React Native Mobile Development"
  },
  {
    title: "Shared Business Logic",
    desc: "Implementing shared backend logic to ensure consistent functionality and data accuracy across all mobile devices. Our experts build secure and scalable architectures that simplify future updates and maintain professional grade software integrity.",
    img: webIcon,
    alt: "Shared Business Logic and Software Integrity"
  },
  {
    title: "Maximum Market Reach",
    desc: "Crafting versatile mobile solutions that allow your business to reach a wider global audience without extra overhead. We optimize every functional element to ensure a professional user journey on both Apple and Google ecosystems simultaneously.",
    img: auditIcon,
    alt: "Maximum Market Reach for Cross-Platform Apps"
  }
]; 

const featureData = [
  {
    title: ["Cross-Platform App Development Solutions"],
    desc: "Stop wasting resources on fragmented development. Campaignsquat Ltd. specializes in shared codebase architecture to ensure your logic remains consistent across iOS and Android. This one-codebase app development approach reduces maintenance and allows building unified mobile apps for iOS and Android simultaneously. We focus on code reusability benefits, ensuring your professional multi-platform systems are optimized for speed and long-term scalability.",
    img: uxAuditImg,
    reverse: false,
    alt: "Unified App Architecture for iOS and Android"
  },
  {
    title: ["Custom Cross-Platform Apps Near Native Spe"],
    desc: "We shatter the myth that hybrid mobile applications are slow. By utilizing native rendering engines and component-based UI development, we deliver custom cross-platform app development with near-native speed. Your users will experience fluid transitions and tactile feedback, ensuring high retention. Campaignsquat Ltd. provides professional Flutter app development that offers absolute clarity, ensuring your product operates with 100% accuracy today.",
    img: accessibilityImg,
    reverse: true,
    alt: "High Performance Cross-Platform Mobile App Performance"
  },
  {
    title: ["Hire Flutter Developers for High Performan"],
    desc: "In the digital economy, speed is a competitive advantage. You can hire Flutter developers for high-performance mobile apps to launch MVPs faster with cross-platform frameworks in 2026. Our agile methodology, combined with hot reload functionality, cuts development cycles by half. Campaignsquat Ltd. ensures your professional infrastructure remains agile, providing a stable foundation for your rapid growth through a unified QA and debugging process.",
    img: businessImg,
    reverse: false,
    alt: "Rapid MVP Launch Strategy with Flutter and React Native"
  },
  {
    title: ["React Native Development Agency for Start"],
    desc: "Consistency is the foundation of trust. As a React Native development agency for scalable startups, we engineer responsive layouts for various screens. Whether your customer is on a tablet or desktop, our single codebase apps deliver a high-quality visual experience. We integrate Over-the-air (OTA) updates and third-party SDK integration to keep your app fresh. Campaignsquat Ltd. ensures your global presence is protected through a unified interface.",
    img: scalableImg,
    reverse: true,
    alt: "Cross-Device Brand Consistency UI Design"
  }
];

   const processSteps = [
    { 
        // Step 1: Discovery and Audit
        title: "Discovery and Audit", 
        description: "Analyzing requirements to select the optimal framework and define a high-performance technical architecture.", 
        image: discoveryImg, 
        alt: "Cross-platform app discovery and high-performance technical architecture mapping" 
    },
    { 
        // Step 2: Rapid Prototyping
        title: "Rapid Prototyping", 
        description: "Designing a unified interface that feels intuitive to both iOS and Android users alike for better adoption.", 
        image: designImg, 
        alt: "Unified cross-platform UI prototyping for iOS and Android user experience" 
    },
    { 
        // Step 3: Agile Engineering
        title: "Agile Engineering", 
        description: "Sprints focus on modular coding and continuous integration for stable builds and visible progress updates.", 
        image: iterationImg, 
        alt: "Agile engineering sprints with modular coding and continuous integration pipelines" 
    },
    { 
        // Step 4: Quality and Launch
        title: "Quality and Launch", 
        description: "Rigorous testing on physical devices ensures performance stability and a bug-free global launch for you.", 
        image: handoffImg, 
        alt: "Physical device testing for performance stability and bug-free global app launch" 
    }
];

const points = ["Flutter & React Native Pros", "Enterprise-Grade Security", "Native API Integration", "Single-Codebase Efficiency", "Rapid MVP Deployment"];

const industryData = [
    { 
        title: "High-Growth Startups", 
        desc: "We build high-performance MVPs on unified frameworks to accelerate market entry and drive rapid user acquisition.", 
        img: img1, 
        alt: "Startup App Solutions" 
    },
    { 
        title: "Unified E-commerce", 
        desc: "Our experts deliver seamless shopping experiences across all mobile devices with a single source build to maximize conversion.", 
        img: img2, 
        alt: "E-commerce Mobile App" 
    },
    { 
        title: "Social Media Tech", 
        desc: "We create high-engagement communities featuring native-speed animations and real-time interactive features for global audiences.", 
        img: img3, 
        alt: "Social Networking App" 
    },
    { 
        title: "FinTech Solutions", 
        desc: "Our team develops secure financial tools featuring biometric integration and encrypted data paths for total transaction safety.", 
        img: img4, 
        alt: "FinTech Security Apps" 
    },
    { 
        title: "Enterprise Tools", 
        desc: "We build robust internal applications that sync perfectly across varied employee hardware and operating system versions.", 
        img: img5, 
        alt: "Enterprise App Development" 
    },
    { 
        title: "Real Estate Portals", 
        desc: "Our designers craft high-fidelity property tours and interactive mapping solutions unified for all global mobile users.", 
        img: img6, 
        alt: "Real Estate Mobile Solutions" 
    },
    { 
        title: "Global Healthcare", 
        desc: "We develop secure patient portals and telehealth applications compliant with global data standards for modern medical care.", 
        img: img7, 
        alt: "Healthcare App Compliance" 
    },
    { 
        title: "Media & Entertainment", 
        desc: "Our team builds low-latency streaming and media applications featuring high-fidelity UI rendering for an immersive experience.", 
        img: img8, 
        alt: "Entertainment Streaming App" 
    },
];

    // FAQ Content for Schema extraction
    const faqs = [
        {
            question: "Will my cross-platform app perform as well as a native build?",
            answer: "Absolutely. We use frameworks like Flutter that compile directly to native machine code. This ensures smooth animations and high-speed performance virtually indistinguishable from native apps while keeping development faster."
        },
        {
            question: "How do you handle OS-specific features like FaceID or Apple Pay?",
            answer: "We utilize custom platform channels and native plugins to access hardware features directly. Your app will have full access to Camera, GPS, Biometrics, and Bluetooth just like a native application would."
        },
        {
            question: "How much can I save with cross-platform development?",
            answer: "Typically, clients save up to 40% compared to building two separate native apps. Since we manage a single codebase for both iOS and Android, you save significantly on both initial development and long-term maintenance costs."
        },
        {
            question: "Is it easy to update features on both platforms simultaneously?",
            answer: "Yes! A single update covers both platforms. When we add a new feature or fix a bug, it reflects on both Android and iOS at the same time, ensuring your entire user base always has the latest version without delay."
        },
        {
            question: "Which framework do you recommend: Flutter or React Native?",
            answer: "It depends on your project. We usually recommend Flutter for superior UI consistency. However, if your project relies heavily on specific JavaScript ecosystems, React Native is an excellent choice. We'll help you decide during the discovery phase."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cross-Platform App Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Scale faster with high-performance Flutter and React Native apps. Campaignsquat Ltd. delivers native-speed, cross-platform solutions for iOS and Android.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "App Development",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Native Solutions" } }
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
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Cross-Platform App Development Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Scale faster with high-performance Flutter and React Native apps. Campaignsquat Ltd. delivers native-speed, cross-platform solutions for iOS and Android." />
                <link rel="canonical" href="https://yourdomain.com/cross-platform-app-development" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Cross-Platform App Development Services | Campaignsquat Ltd." />
                <meta property="og:description" content="Scale faster with high-performance Flutter and React Native apps. Native-speed solutions for iOS and Android." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/cross-platform-app-development" />
                
                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-centerpt-6  mt-4 md:mt-20   overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">Elite Cross-Platform App Development for Scaling Global Brands Now</h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Reduce the cost of separate iOS and Android builds today. Campaignsquat Ltd. builds high-performance, single-codebase apps that deliver native speed, seamless UX, and faster market entry for your digital products. Our custom solutions ensure your long-term business success.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                                  <button aria-label="Book a free strategy call" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                      Get Your Free Strategy Call
                                    </button>
                                  </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Elite Cross-Platform App Development Agency Interface Design" 
                                className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
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
           <section className="bg-[#0A0A0A] py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center  ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Cross-Platform App Development Expertise Pro</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
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
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">
                            {item.desc}
                        </p>
                    </div>
                    {/* Hover Accent Glow */}
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic Cross-Platform Process</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A unified engineering workflow designed to launch your app on iOS and Android simultaneously.</p>
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
                                 Why is Campaignsquat Ltd the best Cross Platfrom Mobile App Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Don't limit your audience. With Campaignsquat’s cross-platform expertise, you get a high-performing app that works for everyone, everywhere.</p>
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
                                 <button aria-label="Start your app project" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                      Get Started Now
                                   </button>
                                 </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Success Case Study of Cross-Platform App Development" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className=" py-12 md:py-20  relative z-10 overflow-hidden">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full  ">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Cross-Platform Expertise for Global Reach</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">VCampaignsquat Ltd. provides expert cross-platform app development for diverse industries to drive digital success. We build scalable, high-performance solutions that ensure seamless user journeys and robust backend stability across all your global business sectors and devices. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <article className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light opacity-90">{item.desc}</p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
      
            <Questions faqs={faqs} />
        </main>
    );
};

const Questions = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

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
export default CrossPlatform;