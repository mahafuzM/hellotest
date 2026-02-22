import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // Add this
import CustomWebsites from '../components/CustomWebsites'; 
import Contact from '../components/Contact';

const CustomWebsitesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // HelmetProvider diye wrap korle SEO tags gulo browser-e thikmoto render hobe
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        <CustomWebsites />
        <Contact />
      </div>
    </HelmetProvider>
  );
};

export default CustomWebsitesPage;