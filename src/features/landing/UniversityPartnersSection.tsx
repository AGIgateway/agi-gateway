import React from 'react';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface University {
  id: string;
  logo: string;
  name: string;
}

interface UniversityLogoProps {
  university: University;
}

const UniversityLogo: React.FC<UniversityLogoProps> = ({ university }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={university.logo || '/placeholder.svg'}
        alt={university.name}
        className="w-full max-w-xs h-auto max-h-20 object-contain"
        loading="lazy"
      />
    </div>
  );
};

const UniversityPartnersSection: React.FC = (): ReactElement => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isHovering, setIsHovering] = useState(false); // ✅ New state

  useEffect(() => {
    if (!api) return;

    // Auto-scroll only if not hovering
    const interval = setInterval(() => {
      if (!isHovering) {
        api.scrollNext();
      }
    }, 1500); // 1.5s interval

    return () => clearInterval(interval);
  }, [api, isHovering]);

  const universities: University[] = [
    { id: '1', logo: '/images/img_ara.svg', name: 'Ara Institute' },
    { id: '2', logo: '/images/img_mask_group.svg', name: 'University of Canterbury' },
    { id: '3', logo: '/images/img_lincoln_logo.svg', name: 'Lincoln University' },
    { id: '4', logo: '/images/img_university_of_a.png', name: 'University of Auckland' },
    { id: '5', logo: '/images/img_images_1_1.png', name: 'Massey University' },
    { id: '6', logo: '/images/img_shield_1.png', name: 'Victoria University of Wellington' },
  ];

  return (
    <section
      className="w-full bg-global-7 py-8 sm:py-12 lg:py-16"
      aria-labelledby="university-partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            id="university-partners-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-global-3 mb-4"
          >
            University Partners
          </h2>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-global-4 max-w-3xl mx-auto">
            We are working with New Zealand's top universities
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
              dragFree: false, // prevents dragging beyond slides
            }}
            className="w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {universities.map((university) => (
                <CarouselItem
                  key={university.id}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1 flex justify-center items-center h-full">
                    <UniversityLogo university={university} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartnersSection;
