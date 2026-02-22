import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";

// ইমেজ ইমপোর্টসমূহ (অপরিবর্তিত)
import heroImage from "../assets/images/Custom WordPress Development and UI UX design services by Campaignsquat Ltd.webp";
import blueprintIcon from "../assets/images/research.png";
import userFlowIcon from "../assets/images/ux-design (1).png";
import architectureIcon from "../assets/images/web-design.png";
import testingIcon from "../assets/images/3d-modeling.png";
import architectureImg from "../assets/images/Scalable WordPress CMS architecture for enterprise growth.webp";
import userJourneyImg from "../assets/images/Custom Gutenberg block development for dynamic content management.webp";
import lowFidImg from "../assets/images/Headless WordPress development for superior speed and security.webp";
import validationImg from "../assets/images/Managed WordPress security protocols and expert maintenance.webp";
import discoveryImg from "../assets/images/research.png";
import designImg from "../assets/images/ux-design (1).png";
import iterationImg from "../assets/images/web-design.png";
import handoffImg from "../assets/images/deployment.png";
import sideImg from "../assets/images/robust-web-development-and-industrial-expertise-showcase.webp";
import img1 from "../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp";
import img2 from "../assets/images/rpvu1v3dzk7wzyresb1u.jpg";
import img3 from "../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp";
import img4 from "../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7.webp";
import img5 from "../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp";
import img6 from "../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp";
import img7 from "../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png";
import img8 from "../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp";
import BrandSlider from "./BrandSlider";

const WordPressDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertiseData = [
    {
      title: "Custom Theme Creation",
      desc: "We build unique and high-performance WordPress themes from scratch to match your specific brand identity perfectly. Our team avoids heavy page builders to ensure a clean and fast-loading interface that ranks higher on global search engines.",
      img: architectureIcon,
      alt: "Custom WordPress Theme Development and Speed Optimization",
    },
    {
      title: "Plugin System Experts",
      desc: "Developing custom plugins and integrating essential tools to extend the functionality of your WordPress site safely. We focus on secure coding practices to ensure your platform remains stable and scalable while meeting your business objectives.",
      img: userFlowIcon,
      alt: "Custom WordPress Plugin Development and Systems Integration",
    },
    {
      title: "Performance Tuning UI",
      desc: "Our experts focus on speed optimization and database cleaning to provide a rapid user experience on all devices. We ensure your WordPress site achieves high core web vitals scores to lower bounce rates and improve overall user retention rates.",
      img: testingIcon,
      alt: "WordPress Performance Tuning and Core Web Vitals Optimization",
    },
    {
      title: "Secure Site Structure",
      desc: "Implementing advanced security protocols and clean site architecture to protect your digital assets from external threats. We provide a robust WordPress foundation that is easy to manage and update while maintaining professional grade safety.",
      img: blueprintIcon,
      alt: "Secure WordPress Architecture and Asset Protection",
    },
  ];

  const featureData = [
  {
    title: ["Enterprise WordPress Solutions for Agencies"],
    desc: "Most WordPress sites fail under load because they rely on fragile plugins. As a white-label WordPress development partner, Campaignsquat Ltd. architects your CMS for long-term stability using custom post types. This ensures your team can manage millions of visitors without performance risks, providing a foundation that evolves with your enterprise. We deliver professional WordPress development services that prioritize backend logic and global scale.",
    img: architectureImg,
    reverse: false,
    alt: "Scalable WordPress CMS architecture for enterprise growth"
  },
  {
    title: ["Lightweight WordPress Development Services"],
    desc: "Empower your team with total creative freedom through lightweight WordPress development. We develop proprietary Gutenberg blocks tailored to your brand, ensuring no bloated plugins slow you down. These drag-and-drop components allow you to build high-converting landing pages internally, eliminating constant developer needs. We provide professional, clean-coded tools that make content management seamless while keeping your brand identity intact.",
    img: userJourneyImg,
    reverse: true,
    alt: "Custom Gutenberg block development for dynamic content management"
  },
  {
    title: ["Core Web Vitals Ready WordPress Web Sites"],
    desc: "Speed is a ranking factor you cannot ignore. Our performance-first approach ensures Core Web Vitals ready WordPress sites that provide a competitive edge. By delivering a speed optimized WordPress website through headless configurations or lean code, we achieve instantaneous transitions. Campaignsquat Ltd. ensures your professional platform is lightning-fast, secure, and perfectly optimized for search engine rankings in the global market.",
    img: lowFidImg,
    reverse: false,
    alt: "Headless WordPress development for superior speed and security"
  },
  {
    title: ["Scalable WooCommerce Development Solutions"],
    desc: "Security and growth are our ongoing commitments. We specialize in WooCommerce development for scalable e-commerce stores, providing multi-layer security protocols and custom firewalls. Our managed support ensures your store and server environment are always patched and optimized against global threats. Campaignsquat Ltd. maintains a professional digital ecosystem that protects your sales and keeps your business running 24/7 with absolute precision.",
    img: validationImg,
    reverse: true,
    alt: "Managed WordPress security protocols and expert maintenance"
  }
];

 const processSteps = [
    { 
        // Step 1: Strategic Site Audit
        title: "Strategic Site Audit", 
        description: "Technical discovery to align your site architecture with specific business KPIs and SEO requirements.", 
        image: discoveryImg, 
        alt: "Strategic technical discovery and SEO audit for WordPress platforms" 
    },
    { 
        // Step 2: Custom Architecture
        title: "Custom Architecture", 
        description: "Blueprinting custom post types, data taxonomies, and API schemas for a streamlined editorial experience.", 
        image: designImg, 
        alt: "Customizing WordPress post types and complex data architecture mapping" 
    },
    { 
        // Step 3: Development and QA
        title: "Development and QA", 
        description: "Clean-room coding of your custom theme and features in a secure staging environment with rigorous testing.", 
        image: iterationImg, 
        alt: "Clean coding standards and WordPress theme quality assurance testing" 
    },
    { 
        // Step 4: Speed Optimization
        title: "Speed Optimization", 
        description: "Execution of final performance tuning, database indexing, and caching before the site officially goes live.", 
        image: handoffImg, 
        alt: "WordPress speed tuning, database indexing, and server-side caching" 
    }
];

  const points = [
    "Custom-Coded Themes (Zero Plugin Bloat)",
    "Complex WooCommerce & API Logic",
    "SEO-Optimized Technical Structure",
    "High-Security Hosting & Firewalls",
    "Ongoing WP Maintenance & Support",
  ];

  const industryData = [
    {
      title: "Corporate Portals",
      desc: "We build high-authority business websites designed for security, speed, and brand credibility to support global enterprise operations.",
      img: img1,
      alt: "Enterprise WordPress solutions for corporate portals",
    },
    {
      title: "Advanced E-Commerce",
      desc: " Our experts develop scalable WooCommerce stores with complex inventory and custom checkout logic for high-performance retail.",
      img: img2,
      alt: "Custom WooCommerce development for advanced e-commerce",
    },
    {
      title: "Digital Publishing",
      desc: " We create high-traffic news and media portals optimized for rapid content delivery and seamless reader experiences across all devices.",
      img: img3,
      alt: "High-traffic WordPress sites for digital publishers",
    },
    {
      title: "Creative Portfolios",
      desc: " Our team develops visually immersive showcases designed for agencies and premium brands to highlight their work with absolute precision.",
      img: img4,
      alt: "Interactive WordPress portfolio design for creative agencies",
    },
    {
      title: "Non-Profit Hubs",
      desc: "We craft engagement-driven platforms with secure donation systems and community features to drive social impact for global organizations.",
      img: img5,
      alt: "WordPress development for non-profit organizations",
    },
    {
      title: "LMS & EdTech",
      desc: "Our designers build customized learning management systems for courses, certifications, and student tracking to streamline digital education.",
      img: img6,
      alt: "WordPress LMS and EdTech platform development",
    },
    {
      title: "Real Estate WP",
      desc: " We develop powerful property listing sites with IDX/MLS integrations and advanced search filters for seamless real estate discovery.",
      img: img7,
      alt: "WordPress real estate website with IDX MLS integration",
    },
    {
      title: "Booking Platforms",
      desc: "Our team builds integrated reservation systems for healthcare and service-based businesses to optimize appointment scheduling and workflows.",
      img: img8,
      alt: "Custom WordPress booking and reservation systems",
    },
  ];

  // Structured Data Extraction
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom WordPress Website Development",
    provider: {
      "@type": "Organization",
      name: "Campaignsquat Ltd.",
    },
    description:
      "High-performance, secure, and SEO-optimized custom WordPress development services tailored for scalable business growth.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WordPress Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke Theme Engineering",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "WooCommerce Development" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Headless WordPress Solutions",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does your custom approach impact project timelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While 'off-the-shelf' themes are faster to install, our custom engineering saves months of troubleshooting and technical debt later. A standard high-performance build typically spans 6-10 weeks depending on complexity.",
        },
      },
      {
        "@type": "Question",
        name: "Will I be locked into your agency for content updates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely not. We build using native Gutenberg blocks, meaning your team can edit 100% of the content and layout through a simple drag-and-drop experience without ever touching code.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle security for high-traffic WordPress sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement a 'Hardened WordPress' stack, including custom login paths, disabled file editors, multi-layer firewalls, and enterprise-level encryption to mitigate vulnerabilities found in standard setups.",
        },
      },
      {
        "@type": "Question",
        name: "Can you migrate data from our existing CMS or older WP site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We specialize in complex data migrations, ensuring your SEO rankings, user records, and historical content are preserved with zero downtime through precise 301-redirect mapping.",
        },
      },
      {
        "@type": "Question",
        name: "Is custom development significantly more expensive than templates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a higher initial investment than a $50 template, but it yields a much higher ROI. You save significantly on long-term maintenance, eliminate plugin license fees, and gain superior SEO rankings.",
        },
      },
    ],
  };

  return (
    <main className="overflow-hidden font-poppins bg-[#02050a]">
      <Helmet>
        <title>
          WordPress Website Development | Custom Engineering | Campaignsquat
          Ltd.
        </title>
        <meta
          name="description"
          content="Elevate your brand with high-performance WordPress development. Campaignsquat Ltd. builds scalable, secure, and SEO-optimized custom sites. Start today."
        />
        <link rel="canonical" href={window.location.href} />
        <meta
          property="og:title"
          content="WordPress Website Development | Custom Engineering | Campaignsquat Ltd."
        />
        <meta
          property="og:description"
          content="Elevate your brand with high-performance WordPress development. Campaignsquat Ltd. builds scalable, secure, and SEO-optimized custom sites."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative w-full flex items-center mt-4 md:mt-20 pb-12  md:pb-16 overflow-hidden ">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
        <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] md:leading-[1.4]">
                Custom WordPress Website Development for Scalable Business
                Growth
              </h1>
              <p className="text-white text-[16px] md:text-[20px]  mx-auto lg:mx-0 leading-relaxed font-normal">
                Eliminate technical debt with Campaignsquat Ltd. We engineer
                high-performance, secure, and SEO-optimized WordPress ecosystems
                tailored to your business goals. Our full-stack expertise
                ensures a seamless user journey, transforming your site into a
                scalable and measurable asset.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                <Link to="/home/contact" className="w-full sm:w-auto">
                  <button
                    aria-label="Start your custom WordPress project"
                    className=" bg-[#F7A400] border-[#f7a400] border-2 text-black hover:text-white font-semibold py-2 px-8 md:px-10 text-[14px] md:text-[15px] rounded-[5px] transition-all duration-300 transform hover:bg-[#02050A] active:scale-95 group"
                  >
                    Launch Your Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
              <img
                src={heroImage}
                alt="Custom WordPress Development and UI UX design services by Campaignsquat Ltd"
                loading="eager"
                fetchpriority="high"
                className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden pt-20 md:pt-35 py-12 md:py-20 ">
        <BrandSlider />
      </section>

      {/* 2. Expertise Section */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center ">
          <div className="mb-20">
            {/* শিরোনামে WordPress এবং Expertise অংশকে হাইলাইট করা হয়েছে */}
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
              {" "}
              Our WordPress Website Development <span>Expertise Team</span>
            </h2>
            <p className="text-white text-[16px] md:text-[20px] mx-auto leading-relaxed font-medium">
              {" "}
              We deploy a research-backed methodology to ensure your digital
              products are visually stunning and technically superior. Our
              approach as a custom UI/UX design agency ensures every pixel
              serves a specific and high-impact business purpose.
            </p>
          </div>

          {/* গ্রিড লেআউট: ২-কলামে আপডেট করা হয়েছে (lg:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2 w-full"
              >
                {/* আইকন কন্টেইনার */}
                <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left"
                    style={{
                      filter:
                        "invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)",
                    }}
                  />
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="relative z-10">
                  <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* হোভার গ্লো ইফেক্ট */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full ">
          <div className="flex flex-col gap-24 md:gap-44">
            {featureData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}
              >
                <div className="w-full md:w-1/2">
                  <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                    {item.title.map((line, i) => (
                      <span
                        key={i}
                        className="block leading-[1.2] mb-1 last:mb-0"
                      >
                        {line}
                      </span>
                    ))}
                  </h2>
                  <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light text-left max-w-[580px]">
                    {item.desc}
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-[5px]">
                    <div className="absolute -inset-4 bg-[#F7A400]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="w-full bg-[#02050A] py-12 md:py-20">
        <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center mb-20 md:mb-28">
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">
               Our WordPress Development Process
            </h2>
            <p className="text-white text-[16px] md:text-[20px] max-w-5xl mx-auto font-light">
              A disciplined, four-stage workflow designed to mitigate risk and ensure a seamless launch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
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
                  <h3 className="text-white text-[22px] md:text-[24px] lg:text-[26px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Section */}
      <section className="py-20 md:py-32 lg:py-40 relative z-[1]">
        <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
              <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-8">
                Why is Campaignsquat Ltd the best Word press Development service provider?
              </h2>
              <p className="text-white text-[16px] md:text-[20px] leading-relaxed font-light mb-10 max-w-[580px]">
                We don't just 'install' WordPress; we engineer it. Our custom
                approach ensures your site is fast, impossible to hack, and
                extremely easy for you to manage.
              </p>
              <div className="flex flex-col gap-4 md:gap-4 mb-12">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="w-6 h-6 md:w-6 md:h-6 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                      <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                    </div>
                    <span className="text-white text-[16px] md:text-[18px] font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-start">
                <Link to="/home/contact" className="inline-block w-full sm:w-auto">
                  <button
                    aria-label="Get started with WordPress Engineering"
                    className=" bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[14px] md:text-[15px] rounded-[5px] px-8 md:px-10 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src={sideImg}
                  alt="WordPress Engineering Excellence and Custom Solutions by Campaignsquat"
                  loading="lazy"
                  className="w-full h-auto max-h-[700px] object-contain  shadow-2xl"
                />
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
            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">
              Our Industry-Specific WordPress Development Expertise for Growth
            </h2>
            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">
              Campaignsquat Ltd. provides expert WordPress website development
              for diverse industries to drive digital success. We build
              scalable, high-performance CMS solutions that ensure seamless user
              journeys and robust backend stability across all global business
              sectors and markets.
            </p>
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
                    <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white text-[14px] md:text-[15px] font-light opacity-90">
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

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does your custom approach impact project timelines?",
      answer:
        "While 'off-the-shelf' themes are faster to install, our custom engineering saves months of troubleshooting and technical debt later. A standard high-performance build typically spans 6-10 weeks depending on complexity.",
    },
    {
      question: "Will I be locked into your agency for content updates?",
      answer:
        "Absolutely not. We build using native Gutenberg blocks, meaning your team can edit 100% of the content and layout through a simple drag-and-drop experience without ever touching code.",
    },
    {
      question: "How do you handle security for high-traffic WordPress sites?",
      answer:
        "We implement a 'Hardened WordPress' stack, including custom login paths, disabled file editors, multi-layer firewalls, and enterprise-level encryption to mitigate vulnerabilities found in standard setups.",
    },
    {
      question: "Can you migrate data from our existing CMS or older WP site?",
      answer:
        "Yes. We specialize in complex data migrations, ensuring your SEO rankings, user records, and historical content are preserved with zero downtime through precise 301-redirect mapping.",
    },
    {
      question:
        "Is custom development significantly more expensive than templates?",
      answer:
        "It is a higher initial investment than a $50 template, but it yields a much higher ROI. You save significantly on long-term maintenance, eliminate plugin license fees, and gain superior SEO rankings.",
    },
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
                  ? "border-[#f7a400] bg-[#0A0A0A]"
                  : "border-[#02050a] bg-[#0A0A0A] hover:border-[#f7a400]"
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
                      <Minus
                        size={18}
                        className="md:w-[22px] md:h-[22px]"
                        strokeWidth={3}
                        color="black"
                      />
                    </div>
                  ) : (
                    <div className="bg-white/10 p-1 md:p-1.5 rounded-full">
                      <Plus
                        size={18}
                        className="md:w-[18px] md:h-[18px]"
                        strokeWidth={3}
                        color="white"
                      />
                    </div>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
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

export default WordPressDev;
