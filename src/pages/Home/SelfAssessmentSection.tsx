import React from 'react';
import Button from '../../components/ui/Button';

const SelfAssessmentSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-[48px]">
          {/* Illustration Section */}
          <div className="flex flex-col items-center w-full lg:w-[28%] ml-0 lg:ml-[54px]">
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] h-[300px] sm:h-[360px] lg:h-[428px]">
              {/* Background Elements */}
              <img
                src="/images/img_padlock.svg"
                alt="Security"
                className="absolute top-0 right-0 w-[60px] sm:w-[73px] lg:w-[86px] h-[72px] sm:h-[87px] lg:h-[102px] object-contain mr-1"
              />
              <img
                src="/images/img_plant.svg"
                alt="Plant decoration"
                className="absolute bottom-8 sm:bottom-12 lg:bottom-[90px] right-0 w-[60px] sm:w-[72px] lg:w-[84px] h-[104px] sm:h-[125px] lg:h-[146px] object-contain"
              />

              {/* Main Phone Mockup */}
              <div className="absolute top-8 sm:top-10 lg:top-[46px] left-1/2 transform -translate-x-1/2 w-[140px] sm:w-[160px] lg:w-[184px] h-[200px] sm:h-[240px] lg:h-[284px]">
                <div className="relative w-full h-full bg-[#4a5568] rounded-lg p-2 sm:p-3 lg:p-[8px]">
                  {/* Phone Screen Content */}
                  <div className="w-full h-full bg-white rounded-md p-2 sm:p-3 lg:p-[10px] flex flex-col">
                    {/* Header */}
                    <div className="flex justify-center items-center mb-3 sm:mb-4 lg:mb-[18px]">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-200 rounded mb-3 sm:mb-4 lg:mb-[18px]">
                      <div className="w-[60%] h-full bg-white bg-opacity-20 rounded"></div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-2 sm:space-y-3 lg:space-y-[14px] flex-1">
                      <div className="w-[40%] h-1 bg-gray-300"></div>
                      <div className="w-full h-3 sm:h-4 lg:h-[18px] bg-gray-100 rounded flex items-center px-2">
                        <div className="w-[80%] h-1 bg-white bg-opacity-20"></div>
                      </div>
                      <div className="w-[40%] h-1 bg-gray-300"></div>
                      <div className="w-full h-3 sm:h-4 lg:h-[18px] bg-gray-100 rounded flex items-center px-2">
                        <div className="w-[80%] h-1 bg-white bg-opacity-20"></div>
                      </div>
                      <div className="w-[40%] h-1 bg-gray-300"></div>
                      <div className="w-full h-3 sm:h-4 lg:h-[18px] bg-gray-100 rounded flex items-center px-2">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Sign Up Button */}
                    <div className="mt-4 sm:mt-6 lg:mt-[30px] flex justify-center">
                      <div className="bg-green-500 text-white text-[6px] sm:text-[7px] lg:text-[8px] px-2 py-1 rounded">
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
                className="absolute top-[120px] sm:top-[140px] lg:top-[135px] left-0 w-[37px] sm:w-[44px] lg:w-[52px] h-[43px] sm:h-[51px] lg:h-[60px] object-contain"
              />

              {/* Character */}
              <img
                src="/images/img_character.svg"
                alt="Character"
                className="absolute bottom-0 left-6 sm:left-8 lg:left-[26px] w-[105px] sm:w-[126px] lg:w-[148px] h-[204px] sm:h-[245px] lg:h-[286px] object-contain"
              />

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#607d8b]"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px] w-full lg:w-[60%] text-center lg:text-left">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight text-global-3">
                Self Assessment
              </h2>
              <p className="text-sm font-normal leading-5 text-global-4 w-full lg:w-[90%]">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <Button
              variant="primary"
              size="medium"
              className="bg-global-2 text-global-7 rounded px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium w-full sm:w-auto"
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