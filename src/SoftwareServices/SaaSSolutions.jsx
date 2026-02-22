import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component Import (Hero section thakae tai eta eager load e thakbe)
import SaaSSolutionsComp from '../components/SaaSSolutions'; 

// "Below the fold" content lazy load kora holo initial loading speed baranor jonno
const Contact = lazy(() => import('../components/Contact'));

const SaaSSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      {/* Semantic main tag use kora hoyeche SEO hierarchy thik rakhar jonno */}
      <main className="w-full bg-[#02050A] min-h-screen">
        
        {/* SaaSSolutionsComp er bhetore Metadata, JSON-LD Schema o FAQ kora ache */}
        <SaaSSolutionsComp />

        {/* Contact section lazy load kora hoyeche jate initial bundle size kom hoy.
            Fallback div layout shift (CLS) prevent korbe.
        */}
        <Suspense fallback={<div className="min-h-[400px] bg-[#02050A]" aria-hidden="true"></div>}>
          <Contact />
        </Suspense>
        
      </main>
    </HelmetProvider>
  );
};

export default SaaSSolutions;