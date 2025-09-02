import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import UniversityPartnersSection from './UniversityPartnersSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import StatisticsSection from './StatisticsSection';
import SelfAssessmentSection from './SelfAssessmentSection';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-global-7">
      <Header />
      
      <main className="flex flex-col gap-12 sm:gap-16 lg:gap-[66px]">
        <HeroSection />
        <ServicesSection />
        <UniversityPartnersSection />
        <WhyChooseUsSection />
        <StatisticsSection />
        <SelfAssessmentSection />
        <TestimonialSection />
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;