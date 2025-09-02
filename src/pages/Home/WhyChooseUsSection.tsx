import React from 'react';
import Button from '../../components/ui/Button';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="w-full bg-global-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-[48px] justify-center items-center">
          {/* Image Section */}
          <div className="relative w-full lg:w-[34%] flex justify-center py-4 lg:py-[16px]">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[442px] h-[300px] sm:h-[360px] lg:h-[432px]">
              {/* Background Image */}
              <img 
                src="/images/img_mobile_login_rafiki.svg" 
                alt="Mobile login illustration" 
                className="w-full h-[230px] sm:h-[280px] lg:h-[328px] object-contain mt-8 sm:mt-10 lg:mt-[92px]"
              />
              
              {/* Overlaid Image */}
              <img 
                src="/images/img_attentive_listening.png" 
                alt="Attentive listening" 
                className="absolute top-4 sm:top-6 lg:top-[20px] left-12 sm:left-16 lg:left-[68px] w-[180px] sm:w-[220px] lg:w-[256px] h-[270px] sm:h-[320px] lg:h-[384px] object-contain"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px] w-full lg:w-[52%] text-center lg:text-left">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight text-global-3">
                Why Choose Us?
              </h2>
              <p className="text-sm font-normal leading-5 text-global-4 w-full lg:w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <Button
              variant="primary"
              size="medium"
              className="bg-global-2 text-global-7 rounded px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;