import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react'; 
import { Helmet, HelmetProvider } from 'react-helmet-async';

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/Strategic Interactive Prototype for Web and Mobile Apps.webp';
import clickIcon from '../assets/images/research.png';
import motionIcon from '../assets/images/ux-design (1).png';
import handoffIcon from '../assets/images/web-design.png';
import feedbackIcon from '../assets/images/3d-modeling.png'; 
import hiFiImg from "../assets/images/Strategic UX Audit dashboard for product alignment.webp";
import motionDevImg from "../assets/images/Navigation logic using motion design in high-fidelity prototypes.webp";
import usabilityImg from "../assets/images/Interactive usability testing session for mobile apps.webp";
import devReadyImg from "../assets/images/Design-to-code precision handoff kit for developers.webp";
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

const InteractivePrototype = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  {
    title: "Realistic Product Feel",
    desc: "We create clickable models that simulate the final product experience to provide a clear vision for stakeholders and users alike. This high-fidelity approach ensures that every transition and gesture feels natural before moving into development.",
    img: clickIcon,
    alt: "Realistic Product Simulation and High-Fidelity Prototyping"
  },
  {
    title: "Rapid User Validation",
    desc: "Our team uses interactive prototypes to gather real user feedback early in the cycle to minimize risks and maximize usability. We refine the functional flow based on actual behavioral data to ensure your product succeeds in the global market.",
    img: motionIcon,
    alt: "Rapid User Validation and Behavioral Data Analysis"
  },
  {
    title: "Flawless Motion Logic",
    desc: "Designing smooth micro-interactions and animations that guide users and add a layer of professional polish to your digital interface. We ensure that every movement serves a functional goal while maintaining high-speed performance and clarity.",
    img: handoffIcon,
    alt: "Flawless Motion Logic and Functional Micro-interactions"
  },
  {
    title: "Precise Dev Handover",
    desc: "We deliver detailed interactive documentation that bridge the gap between design and code for a seamless technical transition. Our precise prototyping reduces revision time and ensures that the final build matches the vision with accuracy.",
    img: feedbackIcon,
    alt: "Precise Developer Handover and Technical Documentation"
  }
];

   const featureData = [
  {
    title: ["Strategic UX Audits for Product Success"],
    desc: "Beyond aesthetics, we conduct deep UX audits within our prototypes to identify friction points. By simulating the full user journey, Campaignsquat Ltd. ensures your product's architecture is intuitive, reducing post-launch churn and maximizing user retention through data-backed design decisions. Our high-fidelity simulations allow you to test complex business logic early, ensuring a professional and stable foundation before moving to development.",
    img: hiFiImg,
    reverse: false,
    alt: "Strategic UX Audit dashboard for product alignment"
  },
  {
    title: ["Motion Design for Intuitive Navigation"],
    desc: "We utilize purposeful motion design as a functional tool, not just decoration. By implementing smart transitions, we guide the user's eye and provide instant visual feedback. This creates a responsive feel that increases brand perceived value and helps users navigate complex workflows. Our interactive prototypes define the logical flow of your app, ensuring the final product feels smooth, professional, and refined for your global audience today.",
    img: motionDevImg,
    reverse: true,
    alt: "Navigation logic using motion design in high-fidelity prototypes"
  },
  {
    title: ["Validation Through Interactive Testing"],
    desc: "Our prototypes run real-world usability tests to capture behavioral insights. By observing users interact with a live-feel demo, we identify high-stakes friction points that static wireframes miss. This data-driven approach allows us to optimize CTA placements and refine navigation flows. We turn user feedback into actionable design improvements, ensuring your professional interface is fully validated and optimized for high conversion rates.",
    img: usabilityImg,
    reverse: false,
    alt: "Interactive usability testing session for mobile apps"
  },
  {
    title: ["Precision Design to Code Handoff Kits"],
    desc: "We eliminate the lost in translation phase. Our prototypes are delivered with comprehensive handoff kits, including CSS properties, transition timings, and asset exports. This ensures the final software looks and functions exactly like the approved prototype, reducing development time. Campaignsquat Ltd. prioritizes technical accuracy and clean documentation to maintain a professional bridge between creative vision and functional software reality.",
    img: devReadyImg,
    reverse: true,
    alt: "Design-to-code precision handoff kit for developers"
  }
];

   const processSteps = [
    { 
        // Step 1: Logic & Flow Mapping
        title: "Logic & Flow Mapping", 
        description: "Architecting interactive logic and user paths to ensure a cohesive and solid structural foundation.", 
        image: discoveryImg, 
        alt: "User flow and architectural logic mapping for interactive prototypes" 
    },
    { 
        // Step 2: Interactive Layering
        title: "Interactive Layering", 
        description: "Integrating triggers, high-fidelity transitions, and complex animations into the core UI components.", 
        image: designImg, 
        alt: "Interactive UI layering with high-fidelity transitions and animations" 
    },
    { 
        // Step 3: User-Centric Testing
        title: "User-Centric Testing", 
        description: "Deploying the prototype to test groups to collect actionable and qualitative feedback for refinement.", 
        image: iterationImg, 
        alt: "User-centric prototype testing and qualitative feedback collection" 
    },
    { 
        // Step 4: Technical Handoff
        title: "Technical Handoff", 
        description: "Finalizing the technical blueprint for a seamless, pixel-perfect transition to your engineering team.", 
        image: handoffImg, 
        alt: "Technical blueprint handoff for pixel-perfect engineering deployment" 
    }
];

    const points = ["Zero-Friction Interactions", "Hi-Fi Visual Simulation", "Dynamic State Management", "Developer-Friendly Specs", "Validated User Journeys"];

    const industryData = [
        { title: "FinTech Prototyping", desc: " We build realistic transaction prototypes to validate complex financial logic and ensure secure, intuitive user journeys for global banking apps.", img: img1, alt: "Interactive FinTech application prototype demo" },
        { title: "E-commerce Prototyping", desc: "Our experts simulate high-stakes shopping carts through interactive tests to maximize conversion rates and reduce user friction effectively.", img: img2, alt: "E-commerce checkout experience simulation" },
        { title: "HealthTech Prototyping", desc: " We create high-fidelity data visualization prototypes for medical apps to validate clarity and accessibility for healthcare providers and patients.", img: img3, alt: "Health monitoring app data visualization prototype" },
        { title: "EdTech Prototyping", desc: " Our team develops interactive course navigation and progress tracking demos to ensure engaging and seamless digital learning experiences for students.", img: img4, alt: "EdTech learning platform user flow simulation" },
        { title: "SaaS & B2B Prototyping", desc: "We validate dynamic data manipulation and complex sidebar navigation through interactive prototypes built for high-performance enterprise tools.", img: img5, alt: "SaaS dashboard interaction and navigation testing" },
        { title: "Real Estate Prototyping", desc: "We craft immersive property exploration and filtering prototypes to ensure a frictionless discovery journey for modern global real estate buyers.", img: img6, alt: "Real estate property search and filter prototype" },
        { title: "Travel & Booking Prototyping", desc: "Our designers simulate multi-destination booking and itinerary flows to validate user retention and speed across global travel platforms.", img: img7, alt: "Travel planner and booking itinerary prototype" },
        { title: "Food & Logistics Prototyping", desc: "We test the speed and efficiency of food delivery interfaces through interactive simulations to optimize ordering and complex logistics workflows.", img: img8, alt: "Food delivery app speed and efficiency prototype" },
    ];

    // Structured Data (JSON-LD)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "High-Fidelity Interactive Prototyping",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Transform static designs into high-fidelity clickable simulations. We provide interactive prototyping to validate flows, reduce development risks, and secure stakeholder buy-in.",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Prototyping Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UX Audits" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Design" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Developer Handoff" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the typical turnaround for a high-fidelity prototype?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depending on complexity, we usually deliver functional prototypes within 1-2 weeks, ensuring speed without compromising on UX depth or interaction quality."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use the prototype for investor pitches or funding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our high-fidelity simulations look and feel like finished products, making them the best tool for demonstrating your vision and securing stakeholder buy-in."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle revisions during the prototyping phase?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We work in agile sprints, providing dedicated feedback loops after each iteration to ensure the final flow meets your business objectives perfectly."
                }
            },
            {
                "@type": "Question",
                "name": "What industry-standard tools does Campaignsquat Ltd. use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We utilize advanced tools like Figma, Protopie, and Framer to create everything from simple wireframes to micro-interaction-rich high-fidelity prototypes."
                }
            },
            {
                "@type": "Question",
                "name": "How does the handoff process to developers work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide comprehensive handoff kits, including animation timings, CSS specs, and asset exports, ensuring your dev team can replicate the design with 100% accuracy."
                }
            }
        ]
    };

    return (
        <HelmetProvider>
            <main className="overflow-hidden font-poppins bg-[#02050a] ">
                <Helmet>
                    <title>Interactive Prototyping Services | Campaignsquat Ltd.</title>
                    <meta name="description" content="Transform ideas into high-fidelity clickable prototypes. Reduce dev costs & validate UX with Campaignsquat Ltd.’s expert prototyping services." />
                    <link rel="canonical" href="https://www.campaignsquat.com/interactive-prototyping" />
                    
                    {/* Open Graph Tags */}
                    <meta property="og:title" content="Interactive Prototyping & User Validation | Campaignsquat Ltd." />
                    <meta property="og:description" content="Eliminate development risks with clickable simulations that validate flows and secure investor buy-in." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={heroImage} />

                    {/* Structured Data */}
                    <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                </Helmet>

                {/* 1. Hero Section */}
                <section className="relative w-full flex items-center  mt-4 md:mt-20  overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                                <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">High-Fidelity Interactive Prototyping & User Validation Services</h1>
                                <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                    Eliminate development risks with Campaignsquat Ltd. We transform static concepts into clickable simulations that validate flows and secure investor buy-in. Our Figma Design experts build high-fidelity Interactive Prototyping to ensure your MVP Design is optimized for high growth.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                    <Link to="/home/contact" className="w-full sm:w-auto">
                                        <button aria-label="Launch Your Prototype Today" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                            Launch Your Prototype
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                                <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                                <img 
                                    src={heroImage} 
                                    alt="Strategic Interactive Prototype for Web and Mobile Apps" 
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
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">E Our Interactive Prototyping Expertise for Growth</h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহারে ডেস্কটপে ২ কলামে কার্ড শো করবে */}
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
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

                {/* 3. Features Section */}
                <section className="py-12 md:py-20 ">
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full -">
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Interactive Prototyping Process</h2>
                            <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">Campaignsquat Ltd. follows a rigorous workflow to ensure every transition serves a purpose.</p>
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
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative  ">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                            <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Interactive Prototype service provider?</h2>
                                <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Our high-fidelity interactive prototyping services provide the closest possible experience to the final product, helping you make informed decisions with absolute confidence.</p>
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
                                        <button aria-label="Get started with prototyping" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-10 md:px-8 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                                <div className="relative flex justify-center lg:justify-end">
                                    <img src={sideImg} alt="High-fidelity UI/UX Prototyping Excellence by Campaignsquat" loading="lazy" className="w-full h-auto max-h-[650px] object-contain shadow-2xl" />
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
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-ful ">
                        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Prototyping Expertise for Global Brands</h2>
                            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. delivers expert interactive prototyping to validate user flows and product logic before development begins. We build high-fidelity simulations that ensure seamless usability and high-performance results tailored for your global business growth and success.</p>
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
        </HelmetProvider>
    );
};

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is the typical turnaround for a high-fidelity prototype?",
            answer: "Depending on complexity, we usually deliver functional prototypes within 1-2 weeks, ensuring speed without compromising on UX depth or interaction quality."
        },
        {
            question: "Can I use the prototype for investor pitches or funding?",
            answer: "Absolutely. Our high-fidelity simulations look and feel like finished products, making them the best tool for demonstrating your vision and securing stakeholder buy-in."
        },
        {
            question: "How do you handle revisions during the prototyping phase?",
            answer: "We work in agile sprints, providing dedicated feedback loops after each iteration to ensure the final flow meets your business objectives perfectly."
        },
        {
            question: "What industry-standard tools does Campaignsquat Ltd. use?",
            answer: "We utilize advanced tools like Figma, Protopie, and Framer to create everything from simple wireframes to micro-interaction-rich high-fidelity prototypes."
        },
        {
            question: "How does the handoff process to developers work?",
            answer: "We provide comprehensive handoff kits, including animation timings, CSS specs, and asset exports, ensuring your dev team can replicate the design with 100% accuracy."
        }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Everything you need to know about our interactive prototyping and user validation services.
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

export default InteractivePrototype;