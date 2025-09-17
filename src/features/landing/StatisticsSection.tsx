import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Statistic {
  id: string;
  icon: string;
  value: string;
  label: string;
}

const StatisticsSection: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: '1',
      icon: '/images/img_icon_teal_900_02.svg',
      value: '2,245,341',
      label: 'Students',
    },
    {
      id: '2',
      icon: '/images/img_hand_icon.jpg',
      value: '46,328',
      label: 'Universities',
    },
    {
      id: '3',
      icon: '/images/img_icon_48x48.svg',
      value: '828,867',
      label: 'Consult Bookings',
    },
    {
      id: '4',
      icon: '/images/img_icon_1.svg',
      value: '1,926,436',
      label: 'Payments',
    },
  ];

  return (
    <section className="w-full bg-global-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 py-12 sm:py-16 lg:py-[64px]">
          {/* Text Content */}
          <div className="flex flex-col gap-2 items-start w-full lg:w-[50%] text-center lg:text-left">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight text-global-3 w-full lg:w-[66%]">
              <span className="text-global-3">Helping Students </span>
              <span className="text-global-1">Across The World </span>
            </h2>
            <p className="text-sm sm:text-base font-normal leading-5 text-global-2 mt-4 lg:mt-[52px]">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="w-full lg:w-[46%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-[16px]">
              {statistics.map((stat, index) => (
                <Card
                  key={stat.id}
                  className="bg-transparent border-none shadow-none hover:bg-global-6/50 transition-colors duration-200"
                >
                  <CardContent
                    className={`p-0 flex gap-3 sm:gap-4 lg:gap-[16px] items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-start sm:justify-end'
                    }`}
                  >
                    <img
                      src={stat.icon || '/placeholder.svg'}
                      alt={stat.label}
                      className="w-10 sm:w-12 lg:w-[48px] h-10 sm:h-12 lg:h-[48px] object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 lg:gap-[2px]">
                      <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold leading-tight text-global-3">
                        {stat.value}
                      </h3>
                      <p className="text-sm sm:text-base font-normal leading-5 text-global-4">
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
