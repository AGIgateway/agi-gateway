import React from 'react';

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
      title: 'Offer letter',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      id: '2',
      icon: '/images/img_icon_green_50.svg',
      title: 'Study Prep',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      id: '3',
      icon: '/images/img_icon_green_50_56x64.svg',
      title: 'Visa Assistance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
          {/* Section Header */}
          <div className="flex justify-center">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight text-center text-global-3">
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-2 items-center w-full bg-global-7 rounded-lg shadow-[0px_2px_4px_#abbed133] p-4 sm:p-6 lg:p-[24px]"
              >
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px] items-center px-8 sm:px-12 lg:px-[56px]">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 sm:w-14 lg:w-[64px] h-10 sm:h-12 lg:h-[56px] object-contain"
                  />
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold leading-tight text-center text-global-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm font-normal leading-5 text-center text-global-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;