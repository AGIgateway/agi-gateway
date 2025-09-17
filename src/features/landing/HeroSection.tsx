import type React from 'react';
import { Badge } from '@/components/ui/badge';

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full bg-[#f5f4df] h-[calc(85vh-80px)] min-h-[400px] max-h-[800px] flex items-center overflow-hidden animate-fade-in"
      aria-label="Hero section"
      role="region"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row h-full items-center lg:items-stretch justify-center lg:justify-between p-4 lg:p-0">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center lg:pr-8 px-4 py-8 lg:px-0 lg:py-0">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Badge
                variant="secondary"
                className="bg-[#c8e6c9] text-[#1b4d43] hover:bg-[#c8e6c9]/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1b4d43] rounded-full"></div>
                ACHIEVE
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#c8e6c9] text-[#1b4d43] hover:bg-[#c8e6c9]/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1b4d43] rounded-full"></div>
                GROW
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#c8e6c9] text-[#1b4d43] hover:bg-[#c8e6c9]/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1b4d43] rounded-full"></div>
                INSPIRE
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#1b4d43] mb-8 sm:mb-12 lg:mb-16">
              WE CONNECT BRILLIANT MINDS TO WORLD-CLASS EDUCATION
            </h1>
          </div>

          {/* Right Image — Fully responsive, no overflow */}
          <div className="flex-1 lg:flex-[0_0_50%] xl:flex-[0_0_45%] flex items-center justify-center p-4 lg:p-0 mt-16 lg:mt-32 max-md:mt-8">
            <div className="w-full h-full max-h-full flex items-center justify-center overflow-hidden max-md:h-[70%] ">
              <img
                src="/images/img_graduation_student.svg"
                alt="Smiling graduate in cap and gown holding diploma"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
