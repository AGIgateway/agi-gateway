"use client"

// @/landing/HeroSection.tsx
import type React from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { fadeInUp, slideInRight, staggerContainer, staggerItem } from "@/lib/animations"

const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 pb-0 sm:pt-10 sm:pb-0 lg:pt-6 lg:pb-0 bg-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="text-center lg:text-left">
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8"
                variants={staggerContainer}
              >
                {["ACHIEVE", "GROW", "INSPIRE"].map((text) => (
                  <motion.div key={text} variants={staggerItem}>
                    <Badge
                      variant="secondary"
                      className="bg-accent text-primary font-semibold hover:bg-accent/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                      {text}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary mb-8 sm:mb-12 lg:mb-16"
                variants={fadeInUp}
              >
                WE CONNECT BRILLIANT MINDS TO WORLD-CLASS EDUCATION
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            transition={{ duration: 0.7, ease: "easeOut" }}

          >
            <img
              className="w-full"
              src="/images/img_graduation_student.svg"
              alt="Smiling graduate in cap and gown holding diploma"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
