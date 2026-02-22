import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component Import
import BusinessAutomationComp from '../components/BusinessAutomation'; 

/**
 * Performance Optimization:
 * Contact কম্পোনেন্টটি "Below the fold" হওয়ায় এটিকে Lazy Load করা হয়েছে।
 * এর ফলে মেইন বান্ডেল সাইজ কমবে এবং First Contentful Paint (FCP) ফাস্ট হবে।
 */
const Contact = lazy(() => import('../components/Contact'));

const BusinessAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* SEO & Content: 
            BusinessAutomationComp এর ভেতরেই Metadata, Schema, এবং 
            Semantic Headers (H1, H2, H3) আগেই সেট করা হয়েছে।
        */}
        <BusinessAutomationComp />
        
        {/* Performance:
            Suspense fallback-টি Layout Shift (CLS) প্রতিরোধ করবে।
        */}
        <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
          <section id="contact-section">
            <Contact />
          </section>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default BusinessAutomation;