"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Eye, Users, BookOpen, Globe } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AboutUsPage: React.FC = () => {
    const navigate = useNavigate()

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    }

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <div className="w-full bg-background min-h-screen">
            {/* Hero Section */}
            <section
                className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/agi-gateway-story-bg.jpg')`, // ✅ Ensure this image exists
                }}
            >
                {/* Optional: Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-indigo-900/40"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                            The AGI Gateway Story
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                            Born and built in the Garden City of Christchurch, New Zealand
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Story</h2>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                            <p>
                                AGI Gateway was founded with a clear purpose and a deep passion — to guide students from across the
                                globe towards a future defined by knowledge, confidence, and success.
                            </p>
                            <p>
                                Our journey began with a simple story: our founder was once an international student who faced the same
                                hopes and challenges that many students experience today. That personal journey inspired the creation of
                                AGI Gateway — a consultancy built on authenticity, care, and a genuine understanding of what it takes to
                                start fresh in a new country.
                            </p>
                            <p>
                                Today, we proudly connect students from Bangladesh, the Middle East, and beyond to New Zealand's
                                world-class education providers. With a strong local presence and direct partnerships with trusted
                                universities and institutions, we help every student find the right path — one that's transparent,
                                trusted, and tailored to their future.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-8 h-8 text-red-500" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose AGI Gateway</h2>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                            <p className="text-xl font-semibold text-foreground">
                                We're more than education consultants — we're mentors, dream-builders, and passionate believers in the
                                power of learning.
                            </p>
                            <p>
                                Our approach is personal, transparent, and deeply human. We don't just help you apply; we help you
                                belong. From your first consultation to your first day in New Zealand, we walk beside you every step of
                                the way — offering honest advice, local guidance, and lifelong support.
                            </p>
                            <p className="text-xl font-semibold text-foreground italic">
                                Because your dreams deserve more than promises — they deserve a partner who truly cares.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                            {/* Mission Card */}
                            <motion.div variants={fadeInUp}>
                                <Card className="h-full border-2 hover:shadow-lg transition-shadow">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Target className="w-10 h-10 text-blue-600" />
                                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Our Mission</h3>
                                        </div>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            To empower and walk beside every student on their journey — offering genuine, transparent, and
                                            compassionate guidance that helps them adapt with confidence, unlock their potential, and thrive
                                            within New Zealand's world-class education system and beyond.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div variants={fadeInUp}>
                                <Card className="h-full border-2 hover:shadow-lg transition-shadow">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Eye className="w-10 h-10 text-indigo-600" />
                                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Our Vision</h3>
                                        </div>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            To be New Zealand's most trusted and student-centred education consultancy — connecting bright
                                            minds to world-class learning and shaping the global leaders and entrepreneurs of tomorrow.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {[
                            {
                                icon: Users,
                                title: "Student-Centred",
                                description: "Your dreams and goals are at the heart of everything we do",
                            },
                            {
                                icon: Heart,
                                title: "Authentic Care",
                                description: "We genuinely care about your success and wellbeing",
                            },
                            {
                                icon: Globe,
                                title: "Local Expertise",
                                description: "Deep knowledge of New Zealand's education landscape",
                            },
                        ].map((value, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 text-center">
                                        <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Let's work together to turn your educational dreams into reality. Get in touch with our team today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" onClick={() => navigate("/contacts")} className="text-base">
                                Contact Us
                            </Button>
                            <Button size="lg" variant="outline" onClick={() => navigate("/assessment")} className="text-base">
                                Free Assessment
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage
