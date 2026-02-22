import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// images inputs
import heroImage from '../assets/images/Advanced Inventory and Billing Software Dashboard Overview.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/AI-Powered Inventory Optimization Interface.webp";
import accessibilityImg from "../assets/images/Cloud-Based POS Billing System Design.webp";
import businessImg from "../assets/images/Omnichannel E-commerce Inventory Synchronization.webp";
import scalableImg from "../assets/images/Automated Procurement and Vendor Management System.webp";
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

const InventoryBilling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "Real-Time Stock Tracking",
    desc: "We build advanced inventory modules that provide instant updates on stock levels and product movements. Our team ensures that your business avoids shortages and overstocking by implementing precise data tracking for a high-performance operation.",
    img: researchIcon,
    alt: "Real-Time Stock Tracking and Inventory Management"
  },
  {
    title: "Automated Invoicing UI",
    desc: "Designing professional and automated billing systems that generate accurate invoices within seconds. Our interface focus remains on reducing manual entry errors while providing a smooth and secure payment experience for your global client base.",
    img: uxIcon,
    alt: "Automated Invoicing UI and Billing System Design"
  },
  {
    title: "Financial Data Accuracy",
    desc: "Integrating robust accounting tools that ensure total transparency in your profit and loss statements. We prioritize data integrity and clean backend logic to help you maintain a professional financial record that scales with your growing company.",
    img: webIcon,
    alt: "Financial Data Accuracy and Accounting Integration"
  },
  {
    title: "Secure Payment Gateways",
    desc: "Building secure bridges between your billing software and multiple global payment platforms. We ensure that every transaction is encrypted and recorded accurately to provide a reliable and professional digital environment for all your customers.",
    img: auditIcon,
    alt: "Secure Payment Gateways and Transaction Encryption"
  }
];

    const featureData = [
  { 
    title: ["Custom Inventory", "Management Software Pro"], 
    desc: "Stop losing revenue to overstocking. Campaignsquat Ltd. provides custom inventory management software and cloud-based inventory tracking systems that automate reorder points. By implementing real-time stock level alerts and notifications, we ensure your capital is never trapped in stagnant goods. Our professional systems manage complex stock movements with absolute precision, giving you the clarity needed to maintain a lean and profitable warehouse.", 
    img: uxAuditImg, 
    alt: "Custom inventory management software and automated stock alert dashboard", 
    reverse: false 
  },
  { 
    title: ["Bespoke Billing and", "Invoicing Solutions"], 
    desc: "Transactions should be instantaneous. We develop bespoke billing and invoicing solutions and automated billing software for agencies that integrate with your central hub. Our integrated inventory and accounting software ensures every swipe updates your ledger immediately. Campaignsquat Ltd. delivers professional billing engines that handle high-volume transactions, providing a single source of truth while reducing manual reconciliation for your business.", 
    img: accessibilityImg, 
    alt: "Bespoke billing and invoicing solution with high-speed transaction engine", 
    reverse: true 
  },
  { 
    title: ["Multi-Warehouse", "Inventory Management Tech"], 
    desc: "Our solutions offer multi-warehouse inventory management and seamless API integrations with global marketplaces. We ensure that your inventory levels and pricing are harmonized across every touchpoint, protecting your brand reputation. Campaignsquat Ltd. provides the technical architecture to manage complex multi-channel sales from one dashboard, ensuring your professional presence remains unified and accurate across the entire digital landscape today.", 
    img: businessImg, 
    alt: "Multi-warehouse inventory management technology for global marketplaces", 
    reverse: false 
  },
  { 
    title: ["Automated GST and", "VAT Compliant Billing"], 
    desc: "Streamline procurement with automated GST/VAT compliant billing and batch and expiry date tracking systems. We offer barcode and QR code integration software to track incoming shipments directly to your warehouse shelves with total accountability. Campaignsquat Ltd. ensures your supply chain remains resilient by automating the logistics of restock. We provide professional tools that minimize manual labor and ensure your business never stops moving.", 
    img: scalableImg, 
    alt: "Automated GST and VAT compliant billing system with barcode integration", 
    reverse: true 
  }
];

    const processSteps = [
    { 
        // Step 1: Architecture Blueprint
        title: "Architecture Blueprint", 
        description: "Mapping your business logic and data flows to create a robust, high-performance technical foundation.", 
        image: discoveryImg, 
        alt: "Software system architecture and inventory data flow planning" 
    },
    { 
        // Step 2: UI/UX Prototyping
        title: "UI/UX Prototyping", 
        description: "Designing intuitive interfaces that reduce employee training time and minimize manual input errors daily.", 
        image: designImg, 
        alt: "Inventory software UI/UX prototype and intuitive dashboard design" 
    },
    { 
        // Step 3: Agile Sprint Coding
        title: "Agile Sprint Coding", 
        description: "Rapid, iterative development cycles with continuous integration to ensure high-quality, bug-free code.", 
        image: iterationImg, 
        alt: "Agile software development with continuous integration for billing systems" 
    },
    { 
        // Step 4: UAT & Global Deploy
        title: "UAT & Global Deploy", 
        description: "Rigorous user-acceptance testing followed by a seamless launch and post-live technical optimization.", 
        image: handoffImg, 
        alt: "Software user acceptance testing and global billing system deployment" 
    }
];
    const points = [
        "Real-time Low Stock Triggers", 
        "Multi-currency Compliant Invoicing", 
        "Secure Cloud-based Data Backups", 
        "Granular Role-based Access Control", 
        "Custom API & ERP Integration"
    ];

    const industryData = [
    { 
        title: "Supermarkets", 
        desc: "We build high-concurrency retail systems designed for thousands of daily SKUs and instant barcode processing to ensure fast checkout.", 
        img: img1, 
        alt: "Supermarket Inventory Management Software" 
    },
    { 
        title: "Wholesale Hubs", 
        desc: "Our experts develop robust systems for managing bulk distribution, credit limits, and detailed aging reports for large-scale supply chains.", 
        img: img2, 
        alt: "Wholesale ERP and Distribution System" 
    },
    { 
        title: "E-commerce Stores", 
        desc: "We create direct API integrations for automated fulfillment and real-time stock management across multiple global digital storefronts.", 
        img: img3, 
        alt: "E-commerce Inventory Automation" 
    },
    { 
        title: "Pharmacies & Labs", 
        desc: "Our team builds systems with strict batch-tracking, expiry date alerts, and medical schedule compliance to ensure total healthcare safety.", 
        img: img4, 
        alt: "Pharmacy Batch Tracking System" 
    },
    { 
        title: "Fashion & Apparel", 
        desc: "We design matrix-style inventory management based on size, color, and seasonal trends for high-growth retail and lifestyle brands.", 
        img: img5, 
        alt: "Fashion Retail Inventory Management" 
    },
    { 
        title: "Food & Beverage", 
        desc: "Our developers build real-time ingredient tracking, recipe costing, and KOT system integrations to optimize kitchen and restaurant workflows.", 
        img: img6, 
        alt: "Restaurant Inventory and Recipe Costing" 
    },
    { 
        title: "Electronics Retail", 
        desc: "We craft systems featuring serial number tracking, IMEI management, and automated warranty modules for high-spec technology providers.", 
        img: img7, 
        alt: "Electronics Serial Number Tracking Software" 
    },
    { 
        title: "Automotive Parts", 
        desc: "Our team develops massive catalog management systems with location-wise tracking for complex spare parts and global logistics networks.", 
        img: img8, 
        alt: "Automotive Spare Parts Inventory System" 
    },
];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Inventory & Billing Software Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Transform operations with custom inventory & billing software. We build scalable, automated POS and ERP solutions for high-growth brands.",
        "serviceType": "Software Development"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "How long does it take to develop a custom billing system?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 3–6 months depending on complexity. We utilize modular frameworks to accelerate the timeline while ensuring every module undergoes rigorous security and performance testing." } },
            { "@type": "Question", "name": "Can your system handle multiple warehouse locations simultaneously?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our custom inventory solutions are built for multi-warehouse synchronization. You can track stock movements between branches, manage central distribution hubs, and view real-time inventory levels globally from a single dashboard." } },
            { "@type": "Question", "name": "Does the billing system support local tax compliance like GST or VAT?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We engineer our billing modules to be 100% tax-compliant based on your region. The system automatically calculates taxes, generates compliant invoices, and provides detailed financial reports for easy filing." } },
            { "@type": "Question", "name": "Is the software scalable for seasonal spikes in traffic?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build on cloud-native architectures (AWS/Azure) that auto-scale to handle high-volume transaction periods like Black Friday or seasonal sales without any performance degradation." } },
            { "@type": "Question", "name": "Can we integrate barcode and QR code scanners with the software?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide full integration for handheld scanners, mobile cameras, and thermal printers. This allows for lightning-fast product entry, quick checkouts, and error-free asset tracking during stocktakes." } }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom Inventory & Billing Software Development | Campaignsquat Ltd.</title>
                <meta name="description" content="Transform operations with custom inventory & billing software. We build scalable, automated POS and ERP solutions for high-growth brands. Get a technical quote today." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Custom Inventory & Billing Software Development | Campaignsquat Ltd." />
                <meta property="og:description" content="Automate your supply chain with our high-performance inventory and billing solutions." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center  mt-4 md:mt-20  overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                                 Custom Inventory and Billing Software Development Solutions Agency
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                 Remove operational bottlenecks with high-performance billing systems. Campaignsquat Ltd. builds scalable, secure, and automated inventory tools designed to optimize your cash flow and global supply chain. Our robust digital products ensure long-term business growth and success.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Request a Consultation" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black  hover:text-white font-semibold py-2 px-8  md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                        Request a Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] "></div>
                            <img 
                                src={heroImage} 
                                alt="Advanced Inventory and Billing Software Dashboard Overview" 
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
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Inventory & Billing Software Expertise Pro </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহার করার ফলে বড় স্ক্রিনে কার্ডগুলো চওড়া দেখাবে */}
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
                    {/* Hover Glow Effect */}
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic Inventory Roadmap Pro</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">We follow a rigorous, agile-based methodology to ensure your system is delivered on time. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img 
                                            src={step.image} 
                                            alt={step.alt} 
                                            loading="lazy"
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">                           
                                 <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Inventory & Billing Software & Devlopment service provider?</h2>
</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We provide end-to-end transparency in your supply chain and financial operations with bank-grade security.</p>
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
                                    <button aria-label="Scale Your Business" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2  font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                        Scale Your Business
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Real-time Inventory Tracking Excellence" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            {/* 6. Industries Section */}
           <section className="relative z-10 overflow-hidden py-12 md:py-20">
    {/* CSS Styles for Running Border */}
    <style>{`
        @keyframes rotate-border { 
            from { transform: rotate(0deg); } 
            to { transform: rotate(360deg); } 
        }
        .border-run-container { 
            position: relative; 
            padding: 2px; /* বর্ডার দেখানোর জন্য স্পেস */
            overflow: hidden; 
            border-radius: 7px; 
            background: rgba(255, 255, 255, 0.05); 
        }
        .running-border { 
            position: absolute; 
            width: 250%; 
            height: 250%; 
            top: -75%; 
            left: -75%; 
            background: conic-gradient(transparent, transparent, transparent, #F7A400); 
            animation: rotate-border 4s linear infinite; 
            opacity: 0; 
            transition: opacity 0.3s; 
            z-index: 0; 
        }
        .border-run-container:hover .running-border { 
            opacity: 1; 
        }
        .card-content { 
            position: relative; 
            background: #0a0a0a; /* কার্ডের ভেতরের ব্যাকগ্রাউন্ড */
            border-radius: 5px; 
            z-index: 1; 
            height: 100%; 
        }
    `}</style>

    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
                Our Industry-Specific Inventory & Billing Software Expertise
            </h2>
            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">
                Specialized Campaignsquat Ltd. provides expert inventory and billing software for diverse industries to drive operational success. We build scalable, high-performance architectures that ensure seamless user journeys and robust backend stability across all your global business sectors.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {industryData.map((item, index) => (
                <div key={index} className="border-run-container group">
                    {/* Running Border Element */}
                    <div className="running-border"></div>
                    
                    {/* Main Content */}
                    <div className="card-content flex flex-col">
                        <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                            <img 
                                src={item.img} 
                                alt={item.alt} 
                                loading="lazy" 
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col text-left">
                            <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white text-[14px] md:text-[15px] font-light mx-auto
                            ">
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
    );
};

// Separated Questions Component
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: "How long does it take to develop a custom billing system?", answer: "Typically 3–6 months depending on complexity. We utilize modular frameworks to accelerate the timeline while ensuring every module undergoes rigorous security and performance testing." },
        { question: "Can your system handle multiple warehouse locations simultaneously?", answer: "Yes. Our custom inventory solutions are built for multi-warehouse synchronization. You can track stock movements between branches, manage central distribution hubs, and view real-time inventory levels globally from a single dashboard." },
        { question: "Does the billing system support local tax compliance like GST or VAT?", answer: "Absolutely. We engineer our billing modules to be 100% tax-compliant based on your region. The system automatically calculates taxes, generates compliant invoices, and provides detailed financial reports for easy filing." },
        { question: "Is the software scalable for seasonal spikes in traffic?", answer: "Yes. We build on cloud-native architectures (AWS/Azure) that auto-scale to handle high-volume transaction periods like Black Friday or seasonal sales without any performance degradation." },
        { question: "Can we integrate barcode and QR code scanners with the software?", answer: "Yes. We provide full integration for handheld scanners, mobile cameras, and thermal printers. This allows for lightning-fast product entry, quick checkouts, and error-free asset tracking during stocktakes." }
    ];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Expert Technical Insights
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Answering common technical questions about our development process.
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

export default InventoryBilling;