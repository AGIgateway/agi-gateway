import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-global-5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[66px]">
          {/* Hero Content Section */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px]">
            <div className="bg-global-5 flex flex-col gap-4 sm:gap-6 lg:gap-[26px]">
              {/* Hero Slider Container */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[546px] flex justify-center">
                {/* Main Hero Content */}
                <div className="flex justify-center items-center w-full px-4 sm:px-6 lg:px-[56px] mb-8 sm:mb-10 lg:mb-[44px]">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-[1328px]">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px] w-full lg:w-[56%] text-center lg:text-left">
                      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[18px]">
                        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-semibold leading-tight text-global-3">
                          We are here to assist with your Dreams
                        </h1>
                        <p className="text-sm sm:text-base font-normal leading-5 text-global-4">
                          Empowering Students to Study in New Zealand
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        size="medium"
                        className="bg-global-2 text-global-7 rounded px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium w-full sm:w-auto"
                      >
                        Book a Free Consultation
                      </Button>
                    </div>
                    
                    {/* Hero Image */}
                    <div className="w-full lg:w-[28%] flex justify-center">
                      <img 
                        src="/images/img_illustration.svg" 
                        alt="Educational illustration" 
                        className="w-[280px] sm:w-[320px] lg:w-[390px] h-[290px] sm:w-[330px] lg:h-[406px] object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Background Slider Image */}
                <div className="absolute inset-0 -z-10">
                  <img 
                    src="/images/img_fb_cover_01_1.png" 
                    alt="Hero background" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Slider Indicators */}
              <div className="flex justify-center items-center gap-2 mb-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-[10px] h-[10px] rounded-full transition-colors ${
                      index === currentSlide ? 'bg-global-2' : 'bg-global-3'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;