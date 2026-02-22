import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/High-converting mobile and desktop landing page UI design showcase by Campaignsquat.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 
import architectureImg from "../assets/images/UI UX audit and visual hierarchy data analysis.webp";
import userJourneyImg from "../assets/images/High converting lead generation landing page layout.webp";
import lowFidImg from "../assets/images/CRM and sales funnel integration automation.webp";
import validationImg from "../assets/images/Social proof and trust signals web design.webp";
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import iterationImg from '../assets/images/web-design.png';
import handoffImg from '../assets/images/deployment.png';
import sideImg from '../assets/images/robust-web-development-and-industrial-expertise-showcase.webp';
import img1 from '../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp';
import img2 from '../assets/images/rpvu1v3dzk7wzyresb1u.jpg';
import img3 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img4 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7.webp';
import img5 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp';
import img6 from '../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp';
import img7 from '../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png';
import img8 from '../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp';
import BrandSlider from './BrandSlider';

const LandingPages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "High-Converting Layout",
    desc: "We create landing pages designed for high conversion rates by focusing on strategic call-to-action placement. Our team ensures that your value proposition is clear and compelling to drive more leads and maximize your digital advertising budget.",
    img: architectureIcon,
    alt: "High-Converting Landing Page Layout and CTA Strategy"
  },
  {
    title: "Performance-Ready Tech",
    desc: "Developing lightweight and fast-loading pages that prevent user bounce while improving your search engine rankings. We utilize clean code and optimized assets to ensure a smooth scrolling experience for all visitors across every global market.",
    img: blueprintIcon,
    alt: "Performance-Ready Tech and Page Speed Optimization"
  },
  {
    title: "Mobile-First Building",
    desc: "Building fully responsive landing pages that provide a professional experience on smartphones and tablets. We prioritize mobile usability to capture the growing number of mobile users and ensure your brand looks perfect on all modern devices.",
    img: userFlowIcon,
    alt: "Mobile-First Landing Page Development and Usability"
  },
  {
    title: "Lead Capture Systems",
    desc: "Integrating advanced lead capture forms and tracking tools to help you monitor and grow your customer base effectively. Our team ensures that every functional element is secure and optimized for a seamless and professional user journey path.",
    img: testingIcon,
    alt: "Lead Capture Systems and Conversion Tracking Integration"
  }
];
    const featureData = [
  {
    title: ["High-Converting Landing Page Design Pro"],
    desc: "Stop guessing what your users want. Campaignsquat Ltd. specializes in high-converting landing page design by utilizing eye-tracking and heat-map data. Our conversion rate optimized (CRO) landing pages prioritize critical info through a strict visual hierarchy, reducing friction. We ensure your value proposition is the first thing users remember, turning your B2B lead capture landing pages into high-performance tools that deliver clear results.",
    img: architectureImg,
    reverse: false,
    alt: "High-converting landing page design with eye-tracking data analysis"
  },
  {
    title: ["Sales Funnel Landing Page Development"],
    desc: "Clarity is the ultimate conversion tool. We offer sales funnel landing page development that focuses entirely on your one big offer. Our SaaS landing page design services are built for high-stakes growth, ensuring every headline and ad-to-page relevance optimization works in tandem. We focus on performance-focused landing page development that maximizes your ROI and captures leads with absolute precision across all your marketing channels.",
    img: userJourneyImg,
    reverse: true,
    alt: "Sales funnel landing page development for high-stakes conversion"
  },
  {
    title: ["Custom Lead Generation Landing Pages Kit"],
    desc: "A platform is only as good as the data it captures. We provide custom lead generation landing pages with native CRM integration to ensure your sales pipeline is updated in real-time. By automating the lead-to-CRM handoff, Campaignsquat Ltd. enables your team to respond to inquiries instantly. Our technical development ensures your professional backend is powerful, supporting e-commerce product launch landing pages with total stability today.",
    img: lowFidImg,
    reverse: false,
    alt: "Custom lead generation landing page with CRM integration automation"
  },
  {
    title: ["Performance-Focused Landing Page Growth"],
    desc: "We eliminate buyers remorse by strategically placing social proof and trust badges. Our performance-focused landing page development includes a framework that highlights credibility at the exact moment of decision-making. This psychological reinforcement is key for converting cold traffic into loyal advocates. Campaignsquat Ltd. ensures your professional web presence radiates authority, helping you scale your business with absolute trust and speed.",
    img: validationImg,
    reverse: true,
    alt: "Performance-focused landing page growth with social proof and trust signals"
  }
];

   const processSteps = [
    { 
        // Step 1: Strategy & Mapping
        title: "Strategy & Mapping", 
        description: "Analyzing traffic sources to create a seamless transition from the very first ad-click to page arrival.", 
        image: discoveryImg, 
        alt: "Strategic traffic source analysis and ad-to-page journey mapping" 
    },
    { 
        // Step 2: Core Wireframing
        title: "Core Wireframing", 
        description: "Structural blueprints focused on user flow and narrative before we even touch the actual visual design.", 
        image: designImg, 
        alt: "Structural landing page wireframing and conversion narrative planning" 
    },
    { 
        // Step 3: Custom Development
        title: "Custom Development", 
        description: "Clean, lightweight code built for speed, accessibility, and flawless tracking pixel installation today.", 
        image: iterationImg, 
        alt: "Custom lightweight development with tracking pixel and speed optimization" 
    },
    { 
        // Step 4: Launch & Optimization
        title: "Launch & Optimization", 
        description: "Rigorous QA testing and speed optimization to ensure your page dominates from the moment it goes live.", 
        image: handoffImg, 
        alt: "Landing page launch quality assurance and live performance optimization" 
    }
];

    const points = ["Conversion-Driven Design", "Bespoke Visual Identity", "Smart Lead-Capture Forms", "Meta & Google Ad Ready", "Full Tracking Integration"];

    const industryData = [
        { title: "SaaS & App Signups", desc: " We develop high-speed landing pages designed to drive free trials and software downloads through optimized technical performance.", img: img1, alt: "SaaS landing page for software signups" },
        { title: "Service Lead-Gen", desc: "Our experts build high-quality inquiry forms for agencies and clinics, ensuring seamless data capture and CRM integration.", img: img2, alt: "Lead generation page for service businesses" },
        { title: "Product Launches", desc: "We create high-impact, full-stack pages for new digital products and physical goods to maximize initial market penetration.", img: img3, alt: "Product launch landing page design" },
        { title: "Webinar Funnels", desc: "Our team develops high-performance registration pages for online events, ensuring a frictionless signup experience for global attendees.", img: img4, alt: "Webinar registration funnel design" },
        { title: "Real Estate Portals", desc: "We craft immersive landing pages featuring advanced inquiry forms and scheduling tools to transform property browsing into leads.", img: img5, alt: "Real estate lead capture landing page" },
        { title: "Medical & Health", desc: "Our developers build professional, trust-focused pages with secure appointment booking systems for modern patient consultations.", img: img6, alt: "Healthcare and medical clinic landing page" },
        { title: "Course Sales", desc: "We design and develop persuasive long-form layouts built to sell online courses and memberships through optimized sales logic.", img: img7, alt: "E-learning and online course sales page" },
        { title: "Newsletter Growth", desc: "Our team builds minimalist, lightning-fast opt-in pages optimized for rapid email list building and high-performance marketing.", img: img8, alt: "Email newsletter signup landing page" },
    ];

    // Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Landing Page Design & Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Drive more ROI with high-converting landing page design & development services. Psychology-driven, mobile-optimized, and built for leads.",
        "areaServed": "Worldwide",
        "serviceType": "Web Design & Marketing"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "How long does the design and development process take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard high-performance page typically takes 10-14 business days, including strategy, design, and technical integration." } },
            { "@type": "Question", "name": "Will my landing page load fast enough for paid ads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, speed is our priority. Slow pages kill conversions and increase your ad costs. We develop ultra-lightweight pages that load in under 2 seconds." } },
            { "@type": "Question", "name": "Can you integrate the leads with my CRM?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in seamless API integrations with HubSpot, Salesforce, Zoho, Mailchimp, or any other tool you use." } },
            { "@type": "Question", "name": "Do I own the final code and design assets?", "acceptedAnswer": { "@type": "Answer", "text": "100%. Campaignsquat Ltd. provides full ownership of all source code and design files upon project completion." } },
            { "@type": "Question", "name": "Are these pages optimized for mobile users?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, every landing page we build is 'Mobile-First' to ensure a flawless experience for the majority of ad traffic." } }
        ]
    };

    return (
        <HelmetProvider>
            <main className="overflow-hidden font-poppins bg-[#02050a]">
                <Helmet>
                    <title>Landing Page Design & Development | Campaignsquat Ltd.</title>
                    <meta name="description" content="Drive more ROI with high-converting landing page design & development services from Campaignsquat Ltd. Psychology-driven, mobile-optimized, and built for leads." />
                    <link rel="canonical" href={window.location.href} />
                    <meta property="og:title" content="Landing Page Design & Development | Campaignsquat Ltd." />
                    <meta property="og:description" content="Psychology-driven, mobile-optimized landing pages built to convert your ad spend into revenue." />
                    <meta property="og:type" content="website" />
                    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                </Helmet>

                {/* 1. Hero Section */}
                <section className="relative w-full flex items-center   mt-4 md:mt-20 overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                                <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                                    Custom Landing Page Design & Development for High-Growth Brands
                                </h1>
                                <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                    Stop losing potential revenue with high-impact landing pages. Campaignsquat Ltd. combines psychology-driven UX with high-performance code to transform your ad spend into measurable growth. Our full-stack expertise ensures every scroll leads to a high-converting action for you.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                    <Link to="/home/contact" className="w-full sm:w-auto">
                                        <button aria-label="Launch Your High-Converting Page" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                            Launch Your High-Converting Page
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                                <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                                <img 
                                    src={heroImage} 
                                    alt="High-converting mobile and desktop landing page UI design showcase by Campaignsquat" 
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
               <section className="bg-[#0A0A0A] py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Landing Page Design & Development Expertise </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 করে দেওয়া হয়েছে যাতে বড় স্ক্রিনে প্রতিটি কার্ড ৫০% উইডথ পায় */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img loading="lazy" src={item.img} alt={item.alt} className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110 origin-left invert-[71%] sepia-[85%] saturate-[945%] hue-rotate-[354deg] brightness-[102%] contrast(101%)" />
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
                                            <img loading="lazy" src={item.img} alt={item.alt} className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" />
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Landing Page Design Process Pro</h2>
                            <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">A battle-tested workflow designed to move your project from initial concept to live launch. </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                    <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                        <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                        <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                            <img loading="lazy" src={step.image} alt={step.alt} className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
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
                                <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Landing page Development service provider?</h2>
                                <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">We don't build generic pages. We build high-speed, high-conversion marketing assets that give you a definitive edge over your competition.</p>
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
                                        <button aria-label="Get Started with Landing Page Design" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                                <div className="relative flex justify-center lg:justify-end">
                                    <img loading="lazy" src={sideImg} alt="Campaignsquat high performance landing page excellence" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                    <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Industries Section */}
               <section className="py-12 md:py-20  relative z-10 overflow-hidden">
    {/* Running Border Styles */}
    <style>{`
        @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
        .border-run-container:hover .running-border { opacity: 1; }
        .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
        .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
    `}</style>

    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
                Our Industry-Specific Landing Page Development Expertise
            </h2>
            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">
                Campaignsquat Ltd. provides expert custom landing page design and development for diverse industries to maximize conversions. We build scalable, high-performance layouts that ensure seamless user journeys and robust backend stability across all global business sectors.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {industryData.map((item, index) => (
                <div key={index} className="border-run-container group">
                    {/* Border Animation Element */}
                    <div className="running-border"></div>

                    {/* Card Body */}
                    <div className="card-content flex flex-col">
                        <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                            <img 
                                loading="lazy" 
                                src={item.img} 
                                alt={item.alt} 
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
        { question: "How long does the design and development process take?", answer: "A standard high-performance page typically takes 10-14 business days, including strategy, design, and technical integration." },
        { question: "Will my landing page load fast enough for paid ads?", answer: "Yes, speed is our priority. Slow pages kill conversions and increase your ad costs. We develop ultra-lightweight pages that load in under 2 seconds, ensuring you don't lose leads due to lag." },
        { question: "Can you integrate the leads with my CRM?", answer: "Absolutely. We specialize in seamless API integrations with HubSpot, Salesforce, Zoho, Mailchimp, or any other tool you use. This allows for instant lead notifications and automated follow-ups." },
        { question: "Do I own the final code and design assets?", answer: "100%. Unlike \"page builder\" agencies, Campaignsquat Ltd. provides full ownership of all source code and design files (100% source assets) upon project completion." },
        { question: "Are these pages optimized for mobile users?", answer: "Yes, every landing page we build is 'Mobile-First.' Since most ad traffic comes from mobile devices, we ensure the mobile experience is flawless, with responsive layouts and easy-to-tap buttons." }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Just Ask Us Some Questions
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Expert answers to help you scale with confidence.
                    </p>
                </div>
                <div className="space-y-4 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`border transition-all duration-300 rounded-[5px] md:rounded-[5px] ${openIndex === index ? 'border-[#f7a400] bg-[#0A0A0A]' : 'border-[#02050a] bg-[#0A0A0A] hover:border-[#f7a400]'}`}>
                            <button aria-expanded={openIndex === index} className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                                <span className="text-[15px] md:text-[18px] font-semibold leading-tight transition-colors duration-300 pr-4 text-white">{faq.question}</span>
                                <span className="shrink-0">{openIndex === index ? (<div className="bg-[#f7a400] p-1 md:p-1.5 rounded-full"><Minus size={18} className="md:w-[22px] md:h-[22px]" strokeWidth={3} color="black" /></div>) : (<div className="bg-white/10 p-1 md:p-1.5 rounded-full"><Plus size={18} className="md:w-[18px] md:h-[18px]" strokeWidth={3} color="white" /></div>)}</span>
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

export default LandingPages;