import React from 'react';

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
        src={university.logo}
        alt={university.name}
        className="w-full max-w-xs h-auto max-h-20 object-contain filter grayscale hover:grayscale-0 transition ease-in-out duration-300"
        loading="lazy"
      />
    </div>
  );
};

const UniversityPartnersSection: React.FC = () => {
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
            We are working with New Zealand’s top universities
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center"
          role="list"
          aria-label="List of university partners"
        >
          {universities.map((university) => (
            <div key={university.id} role="listitem" className="flex justify-center">
              <UniversityLogo university={university} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityPartnersSection;