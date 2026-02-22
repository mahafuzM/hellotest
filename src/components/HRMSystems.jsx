import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react'; 
import { Helmet } from 'react-helmet-async'; // SEO metadata management
import BrandSlider from './BrandSlider'; 

// Images inputs
import heroImage from '../assets/images/Custom HRM Software Dashboard for Enterprise Workforce Management.webp';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/Employee lifecycle digital management interface dashboard.webp";
import accessibilityImg from "../assets/images/Automated payroll processing system interface.webp";
import businessImg from "../assets/images/Unified attendance tracking and biometric sync dashboard.webp";
import scalableImg from "../assets/images/Employee lifecycle digital management interface dashboard.webp";
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

const HRMSystems = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Section 2: Core Expertise (The Four Pillars)
    const expertiseData = [
  {
    title: "Employee Lifecycle Tool",
    desc: "We design intuitive systems that manage the entire employee journey from onboarding to offboarding. Our team ensures that all staff records are centralized in a professional digital hub to improve your overall workforce management and efficiency.",
    img: webIcon,
    alt: "Employee Lifecycle Management and Staff Onboarding Tool"
  },
  {
    title: "Smart Payroll Systems",
    desc: "Developing automated payroll modules that calculate salaries and taxes with absolute precision. We prioritize secure data processing and clean backend logic to ensure that your financial operations remain stable and professional at all times.",
    img: researchIcon,
    alt: "Smart Payroll Systems and Automated Tax Calculations"
  },
  {
    title: "Performance Analytics",
    desc: "Integrating advanced tracking tools that provide real-time insights into staff productivity and goal achievement. Our custom dashboards allow managers to make data-driven decisions to foster a high-performance culture within your global company.",
    img: auditIcon,
    alt: "Performance Analytics and Workforce Productivity Dashboards"
  },
  {
    title: "Secure Access Controls",
    desc: "Implementing robust permission-based security to protect sensitive employee data and company information. We build custom authentication layers that ensure your internal HR platform remains secure while providing a smooth user experience today.",
    img: uxIcon,
    alt: "Secure Access Controls and HR Data Privacy Protection"
  }
];

    // Section 3: Value-Add Features
   const featureData = [
  {
    title: ["Custom HRM Software Development Services"],
    desc: "Eliminate fragmented data and manual paperwork. Campaignsquat Ltd. offers custom HRM software development services and full-cycle employee lifecycle management software to centralize the employee journey. From AI-powered recruitment and ATS to digital employee onboarding and training portals, we create a unified digital identity for your staff. Our professional systems reduce administrative overhead while ensuring data integrity across your organization.",
    img: uxAuditImg,
    reverse: false,
    alt: "Custom HRM software and full-cycle employee lifecycle management"
  },
  {
    title: ["Automated Payroll and Tax Compliance Tech"],
    desc: "Payroll errors can damage trust and lead to penalties. Our enterprise HR automation platforms provide automated payroll and tax compliance software that handles complex tax slabs and bonus structures with a single click. Integrated with local laws, the system generates instant payslips and financial reports. Campaignsquat Ltd. delivers professional payroll engines that ensure your fiscal operations remain flawless while protecting your employee data.",
    img: accessibilityImg,
    reverse: true,
    alt: "Automated payroll processing and tax compliance software"
  },
  {
    title: ["Smart Attendance and Leave Management Pro"],
    desc: "Manage your hybrid workforce with precision. We develop smart attendance and leave management systems featuring biometric sync and employee performance and KPI tracking tools. By centralizing shift management into one transparent dashboard, we provide managers with accurate data to optimize resources. Campaignsquat Ltd. ensures your professional workforce remains productive, utilizing cloud-based HR portal development to keep your team connected today.",
    img: businessImg,
    reverse: false,
    alt: "Smart attendance management and biometric sync interface"
  },
  {
    title: ["Privacy-First Employee Data Management"],
    desc: "Shift the burden of inquiries with self-service employee mobile apps and VR/AR-integrated employee training modules. We prioritize privacy-first employee data management to ensure total security for sensitive records. This user-centric approach boosts satisfaction and frees HR specialists for high-impact talent initiatives. Campaignsquat Ltd. delivers professional portals that foster transparency while improving overall operational efficiency.",
    img: scalableImg,
    reverse: true,
    alt: "Privacy-first employee data management and self-service portals"
  }
];

    // Section 4: Process (The Roadmap)
   const processSteps = [
    { 
        // Step 1: Strategic Needs Audit
        title: "Strategic Needs Audit", 
        description: "Deep-dive analysis of current HR bottlenecks to define a bespoke and high-performance technical architecture.", 
        image: discoveryImg, 
        alt: "Strategic HR needs discovery and technical bottleneck analysis" 
    },
    { 
        // Step 2: System Blueprinting
        title: "System Blueprinting", 
        description: "Designing high-fidelity wireframes and database schemas optimized for secure and high-speed data retrieval.", 
        image: designImg, 
        alt: "HRM system blueprinting with secure database schema design" 
    },
    { 
        // Step 3: Agile Development
        title: "Agile Development", 
        description: "Sprints-based coding focusing on secure payroll logic and seamless third-party API integrations for you.", 
        image: iterationImg, 
        alt: "Agile HRM development focusing on payroll logic and API integration" 
    },
    { 
        // Step 4: Full-Scale Deploy
        title: "Full-Scale Deploy", 
        description: "Rigorous UAT followed by a smooth transition to your live environment and comprehensive staff training.", 
        image: handoffImg, 
        alt: "Full-scale HRM deployment with UAT and staff training sessions" 
    }
];

    const points = [
        "Automated Tax & Statutory Compliance", 
        "Biometric & IoT Device Integration", 
        "Mobile-First Employee Experience", 
        "Custom Multi-level Approval Flows", 
        "Advanced Real-time HR Analytics"
    ];

   const industryData = [
    { 
        title: "Corporate Offices", 
        desc: "We build systems for managing large-scale teams with complex department hierarchies and specific internal roles to ensure organizational clarity.", 
        img: img1, 
        alt: "Custom HRM for Corporate Offices" 
    },
    { 
        title: "Retail Chains", 
        desc: "Our experts develop robust tools for tracking shifts and attendance for staff across hundreds of different physical locations for total visibility.", 
        img: img2, 
        alt: "HRM Solutions for Retail Chains" 
    },
    { 
        title: "Healthcare Systems", 
        desc: "We create precise roster management for doctors and medical staff designed to handle sensitive and complex shift cycles securely.", 
        img: img3, 
        alt: "HRM for Healthcare and Medical Systems" 
    },
    { 
        title: "Tech Startups", 
        desc: "Our team builds flexible systems for managing remote or hybrid teams with integrated performance-driven growth metrics and productivity tracking.", 
        img: img4, 
        alt: "Scalable HRM for Tech Startups" 
    },
    { 
        title: "Manufacturing Units", 
        desc: "We develop comprehensive tracking for factory shifts, overtime, and labor law compliance to ensure smooth industrial operations.", 
        img: img5, 
        alt: "HRM for Manufacturing and Factory Management" 
    },
    { 
        title: "Educational Inst.", 
        desc: "Our designers craft centralized platforms for faculty records and automated payroll systems tailored for teaching and support staff.", 
        img: img6, 
        alt: "HRM for Educational Institutes and Schools" 
    },
    { 
        title: "Hospitality & Hotels", 
        desc: "We build management tools for seasonal staffing needs and complex split-shift attendance records for global hotel chains.", 
        img: img7, 
        alt: "HRM for Hospitality, Hotels and Tourism" 
    },
    { 
        title: "BPO/Call Centers", 
        desc: "Our team develops high-volume staff tracking systems with a focus on real-time productivity and agent availability for global operations.", 
        img: img8, 
        alt: "HRM for BPO and Call Center Operations" 
    },
];

    // Structured Data (JSON-LD)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom HRM Software Development",
        "provider": {
            "@type": "Organization",
            "name": "Campaignsquat Ltd."
        },
        "description": "Custom HRM software with automated payroll, real-time attendance tracking, and employee self-service portals to optimize workforce efficiency.",
        "areaServed": "Worldwide"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is our employee data secure in your custom HRM system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Data security is our top priority. We implement end-to-end bank-grade encryption, multi-factor authentication (MFA), and granular role-based access control (RBAC)."
                }
            },
            {
                "@type": "Question",
                "name": "Can the system handle complex payroll structures and tax slabs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our high-precision payroll engine is built to handle multi-layered salary structures, including bonuses, overtime, provident funds, and regional tax (GST/VAT) compliance."
                }
            },
            {
                "@type": "Question",
                "name": "Does your HRM software support biometric and GPS integration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We specialize in API-first development and can integrate your system with physical biometric devices and GPS-based geo-fencing for remote employees."
                }
            },
            {
                "@type": "Question",
                "name": "Can we migrate our existing employee records to the new system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we handle the entire data migration process securely from Excel or legacy HR software without any data loss or downtime."
                }
            },
            {
                "@type": "Question",
                "name": "How does the Employee Self-Service (ESS) portal benefit my team?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The ESS portal empowers employees to manage profiles and leaves independently, reducing HR administrative workload by up to 40%."
                }
            }
        ]
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Custom HRM Software for Workforce Efficiency & ROI | Campaignsquat Ltd.</title>
                <meta name="description" content="Optimize workforce efficiency with custom HRM software. Automated payroll, attendance tracking, and employee portals by Campaignsquat Ltd. Get a free quote today!" />
                <link rel="canonical" href="https://campaignsquat.com/hrm-systems" />
                <meta property="og:title" content="Custom HRM Software for Workforce Efficiency | Campaignsquat Ltd." />
                <meta property="og:description" content="Automated payroll, real-time attendance tracking, and data-driven performance metrics for growing workforces." />
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
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                               Custom HRM Software for Workforce Efficiency and ROI Solutions Now
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                                Conquer manual HR bottlenecks with automated payroll, time tracking, and data-driven metrics. Campaignsquat Ltd. builds scalable HRMS to power your growing workforce. Our platforms enhance productivity and human capital while ensuring your business grows securely and fast.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                               <Link to="/home/contact" className="w-full sm:w-auto">
                                 <button aria-label="Get a technical quote for HRM software" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                    Get Your Technical Quote Now
                                  </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img 
                                src={heroImage} 
                                alt="Custom HRM Software Dashboard for Enterprise Workforce Management" 
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

            {/* 2. Expertise Section */}
           <section className="bg-[#0A0A0A] py-12 md:py-20 ">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Custom HRM Software Service Expertise Pro </h2>
            <p className="text-white text-[16px] md:text-[20px]  mx-auto leading-relaxed font-medium">We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* গ্রিড লেআউট: lg:grid-cols-2 ব্যবহার করা হয়েছে */}
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
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16  w-full">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6"> Our Strategic HRM Development Pro</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">A rigorous, high-authority engineering roadmap to ensure your software is scalable and secure.</p>
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
                               Why is Campaignsquat Ltd the best HRM Systems Software & Devlopment service provider?
                                </h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">We deliver secure and automated HRM solutions tailored to solve complex workforce management bottlenecks.</p>
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
                                 <button aria-label="Get started with custom HRM" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                  Get Started
                                 </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat HRM Excellence Dashboard Interface" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Custom HRM Expertise for Global Teams</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert custom HRM software for diverse industries to drive workforce success. We build scalable, high-performance architectures that ensure seamless user journeys and robust backend stability across all your global business sectors and personnel workflows. </p>
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

// Section 5: Proactive FAQ
const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
    {
        question: "Is our employee data secure in your custom HRM system?",
        answer: "Data security is our top priority. We implement end-to-end bank-grade encryption, multi-factor authentication (MFA), and granular role-based access control (RBAC). This ensures that sensitive employee records and payroll data are only accessible by authorized personnel."
    },
    {
        question: "Can the system handle complex payroll structures and tax slabs?",
        answer: "Yes. Our high-precision payroll engine is built to handle multi-layered salary structures, including bonuses, overtime, provident funds, and regional tax (GST/VAT) compliance. Everything is automated to ensure financial accuracy and eliminate manual errors."
    },
    {
        question: "Does your HRM software support biometric and GPS integration?",
        answer: "Absolutely. We specialize in API-first development and can integrate your system with physical biometric devices (fingerprint/facial recognition) for in-office staff and GPS-based geo-fencing for remote employees, providing real-time attendance data."
    },
    {
        question: "Can we migrate our existing employee records to the new system?",
        answer: "Yes, we handle the entire data migration process securely. Whether your records are currently in Excel or another legacy HR software, we ensure a seamless transfer without any data loss or downtime using our blueprinting process."
    },
    {
        question: "How does the Employee Self-Service (ESS) portal benefit my team?",
        answer: "The ESS portal empowers employees to manage their own profiles, apply for leaves, and download pay slips independently. This reduces the HR department's administrative workload by up to 40% and increases organizational transparency and trust."
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
                        Expert answers to your most frequent HR software inquiries
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

export default HRMSystems;