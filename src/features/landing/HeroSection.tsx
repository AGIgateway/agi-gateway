// @/landing/HeroSection.tsx
import type React from 'react';
import { Badge } from '@/components/ui/badge';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 pb-4 sm:pt-10 sm:pb-6 lg:pt-6 lg:pb-4 bg-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left">
              {/* ✅ Added Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                <Badge
                  variant="secondary"
                  className="bg-accent text-primary hover:bg-accent/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                  ACHIEVE
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-accent text-primary hover:bg-accent/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                  GROW
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-accent text-primary hover:bg-accent/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                  INSPIRE
                </Badge>
              </div>

              {/* ✅ Updated Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary mb-8 sm:mb-12 lg:mb-16">
                WE CONNECT BRILLIANT MINDS TO WORLD-CLASS EDUCATION
              </h1>

              {/* Stats section remains unchanged */}
              {/* <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">900</p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">Visa<br />Delivered</p>
                </div>

                <div className="hidden sm:block">
                  <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">1000+</p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">Offer Letters<br />Completed</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Image — unchanged */}
          <div>
            <img
              className="w-full"
              src="/images/img_graduation_student.svg"
              alt="Smiling graduate in cap and gown holding diploma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;