import React from 'react';
import Button from '../shared/ui/Button';

const SelfAssessmentSection: React.FC = () => {
  return (
    <section className="w-full" aria-labelledby="self-assessment-heading">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-[48px] lg:items-center lg:justify-center">
          {/* Illustration Section */}
          <div className="flex w-full flex-col items-center lg:w-[28%] lg:ml-[54px]" role="img" aria-label="Self assessment app interface with character illustration">
            <div className="relative h-[300px] w-full max-w-[280px] sm:h-[360px] sm:max-w-[300px] lg:h-[428px] lg:max-w-[320px]">
              {/* Background Elements */}
              <img
                src="/images/img_padlock.svg"
                alt="Security"
                className="absolute right-0 top-0 mr-1 h-[72px] w-[60px] object-contain sm:h-[87px] sm:w-[73px] lg:h-[102px] lg:w-[86px]"
                loading="lazy"
              />
              <img
                src="/images/img_plant.svg"
                alt="Plant decoration"
                className="absolute right-0 bottom-8 h-[104px] w-[60px] object-contain sm:bottom-12 sm:h-[125px] sm:w-[72px] lg:bottom-[90px] lg:h-[146px] lg:w-[84px]"
                loading="lazy"
              />

              {/* Main Phone Mockup */}
              <div className="absolute left-1/2 top-8 flex h-[200px] w-[140px] -translate-x-1/2 flex-col sm:top-10 sm:h-[240px] sm:w-[160px] lg:top-[46px] lg:h-[284px] lg:w-[184px]">
                <div className="relative flex h-full w-full flex-col rounded-lg bg-[#4a5568] p-2 sm:p-3 lg:p-[8px]">
                  {/* Phone Screen Content */}
                  <div className="flex h-full w-full flex-col rounded-md bg-white p-2 sm:p-3 lg:p-[10px]">
                    {/* Header */}
                    <div className="mb-3 flex justify-center sm:mb-4 lg:mb-[18px]" aria-hidden="true">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3 h-1 w-full rounded bg-gray-200 sm:mb-4 lg:mb-[18px]" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                      <div className="h-full w-[60%] rounded bg-white bg-opacity-20" aria-hidden="true"></div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 space-y-2 sm:space-y-3 lg:space-y-[14px]" aria-hidden="true">
                      <div className="h-1 w-[40%] bg-gray-300"></div>
                      <div className="flex h-3 items-center rounded bg-gray-100 px-2 sm:h-4 lg:h-[18px]">
                        <div className="h-1 w-[80%] bg-white bg-opacity-20"></div>
                      </div>
                      <div className="h-1 w-[40%] bg-gray-300"></div>
                      <div className="flex h-3 items-center rounded bg-gray-100 px-2 sm:h-4 lg:h-[18px]">
                        <div className="h-1 w-[80%] bg-white bg-opacity-20"></div>
                      </div>
                      <div className="h-1 w-[40%] bg-gray-300"></div>
                      <div className="flex h-3 items-center rounded bg-gray-100 px-2 sm:h-4 lg:h-[18px]">
                        <div className="flex gap-1">
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Sign Up Button */}
                    <div className="mt-4 flex justify-center sm:mt-6 lg:mt-[30px]">
                      <div className="rounded bg-green-500 px-2 py-1 text-[6px] text-white sm:text-[7px] lg:text-[8px]" aria-label="Sign up button in app interface">
                        SIGN UP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speech Bubble */}
              <img
                src="/images/img_speech_bubble.svg"
                alt="Speech bubble"
                className="absolute left-0 top-[120px] h-[43px] w-[37px] object-contain sm:top-[140px] sm:h-[51px] sm:w-[44px] lg:top-[135px] lg:h-[60px] lg:w-[52px]"
                loading="lazy"
              />

              {/* Character */}
              <img
                src="/images/img_character.svg"
                alt="Character"
                className="absolute bottom-0 left-6 h-[204px] w-[105px] object-contain sm:left-8 sm:h-[245px] sm:w-[126px] lg:left-[26px] lg:h-[286px] lg:w-[148px]"
                loading="lazy"
              />

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#607d8b]" aria-hidden="true"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex w-full flex-col gap-6 text-center sm:gap-8 lg:w-[60%] lg:text-left lg:gap-[32px]">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              <h2 id="self-assessment-heading" className="text-[28px] font-semibold leading-tight text-global-3 sm:text-[32px] lg:text-[36px]">
                Self Assessment
              </h2>
              <p className="w-full text-sm font-normal leading-5 text-global-4 lg:w-[90%]">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
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