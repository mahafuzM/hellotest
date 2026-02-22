import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/Premium Personal Branding Website Development Agency.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 
import architectureImg from "../assets/images/Global Authority Branding Platform.webp";
import userJourneyImg from "../assets/images/Interactive ROI Case Study Design.webp";
import lowFidImg from "../assets/images/Thought Leadership CMS System.webp";
import validationImg from "../assets/images/Consulting Booking Integration.webp";
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

const PersonalBranding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
const expertiseData = [
  {
    title: "Unique Personal Identity",
    desc: "We design websites that reflect your unique personality and professional values to build instant trust with your audience. Our team focuses on visual storytelling to ensure your personal brand stands out as a leader in your specific industry.",
    img: architectureIcon,
    alt: "Unique Personal Branding and Visual Identity Design"
  },
  {
    title: "Expert Portfolio Display",
    desc: "Showcasing your best work through high-impact portfolio layouts that highlight your skills and professional achievements. We build interactive galleries that allow potential clients to explore your expertise and results with absolute clarity.",
    img: blueprintIcon,
    alt: "Expert Portfolio Display and Interactive Work Gallery"
  },
  {
    title: "Thought Leadership Blog",
    desc: "Integrating professional blog systems that empower you to share your insights and grow your authority online. Our clean code ensures that your content is easy to read and optimized for search engines to reach a wider global audience base.",
    img: userFlowIcon,
    alt: "Thought Leadership Blog System for Authority Building"
  },
  {
    title: "Social Media Integration",
    desc: "Seamlessly connecting your website with your social media profiles to create a unified digital presence. We ensure that your brand voice remains consistent across all platforms while driving traffic back to your professional personal website.",
    img: testingIcon,
    alt: "Social Media Integration for Unified Brand Presence"
  }
];
  const featureData = [
  {
    title: ["Engineering Your Global Digital Authority"],
    desc: "In a crowded market, your website is your most powerful handshake. Campaignsquat Ltd. specializes in building a personal brand website for tech executives and industry leaders. Our personal brand strategy and web design engine high-performance platforms that establish absolute authority. Whether you need executive presence digital platforms or consultant sites, we ensure your professional narrative reflects a premium standard of expertise and sophistication.",
    img: architectureImg,
    reverse: false,
    alt: "Engineering Your Global Digital Authority Branding Platform"
  },
  {
    title: ["Custom Portfolio Development for Creators"],
    desc: "Go beyond static resumes with custom portfolio development for creators and visionaries. We design authority-driven personal websites that visualize your strategic impact. This storytelling approach builds trust with stakeholders and justifies premium pricing. Our podcast and media-ready personal websites turn your digital presence into a 24/7 business development tool. Campaignsquat Ltd. ensures your professional portfolio radiates credibility and success.",
    img: userJourneyImg,
    reverse: true,
    alt: "Custom Portfolio Development for Creators and Interactive Impact Showcases"
  },
  {
    title: ["Scalable Systems for Thought Leaders Pro"],
    desc: "Content is the currency of influence. We offer personal branding website for LinkedIn thought leaders and speaker and author website development. Our scalable architecture includes membership-based personal brand platforms to share insights that attract board-level opportunities. Campaignsquat Ltd. provides the technical tools to maintain a professional presence as an industry visionary, ensuring your voice is heard by the right global audience today.",
    img: lowFidImg,
    reverse: false,
    alt: "Scalable Systems for Thought Leaders and Professional CMS"
  },
  {
    title: ["Integrated Booking and Consulting Systems"],
    desc: "Your website should be more than a profile; it should be a revenue engine. We provide integrated booking and consulting websites and lead-generating personal branding sites with secure payment gateways. By automating your workflow, we free you to focus on leading while your platform handles the logistics. Campaignsquat Ltd. ensures a professional experience that converts expertise into income, allowing your personal brand to scale with absolute precision.",
    img: validationImg,
    reverse: true,
    alt: "Integrated Booking and Consulting Systems and Automated Revenue Flow"
  }
];
    const processSteps = [
    { 
        // Step 1: Strategic Discovery
        title: "Strategic Discovery", 
        description: "Analyzing your market positioning to define a unique value proposition and set clear, data-driven goals.", 
        image: discoveryImg, 
        alt: "Personal brand market positioning and strategic goal setting" 
    },
    { 
        // Step 2: Identity Engineering
        title: "Identity Engineering", 
        description: "Developing premium typography and a tone of voice that radiates professional authority and trust daily.", 
        image: designImg, 
        alt: "Brand identity engineering with premium typography and authority" 
    },
    { 
        // Step 3: Full-Stack Build
        title: "Full-Stack Build", 
        description: "Coding a lightning-fast, responsive platform tailored specifically to your unique brand personality.", 
        image: iterationImg, 
        alt: "Full-stack personal brand website development for responsiveness" 
    },
    { 
        // Step 4: Deployment & Analytics
        title: "Deploy and Analytics", 
        description: "Launching with advanced tracking to measure influence and continuously refine for maximum performance.", 
        image: handoffImg, 
        alt: "Brand influence tracking and analytics deployment for growth" 
    }
];
    const points = [
        "Authority-Focused Aesthetic Identity", 
        "High-Conversion Mobile Experience", 
        "SEO-Optimized Thought Leadership Blog", 
        "Integrated Lead Capture & Booking", 
        "Ultra-Fast Page Loading & Performance"
    ];

    const industryData = [
        { title: "C-Suite & Executives", alt: "CEO Personal Branding", desc: " We build high-end digital presences for CEOs and Board Members to command corporate authority and professional credibility.", img: img1 },

        { title: "Strategic Consultants", alt: "Consultant Authority Hub", desc: " Our experts develop authority-building hubs for independent advisors and legal experts to showcase their deep industry knowledge.", img: img2 },
        { title: "Keynote Speakers", alt: "Speaker Portfolio Design", desc: " We create dynamic platforms featuring session reels and event booking funnels designed for global speakers and thought leaders.", img: img3 },
        { title: "Tech Architects & Leads", alt: "Tech Leader Digital Brand", desc: "Our team builds clean, high-performance portfolios for CTOs and senior developers to highlight their technical innovation and leadership.", img: img4 },
        { title: "High-Ticket Coaches", alt: "Coaching Sales Ecosystem", desc: " We design sales-driven ecosystems for business mentors with integrated booking and course flows to maximize client conversion.", img: img5 },

        { title: "Creative Directors", alt: "Creative Portfolio Showcase", desc: "SOur designers craft sophisticated, immersive showcases for photographers and luxury architects to display their visual masterpieces.", img: img6 },
        { title: "Founders & Entrepreneurs", alt: "Founder Trust Platform", desc: "S We develop story-driven platforms for startup founders to attract investors and build public trust through strategic design.", img: img7 },
        { title: "Thought Leaders & Authors", alt: "Author Influence Site", desc: "Our team builds elegant platforms for writers and researchers to showcase books, newsletters, and deep intellectual insights.", img: img8 },
    ];

    // Structured Data (Schema)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Personal Branding Website Development",
        "serviceType": "Web Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Elevate your professional legacy with high-performance personal branding platforms. We transform expertise into global authority for CEOs, consultants, and thought leaders.",
        "areaServed": "Worldwide"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does the development process take?",
                "acceptedAnswer": { "@type": "Answer", "text": "A high-performance personal brand site typically takes 6–8 weeks from audit to launch, ensuring every detail is polished for excellence." }
            },
            {
                "@type": "Question",
                "name": "What is the expected ROI of a personal brand site?",
                "acceptedAnswer": { "@type": "Answer", "text": "By centralizing your authority, our clients often see higher inbound leads, increased speaking fees, and shorter sales cycles for high-ticket consulting." }
            },
            {
                "@type": "Question",
                "name": "Can I manage my own content, like blogs or case studies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build on user-friendly CMS frameworks that allow you to publish thought-leadership articles, update your portfolio, or manage consultation bookings without needing any technical knowledge." }
            },
            {
                "@type": "Question",
                "name": "Is the platform scalable as my career evolves?",
                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our 'Scalable Architecture' approach ensures your site can grow from a simple portfolio to a full-scale digital ecosystem as your influence expands." }
            },
            {
                "@type": "Question",
                "name": "Do you provide ongoing technical support?",
                "acceptedAnswer": { "@type": "Answer", "text": "Campaignsquat Ltd. offers comprehensive post-launch support and maintenance to ensure your platform remains secure, fast, and ahead of the curve." }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Personal Branding Website Development | Campaignsquat Ltd.</title>
                <meta name="description" content="Elevate your professional influence with premium personal branding website development. We build high-authority platforms for CEOs & experts. Start today!" />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Personal Branding Website Development | Campaignsquat Ltd." />
                <meta property="og:description" content="Elevate your professional influence with premium personal branding website development." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center  mt-4 md:mt-20  overflow-hidden ">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-6 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] md:leading-[1.4] tracking-tighter">
                                Premium Personal Branding Website Development Services By Campaignsquat Ltd
                            </h1>

                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal opacity-90">
                                Enhance your professional legacy with a high-performance platform by Campaignsquat Ltd. We transform your expertise into a global authority, commanding attention and scaling your influence. Our custom solutions provide a scalable digital home that reflects your unique vision.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Start building your personal brand legacy" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                        Build Your Legacy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Premium Personal Branding Website Development Agency" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6"> Our Personal Branding Website Development Expert</h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহার করে এক লাইনে ২টা করে কার্ড সেট করা হয়েছে */}
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
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
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Personal Branding Website Process </h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A disciplined, four-stage workflow designed to move you toward recognized global authority. </p>
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative ">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best parsonal Branding Design service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We believe your name is your most valuable asset. Our mission is to provide you with a world-class digital platform that opens doors, builds connections, and enhances your professional life.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" aria-hidden="true" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                                    <button aria-label="Get started with your personal brand" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Branding Excellence and Digital Identity" loading="lazy" className="w-full h-auto max-h-[650px] object-contain rounded-[10px] border border-white/5 shadow-2xl" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Personal Branding Expertise for Leaders</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert personal branding website services for diverse industries to drive digital authority. We build scalable, high-performance platforms that ensure seamless user journeys and robust backend stability for global experts, leaders, and creators.</p>
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
            question: "How long does the development process take?",
            answer: "A high-performance personal brand site typically takes 6–8 weeks from audit to launch, ensuring every detail is polished for excellence."
        },
        {
            question: "What is the expected ROI of a personal brand site?",
            answer: "By centralizing your authority, our clients often see higher inbound leads, increased speaking fees, and shorter sales cycles for high-ticket consulting."
        },
        {
            question: "Can I manage my own content, like blogs or case studies?",
            answer: "Yes. We build on user-friendly CMS frameworks that allow you to publish thought-leadership articles, update your portfolio, or manage consultation bookings without needing any technical knowledge."
        },
        {
            question: "Is the platform scalable as my career evolves?",
            answer: "Absolutely. Our 'Scalable Architecture' approach ensures your site can grow from a simple portfolio to a full-scale digital ecosystem as your influence expands."
        },
        {
            question: "Do you provide ongoing technical support?",
            answer: "Campaignsquat Ltd. offers comprehensive post-launch support and maintenance to ensure your platform remains secure, fast, and ahead of the curve."
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

export default PersonalBranding;