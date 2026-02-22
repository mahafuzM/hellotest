import React, { useEffect } from 'react';
import ECommerceDev from '../components/ECommerceDev'; 
import Contact from '../components/Contact';

const ECommerceDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 'main' tag use kora SEO-r jonno bhalo, kintu design impact korbe na
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* E-commerce content with Helmet Metadata inside */}
      <ECommerceDev />
      
      {/* Contact Section - Hierarchy maintain hobe ekhon */}
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default ECommerceDevPage;