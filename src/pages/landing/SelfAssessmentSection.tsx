// @/landing/SelfAssessmentSection.tsx

import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

type SelfAssessmentSectionProps = {};

const SelfAssessmentSection: React.FC<SelfAssessmentSectionProps> = () => {
  const navigate = useNavigate();

  const handleAssessmentClick = () => {
    navigate('/assessment');
  };

  return (
    <section className="w-full bg-muted" aria-labelledby="self-assessment-heading" role="region">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-32 lg:items-center">
          <div className="w-full max-w-md lg:w-1/3">
            <img
              src="/images/assessment-lead.svg"
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
                  Every great journey begins with understanding where you stand today. Our self-assessment form helps us learn more about your goals, academic background, and study preferences, so we can guide you towards the best pathway for your future.

                  Take a few minutes to complete the form, and our team will personally review your details and get in touch with tailored advice to help you take the next step towards studying in New Zealand.

                  Your dream deserves the right direction. Let’s start your journey together.
                </p>
              </div>

              <Button
                onClick={handleAssessmentClick}
                className="w-full min-w-44 sm:w-auto"
              >
                Free Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentSection;