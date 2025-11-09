import type React from "react"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, slideInRight, staggerContainer, staggerItem } from "@/lib/animations"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 2

    // Auto-advance carousel every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    const leftUniversities = [
        { id: "01", name: "University of Auckland", location: "Auckland" },
        { id: "02", name: "Auckland University of Technology (AUT)", location: "Auckland" },
        { id: "03", name: "University of Waikato", location: "Hamilton" },
        { id: "04", name: "Massey University", location: "Palmerston North, Auckland" },
        { id: "05", name: "Victoria University of Wellington", location: "Wellington" },
        { id: "06", name: "University of Canterbury", location: "Christchurch" },
        { id: "07", name: "Lincoln University", location: "Christchurch" },
        { id: "08", name: "University of Otago", location: "Dunedin" },
    ]

    const rightInstitutes = [
        { id: "01", name: "Ara Institute of Canterbury", location: "Christchurch" },
        { id: "02", name: "Otago Polytechnic", location: "Dunedin & Central Otago" },
        { id: "03", name: "Southern Institute of Technology (SIT)", location: "Christchurch" },
        { id: "04", name: "Manukau Institute of Technology (MIT)", location: "Auckland" },
        { id: "05", name: "Unitec Institute of Technology", location: "Auckland" },
    ]

    return (
        <section className="relative bg-secondary overflow-hidden">
            <AnimatePresence mode="wait">
                {currentSlide === 0 && (
                    <motion.div
                        key="slide1"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="pt-8 pb-0 sm:pt-10 sm:pb-0 lg:pt-6 lg:pb-0"
                    >
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
                                        src="/images/img_graduation_student.webp"
                                        alt="Smiling graduate in cap and gown holding diploma"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentSlide === 1 && (
                    <motion.div
                        key="slide2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full py-8 px-4 md:py-12 lg:py-16"
                    >
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                            <div className="hidden lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 lg:items-center">
                                {/* Left Universities List */}
                                <div className="space-y-4">
                                    {leftUniversities.map((uni) => (
                                        <div key={uni.id} className="flex items-center gap-3 bg-accent rounded-full px-4 py-3">
                                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                                {uni.id}
                                            </span>
                                            <div className="text-primary text-sm font-medium leading-tight">
                                                {uni.name} – {uni.location}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Center Map Image */}
                                <div className="flex justify-center">
                                    <img src="/images/img_nz_uni_map.png" alt="New Zealand Universities Map" className="w-full h-auto" />
                                </div>

                                {/* Right Institutes List */}
                                <div className="space-y-4">
                                    {rightInstitutes.map((institute) => (
                                        <div key={institute.id} className="flex items-center gap-3 bg-accent rounded-full px-4 py-3">
                                            <div className="text-primary text-sm font-medium leading-tight text-right flex-1">
                                                {institute.name} - {institute.location}
                                            </div>
                                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                                {institute.id}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:hidden flex justify-center">
                                <img src="/images/img_nz_uni_map.png" alt="New Zealand Universities Map" className="w-full max-w-5xl h-auto" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="bg-white/90 hover:bg-white border-primary/20 h-10 w-10 rounded-full"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5 text-primary" />
                </Button>

                {/* Slide Indicators */}
                <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="bg-white/90 hover:bg-white border-primary/20 h-10 w-10 rounded-full"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5 text-primary" />
                </Button>
            </div>
        </section>
    )
}

export default HeroCarousel
