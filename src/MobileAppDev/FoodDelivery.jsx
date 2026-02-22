import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - immediate load hobe LCP performance-er jonno)
import FoodDeliveryCom from '../components/FoodDelivery';

// Below the fold content lazy load kora holo performance (FCP/TTI) optimization-er jonno
const Contact = lazy(() => import('../components/Contact'));

const FoodDelivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        
        {/* FoodDeliveryCom component-er bhetore Metadata, Schema, ebong Optimized SEO Tags ache */}
        <FoodDeliveryCom />

        {/* Contact section lazy load hobe jate main content druto render hoy */}
        {/* Fallback div-ti Layout Shift (CLS) atkakbe */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
        
      </div>
    </HelmetProvider>
  );
};

export default FoodDelivery;