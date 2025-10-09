// @/landing/index.tsx
import type React from 'react';
import { Suspense } from 'react';
import HeroSection from '@/features/landing/HeroSection';
import ServicesSection from '@/features/landing/ServicesSection';
import UniversityPartnersSection from '@/features/landing/UniversityPartnersSection';
import WhyChooseUsSection from '@/features/landing/WhyChooseUsSection';
import StatisticsSection from './StatisticsSection';
import SelfAssessmentSection from '@/features/landing/SelfAssessmentSection';
import TestimonialSection from '@/features/landing/TestimonialSection';
import BlogSection from '@/features/landing/BlogSection';
import ConsultationCtaSection from '@/features/landing/ConsultationCtaSection'

// Section data for better organization and maintainability
const sections = [
  { id: 'hero', Component: HeroSection, label: 'Hero section' },
  { id: 'services', Component: ServicesSection, label: 'Services section' },
  {
    id: 'university-partners',
    Component: UniversityPartnersSection,
    label: 'University partners section',
  },
  { id: 'why-choose-us', Component: WhyChooseUsSection, label: 'Why choose us section' },
  { id: 'statistics', Component: StatisticsSection, label: 'Statistics section' },
  { id: 'self-assessment', Component: SelfAssessmentSection, label: 'Self assessment section' },
  { id: 'testimonials', Component: TestimonialSection, label: 'Testimonials section' },
  { id: 'blog', Component: BlogSection, label: 'Blog section' },
  { id: 'consult', Component: ConsultationCtaSection, label: 'ConsultationCta section' },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-global-7 min-h-screen flex flex-col">

      <main className="flex flex-col gap-0 flex-1" aria-label="Main content">
        <Suspense
          fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}
        >
          {sections.map(({ id, Component, label }, index) => (
            <section
              key={id}
              id={id}
              aria-label={label}
              className={index > 0 ? 'mt-12 sm:mt-16 lg:mt-16' : ''}
            >
              <Component />
            </section>
          ))}
        </Suspense>
      </main>

    </div>
  );
};

export default HomePage;
