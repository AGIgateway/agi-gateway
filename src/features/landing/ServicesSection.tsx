// @/landing/ServicesSection.tsx

import type React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  path: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      icon: '/images/img_icon.svg',
      title: 'Course Guidance',
      subtitle: 'Finding Your Perfect Path',
      path: "/services/course-guidance",
    },
    {
      id: '2',
      icon: '/images/img_icon_green_50.svg',
      title: 'Admission Support',
      subtitle: 'Turning Your Application into a Story',
      path: "/services/admission-support",
    },
    {
      id: '3',
      icon: '/images/img_icon_green_50_56x64.svg',
      title: 'Test Preparation',
      subtitle: 'Master English, Master Your Future',
      path: "/services/test-preparations",
    },
    {
      id: '4',
      icon: '/images/img_icon_green_50_56x64.svg',
      title: 'Visa Support',
      subtitle: 'Simplifying the Toughest Steps',
      path: "/services/visa-support"
    },
    {
      id: '5',
      icon: '/images/img_icon.svg',
      title: 'Predeparture Services',
      subtitle: 'More Than Just a Visa',
      path: "/services/pre-departure",
    },
    {
      id: '6',
      icon: '/images/img_icon_green_50.svg',
      title: 'Future Pathways',
      subtitle: 'Building a Life, Not Just a degree',
      path: "/services/future-pathways",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4">
          {/* Section Header */}
          <div className="flex justify-center">
            <h2 className="text-3xl font-semibold leading-tight text-center text-foreground sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 px-4 sm:px-8 lg:px-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="block h-full"
              >
                <Card className="flex flex-col justify-between h-full bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-4 px-8 sm:px-12 lg:px-14 pb-2">
                    <img
                      src={service.icon || '/placeholder.svg'}
                      alt={service.title}
                      className="w-12 h-10 object-contain sm:w-14 sm:h-12 lg:w-16 lg:h-14"
                      loading="lazy"
                      decoding="async"
                    />
                    <CardTitle className="text-xl font-bold leading-tight text-center text-foreground sm:text-2xl lg:text-3xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 text-center">
                    <p className="text-sm font-bold leading-5 text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;