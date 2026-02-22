import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react'; 
import { Helmet } from 'react-helmet-async'; // Added for SEO
import BrandSlider from './BrandSlider'; 

// images inputs
import heroImage from '../assets/images/Campaignsquat bespoke CRM software interface preview.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Unified customer intelligence CRM dashboard.webp";
import accessibilityImg from "../assets/images/CRM software ecosystem integrations.webp";
import businessImg from "../assets/images/Sales pipeline management interface.webp";
import scalableImg from "../assets/images/Unified customer intelligence CRM dashboard.webp";
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

const CustomCRM = () => {
    // Data objects remain unchanged as requested
    const expertiseData = [
  {
    title: "Workflow Automation UI",
    desc: "We design intuitive interfaces that automate repetitive sales and marketing tasks to increase your team productivity. Our bespoke CRM layouts ensure that your staff can manage complex lead cycles with absolute speed and professional efficiency.",
    img: auditIcon,
    alt: "Workflow Automation UI and CRM Task Management"
  },
  {
    title: "Real-Time Data Insights",
    desc: "Integrating advanced analytics dashboards that provide deep insights into customer behavior and sales performance. We build visual reporting tools that help you make data-driven decisions to boost your long-term business growth and profitability.",
    img: webIcon,
    alt: "Real-Time Data Insights and Analytics Dashboards"
  },
  {
    title: "Customer Retention Hub",
    desc: "Building specialized modules focused on tracking client interactions and improving overall satisfaction rates. Our team creates a unified communication hub that allows your business to build stronger relationships and ensure high user retention.",
    img: researchIcon,
    alt: "Customer Retention Hub and Interaction Tracking"
  },
  {
    title: "Seamless App Syncing",
    desc: "Ensuring your custom CRM connects perfectly with existing email platforms and third-party business software tools. We build secure API bridges to create a professional digital ecosystem where all your sensitive company data remains synchronized.",
    img: uxIcon,
    alt: "Seamless App Syncing and API Bridge Integration"
  }
];



   const featureData = [
  {
    title: ["Bespoke CRM Software for Enterprises Pro"],
    desc: "Think of your CRM as the heartbeat of Campaignsquat Ltd. We build bespoke CRM software for enterprises, centralizing every interaction—emails, chats, and calls—into one intuitive profile. This complete view allows your team to manage hyper-personalized customer journeys and close deals faster with insights. By consolidating fragmented data, we provide a professional platform that improves relationships and ensures your team has context for growth.",
    img: uxAuditImg,
    reverse: false,
    alt: "Bespoke CRM software for enterprise customer intelligence"
  },
  {
    title: ["Seamless API Integration for CRM Systems"],
    desc: "Your CRM should not be an island. We provide seamless API integration for CRM and cloud-native scalable CRM architecture to connect tools like QuickBooks and Slack. This creates a friction-free environment where data moves as fast as your business does. Campaignsquat Ltd. ensures your technical infrastructure is fully synchronized, eliminating manual entry and allowing your professional team to focus on strategic growth rather than complex logistics.",
    img: accessibilityImg,
    reverse: true,
    alt: "Cloud-native CRM API integration and tool synchronization"
  },
  {
    title: ["AI-Powered Predictive CRM and Pipelines"],
    desc: "Gain total control over your revenue forecast with our AI-powered predictive CRM. These industry-specific CRM solutions utilize predictive logic to highlight high-value opportunities and alert your team the moment a lead goes cold. Increase your response velocity and never let a profitable deal slip through the cracks again. Campaignsquat Ltd. builds professional pipeline tools that visualize your sales journey, ensuring absolute clarity for managers.",
    img: businessImg,
    reverse: false,
    alt: "AI-powered predictive sales pipeline and CRM interface"
  },
  {
    title: ["GDPR and Privacy-First CRM Development"],
    desc: "Your data is your most valuable asset. We offer GDPR and privacy-first CRM development and legacy CRM modernization services with rigorous Role-Based Access Controls. Each team member sees only what they need to, ensuring operational privacy and building trust. Campaignsquat Ltd. provides a hardened, professional environment that complies with global data standards, safeguarding your intellectual property and sensitive customer info from any threat.",
    img: scalableImg,
    reverse: true,
    alt: "GDPR compliant CRM development and data privacy protocols"
  }
];

    const processSteps = [
    { 
        // Step 1: Strategic Biz Audit
        title: "Strategic Biz Audit", 
        description: "Analyzing current sales friction points to map out a more efficient and automated digital journey today.", 
        image: discoveryImg, 
        alt: "Strategic business audit to identify sales friction and automate digital journeys" 
    },
    { 
        // Step 2: Custom Architecture
        title: "Custom Architecture", 
        description: "Designing a modular CRM architecture that fits your team's specific daily habits and reporting needs.", 
        image: designImg, 
        alt: "Designing modular CRM architecture and customized data reporting structures" 
    },
    { 
        // Step 3: Secure Data Migration
        title: "Secure Data Migration", 
        description: "Moving legacy data from old spreadsheets into a modern environment with zero data loss or downtime ever.", 
        image: iterationImg, 
        alt: "Secure CRM data migration from spreadsheets to modern cloud environments" 
    },
    { 
        // Step 4: Expert Growth Support
        title: "Expert Growth Support", 
        description: "Providing hands-on team training and ongoing technical optimization to ensure a long-term software ROI.", 
        image: handoffImg, 
        alt: "Post-launch CRM training and technical optimization for long-term ROI" 
    }
];

    const points = ["Custom Real-time Reporting", "High-Conversion Sales Triggers", "Cloud-Based Mobile Access", "Intelligent Lead Ranking", "Scalable API-First Architecture"];

    const industryData = [
        { title: "Real Estate Tech", desc: " We build centralized cloud systems to automate property viewings and manage high-intent buyer leads with absolute precision.", img: img1, alt: "Real estate CRM technology" },

        { title: "B2B Professional Services", desc: "TOur experts develop automated milestone reminders to track long-term contracts and streamline complex client communications.", img: img2, alt: "B2B services management" },
        { title: "Retail & E-commerce", desc: "S We create integrated systems to sync customer purchase history with support tickets for personalized shopping experiences.", img: img3, alt: "Retail and ecommerce CRM" },

        { title: "Healthcare Systems", desc: "M Our team develops HIPAA-compliant data structures to manage patient follow-ups and secure scheduling for modern medical providers.", img: img4, alt: "Healthcare patient management system" },
        { title: "Subscription SaaS", desc: " We design churn monitoring tools and engagement analytics to help software companies proactively improve user retention and upsells.", img: img5, alt: "SaaS churn monitoring software" },
        { title: "Education Portals", desc: " Our developers build automated workflow triggers to streamline student applications and parent communications for global schools.", img: img6, alt: "Education portal and student management" },
        { title: "Financial Services", desc: "We craft high-security platforms to manage complex compliance documents and high-frequency client interactions with total safety.", img: img7, alt: "Financial services CRM compliance" },
        { title: "Automotive Groups", desc: " Our team builds centralized inventory pipelines and service history tracking systems across multiple branch locations for large-scale dealers.", img: img8, alt: "Automotive inventory and service CRM" },
    ];

    // Structured Data extraction
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom CRM Development Services",
        "provider": { "@type": "Organization", "name": "Campaignsquat Ltd." },
        "description": "Bespoke CRM solutions to automate workflows, track leads, and scale your business with custom data insights.",
        "areaServed": "Global"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "Why does my company need a custom CRM instead of HubSpot?", "acceptedAnswer": { "@type": "Answer", "text": "HubSpot and Salesforce are great but often charge 'per user' and include complex features you don't need. A Campaignsquat custom CRM is built solely around your unique sales process, meaning no extra fees for unnecessary features and total ownership of your data." }},
            { "@type": "Question", "name": "Is data migration from Excel or old systems safe?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in safe data migration. We map your existing customer history, clean up duplicates, and securely import everything into your new CRM without any loss of data integrity or business downtime." }},
            { "@type": "Question", "name": "Can this CRM connect with my existing marketing tools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our systems are built with an API-first mindset. Whether it's your website's contact forms, Mailchimp, WhatsApp, or accounting software like QuickBooks, we ensure a unified data flow across your entire tech stack." }},
            { "@type": "Question", "name": "What kind of support does Campaignsquat Ltd. provide post-launch?", "acceptedAnswer": { "@type": "Answer", "text": "We don't just build and leave. We provide complete team training, detailed documentation, and ongoing technical support to ensure your team is using the CRM to its full potential for maximum ROI." }}
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom CRM Development | Campaignsquat Ltd.</title>
                <meta name="description" content="Tailored CRM solutions for Campaignsquat Ltd clients. Automate workflows, track leads, and scale your business with custom data insights." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Custom CRM Development | Campaignsquat Ltd." />
                <meta property="og:description" content="Bespoke CRM systems that eliminate spreadsheet chaos and automate sales workflows." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center mt-4 md:mt-20  overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                                 Bespoke CRM Solutions for High-Growth Teams Across Global Markets
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Remove spreadsheet chaos with custom CRM systems from Campaignsquat Ltd. We centralize your customer data, automate your sales workflows, and provide the insights you need to scale faster. Our robust platforms boost efficiency and turn complex data into a measurable asset.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                               <button aria-label="Consult our experts about custom CRM" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[12px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                               Consult Our Experts
                               </button>
                          </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Campaignsquat bespoke CRM software interface preview" 
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
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center  ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Bespoke CRM Solutions Service Expertise Pro </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* গ্রিড লেআউট: ২-কলামে আপডেট করা হয়েছে */}
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
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* 3. Features Section */}
            <section className="py-12 md:py-20 ">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full  ">
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
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6"> Our Bespoke CRM Solutions Process</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-5xl mx-auto font-light">A systematic deployment roadmap ensuring a seamless transition to your custom CRM ecosystem.</p>
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative  ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                Why is Campaignsquat Ltd the best Castom CRM Software & Devlopment service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We deliver high-impact CRM solutions tailored to solve your communication bottlenecks and turn leads into loyal customers.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[18px] md:text-[20px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                  <button aria-label="Build your custom CRM" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                      Build Your CRM
                                  </button>
                              </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat CRM efficiency and data visualization" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Vertical Expertise</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Custom CRM architectures optimized for niche business sectors to drive maximum retention.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
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

// Separated Questions Component
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
    {
        question: "Why does my company need a custom CRM instead of HubSpot?",
        answer: " HubSpot and Salesforce are great but often charge 'per user' and include complex features you don't need. A Campaignsquat custom CRM is built solely around your unique sales process, meaning no extra fees for unnecessary features and total ownership of your data."
    },
    {
        question: "Is data migration from Excel or old systems safe?",
        answer: "Absolutely. We specialize in safe data migration. We map your existing customer history, clean up duplicates, and securely import everything into your new CRM without any loss of data integrity or business downtime."
    },
    {
        question: "Can this CRM connect with my existing marketing tools?",
        answer: "Yes. Our systems are built with an API-first mindset. Whether it's your website's contact forms, Mailchimp, WhatsApp, or accounting software like QuickBooks, we ensure a unified data flow across your entire tech stack."
    },
    {
        question: "What kind of support does Campaignsquat Ltd. provide post-launch?",
        answer: "We don't just build and leave. We provide complete team training, detailed documentation, and ongoing technical support to ensure your team is using the CRM to its full potential for maximum ROI."
    }
];

    return (
        <section className="w-full bg-[#02050A]  py-12 md:py-20  overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Common Inquiries
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Everything you need to know about our custom CRM development.
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

export default CustomCRM;