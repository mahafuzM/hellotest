import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import WordPressDev from '../components/WordPressDev'; // Component name match korlam tomar ager code er sathe

// Performance optimize korar jonno Contact-ke lazy load kora holo
const Contact = lazy(() => import('../components/Contact'));

const WordPressDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-[#02050A] min-h-screen">
        {/* Main Component */}
        <WordPressDev />
        
        {/* Contact section-ti heavy hole lazy load kora best */}
        <Suspense fallback={<div className="h-20 bg-[#02050A]"></div>}>
          <Contact />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default WordPressDevPage;