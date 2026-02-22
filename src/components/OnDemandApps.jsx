import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// images inputs
import heroImage from '../assets/images/Mobile App Dashboard showcasing On-Demand App Development Services by Campaignsquat Ltd.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Professional Mobile App UX Audit Services.webp";
import accessibilityImg from "../assets/images/Scalable Cloud Infrastructure for On-Demand Apps.webp";
import businessImg from "../assets/images/Cross Platform iOS and Android App Development.webp";
import scalableImg from "../assets/images/Seamless Design to Development Workflow.webp";
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

const OnDemandApps = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  {
    title: "Instant Service Matching",
    desc: "We build powerful algorithms that connect users with nearby service providers in real-time. Our team focus remains on reducing latency and ensuring high-speed matches to provide a professional and seamless experience for your global customers.",
    img: researchIcon,
    alt: "Instant Service Matching and Real-time Algorithms"
  },
  {
    title: "Real-Time Geo-Tracking",
    desc: "Integrating advanced GPS and map solutions to provide accurate live tracking for every service request. We prioritize technical precision to ensure that your users can monitor progress instantly within a secure and professional digital environment.",
    img: uxIcon,
    alt: "Real-Time Geo-Tracking and GPS Integration"
  },
  {
    title: "Secure In-App Payments",
    desc: "Implementing robust payment gateways that support instant transactions and digital wallets securely. Our experts design frictionless checkout flows to ensure a professional financial experience while maintaining absolute data integrity and safety.",
    img: auditIcon,
    alt: "Secure In-App Payments and Encrypted Transactions"
  },
  {
    title: "Scalable Cloud Backend",
    desc: "Developing flexible cloud architectures designed to handle sudden traffic spikes and massive user data efficiently. We ensure your on-demand platform stays stable and fast as your business expands across different global markets and regions today.",
    img: webIcon,
    alt: "Scalable Cloud Backend and Traffic Management"
  }
];
   const featureData = [
    {
        // Section 1: AI Predictive Service Matching
        title: ["On-Demand App", "Development and AI Matching"],
        desc: "Stop losing users at checkout. Campaignsquat Ltd. provides on-demand app development with predictive demand-supply matching and automated dispatch. Our deep-dive UX audits identify friction points, ensuring your custom on-demand healthcare app development with AI triage or home service platform delivers a frictionless experience. We transform confusing interfaces into streamlined pathways, boosting engagement through smart service workflows today.",
        img: uxAuditImg,
        alt: "On-demand app development with AI service matching interface",
        reverse: false,
    },
    {
        // Section 2: High-Volume Scalable Architecture
        title: ["Scalable On-Demand", "Logistics Apps for 2026"],
        desc: "Prepare for explosive growth with scalable on-demand logistics apps for last-mile delivery. We build platforms with a scalable architecture that handles thousands of concurrent requests and dynamic surge pricing algorithms without latency. Whether it is an Uber-like app development or tutor booking, your infrastructure remains stable and secure. Campaignsquat Ltd. ensures professional, cloud-native foundations that protect your global revenue assets.",
        img: accessibilityImg,
        alt: "Scalable architecture for high-volume logistics and delivery apps",
        reverse: true,
    },
    {
        // Section 3: Geolocation and Tracking Mastery
        title: ["Cross-Platform On-Demand", "Tracking Solutions"],
        desc: "Reach your audience everywhere with cross-platform on-demand solutions with real-time tracking. We utilize hyper-local geolocation services to deliver native-like performance on both iOS and Android from a single codebase. This approach reduces your time-to-market while ensuring high-quality instant service app solutions. Campaignsquat Ltd. delivers professional marketplace application development that offers 100% accuracy on every device today.",
        img: businessImg,
        alt: "Cross-platform tracking and geolocation interface for on-demand apps",
        reverse: false,
    },
    {
        // Section 4: Biometric Security and Deployment
        title: ["White Label On-Demand", "Clones and Security"],
        desc: "Eliminate gaps and accelerate launch by hiring dedicated developers for white-label on-demand clones. We implement in-app behavioral biometric security and contactless service workflows to build user trust. Our meticulous design-to-dev handoff ensures that bespoke on-demand platforms for home services are delivered on schedule. Campaignsquat Ltd. provides professional engineering that guarantees a stable, future-ready launch for your global business.",
        img: scalableImg,
        alt: "Secure white-label on-demand app clone with biometric authentication",
        reverse: true,
    },
];

    const processSteps = [
    { 
        // Step 1: Market Intelligence
        title: "Market Intelligence", 
        description: "Deep-dive analysis of user demand and competitor data to define a high-impact technical roadmap for success.", 
        image: discoveryImg, 
        alt: "On-demand market intelligence and technical roadmap analysis" 
    },
    { 
        // Step 2: Rapid Prototyping
        title: "Rapid Prototyping", 
        description: "Designing high-fidelity wireframes that visualize the user journey and core logic before coding starts now.", 
        image: designImg, 
        alt: "High-fidelity on-demand app prototyping and user journey visualization" 
    },
    { 
        // Step 3: Agile Engineering
        title: "Agile Engineering", 
        description: "Iterative development cycles focusing on secure payment logic and real-time tracking for a stable ecosystem.", 
        image: iterationImg, 
        alt: "Agile on-demand engineering with real-time tracking and payment logic" 
    },
    { 
        // Step 4: Quality and Launch
        title: "Quality and Launch", 
        description: "Rigorous multi-device testing followed by a managed launch on the App Store to ensure seamless user growth.", 
        image: handoffImg, 
        alt: "Multi-device app testing and managed App Store deployment for growth" 
    }
];

    const points = ["Zero-Latency Notifications", "Geo-fencing Technology", "Automated Billing & Tax", "Verification Workflows", "Multi-Language Support"];

    const industryData = [
    { 
        title: "Ride-Hailing Tech", 
        desc: "We build Uber-style applications for cars and bikes featuring advanced logistics management and real-time driver dispatching.", 
        img: img1, 
        alt: "On-Demand Ride Hailing App Development" 
    },
    { 
        title: "Home Services", 
        desc: "Our experts develop on-demand platforms for plumbing, cleaning, and electrical repairs with instant professional matching.", 
        img: img2, 
        alt: "On-Demand Home Services App Solution" 
    },
    { 
        title: "Delivery & Courier", 
        desc: "We create hyper-local delivery services featuring real-time parcel tracking and automated route optimization for rapid fulfillment.", 
        img: img3, 
        alt: "Courier and Food Delivery App Development" 
    },
    { 
        title: "Health on Demand", 
        desc: "Our team builds platforms for instant doctor consultations and nursing care at home with secure data structures.", 
        img: img4, 
        alt: "Telemedicine and On-Demand Healthcare App" 
    },
    { 
        title: "Beauty Services", 
        desc: "We develop on-demand apps for salons and professional makeup artists to provide elite services at the user's doorstep.", 
        img: img5, 
        alt: "On-Demand Beauty and Salon App Services" 
    },
    { 
        title: "Car Assistance", 
        desc: "Our designers craft emergency roadside assistance and on-demand car wash applications featuring instant GPS location sharing.", 
        img: img6, 
        alt: "On-Demand Car Wash and Towing App" 
    },
    { 
        title: "Tutor & Coaching", 
        desc: "We build instant-access portals for learning or professional help to connect students with global experts in real-time.", 
        img: img7, 
        alt: "On-Demand Tutoring and E-learning App" 
    },
    { 
        title: "Errand Services", 
        desc: "Our team develops personal assistant applications to handle daily tasks and errands with intuitive task management tools.", 
        img: img8, 
        alt: "On-Demand Errand and Personal Assistant App" 
    },
];
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "On-Demand App Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Elevate your business with expert on-demand app development. We build scalable, user-centric mobile solutions designed for high conversion.",
        "serviceType": "Mobile App Development"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do you handle project pricing for custom on-demand apps?",
                "acceptedAnswer": { "@type": "Answer", "text": "We offer milestone-based pricing tailored to your specific feature set, ensuring full transparency and budget control from the initial discovery phase all the way to final deployment." }
            },
            {
                "@type": "Question",
                "name": "What is the typical timeline for an MVP launch?",
                "acceptedAnswer": { "@type": "Answer", "text": "Depending on the complexity, we aim for a 12-16 week development cycle for a robust MVP. This allows you to enter the market quickly, gather real user data, and iterate based on actual demand." }
            },
            {
                "@type": "Question",
                "name": "How many revision rounds are included in the design phase?",
                "acceptedAnswer": { "@type": "Answer", "text": "Our process includes three dedicated iterative revision cycles. This ensures that the final UI/UX aligns perfectly with your brand identity and meets the high expectations of your target users." }
            },
            {
                "@type": "Question",
                "name": "Can your architecture scale if our user base grows rapidly?",
                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We utilize cloud-native, auto-scaling infrastructure (such as AWS or Google Cloud) specifically designed to handle sudden spikes in on-demand traffic and concurrent user requests seamlessly." }
            },
            {
                "@type": "Question",
                "name": "What post-launch support do you provide?",
                "acceptedAnswer": { "@type": "Answer", "text": "Campaignsquat Ltd. provides 90 days of 'hyper-care' support post-launch. This includes critical bug fixes, security updates, and performance monitoring to ensure your transition to a live environment is flawless." }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>On-Demand App Development Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Elevate your business with expert on-demand app development. We build scalable, user-centric mobile solutions designed for high conversion. Get a quote today!" />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="On-Demand App Development Services | Campaignsquat Ltd." />
                <meta property="og:description" content="Elevate your business with expert on-demand app development. We build scalable, user-centric mobile solutions designed for high conversion." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center  mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                                Custom On-Demand App Development for Scalable Growth
                            </h1>
                            <p className="text-white text-[18px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Overcome market entry barriers with Campaignsquat Ltd. We engineer high-performance, user-centric on-demand applications that bridge the gap between complex business logic and seamless digital experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto" aria-label="Navigate to contact page to launch your app project">
                                    <button className="w-full sm:w-auto bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Launch Your App Project
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Mobile App Dashboard showcasing On-Demand App Development Services by Campaignsquat Ltd." 
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
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center">
        <div className="mb-20 ">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] leading-[1.2] md:leading-[1.4] font-bold mb-6"> 
                Our On-Demand App Development Expertise Growth 
            </h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium ">
               We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose. 
            </p>
        </div>

        {/* lg:grid-cols-2 ব্যবহারের ফলে কার্ডগুলো এখন চওড়া হয়ে এক লাইনে দুটি করে বসবে */}
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
            <section className="py-12 md:py-20">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic On-Demand App Cycle</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A disciplined, four-stage approach to engineering high-performance and scalable app solutions.</p>
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                Why is Campaignsquat Ltd the best On Demand Mobile Apps Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Don't just compete—dominate. Campaignsquat builds the technical foundation you need to scale your on-demand business and provide superior service.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" aria-hidden="true" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto" aria-label="Get started with on-demand app development">
                                    <button className="w-full sm:w-auto bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                      Get Started
                                  </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Optimized On-Demand Business Operations and Efficiency" loading="lazy" className="w-full h-auto max-h-[650px] object-contain shadow-2xl" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Industry-Specific On-Demand App Expertise for Global Success</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">: Campaignsquat Ltd. provides expert on-demand app development for diverse industries to drive digital success. We build scalable, high-performance instant solutions that ensure seamless user journeys and robust backend stability across all your global business sectors and platforms. </p>
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
        {
            question: "How do you handle project pricing for custom on-demand apps?",
            answer: "We offer milestone-based pricing tailored to your specific feature set, ensuring full transparency and budget control from the initial discovery phase all the way to final deployment."
        },
        {
            question: "What is the typical timeline for an MVP launch?",
            answer: "Depending on the complexity, we aim for a 12-16 week development cycle for a robust MVP. This allows you to enter the market quickly, gather real user data, and iterate based on actual demand."
        },
        {
            question: "How many revision rounds are included in the design phase?",
            answer: "Our process includes three dedicated iterative revision cycles. This ensures that the final UI/UX aligns perfectly with your brand identity and meets the high expectations of your target users."
        },
        {
            question: "Can your architecture scale if our user base grows rapidly?",
            answer: "Absolutely. We utilize cloud-native, auto-scaling infrastructure (such as AWS or Google Cloud) specifically designed to handle sudden spikes in on-demand traffic and concurrent user requests seamlessly."
        },
        {
            question: "What post-launch support do you provide?",
            answer: "Campaignsquat Ltd. provides 90 days of 'hyper-care' support post-launch. This includes critical bug fixes, security updates, and performance monitoring to ensure your transition to a live environment is flawless."
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

export default OnDemandApps;