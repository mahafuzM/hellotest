import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // SEO and Performance optimization
import WebMobileUIComponent from '../components/WebMobileUI'; 
import Contact from '../components/Contact';

const WebMobileUI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Dynamic Title for SEO */}
        <Helmet>
          <title>Web & Mobile UI Design | Campaignsquat Ltd</title>
          <link rel="canonical" href={window.location.href} />
        </Helmet>

        <WebMobileUIComponent />

        <Contact />
      </div>
    </HelmetProvider>
  );
};

export default WebMobileUI;