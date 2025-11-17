"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight, staggerContainer, fadeIn } from "@/lib/animations"
import { Link } from "react-router-dom"
import { Heart, Users, Award, Globe, Handshake, Target, CheckCircle2 } from 'lucide-react'

const WhyPartnerPage: React.FC = () => {
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Personal Connection",
            description: "We've walked in your shoes. As former international students ourselves, we understand the challenges, uncertainties, and dreams that come with studying abroad.",
            gradient: "from-rose-100 to-pink-100"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "New Zealand Expertise",
            description: "As a proudly New Zealand owned and operated consultancy, we offer insider knowledge and authentic guidance that only locals can provide.",
            gradient: "from-blue-100 to-indigo-100"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Proven Track Record",
            description: "Years of successful student placements and countless success stories demonstrate our commitment to your academic and professional goals.",
            gradient: "from-emerald-100 to-teal-100"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Holistic Support",
            description: "From academic guidance to personal adaptation, we support every aspect of your journey to help you truly thrive in your new home.",
            gradient: "from-orange-100 to-amber-100"
        },
        {
            icon: <Handshake className="w-8 h-8" />,
            title: "Trusted Partnership",
            description: "You're not just a client; you're part of our community. We build lasting relationships based on trust, transparency, and genuine care.",
            gradient: "from-purple-100 to-pink-100"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Success-Focused",
            description: "Your success is our mission. We're dedicated to helping you achieve your goals academically, personally, and professionally.",
            gradient: "from-cyan-100 to-blue-100"
        }
    ]

    const benefits = [
        "Personalized guidance tailored to your unique journey",
        "Insider knowledge of New Zealand education system",
        "Support with adaptation and cultural integration",
        "Mentorship from those who've lived the experience",
        "End-to-end assistance from application to settlement",
        "Building a trusted path for long-term success"
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-lime-600 opacity-90" />
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}

                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl mb-6">
                            Why Partner with AGI Gateway?
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">
                            More than consultants — we're your mentors, guides, and partners in your educational journey
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Story Section */}
            <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                        <motion.div
                            className="w-full lg:w-2/5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInLeft}
                        >
                            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                                <img
                                    src="/images/IMG_8351.jpg"
                                    alt="AGI Gateway team - Your trusted partners in education"
                                    className="w-full h-auto rounded-2xl object-cover shadow-xl"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex w-full flex-col gap-6 lg:w-3/5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight}
                        >
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                                    We've Walked Your Path
                                </h2>
                                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                    <p>
                                        AGI Gateway isn't just another education consultancy. It's a bridge built by people who've walked
                                        the same path. We're proudly New Zealand owned and operated, shaped by real experiences.
                                    </p>
                                    <p>
                                        We are dedicated to helping people who arrive in a new country, face uncertainty, learn to adapt, and
                                        ultimately call this place home. We understand the challenges because we've faced them ourselves.
                                    </p>
                                    <p className="font-medium text-foreground">
                                        With AGI Gateway, you're not just choosing a consultancy. You're choosing mentors who have lived your
                                        dream, faced the same challenges, and built a trusted path for your success — whether it is academically,
                                        personally, or professionally.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <Button
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        <Link to="/assessment">Get Your Free Assessment</Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary text-primary hover:bg-primary/10"
                                    >
                                        <Link to="/contacts">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="w-full bg-muted py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}

                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
                            What Makes Us Different
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our unique approach combines personal experience with professional expertise
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {values.map((value, index) => (
                            <motion.div key={index}
                                variants={fadeIn}

                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Card className={`h-full bg-gradient-to-br ${value.gradient} border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center text-primary">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}

                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
                            What You Get with AGI Gateway
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive support for every step of your journey
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}

                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-lg text-foreground">{benefit}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="w-full bg-gradient-to-br from-emerald-600 via-teal-600 to-lime-600 py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}

                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's work together to make your educational dreams a reality. Connect with mentors who truly understand your journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-emerald-600 hover:bg-gray-100"
                            >
                                <Link to="/assessment">Take Free Assessment</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10"
                            >
                                <Link to="/study-abroad/newzealand">Learn About New Zealand</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default WhyPartnerPage
