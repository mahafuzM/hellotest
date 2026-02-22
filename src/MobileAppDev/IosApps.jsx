import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - LCP optimize korar jonno immediate load hobe)
import IosAppsCom from '../components/IosApps';

// Below the fold component lazy load kora holo performance (FCP/TTI) baranor jonno
const Contact = lazy(() => import('../components/Contact'));

const IosApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* IosAppsCom er bhetore Metadata, Service Schema, ar FAQ Schema optimize kora ache */}
        <IosAppsCom /> 

        {/* Contact section lazy load hocche, fallback layout shift (CLS) atkabe */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default IosApps;