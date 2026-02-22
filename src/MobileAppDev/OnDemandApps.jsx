import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Main Component (Above the fold - LCP boost korar jonno direct import)
import OnDemandAppsCom from '../components/OnDemandApps';

// Below the fold content - Performance optimize korar jonno lazy load kora holo
const Contact = lazy(() => import('../components/Contact'));

const OnDemandApps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <div className="w-full bg-[#02050A] min-h-screen">
                {/* OnDemandAppsCom e metadata, H1, ebong Schema logic include kora hoyeche.
                  Eita primary content houyay direct import kora hoyeche.
                */}
                <OnDemandAppsCom />

                {/* Contact section lazy load hocche performance optimization-er jonno.
                  Fallback div layout shift prevent korbe (CLS optimization).
                */}
                <Suspense fallback={<div className="h-96 bg-[#02050A] flex items-center justify-center"></div>}>
                    <Contact />
                </Suspense>
            </div>
        </HelmetProvider>
    );
};

export default OnDemandApps;