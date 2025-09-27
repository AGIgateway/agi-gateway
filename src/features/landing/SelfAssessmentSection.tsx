import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type SelfAssessmentSectionProps = {};

const SelfAssessmentSection: React.FC<SelfAssessmentSectionProps> = () => {
  return (
    <section className="w-full" aria-labelledby="self-assessment-heading" role="region">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-32 lg:items-center">
          <div className="w-full max-w-md lg:w-1/3">
            <img
              src="/images/img_self_assesment.svg"
              alt="Self-assessment person"
              className="w-full h-auto object-contain mx-auto drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
          </div>

          <Card className="w-full lg:w-2/3 bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col gap-6 text-center lg:text-left p-0">
              <div className="flex flex-col gap-4">
                <h2
                  id="self-assessment-heading"
                  className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
                >
                  Self Assessment
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                  Take the first step toward your global education journey with our quick, intuitive
                  self-assessment. In just a few minutes, discover which courses, countries, and
                  pathways best match your goals, budget, and academic background — personalized
                  just for you. No pressure, no obligations — just clarity to start smart.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button className="w-full min-w-44 rounded bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-6 sm:py-3 sm:text-base">
                  Free Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentSection;