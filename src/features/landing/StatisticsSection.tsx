// @/components/StatisticsSection.tsx

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
    <section className="w-full bg-muted"> {/* or use bg-[#F5F7FA] if not in theme */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-12 sm:py-16 lg:py-20">
          {/* Text Content */}
          <div className="flex flex-col items-start w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-foreground max-w-[66%]">
              <span className="text-foreground">Helping Students </span>
              <span className="text-primary">Across The World</span>
            </h2>
            <p className="text-sm sm:text-base font-normal text-muted-foreground mt-4">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {statistics.map((stat) => (
                <Card
                  key={stat.id}
                  className="bg-transparent border-none shadow-none hover:bg-background/50 transition-colors duration-200"
                >
                  <CardContent className="p-0 flex gap-3 sm:gap-4 items-center">
                    <img
                      src={stat.icon || '/placeholder.svg'}
                      alt={stat.label}
                      className="w-10 sm:w-12 h-10 sm:h-12 object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {stat.value}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
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