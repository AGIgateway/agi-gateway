import React from 'react';

interface University {
  id: string;
  logo: string;
  name: string;
  width: string;
  height: string;
}

const UniversityPartnersSection: React.FC = () => {
  const universities: University[] = [
    {
      id: '1',
      logo: '/images/img_mask_group.svg',
      name: 'University 1',
      width: 'w-[100px] sm:w-[120px] lg:w-[144px]',
      height: 'h-[35px] sm:h-[42px] lg:h-[50px]'
    },
    {
      id: '2',
      logo: '/images/img_lincoln_univers.png',
      name: 'Lincoln University',
      width: 'w-[90px] sm:w-[108px] lg:w-[126px]',
      height: 'h-[92px] sm:w-[110px] lg:h-[128px]'
    },
    {
      id: '3',
      logo: '/images/img_university_of_a.png',
      name: 'University of Auckland',
      width: 'w-[44px] sm:w-[53px] lg:w-[62px]',
      height: 'h-[53px] sm:h-[63px] lg:h-[74px]'
    },
    {
      id: '4',
      logo: '/images/img_images_1_1.png',
      name: 'University 4',
      width: 'w-[57px] sm:w-[68px] lg:w-[80px]',
      height: 'h-[57px] sm:h-[68px] lg:h-[80px]'
    },
    {
      id: '5',
      logo: '/images/img_shield_1.png',
      name: 'University 5',
      width: 'w-[93px] sm:w-[111px] lg:w-[130px]',
      height: 'h-[40px] sm:h-[48px] lg:h-[56px]'
    },
    {
      id: '6',
      logo: '/images/img_untitled_3_1.png',
      name: 'University 6',
      width: 'w-[93px] sm:w-[111px] lg:w-[130px]',
      height: 'h-[93px] sm:w-[111px] lg:h-[130px]'
    }
  ];

  return (
    <section className="w-full bg-global-7">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px]">
          {/* Section Header */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center px-4 sm:px-8 lg:px-[165px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight text-center text-global-3">
              Our University Partners
            </h2>
            <p className="text-sm sm:text-base font-normal leading-5 text-center text-global-4">
              We have been working with New Zealands Top Universities
            </p>
          </div>
          
          {/* University Logos Grid */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 sm:gap-8 lg:gap-0 py-6 sm:py-8 lg:py-[32px] px-4 sm:px-8 lg:px-[135px] max-w-[1170px] mx-auto">
            {universities.map((university) => (
              <div key={university.id} className="flex justify-center items-center">
                <img 
                  src={university.logo} 
                  alt={university.name}
                  className={`${university.width} ${university.height} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartnersSection;