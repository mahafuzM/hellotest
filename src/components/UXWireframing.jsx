import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // SEO Integration

// Image Imports
import heroImage from '../assets/images/Professional UX Wireframing and Information Architecture Blueprint by Campaignsquat Ltd.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 

import architectureImg from "../assets/images/Strategic Information Architecture and UX Audit Blueprint for Scalable Tech Products.webp";
import userJourneyImg from "../assets/images/Empathy-Driven User Journey Mapping and Visual Experience Design.webp";
import lowFidImg from "../assets/images/Low-Fidelity Wireframing and Rapid UX Prototyping Sketches.webp";
import validationImg from "../assets/images/Data-Driven UX Logic Validation and Wireframe Usability Testing.webp";
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

const UXWireframing = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  {
    title: "Logical User Journey",
    desc: "We map every single touchpoint to guarantee a high-speed path toward conversion without any complex distractions. Our team builds the logical backbone of your app to ensure users find exactly what they need within seconds of interaction.",
    img: userFlowIcon,
    alt: "Logical User Journey Mapping for High Conversion"
  },
  {
    title: "Core Structural Logic",
    desc: "Focusing on the skeleton of your product to finalize functionality before investing in visual aesthetics or brand colors. This disciplined approach ensures that the fundamental system is stable and ready to handle massive global user traffic.",
    img: blueprintIcon,
    alt: "Core Structural Logic and Functional Wireframing"
  },
  {
    title: "Rapid Prototyping Mode",
    desc: "We create clickable wireframes that simulate the final experience to identify and fix navigation issues at the earliest stage. This high-speed testing phase saves significant development costs and ensures a flawless product launch every time.",
    img: architectureIcon,
    alt: "Rapid Prototyping and Clickable Wireframes"
  },
  {
    title: "Scalable Architecture",
    desc: "Our designers organize complex data into a simplified framework that remains easy to navigate as your business expands globally. We build the digital architecture today that supports the high-performance growth of your enterprise tomorrow.",
    img: testingIcon,
    alt: "Scalable Digital Architecture for Enterprise Growth"
  }
];

   const featureData = [
  {
    title: ["Deep UX Audits for Strategic Alignment"],
    desc: "Beyond aesthetics, we conduct deep UX audits within our prototypes to identify friction points. By simulating the full user journey, Campaignsquat Ltd. ensures your product's architecture is intuitive, reducing post-launch churn and maximizing user retention through data-backed design decisions. Our systematic approach to wireframing allows your business to visualize complex logic early, ensuring a professional and stable foundation for growth.",
    img: architectureImg,
    reverse: false,
    alt: "Strategic Information Architecture and UX Audit Blueprint for Scalable Tech Products"
  },
  {
    title: ["Motion Design for Seamless Navigation"],
    desc: "We utilize purposeful motion design as a functional tool, not just decoration. By implementing smart transitions, we guide the user's eye and provide instant visual feedback. This creates a responsive feel that increases brand perceived value and helps users navigate complex workflows. Our wireframing process integrates these logical movements to ensure that your final digital product feels intuitive, professional, and easy to use always.",
    img: userJourneyImg,
    reverse: true,
    alt: "Empathy-Driven User Journey Mapping and Visual Experience Design"
  },
  {
    title: ["Validation Through Interactive Testing"],
    desc: "Our prototypes run real-world usability tests to capture behavioral insights. By observing users interact with a live-feel demo, we identify high-stakes friction points that static wireframes miss. This data-driven approach allows us to optimize CTA placements and refine navigation flows. We focus on transforming user feedback into actionable design improvements, ensuring your professional interface is fully optimized before development starts.",
    img: lowFidImg,
    reverse: false,
    alt: "Low-Fidelity Wireframing and Rapid UX Prototyping Sketches"
  },
  {
    title: ["Design to Code Precision and Handoffs"],
    desc: "We eliminate the lost in translation phase. Our prototypes are delivered with comprehensive handoff kits, including CSS properties, transition timings, and asset exports. This ensures the final software looks and functions exactly like the approved prototype, reducing development time. Campaignsquat Ltd. prioritizes technical accuracy and clean documentation to maintain a professional bridge between creative vision and functional reality.",
    img: validationImg,
    reverse: true,
    alt: "Data-Driven UX Logic Validation and Wireframe Usability Testing"
  }
];

    const processSteps = [
    { 
        // Step 1: Deep-Dive Research
        title: "Deep-Dive Research", 
        description: "Analyzing user personas and competitor landscapes to define a strategy that aligns with your business goals.", 
        image: discoveryImg, 
        alt: "UX Deep-Dive Research and Competitive Analysis for Product Strategy" 
    },
    { 
        // Step 2: Logical Ideation
        title: "Logical Ideation", 
        description: "Brainstorming structural flows and mapping architecture to ensure seamless navigation across all device types.", 
        image: designImg, 
        alt: "Logical Ideation and User Experience Architecture Mapping" 
    },
    { 
        // Step 3: Rapid Wireframing
        title: "Rapid Wireframing", 
        description: "Creating skeletal layouts of key screens, focusing strictly on hierarchy, placement, and user interaction.", 
        image: iterationImg, 
        alt: "Rapid Skeleton Wireframing and Functional Layout Interaction" 
    },
    { 
        // Step 4: Expert Validation
        title: "Expert Validation", 
        description: "Testing the flows against usability heuristics to ensure the experience is intuitive and ready for design.", 
        image: handoffImg, 
        alt: "UX Expert Validation and Heuristic Usability Testing" 
    }
];

    const points = ["User-Centric Architecture", "Frictionless Navigation", "Logical Content Strategy", "Rapid Structural Iteration", "Evidence-Based UX Logic"];

    const industryData = [
        { title: "Banking UX", desc: "We simplify complex financial data architecture into intuitive wireframes for easy user understanding and high-trust interactions.", img: img1, alt: "Banking UX Design and Financial Data Visualization" },
        { title: "Retail Flows", desc: "Our experts map out strategic checkout processes in wireframes to reduce cart abandonment and optimize conversion rates.", img: img2, alt: "E-commerce Retail UX Flow and Checkout Optimization" },
        { title: "Medical Portals", desc: "We build clear information hierarchies in medical wireframes to ensure critical healthcare data is accessible and secure.", img: img3, alt: "Medical Portal UX and Healthcare Information Hierarchy" },
        { title: "LMS Structure", desc: " Our team creates logical learning paths through structured wireframes designed for modern educational and training platforms.", img: img4, alt: "LMS Structure and Educational Platform UX Mapping" },
        { title: "SaaS Workflows", desc: "We decouple complex enterprise tools into manageable, user-friendly task flows through high-performance dashboard wireframing.", img: img5, alt: "SaaS Workflow Optimization and Business Tool UX" },
        { title: "Property Search", desc: " We design intuitive filtering and navigation wireframes for real-estate platforms to simplify the property discovery journey.", img: img6, alt: "Real Estate Property Search UX and Navigation" },
        { title: "Booking Logic", desc: "Our designers streamline multi-step travel booking journeys via strategic wireframes that maximize user retention and speed.", img: img7, alt: "Travel Booking Logic and User Journey Streamlining" },
        { title: "Logistic UX", desc: " We optimize dashboard flows for fast-paced delivery tracking, ensuring a frictionless experience across the entire supply chain.", img: img8, alt: "Logistics Dashboard UX and Delivery Tracking Flow" },
    ];

    // Structured Data (JSON-LD)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "UX Wireframing & Strategic UX Architecture",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd"
        },
        "description": "Professional UX wireframing and information architecture services. We create data-driven user flows and low-fidelity prototypes to eliminate friction and reduce churn.",
        "serviceType": "UX Design and Wireframing",
        "areaServed": "Worldwide"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is UX & Wireframing important before development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wireframing acts as the architectural blueprint. It allows us to focus on logic and user flow without visual distractions, preventing costly redesigns and ensuring the product is intuitive from day one."
                }
            },
            {
                "@type": "Question",
                "name": "How long does the UX wireframing phase usually take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depending on complexity, it typically takes 2–4 weeks. This includes deep research, mapping out all user journeys, and creating skeletal layouts for every core screen to prevent technical debt."
                }
            },
            {
                "@type": "Question",
                "name": "Do you perform usability testing on wireframes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We validate our structural logic through early testing to ensure the navigation is frictionless before we even start the visual UI design phase. This ensures evidence-based UX logic."
                }
            },
            {
                "@type": "Question",
                "name": "What tools do you use for UX and Wireframing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We primarily use Figma and FigJam for rapid wireframing and interactive prototyping, allowing for real-time collaboration and seamless handoff to development teams."
                }
            },
            {
                "@type": "Question",
                "name": "Can I request changes during the wireframing stage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. In fact, this is the best time for changes as it is the most cost-effective stage to pivot. We iterate quickly to ensure the logic perfectly matches your business goals."
                }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>UX Wireframing & Strategic UX Architecture | Campaignsquat Ltd</title>
                <meta name="description" content="Stop wasting development hours on unproven logic. Campaignsquat Ltd engineers data-driven UX wireframes, information architecture, and low-fidelity prototypes." />
                <link rel="canonical" href="https://yourdomain.com/ux-wireframing" />
                <meta property="og:title" content="Strategic UX Wireframing & Architecture | Campaignsquat Ltd" />
                <meta property="og:description" content="Turn complex ideas into intuitive digital interfaces with our expert UX wireframing and user flow mapping services." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center   mt-4 md:mt-20  overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12  lg:px-20 relative z-10 w-full ">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                                Strategic UX Wireframing Services for Scalable Tech Products
                            </h1>
                            
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-light">
                                 Stop wasting development hours on unproven logic. Campaignsquat Ltd. engineers data-driven user flows and low-fidelity prototypes that eliminate friction. Our User Experience (UX) Strategy focuses on expert Wireframing & Prototyping, ensuring your MVP Design is ready for high scaling. 
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Architect Your Product - Contact Campaignsquat" className="w-full sm:w-auto bg-[#F7A400] border-[#f7a400] border-2 text-black font-bold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-transparent hover:text-white active:scale-95 shadow-lg shadow-[#F7A400]/20">
                                       Architect Your Product
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-[5px]"></div>
                            {/* Optimized Hero Image */}
                            <img 
                                src={heroImage} 
                                alt="Professional UX Wireframing and Information Architecture Blueprint by Campaignsquat Ltd" 
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
           <section className="bg-[#0A0A0A] py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our UX Wireframing Service Expertise for Growth</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহারের মাধ্যমে ২ লাইনে ৪টি কার্ড ৫০% ৫০% ভাবে শো করবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/30 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-14 h-14 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={`${item.title} Expertise Icon`} 
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
                                <div className="w-full md:w-1/2 pt-4 md:pt-6">
                                    {/* SEO Hierarchy H2 */}
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => (
                                            <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>
                                        ))}
                                    </h2>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light text-left max-w-[580px]">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px]">
                                        <div className="absolute -inset-4 bg-[#F7A400]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <img 
                                            src={item.img} 
                                            alt={item.alt} 
                                            loading="lazy"
                                            className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="w-full bg-[#02050A] py-12 md:py-20">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28 pt-4 md:pt-4">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our UX Wireframing Services Process</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">A systematic approach to define and validate the core structural logic of your digital product</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 -mt-6 md:-mt-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer ">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img src={step.image} alt={step.alt} loading="lazy" className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-center -mt-4">
                                    {/* SEO Hierarchy H3 */}
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
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32 ">
                        
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-50"> 
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.3] mb-8">Why is Campaignsquat Ltd the best UI & Wireframing Design service provider?</h2>
                            <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">We specialize in turning complex user requirements into simple, skeletal wireframes that prioritize task completion and ease of use.</p>
                            
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 md:w-7 md:h-7 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-3.5 h-3.5 md:w-4 md:h-4 stroke-[4px]" />
                                        </div>
                                        <span className="text-white text-[18px] md:text-[20px] font-medium leading-none">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-start relative z-[100]">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto cursor-pointer pointer-events-auto">
                                    <button aria-label="Get Started with UX Architecture" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-6 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group pointer-events-auto">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img 
                                    src={sideImg} 
                                    alt="Advanced UX Planning Excellence and Strategic Wireframing Visualization" 
                                    loading="lazy"
                                    className="w-full h-auto max-h-[750px] lg:max-h-[850px] object-contain rounded-[10px]  scale-105 lg:scale-110" 
                                />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className="py-12 md:py-20 relative z-10 overflow-hidden">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full  ">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24 ">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-4"> Expert UX Wireframing Services for Scalable Web & Mobile Products</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert UX wireframing services to build the strategic foundation of your digital products. We create low-fidelity and high-fidelity blueprints that ensure seamless user journeys and high-performance interfaces tailored for your global business growth.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6 ">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        {/* SEO Hierarchy H3 */}
                                        <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light">{item.desc}</p>
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
            question: "Why is UX & Wireframing important before development?",
            answer: "Wireframing acts as the architectural blueprint. It allows us to focus on logic and user flow without visual distractions, preventing costly redesigns and ensuring the product is intuitive from day one."
        },
        {
            question: "How long does the UX wireframing phase usually take?",
            answer: "Depending on complexity, it typically takes 2–4 weeks. This includes deep research, mapping out all user journeys, and creating skeletal layouts for every core screen to prevent technical debt."
        },
        {
            question: "Do you perform usability testing on wireframes?",
            answer: "Yes. We validate our structural logic through early testing to ensure the navigation is frictionless before we even start the visual UI design phase. This ensures evidence-based UX logic."
        },
        {
            question: "What tools do you use for UX and Wireframing?",
            answer: "We primarily use Figma and FigJam for rapid wireframing and interactive prototyping, allowing for real-time collaboration and seamless handoff to development teams."
        },
        {
            question: "Can I request changes during the wireframing stage?",
            answer: "Absolutely. In fact, this is the best time for changes as it is the most cost-effective stage to pivot. We iterate quickly to ensure the logic perfectly matches your business goals."
        }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Expert Insights: UX & Wireframing
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Quick answers to our professional UX & wireframing process
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

export default UXWireframing;