"use client"

import React from "react"
import type { ReactElement } from "react"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface University {
  id: string
  logo: string
  name: string
  website: string
  category: "universities" | "polytechnics" | "all"
}

interface UniversityLogoProps {
  university: University
}

const UniversityLogo: React.FC<UniversityLogoProps> = ({ university }) => {
  return (
    <Card className="flex justify-center items-center p-6 h-32 hover:shadow-lg transition-shadow duration-300 bg-white">
      <img
        src={university.logo || "/placeholder.svg"}
        alt={university.name}
        className="w-full max-w-xs h-auto max-h-20 object-contain"
        loading="lazy"
      />
    </Card>
  )
}

const UniversityPartnersSection: React.FC = (): ReactElement => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [isHovering, setIsHovering] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("all")

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
      logo: "/images/img_ara.webp",
      name: "Ara Institute",
      website: "https://www.ara.ac.nz",
      category: "polytechnics",
    },
    // {
    //   id: "2",
    //   logo: "/images/img_mask_group.webp",
    //   name: "University of Canterbury",
    //   website: "https://www.canterbury.ac.nz",
    //   category: "universities",
    // },
    {
       id: "3",
     logo: "/images/img_lincoln_logo.webp",
      name: "Lincoln University",
       website: "https://www.lincoln.ac.nz",
      category: "universities",
     },
    // {
    //   id: "4",
    //   logo: "/images/img_university_of_a.webp",
    //   name: "University of Auckland",
    //   website: "https://www.auckland.ac.nz",
    //   category: "universities",
    // },
    // {
    //   id: "5",
    //   logo: "/images/img_images_1_1.webp",
    //   name: "Massey University",
    //   website: "https://www.massey.ac.nz",
    //   category: "universities",
    // },
    // {
    //   id: "6",
    //   logo: "/images/img_shield_1.webp",
    //   name: "Victoria University of Wellington",
    //   website: "https://www.wgtn.ac.nz",
    //   category: "universities",
    // },
    // {
    //   id: "7",
    //   logo: "/images/EIT.webp",
    //   name: "Eastern Institute of Technology (EIT)",
    //   website: "https://www.eit.ac.nz",
    //   category: "polytechnics",
    // },
    // {
    //   id: "8",
    //   logo: "/images/MIT.webp",
    //   name: "Manukau Institute of Technology (MIT)",
    //   website: "https://www.manukau.ac.nz",
    //   category: "polytechnics",
    // },
    // {
    //   id: "9",
    //   logo: "/images/otago-poly.webp",
    //   name: "Otago Polytechnic",
    //   website: "https://www.op.ac.nz",
    //   category: "polytechnics",
    // },
    // {
    //   id: "10",
    //   logo: "/images/SIT.webp",
    //   name: "Southern Institute of Technology",
    //   website: "https://www.sit.ac.nz",
    //   category: "polytechnics",
    // },
    // {
    //   id: "11",
    //   logo: "/images/wit.webp",
    //   name: "Waikato Institute of Technology (Wintec)",
    //   website: "https://www.wintec.ac.nz/",
    //   category: "polytechnics",
    // },
    // {
    //   id: "12",
    //   logo: "/images/WTT.webp",
    //   name: "Western Institute of Technology at Taranaki (WITT)",
    //   website: "https://www.witt.ac.nz",
    //   category: "polytechnics",
    // },
  ]

  const filteredUniversities =
    activeTab === "all" ? universities : universities.filter((uni) => uni.category === activeTab)

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 lg:py-16" aria-labelledby="university-partners-heading">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 mb-4"
          >
            Our Distinguished  <span className="text-white bg-green-900 px-2"> Intitutional Network</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Gain experience in your industry, make contacts, and be work-ready after graduation
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all" className="text-sm sm:text-base">
                All Institutions
              </TabsTrigger>
              {/* <TabsTrigger value="universities" className="text-sm sm:text-base">
                Universities
              </TabsTrigger> */}
              <TabsTrigger value="polytechnics" className="text-sm sm:text-base">
                Polytechnics
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
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
                  {filteredUniversities.map((university) => (
                    <CarouselItem key={university.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`Visit ${university.name} website`}
                      >
                        <UniversityLogo university={university} />
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.p
          className="text-sm sm:text-base text-gray-600 text-center mt-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Discover classroom, online, and on-job learning options across network of Institutes of Technology,
          Polytechnics and Industry Training Organizations. They have courses and programs that gives learners more
          choices and flexibility in what, where, and how they learn. You may be able to apply for a visa to work for up
          to three years in New Zealand after you graduate, depending on what you study and where you study.
        </motion.p>
      </div>
    </section>
  )
}

export default UniversityPartnersSection
