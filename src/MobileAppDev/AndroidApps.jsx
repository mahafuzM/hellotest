import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - LCP optimization-er jonno direct import)
import AndroidAppsComp from '../components/AndroidApps';

// Below the fold content lazy load kora holo performance boost korar jonno
const Contact = lazy(() => import('../components/Contact'));

const AndroidApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* AndroidAppsComp-er bhetore Metadata, Schema, ar 
          SEO optimization kora ache (ja ami age provide korechi)
        */}
        <AndroidAppsComp />
        
        {/* Contact section lazy load hocche, fallback layout shift atkabe */}
        <Suspense fallback={<div className="h-96 w-full bg-[#02050A] animate-pulse"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default AndroidApps;