// src/components/sections/HeroSection.tsx
import React, { useState, useCallback } from 'react';
import Button from '@/features/shared/ui/Button';
import BannerImage from '@/assets/images/banner-img.svg';

const SLIDES = [
  {
    id: 0,
    title: "We Connect Brilliant Minds with World Class Education",
    description: "Empowering Students to Study in New Zealand",
  },
  {
    id: 1,
    title: "We Connect Brilliant Minds with World Class Education",
    description: "Empowering Students to Study in New Zealand",
  },
];

// Sub-components unchanged (already responsive)
const SlideDot: React.FC<{
  index: number;
  isActive: boolean;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}> = ({ index, isActive, onClick, onKeyDown }) => (
  <button
    key={index}
    onClick={onClick}
    onKeyDown={onKeyDown}
    className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-global-2 ${isActive ? 'bg-global-2' : 'bg-global-3/60'
      }`}
    aria-label={`Go to slide ${index + 1}`}
    aria-selected={isActive}
    role="tab"
    tabIndex={isActive ? 0 : -1}
  />
);

const NavigationButton: React.FC<{
  direction: 'prev' | 'next';
  onClick: () => void;
  ariaLabel: string;
}> = ({ direction, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-global-2 transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-global-2"
    aria-label={ariaLabel}
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
      />
    </svg>
  </button>
);

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleKeyDown = useCallback(
    (index: number) => (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goToSlide(index);
      }
    },
    [goToSlide]
  );

  const currentSlideData = SLIDES[currentSlide];

  return (
    <section
      className="w-full bg-global-5"
      aria-label="Hero section"
      role="region"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-16">
          <div className="overflow-hidden rounded-2xl bg-global-5">
            <div className="relative w-full pb-[56.25%] sm:pb-[50%] lg:pb-[40%]">

              {/* Background Image */}
              <img
                src="/images/img_fb_cover_01_1.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full -z-10 object-cover"
                loading="eager"
                decoding="async"
              />

              {/* Content — absolutely positioned inside padding-box */}
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-14">
                <div className="flex w-full max-w-screen-xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
                  {/* Text Section — width controlled by flex grow/shrink or % */}
                  <div className="flex w-full flex-col items-center gap-6 text-center lg:w-3/5 lg:items-start lg:text-left">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-3xl font-semibold leading-tight text-global-3 sm:text-4xl md:text-5xl lg:text-6xl">
                        {currentSlideData.title}
                      </h1>
                      <p className="text-sm font-normal leading-5 text-global-4 sm:text-base md:text-lg">
                        {currentSlideData.description}
                      </p>
                    </div>

                    <Button
                      variant="primary"
                      size="medium"
                      className="w-full rounded bg-global-2 px-6 py-3 text-sm font-medium text-global-7 transition-colors hover:bg-opacity-90 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
                      aria-label="Book a free consultation"
                    >
                      Book a Free Consultation
                    </Button>
                  </div>

                  <div className="flex w-full justify-center lg:w-2/5">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[1/1.1]">
                      <img
                        src={BannerImage}
                        alt="Educational illustration of students and globe"
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controls — positioned relative to container */}
              <div
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3"
                role="tablist"
                aria-label="Slider navigation"
              >
                <NavigationButton
                  direction="prev"
                  onClick={prevSlide}
                  ariaLabel="Previous slide"
                />

                <div className="flex gap-2">
                  {SLIDES.map((_, index) => (
                    <SlideDot
                      key={index}
                      index={index}
                      isActive={index === currentSlide}
                      onClick={() => goToSlide(index)}
                      onKeyDown={handleKeyDown(index)}
                    />
                  ))}
                </div>

                <NavigationButton
                  direction="next"
                  onClick={nextSlide}
                  ariaLabel="Next slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;