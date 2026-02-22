import React, { useState, useEffect, useMemo } from 'react';
import userImg1 from '../assets/images/h3-testimonial-2.webp';
import userImg2 from '../assets/images/h3-testimonial-3.webp';

const SuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // stories array ke useMemo-te dhukiye dilam jate yellow warning chole jay
  const stories = useMemo(() => [
    { id: 1, image: userImg1, name: "Cameron Williamson", role: "Co. Founder", company: "Tekmino", feedback: "Tekmino truly exceeded our expectations.", videoUrl: "https://www.youtube.com/embed/FEvLy5G_HUc?si=aQZXL3y-PnDSwCAR" },
    { id: 2, image: userImg2, name: "Devon Lane", role: "Co. Founder", company: "Nexor", feedback: "Partnering with Nexor has been an absolute game-changer.", videoUrl: "https://www.youtube.com/embed/h2RYNkFOMZg?si=rSPHl_-N36rAZlnq" },
    { id: 3, image: userImg1, name: "Bessie Cooper", role: "CEO", company: "TechFlow", feedback: "The efficiency and dedication of the team were remarkable.", videoUrl: "https://www.youtube.com/embed/XlMYTzwSPh4?si=q1HZJhsp0nXDpfBK" },
    { id: 4, image: userImg2, name: "Arlene McCoy", role: "Manager", company: "DataSys", feedback: "Their innovative approach helped us scale our infrastructure.", videoUrl: "https://www.youtube.com/embed/wvJU9tuoqG4?si=MhctAy-rPj0TEfMs" },
    { id: 5, image: userImg1, name: "Jerome Bell", role: "Director", company: "Cloudly", feedback: "Exceptional support and deep technical expertise.", videoUrl: "https://www.youtube.com/embed/u7RoQqA0uo4?si=LvF8sivfeEKN8h96" },
    { id: 6, image: userImg2, name: "Jane Cooper", role: "Founder", company: "InnoVate", feedback: "A truly professional experience. They understood our requirements.", videoUrl: "https://www.youtube.com/embed/QcuGXN6hHjw?si=PVRfS0CEBwKBXHEb" },
  ], []); // Dependancy empty rakha hoyeche jate warning na ashe

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = isMobile ? stories.length : Math.ceil(stories.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const desktopGroups = useMemo(() => {
    const groups = [];
    for (let i = 0; i < stories.length; i += 2) {
      groups.push(stories.slice(i, i + 2));
    }
    return groups;
  }, [stories]);

  return (
    <section className="w-full bg-[#0A0A0A] py-12 md:py-20 px-6 md:px-12 font-['Poppins'] overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[36px] lg:text-[45px] font-bold text-white mb-4">Success Story</h2>
          <p className="text-white text-[16px] md:text-[20px] max-w-3xl mx-auto">
            Real Results From The People Who Trust Us Most
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {isMobile ? (
              stories.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-2" onClick={() => setSelectedVideo(item.videoUrl)}>
                  <Card item={item} />
                </div>
              ))
            ) : (
              desktopGroups.map((group, idx) => (
                <div key={idx} className="w-full shrink-0 grid grid-cols-2 gap-6 px-2">
                  {group.map(item => (
                    <div key={item.id} onClick={() => setSelectedVideo(item.videoUrl)}>
                      <Card item={item} />
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2  rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-2 bg-[#f7a400]" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button 
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-[#f7a400]"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src={`${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

const Card = ({ item }) => (
  <div className="bg-[#02050A] border border-gray-900 flex flex-col md:flex-row items-stretch transition-all duration-300 hover:border-[#f7a400] rounded-[8px] overflow-hidden h-full cursor-pointer group">
    {/* Image Section */}
    <div className="w-full md:w-[40%] shrink-0 relative overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name} 
        /* Mobile-e h-full deway oita text column-er height onujayi stretch hobe */
        className="w-full h-full min-h-[280px] object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all">
        <div className="w-12 h-12 bg-[#f7a400] rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-125">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="flex flex-col w-full p-6 lg:p-8 justify-center">
      <div className="flex gap-1 text-[#f7a400] mb-3">
        {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
      </div>
      <p className="text-white text-[16px] md:text-[18px] leading-relaxed mb-4 line-clamp-3">
        "{item.feedback}"
      </p>
      <div className="w-20 h-[0.5px] bg-[#f7a400] mb-5"></div>
      <div>
        <h4 className="text-white text-[18px] font-bold group-hover:text-[#f7a400] transition-colors">{item.name}</h4>
        <p className="text-white text-[13px] md:text-[14px] font-medium mt-1 tracking-wider">
          {item.role} | {item.company}
        </p>
      </div>
    </div>
  </div>
);

export default SuccessStory;