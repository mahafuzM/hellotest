import React, { useState } from 'react';
import { Search } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 

// ইমেজ ইমপোর্ট
import blogImg1 from '../assets/images/scalable-design-systems.webp';
import blogImg2 from '../assets/images/user-research-behavioral-psychology.webp';
import blogImg3 from '../assets/images/interaction-design-motion-ux.webp';
import blogImg4 from '../assets/images/custom-ecommerce-web-development.webp'; 
import blogImg5 from '../assets/images/benefits-custom-web-development-2025.webp';    
import blogImg6 from '../assets/images/laravel-web-development-services.webp';
import blogImg7 from '../assets/images/modern-software-development-trends-2026.webp';
import blogImg8 from '../assets/images/typescript-enterprise-software.webp';
import blogImg9 from '../assets/images/ai-driven-software-testing.webp';
import blogImg10 from '../assets/images/enterprise-web-app-strategic-guide.webp';
import blogImg11 from '../assets/images/flutter-vs-reactnative-vs-kmp-2026.webp';
import blogImg12 from '../assets/images/advanced-mobile-ui-ux-principles.webp';

const BlogContent = () => {
  // Logic: 'All' category default thakbe
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3); // Shuru te 3 ti card dekhabe

  const categories = ['All', 'Ui/Ux Design', 'Web Development', 'Software Development', 'Mobile Apps Development'];

  const allPosts = [
    // UI/UX Design
   { 
  id: 1, 
  category: "Ui/Ux Design", 
  title: "Building Scalable Design Systems: The Secret to Enterprise-Level UI/UX Consistency", 
  url: "building-scalable-design-systems-2026", 
  date: "Feb 22, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg1,
  description: "Stop reinventing the wheel. Learn how to build a unified design system that bridges the gap between designers and developers while scaling your brand."
},
   { 
  id: 2, 
  category: "Ui/Ux Design", 
  title: "User Research & Behavioral Psychology: The Foundation of Data-Driven UX", 
  url: "user-research-behavioral-psychology-ux-2026", 
  date: "Feb 25, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg2,
  description: "Stop designing by guesswork. Discover how behavioral psychology and data-driven research uncover exactly what your users need and how they think."
},
   { 
  id: 3, 
  category: "Ui/Ux Design", 
  title: "Interaction Design & Motion UX: Bringing Digital Products to Life in 2026", 
  url: "interaction-design-motion-ux-principles-2026", 
  date: "Feb 28, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg3,
  description: "Static design is dead. Learn how to use motion, micro-interactions, and sensory feedback to create deeply engaging and fluid digital experiences."
},

    // Web Development
    // BlogContent.js er bhetore
{ 
  id: 4, 
  category: "Web Development", // Category spelling check koro
  title: "Custom Web Development for E-Commerce Success", 
  url: "custom-web-development-ecommerce-guide", // BlogDetails er key-er sathe mil thakte hobe
  date: "Feb 20, 2026", 
  author: "Admin", 
  img: blogImg4,
  description: "Learn how custom web development can transform your e-commerce store into a high-converting machine with scalability and unique features."
},
   { 
  id: 5, 
  category: "Web Development", 
  title: "Top 7 Benefits of Custom Web Development Services for Growing Businesses in 2025", 
  url: "top-7-benefits-custom-web-development-2025", 
  date: "Jul 06, 2025", 
  author: "Md Maharab Biswas Api", 
  img: blogImg5,
  description: "In the fast-evolving digital landscape of 2025, generic templates limit your potential. Discover why custom web development is essential for survival and growth."
},
   { 
  id: 6, 
  category: "Web Development", 
  title: "Laravel Web Development Services: Build Robust & Scalable Apps with Campaignsquat", 
  url: "laravel-web-development-services-campaignsquat", 
  date: "Jul 06, 2025", 
  author: "Md Maharab Biswas Api", 
  img: blogImg6,
  description: "In today’s digital era, businesses need websites and applications that are fast, secure, and scalable. Discover why Laravel is the top choice for 2025."
},

    // Software Development
   { 
  id: 7, 
  category: "Software Development", 
  title: "Modern Software Development Trends 2026: A Complete Guide for Growing Businesses", 
  url: "software-development-trends-2026-complete-guide", 
  date: "Jan 10, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg7,
  description: "Explore how custom software development is evolving in 2026 and why businesses need scalable, cloud-native solutions to stay competitive."
},
   { 
  id: 8, 
  category: "Software Development", 
  title: "Why TypeScript is Essential for Enterprise Grade Software in 2026", 
  url: "essential-typescript-enterprise-software-2026", // Updated URL
  date: "Jan 03, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg8,
  description: "Explore why massive codebases rely on TypeScript for stability, maintainability, and error prevention in modern software engineering."
},
   { 
  id: 9, 
  category: "Software Development", 
  title: "AI-Driven Software Testing: How Artificial Intelligence is Transforming QA in 2026", 
  url: "ai-driven-software-testing-future-of-qa", 
  date: "Jan 15, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg9,
  description: "Traditional testing can't keep up with modern speed. Explore how AI-driven self-healing scripts and predictive analysis are revolutionizing software quality."
},

    // Mobile Apps Development
   { 
  id: 10, 
  category: "Mobile Apps Development", // Category ta eikhane thik rakho
  title: "Enterprise Web App Development: A Strategic Guide for Modern Businesses", 
  url: "strategic-guide-enterprise-web-app-development", 
  date: "Jul 06, 2025", 
  author: "Md Maharab Biswas Api", 
  img: blogImg10,
  description: "Beyond simple websites, enterprises need scalable and secure web applications to drive operations. Discover our complete guide to enterprise-grade solutions."
},
  { 
  id: 11, 
  category: "Mobile Apps Development", 
  title: "The 2026 Battle: Flutter, React Native, or Kotlin Multiplatform?", 
  url: "flutter-vs-reactnative-vs-kmp-comparison-2026", 
  date: "Feb 15, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg11,
  description: "Which framework should you choose in 2026? A deep technical comparison of architecture, performance, and ecosystem for Flutter, React Native, and KMP."
},
    { 
  id: 12, 
  category: "Mobile Apps Development", 
  title: "The Art of Engagement: Advanced Mobile UI/UX Design Principles for 2026", 
  url: "advanced-mobile-ui-ux-design-principles-2026", 
  date: "Feb 20, 2026", 
  author: "Md Maharab Biswas Api", 
  img: blogImg12,
  description: "Beyond aesthetics: Learn the psychology and ergonomics behind world-class mobile user experiences, from the 'Thumb Zone' to predictive UI."
},
  ];

  // Logic: Filter posts and slice for Load More
  const filteredPosts = activeCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(3); // Category change hole abar 3 ta card theke shuru hobe
  };

  return (
    <div className="bg-[#02030a] min-h-screen text-white font-poppins selection:bg-white selection:text-black overflow-x-hidden -mt-6 md:-mt-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          <aside className="w-full lg:w-[400px] shrink-0 bg-[#0a0a0a] border border-[#ffffff20] rounded-[5px] p-8 py-12 flex flex-col gap-14 h-fit">
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white">Search</h3>
              <div className="relative">
                <input 
                  type="text" placeholder="Search" 
                  className="w-full h-12 bg-[#ffffff10] text-white border border-[#ffffff20] rounded-[5px] px-4 pr-12 focus:outline-none focus:border-[#f7a400] transition-all placeholder:text-white/40"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f7a400] cursor-pointer hover:scale-110 transition-transform">
                  <Search size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <hr className="border-[#ffffff10]" />

            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white">Categories</h3>
              <ul className="space-y-6">
                {categories.map((cat, index) => {
                  const isActive = activeCategory === cat;
                  return (
                    <li 
                      key={index} onClick={() => handleCategoryChange(cat)}
                      className="flex items-center gap-4 border-b border-[#ffffff10] pb-4 last:border-none cursor-pointer transition-all group"
                    >
                      <div className={`w-4 h-4 rounded-full border ${isActive ? 'border-[#f7a400]' : 'border-white'} flex items-center justify-center transition-colors`}>
                        {isActive && <div className="w-2 h-2 bg-[#f7a400] rounded-full"></div>}
                      </div>
                      <span className={`text-[16px] md:text-[18px] font-medium transition-colors ${isActive ? 'text-[#f7a400]' : 'text-white'}`}>
                        {cat}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <hr className="border-[#ffffff10]" />

            <div className="flex flex-col gap-12">
              <h3 className="text-lg font-semibold text-white">Recent Posts</h3>
              {[
                { title: "How to design a website: A complete guide.", date: "Jan 4, 2026", img: blogImg1 },
                { title: "The Future Web Development 2026", date: "Jan 2, 2026", img: blogImg2 }
              ].map((post, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col gap-5 border-b border-[#ffffff10] pb-8 last:border-none last:pb-0">
                  <div className="relative overflow-hidden rounded-[5px] h-48 border border-[#ffffff15]">
                    <div className="absolute top-4 left-4 z-10 bg-[#f7a400] text-white px-5 py-1.5 rounded-[5px] text-[11px] font-bold tracking-widest">
                      {post.date}
                    </div>
                    <img src={post.img} alt="post" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <p className="text-[16px] md:text-[18px] font-bold leading-tight text-white group-hover:underline underline-offset-4">{post.title}</p>
                </div>
              ))}
            </div>

            <hr className="border-[#ffffff10]" />

            <div className="flex flex-col gap-8">
              <h3 className="text-lg font-semibold text-white tracking-widest">Tags</h3>
              <div className="flex flex-wrap gap-4">
                {['Ui/Ux', 'Web Design', 'Software', 'App'].map((tag, idx) => (
                  <span key={idx} className="border border-[#f7a400] bg-[#f7a400] px-6 py-2 rounded-[5px] text-[12px] md:text-[14px] font-semibold cursor-pointer hover:bg-[#02040a] hover:border-[#f7a400] text-black hover:text-white transition-all text-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1 flex flex-col gap-10 bg-[#0a0a0a]">
            {displayedPosts.map((post) => (
              <article key={post.id} className="bg-[#0a0a0a] border border-[#ffffff15] rounded-[5px] overflow-hidden flex flex-col group">
                <div className="relative overflow-hidden w-full h-[300px]">
                   <div className="absolute top-5 left-5 z-10 bg-[#f7a400] text-white px-5 py-1.5 rounded text-[11px] font-bold tracking-widest shadow-lg">
                      {post.category}
                   </div>
                   <img src={post.img} alt="article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <span className="text-[10px] md:text-[12px] font-medium">{post.date}</span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-[12px] md:text-[13px] font-medium">By {post.author}</span>
                  </div>

                  <h2 className=" text-[18px] sm:text-[20px] md:text-[28px] font-bold mb-5 text-white leading-tight  transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-white text-[14px] md:text-[18px] leading-[1.3] mb-8 max-w-7xl ">
                    {post.description}
                  </p>

                  <Link 
                    to={`/blog/${post.url}`} 
                    className="inline-block bg-[#f7a400] border-2 border-[#F7A400] text-black px-6 py-2 rounded-[5px] hover:bg-[#02050A] hover:text-white transition-all text-[14px] md:text-[15px] font-semibold w-fit text-center"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}

            {/* Load More Button - Sudhu jodi aro post thake tokhon dekhabe */}
            {visibleCount < filteredPosts.length && (
              <div className="flex justify-center mt-6">
                <button 
                  onClick={handleLoadMore}
                  className="bg-[#f7a400] border-2 border-[#F7A400] text-black px-10 py-2 rounded-[5px] hover:bg-[#02050A] hover:text-white transition-all text-[14px] md:text-[15px] font-semibold shadow-lg"
                >
                  Load More
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default BlogContent;