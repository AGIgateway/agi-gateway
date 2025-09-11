import React, { useState } from 'react';
import Button from '@/features/shared/ui/Button';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Uncomment and use if you have dynamic slide content
  // const slides = [
  //   { title: "...", desc: "...", img: "..." },
  //   ...
  // ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="w-full bg-global-5" aria-label="Hero section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[66px]">
          <div className="bg-global-5 rounded-2xl overflow-hidden relative">
            {/* Slider Container */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[546px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/images/img_fb_cover_01_1.png)` }}
                aria-hidden="true"
              ></div>

              {/* Content */}
              <div className="flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-[56px]">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-[1328px]">
                  {/* Text */}
                  <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px] w-full lg:w-[56%] text-center lg:text-left">
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[18px]">
                      <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-semibold leading-tight text-global-3">
                        We Connect Brillient Minds with World Class Education
                      </h1>
                      <p className="text-sm sm:text-base font-normal leading-5 text-global-4">
                        Empowering  Students to Study in New Zealand
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      size="medium"
                      className="bg-global-2 text-global-7 rounded px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium w-full sm:w-auto"
                      aria-label="Book a free consultation"
                    >
                      Book a Free Consultation
                    </Button>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-[28%] flex justify-center">
                    <img
                      src="/images/img_headshot.png"
                      alt="Educational illustration"
                      className="w-[280px] sm:w-[320px] lg:w-[390px] h-[290px] sm:h-[330px] lg:h-[406px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Slider Controls — ABSOLUTE */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-global-2"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 text-global-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2" role="tablist" aria-label="Slider navigation">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-global-2 ${index === currentSlide ? 'bg-global-2' : 'bg-global-3/60'}`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-selected={index === currentSlide}
                      role="tab"
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-global-2"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 text-global-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;