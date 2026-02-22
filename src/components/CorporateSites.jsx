import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Required for SEO
import BrandSlider from './BrandSlider';

// Image Imports
import heroImage from '../assets/images/Enterprise corporate website interface design by Campaignsquat Ltd.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 
import architectureImg from "../assets/images/Authority Driven Digital Headquarters Design.webp";
import userJourneyImg from "../assets/images/Corporate Content Hierarchy and Navigation.webp";
import lowFidImg from "../assets/images/Enterprise Search and Resource Hub Interface.webp";
import validationImg from "../assets/images/Global Localization and Multi-region Support.webp";
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

const CorporateSites = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
const expertiseData = [
  {
    title: "Enterprise Solutions",
    desc: "We build robust enterprise-grade websites designed to handle complex business operations and large user traffic. Our team focuses on creating a secure and stable digital environment that reflects your corporate authority in the global market.",
    img: architectureIcon,
    alt: "Enterprise Solutions for Complex Corporate Operations"
  },
  {
    title: "Professional Branding",
    desc: "Establishing a consistent and professional visual identity that aligns perfectly with your corporate brand values. We ensure that every design element communicates trust and reliability to your stakeholders and partners across all platforms.",
    img: blueprintIcon,
    alt: "Professional Branding and Visual Corporate Identity"
  },
  {
    title: "Scalable Architecture",
    desc: "Developing a clean and scalable code architecture that allows your corporate site to expand as your business grows. Our experts prioritize high-performance structures that remain fast and easy to maintain while supporting future digital goals.",
    img: userFlowIcon,
    alt: "Scalable Architecture for Corporate Growth"
  },
  {
    title: "Secure Data Management",
    desc: "Implementing advanced security protocols to protect your sensitive corporate data and ensure user privacy. We build custom backend systems that are highly secure and optimized for seamless integration with your existing internal business tools.",
    img: testingIcon,
    alt: "Secure Data Management and Privacy Protocols"
  }
];

  const featureData = [
  {
    title: ["B2B Corporate Website Solutions and Identity"],
    desc: "Your website is your most critical asset. We architect enterprise-grade website development projects that command industry respect. Our corporate digital identity design builds immediate trust with global stakeholders, ensuring your digital presence reflects true market leadership and operational excellence. Campaignsquat Ltd. builds full-cycle corporate web development frameworks that support long-term goals and deliver high-performance architecture.",
    img: architectureImg,
    reverse: false,
    alt: "Authority Driven Digital Headquarters Design"
  },
  {
    title: ["Custom Stakeholder Engagement Portals Tech"],
    desc: "Complexity requires clarity. We engineer investor relations website development and custom stakeholder engagement portals that allow partners to access critical info in seconds. Our data-driven content architectures enhance brand professionalism through seamless CRM integration for corporate web platforms. Campaignsquat Ltd. ensures that even complex data is presented clearly, maintaining a high-end feel for your professional global organization.",
    img: userJourneyImg,
    reverse: true,
    alt: "Corporate Content Hierarchy and Navigation"
  },
  {
    title: ["Secure Corporate Portals with Encryption"],
    desc: "For data-heavy organizations, we build secure corporate portals with multi-layer encryption and AI-integrated corporate knowledge bases. Effortlessly manage news archives and reports with high-performance architecture for corporate sites. We ensure GDPR and data privacy optimized websites that protect sensitive info. Campaignsquat Ltd. provides the technical tools needed to maintain a professional digital archive that is both functional and secure.",
    img: lowFidImg,
    reverse: false,
    alt: "Enterprise Search and Resource Hub Interface"
  },
  {
    title: ["Multi-Regional Corporate Web Management"],
    desc: "Expand your reach without losing brand consistency. We offer multi-regional corporate website management and ADA/WCAG accessible corporate design that serve localized content globally. Our technical execution allows your message to transcend borders seamlessly while maintaining a unified identity. Campaignsquat Ltd. ensures your professional brand remains consistent and authoritative in every local market, providing a stable foundation for growth.",
    img: validationImg,
    reverse: true,
    alt: "Global Localization and Multi-region Support"
  }
];

    const processSteps = [
    { 
        // Step 1: Strategic Discovery
        title: "Strategic Discovery", 
        description: "Deep-dive alignment with stakeholder objectives to map out the corporate digital roadmap and core KPIs.", 
        image: discoveryImg, 
        alt: "Corporate strategic discovery and digital roadmap alignment" 
    },
    { 
        // Step 2: Governance & Logic
        title: "Governance & Logic", 
        description: "Defining secure content workflows, user permissions, and high-level data structural integrity always.", 
        image: designImg, 
        alt: "Secure content governance and data structural integrity mapping" 
    },
    { 
        // Step 3: Enterprise Build
        title: "Enterprise Build", 
        description: "Developing within robust, scalable frameworks designed for maximum stability, security, and performance.", 
        image: iterationImg, 
        alt: "Enterprise-grade web development for stability and security" 
    },
    { 
        // Step 4: Compliance & QA
        title: "Compliance & QA", 
        description: "Rigorous testing for global accessibility, security protocols, and institutional standards for launch.", 
        image: handoffImg, 
        alt: "Global accessibility compliance and security protocol testing" 
    }
];
    const industryData = [
        { title: "Financial Services", desc: "EWe build encrypted, high-security platforms for global banking and investment firms to ensure data safety and client trust.", img: img1, alt: "Financial Services Digital Platform" },
        { title: "Legal Institutions", desc: " Our experts develop an authoritative digital presence for elite law firms and legal consultancies focusing on professional credibility.", img: img2, alt: "Legal Institution Website Design" },
        { title: "Energy & Utilities", desc: "We create complex data-driven portals for large-scale industrial providers to manage extensive information and user reporting.", img: img3, alt: "Energy and Utilities Enterprise Portal" },
        { title: "Tech Corporations", desc: "Our team builds high-performance showcases for enterprise SaaS and software leaders to highlight their market-leading solutions.", img: img4, alt: "Technology Corporation Showcase" },
        { title: "Construction Giants", desc: " We design heavyweight portfolios showcasing massive infrastructure and urban projects with absolute visual precision.", img: img5, alt: "Construction Enterprise Portfolio" },
        { title: "Healthcare Corps", desc: ": Our developers build trust-centric, HIPAA-ready platforms for hospital networks and biotech firms to streamline institutional communication.", img: img6, alt: "Healthcare Corporate Solutions" },
        { title: "Logistics Hubs", desc: " We develop end-to-end visibility solutions for global supply chain and logistics operations to ensure operational efficiency.", img: img7, alt: "Logistics and Supply Chain Systems" },
        { title: "Manufacturing", desc: " Our team creates scalable B2B portals optimized for global manufacturing and distribution to handle complex corporate workflows.", img: img8, alt: "Manufacturing B2B Digital Platform" },
    ];

    // FAQ Content for Schema
    const faqs = [
        { question: "How do you ensure enterprise-level security for corporate platforms?", answer: "We implement multi-layered security protocols, including advanced data encryption, SSL certifications, and robust firewalls. Our architecture is designed to safeguard institutional assets and sensitive stakeholder data against evolving cyber threats." },
        { question: "Can your corporate solutions integrate with existing ERP or CRM systems?", answer: "Yes. We specialize in seamless third-party integrations. Whether you use Salesforce, SAP, Oracle, or custom internal APIs, we ensure a unified data ecosystem that streamlines your corporate workflows." },
        { question: "Do you provide multilingual and multi-region support?", answer: "Absolutely. We build localized digital experiences that allow global corporations to manage content across different regions and languages while maintaining a unified brand identity from a single CMS." },
        { question: "How do you handle website scalability as the organization grows?", answer: "We use future-proof, scalable architectures. Our development process ensures that your platform can handle massive traffic surges and accommodate new features or business units without compromising performance." },
        { question: "What is your process for ensuring industry compliance (GDPR, accessibility)?", answer: "Compliance is integrated into our build process. We conduct rigorous audits to ensure your site meets global standards like GDPR for data privacy and WCAG 2.1 for web accessibility, minimizing legal risks for your corporation." }
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Corporate Website Development & Enterprise Solutions | Campaignsquat Ltd</title>
                <meta name="description" content="Partner with Campaignsquat Ltd for enterprise-grade web development. We build secure, scalable, and high-performance sites for global brands." />
                <link rel="canonical" href="https://campaignsquat.com/corporate-website-development" />
                <meta property="og:title" content="Corporate Website Development & Enterprise Solutions | Campaignsquat Ltd" />
                <meta property="og:description" content="Expertise in high-performance corporate platforms, B2B portals, and enterprise security." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="website" />
                
                {/* Structured Data: Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Corporate Website Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Campaignsquat Ltd"
                        },
                        "description": "Enterprise-grade web development solutions for global brands, featuring multi-layered security and scalable infrastructure.",
                        "areaServed": "Global",
                        "serviceType": "Enterprise Web Solutions"
                    })}
                </script>

                {/* Structured Data: FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
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
                    })}
                </script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center  mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-tight">
                               Corporate Website Development & Enterprise Solutions | Campaignsquat Ltd 
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Elevate your brand with Campaignsquat Ltd. We build secure, high-performance corporate platforms that align stakeholder goals with user-centric design to drive growth. Our full-stack solutions provide a scalable digital foundation, ensuring a seamless experience for your global users.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                                <button aria-label="Request a Strategic Proposal" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95  group">
                                 Request a Strategic Proposal
                                  </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            {/* Hero Image Optimization */}
                            <img 
                                src={heroImage} 
                                alt="Enterprise corporate website interface design by Campaignsquat Ltd" 
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
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center  ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Corporate Website Development Expertise Pro</h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* গ্রিড কলাম আপডেট: বড় স্ক্রিনে ২-কলাম (lg:grid-cols-2) */}
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
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">
                            {item.desc}
                        </p>
                    </div>
                    {/* Hover Glow Effect */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* 3. Features Section */}
            <section className="py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-ful ">
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
            <section className="w-full bg-[#02050A]py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Corporate Website Development</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A phase-gated execution sequence ensuring every stakeholder vision is realized with precision.</p>
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
            <section className="py-12 md:py-20  relative z-[1]">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Corporate site Design service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We provide the technical backbone that lets your organization communicate effectively with the world, balancing corporate governance with premium branding.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {[
                                    "Authority-Focused Architecture",
                                    "Enterprise-Grade Data Security",
                                    "Institutional SEO Strategy",
                                    "Unified CRM & API Ecosystems",
                                    "Mission-Critical Uptime Support"
                                ].map((point, index) => (
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
                                <button aria-label="Get Started with Campaignsquat" className=" bg-[#F7A400]  text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 active:scale-95 group">
                                 Get Started
                                  </button>
                                   </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Corporate Excellence and Authority Representation" className="w-full h-auto max-h-[650px] object-contain rounded-[10px] border border-white/5 shadow-2xl" loading="lazy" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Corporate Web Expertise for Global Brands</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light"> Campaignsquat Ltd. provides expert corporate website development for diverse industries to establish professional authority. We build scalable, high-performance web solutions that ensure seamless user journeys and robust backend stability for large-scale global organizations. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
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

// Phase 2: Questions (FAQ) Section Integration
const Questions = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:md-8 leading-[1.2]">
                        Just Ask Us Some Questions
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Expert insights on your most frequent corporate development inquiries
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

export default CorporateSites;