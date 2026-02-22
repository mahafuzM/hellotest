import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - LCP উন্নত করতে সরাসরি ইমপোর্ট করা হয়েছে)
import SaaSDashboardComponent from '../components/SaaSDashboard'; 

// Below the fold content - Performance এর জন্য Lazy load করা হয়েছে
const Contact = lazy(() => import('../components/Contact'));

const SaaSDashboard = () => {
  useEffect(() => {
    // পেজ লোড হলে স্মুথলি একদম উপরে নিয়ে যাবে
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* SaaSDashboardComponent-এর ভেতরে আমরা ইতিমধ্যেই:
          1. Helmet (Metadata & Schema)
          2. Semantic Tags (H1, H2, H3)
          3. Image Optimization (Fetchpriority) 
          সেট করে রেখেছি।
        */}
        <main>
          <SaaSDashboardComponent />
        </main>

        {/* Contact section lazy load হচ্ছে। 
          Fallback হিসেবে খালি স্পেস রাখা হয়েছে যাতে লেআউট শিফট (CLS) না হয়।
        */}
        <Suspense fallback={<div className="h-96 bg-[#02050A] w-full animate-pulse"></div>}>
          <section id="contact-section">
            <Contact />
          </section>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default SaaSDashboard;