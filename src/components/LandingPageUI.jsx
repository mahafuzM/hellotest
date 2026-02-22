import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Required for SEO
import { Check, Plus, Minus } from 'lucide-react'; 

// ইমেজ ইমপোর্টসমূহ (Unchanged)
import heroImage from '../assets/images/High-fidelity landing page UI design prototype by Campaignsquat Ltd.webp';
import conversionIcon from '../assets/images/research.png';
import visualIcon from '../assets/images/ux-design (1).png';
import mobileIcon from '../assets/images/web-design.png';
import speedIcon from '../assets/images/3d-modeling.png'; 
import conversionImg from "../assets/images/Data-driven UI design for conversion optimization.webp";
import brandingImg from "../assets/images/Premium landing page visual design and aesthetics.webp";
import mobileFirstImg from "../assets/images/Mobile-first UX design for landing pages.webp";
import optimizationImg from "../assets/images/AB testing and landing page optimization layout.webp";
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

const LandingPageUI = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Data arrays remain unchanged for logic/content preservation
    const expertiseData = [
  {
    title: "High Conversion Layouts",
    desc: "We design conversion-centric layouts that guide visitors toward your primary call to action with zero distractions. Our team focuses on strategic element placement to ensure your landing page performs at its peak and drives massive business ROI.",
    img: conversionIcon,
    alt: "High Conversion Landing Page Layout Design"
  },
  {
    title: "Visual Storytelling Art",
    desc: "Crafting compelling visual narratives that capture attention and build trust within seconds of a page load. We use high-impact imagery and balanced white space to communicate your value proposition clearly to a diverse and global audience base.",
    img: visualIcon,
    alt: "Visual Storytelling and Branding for Landing Pages"
  },
  {
    title: "Fast Loading Interfaces",
    desc: "Our experts build lightweight and optimized designs that ensure rapid page speed and a smooth scrolling experience. We minimize technical bloat while maintaining a professional look to help lower bounce rates and improve your search rankings.",
    img: speedIcon,
    alt: "Fast Loading UI and Performance Optimization"
  },
  {
    title: "Mobile First Principles",
    desc: "Designing fully responsive landing pages that provide a seamless and professional experience on smartphones and tablets alike. We prioritize touch-friendly elements and fluid grids to ensure your brand looks perfect on every modern mobile device.",
    img: mobileIcon,
    alt: "Mobile First Responsive Landing Page Design"
  }
];

    const featureData = [
  {
    title: ["Data-Driven UI Design for Max Conversion"],
    desc: "A landing page has one job: results. We bypass just pretty design to focus on user psychology. By analyzing eye-tracking patterns and attention maps, Campaignsquat Ltd. positions your value proposition exactly where it triggers action. Our layouts are engineered to lower bounce rates and squeeze every bit of ROI from your marketing campaigns. We ensure your interface is a high-performance sales tool that captures every lead with professional precision.",
    img: conversionImg,
    reverse: false,
    alt: "Data-driven UI design for conversion optimization"
  },
  {
    title: ["Premium Aesthetics for Instant Brand Trust"],
    desc: "Trust is earned in milliseconds. We deliver high-fidelity visuals—from custom iconography to sophisticated motion—that make your business stand out. By maintaining a sharp, cohesive brand voice, we ensure that every visitor perceives your service as high-end, reliable, and superior to competitors, turning skeptics into confident advocates. We build professional visual narratives that establish absolute authority in your specific global market niche.",
    img: brandingImg,
    reverse: true,
    alt: "Premium landing page visual design and aesthetics"
  },
  {
    title: ["Mobile-First UX for Modern Global Audience"],
    desc: "With most traffic coming from mobile, responsive is not enough. We design for the thumb first. Our interfaces ensure readability, fast asset loading, and easy navigation on small screens, ensuring you never lose a lead because of a clumsy mobile experience. We build for the future where mobile performance is your primary competitive edge, ensuring your brand stays accessible and professional for every user on every device across the world today.",
    img: mobileFirstImg,
    reverse: false,
    alt: "Mobile-first UX design for landing pages"
  },
  {
    title: ["Built to Scale with Testing and Insights"],
    desc: "Design is a living process. We build landing pages using modular systems, making it effortless to run A/B tests on headlines or buttons. This iterative approach ensures your page evolves with user behavior, constantly self-optimizing for better performance over time while protecting your long-term investment. Campaignsquat Ltd. provides the technical flexibility needed to refine your professional conversion funnels based on real-world data data.",
    img: optimizationImg,
    reverse: true,
    alt: "A/B testing and landing page optimization layout"
  }
];

   const processSteps = [
    { 
        // Step 1: Strategic Audit
        title: "Strategic Audit", 
        description: "Analyzing your market, competitors, and user intent to build a solid conversion-focused roadmap today.", 
        image: discoveryImg, 
        alt: "Strategic landing page audit and market research for high conversion" 
    },
    { 
        // Step 2: Visual Blueprint
        title: "Visual Blueprint", 
        description: "Crafting high-precision wireframes to define the structural flow and hierarchy of critical information.", 
        image: designImg, 
        alt: "High-precision wireframe blueprint and information hierarchy mapping" 
    },
    { 
        // Step 3: High-Fidelity UI
        title: "High-Fidelity UI", 
        description: "Applying premium visuals and brand tokens to create a captivating and high-impact digital experience.", 
        image: iterationImg, 
        alt: "High-fidelity landing page UI design with premium brand visuals" 
    },
    { 
        // Step 4: Dev-Ready Handoff
        title: "Dev-Ready Handoff", 
        description: "Rigorous testing for speed before a seamless developer handoff with total asset ownership and support.", 
        image: handoffImg, 
        alt: "Developer ready handoff with speed testing and full asset ownership" 
    }
];

    const points = [
        "Conversion-Driven Strategic Layouts",
        "High-Impact, Above-the-Fold UI",
        "Social Proof & Trust-Building UX",
        "Performance-Optimized Loading Speed",
        "Pixel-Perfect Multi-Device Adaptability"
    ];

    const industryData = [
        { title: "SaaS & Tech", desc: " We design product-led landing page layouts focused on trial sign-ups and feature adoption to accelerate your software growth.", img: img1, altText: "SaaS landing page UI design example" },
        { title: "E-Commerce", desc: "Our experts build high-energy promo pages designed to drive immediate product sales and maximize retail conversion rates.", img: img2, altText: "E-commerce conversion landing page" },
        { title: "B2B Leads", desc: " We create trust-heavy landing pages for high-ticket consulting and professional services to capture high-quality business leads.", img: img3, altText: "B2B lead generation landing page" },
        { title: "Ed-Tech", desc: "Our team develops clear and engaging structures for course enrollments and webinars, optimizing the digital learning discovery process.", img: img4, altText: "Ed-tech course landing page design" },
        { title: "FinTech", desc: " We design secure and professional interfaces that simplify complex financial products to build user trust and drive applications.", img: img5, altText: "Fintech landing page UI layout" },
        { title: "Real Estate", desc: "Our designers craft immersive, visual-first pages for luxury listings and lead capture to transform property browsing into sales.", img: img6, altText: "Real estate luxury listing landing page" },
        { title: "Health & Care", desc: " We build patient-centric designs focusing on trust and easy appointment booking to streamline healthcare service discovery.", img: img7, altText: "Healthcare and medical landing page" },
        { title: "Ad Campaigns", desc: "We develop short, punchy direct-response pages for Google and Meta ads to ensure maximum ROI on your marketing spend.", img: img8, altText: "Ad campaign direct response landing page" },
    ];

    // Structured Data for SEO
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Landing Page UI Design Services",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Expert high-conversion landing page UI/UX design services specializing in conversion psychology and performance UI.",
        "areaServed": "Worldwide"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "How do you ensure the landing page increases conversion rates?", "acceptedAnswer": { "@type": "Answer", "text": "We use a data-driven approach based on AIDA principles. By optimizing visual hierarchy and placing strategic CTAs, we guide visitors toward your goal." }},
            { "@type": "Question", "name": "What is the typical timeline for a custom UI project?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects are completed in 2-3 weeks including audit, wireframing, and final high-fidelity UI design." }},
            { "@type": "Question", "name": "Do you provide copywriting and content for the landing page?", "acceptedAnswer": { "@type": "Answer", "text": "While our focus is UI/UX, we provide headline optimization and content structural planning to ensure design and copy work together." }},
            { "@type": "Question", "name": "Can you integrate the design with platforms like React or WordPress?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once finalized, our team can build the page in your preferred tech stack (React, Webflow, or WordPress)." }},
            { "@type": "Question", "name": "How do you handle A/B testing after the page is live?", "acceptedAnswer": { "@type": "Answer", "text": "We design using Atomic Design principles, allowing for easy swaps of sections or buttons for performance testing." }}
        ]
    };

    return (
        <HelmetProvider>
            <main className="overflow-hidden font-poppins bg-[#02050a]">
                <Helmet>
                    <title>Landing Page UI Design Services | Campaignsquat Ltd.</title>
                    <meta name="description" content="Elevate your ROI with high-conversion landing page UI design by Campaignsquat Ltd. Expert UX, mobile-first layouts, and pixel-perfect execution." />
                    <link rel="canonical" href="https://campaignsquat.com/landing-page-ui-design" />
                    <meta property="og:title" content="Landing Page UI Design Services | Campaignsquat Ltd." />
                    <meta property="og:description" content="Stop losing revenue to generic layouts. Get high-performing, visual-first landing pages engineered for ROI." />
                    <meta property="og:type" content="website" />
                    <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                </Helmet>

                {/* 1. Hero Section - Optimized LCP */}
                <section className="relative w-full flex items-center  mt-4 md:mt-20 overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                                <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] ">
                                    Custom Landing Page UI Design for High-Growth Global Companies
                                </h1>
                                <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal opacity-90">
                                    Stop losing potential revenue to generic layouts and poor UX. Campaignsquat Ltd. engineers high-performing, visual-first landing pages that blend psychological triggers with technical precision to drive ROI. Our User-centric design ensures every scroll leads to high-growth conversions.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                   <Link to="/home/contact" className="w-full sm:w-auto">
                                     <button aria-label="Get started with landing page design" className="bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                       Get Started Now
                                    </button>
                                 </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                                <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                                <img 
                                    src={heroImage} 
                                    alt="High-fidelity landing page UI design prototype by Campaignsquat Ltd." 
                                    loading="eager"
                                    fetchpriority="high"
                                    className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
                                />
                            </div>
                        </div>
                    </div>
                </section>
                 
                <section className="w-full overflow-hidden pt-20 md:pt-30 py-12 md:py-20 ">
                <BrandSlider />
            </section>

                {/* 2. Expertise Section - Added H2 */}
               <section className="bg-[#0A0A0A] py-12 md:py-20">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Strategic <span>Design Pillars</span></h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium">We utilize a data-driven approach to balance aesthetic excellence with business objectives.</p>
        </div>

        {/* lg:grid-cols-2 করার ফলে বড় স্ক্রিনে ১ লাইনে ২টি করে কার্ড থাকবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                   
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img src={item.img} alt={item.altText} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                    {/* একটি সাবলীল গ্লো ইফেক্ট যোগ করা হয়েছে যা হোভার করলে দেখা যাবে */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

                {/* 3. Features Section - Used H3 for Loop titles */}
                <section className="py-12 md:py-20">
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                        <div className="flex flex-col gap-24 md:gap-44">
                            {featureData.map((item, index) => (
                                <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                            {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                        </h3>
                                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light text-left max-w-[580px]">{item.desc}</p>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="relative group overflow-hidden rounded-[5px]">
                                            <img src={item.img} alt={item.altText} loading="lazy" className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Process Section - H2 for Section Title */}
                <section className="w-full bg-[#02050A] py-12 md:py-20">
                    <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  w-full">
                        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Landing Page UI Design Process</h2>
                            <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">From initial research to a high-converting live page, we follow a rigorous path to success. </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                    <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                        <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                        <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                            <img src={step.image} alt={step.altText} loading="lazy" className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
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

                {/* 5. Why Choose Section - H2 for Title */}
                <section className="py-12 md:py-20 relative z-[1]">
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                            <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Landing page UI/UX Design system service provider?</h2>
                                <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Our expert team specializes in creating landing pages that don't just look good, but actively grow your business by speaking directly to your audience's needs.</p>
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
                                      <button aria-label="Start your conversion optimization journey" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                        Get Started
                                       </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                                <div className="relative flex justify-center lg:justify-end">
                                    <img src={sideImg} alt="Campaignsquat Ltd landing page design excellence and conversion focus" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Industries Section - H3 for Loop titles */}
               <section className="py-12 md:py-20  relative z-10 overflow-hidden">
    {/* Animated Running Border Style Logic */}
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
                Our Industry-Specific Landing Page Design Expertise for Results
            </h2>
            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">
               Campaignsquat Ltd. provides expert custom landing page UI design for diverse industries to maximize user engagement. We build high-performance, conversion-focused layouts that ensure seamless user journeys and drive measurable business growth across all global market sectors.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {industryData.map((item, index) => (
                <div key={index} className="border-run-container group">
                    {/* Animated Border Wrapper */}
                    <div className="running-border"></div>
                    
                    {/* Main Content Area */}
                    <div className="card-content flex flex-col">
                        <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                            <img 
                                src={item.img} 
                                alt={item.altText} 
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
           
                <Questions />
            </main>
        </HelmetProvider>
    );
};

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do you ensure the landing page increases conversion rates?",
            answer: "We use a data-driven approach based on AIDA principles. By optimizing visual hierarchy, placing strategic CTAs, and reducing cognitive load, we guide visitors toward your goal effectively."
        },
        {
            question: "What is the typical timeline for a custom UI project?",
            answer: "Most projects are completed in 2-3 weeks. This includes our discovery audit, high-precision wireframing, and the final high-fidelity UI design ready for development."
        },
        {
            question: "Do you provide copywriting and content for the landing page?",
            answer: "While our core focus is UI/UX, we provide headline optimization and content structural planning to ensure the design and copy work together to build instant authority."
        },
        {
            question: "Can you integrate the design with platforms like React or WordPress?",
            answer: "Yes. Once the UI is finalized, our development team can build the page in your preferred tech stack (React, Webflow, or WordPress) ensuring pixel-perfect execution."
        },
        {
            question: "How do you handle A/B testing after the page is live?",
            answer: "We design using Atomic Design principles. This modularity allows you to easily swap sections or buttons for testing. We also analyze real user data to refine designs for peak performance."
        }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Expert Answers to Your Questions
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Quick insights into our strategic design and conversion process.
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

export default LandingPageUI;