import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component Import
import InventoryBillingComp from '../components/InventoryBilling'; 

// "Below the fold" content lazy load kora holo performance optimization-er jonno
const Contact = lazy(() => import('../components/Contact'));

const InventoryBilling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* InventoryBillingComp er bhetore agei Metadata, 
            JSON-LD Service Schema, ebong FAQ Schema integrate kora hoyeche.
        */}
        <InventoryBillingComp />

        {/* Contact section lazy load kora hoyeche jate initial page load fast hoy.
            Fallback div-ti layout shift (CLS) prevention-e sahayjo korbe.
        */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default InventoryBilling;