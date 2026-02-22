import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // HelmetProvider import kora hoyeche
import InteractivePrototypeComponent from '../components/InteractivePrototype'; 
import Contact from '../components/Contact';

const InteractivePrototype = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // HelmetProvider diye wrap kora hoyeche jate component-er bhetorer SEO tags kaj kore
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        <InteractivePrototypeComponent />
        
        {/* Contact Section */}
        <Contact />
      </div>
    </HelmetProvider>
  );
};

export default InteractivePrototype;