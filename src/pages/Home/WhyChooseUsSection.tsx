import React from 'react';
import Button from '../../components/ui/Button';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      className="w-full bg-global-5 py-10 sm:py-16 lg:py-20"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] sm:max-w-lg lg:max-w-xl">
              <img
                src="/images/img_attentive_listening.png"
                alt="Attentive listening — our team listens to your needs"
                className="w-full h-full object-contain mx-auto drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <h2
                id="why-choose-us-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-global-3"
              >
                Why Choose Us?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-global-4 max-w-prose mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="primary"
                size="medium"
                className="bg-global-2 text-global-7 rounded px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-medium min-w-[180px]"
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