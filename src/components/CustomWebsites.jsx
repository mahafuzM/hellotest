import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react'; 
import { Helmet } from 'react-helmet-async'; // Technical SEO

// Image imports (Same as provided)
import heroImage from '../assets/images/Campaignsquat Ltd premium custom dashboard and web design.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 
import architectureImg from "../assets/images/Bespoke UI UX design layout.webp";
import userJourneyImg from "../assets/images/Secure web infrastructure and encryption.webp";
import lowFidImg from "../assets/images/Optimized clean code web performance.webp";
import validationImg from "../assets/images/Business workflow automation integration.webp";
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

const CustomWebsites = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "Bespoke Front-End UI",
    desc: "We create unique and bespoke front-end interfaces that reflect your specific brand identity without using generic templates. Our team focuses on pixel-perfect layouts and smooth interactivity to ensure your site stands out in a crowded market.",
    img: architectureIcon,
    alt: "Bespoke Front-End UI and Custom Brand Identity"
  },
  {
    title: "Scalable Backend Logic",
    desc: "Developing robust and scalable backend systems designed to handle your specific business operations and data requirements. We build secure architectures that grow with your company while maintaining high-speed performance for all global users.",
    img: blueprintIcon,
    alt: "Scalable Backend Logic and Secure Web Architecture"
  },
  {
    title: "Tailored Digital Tools",
    desc: "Building custom features and specialized digital tools that solve your unique business challenges and streamline workflows. Our experts ensure that every functional element is built from scratch to provide a truly personalized user experience.",
    img: userFlowIcon,
    alt: "Tailored Digital Tools and Custom Business Workflows"
  },
  {
    title: "Advanced API Systems",
    desc: "Integrating advanced API solutions to ensure seamless connectivity between your custom website and third-party business software. We focus on secure data transmission and functional harmony to provide a high-performance digital ecosystem setup.",
    img: testingIcon,
    alt: "Advanced API Integration and Digital Ecosystem Connectivity"
  }
];

   const featureData = [
  {
    title: ["Bespoke Web Design and Tailor-Made Solutions"],
    desc: "Don’t let rigid themes define your brand. We offer bespoke web design services with total creative freedom, building unique UI/UX design for custom sites that competitors cannot replicate. At Campaignsquat Ltd., our tailor-made web solutions for brands ensure every pixel aligns with your vision. By avoiding generic templates, we create a professional identity that resonates with luxury markets and establishes long-term global brand authority.",
    img: architectureImg,
    reverse: false,
    alt: "Bespoke UI UX design layout with tailor-made brand elements"
  },
  {
    title: ["Scalable Custom Web Architecture for Firms"],
    desc: "Standard platforms are targets for mass attacks. At Campaignsquat Ltd., we build scalable custom web architecture for enterprises, making your data virtually impenetrable to common vulnerabilities. Our hand-coded web development for luxury brands focuses on proprietary security layers while maintaining high-speed performance. We provide a professional, secure environment that ensures your business remains resilient against evolving digital threats.",
    img: userJourneyImg,
    reverse: true,
    alt: "Secure custom web architecture and enterprise data encryption"
  },
  {
    title: ["AI-Driven Personalized Web Experiences Pro"],
    desc: "Most sites are slowed down by unnecessary plugins. We engineer AI-driven personalized web experiences that load in milliseconds, reducing bounce rates and keeping users engaged. By utilizing a zero-bloatware philosophy and hand-coded precision, we ensure your platform remains snappy. This technical accuracy improves search rankings while providing a professional, unique experience for every visitor through custom business website development.",
    img: lowFidImg,
    reverse: false,
    alt: "Optimized clean code web performance and AI-driven UI"
  },
  {
    title: ["Conversion-Optimized Bespoke Web Solutions"],
    desc: "Your website should work for you. We offer conversion-optimized bespoke web development that automates repetitive tasks like lead sorting and CRM syncing. By integrating smart workflows into your custom build, Campaignsquat Ltd. improves operational efficiency significantly. Our professional automation tools turn your bespoke site into a powerful asset that manages business logic with absolute speed, ensuring high-value growth for modern brands.",
    img: validationImg,
    reverse: true,
    alt: "Conversion-optimized bespoke web automation and CRM integration"
  }
];

    const processSteps = [
    { 
        // Step 1: Discovery & Strategy
        title: "Discovery & Strategy", 
        description: "Deep-diving into your business logic to define technical requirements and a solid project roadmap today.", 
        image: discoveryImg, 
        alt: "Custom website design discovery and technical roadmap planning" 
    },
    { 
        // Step 2: UX Engineering
        title: "UX Engineering", 
        description: "Designing conversion-led wireframes that guide users intuitively toward your key business goals always.", 
        image: designImg, 
        alt: "UX engineering and conversion-focused wireframe design for websites" 
    },
    { 
        // Step 3: Full-Stack Dev
        title: "Full-Stack Dev", 
        description: "Transforming designs into a high-performance reality using secure, clean, and scalable custom code daily.", 
        image: iterationImg, 
        alt: "Full-stack development with secure and scalable custom code architecture" 
    },
    { 
        // Step 4: Rigorous QA
        title: "Rigorous QA", 
        description: "Multi-device testing and performance tuning to ensure a flawless, high-speed launch every single time.", 
        image: handoffImg, 
        alt: "Rigorous quality assurance and multi-device performance testing" 
    }
];

    const points = ["100% Custom Visual Identity", "High-Performance Clean Code", "Scalable Modular Architecture", "Advanced API & Tool Integration", "Priority Post-Launch Maintenance"];

    const industryData = [
        { title: "FinTech Platforms", desc: "We build secure, high-performance banking portals with robust API integrations to ensure seamless financial transactions and data integrity.", img: img1, alt: "Enterprise web management portal" },
        { title: "E-commerce Systems", desc: " Our experts develop scalable full-stack retail stores with optimized databases to handle high traffic and ensure frictionless checkout flows.", img: img2, alt: "SaaS dashboard design development" },
        { title: "HealthTech Solutions", desc: " We create secure, HIPAA-compliant healthcare web applications featuring real-time data synchronization for patient management and consultations.", img: img3, alt: "Secure fintech web application" },
        { title: "EdTech Frameworks", desc: "Our team builds interactive learning management systems with custom backend architectures to support global student enrollment and content delivery.", img: img4, alt: "Logistics and tracking system interface" },
        { title: "SaaS Infrastructure", desc: " We design and develop complex B2B software architectures with scalable cloud integrations to power high-performance enterprise dashboards.", img: img5, alt: "Data analytics visualization dashboard" },
        { title: "Real Estate Portals", desc: "Our designers and developers craft feature-rich property marketplaces with advanced search logic and immersive visual integrations for global buyers.", img: img6, alt: "Public sector web portal development" },
        { title: "Logistics Networks", desc: " We build real-time supply chain tracking systems and automated fleet management tools to ensure speed and reliability in complex logistics.", img: img7, alt: "Streaming platform web design" },
        { title: "Enterprise Solutions", desc: "We develop tailor-made internal management systems and client portals designed for zero-friction corporate operations and maximum security.", img: img8, alt: "Ed-tech learning management system" }
    ];

    const faqs = [
        { question: "What is the average timeline for a custom build?", answer: "Most bespoke projects range from 8 to 12 weeks, depending on the complexity of the custom logic and third-party integrations required. This ensures a high-performance and bug-free delivery." },
        { question: "How do you handle post-launch support and updates?", answer: "Campaignsquat Ltd. provides dedicated maintenance packages, ensuring your custom architecture remains updated, secure, and compatible with new browser standards and security patches." },
        { question: "Will I be able to manage the content myself?", answer: "Absolutely. We build intuitive, custom CMS interfaces that allow your team to update text, images, and blogs easily without needing to touch a single line of code or deal with complex backends." },
        { question: "Can you integrate my existing CRM or ERP software?", answer: "Yes. Custom development allows us to build seamless API connections with any tool you currently use, such as Salesforce, HubSpot, or SAP, centralizing your business data and workflows." },
        { question: "How does a custom site improve my SEO compared to a template?", answer: "Custom sites have zero 'code bloat,' meaning faster speeds and cleaner site maps. This technical superiority gives you a massive advantage in Google’s Core Web Vitals and overall search rankings." }
    ];

    // Structured Data Construction
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Bespoke Custom Website Design & Development",
        "serviceType": "Web Development",
        "provider": { "@type": "Organization", "name": "Campaignsquat Ltd." },
        "description": "High-performance, custom-coded websites built for scale and security.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Custom Web Services",
            "itemListElement": expertiseData.map(item => ({
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": item.title, "description": item.desc }
            }))
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Bespoke Custom Website Design & Development for Growth | Campaignsquat Ltd.</title>
                <meta name="description" content="Elevate your brand with high-performance, custom-coded websites. Scale your business with bespoke UI/UX and secure architecture by Campaignsquat Ltd." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Bespoke Custom Website Design & Development | Campaignsquat Ltd." />
                <meta property="og:description" content="Stop settling for templates. We engineer scalable, secure, and high-performance custom web solutions." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center  mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">Bespoke Custom Website Design & Development Agency for Rapid Growth</h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                 Stop settling for rigid templates. Campaignsquat Ltd. engineers high-performance, scalable web solutions that eliminate technical debt. Our expert full-stack development transforms your digital presence into a measurable asset, ensuring seamless user journeys and global authority.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Start Your Custom Build" className="bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                        Start Your Custom Build
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%]  blur-[80px] rounded-full"></div>
                            {/* Performance: Eager loading and high fetchpriority for LCP */}
                            <img 
                                src={heroImage} 
                                alt="Campaignsquat Ltd premium custom dashboard and web design" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">H Our Custom Website Design & Development Expertise</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose. </p>
        </div>

        {/* গ্রিড লেআউট: ২-কলামে সেট করা হয়েছে (lg:grid-cols-2) */}
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
                    {/* গ্র্যাডিয়েন্ট গ্লো ইফেক্ট */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* 3. Features Section */}
            <section className="py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h2>
                                    <p className="text-white text-[18px] md:text-[20px] leading-relaxed font-light text-left max-w-[580px]">{item.desc}</p>
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6"> Our Custom Website Design Process </h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A disciplined, four-phase engineering approach designed to take your project to a reality. </p>
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
                                    <h3 className="text-white text-[16px] md:text-[18px] lg:text-[18px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light max-w-[280px]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-12 md:py-20  relative z-[1]">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10  ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Custom Website Degine Development service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We specialize in taking complex ideas and turning them into seamless, high-performance web applications that give you a competitive edge.</p>
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
                                    <button aria-label="Get Started with Campaignsquat" className="bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat website development excellence and scalability" loading="lazy" className="w-full h-auto max-h-[650px] object-contain " />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Web Design & Development Expertise</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light"> Campaignsquat Ltd. provides expert custom website design and development for diverse industries to drive digital success. We build scalable, high-performance web applications that ensure seamless user journeys and robust backend stability across all global business sectors.</p>
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
        
            <Questions faqs={faqs} />
        </main>
    );
};

// Separated Questions Component with Props for SEO data
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
                        Expert-level answers to proactively address your custom build concerns.
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

export default CustomWebsites;