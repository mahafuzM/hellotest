import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ১. HelmetProvider ইম্পোর্ট করা হয়েছে

/* Global Components */
import Navbar from './components/Navbar'; 
import Newsletter from './components/Newsletter'; 
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact'; // Floating Button Import

/* Loading Spinner */
const PageLoader = () => (
  <div className="min-h-screen bg-[#02050A] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#F7A400] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

/* Lazy Load Main Pages */
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const JobdetailsPage = lazy(() => import('./pages/JobdetailsPage'));
const ApplyjobPage = lazy(() => import('./pages/ApplyjobPage'));
const CaseStudyDetails = lazy(() => import('./pages/CaseStudyDetails')); 

/* --- New Page: Book Meeting --- */
const BookMeeting = lazy(() => import('./pages/BookMeeting')); 

/* Lazy Load UIUX Services */
const UiUxDesign = lazy(() => import('./UIUXServices/UiUxDesign'));
const WebMobileUI = lazy(() => import('./UIUXServices/WebMobileUI'));
const UXWireframing = lazy(() => import('./UIUXServices/UXWireframing'));
const InteractivePrototype = lazy(() => import('./UIUXServices/InteractivePrototype'));
const SaaSDashboard = lazy(() => import('./UIUXServices/SaaSDashboard'));
const DesignSystem = lazy(() => import('./UIUXServices/DesignSystem'));
const LandingPageUI = lazy(() => import('./UIUXServices/LandingPageUI'));
const AppInterface = lazy(() => import('./UIUXServices/AppInterface'));

/* Lazy Load Web Dev Services */
const WebDesignDevPage = lazy(() => import('./WebDevServices/WebDesignDevelopment'));
const CustomWebsitesPage = lazy(() => import('./WebDevServices/CustomWebsites'));
const WordPressDevPage = lazy(() => import('./WebDevServices/WordPressDev'));
const LandingPagesPage = lazy(() => import('./WebDevServices/LandingPages'));
const CorporateSitesPage = lazy(() => import('./WebDevServices/CorporateSites'));
const PersonalBrandingPage = lazy(() => import('./WebDevServices/PersonalBranding'));
const SiteOptimizationPage = lazy(() => import('./WebDevServices/SiteOptimization'));
const ECommerceDevPage = lazy(() => import('./WebDevServices/ECommerceDev'));

/* Lazy Load Software Services */
const SoftwareDevelopment = lazy(() => import('./SoftwareServices/SoftwareDevelopment'));
const CustomCRM = lazy(() => import('./SoftwareServices/CustomCRM'));
const ERPSystems = lazy(() => import('./SoftwareServices/ERPSystems'));
const BusinessAutomation = lazy(() => import('./SoftwareServices/BusinessAutomation'));
const InventoryBilling = lazy(() => import('./SoftwareServices/InventoryBilling'));
const HRMSystems = lazy(() => import('./SoftwareServices/HRMSystems'));
const SaaSSolutions = lazy(() => import('./SoftwareServices/SaaSSolutions'));
const ApiIntegration = lazy(() => import('./SoftwareServices/ApiIntegration'));

/* Lazy Load Mobile App Services */
const MobileAppDev = lazy(() => import('./MobileAppDev/MobileAppDevelopment'));
const AndroidApps = lazy(() => import('./MobileAppDev/AndroidApps'));
const IosApps = lazy(() => import('./MobileAppDev/IosApps'));
const CrossPlatform = lazy(() => import('./MobileAppDev/CrossPlatform'));
const ECommerceApps = lazy(() => import('./MobileAppDev/ECommerceApps'));
const BookingApps = lazy(() => import('./MobileAppDev/BookingApps'));
const FoodDelivery = lazy(() => import('./MobileAppDev/FoodDelivery'));
const OnDemandApps = lazy(() => import('./MobileAppDev/OnDemandApps'));

// 1. Separate logic component to use useLocation
const AppContent = () => {
  const location = useLocation();
  
  // 2. Define koro kon path-e Navbar/Footer thakbe na
  const isBookingPage = location.pathname === '/book-meeting';

  return (
    <div className="min-h-screen bg-[#02050A] flex flex-col">
      {/* 3. Conditional rendering for Navbar */}
      {!isBookingPage && <Navbar />}

      {/* Floating Contact Button - Jeta shob page e thakbe */}
      <FloatingContact />

      <Suspense fallback={<PageLoader />}>
        {/* 4. Booking page hole top padding hobe na (pt-0) */}
        <main className={`flex-grow ${isBookingPage ? 'pt-0' : 'pt-24 md:pt-28'}`}> 
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/our-projects" element={<ProjectsPage />} />
            <Route path="/our-product" element={<ProductPage />} /> 
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/job-details" element={<JobdetailsPage />} />
            <Route path="/apply-job" element={<ApplyjobPage />} /> 

            {/* Calendly Meeting Route */}
            <Route path="/book-meeting" element={<BookMeeting />} /> 
            
            {/* Dynamic Case Study Route */}
            <Route path="/projects/:title" element={<CaseStudyDetails />} /> 

            {/* UI/UX Design Routes */}
            <Route path="/service/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/service/web-mobile-ui" element={<WebMobileUI />} />
            <Route path="/service/ux-wireframing" element={<UXWireframing />} />
            <Route path="/service/interactive-prototype" element={<InteractivePrototype />} />
            <Route path="/service/saas-dashboard" element={<SaaSDashboard />} />
            <Route path="/service/design-system" element={<DesignSystem />} />
            <Route path="/service/landing-page-ui" element={<LandingPageUI />} />
            <Route path="/service/app-interface" element={<AppInterface />} />

            {/* Web Development Routes */}
            <Route path="/service/web-design-development" element={<WebDesignDevPage />} />
            <Route path="/service/custom-websites" element={<CustomWebsitesPage />} />
            <Route path="/service/wordpress-development" element={<WordPressDevPage />} />
            <Route path="/service/landing-pages" element={<LandingPagesPage />} />
            <Route path="/service/corporate-sites" element={<CorporateSitesPage />} />
            <Route path="/service/personal-branding" element={<PersonalBrandingPage />} />
            <Route path="/service/site-optimization" element={<SiteOptimizationPage />} />
            <Route path="/service/ecommerce-development" element={<ECommerceDevPage />} />

            {/* Software Services Routes */}
            <Route path="/service/software-development" element={<SoftwareDevelopment />} />
            <Route path="/service/custom-crm" element={<CustomCRM />} />
            <Route path="/service/erp-systems" element={<ERPSystems />} />
            <Route path="/service/business-automation" element={<BusinessAutomation />} />
            <Route path="/service/inventory-billing" element={<InventoryBilling />} />
            <Route path="/service/hrm-systems" element={<HRMSystems />} />
            <Route path="/service/saas-solutions" element={<SaaSSolutions />} />
            <Route path="/service/api-integration" element={<ApiIntegration />} />

            {/* Mobile App Development Routes */}
            <Route path="/service/mobile-app-development" element={<MobileAppDev />} />
            <Route path="/service/android-apps" element={<AndroidApps />} />
            <Route path="/service/ios-apps" element={<IosApps />} />
            <Route path="/service/cross-platform-apps" element={<CrossPlatform />} />
            <Route path="/service/ecommerce-apps" element={<ECommerceApps />} />
            <Route path="/service/booking-apps" element={<BookingApps />} />
            <Route path="/service/food-delivery-apps" element={<FoodDelivery />} />
            <Route path="/service/on-demand-apps" element={<OnDemandApps />} />
          </Routes>
        </main>
      </Suspense>

      {/* 5. Conditional rendering for Newsletter & Footer */}
      {!isBookingPage && (
        <>
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    // ২. HelmetProvider দিয়ে Router কে র্যাপ করা হয়েছে
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;