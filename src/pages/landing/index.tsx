"use client"

// @/landing/index.tsx
import type React from "react"
import { Suspense, useEffect } from "react"
import { useLocation } from "react-router-dom"
import HeroCarousel from "@/pages/landing/HeroCarousel"
import ServicesSection from "@/pages/landing/ServicesSection"
import UniversityPartnersSection from "@/pages/landing/UniversityPartnersSection"
import WhyChooseUsSection from "@/pages/landing/WhyChooseUsSection"
// import StatisticsSection from "./StatisticsSection"
import SelfAssessmentSection from "@/pages/landing/SelfAssessmentSection"
import TestimonialSection from "@/pages/landing/TestimonialSection"
import ConsultationCtaSection from "@/pages/landing/ConsultationCtaSection"

// Section data for better organization and maintainability
const sections = [
  { id: "hero", Component: HeroCarousel, label: "Hero section" },
  { id: "services", Component: ServicesSection, label: "Services section" },
  { id: "why-choose-us", Component: WhyChooseUsSection, label: "Why choose us section" },
  { id: "university-partners", Component: UniversityPartnersSection, label: "University partners section" },
  // { id: "statistics", Component: StatisticsSection, label: "Statistics section" },
  { id: "self-assessment", Component: SelfAssessmentSection, label: "Self assessment section" },
  { id: "testimonials", Component: TestimonialSection, label: "Testimonials section" },
  { id: "consult", Component: ConsultationCtaSection, label: "ConsultationCta section" },
  // { id: "blog", Component: BlogSection, label: "Blog section" },
]

const HomePage: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    // Check if URL has a hash (e.g., /#consult)
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Scroll after a tiny delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [location])

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
