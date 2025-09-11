// src/components/sections/SelfAssessmentSection.tsx
import React from 'react';
import Button from '@/features/shared/ui/Button';

interface SelfAssessmentSectionProps { }

// ✅ We remove ProgressBar, FormField, PhoneMockup — no longer needed

const SelfAssessmentSection: React.FC<SelfAssessmentSectionProps> = () => {
  return (
    <section
      className="w-full"
      aria-labelledby="self-assessment-heading"
      role="region"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-[48px] lg:items-center lg:justify-center">
          {/* Illustration Section */}
          <div
            className="flex w-full flex-col items-center lg:w-[28%] lg:ml-[54px]"
            role="img"
            aria-label="Self assessment app interface with character illustration"
          >
            <div className="relative h-[300px] w-full max-w-[280px] sm:h-[360px] sm:max-w-[300px] lg:h-[428px] lg:max-w-[320px]">
              <img
                src="/images/img_self_assesment.svg"
                alt="App interface showing self-assessment form with progress bar and sign up button"
                className="absolute left-1/2 top-8 h-[200px] w-[140px] -translate-x-1/2 object-contain sm:top-10 sm:h-[240px] sm:w-[160px] lg:top-[46px] lg:h-[284px] lg:w-[184px]"
                loading="lazy"
                decoding="async"
                aria-hidden="false"
              />

              {/* Bottom Line */}
              <div
                className="absolute bottom-0 left-0 h-[1px] w-full bg-[#607d8b]"
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex w-full flex-col gap-6 text-center sm:gap-8 lg:w-[60%] lg:text-left lg:gap-[32px]">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              <h2
                id="self-assessment-heading"
                className="text-[28px] font-semibold leading-tight text-global-3 sm:text-[32px] lg:text-[36px]"
              >
                Self Assessment
              </h2>
              <p className="w-full text-sm font-normal leading-5 text-global-4 lg:w-[90%]">
                Take the first step toward your global education journey with our
                quick, intuitive self-assessment. In just a few minutes, discover
                which courses, countries, and pathways best match your goals,
                budget, and academic background — personalized just for you. No
                pressure, no obligations — just clarity to start smart.
              </p>
            </div>
            <Button
              variant="primary"
              size="medium"
              className="w-full rounded bg-global-2 px-6 py-3 text-sm font-medium text-global-7 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
            >
              Free Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentSection;