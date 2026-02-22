import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // SEO Metadata management
import UXWireframingComponent from '../components/UXWireframing'; 
import Contact from '../components/Contact';

const UXWireframing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* Page Level SEO - Metadata Consistency */}
      <Helmet>
        <title>UX Wireframing & Strategic Architecture | Campaignsquat Ltd</title>
        <meta name="description" content="Professional UX wireframing and logical architecture services. We build high-conversion digital structures for tech products." />
        <link rel="canonical" href="https://yourdomain.com/ux-wireframing" />
      </Helmet>

      {/* Main Service Content */}
      <UXWireframingComponent />

      {/* Conversion Section */}
      <Contact />
    </div>
  );
};

export default UXWireframing;