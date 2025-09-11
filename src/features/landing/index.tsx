import React, { Suspense } from 'react';
import Header from '@/features/layouts/Header/Header';
import Footer from '@/features/layouts/Footer/Footer';
import HeroSection from '@/features/landing/HeroSection';
import ServicesSection from '@/features/landing/ServicesSection';
import UniversityPartnersSection from '@/features/landing/UniversityPartnersSection';
import WhyChooseUsSection from '@/features/landing/WhyChooseUsSection';
import StatisticsSection from './StatisticsSection';
import SelfAssessmentSection from '@/features/landing/SelfAssessmentSection';
import TestimonialSection from '@/features/landing/TestimonialSection';
import BlogSection from '@/features/landing/BlogSection';

// Section data for better organization and maintainability
const sections = [
  { id: 'hero', Component: HeroSection, label: 'Hero section' },
  { id: 'services', Component: ServicesSection, label: 'Services section' },
  { id: 'university-partners', Component: UniversityPartnersSection, label: 'University partners section' },
  { id: 'why-choose-us', Component: WhyChooseUsSection, label: 'Why choose us section' },
  { id: 'statistics', Component: StatisticsSection, label: 'Statistics section' },
  { id: 'self-assessment', Component: SelfAssessmentSection, label: 'Self assessment section' },
  { id: 'testimonials', Component: TestimonialSection, label: 'Testimonials section' },
  { id: 'blog', Component: BlogSection, label: 'Blog section' },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-global-7 min-h-screen flex flex-col">
      <Header />

      <main
        className="flex flex-col gap-12 sm:gap-16 lg:gap-[66px] flex-1"
        aria-label="Main content"
      >
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          {sections.map(({ id, Component, label }) => (
            <section key={id} id={id} aria-label={label}>
              <Component />
            </section>
          ))}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;