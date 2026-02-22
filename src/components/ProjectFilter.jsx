import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Images Import
import img1 from '../assets/images/Qiraat.webp';
import img2 from '../assets/images/Rivertel.avif';
import img3 from '../assets/images/page 02.png';
import img4 from '../assets/images/page 02 (1).png';
import img5 from '../assets/images/page 02 (2).png';
import img6 from '../assets/images/page 02 (3).png';
import img7 from '../assets/images/page 02 (4).png';
import img8 from '../assets/images/page 02 (5).png';
import img9 from '../assets/images/page 02 (6).png';
import img10 from '../assets/images/page 02 (7).png';
import img11 from '../assets/images/page 02 (8).png';
import img12 from '../assets/images/page 02 (9).png';
import img13 from '../assets/images/page 02 (10).png';
import img14 from '../assets/images/page 02 (11).png';
import img15 from '../assets/images/page 02 (12).png';
import img16 from '../assets/images/page 02 (13).png';
import img17 from '../assets/images/page 02 (14).png';
import img18 from '../assets/images/page 02 (15).png';
import img19 from '../assets/images/page 02 (16).png';
import img20 from '../assets/images/page 02 (17).png';
import img21 from '../assets/images/page 02 (18).png';
import img22 from '../assets/images/page 02 (19).png';
import img23 from '../assets/images/page 02 (20).png';
import img24 from '../assets/images/page 02 (21).png';
import img25 from '../assets/images/page 02 (22).png';
import img26 from '../assets/images/page 02 (23).png';
import img27 from '../assets/images/page 02 (24).png';
import img28 from '../assets/images/page 02 (25).png';
import img29 from '../assets/images/page 02 (26).png';
import img30 from '../assets/images/page 02 (27).png';
import img31 from '../assets/images/page 02 (36).png';
import img32 from '../assets/images/page 02 (32).png';
import img33 from '../assets/images/page 02 (33).png';
import img34 from '../assets/images/page 02 (34).png';
import img35 from '../assets/images/page 02 (35).png';
import img36 from '../assets/images/page 02 (37).png';
import img37 from '../assets/images/page 02 (38).png';
import img38 from '../assets/images/page 02 (39).png';
import img39 from '../assets/images/page 02 (40).png';
import img40 from '../assets/images/page 02 (41).png';
import img41 from '../assets/images/page 02 (42).png';
import img42 from '../assets/images/page 02 (43).png';
import img43 from '../assets/images/page 02 (44).png';
import img44 from '../assets/images/page 02 (45).png';
import img45 from '../assets/images/page 02 (46).png';
import img46 from '../assets/images/page 02 (25).png';
import img47 from '../assets/images/page 02 (26).png';
import img48 from '../assets/images/page 02 (27).png';
import img49 from '../assets/images/page 02 (49).png';
import img50 from '../assets/images/page 02 (50).png';
import img51 from '../assets/images/page 02 (51).png';
import img52 from '../assets/images/page 02 (52).png';
import img53 from '../assets/images/page 02 (53).png';
import img54 from '../assets/images/page 02 (54).png';
import img55 from '../assets/images/page 02 (55).png';
import img56 from '../assets/images/Farmer Care ui.webp';
import img57 from '../assets/images/TripSky.webp';
import img58 from '../assets/images/Dental Clinic.webp';
import img59 from '../assets/images/Campaign Medical.webp';
import img60 from '../assets/images/Nestro Construction.webp';
import img61 from '../assets/images/UrbanNest.png';
import img62 from '../assets/images/Fitness Gym.webp';
import img63 from '../assets/images/UrbanNest.png';
import img64 from '../assets/images/RETROLADY.webp';
import img65 from '../assets/images/Beauty Cosmetics.webp';
import img66 from '../assets/images/FarmerCare Investment .webp';
import img67 from '../assets/images/ShipGlobe SaaS.webp';
import img68 from '../assets/images/Rivertel.avif';
import img69 from '../assets/images/Taleek.avif';
import img70 from '../assets/images/Qiraat.webp';
import img71 from '../assets/images/Rivertel.avif';
import img72 from '../assets/images/Taleek.avif';
import img73 from '../assets/images/Qiraat.webp';
import img74 from '../assets/images/Rivertel.avif';
import img75 from '../assets/images/Taleek.avif';
import img76 from '../assets/images/Qiraat.webp';
import img77 from '../assets/images/Rivertel.avif';
import img78 from '../assets/images/Taleek.avif';
import img79 from '../assets/images/Qiraat.webp';
import img80 from '../assets/images/Rivertel.avif';
import img81 from '../assets/images/Taleek.avif';
import img82 from '../assets/images/Qiraat.webp';
import img83 from '../assets/images/Rivertel.avif';
import img84 from '../assets/images/Taleek.avif';
import img85 from '../assets/images/Qiraat.webp';


const ProjectFilter = () => {
  const [activeTab, setActiveTab] = useState('All');


 const categories = [
  "All", 
  "Website Development", 
  "Ecommerce Development", 
  "UI/UX Design", 
  "Software Development", // বানানটি উপরের ডাটার সাথে হুবহু মিল থাকতে হবে
  "Mobile App Development"
];


  // ==========================================
  // এখান থেকে আপনি কন্টেন্ট চেঞ্জ করবেন
  // ==========================================
  const cases = [
    // --- Website Development (30 Projects) ---
   { 
  id: 1, 
  image: img1, 
  title: "Farmercare", 
  category: "Website Development", 
  fullName: "farmercare", 
  description: "Task Management Platform – Boosting Team Productivity with a Custom Solution" 
},
    { 
  id: 2, 
  image: img2, 
  title: "SafeNet Security SaaS", 
  category: "Website Development", 
  fullName: "safenet-secure-remote-access-saas", 
  description: "A Zero-Trust Network Access platform securing 50,000+ sessions with high-speed tunneling and identity-based control." 
},

    { id: 3, image: img3, title: "meistertask", category: "Website Development", fullName: "meistertask", description: "Task Management Platform – Boosting Team Productivity with a Custom Solution" },

    { id: 4, image: img4, title: "happy home initiative", category: "Website Development", fullName: "happy-home", description: "Happy Home Initiative – Bridging Buyers and Sellers in the Real Estate Market" },
{ 
  id: 5, 
  image: img5, 
  title: "Ondeck Platform", 
  category: "Website Development", 
  fullName: "ondeckplatform", 
  description: "Ondeck Platform for Business Loans – Simplifying Access to Capital" 
},
    
    { 
  id: 6, 
  image: img6, 
  title: "Rappore Health Clinics", 
  category: "Website Development", 
  fullName: "online-patient-booking", 
  description: "Online Patient Booking Platform – Revolutionizing Healthcare Accessibility" 
},

   { 
  id: 7, 
  image: img7, 
  title: "Domailmax Platform", 
  category: "Website Development", 
  fullName: "domailmax-saas-platform", 
  description: "Domailmax Microservices SaaS Platform – Scalable Architecture for High-Performance Applications" 
},

   { 
  id: 8, 
  image: img8, 
  title: "Mindvibe Platform", 
  category: "Website Development", 
  fullName: "mindvibe-healthcare", 
  description: "Mindvibe Mental Health Care Platform – Revolutionizing Healthcare Accessibility" 
},

    { 
  id: 9, 
  image: img9, 
  title: "Catamaranresort", 
  category: "Website Development", 
  fullName: "catamaran-resort", 
  description: "Catamaranresort Hotel Website Development with Online Booking" 
},

   { 
  id: 10, 
  image: img10, 
  title: "Cognota eLearning", 
  category: "Website Development", 
  fullName: "cognota-elearning-platform", 
  description: "Transforming Online Education with a Custom eLearning Platform" 
},
{ 
  id: 11, 
  image: img11, 
  title: "3rdstory E-Commerce", 
  category: "Website Development", 
  fullName: "3rdstory-ecommerce-platform", 
  description: "3rdstory E-Commerce Website with Admin Panel – Driving Sales & Scalability for Online Retailers" 
},

   { 
  id: 12, 
  image: img12, 
  title: "Catholiccharities USA", 
  category: "Website Development", 
  fullName: "catholic-charities-donation-system", 
  description: "Catholiccharities USA Donation Management System – Empowering Charities with Seamless Fundraising" 
},
{ 
  id: 13, 
  image: img13, 
  title: "FSH Furniture", 
  category: "Website Development", 
  fullName: "fsh-furniture-digital-transformation", 
  description: "FSH Furniture – Redefining Luxury Furniture Sales with a High-Performance Digital Transformation" 
},

    { 
  id: 14, 
  image: img14, 
  title: "Self Matters Store", 
  category: "Website Development", 
  fullName: "self-matters-woocommerce-transformation", 
  description: "Transforming Self Matters' WooCommerce Store for Speed, Conversions & Customer Engagement" 
},

   { 
  id: 15, 
  image: img15, 
  title: "The Agency RE", 
  category: "Website Development", 
  fullName: "the-agency-re-luxury-real-estate", 
  description: "The Agency RE – Elevating Luxury Real Estate with a High-Performance WordPress Experience" 
},

   { 
  id: 16, 
  image: img16, 
  title: "Studio Chocolate", 
  category: "Website Development", 
  fullName: "studio-chocolate-wix-transformation", 
  description: "Studio Chocolate – Crafting a Deliciously Engaging Digital Experience with WIX" 
},
   { 
  id: 17, 
  image: img17, 
  title: "SA Cleaning Services", 
  category: "Website Development", 
  fullName: "sa-cleaning-services-digital-transformation", 
  description: "SA Cleaning Services – A Digital Transformation for a Spotless Future" 
},
    { 
  id: 18, 
  image: img18, 
  title: "SKOON. Skincare", 
  category: "Website Development", 
  fullName: "skoon-skincare-ecommerce-experience", 
  description: "SKOON. Skincare – Elevating Clean Beauty with a High-Performance eCommerce Experience" 
},
    { 
  id: 19, 
  image: img19, 
  title: "Ötzi Pocket", 
  category: "Website Development", 
  fullName: "otzi-pocket-shopify-transformation", 
  description: "Ötzi Pocket – From Frustration to Innovation: Transforming a Shopify Brand into an Unforgettable Experience" 
},
   { 
  id: 20, 
  image: img20, 
  title: "Nanotech SST Store", 
  category: "Website Development", 
  fullName: "nanotech-sst-surface-protection-shopify", 
  description: "Nanotech SST – Revolutionizing Surface Protection: A High-Performance & Scalable Shopify Transformation" 
},
   { 
  id: 21, 
  image: img21, 
  title: "Liberty Travel", 
  category: "Website Development", 
  fullName: "liberty-travel-drupal-booking-platform", 
  description: "Liberty Travel – Modernizing the Travel Booking Experience: A High-Performance and Feature-Rich Drupal Transformation" 
},
   { 
  id: 22, 
  image: img22, 
  title: "Koala Outdoor", 
  category: "Website Development", 
  fullName: "koala-outdoor-shopify-revamp", 
  description: "Koala Outdoor – Redefining the Adventure Gear Shopping Experience: A High-Performance and Conversion-Optimized Shopify Transformation" 
},
    { 
  id: 23, 
  image: img23, 
  title: "Devilish Tattoo", 
  category: "Website Development", 
  fullName: "devilish-tattoo-prestashop-ecommerce", 
  description: "Devilish Tattoo – Premium Tattoo & Piercing Supplies: A Robust, High-Performance Prestashop E-commerce Transformation" 
},
   { 
  id: 24, 
  image: img24, 
  title: "BICI.CC", 
  category: "Website Development", 
  fullName: "bici-premium-cycling-shopify-experience", 
  description: "BICI.CC – Elevating the Cycling Experience: A High-Performance and Immersive Shopify eCommerce Transformation" 
},
  { 
  id: 25, 
  image: img25, 
  title: "Integrity Homes", 
  category: "Website Development", 
  fullName: "integrity-homes-real-estate-digital-transformation", 
  description: "Transforming Integrity Homes – Elevating Real Estate Success Through Digital Excellence" 
},
   { 
  id: 26, 
  image: img26, 
  title: "WaveBeamPro™", 
  category: "Website Development", 
  fullName: "wavebeampro-shopify-lighting-transformation", 
  description: "WaveBeamPro™ – Transforming Hands-Free Lighting: A High-Performance Shopify E-commerce Evolution" 
},
   { 
  id: 27, 
  image: img27, 
  title: "East Rosebud Fly & Tackle", 
  category: "Website Development", 
  fullName: "east-rosebud-fly-tackle-shopify-transformation", 
  description: "East Rosebud Fly & Tackle – Reeling in a Modern E-Commerce Experience: A High-Performance Shopify Transformation" 
},
    { 
  id: 28, 
  image: img28, 
  title: "Thinx", 
  category: "Website Development", 
  fullName: "thinx-sustainable-period-care-shopify", 
  description: "Thinx – Transforming Sustainable Period & Incontinence Care with Shopify: A High-Performing eCommerce Evolution" 
},
    { 
  id: 29, 
  image: img29, 
  title: "Portrait My Pet", 
  category: "Website Development", 
  fullName: "portrait-my-pet-shopify-personalization", 
  description: "Portrait My Pet – Elevating Pet Artistry with Shopify: A High-Performance Personalization and eCommerce Transformation" 
},
    { 
  id: 30, 
  image: img30, 
  title: "Brew Blue Life", 
  category: "Website Development", 
  fullName: "brew-blue-life-shopify-wellness-transformation", 
  description: "Brew Blue Life – Elevating the Shopify Experience for a Seamless Wellness Journey: A High-Performance eCommerce Transformation" 
},

    // --- Ecommerce Development (25 Projects) ---
    
  // --- Ecommerce Development (25 Projects) ---
    { 
      id: 31, 
      image: img31, 
      title: "FSH Furniture", 
      category: "Ecommerce Development", 
      fullName: "fsh-furniture-luxury-digital-transformation", 
      description: "FSH Furniture – Redefining Luxury Furniture Sales with a High-Performance Digital Transformation and E-commerce Overhaul" 
    },
    { 
      id: 32, 
      image: img32, 
      title: "Self Matters", 
      category: "Ecommerce Development", 
      fullName: "self-matters-woocommerce-optimization", 
      description: "Transforming Self Matters' WooCommerce Store for Speed, Conversions and Customer Engagement" 
    },
    { 
      id: 33, 
      image: img33, 
      title: "The Agency RE", 
      category: "Ecommerce Development", 
      fullName: "the-agency-re-luxury-real-estate-wordpress", 
      description: "The Agency RE – Elevating Luxury Real Estate with a High-Performance WordPress Experience" 
    },
    { 
      id: 34, 
      image: img34, 
      title: "Studio Chocolate", 
      category: "Ecommerce Development", 
      fullName: "studio-chocolate-artisan-bakery-wix", 
      description: "Studio Chocolate – Crafting a Deliciously Engaging Digital Experience with WIX" 
    },
    { 
  id: 35, 
  image: img35, 
  title: "SA Cleaning Services", 
  category: "Ecommerce Development", 
  fullName: "sa-cleaning-services-digital-transformation", 
  description: "SA Cleaning Services – A Digital Transformation for a Spotless Future: WordPress and SEO Excellence" 
},
   { 
  id: 36, 
  image: img36, 
  title: "SKOON. Skincare", 
  category: "Ecommerce Development", 
  fullName: "skoon-skincare-ecommerce-transformation", 
  description: "SKOON. Skincare – High-Performance eCommerce Experience and Clean Beauty Transformation" 
},
   { 
  id: 37, 
  image: img37, 
  title: "Ötzi Pocket", 
  category: "Ecommerce Development", 
  fullName: "otzi-pocket-ecommerce-innovation", 
  description: "Ötzi Pocket – Transforming a Hands-Free Tech Brand into a High-Performance Shopify Experience" 
},

   { 
  id: 38, 
  image: img38, 
  title: "Nanotech SST", 
  category: "Ecommerce Development", 
  fullName: "nanotech-sst-surface-protection-ecommerce", 
  description: "Nanotech SST - Advanced Surface Protection Technology Shopify Store and Conversion Optimization" 
},
   { 
  id: 39, 
  image: img39, 
  title: "Liberty Travel", 
  category: "Ecommerce Development", 
  fullName: "liberty-travel-digital-booking-transformation", 
  description: "Liberty Travel - Modern Travel Booking Platform with Drupal CMS and AI-Powered Personalization" 
},
   { 
  id: 40, 
  image: img40, 
  title: "Koala Outdoor", 
  category: "Ecommerce Development", 
  fullName: "koala-outdoor-shopify-ecommerce-transformation", 
  description: "Koala Outdoor - Scalable Shopify Solution and High-Performance Outdoor Gear Experience" 
},
    { 
  id: 41, 
  image: img41, 
  title: "Devilish Tattoo", 
  category: "Ecommerce Development", 
  fullName: "devilish-tattoo-ecommerce-supplies-platform", 
  description: "Devilish Tattoo - Professional Tattoo and Piercing Supplies eCommerce Experience in France" 
},
   { 
  id: 42, 
  image: img42, 
  title: "BICI.CC", 
  category: "Ecommerce Development", 
  fullName: "bici-cc-premium-cycling-ecommerce", 
  description: "BICI.CC - High-Performance Shopify Store for Global Cycling Enthusiasts and Professional Gear" 
},
   { 
  id: 43, 
  image: img43, 
  title: "Integrity Homes", 
  category: "Ecommerce Development", 
  fullName: "integrity-homes-digital-transformation", 
  description: "Integrity Homes - Custom WordPress Development and Luxury Real Estate Digital Excellence" 
},
    { 
  id: 44, 
  image: img44, 
  title: "WaveBeamPro™", 
  category: "Ecommerce Development", 
  fullName: "wavebeampro-shopify-ecommerce-optimization", 
  description: "WaveBeamPro™ - Transforming Hands-Free Lighting with High-Performance Shopify Solutions" 
},
    { 
  id: 45, 
  image: img45, 
  title: "East Rosebud Fly & Tackle", 
  category: "Ecommerce Development", 
  fullName: "east-rosebud-fly-tackle-ecommerce-transformation", 
  description: "East Rosebud Fly & Tackle - A Deep Dive into the Digital Transformation of a Legacy Fly Fishing Brand" 
},
    { 
  id: 46, 
  image: img46, 
  title: "Thinx", 
  category: "Ecommerce Development", 
  fullName: "thinx-shopify-sustainable-ecommerce-transformation", 
  description: "Thinx - Transforming Sustainable Period and Incontinence Care with High-Performance Shopify Solutions" 
},
   { 
  id: 47, 
  image: img47, 
  title: "Portrait My Pet", 
  category: "Ecommerce Development", 
  fullName: "portrait-my-pet-shopify-custom-art-transformation", 
  description: "Portrait My Pet - Elevating Pet Artistry with Shopify Optimization and Custom Personalization Tools" 
},
   { 
  id: 48, 
  image: img48, 
  title: "Brew Blue Life", 
  category: "Ecommerce Development", 
  fullName: "brew-blue-life-wellness", 
  description: "Brew Blue Life - Elevating Shopify for a Seamless Wellness Experience and Menopause Support" 
},
    { 
  id: 49, 
  image: img49, 
  title: "Dext Products", 
  category: "Ecommerce Development", 
  fullName: "dext-products-shopify-accessibility", 
  description: "Dext Products - Empowering Everyday Independence with Accessibility-Focused Shopify Solutions" 
},
    { 
  id: 50, 
  image: img50, 
  title: "Bottlecup", 
  category: "Ecommerce Development", 
  fullName: "bottlecup-shopify-sustainable-drinkware", 
  description: "Bottlecup - Redefining Sustainable Drinkware with a Seamless Shopify eCommerce Experience" 
},
    { 
  id: 51, 
  image: img51, 
  title: "Organic Grocery Store", 
  category: "Ecommerce Development", 
  fullName: "laravel-organic-grocery-store", 
  description: "Organic Grocery Store - A High-Performance Laravel eCommerce Solution for the Modern Wellness Sector" 
},
   { 
  id: 52, 
  image: img52, 
  title: "Jewelry Boutique Store", 
  category: "Ecommerce Development", 
  fullName: "laravel-jewelry-boutique", 
  description: "Jewelry Boutique Store - A Luxury Laravel eCommerce Experience Designed for High-End Jewelry Brands" 
},
    { 
  id: 53, 
  image: img53, 
  title: "Electronics Power Hub", 
  category: "Ecommerce Development", 
  fullName: "laravel-electronics-power-hub", 
  description: "Electronics Power Hub - A Scalable Laravel eCommerce Solution for High-Volume Tech and Gadget Retail" 
},
    { 
  id: 54, 
  image: img54, 
  title: "Radiant Beauty Hub", 
  category: "Ecommerce Development", 
  fullName: "laravel-beauty-skincare-hub", 
  description: "Radiant Beauty Hub - A Premium Laravel eCommerce Solution for Beauty, Wellness, and Skincare Brands" 
},
   { 
  id: 55, 
  image: img55, 
  title: "Jewelry Boutique Store", 
  category: "Ecommerce Development", 
  fullName: "luxury-jewelry-laravel-boutique", 
  description: "Jewelry Boutique Store - A Luxury Laravel eCommerce Experience Designed for High-End Jewelry Brands" 
},

    // --- UI/UX Design (14 Projects) ---
    { 
  id: 56, 
  image: img56, 
  title: "Farmer Care UI/UX", 
  category: "UI/UX Design", 
  fullName: "farmer-care-uiux-design", 
  description: "User-centric UI/UX solution for Farmer Care, focusing on extreme simplicity and visual-first navigation for rural users." 
},
   { 
  id: 57, 
  image: img57, 
  title: "TripSky UI/UX", 
  category: "UI/UX Design", 
  fullName: "tripsky-travel-agency-uiux-design", 
  description: "Redesigning the digital experience for TripSky with a focus on visual storytelling and a frictionless booking engine." 
},
   { 
  id: 58, 
  image: img58, 
  title: "Dental Clinic UI/UX", 
  category: "UI/UX Design", 
  fullName: "dental-clinic-healthcare-uiux-design", 
  description: "Patient-first UI/UX design for a modern dental clinic, focusing on an anxiety-free experience and automated booking." 
},
    { 
  id: 59, 
  image: img59, 
  title: "Campaign Medical UI/UX", 
  category: "UI/UX Design", 
  fullName: "campaign-medical-healthcare-app-uiux", 
  description: "Comprehensive mobile app design for Campaign Medical, bridging the gap between doctors and patients through seamless teleconsultation." 
},
    { 
  id: 60, 
  image: img60, 
  title: "Nestro Construction UI/UX", 
  category: "UI/UX Design", 
  fullName: "nestro-construction-industrial-uiux-design", 
  description: "High-impact industrial UI/UX design for Nestro Construction, emphasizing visual scale, engineering precision, and a professional brand presence." 
},
    { 
  id: 61, 
  image: img61, 
  title: "UrbanNest UI/UX", 
  category: "UI/UX Design", 
  fullName: "urbannest-real-estate-landing-page-uiux", 
  description: "High-converting, minimalist-luxury landing page design for UrbanNest, featuring interactive floor plans and immersive property visuals." 
},
   { 
  id: 62, 
  image: img62, 
  title: "Fitness Gym UI/UX", 
  category: "UI/UX Design", 
  fullName: "fitness-modern-gym-landing-page-uiux", 
  description: "High-octane landing page design for Fitness, focusing on bold aesthetics, conversion optimization, and a seamless class booking experience." 
},
  { 
  id: 63, 
  image: img63, 
  title: "NextLearn UI/UX", 
  category: "UI/UX Design", 
  fullName: "nextlearn-online-elearning-uiux-design", 
  description: "Experience-first UI/UX design for NextLearn, featuring a gamified LMS dashboard and a distraction-free course player." 
},
    { 
  id: 64, 
  image: img64, 
  title: "RETROLADY UI/UX", 
  category: "UI/UX Design", 
  fullName: "retrolady-vintage-fashion-ecommerce-uiux", 
  description: "Immersive vintage fashion e-commerce design for RETROLADY, blending nostalgic aesthetics with modern conversion-focused features." 
},
   { 
  id: 65, 
  image: img65, 
  title: "Beauty Cosmetics UI/UX", 
  category: "UI/UX Design", 
  fullName: "beauty-cosmetics-premium-ecommerce-uiux", 
  description: "Luxury e-commerce UI/UX design for Beauty Cosmetics, featuring a shade finder, skin-concern filtering, and a minimalist aesthetic." 
},
  { 
  id: 66, 
  image: img66, 
  title: "FarmerCare Investment UI/UX", 
  category: "UI/UX Design", 
  fullName: "farmercare-investment-agrifintech-uiux", 
  description: "High-trust Agri-FinTech mobile app design for FarmerCare, simplifying complex agricultural investment metrics for casual investors." 
},
    { 
  id: 67, 
  image: img67, 
  title: "ShipGlobe SaaS UI/UX", 
  category: "UI/UX Design", 
  fullName: "shipglobe-crossborder-ecommerce-saas-uiux", 
  description: "B2B SaaS landing page design for ShipGlobe, focusing on simplifying complex cross-border logistics through a high-conversion UI." 
},

// ... baki posts gulo eikhane thakbe

   /* { id: 68, image: img68, title: "talentflow", category: "UI/UX Design", fullName: "Full Name 68", description: "Next-Gen AI Recruitment Portal with Seamless Candidate UX" },
    
    { id: 69, image: img69, title: "tracklog", category: "UI/UX Design", fullName: "Full Name 69", description: "Last-Mile Delivery App Interface for Global Logistics Firms" },
*/
    // --- Software Development (10 Projects) ---
   { 
  id: 70, 
  image: img70, // তোর ইম্পোর্ট করা ইমেজের ভ্যারিয়েবল নাম
  title: "TaskSync", 
  category: "Software Development", 
  fullName: "tasksync-custom-productivity-solution", 
  description: "TaskSync – A Custom-Built Productivity Hub Using Vue.js and Laravel for Agile Teams" 
},

   { 
  id: 71, 
  image: img71, 
  title: "Healthcare Booking", 
  category: "Software Development", 
  fullName: "healthcare-patient-booking-platform", 
  description: "Online Patient Booking Platform – Revolutionizing Healthcare Accessibility with Vue.js and Node.js" 
},
   { 
  id: 72, 
  image: img72, 
  title: "Domailmax SaaS", 
  category: "Software Development", 
  fullName: "domailmax-microservices-saas-platform", 
  description: "Domailmax Microservices SaaS Platform – Scalable Architecture with Go and Kubernetes" 
},
    { 
  id: 73, 
  image: img73, 
  title: "Cognota eLearning", 
  category: "Software Development", 
  fullName: "cognota-custom-elearning-platform", 
  description: "Transforming Online Education with a Custom eLearning Platform – Built with React, Node, and AI" 
},

/*
    { id: 74, image: img74, title: "ChefConnect", category: "Software Development", fullName: "chefconnect-ai-restaurant-inventory", description: "AI Restaurant Inventory Management System with Recipe Logic" },
    { id: 75, image: img75, title: "ProManage", category: "Software Development", fullName: "promanage-creative-collaboration-saas", description: "Multi-User Creative Project Collaboration SaaS with Versioning" },
    { id: 76, image: img76, title: "AutoBid", category: "Software Development", fullName: "autobid-high-speed-auction-engine", description: "High-Speed Real-Time Auction Engine with No Latency Issues" },
    { id: 77, image: img77, title: "CleanConnect", category: "Software Development", fullName: "cleanconnect-service-erp-system", description: "Service Provider ERP System with GPS Tracking and Scheduling" },
    { id: 78, image: img78, title: "VibeCheck", category: "Software Development", fullName: "vibecheck-corporate-sentiment-analysis", description: "Anonymous Corporate Feedback and Sentiment Analysis Platform" },
    { id: 79, image: img79, title: "DataDash", category: "Software Development", fullName: "datadash-business-intelligence-tool", description: "Custom Business Intelligence Tool Visualizing Enterprise KPIs" },

    */
    // --- Mobile App Development (6 Projects) ---
   { 
  id: 80, 
  image: img80, 
  title: "FarmerCare FinTech App", 
  category: "Mobile App Development", 
  fullName: "farmercare-agri-fintech-app", 
  description: "A high-security Agri-FinTech mobile application built with Flutter and Node.js, processing over 1.5M dollars in investments." 
},
    { 
  id: 81, 
  image: img81, 
  title: "Amar Vote Kendra", 
  category: "Mobile App Development", 
  fullName: "amar-vote-kendra-civic-engagement-app", 
  description: "A high-performance GovTech mobile application that handled 100,000 requests per second to help citizens find polling stations." 
},
   /* { id: 82, image: img82, title: "medtrack trial", category: "Mobile App Development", fullName: "Full Name 82", description: "Patient Care and Clinical Trial Tracking App for Medical Labs" },
    { id: 83, image: img83, title: "urbanlink traffic", category: "Mobile App Development", fullName: "Full Name 83", description: "AI-Driven Real-Time City Traffic Management for Citizens" },
    { id: 84, image: img84, title: "artchain verify", category: "Mobile App Development", fullName: "Full Name 84", description: "Blockchain Art Authentication and Provenance Verification App" },
    { id: 85, image: img85, title: "aeroops fleet", category: "Mobile App Development", fullName: "Full Name 85", description: "Aviation Logistics & Private Jet Crew Management Application" }
    */
  ];

  // Logic
  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');    
  };


  const filteredCases = activeTab === 'All'
    ? cases
    : cases.filter(item => item.category === activeTab);


  return (
    <section className="w-full bg-[#02050A] pt-6 md:pt-12 font-['Poppins']">
      <div className="max-w-[1445px] mx-auto px-4 md:px-14 lg:px-18 xl:px-24">
       
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2
                text-[12px] sm:text-[14px] md:text-[16px] font-medium md:font-semibold
                transition-all border rounded-[4px] text-white whitespace-nowrap
                ${activeTab === category
                  ? 'bg-[#F7A400] border-[#F7A400]'
                  : 'bg-transparent border-[#F7A400]/40 hover:border-[#F7A400]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>


        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-2">
          {filteredCases.map((item) => (
            <div key={item.id} className="bg-[#0A0A0A] border border-gray-800 flex flex-col overflow-hidden group transition-all duration-300 hover:border-[#f7a400]">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-white text-[18px] md:text-[22px] font-bold mb-3">{item.title}</h3>
                <p className="text-white text-[14px] md:text-[16px] leading-snug">{item.description}</p>
              </div>
              <Link
                to={`/projects/${createSlug(item.fullName)}`} 
                state={{ title: item.title, image: item.image }}
                className="w-full py-2 bg-[#f7a400] text-black hover:text-white font-semibold text-[14px] md:text-[15px] text-center transition-all border-2 border-transparent hover:bg-[#02050A] hover:border-[#f7a400]"
              >
                Read More
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectFilter;


