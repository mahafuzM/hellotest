import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Main Component (Above the fold - immediate load for LCP performance)
import ECommerceAppsComp from '../components/ECommerceApps';

// Below the fold content lazy load kora holo performance optimization-er jonno
const Contact = lazy(() => import('../components/Contact'));

const ECommerceApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Technical SEO Metadata */}
        <Helmet>
          <link rel="canonical" href={window.location.href} />
          <meta name="robots" content="index, follow" />
        </Helmet>

        {/* ECommerceAppsComp-er bhetore H1, Metadata, Schema, ar Hero Image optimization kora ache */}
        <ECommerceAppsComp /> 

        {/* Contact section lazy load hocche, fallback layout shift (CLS) atkabe */}
        <Suspense fallback={<div className="h-[300px] bg-[#02050A] w-full"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default ECommerceApps;