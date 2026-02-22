import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// images inputs
import heroImage from '../assets/images/Campaignsquat Android development experts building mobile applications.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Professional Android UX audit and analysis .webp";
import accessibilityImg from "../assets/images/Android hardware and IoT integration.webp";
import businessImg from "../assets/images/Secure Android app development compliance.webp";
import scalableImg from "../assets/images/Scalable Android architecture using Jetpack.webp";
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

const AndroidApps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
  {
    title: "Kotlin-Based Backend",
    desc: "We build robust and high-performance Android applications using modern Kotlin-based logic for maximum stability. Our team ensures that your app is secure and scalable, providing a professional experience for millions of global smartphone users.",
    img: researchIcon,
    alt: "Kotlin-Based Android App Development and Backend Logic"
  },
  {
    title: "Responsive Android UI",
    desc: "Crafting intuitive and fluid interfaces that adapt perfectly to various screen sizes and Android device versions. We prioritize material design principles to ensure a professional and engaging user journey that drives high app retention rates.",
    img: uxIcon,
    alt: "Responsive Android UI Design and Material Design Standards"
  },
  {
    title: "Play Store Optimization",
    desc: "Preparing your application for a successful launch by following strict Play Store guidelines and optimization standards. Our experts focus on technical performance and metadata to help your app gain visibility and trust in a competitive market.",
    img: auditIcon,
    alt: "Play Store Optimization and Android App Launch Strategy"
  },
  {
    title: "Secure Android API Sync",
    desc: "Integrating secure third-party APIs to extend the functionality of your Android application without compromising data safety. We build encrypted bridges for seamless data synchronization to maintain a professional and safe digital environment.",
    img: webIcon,
    alt: "Secure Android API Syncing and Data Protection"
  }
];
    const featureData = [
  {
    title: ["Native Kotlin App Development Solutions"],
    desc: "We don't just build; we refine. Campaignsquat Ltd. specializes in native Kotlin app development and Android UI/UX design following Material Design 3 (M3) guidelines. Our team conducts deep-dive UX audits to eliminate friction points. By using the Jetpack Compose framework, we ensure your app provides a frictionless experience that turns first-time downloads into loyal users. We deliver professional interfaces that prioritize high-speed navigation today.",
    img: uxAuditImg,
    reverse: false,
    alt: "Native Kotlin Android development with Material Design 3 UI"
  },
  {
    title: ["Enterprise Android Application Solutions"],
    desc: "Bridge the gap with enterprise Android application solutions featuring on-device machine learning (ML Kit) and IoT connectivity. We engineer low-level interactions that remain stable across the fragmented landscape. Whether it is custom Android app development for e-commerce startups or hardware sync, we ensure professional stability. Campaignsquat Ltd. provides technical edges with cross-device synchronization and hardware-aware software logic today.",
    img: accessibilityImg,
    reverse: true,
    alt: "Enterprise Android IoT and Machine Learning integration"
  },
  {
    title: ["Biometric-Secured Android Apps and Safety"],
    desc: "Navigate the Google Play Store submission process with confidence. We develop biometric-secured Android apps using biometric authentication for Android and rigorous security protocols. Our process ensures API 34/35 compatibility while shielding your brand from vulnerabilities. Campaignsquat Ltd. provides a smooth publishing experience with APK and AAB (Android App Bundle) optimization, ensuring your professional data privacy meets every global standard.",
    img: businessImg,
    reverse: false,
    alt: "Secure Android development with biometric authentication and Play Store compliance"
  },
  {
    title: ["Scalable Android Application Development"],
    desc: "Future-proof your investment with scalable Android application development for large-scale enterprises. We utilize a cloud-native Android architecture and Mobile Backend-as-a-Service (MBaaS) to create modular systems. This technical maturity allows for rapid updates and affordable Android app development with AI integration. Campaignsquat Ltd. delivers clean-code foundations that grow with your user base, ensuring your product evolves with the market.",
    img: scalableImg,
    reverse: true,
    alt: "Scalable Android architecture using Jetpack and MBaaS"
  }
];

    const processSteps = [
    { 
        // Step 1: Product Discovery
        title: "Product Discovery", 
        description: "Deep-dive analysis of your business goals and technical requirements to define a robust project roadmap.", 
        image: discoveryImg, 
        alt: "Android product discovery and technical project roadmap analysis" 
    },
    { 
        // Step 2: Prototyping & UI/UX
        title: "Prototyping & UI/UX", 
        description: "Creating interactive wireframes to validate user flows before a single line of code is written today.", 
        image: designImg, 
        alt: "Interactive Android UI/UX prototyping and user flow validation" 
    },
    { 
        // Step 3: Agile Development
        title: "Agile Development", 
        description: "Sprints-based coding with regular builds, allowing for continuous feedback and architectural precision.", 
        image: iterationImg, 
        alt: "Agile Android development sprints with architectural precision coding" 
    },
    { 
        // Step 4: Quality & Deployment
        title: "Quality & Deployment", 
        description: "Exhaustive testing across real devices followed by a managed launch on the Google Play Store for success.", 
        image: handoffImg, 
        alt: "Android app testing on real devices and Google Play Store deployment" 
    }
];
    const points = ["Kotlin-First Development", "Material Design Excellence", "API 30+ Compatibility", "Firebase Cloud Integration", "Multi-Language Support"];

    const industryData = [
    { 
        title: "Digital E-wallets", 
        desc: "We build secure Android-based payment solutions featuring NFC connectivity and high-level encryption for modern financial transactions.", 
        img: img1, 
        alt: "Android e-wallet app solution" 
    },
    { 
        title: "Retail Marketplaces", 
        desc: "Our experts develop scalable shopping applications optimized for the diverse Android device market to drive higher user engagement.", 
        img: img2, 
        alt: "Android marketplace app development" 
    },
    { 
        title: "Mobile Healthcare", 
        desc: "We create medical monitoring apps that integrate seamlessly with wearable devices to track vital data with mobile-first precision.", 
        img: img3, 
        alt: "Healthcare mobile app for android" 
    },
    { 
        title: "Smart Learning", 
        desc: "Our team builds educational apps featuring intelligent offline modes and local storage for a continuous learning experience without internet.", 
        img: img4, 
        alt: "Android e-learning application" 
    },
    { 
        title: "Field Enterprise", 
        desc: "We develop custom Android tools for field workers featuring real-time office management and secure data synchronization for large teams.", 
        img: img5, 
        alt: "Enterprise android software tools" 
    },
    { 
        title: "Property & Real Estate", 
        desc: "Our designers craft real estate apps with Google Maps integration and AR property tours to provide immersive house hunting.", 
        img: img6, 
        alt: "Real estate android app integration" 
    },
    { 
        title: "Logistics Tech", 
        desc: "We build efficient delivery tracking systems with background location services and route optimization to maximize supply chain speed.", 
        img: img7, 
        alt: "Android logistics and tracking app" 
    },
    { 
        title: "Food Tech Systems", 
        desc: "Our team develops interactive ordering systems featuring real-time cloud messaging alerts for instant updates on every customer order.", 
        img: img8, 
        alt: "Food delivery android application" 
    },
];

    const faqs = [
        {
            question: "How do you handle Android fragmentation across different devices?",
            answer: "We utilize responsive design frameworks and exhaustive testing on real-device labs to ensure consistent performance across various screen sizes, OS versions, and hardware specs."
        },
        {
            question: "What is the typical timeline for an enterprise Android app?",
            answer: "While complexity dictates the schedule, a standard MVP typically takes 12–16 weeks from discovery to deployment."
        },
        {
            question: "Will my app be ready for the latest Android version updates?",
            answer: "Yes. We build using modern libraries (Jetpack/Kotlin) that ensure forward compatibility and provide post-launch support for OS updates."
        },
        {
            question: "How do you ensure the security of user data?",
            answer: "We implement end-to-end encryption, secure API communication (HTTPS/TLS), and adhere to OWASP mobile security standards to mitigate risks."
        },
        {
            question: "Who owns the source code after the project is completed?",
            answer: "Upon final payment, Campaignsquat Ltd. transfers full intellectual property rights and source code ownership to your company."
        }
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Android App Development Services | Campaignsquat Ltd.</title>
                <meta name="description" content="Build scalable, secure mobile apps with Campaignsquat Ltd. Our expert Android developers deliver custom UI/UX, native performance, and Play Store success." />
                <link rel="canonical" href={window.location.href} />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Android App Development Services | Campaignsquat Ltd." />
                <meta property="og:description" content="Build scalable, secure mobile apps with Campaignsquat Ltd. Our expert Android developers deliver custom UI/UX, native performance." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={heroImage} />

                {/* Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Service",
                        "serviceType": "Android App Development",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Campaignsquat Ltd."
                        },
                        "description": "High-performance Android application development using Kotlin and Java with a focus on UI/UX and native performance."
                    })}
                </script>

                {/* FAQ Schema */}
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
            <section className="relative w-full flex items-center mt-4 md:mt-20 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                                Scalable Android App Development Services By Campaignsquat Ltd.
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                 Enhance your digital presence with high-performance Android applications. We bridge the gap between complex backend architecture and intuitive user experiences to deliver secure, market-ready mobile solutions. Our custom apps provide the growth you need to succeed globally
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                              <Link to="/home/contact" className="w-full sm:w-auto">
                                <button aria-label="Launch Your Android Project" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                  Launch Your Android Project
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Campaignsquat Android development experts building mobile applications" 
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Android App Development Expertise for Growth</h2>
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
                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                        <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                    {/* এম্বিয়েন্ট গ্লো ইফেক্ট */}
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
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  ">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic Android Development</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A disciplined workflow designed to take your vision from blueprint to a high-ranking app. </p>
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                                Why is Campaignsquat Ltd the best Android App Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We don't just build apps; we create digital experiences that win the hearts of Android users globally.</p>
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-6 h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[16px] md:text-[18px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                               <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                              <button aria-label="Get Started with Android Development" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                  Get Started
                                  </button>
                             </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat android development excellence showcase" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Android App Expertise for Global Success</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert Android app development for diverse industries to drive digital success. We build scalable, high-performance Android solutions that ensure seamless user journeys and robust backend stability across all your global business sectors and devices.</p>
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

export default AndroidApps;