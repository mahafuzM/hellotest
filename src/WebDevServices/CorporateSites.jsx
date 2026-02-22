import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import CorporateSites from '../components/CorporateSites'; 

// Performance Optimization: Lazy loading the Contact component
const Contact = lazy(() => import('../components/Contact'));

const CorporateSitesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      {/* Semantic main tag used for better SEO landmarking */}
      <main className="w-full bg-[#02050A] min-h-screen">
        
        {/* Main Service Component: 
            Isme SEO Metadata, Schema, and High-Priority Image loading integrated hai.
        */}
        <CorporateSites />

        {/* Contact Section: 
            Lazy loaded to reduce initial bundle size and improve page load speed.
            Fallback ensures no layout shift (CLS) by maintaining a dark background.
        */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
        
      </main>
    </HelmetProvider>
  );
};

export default CorporateSitesPage;