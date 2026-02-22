import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Added for SEO
import BrandSlider from './BrandSlider';

// Images
import heroImage from '../assets/images/Custom ERP Development Solutions by Campaignsquat Ltd.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Centralized ERP Dashboard for Data Management.webp";
import accessibilityImg from "../assets/images/Modular ERP Software Architecture Scalability.webp";
import businessImg from "../assets/images/Automated Enterprise Compliance Reporting System.webp";
import scalableImg from "../assets/images/Real-Time ERP Inventory Tracking Interface.webp";
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

const ERPSystems = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "Resource Planning Logic",
    desc: "We build complex resource planning modules that help you manage inventory and human assets with absolute precision. Our team ensures that your ERP system simplifies complex internal processes to maximize your overall business operational efficiency.",
    img: researchIcon,
    alt: "Resource Planning Logic and Asset Management"
  },
  {
    title: "Centralized Data Center",
    desc: "Developing a centralized database that connects every department of your company for seamless information sharing. We eliminate data silos by creating a unified digital hub that provides a professional and high-performance experience for all.",
    img: uxIcon,
    alt: "Centralized Data Center and Departmental Integration"
  },
  {
    title: "Automated Reporting UI",
    desc: "Integrating advanced automated reporting tools that provide real-time updates on your core business metrics. Our custom dashboards allow stakeholders to monitor performance trends and make data-driven decisions for sustainable global expansion.",
    img: auditIcon,
    alt: "Automated Reporting UI and Real-time Dashboard"
  },
  {
    title: "Secure Cloud Framework",
    desc: "Implementing robust cloud-based architectures to ensure that your enterprise data is secure and accessible from anywhere. We prioritize high-speed encryption and technical stability to maintain your professional grade data integrity at all times.",
    img: webIcon,
    alt: "Secure Cloud Framework and Data Integrity"
  }
];

   const featureData = [
  {
    title: ["Bespoke Enterprise Resource Planning Tech"],
    desc: "Disconnected tools lead to revenue leakage. We offer bespoke enterprise resource planning solutions that unify accounting, HR, and supply chain into one platform. By replacing multiple tools with one unified ERP system, your leadership team can make decisions based on real-time accuracy. Campaignsquat Ltd. builds professional systems that establish a single source of truth, ensuring your operations remain precise and free from human error.",
    img: uxAuditImg,
    reverse: false,
    alt: "Centralized ERP Dashboard for Data Management"
  },
  {
    title: ["Cloud-Based Custom ERP Systems for Growth"],
    desc: "Don’t get trapped in rigid systems. We build cloud-based custom ERP systems with a modular philosophy, allowing you to add features as your business evolves. Our scalable ERP architecture for growing enterprises and modular ERP development for startups ensures your initial investment remains relevant for decades. Campaignsquat Ltd. ensures your professional infrastructure adapts to global shifts without requiring expensive and slow redesigns.",
    img: accessibilityImg,
    reverse: true,
    alt: "Modular ERP Software Architecture Scalability"
  },
  {
    title: ["AI-Driven Predictive Analytics ERP Logic"],
    desc: "Manual compliance is a liability. Our AI-driven predictive analytics ERP systems automate financial statements, tax documentation, and industry audits. By embedding hyper-automated business workflows and privacy-first blockchain ERP architecture into the code, Campaignsquat Ltd. helps you mitigate legal risks. We provide a professional framework that ensures your business stays audit-ready while streamlining business operations with custom ERP.",
    img: businessImg,
    reverse: false,
    alt: "Automated Enterprise Compliance Reporting System"
  },
  {
    title: ["Custom ERP for Manufacturing and Supply"],
    desc: "Gain total visibility with our custom ERP for manufacturing and supply chain. We provide IoT-integrated ERP systems and integrated inventory management ERP modules that use smart algorithms to automate purchase orders. This real-time oversight prevents overstocking and ensures your supply chain remains lean. Campaignsquat Ltd. delivers professional tracking solutions and unified data dashboards with real-time reporting to optimize your capital.",
    img: scalableImg,
    reverse: true,
    alt: "Real-Time ERP Inventory Tracking Interface"
  }
];

    const processSteps = [
    { 
        // Step 1: Discovery and Audit
        title: "Discovery and Audit", 
        description: "Deep-dive analysis of your current business workflows and departmental needs to define project KPIs today.", 
        image: discoveryImg, 
        alt: "ERP discovery and business workflow audit to define strategic project KPIs" 
    },
    { 
        // Step 2: Technical Architect
        title: "Technical Architect", 
        description: "Engineering the database schema and system logic to ensure seamless data flow and high-speed performance.", 
        image: designImg, 
        alt: "Custom ERP technical architecture and high-performance database schema design" 
    },
    { 
        // Step 3: Agile Implementation
        title: "Agile Implementation", 
        description: "Custom development and phase-wise deployment of modular ERP components for maximum stability and feedback.", 
        image: iterationImg, 
        alt: "Agile ERP software development with modular phase-wise component deployment" 
    },
    { 
        // Step 4: Migration and Launch
        title: "Migration and Launch", 
        description: "Rigorous UAT followed by secure data migration and comprehensive team training for a smooth go-live transition.", 
        image: handoffImg, 
        alt: "Secure ERP data migration, UAT testing, and organization-wide launch training" 
    }
];

    const points = ["Modular Micro-Module Design", "Multi-platform Cloud Access", "Bank-grade Data Security", "Legacy System Integration", "Automated Fail-safe Backups"];

   const industryData = [
    { 
        title: "Manufacturing", 
        desc: "We build integrated systems to manage shop floors, Bill of Materials (BOM), and production cycles with absolute precision.", 
        img: img1,
        alt: "Industrial manufacturing shop floor management system" 
    },
    { 
        title: "Wholesale & Dist.", 
        desc: "Our experts develop automated tools for large-scale orders, distribution networks, and multi-warehouse logistics management.", 
        img: img2,
        alt: "Logistics and wholesale distribution network automation" 
    },
    { 
        title: "Healthcare Groups", 
        desc: "We create centralized platforms to manage patient records, pharmacy stock, and multi-branch billing systems securely.", 
        img: img3,
        alt: "Secure healthcare patient records and pharmacy management" 
    },
    { 
        title: "Construction", 
        desc: "Our team builds advanced modules for project costing, resource management, and real-time site tracking to optimize workflows.", 
        img: img4,
        alt: "Construction project costing and site tracking software" 
    },
    { 
        title: "Apparel & Fashion", 
        desc: "We design scalable systems to manage seasonal inventories, complex SKUs, and global supply chain demands for retail leaders.", 
        img: img5,
        alt: "Fashion retail inventory and supply chain management" 
    },
    { 
        title: "Non-Profit", 
        desc: "Our developers build comprehensive tracking for donations, grants, and multi-program resource allocation to drive social impact.", 
        img: img6,
        alt: "Non-profit donation and grant tracking platform" 
    },
    { 
        title: "Energy & Utilities", 
        desc: "We craft asset management and predictive maintenance scheduling tools designed for large-scale infrastructure and providers.", 
        img: img7,
        alt: "Energy infrastructure asset management and maintenance" 
    },
    { 
        title: "Agriculture", 
        desc: "Our team develops smart farm-to-market tracking and end-to-end production management systems for sustainable global growth.", 
        img: img8,
        alt: "Smart agriculture farm-to-market tracking system" 
    },
];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom ERP Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Scale faster with custom ERP solutions by Campaignsquat Ltd. We build secure, automated, and modular ERP systems tailored to your business.",
        "serviceType": "Enterprise Resource Planning Development"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does a custom ERP development project typically take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard enterprise deployment ranges from 4 to 9 months depending on complexity. Campaignsquat Ltd. utilizes a phased rollout strategy to ensure you gain core functionality as early as possible while we scale additional modules."
                }
            },
            {
                "@type": "Question",
                "name": "Can your ERP integrate with our existing legacy software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our engineers specialize in API-first development and custom middleware to ensure your new ERP synchronizes perfectly with existing legacy systems, maintaining data integrity while upgrading efficiency."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle data security during the migration process?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Security is our priority. We employ bank-grade encryption, MFA, and role-based access control (RBAC). We perform full backups and integrity checks before any live switch to ensure no data is lost or exposed."
                }
            },
            {
                "@type": "Question",
                "name": "Is the ERP system scalable if our company doubles its size?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our ERPs are built with cloud-native, modular architecture (AWS/Azure). The system automatically scales resources to handle increased user loads and data volume without performance lag."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide staff training and post-launch support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide 90 days of intensive 'hyper-care' post-launch, including comprehensive staff training. We also offer SLA-backed maintenance packages for ongoing security updates and 24/7 technical support."
                }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom ERP Development Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Scale faster with custom ERP solutions by Campaignsquat Ltd. We build secure, automated, and modular ERP systems tailored to your business. Book a consult!" />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Custom ERP Development Services | Campaignsquat Ltd." />
                <meta property="og:description" content="Scale faster with custom ERP solutions by Campaignsquat Ltd. Secure, automated, and modular ERP systems." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                                Custom ERP Development Services for Scalable Enterprise Growth
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Remove operational silos with high-performance ERP solutions tailored to your unique workflows. Campaignsquat Ltd. builds secure, cloud-native systems that automate complex processes and drive data-backed ROI. Our custom architecture ensures long-term business success.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Request a Technical Consultation for ERP" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Request a Technical Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%]  blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Custom ERP Development Solutions by Campaignsquat Ltd" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Custom ERP Development Expertise for Growth</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose. </p>
        </div>

        {/* ল্যাপটপ এবং বড় স্ক্রিনে ২ কলাম লেআউট ব্যবহার করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
                <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full">
                    
                    <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                        <img 
                            src={item.img} 
                            loading="lazy"
                            alt={`Campaignsquat Ltd ${item.title} Expertise Icon`} 
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2 text-left">
                                    <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h2>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light max-w-[580px]">{item.desc}</p>
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best ERP System Software & Devlopment service provider?</h2>
 </h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A surgical approach ensuring zero downtime and maximum adoption across your organization. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img 
                                            src={step.image} 
                                            loading="lazy"
                                            alt={step.alt} 
                                            className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" 
                                        />
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Integrated Systems for Unmatched Productivity</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We deliver bank-grade secure ERP solutions tailored to solve complex resource management bottlenecks.</p>
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
                               <button aria-label="Start Your Transformation with ERP" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                      Start Your Transformation
                                </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} loading="lazy" alt="Campaignsquat Ltd Enterprise Resource Planning Portfolio" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-ful ">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Business Automation Expertise for Success</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">CCampaignsquat Ltd. provides expert business automation software for diverse industries to solve complex operational problems. We build scalable, high-performance solutions that ensure seamless user journeys and robust backend stability across all your global business sectors.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img 
                                            src={item.img} 
                                            loading="lazy"
                                            alt={`Custom ERP Solution for ${item.title} Industry`} 
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                                        />
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
        question: "How long does a custom ERP development project typically take?",
        answer: "A standard enterprise deployment ranges from 4 to 9 months depending on complexity. Campaignsquat Ltd. utilizes a phased rollout strategy to ensure you gain core functionality as early as possible while we scale additional modules."
    },
    {
        question: "Can your ERP integrate with our existing legacy software?",
        answer: "Yes. Our engineers specialize in API-first development and custom middleware to ensure your new ERP synchronizes perfectly with existing legacy systems, maintaining data integrity while upgrading efficiency."
    },
    {
        question: "How do you handle data security during the migration process?",
        answer: "Security is our priority. We employ bank-grade encryption, MFA, and role-based access control (RBAC). We perform full backups and integrity checks before any live switch to ensure no data is lost or exposed."
    },
    {
        question: "Is the ERP system scalable if our company doubles its size?",
        answer: "Absolutely. Our ERPs are built with cloud-native, modular architecture (AWS/Azure). The system automatically scales resources to handle increased user loads and data volume without performance lag."
    },
    {
        question: "Do you provide staff training and post-launch support?",
        answer: "Yes, we provide 90 days of intensive 'hyper-care' post-launch, including comprehensive staff training. We also offer SLA-backed maintenance packages for ongoing security updates and 24/7 technical support."
    }
];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Expert Insights: ERP FAQ
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Proactive answers to help you navigate your enterprise transformation.
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

export default ERPSystems;