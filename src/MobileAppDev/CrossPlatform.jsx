import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - immediate load hobe LCP-r jonno)
import CrossPlatformComp from '../components/CrossPlatform'; 

// Below the fold content lazy load kora holo performance-er jonno
const Contact = lazy(() => import('../components/Contact'));

const CrossPlatformPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* CrossPlatformComp-er bhetore Metadata, Schema, ar SEO optimize kora ache */}
        <CrossPlatformComp /> 

        {/* Contact section lazy load hocche, fallback layout shift atkabe */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default CrossPlatformPage;