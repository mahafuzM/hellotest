import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPages from '../components/LandingPages';

// Performance optimize korar jonno Contact component-ke lazy load kora holo
const Contact = lazy(() => import('../components/Contact'));

const LandingPagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Main Service Component (Immediate Load hobe SEO'r jonno) */}
        <LandingPages />
        
        {/* Contact section-ti lazy load hobe, fallback e ekta empty space thakbe */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default LandingPagesPage;