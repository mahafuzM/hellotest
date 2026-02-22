import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - LCP boost korar jonno direct import)
import BookingAppsComp from '../components/BookingApps';

// Below the fold content - Performance optimize korar jonno lazy load kora holo
const Contact = lazy(() => import('../components/Contact'));

const BookingApps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <div className="w-full bg-[#02050A] min-h-screen">
                {/* BookingAppsComp contains its own <Helmet> for Metadata & Schema.
                  Since it's above the fold, we load it normally.
                */}
                <BookingAppsComp />

                {/* Contact section lazy load hocche. 
                  Fallback div layout shift prevent korbe (Cumulative Layout Shift - CLS optimization).
                */}
                <Suspense fallback={<div className="h-40 bg-[#02050A]"></div>}>
                    <Contact />
                </Suspense>
            </div>
        </HelmetProvider>
    );
};

export default BookingApps;