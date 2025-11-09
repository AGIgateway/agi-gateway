"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Globe, Shield, Heart, ChevronRight, ExternalLink } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useNavigate, Link } from "react-router-dom"

const StudyInNewZealandPage: React.FC = () => {
    const navigate = useNavigate()

    const handleContactClick = () => {
        navigate("/contacts")
    }

    const benefits = [
        {
            icon: GraduationCap,
            title: "Global Recognition",
            description:
                "New Zealand qualifications are part of the New Zealand Qualifications Framework (NZQF) — ensuring quality, consistency, and global recognition. All universities and institutes deliver education that blends theory with practical, real-world learning.",
            color: "text-emerald-600",
            bgGradient: "from-emerald-50 to-teal-50",
            iconBg: "from-emerald-100 to-teal-100",
        },
        {
            icon: Briefcase,
            title: "Work While You Study",
            description:
                "From 3 November 2025, eligible full-time international students (NZQF Level 4 and above) can work up to 25 hours per week during term time and full-time in holidays. Gain valuable New Zealand experience while supporting your living costs.",
            source: "Immigration New Zealand – Student Visa Work Rights",
            sourceUrl: "https://www.immigration.govt.nz/study/once-you-have-a-student-visa/working-on-a-student-visa/",
            color: "text-blue-600",
            bgGradient: "from-blue-50 to-indigo-50",
            iconBg: "from-blue-100 to-indigo-100",
        },
        {
            icon: Globe,
            title: "Post-Study Opportunities",
            description:
                "Graduates completing approved courses may qualify for a Post-Study Work Visa, allowing them to work in New Zealand and explore skilled employment or migration pathways.",
            source: "Immigration New Zealand – Post-Study Work Visa",
            sourceUrl: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/post-study-work-visa",
            color: "text-purple-600",
            bgGradient: "from-purple-50 to-pink-50",
            iconBg: "from-purple-100 to-pink-100",
        },
        {
            icon: Shield,
            title: "Safe, Diverse, and Welcoming",
            description:
                "Ranked among the world's safest nations, New Zealand offers a multicultural community that celebrates inclusiveness and care. International students enjoy high living standards, personal freedom, and strong protection under NZ's Code of Practice for the Pastoral Care of International Students.",
            color: "text-orange-600",
            bgGradient: "from-orange-50 to-amber-50",
            iconBg: "from-orange-100 to-amber-100",
        },
        {
            icon: Heart,
            title: "A Lifestyle You'll Love",
            description:
                "From modern campuses and innovative cities to stunning outdoor adventures — New Zealand offers the perfect balance between academic excellence and personal growth.",
            color: "text-rose-600",
            bgGradient: "from-rose-50 to-pink-50",
            iconBg: "from-rose-100 to-pink-100",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="section-spacing relative text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/img_4.jpg" alt="New Zealand Landscape" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-gray-900/50"></div>
                </div>

                <div className="container-padding max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col items-center text-center space-y-6"
                    >
                        <motion.div variants={fadeInUp}>
                            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-4">Study Abroad</Badge>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
                        >
                            Study in New Zealand with AGI Gateway
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-white/90 max-w-3xl leading-relaxed">
                            Unlock World-Class Education, Real-World Skills & a Bright Future
                        </motion.p>

                        <motion.p variants={fadeInUp} className="text-lg text-white/80 max-w-3xl leading-relaxed">
                            New Zealand is one of the most trusted education destinations in the world. New Zealand offers globally
                            recognised qualifications, strong work rights, and a lifestyle that balances study and well-being. At AGI
                            Gateway, we make your dream of studying in New Zealand simple, transparent, and successful.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 shadow-lg">
                                <Link to="/#consult">Book Free Consultation</Link>
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                                Download Guide
                            </Button>
                        </motion.div>
                    </motion.div>
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
                                Why Choose New Zealand
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Discover the advantages that make New Zealand a top destination for international students
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <motion.div key={index} variants={staggerItem}>
                                        <Card
                                            className={`h-full bg-gradient-to-br ${benefit.bgGradient} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1`}
                                        >
                                            <CardHeader>
                                                <div
                                                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center mb-4 shadow-sm`}
                                                >
                                                    <Icon className={`h-6 w-6 ${benefit.color}`} />
                                                </div>
                                                <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                                {benefit.source && (
                                                    <a
                                                        href={benefit.sourceUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 font-medium group"
                                                    >
                                                        <span className="border-b border-emerald-300 group-hover:border-emerald-600 transition-colors">
                                                            Source: {benefit.source}
                                                        </span>
                                                        <ExternalLink className="ml-1 h-3 w-3" />
                                                    </a>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="section-spacing bg-gradient-to-br from-emerald-50 to-lime-50">
                <div className="container-padding max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
                            New Zealand by the Numbers
                        </motion.h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: "8", label: "World-Class Universities", suffix: "" },
                                { value: "98", label: "Visa Success Rate", suffix: "%" },
                                { value: "25", label: "Work Hours/Week", suffix: "hrs" },
                                { value: "3", label: "Year Post-Study Work Visa", suffix: "yr" },
                            ].map((stat, index) => (
                                <motion.div key={index} variants={staggerItem}>
                                    <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">
                                        {stat.value}
                                        {stat.suffix}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-spacing bg-gradient-to-br from-lime-950 to-emerald-700 text-white">
                <div className="container-padding max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to Start Your New Zealand Journey?</h2>
                        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Book a free consultation with our certified education counselors and take the first step toward your dream
                            education in New Zealand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 shadow-lg">
                                <Link to="/#consult">Book Free Consultation</Link>
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                onClick={handleContactClick}
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 bg-transparent"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default StudyInNewZealandPage
