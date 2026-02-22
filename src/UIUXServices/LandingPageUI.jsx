import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // Helmet kaj korar jonno eti proyojon
import LandingPageUIComponent from '../components/LandingPageUI'; 
import Contact from '../components/Contact';

const LandingPageUI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // HelmetProvider ekhane wrap kora bhalo jate metadata thik moto search engine e jay
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Main component-er bhetore SEO tags optimized ache */}
        <LandingPageUIComponent />

        {/* Contact section-e kintu SEO optimized <h2> tag use kora uchit */}
        <Contact />
      </div>
    </HelmetProvider>
  );
};

export default LandingPageUI;