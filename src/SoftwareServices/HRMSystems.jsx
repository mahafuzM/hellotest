import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component Import
import HRMSystemsComp from '../components/HRMSystems'; 

// "Below the fold" content lazy load kora holo performance optimization-er jonno
// Eta initial bundle size komabe ebong LCP improve korbe
const Contact = lazy(() => import('../components/Contact'));

const HRMSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* HRMSystemsComp er bhetore metadata, Service Schema, ebong FAQ Schema thakbe */}
        <HRMSystemsComp />

        {/* Contact section lazy load kora hoyeche jate page load fast hoy.
            Fallback div-ti layout shift (CLS) prevent korbe.
        */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default HRMSystems;