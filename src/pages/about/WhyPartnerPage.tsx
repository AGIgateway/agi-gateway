import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight, staggerContainer, fadeIn, fadeInUp, staggerItem } from "@/lib/animations"
import { Link } from "react-router-dom"
import { Heart, Users, Award, Globe, Handshake, Target, CheckCircle2 } from 'lucide-react'

const WhyPartnerPage: React.FC = () => {
    const values = [
        {
            icon: Heart,
            title: "Personal Connection",
            description: "We've walked in your shoes. As former international students ourselves, we understand the challenges, uncertainties, and dreams that come with studying abroad.",
            gradient: "from-rose-100 to-pink-100",
            iconBg: "from-rose-100 to-pink-100",
            color: "text-rose-600"
        },
        {
            icon: Users,
            title: "New Zealand Expertise",
            description: "As a proudly New Zealand owned and operated consultancy, we offer insider knowledge and authentic guidance that only locals can provide.",
            gradient: "from-blue-50 to-indigo-50",
            iconBg: "from-blue-100 to-indigo-100",
            color: "text-blue-600"
        },
        {
            icon: Award,
            title: "Proven Track Record",
            description: "Years of successful student placements and countless success stories demonstrate our commitment to your academic and professional goals.",
            gradient: "from-emerald-50 to-teal-50",
            iconBg: "from-emerald-100 to-teal-100",
            color: "text-emerald-600"
        },
        {
            icon: Globe,
            title: "Holistic Support",
            description: "From academic guidance to personal adaptation, we support every aspect of your journey to help you truly thrive in your new home.",
            gradient: "from-orange-50 to-amber-50",
            iconBg: "from-orange-100 to-amber-100",
            color: "text-orange-600"
        },
        {
            icon: Handshake,
            title: "Trusted Partnership",
            description: "You're not just a client; you're part of our community. We build lasting relationships based on trust, transparency, and genuine care.",
            gradient: "from-purple-50 to-pink-50",
            iconBg: "from-purple-100 to-pink-100",
            color: "text-purple-600"
        },
        {
            icon: Target,
            title: "Success-Focused",
            description: "Your success is our mission. We're dedicated to helping you achieve your goals academically, personally, and professionally.",
            gradient: "from-cyan-50 to-blue-50",
            iconBg: "from-cyan-100 to-blue-100",
            color: "text-cyan-600"
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
                <div className="absolute inset-0 bg-primary opacity-90" />
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
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

            {/* Why Choose New Zealand Section */}
            <section className="section-spacing bg-background">
                <div className="container-padding max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                What Makes Us Different
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Our unique approach combines personal experience with professional expertise
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <motion.div key={index} variants={staggerItem}>
                                        <Card
                                            className={`h-full bg-gradient-to-br ${value.gradient} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1`}
                                        >
                                            <CardHeader>
                                                <div
                                                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.iconBg} flex items-center justify-center mb-4 shadow-sm`}
                                                >
                                                    <Icon className={`h-6 w-6 ${value.color}`} />
                                                </div>
                                                <CardTitle className="text-xl font-bold text-foreground">{value.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>


                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
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
                                className="border-white text-white hover:bg-white/10 bg-transparent"
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
