// @/landing/index.tsx
import type React from "react"
import { Suspense } from "react"
import HeroSection from "@/pages/landing/HeroSection"
import ServicesSection from "@/pages/landing/ServicesSection"
import UniversityPartnersSection from "@/pages/landing/UniversityPartnersSection"
import WhyChooseUsSection from "@/pages/landing/WhyChooseUsSection"
// import StatisticsSection from "./StatisticsSection"
import SelfAssessmentSection from "@/pages/landing/SelfAssessmentSection"
import TestimonialSection from "@/pages/landing/TestimonialSection"
import BlogSection from "@/pages/landing/BlogSection"
import ConsultationCtaSection from "@/pages/landing/ConsultationCtaSection"

// Section data for better organization and maintainability
const sections = [
  { id: "hero", Component: HeroSection, label: "Hero section" },
  { id: "services", Component: ServicesSection, label: "Services section" },
  { id: "why-choose-us", Component: WhyChooseUsSection, label: "Why choose us section" },
  { id: "university-partners", Component: UniversityPartnersSection, label: "University partners section" },
  // { id: "statistics", Component: StatisticsSection, label: "Statistics section" },
  { id: "self-assessment", Component: SelfAssessmentSection, label: "Self assessment section" },
  { id: "consult", Component: ConsultationCtaSection, label: "ConsultationCta section" },
  { id: "testimonials", Component: TestimonialSection, label: "Testimonials section" },
  // { id: "blog", Component: BlogSection, label: "Blog section" },
]

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col">
      <main className="flex flex-col gap-0 flex-1" aria-label="Main content">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          {sections.map(({ id, Component, label }, index) => (
            <section key={id} id={id} aria-label={label} className={index > 0 ? "mt-12 sm:mt-16 lg:mt-16" : ""}>
              <Component />
            </section>
          ))}
        </Suspense>
      </main>
    </div>
  )
}

export default HomePage
