import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type WhyChooseUsSectionProps = {};

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = () => {
  return (
    <section
      className="w-full bg-secondary py-10 sm:py-16 lg:py-20"
      aria-labelledby="why-choose-us-heading"
      role="region"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-0">
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
                    className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
                  >
                    Why Choose Us?
                  </h2>
                  <p className="mx-auto max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                    AGI Gateway isn’t just another education consultancy. It’s a bridge built by people who’ve walked the same path.
                    We’re proudly New Zealand owned and operated, shaped by real experiences — arriving in a new country, facing uncertainty, learning to adapt, and finally, calling this place home.
                    With AGI Gateway, you’re not just choosing a consultancy. You’re choosing mentors who have lived your dream, faced the same challenges, and built a trusted path for your success — academically, personally, and professionally.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="min-w-45 rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:px-8 sm:py-3.5 sm:text-base"
                    aria-label="Learn more about our services"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;