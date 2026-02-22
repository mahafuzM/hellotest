import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Integrated Helmet
import BrandSlider from './BrandSlider';

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from '../assets/images/Professional Website Speed Optimization Dashboard showing high performance scores.webp';
import blueprintIcon from '../assets/images/research.png';
import userFlowIcon from '../assets/images/ux-design (1).png';
import architectureIcon from '../assets/images/web-design.png';
import testingIcon from '../assets/images/3d-modeling.png'; 
import architectureImg from "../assets/images/Website Speed Performance impact on ROI and Conversion Rates.webp";
import userJourneyImg from "../assets/images/Mobile First Speed Optimization and Responsive Web Performance.webp";
import lowFidImg from "../assets/images/Technical SEO and Website Growth Architecture Optimization.webp";
import validationImg from "../assets/images/Website Security Hardening and Edge CDN Reliability.webp";
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

const SiteOptimization = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   const expertiseData = [
  {
    title: "Core Web Vitals Fix",
    desc: "We optimize your site to meet Google's Core Web Vitals standards by improving loading speed and visual stability. Our team focuses on fixing layout shifts and response times to ensure your business stays at the top of search engine rankings.",
    img: architectureIcon,
    alt: "Core Web Vitals Fix and Google Search Ranking Optimization"
  },
  {
    title: "Image Asset Compression",
    desc: "Implementing advanced image compression techniques to reduce page weight without losing any visual quality. We ensure your website loads instantly on all mobile devices by optimizing every graphic asset for maximum digital performance and speed.",
    img: blueprintIcon,
    alt: "Image Asset Compression and Mobile Speed Optimization"
  },
  {
    title: "Clean Code Minimization",
    desc: "Our experts clean up messy code and minify CSS and Javascript files to streamline your website's background processing. This technical refinement reduces server load and provides a smooth browsing experience for your global customer base today.",
    img: userFlowIcon,
    alt: "Clean Code Minimization and JavaScript Minification"
  },
  {
    title: "Server Response Tuning",
    desc: "Optimizing server response times and database queries to ensure your site handles high traffic volumes effortlessly. We build a high-speed infrastructure that minimizes latency and keeps your users engaged through rapid and seamless navigation.",
    img: testingIcon,
    alt: "Server Response Tuning and Database Latency Optimization"
  }
];

   const featureData = [
  {
    title: ["Performance as a Strategic Revenue Driver"],
    desc: "A mere one-second delay can devastate your conversion rates. Campaignsquat Ltd. provides Core Web Vitals optimization services, focusing on LCP and CLS fix for WordPress to ensure speed as a revenue driver. By optimizing the critical rendering path and server-side rendering (SSR) for speed, we ensure your site feels instantaneous. Our approach reduces friction in the buyer journey and increases ROI through professional, instant website loading solutions.",
    img: architectureImg,
    reverse: false,
    alt: "Website Speed Performance impact on ROI and Conversion Rates"
  },
  {
    title: ["Mobile-First Speed and Smooth Engineering"],
    desc: "With mobile traffic dominating the web, we provide mobile page speed optimization using hardware-accelerated animations and image and video delivery optimization. Our approach guarantees lightning-fast loads even on unstable networks, ensuring a fluid experience. We utilize bloated plugin and script removal to keep your mobile interface lean. Campaignsquat Ltd. prioritizes asset compression to ensure your professional brand remains accessible and fast.",
    img: userJourneyImg,
    reverse: true,
    alt: "Mobile First Speed Optimization and Responsive Web Performance"
  },
  {
    title: ["WordPress Performance Tuning and Cleanup"],
    desc: "Search visibility starts with performance. We offer WooCommerce speed optimization for high traffic and Shopify page speed improvement to give you a competitive edge. Our WordPress performance tuning and cleanup resolve crawl errors while implementing advanced Schema markup. Faster sites index quicker, and our custom PHP/React site speed audit ensures your professional platform ranks higher while maintaining a dominant and speedy digital presence today.",
    img: lowFidImg,
    reverse: false,
    alt: "Technical SEO and Website Growth Architecture Optimization"
  },
  {
    title: ["Advanced Database and Object Caching Pro"],
    desc: "True optimization includes rock-solid uptime. We implement advanced database and object caching like Redis while utilizing edge computing for faster web performance. By patching vulnerabilities and offloading stress to the network edge, Campaignsquat Ltd. ensures your site remains secure during traffic surges. We provide a hardened, high-performance environment that protects your data while delivering consistent speed for your professional operations.",
    img: validationImg,
    reverse: true,
    alt: "Website Security Hardening and Edge CDN Reliability"
  }
];

    const processSteps = [
    { 
        // Step 1: Technical Deep-Dive
        title: "Technical Deep-Dive", 
        description: "Performance profiling using Lighthouse and specialized server tools to map every millisecond of lag today.", 
        image: discoveryImg, 
        alt: "Technical website performance profiling and lag mapping using Lighthouse" 
    },
    { 
        // Step 2: Strategic Code Fixes
        title: "Strategic Code Fixes", 
        description: "Executing resource minification, script deferral, and critical CSS inlining for rapid visual rendering.", 
        image: designImg, 
        alt: "Strategic code minification and critical CSS inlining for speed" 
    },
    { 
        // Step 3: Cloud Infrastructure
        title: "Cloud Infrastructure", 
        description: "Upgrading server environments and configuring global CDN edge delivery for consistent worldwide speed.", 
        image: iterationImg, 
        alt: "Cloud server environment upgrade and global CDN configuration" 
    },
    { 
        // Step 4: Validation & Monitoring
        title: "Validation & Monitoring", 
        description: "Rigorous post-launch testing to confirm sustained maximum performance gains across all global regions.", 
        image: handoffImg, 
        alt: "Post-launch speed validation and global performance monitoring" 
    }
];

    const points = [
        "90+ Google Lighthouse Performance Scores", 
        "Minimized Time to First Byte (TTFB)", 
        "Elimination of Render-Blocking Resources", 
        "Advanced Global Content Delivery (CDN)", 
        "Seamless Core Web Vitals Compliance"
    ];

    const industryData = [
        { title: "High-Volume E-Commerce", desc: "We maximize ROI by optimizing high-resolution product galleries and reducing checkout lag for a seamless retail experience.", img: img1, alt: "E-Commerce Website Speed Optimization for Sales" },
        { title: "SaaS & Web Applications", desc: "Our experts ensure complex dashboards feel responsive with app-like speed and efficient data handling for global software users.", img: img2, alt: "SaaS Application Performance and Dashboard Optimization" },
        { title: "Media & News Portals", desc: "We implement instant content delivery systems to handle millions of concurrent readers without compromising site performance.", img: img3, alt: "News Portal Speed Optimization for High Traffic" },
        { title: "Enterprise Portals", desc: ": Our team optimizes large-scale corporate systems to ensure seamless stakeholder engagement and fast internal employee workflows.", img: img4, alt: "Enterprise Portal Performance Engineering" },
        { title: "Lead-Gen Real Estate", desc: "We speed up image-heavy property searches to keep potential buyers engaged on mobile devices through rapid load times.", img: img5, alt: "Real Estate Website Image and Lead Gen Optimization" },
        { title: "Financial & Fintech", desc: "Our developers provide low-latency data updates while maintaining high-level encryption and security for critical banking transactions.", img: img6, alt: "Fintech Website Security and Low Latency Performance" },
        { title: "Global Booking Engines", desc: "We deliver zero-lag performance for travel and reservation platforms during peak booking windows to maximize user retention.", img: img7, alt: "Travel Booking Engine Speed Optimization" },
        { title: "High-End Portfolios", desc: "SOur team showcases ultra-high-res creative work with intelligent loading that doesn't sacrifice speed or visual quality.", img: img8, alt: "Creative Portfolio High Resolution Image Optimization" },
    ];

    // FAQ Data for Schema
    const faqSchemaData = [
        { q: "Why is website speed critical for my business ROI?", a: "Website speed directly impacts your bottom line. A delay of even one second can significantly drop conversion rates. Faster sites provide a better user experience, leading to higher customer retention and directly improved sales performance." },
        { q: "Do you provide a guarantee on Core Web Vitals (90+ score)?", a: "Yes. Our goal is always the 'Green Zone' (90+). We achieve this by optimizing server response times, minifying scripts, and implementing advanced asset delivery, ensuring your site hits peak performance benchmarks." },
        { q: "Will the optimization process break my website's design?", a: "Not at all. We use a staging environment where we perform code refactoring and script optimization. We ensure all visual elements remain intact while significantly reducing the technical weight of the platform." },
        { q: "Is this a one-time service or a monthly retainer?", a: "While we provide immediate one-time speed fixes, we also offer maintenance plans to ensure your performance doesn't degrade as you add new content or features to your site over time." },
        { q: "How long does it take to see results from speed optimization?", a: "You will notice instant improvements in load times immediately after deployment. Regarding SEO, search engines typically recognize the performance boost within a few weeks as they re-crawl your optimized pages." }
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            <Helmet>
                <title>Elite Website Speed Optimization | Campaignsquat Ltd.</title>
                <meta name="description" content="Maximize ROI with expert Website Speed Optimization. We master Core Web Vitals to boost rankings and conversions. Get your free performance audit today!" />
                <link rel="canonical" href="https://campaignsquat.com/website-speed-optimization" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Elite Website Speed Optimization | Campaignsquat Ltd." />
                <meta property="og:description" content="Maximize ROI with expert Website Speed Optimization. We master Core Web Vitals to boost rankings and conversions." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={heroImage} />

                {/* Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Website Speed Optimization",
                        "provider": {
                            "@type": "Organization",
                            "name": "Campaignsquat Ltd."
                        },
                        "description": "Maximize ROI with expert Website Speed Optimization. We master Core Web Vitals to boost rankings and conversions.",
                        "serviceType": "Technical SEO & Performance Optimization",
                        "areaServed": "Global"
                    })}
                </script>

                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqSchemaData.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
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
                            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] md:leading-[1.4]">Accelerate Your Digital Success With Elite Website Speed Optimization</h1>
                            <p className="text-white text-[16px] md:text-[20px] mx-auto lg:mx-0 leading-relaxed font-normal">
                              Stop losing revenue to slow load times. Campaignsquat Ltd. builds high-performance digital experiences that slash bounce rates and turn every millisecond into a competitive edge. Our technical solutions boost your search rankings and ensure a seamless journey for every visitor.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/home/contact" className="w-full sm:w-auto">
                                    <button aria-label="Request a performance audit" className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group">
                                      Audit My Site Performance
                                    </button>
                                  </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] blur-[80px] rounded-full"></div>
                            {/* Performance: Eager loading and high priority for LCP */}
                            <img 
                                src={heroImage} 
                                alt="Professional Website Speed Optimization Dashboard showing high performance scores" 
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
           <section className="bg-[#0A0A0A] py-12 md:py-20">
    <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
        <div className="mb-20">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Website Speed Optimization Expertise Growth</h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium"> We deploy a research-backed methodology to ensure your digital products are visually stunning and technically superior. Our approach as a custom UI/UX design agency ensures every pixel serves a specific and high-impact business purpose.</p>
        </div>

        {/* lg:grid-cols-2 ব্যবহার করা হয়েছে যাতে কার্ডগুলো চওড়া হয় এবং এক লাইনে ২টা করে থাকে */}
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <h2 className="sr-only">Core Performance Features</h2> {/* Invisible H2 for SEO hierarchy */}
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h3>
                                    <p className="text-white text-[16px] md:text-[17px] leading-relaxed font-light text-left max-w-[580px]">{item.desc}</p>
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
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Website Speed Optimization Pro</h2>
                        <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light"> A scientific, four-stage approach to identifying bottlenecks and accelerating performance.</p>
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
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">Why is Campaignsquat Ltd the best Site Optimization Design service provider?</h2>
                            <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">Optimization is an investment that pays for itself. From better search engine visibility to increased user satisfaction and higher sales, a fast site is the foundation of a successful digital business.</p>
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
                                  <button aria-label="Start your performance journey" className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group">
                                      Get Started Now
                                      </button>
                               </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Campaignsquat Optimization Excellence and Speed Performance Metrics" loading="lazy" className="w-full h-auto max-h-[650px] object-contain  shadow-2xl" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
                    <div className="text-center max-w-6xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Industry-Specific Speed Optimization Expertise for Results</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Campaignsquat Ltd. provides expert website speed optimization for diverse industries to drive digital success. We build high-performance, lightning-fast web experiences that ensure seamless user journeys and robust stability across all global business sectors and devices.</p>
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
                                        <p className="text-white text-[14px] md:text-[15px] font-light ">{item.desc}</p>
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
            question: "Why is website speed critical for my business ROI?",
            answer: "Website speed directly impacts your bottom line. A delay of even one second can significantly drop conversion rates. Faster sites provide a better user experience, leading to higher customer retention and directly improved sales performance."
        },
        {
            question: "Do you provide a guarantee on Core Web Vitals (90+ score)?",
            answer: "Yes. Our goal is always the 'Green Zone' (90+). We achieve this by optimizing server response times, minifying scripts, and implementing advanced asset delivery, ensuring your site hits peak performance benchmarks."
        },
        {
            question: "Will the optimization process break my website's design?",
            answer: "Not at all. We use a staging environment where we perform code refactoring and script optimization. We ensure all visual elements remain intact while significantly reducing the technical weight of the platform."
        },
        {
            question: "Is this a one-time service or a monthly retainer?",
            answer: "While we provide immediate one-time speed fixes, we also offer maintenance plans to ensure your performance doesn't degrade as you add new content or features to your site over time."
        },
        {
            question: "How long does it take to see results from speed optimization?",
            answer: "You will notice instant improvements in load times immediately after deployment. Regarding SEO, search engines typically recognize the performance boost within a few weeks as they re-crawl your optimized pages."
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
                        Expert answers to your performance and scalability inquiries
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

export default SiteOptimization;