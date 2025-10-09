// @/landing/ConsultationCtaSection.tsx
import type React from "react"
import { ConsultationForm } from "@/components/ui/ConsultationForm" // ✅ Adjust path if needed

interface ConsultationCtaSectionProps {
    title?: string
}

const ConsultationCtaSection: React.FC<ConsultationCtaSectionProps> = ({ title = "Book a Free Consultation" }) => {
    return (
        <section className="w-full bg-card py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-center text-footer-1 max-w-4xl">
                        {title}
                    </h2>
                    <div className="w-full max-w-3xl">
                        <ConsultationForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultationCtaSection
