// src/features/about/AboutPage.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronRight } from 'lucide-react';

// If using Vite, replace next/image with regular img
const Img = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={src} alt={alt} className={className} {...props} />
);

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* ========== HERO SECTION ========== */}
            <section className="w-full py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-global-6 to-global-7 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-footer-1">
                            About AGI Gateway
                        </h1>
                        <p className="text-lg sm:text-xl text-footer-3 max-w-3xl">
                            Empowering students to achieve their global education dreams since 2015.
                        </p>
                        <Button size="lg" variant="primary" className="mt-6">
                            Book a Free Consultation
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="mt-12">
                        <Img
                            src="/images/about/hero-about-us.jpg"
                            alt="Team of AGI Gateway counselors smiling with students"
                            className="mx-auto rounded-xl shadow-lg max-w-4xl w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* ========== MISSION ========== */}
            <section className="w-full py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-global-7">Our Mission</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To provide personalized, ethical, and expert guidance to students seeking international education — helping them unlock their full potential and thrive globally.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                                <Img
                                    src="/images/about/mission.jpg"
                                    alt="Counselor guiding student with world map"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== VISION ========== */}
            <section className="w-full py-16 sm:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-global-7">Our Vision</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To be the most trusted global education partner — recognized for excellence, integrity, and life-changing student outcomes.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                                <Img
                                    src="/images/about/vision.jpg"
                                    alt="Students celebrating graduation abroad"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CORE VALUES ========== */}
            <section className="w-full py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-global-7">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "/images/icons/value-trust.svg",
                                title: "Trust",
                                description: "We build lasting relationships through honesty, transparency, and reliability."
                            },
                            {
                                icon: "/images/icons/value-excellence.svg",
                                title: "Excellence",
                                description: "We deliver world-class service with attention to detail and continuous improvement."
                            },
                            {
                                icon: "/images/icons/value-empowerment.svg",
                                title: "Empowerment",
                                description: "We equip students with knowledge, confidence, and tools to make informed decisions."
                            }
                        ].map((item, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4">
                                        <Img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-global-7">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== OUR JOURNEY (Timeline) ========== */}
            <section className="w-full py-16 sm:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-global-7">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-global-2 transform -translate-x-1/2 hidden md:block"></div>
                        <div className="space-y-12">
                            {[
                                {
                                    year: "2015",
                                    title: "Founded in Dhaka",
                                    description: "Started with a vision to help Bangladeshi students access global education."
                                },
                                {
                                    year: "2017",
                                    title: "500+ Students Placed",
                                    description: "Expanded services to include visa guidance and scholarship support."
                                },
                                {
                                    year: "2020",
                                    title: "Global Partnerships",
                                    description: "Signed MOUs with 50+ universities across USA, UK, Canada, and Australia."
                                },
                                {
                                    year: "2023",
                                    title: "Launched Self-Assessment Tool",
                                    description: "Digital platform to help students evaluate best-fit universities."
                                },
                                {
                                    year: "2025",
                                    title: "Serving 5,000+ Students",
                                    description: "Celebrating a decade of transforming education journeys."
                                }
                            ].map((event, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                        } gap-6 md:gap-12`}
                                >
                                    <div className="w-full md:w-1/2 text-center md:text-right order-2 md:order-1">
                                        <div className="inline-block bg-global-2 text-white px-4 py-2 rounded-full text-sm font-medium">
                                            {event.year}
                                        </div>
                                        <h3 className="text-xl font-semibold mt-3 text-global-7">{event.title}</h3>
                                        <p className="text-muted-foreground mt-2">{event.description}</p>
                                    </div>
                                    <div className="hidden md:block w-8 h-8 rounded-full bg-global-2 border-4 border-background transform -translate-x-1/2"></div>
                                    <div className="w-full md:w-1/2 order-1 md:order-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TEAM ========== */}
            <section className="w-full py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-global-7">Meet Our Expert Team</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Certified counselors with decades of combined experience in global education.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Ayesha Rahman",
                                role: "Founder & CEO",
                                bio: "PhD in Education Policy, 15+ years in international student advising.",
                                image: "/images/team/ayesha.jpg",
                                linkedin: "https://linkedin.com/in/ayesha"
                            },
                            {
                                name: "Rahim Khan",
                                role: "Head of Admissions",
                                bio: "Former admissions officer at University of Toronto.",
                                image: "/images/team/rahim.jpg",
                                linkedin: "https://linkedin.com/in/rahim"
                            },
                            {
                                name: "Tasnim Ahmed",
                                role: "Visa & Compliance Lead",
                                bio: "Immigration law specialist with 10+ years of experience.",
                                image: "/images/team/tasnim.jpg",
                                linkedin: "https://linkedin.com/in/tasnim"
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative inline-block mb-4">
                                    <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h3 className="text-xl font-semibold text-global-7">{member.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline text-sm font-medium"
                                >
                                    View LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== STATS ========== */}
            <section className="w-full py-16 sm:py-24 bg-global-6 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-footer-1">By The Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "5,000+", label: "Students Guided" },
                            { value: "50+", label: "Global University Partners" },
                            { value: "98%", label: "Visa Success Rate" },
                            { value: "10", label: "Years of Excellence" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base text-footer-3">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section className="w-full py-16 sm:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-global-7">What Our Students Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                quote: "AGI Gateway made my dream of studying in Canada a reality. Their team was with me every step of the way!",
                                author: "Fahim Uddin, University of British Columbia",
                                image: "/images/testimonials/fahim.jpg"
                            },
                            {
                                quote: "I got a full scholarship thanks to their guidance. Forever grateful!",
                                author: "Tasnia Akter, University of Melbourne",
                                image: "/images/testimonials/tasnia.jpg"
                            }
                        ].map((testimonial, index) => (
                            <Card key={index} className="border-none shadow-lg p-6">
                                <blockquote className="text-lg italic text-muted-foreground mb-4">“{testimonial.quote}”</blockquote>
                                <div className="flex items-center">
                                    <Avatar className="w-12 h-12 mr-4">
                                        <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium text-global-7">{testimonial.author}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="w-full py-16 sm:py-24 bg-global-7 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Book a free 30-minute consultation with our certified counselors.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="primary">
                            Book Free Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-global-7">
                            Explore Services
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;