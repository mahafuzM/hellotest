import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
// Main ERP component import
import ERPSystemsComp from '../components/ERPSystems'; 

// Performance optimize korar jonno Contact-ke lazy load kora holo
// Eta "Below the fold" content hoyay lazy load kora best practice
const Contact = lazy(() => import('../components/Contact'));

const ERPSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Main Component: 
            Eikhane Metadata (Helmet), JSON-LD Service Schema, 
            ebong FAQ Schema internally thakbe jeta agei optimize kora hoyeche. 
        */}
        <ERPSystemsComp />
        
        {/* Contact section-ti lazy load kora holo. 
            Suspense fallback-ti loading somoy layout shift (CLS) atkabe.
        */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default ERPSystems;