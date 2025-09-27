import type React from 'react';
import { Suspense } from 'react';
import HeroSection from '@/features/page/HeroSection';
import InfoSection from '@/features/page/InfoSection';
import CtaSection from '@/features/page/CtaSection';

const sections = [
  { id: 'hero', Component: HeroSection, label: 'Hero section' },
  { id: 'info', Component: InfoSection, label: 'Info section' },
  { id: 'cta', Component: CtaSection, label: 'CTA section' },
];

const SimplePage: React.FC = () => {
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
              className={index > 0 ? 'mt-12 sm:mt-16 lg:mt-[66px]' : ''}
            >
              <Component />
            </section>
          ))}
        </Suspense>
      </main>

    </div>
  );
};

export default SimplePage;
