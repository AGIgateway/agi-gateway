"use client"

import React from "react"
import type { ReactElement } from "react"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface University {
  id: string
  logo: string
  name: string
  website: string
}

interface UniversityLogoProps {
  university: University
}

const UniversityLogo: React.FC<UniversityLogoProps> = ({ university }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={university.logo || "/placeholder.svg"}
        alt={university.name}
        className="w-full max-w-xs h-auto max-h-20 object-contain"
        loading="lazy"
      />
    </div>
  )
}

const UniversityPartnersSection: React.FC = (): ReactElement => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (!isHovering) {
        api.scrollNext()
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [api, isHovering])

  const universities: University[] = [
    {
      id: "1",
      logo: "/images/img_ara.svg",
      name: "Ara Institute",
      website: "https://www.ara.ac.nz",
    },
    {
      id: "2",
      logo: "/images/img_mask_group.svg",
      name: "University of Canterbury",
      website: "https://www.canterbury.ac.nz",
    },
    {
      id: "3",
      logo: "/images/img_lincoln_logo.svg",
      name: "Lincoln University",
      website: "https://www.lincoln.ac.nz",
    },
    {
      id: "4",
      logo: "/images/img_university_of_a.png",
      name: "University of Auckland",
      website: "https://www.auckland.ac.nz",
    },
    {
      id: "5",
      logo: "/images/img_images_1_1.png",
      name: "Massey University",
      website: "https://www.massey.ac.nz",
    },
    {
      id: "6",
      logo: "/images/img_shield_1.png",
      name: "Victoria University of Wellington",
      website: "https://www.wgtn.ac.nz",
    },
  ]

  return (
    <section className="w-full bg-card py-8 sm:py-12 lg:py-16" aria-labelledby="university-partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            id="university-partners-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-4"
          >
            University Partners
          </h2>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            We are working with New Zealand's top universities
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
            className="w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {universities.map((university) => (
                <CarouselItem key={university.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-1 flex justify-center items-center h-full hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${university.name} website`}
                  >
                    <UniversityLogo university={university} />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

export default UniversityPartnersSection
