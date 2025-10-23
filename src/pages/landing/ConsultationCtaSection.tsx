"use client"

// @/landing/ConsultationCtaSection.tsx
import type React from "react"
import { ConsultationForm } from "@/components/ui/ConsultationForm"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn } from "@/lib/animations"

interface ConsultationCtaSectionProps {
    title?: string
}

const ConsultationCtaSection: React.FC<ConsultationCtaSectionProps> = ({ title = "Book a Free Consultation" }) => {
    return (
        <section className="w-full bg-card py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
                    <motion.h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-center text-footer-1 max-w-4xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        {title}
                    </motion.h2>
                    <motion.div
                        className="w-full max-w-3xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={scaleIn}
                        transition={{ duration: 0.5, ease: "easeOut" }}

                    >
                        <ConsultationForm />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ConsultationCtaSection
