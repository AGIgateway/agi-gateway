import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonialLogos = [
    { id: '1', src: '/images/img_logo.svg', bgColor: 'bg-global-4' },
    { id: '2', src: '/images/img_logo_blue_gray_800_01.svg', bgColor: 'bg-global-6' },
    { id: '3', src: '/images/img_logo_gray_100.svg', bgColor: 'bg-gray-100' },
    { id: '4', src: '/images/img_logo_gray_100_48x48.svg', bgColor: 'bg-gray-100' },
    { id: '5', src: '/images/img_logo_48x48.svg', bgColor: 'bg-gray-100' },
    { id: '6', src: '/images/img_logo_1.svg', bgColor: 'bg-gray-100' },
  ];

  return (
    <section className="w-full bg-global-5 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Testimonial Image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img
              src="/images/img_image_9.png"
              alt="Testimonial person"
              className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[326px] h-auto rounded-lg object-cover shadow-md"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full lg:w-2/3 text-center lg:text-left">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-global-4">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel
                rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus
                sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
                vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero
                condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>

              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-3">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight text-global-1">
                  Tim Smith
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-global-5">
                  British Dragon Boat Racing Association
                </p>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
              {/* Logo Grid */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
                {testimonialLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className={`${logo.bgColor} rounded-lg p-2 lg:p-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 flex items-center justify-center`}
                  >
                    <img
                      src={logo.src}
                      alt="Company logo"
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <span className="text-lg sm:text-xl font-semibold text-global-1">
                  Students Testimonials
                </span>
                <img
                  src="/images/img_24_arrows_directions_right.svg"
                  alt="Arrow right"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5"
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
