"use client"

// @/landing/SelfAssessmentSection.tsx

import type React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight } from "@/lib/animations"

type SelfAssessmentSectionProps = {}

const SelfAssessmentSection: React.FC<SelfAssessmentSectionProps> = () => {
  const navigate = useNavigate()

  const handleAssessmentClick = () => {
    navigate("/assessment")
  }

  return (
    <section
      className="w-full bg-muted py-16 sm:py-20 lg:py-24"
      aria-labelledby="self-assessment-heading"
      role="region"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-16 lg:items-center">
          <motion.div
            className="w-full max-w-lg lg:max-w-md lg:w-2/5 flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="images/img_self_assessment.jpeg"
              alt="Person working on digital assessment with checkboxes"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="w-full lg:w-3/5"
          >
            <Card className="w-full bg-transparent border-none shadow-none">
              <CardContent className="flex flex-col gap-6 text-center lg:text-left p-0">
                <div className="flex flex-col gap-4">
                  <h2
                    id="self-assessment-heading"
                    className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
                  >
                    Self Assessment
                  </h2>
                  <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                    Every great journey begins with understanding where you stand today. Our self-assessment form helps
                    us learn more about your goals, academic background, and study preferences, so we can guide you
                    towards the best pathway for your future. Take a few minutes to complete the form, and our team will
                    personally review your details and get in touch with tailored advice to help you take the next step
                    towards studying in New Zealand. Your dream deserves the right direction. Let’s start your journey
                    together.
                  </p>
                </div>
                <Button
                  asChild
                  className="min-w-28 w-full rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 
             sm:px-8 sm:py-3.5 sm:text-base
             lg:w-64"
                >
                  <Link to="/assessment">Free Assessment</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SelfAssessmentSection
