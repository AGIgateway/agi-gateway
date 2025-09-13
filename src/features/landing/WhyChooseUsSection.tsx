import React from 'react';
import Button from '@/features/shared/ui/Button';

interface WhyChooseUsSectionProps { }

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = () => {
  return (
    <section
      className="w-full bg-global-5 py-10 sm:py-16 lg:py-20"
      aria-labelledby="why-choose-us-heading"
      role="region"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 lg:items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/3">
            <div
              className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[4/5]"
              role="img"
              aria-label="Attentive listening — our team listens to your needs"
            >
              <img
                src="/images/img_attentive_listening.png"
                alt="Attentive listening — our team listens to your needs"
                className="h-full w-full object-contain drop-shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex w-full flex-col gap-6 sm:gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2
                id="why-choose-us-heading"
                className="text-3xl font-semibold leading-tight text-global-3 sm:text-4xl lg:text-5xl"
              >
                Why Choose Us?
              </h2>
              <p className="mx-auto max-w-prose text-base leading-relaxed text-global-4 sm:text-lg lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                elementum pulvinar odio.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="primary"
                size="medium"
                // ✅ min-w-[180px] → min-w-45 (180px = 45 * 0.25rem)
                className="min-w-45 rounded bg-global-2 px-6 py-3 text-sm font-medium text-global-7 sm:px-8 sm:py-3.5 sm:text-base"
                aria-label="Learn more about our services"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;