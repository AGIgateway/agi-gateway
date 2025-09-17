import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      icon: '/images/img_icon.svg',
      title: 'Course Guidance',
      description:
        'Personalized advice on choosing the right academic path — from school to PhD, including specialized and pathway programs tailored to your goals.',
    },
    {
      id: '2',
      icon: '/images/img_icon_green_50.svg',
      title: 'Admission Support',
      description:
        'End-to-end assistance with applications, scholarships, and document prep — we help you submit strong, standout applications with confidence.',
    },
    {
      id: '3',
      icon: '/images/img_icon_green_50_56x64.svg',
      title: 'Test Preparation',
      description:
        'Master IELTS, PTE, and academic English with targeted coaching, mock tests, and expert feedback to hit your target scores.',
    },
    {
      id: '4',
      icon: '/images/img_icon_green_50_56x64.svg',
      title: 'Visa Support',
      description:
        'Navigate student and dependent visas, insurance, and post-study work rights with step-by-step guidance from certified advisors.',
    },
    {
      id: '5',
      icon: '/images/img_icon.svg',
      title: 'Predeparture Services',
      description:
        'Smooth transition abroad — we assist with airport pickup, housing, banking, and local systems so you settle in stress-free.',
    },
    {
      id: '6',
      icon: '/images/img_icon_green_50.svg',
      title: 'Career Pathways',
      description:
        'Build a NZ-ready CV, join career events, and unlock local job opportunities with our post-study career development support.',
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4">
          {/* Section Header */}
          <div className="flex justify-center">
            <h2 className="text-3xl font-semibold leading-tight text-center text-global-3 sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 px-4 sm:px-8 lg:px-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col items-center text-center bg-global-7 border-none shadow-[0_2px_4px_rgba(171,190,209,0.2)] hover:shadow-[0_4px_8px_rgba(171,190,209,0.3)] transition-shadow duration-200"
              >
                <CardHeader className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-4 px-8 sm:px-12 lg:px-14 pb-2">
                  <img
                    src={service.icon || '/placeholder.svg'}
                    alt={service.title}
                    className="w-12 h-10 object-contain sm:w-14 sm:h-12 lg:w-16 lg:h-14"
                    loading="lazy"
                    decoding="async"
                  />
                  <CardTitle className="text-xl font-bold leading-tight text-center text-global-3 sm:text-2xl lg:text-3xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm font-normal leading-5 text-center text-global-4">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
