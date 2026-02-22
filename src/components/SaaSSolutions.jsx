import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Integrated react-helmet-async

// images inputs
import heroImage from '../assets/images/Scalable SaaS Product Development Services - Campaignsquat Ltd.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/SaaS subscription management and automated billing system interface.webp";
import accessibilityImg from "../assets/images/Enterprise grade security and data privacy compliance for SaaS.webp";
import businessImg from "../assets/images/Advanced SaaS analytics dashboard for real-time user insights.webp";
import scalableImg from "../assets/images/Scalable cloud infrastructure and microservices for SaaS growth.webp";
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

const SaaSSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  {
    title: "Multi-Tenant Framework",
    desc: "We build robust multi-tenancy architectures that allow your SaaS platform to serve thousands of users securely on a single infrastructure. Our team focuses on data isolation and high-performance scaling to ensure long-term stability and growth.",
    img: uxIcon,
    alt: "Multi-Tenant SaaS Architecture and Data Isolation"
  },
  {
    title: "Microservices Design",
    desc: "Developing modular microservices that ensure your product remains flexible and easy to update without system downtime. We prioritize clean code and technical agility to help you maintain a professional and competitive edge in the global market.",
    img: researchIcon,
    alt: "Microservices Architecture and Technical Agility"
  },
  {
    title: "Subscription Logic UI",
    desc: "Integrating advanced subscription management and recurring billing systems that provide a seamless checkout flow. We design intuitive user dashboards that simplify plan upgrades and account management to drive high user retention and revenue.",
    img: auditIcon,
    alt: "Subscription Management UI and Recurring Billing Systems"
  },
  {
    title: "Secure Cloud Deploying",
    desc: "Implementing advanced cloud security protocols and auto-scaling logic to protect your SaaS data environment. We ensure your platform remains fast and reliable under heavy traffic loads by building a high-performance and professional backend.",
    img: webIcon,
    alt: "Secure Cloud Deployment and Auto-Scaling Logic"
  }
];

    const featureData = [
  {
    title: ["Custom SaaS Product Development Services"],
    desc: "Maximize your MRR with sophisticated billing logic and bespoke SaaS application architecture. As a full-stack SaaS development agency, Campaignsquat Ltd. provides SaaS MVP (Minimum Viable Product) development using agile iteration and MVP blueprinting. We integrate seamless subscription and billing engine integration to ensure your revenue collection is secure. Our professional focus on personalized user workflows helps in reducing SaaS churn rate today.",
    img: uxAuditImg,
    reverse: false,
    alt: "Custom SaaS product development and subscription management interface"
  },
  {
    title: ["Multi-Tenant SaaS Cloud Architecture Pro"],
    desc: "Future-proof your application for global demand. Utilizing a multi-tenant SaaS cloud architecture and microservices-based SaaS scaling, we build systems that scale horizontally as your user base grows. Our SaaS API-first development approach and CI/CD pipeline prevent performance bottlenecks. Campaignsquat Ltd. provides self-healing infrastructure and cloud migration services to ensure a consistent, professional experience for every user worldwide.",
    img: accessibilityImg,
    reverse: true,
    alt: "Multi-tenant SaaS cloud architecture and microservices scaling"
  },
  {
    title: ["AI-Native SaaS Product Development Tech"],
    desc: "Turn raw data into actionable growth strategies. We specialize in AI-native SaaS product development and AI-native insights that track user behavior in real-time. By embedding a churn analytics dashboard, we allow you to make evidence-based decisions and optimize your product roadmap. Campaignsquat Ltd. ensures your professional SaaS product is backed by deep intelligence, allowing you to identify trends and mitigate risks before they impact your ROI.",
    img: businessImg,
    reverse: false,
    alt: "AI-native SaaS product development and analytics dashboard"
  },
  {
    title: ["Zero-Trust Security and SaaS Data Safety"],
    desc: "Protect your reputation with a zero-trust security framework. Our process prioritizes securing SaaS data with multi-layer encryption and rigorous SaaS performance optimization and auditing. We don't just build features; we build trust by ensuring your white-label SaaS software solutions meet global standards. Campaignsquat Ltd. delivers professional B2B SaaS platform development that is ready for enterprise-level procurement and complex data privacy.",
    img: scalableImg,
    reverse: true,
    alt: "Zero-trust security and B2B SaaS platform data encryption"
  }
];

    const processSteps = [
    { 
        // Step 1: Discovery & Logic
        title: "Discovery & Logic", 
        description: "Mapping user journeys and technical requirements to define a lean MVP that solves core market problems.", 
        image: discoveryImg, 
        alt: "SaaS product discovery phase and lean MVP technical logic mapping" 
    },
    { 
        // Step 2: Prototyping
        title: "Prototyping", 
        description: "High-fidelity wireframes that validate the user experience before a single line of code is written today.", 
        image: designImg, 
        alt: "High-fidelity SaaS wireframing and interactive user experience prototyping" 
    },
    { 
        // Step 3: Sprint-Based Dev
        title: "Sprint-Based Dev", 
        description: "Rapid engineering cycles with continuous integration (CI/CD) for fast feature deployment and stability.", 
        image: iterationImg, 
        alt: "Agile sprint-based SaaS development with CI/CD pipeline integration" 
    },
    { 
        // Step 4: Launch & Scale
        title: "Launch & Scale", 
        description: "Full-scale product rollout followed by 24/7 performance monitoring and strategic global scaling plans.", 
        image: handoffImg, 
        alt: "Global SaaS product launch with real-time performance monitoring and scaling" 
    }
];

    const points = [
        "Zero-Downtime Updates", 
        "Microservices-ready Architecture", 
        "White-Label & Rebranding Options", 
        "Automated Self-Service Onboarding", 
        "Real-time System Monitoring"
    ];

    const industryData = [
    { 
        title: "MarTech Platforms", 
        desc: "We build advanced SaaS systems for marketing automation, deep analytics, and social media management to drive brand growth.", 
        img: img1, 
        alt: "MarTech SaaS solutions for marketing automation" 
    },
    { 
        title: "EdTech Solutions", 
        desc: "Our experts develop learning management systems (LMS) designed for schools and corporate training with scalable cloud architecture.", 
        img: img2, 
        alt: "EdTech SaaS platform and learning management systems" 
    },
    { 
        title: "FinTech Portals", 
        desc: "We create secure cloud-based accounting, digital wallets, and investment management platforms featuring high-level data encryption.", 
        img: img3, 
        alt: "Secure FinTech SaaS for digital payments and finance" 
    },
    { 
        title: "HealthTech SaaS", 
        desc: "Our team builds telemedicine hubs, EHR systems, and HIPAA-compliant patient portals designed for modern digital healthcare providers.", 
        img: img4, 
        alt: "HIPAA compliant HealthTech SaaS and telemedicine solutions" 
    },
    { 
        title: "Project Management", 
        desc: "We develop enterprise collaboration tools designed for remote teams and agile workflows to maximize collective productivity.", 
        img: img5, 
        alt: "SaaS project management and team collaboration tools" 
    },
    { 
        title: "PropTech Systems", 
        desc: "Our designers craft SaaS for smart real estate management, automated CRM, and virtual property automation for global markets.", 
        img: img6, 
        alt: "PropTech SaaS for real estate and property management" 
    },
    { 
        title: "LegalTech Hubs", 
        desc: "We build cloud-based case management and automated legal drafting tools designed to modernize workflow for elite law firms.", 
        img: img7, 
        alt: "LegalTech SaaS for automated case management" 
    },
    { 
        title: "HRTech Platforms", 
        desc: "Our team develops next-gen recruitment, automated payroll, and talent management SaaS platforms for distributed international teams.", 
        img: img8, 
        alt: "HRTech SaaS for recruitment and payroll management" 
    },
];

    // Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom SaaS Product Development",
        "serviceType": "SaaS Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd"
        },
        "description": "Accelerate market entry with high-performance SaaS solutions. We build secure, multi-tenant cloud architectures and MVPs designed for scalability and recurring revenue.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the typical timeline for a SaaS MVP?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Usually 12-16 weeks. We focus on core value features to get you to market fast, gathering real user data for Phase 2 development."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle platform scalability?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build on cloud-native architectures (AWS/Azure) using auto-scaling groups and load balancers to handle sudden traffic spikes without performance degradation."
                }
            },
            {
                "@type": "Question",
                "name": "Who owns the intellectual property (IP)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You do. Campaignsquat Ltd. transfers 100% of the source code and IP rights to you upon project completion. There are no hidden licensing fees."
                }
            },
            {
                "@type": "Question",
                "name": "Can you integrate with third-party APIs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We specialize in building API-first applications that connect seamlessly with CRM, ERP, and payment gateways like Stripe or Chargebee."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle post-launch maintenance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer dedicated SLA-driven support packages to ensure your platform remains secure, updated, and bug-free as your user base expands."
                }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom SaaS Product Development & Multi-tenant Cloud Solutions | Campaignsquat</title>
                <meta name="description" content="Accelerate market entry with high-performance SaaS solutions. We build secure, multi-tenant cloud architectures and MVPs designed for scalability and recurring revenue." />
                <link rel="canonical" href={window.location.href} />
                {/* Open Graph Tags */}
                <meta property="og:title" content="Custom SaaS Product Development & Multi-tenant Cloud Solutions" />
                <meta property="og:description" content="Accelerate market entry with secure, scalable SaaS architectures designed for market disruption." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={heroImage} />
                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20  overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]"> Scalable SaaS Product Development for Market Disruption Solutions </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal ">
                                Stop battling technical debt and rigid legacy systems. Campaignsquat Ltd. builds high-performance, cloud-native SaaS solutions designed to scale from MVP to enterprise-grade without compromising on speed or security. Our robust platforms ensure your long-term market success.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                 <button aria-label="Get started with SaaS development" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                 Get Started Now
                                 </button>
                             </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Scalable SaaS Product Development Services - Campaignsquat Ltd" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our SaaS Product Development Expertise Growth </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহার করে এক লাইনে ২টা করে ৪টি কার্ড সাজানো হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            alt={item.alt} 
                            loading="lazy"
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left invert" 
                            style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} 
                        />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light ">{item.desc}</p>
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
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h2>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light text-left max-w-[580px] ">{item.desc}</p>
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
            <section className="w-full bg-[#0A0A0A] py-12 md:py-20">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16   w-full">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our SaaS Product Development Cycle</h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-5xl mx-auto font-light">Cloud-native engineering cycles designed for high-speed innovation and massive scalability. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#02050A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img src={step.image} alt={step.alt} loading="lazy" className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <h3 className="text-white text-[22px] md:text-[24px] lg:text-[26px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light max-w-[280px] ">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-12 md:py-20 relative z-[1]">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                Why is Campaignsquat Ltd the best SaaS Solution Software & Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px] ">We engineer SaaS products that are resilient, easy to update, and ready to handle global demand without interruption.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center transition-all duration-300 group-hover:bg-[#F7A400]">
                                            <Check className="text-[#F7A400] group-hover:text-black w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                               <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                 <button aria-label="Contact us to start your SaaS project" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                    Get Started
                                 </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat SaaS Cloud-Native Excellence Architecture" loading="lazy" className="w-full h-auto max-h-[650px] object-contain shadow-2xl transition-all duration-700 hover:rotate-1" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific SaaS Development Expertise for Global Markets</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light "> Campaignsquat Ltd. provides expert SaaS product development for diverse industries to drive recurring success. We build scalable, high-performance cloud solutions that ensure seamless user journeys and robust backend stability across all your unique global business segments.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group cursor-pointer">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light opacity-70">{item.desc}</p>
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
    );
};

// Separated Questions Component
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
        {
            question: "What is the typical timeline for a SaaS MVP?",
            answer: "Usually 12-16 weeks. We focus on core value features to get you to market fast, gathering real user data for Phase 2 development."
        },
        {
            question: "How do you handle platform scalability?",
            answer: "We build on cloud-native architectures (AWS/Azure) using auto-scaling groups and load balancers to handle sudden traffic spikes without performance degradation."
        },
        {
            question: "Who owns the intellectual property (IP)?",
            answer: "You do. Campaignsquat Ltd. transfers 100% of the source code and IP rights to you upon project completion. There are no hidden licensing fees."
        },
        {
            question: "Can you integrate with third-party APIs?",
            answer: "Absolutely. We specialize in building API-first applications that connect seamlessly with CRM, ERP, and payment gateways like Stripe or Chargebee."
        },
        {
            question: "How do you handle post-launch maintenance?",
            answer: "We offer dedicated SLA-driven support packages to ensure your platform remains secure, updated, and bug-free as your user base expands."
        }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20 overflow-hidden font-poppins">
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

export default SaaSSolutions;