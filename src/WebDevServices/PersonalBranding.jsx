import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PersonalBranding from '../components/PersonalBranding';

// Contact component-ti lazy load kora holo performance (LCP/FID) improve korar jonno
const Contact = lazy(() => import('../components/Contact'));

const PersonalBrandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Main Service Component (Eager load for SEO) */}
        <PersonalBranding />
        
        {/* Contact section niche thakae lazy load kora best practice */}
        <Suspense fallback={<div className="h-40 bg-[#02050A] flex items-center justify-center text-white/20">Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default PersonalBrandingPage;