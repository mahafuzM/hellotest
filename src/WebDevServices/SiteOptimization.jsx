import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // SEO provider
import SiteOptimization from '../components/SiteOptimization'; 

// Contact component-ti lazy load kora hoyeche performance baranor jonno
const Contact = lazy(() => import('../components/Contact'));

const SiteOptimizationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // HelmetProvider ensure kore metadata thikmoto distribute hoyeche ki na
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Main Component */}
        <SiteOptimization />

        {/* Contact section lazy load hocche jate uporer content druto load hoy */}
        <Suspense fallback={<div className="h-20 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default SiteOptimizationPage;