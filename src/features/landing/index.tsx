import React, { Suspense } from 'react';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import HeroSection from './HeroSection';
import ServicesSection from '../landing/ServicesSection';
import UniversityPartnersSection from '../landing/UniversityPartnersSection';
import WhyChooseUsSection from '../landing/WhyChooseUsSection';
import StatisticsSection from './StatisticsSection';
import SelfAssessmentSection from '../landing/SelfAssessmentSection';
import TestimonialSection from '../landing/TestimonialSection';
import BlogSection from './BlogSection';

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