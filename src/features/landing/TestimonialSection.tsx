import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonialLogos = [
    { id: '1', src: '/images/img_logo.svg', bgColor: 'bg-global-4' },
    { id: '2', src: '/images/img_logo_blue_gray_800_01.svg', bgColor: 'bg-global-6' },
    { id: '3', src: '/images/img_logo_gray_100.svg', bgColor: 'bg-gray-100' },
    { id: '4', src: '/images/img_logo_gray_100_48x48.svg', bgColor: 'bg-gray-100' },
    { id: '5', src: '/images/img_logo_48x48.svg', bgColor: 'bg-gray-100' },
    { id: '6', src: '/images/img_logo_1.svg', bgColor: 'bg-gray-100' }
  ];

  return (
    <section className="w-full bg-global-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 py-6 sm:py-8 lg:py-[32px]">
          {/* Testimonial Image */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start ml-0 lg:ml-[24px]">
            <img 
              src="/images/img_image_9.png" 
              alt="Testimonial person" 
              className="w-[280px] sm:w-[300px] lg:w-[326px] h-[280px] sm:h-[300px] lg:h-[326px] object-cover rounded-lg"
            />
          </div>
          
          {/* Testimonial Content */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px] w-full lg:w-[66%] text-center lg:text-left mr-0 lg:mr-[24px]">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              <p className="text-sm sm:text-base font-medium leading-6 text-global-4">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight text-global-1">
                  Tim Smith
                </h3>
                <p className="text-sm sm:text-base font-normal leading-5 text-global-5">
                  British Dragon Boat Racing Association
                </p>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center lg:justify-between items-center gap-4 lg:gap-0">
              <div className="flex justify-center lg:justify-between items-center gap-2 sm:gap-3 lg:gap-0 flex-wrap lg:flex-nowrap">
                {testimonialLogos.map((logo) => (
                  <div 
                    key={logo.id}
                    className={`${logo.bgColor} rounded-lg p-2 lg:p-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] flex items-center justify-center`}
                  >
                    <img 
                      src={logo.src} 
                      alt="Company logo"
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 py-2 lg:py-[8px]">
                <span className="text-lg sm:text-xl font-semibold leading-tight text-global-1">
                  Students Testimonials
                </span>
                <img 
                  src="/images/img_24_arrows_directions_right.svg" 
                  alt="Arrow right" 
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;