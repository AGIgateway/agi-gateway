"use client"

// @/landing/ConsultationCtaSection.tsx
import type React from "react"
import { ConsultationForm } from "@/components/ui/ConsultationForm"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn } from "@/lib/animations"
import { Star, CheckCircle2, Clock, Shield } from "lucide-react"

interface ConsultationCtaSectionProps {
    title?: string
}

const ConsultationCtaSection: React.FC<ConsultationCtaSectionProps> = ({ title = "Book a Free Consultation" }) => {
    return (
        <section className="relative w-full bg-gradient-to-br from-emerald-950 via-lime-950 to-emerald-900 py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(167,243,208,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(217,249,157,0.15),transparent_50%)]" />

            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-400 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-24 h-24 border-2 border-lime-400 rounded-lg rotate-45"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [45, 225, 405],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-1/4 w-20 h-20 bg-emerald-400/30 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-1/3 w-28 h-28 bg-lime-400/30 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12">
                    <motion.div
                        className="text-center space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full">
                            <Star className="w-4 h-4 text-lime-300 fill-lime-300" />
                            <span className="text-sm font-semibold text-lime-200 uppercase tracking-wider">
                                100% Free Consultation
                            </span>
                            <Star className="w-4 h-4 text-lime-300 fill-lime-300" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white max-w-4xl">{title}</h2>

                        <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                            Take the first step towards your dream education. Our expert counselors are here to guide you every step
                            of the way.
                        </p>
                    </motion.div>

                    <motion.div
                        className="w-full max-w-3xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={scaleIn}
                    >
                        <div className="relative">
                            {/* Glow effect behind form */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-2xl blur-xl opacity-30" />

                            {/* Form container with glassmorphism */}
                            <div className="relative backdrop-blur-md rounded-2xl p-1">
                                <ConsultationForm />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                            <div className="p-3 bg-emerald-500/20 rounded-full">
                                <CheckCircle2 className="w-6 h-6 text-lime-300" />
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-white">Expert Guidance</p>
                                <p className="text-sm text-emerald-200">Certified counselors</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                            <div className="p-3 bg-lime-500/20 rounded-full">
                                <Clock className="w-6 h-6 text-lime-300" />
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-white">Quick Response</p>
                                <p className="text-sm text-emerald-200">Within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                            <div className="p-3 bg-emerald-500/20 rounded-full">
                                <Shield className="w-6 h-6 text-lime-300" />
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-white">100% Free Service</p>
                                <p className="text-sm text-emerald-200">No hidden charges</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ConsultationCtaSection
