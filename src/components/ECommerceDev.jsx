import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // SEO: Helmet for metadata

// Asset imports
import heroImage from '../assets/images/Modern E-commerce Dashboard showcasing sales analytics and responsive mobile UI.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 
import architectureImg from "../assets/images/Scalable Enterprise E-commerce Architecture.webp";
import userJourneyImg from "../assets/images/Optimized One-Page Checkout Process.webp";
import lowFidImg from "../assets/images/AI-Powered E-commerce Product Search System.webp";
import validationImg from "../assets/images/Mobile-Responsive E-commerce Interface Design.webp";
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

const ECommerceDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Phase 2: Section 2 - Core Expertise
    const expertiseData = [
  {
    title: "High Conversion Funnels",
    desc: "We design seamless shopping journeys that guide users from product discovery to final checkout with zero friction. Our focus on conversion rate optimization ensures that your store turns every visitor into a loyal customer for long-term growth.",
    img: architectureIcon,
    alt: "High Conversion Funnels and E-commerce UX Design"
  },
  {
    title: "Secure Payment Systems",
    desc: "Integrating robust and secure payment gateways that provide your customers with a safe and professional checkout experience. We prioritize data encryption and smooth transaction flows to build absolute trust and global business credibility.",
    img: userFlowIcon,
    alt: "Secure Payment Gateway Integration and Data Encryption"
  },
  {
    title: "Scalable Product Catalog",
    desc: "Building flexible inventory management systems that allow you to manage thousands of products with ease and accuracy. Our team ensures that your digital store architecture is ready to handle massive traffic and scale as your sales volume grows.",
    img: blueprintIcon,
    alt: "Scalable Product Catalog and Inventory Management Systems"
  },
  {
    title: "Mobile Commerce Design",
    desc: "Crafting fully responsive e-commerce layouts that deliver a professional shopping experience on all mobile devices. We optimize every touchpoint to ensure rapid loading speeds and easy navigation for your customers on the go across the globe.",
    img: testingIcon,
    alt: "Mobile Commerce Design and Responsive Shopping Layouts"
  }
];

    // Phase 2: Section 3 - Value-Add Features
   const featureData = [
  {
    title: ["Scalable E-Commerce Development Services"],
    desc: "Slow load times kill growth. Campaignsquat Ltd. provides scalable e-commerce development services and B2B e-commerce platform solutions engineered to handle massive traffic. By optimizing backend architecture and inventory management system for large scale online stores, we ensure your infrastructure never buckles. Our professional platforms deliver a friction-free shopping experience that drives repeat customers and ensures high-volume global demand is met.",
    img: architectureImg,
    reverse: false,
    alt: "Scalable Enterprise E-commerce Architecture"
  },
  {
    title: ["Custom Checkout Experience Optimization"],
    desc: "Cart abandonment is the enemy of revenue. We focus on reducing cart abandonment with custom UX and custom checkout experience optimization that eliminates distractions. Our engineers implement seamless payment gateway integration to convert user intent into completed transactions. Whether it is custom WooCommerce store development or advanced Shopify store customization, we build professional, secure pathways that protect your revenue and increase trust.",
    img: userJourneyImg,
    reverse: true,
    alt: "Optimized One-Page Checkout Process"
  },
  {
    title: ["Headless E-Commerce and AI-Driven Tech"],
    desc: "If customers cannot find a product, they cannot buy it. We implement AI-driven personalized shopping experiences and multi-vendor marketplace development to boost order value. Our headless e-commerce architecture (Next.js/React) provides a sophisticated product discovery layer that reduces bounce rates. We ensure your professional store provides a smart, intuitive interface that simplifies the journey while maintaining a high-performance digital edge.",
    img: lowFidImg,
    reverse: false,
    alt: "AI-Powered E-commerce Product Search System"
  },
  {
    title: ["Optimizing E-Commerce for Mobile Shopper"],
    desc: "With mobile traffic dominating global sales, optimizing e-commerce site speed for mobile shoppers is critical. We deliver high-converting online store design featuring gesture-based UI and one-tap payment integrations. Our mobile-first approach ensures a premium shopping experience across all devices, capturing revenue from modern consumers. Campaignsquat Ltd. provides professional retail solutions that keep your brand at the primary competitive edge.",
    img: validationImg,
    reverse: true,
    alt: "Mobile-Responsive E-commerce Interface Design"
  }
];

    // Phase 2: Section 4 - Process (Roadmap)
   const processSteps = [
    { 
        // Step 1: Strategic Research
        title: "Strategic Research", 
        description: "Deep competitive analysis to identify high-growth opportunities and technical requirements for your brand.", 
        image: discoveryImg, 
        alt: "Strategic e-commerce market research and competitor analysis for growth" 
    },
    { 
        // Step 2: Store Architecture
        title: "Store Architecture", 
        description: "Mapping complex product taxonomies, user journey flows, and robust database structures for scalability.", 
        image: designImg, 
        alt: "E-commerce store architecture and complex product taxonomy mapping" 
    },
    { 
        // Step 3: Agile Development
        title: "Agile Development", 
        description: "Engineering the core commerce engine and integrating essential shipping, tax, and ERP APIs with clean code.", 
        image: iterationImg, 
        alt: "Agile e-commerce engine development with ERP and shipping API integration" 
    },
    { 
        // Step 4: Optimization & Launch
        title: "Optimization & Launch", 
        description: "Rigorous load testing, security audits, and A/B testing of checkout flows before going live with analytics.", 
        image: handoffImg, 
        alt: "E-commerce security auditing and high-conversion checkout flow optimization" 
    }
];

    const points = [
        "Headless & Custom Commerce Solutions", 
        "Ultra-Fast LCP & Core Web Vitals", 
        "Multi-Currency & Global Language Support", 
        "GDPR-Compliant & Secure Data Handling", 
        "Automated Marketing & Abandoned Cart Recovery"
    ];

    const industryData = [
        { title: "Fashion & Lifestyle", desc: "We build immersive visual storytelling platforms with advanced attribute swatches and lookbook integrations for premium brands.", img: img1, alt: "Fashion E-commerce Website Design" },
        { title: "Electronics & Tech", desc: " Our experts develop high-spec marketplaces with complex product comparison tools and warranty management systems for global retailers.", img: img2, alt: "Electronics Online Marketplace Interface" },
        { title: "Beauty & Wellness", desc: "SWe create subscription-based storefronts featuring recurring billing and loyalty program integrations to maximize customer lifetime value.", img: img3, alt: "Beauty Products Subscription Store" },
        { title: "Direct-to-Consumer (DTC)", desc: "Our team builds high-growth brand stores optimized for social media traffic and viral marketing campaigns to drive immediate sales.", img: img4, alt: "DTC Brand E-commerce Platform" },
        { title: "Grocery & Rapid Delivery", desc: "We develop hyper-local delivery systems featuring real-time tracking and automated dispatch logic for seamless logistics.", img: img5, alt: "Online Grocery Delivery App Interface" },
        { title: "Premium Home Decor", desc: "Our designers craft ultra-high-resolution galleries with potential for AR/VR product visualization to showcase luxury goods with precision.", img: img6, alt: "Luxury Home Decor E-commerce Gallery" },
        { title: "B2B Wholesale Hubs", desc: " We build complex platforms with bulk pricing logic, tiered membership levels, and automated quote request systems for enterprise operations.", img: img7, alt: "B2B Wholesale Portal Architecture" },
        { title: "Education & Digital", desc: "Our team creates instant-access portals for software, digital assets, and gated educational content with secure payment gateways.", img: img8, alt: "Digital Products and Course Marketplace" },
    ];

    // Structured Data (JSON-LD)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom E-Commerce Development",
        "serviceType": "E-commerce Web Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Build a scalable, high-converting online store with headless commerce, secure payments, and enterprise scalability."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Should I choose Shopify, WooCommerce, or a Custom E-Commerce solution?",
                "acceptedAnswer": { "@type": "Answer", "text": "It depends on your scale. Shopify and WooCommerce are great for quick launches, but for unique business logic, advanced scalability, and zero monthly 'seat costs,' a Custom Solution is superior." }
            },
            {
                "@type": "Question",
                "name": "How do you ensure the security of online transactions?",
                "acceptedAnswer": { "@type": "Answer", "text": "Security is our highest priority. We implement PCI-DSS compliant payment integrations, SSL encryption, and multi-layer authentication." }
            },
            {
                "@type": "Question",
                "name": "Can you integrate my store with third-party ERP or Inventory software?",
                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in API-first development, allowing us to seamlessly connect your e-commerce platform with external tools like Inventory Management Systems (IMS), CRM software, POS systems." }
            },
            {
                "@type": "Question",
                "name": "Will my online store be mobile-friendly and fast-loading?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, every store we build is mobile-first. We use modern technologies like Headless Commerce and PWA features to ensure lightning-fast load times." }
            },
            {
                "@type": "Question",
                "name": "What kind of support do you provide after the store launch?",
                "acceptedAnswer": { "@type": "Answer", "text": "We provide post-launch technical support, security patches, and performance monitoring, along with data-driven insights to optimize conversion rates." }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom E-Commerce Development Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Build a scalable, high-converting online store. Campaignsquat Ltd. specializes in headless commerce, secure payments, and enterprise scalability. Start today!" />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Custom E-Commerce Development Services | Campaignsquat Ltd." />
                <meta property="og:description" content="Build a scalable, high-converting online store with enterprise-grade headless commerce." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-tight">Custom E-Commerce Development Solutions for Scaling Global Sales</h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-[1.2] md:leading-[1.4] font-normal">
                               : Stop struggling with basic shop templates. Campaignsquat Ltd. builds fast, high-conversion online stores that simplify your growth. From headless tech to secure checkouts, we provide the tools you need to outperform competitors and turn traffic into massive revenue today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                                  <button aria-label="Launch Your High-Performance Store" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                Launch Your High-Performance Store
                                </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Modern E-commerce Dashboard showcasing sales analytics and responsive mobile UI" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Revenue-Focused E-Commerce Engineering</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We combine sophisticated backend architecture with intuitive frontend experiences to turn casual visitors into loyal customers.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহারের ফলে বড় স্ক্রিনে ১ লাইনে ২টি কার্ড থাকবে */}
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
            <section className="w-full bg-[#02050A] py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[22px] md:text-[35px] lg:text-[45px] font-bold tracking-tight mb-6">Our Custom E-Commerce Development </h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">A structured development cycle designed to launch and scale your business with precision.</p>
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best E-Commerce Devlopment service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We don't just build sites; we build sales engines. Our technical expertise ensures your storefront is robust enough to handle growth while providing the analytics you need to make data-driven decisions.</p>
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
                                  <button aria-label="Get Started with E-commerce Development" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                      Get Started
                                  </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat E-Commerce Excellence and Development Prowess" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Industry-Specific E-commerce Development Expertise for Growth</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light"> Campaignsquat Ltd. provides expert custom e-commerce development for diverse industries to drive digital success. We build scalable, high-performance storefronts that ensure seamless user journeys and robust backend stability across all global business sectors and markets. </p>
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

// Phase 2: Section 5 - Proactive FAQ
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

   const faqs = [
    {
        question: "Should I choose Shopify, WooCommerce, or a Custom E-Commerce solution?",
        answer: "It depends on your scale. Shopify and WooCommerce are great for quick launches, but for unique business logic, advanced scalability, and zero monthly 'seat costs,' a Custom Solution is superior. We help you choose and build the architecture that aligns with your long-term revenue goals."
    },
    {
        question: "How do you ensure the security of online transactions?",
        answer: "Security is our highest priority. We implement PCI-DSS compliant payment integrations, SSL encryption, and multi-layer authentication. By following industry-standard security protocols, we ensure that both your business data and your customers' payment information are fully protected."
    },
    {
        question: "Can you integrate my store with third-party ERP or Inventory software?",
        answer: "Absolutely. We specialize in API-first development, allowing us to seamlessly connect your e-commerce platform with external tools like Inventory Management Systems (IMS), CRM software, POS systems, and global shipping carriers for automated operations."
    },
    {
        question: "Will my online store be mobile-friendly and fast-loading?",
        answer: "Yes, every store we build is mobile-first. We use modern technologies like Headless Commerce and PWA features (like Core Web Vitals optimization) to ensure lightning-fast load times. Speed is a critical ranking factor for Google and a conversion factor for users."
    },
    {
        question: "What kind of support do you provide after the store launch?",
        answer: "We don't just launch and leave. We provide post-launch technical support, security patches, and performance monitoring. Additionally, we offer data-driven insights to help you further optimize your checkout flow and increase your conversion rates over time."
    }
];

    return (
        <section className="w-full bg-[#02050A] py-12 md:py-20  overflow-hidden font-poppins">
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
                                <h3 className="text-[15px] md:text-[18px] font-semibold leading-tight transition-colors duration-300 pr-4 text-white">
                                    {faq.question}
                                </h3>
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

export default ECommerceDev;