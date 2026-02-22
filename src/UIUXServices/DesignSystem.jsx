import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // SEO-র জন্য ইম্পোর্ট করুন
import DesignSystemComponent from '../components/DesignSystem'; 
import Contact from '../components/Contact';

const DesignSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* প্যারেন্ট লেভেলে হেলমেট অ্যাড করা সেইফ, 
          যাতে চাইল্ড কম্পোনেন্টের মেটা ট্যাগগুলো প্রপারলি রিফ্লেক্ট করে 
      */}
      <Helmet>
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <DesignSystemComponent />

      {/* Contact সেকশনটিকে একটি ID দিয়ে র‍্যাপ করা ভালো যাতে 'Get Started' বাটন এখানে স্ক্রল করতে পারে */}
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default DesignSystem;