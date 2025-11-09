"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { BookOpen, FileText, GraduationCap, Plane, TrendingUp, FileCheck } from "lucide-react"

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  path: string
  color: string
  bgColor: string
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      icon: (
        <BookOpen className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Course Guidance",
      subtitle: "Finding Your Perfect Path",
      path: "/services/course-guidance",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      id: "2",
      icon: (
        <FileText className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Admission Support",
      subtitle: "Turning Your Application into a Story",
      path: "/services/admission-support",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
    },
    {
      id: "3",
      icon: (
        <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Test Preparation",
      subtitle: "Master English, Master Your Future",
      path: "/services/test-preparations",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
    },
    {
      id: "4",
      icon: (
        <FileCheck className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Visa Support",
      subtitle: "Simplifying the Toughest Steps",
      path: "/services/visa-support",
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
    },
    {
      id: "5",
      icon: (
        <Plane className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Post Departure Services",
      subtitle: "More Than Just a Visa",
      path: "/services/post-departure",
      color: "text-teal-600",
      bgColor: "bg-teal-50 hover:bg-teal-100",
    },
    {
      id: "6",
      icon: (
        <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Future Pathways",
      subtitle: "Building a Life, Not Just a degree",
      path: "/services/future-pathways",
      color: "text-rose-600",
      bgColor: "bg-rose-50 hover:bg-rose-100",
    },
  ]

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold leading-tight text-center text-foreground sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 px-4 sm:px-8 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <a href={service.path} className="block h-full group">
                  <Card
                    className={`flex flex-col justify-between h-full border-2 border-border shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer ${service.bgColor}`}
                  >
                    <CardHeader className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-4 px-8 sm:px-12 lg:px-14 pb-2">
                      <div className={`flex items-center justify-center ${service.color}`}>{service.icon}</div>
                      <CardTitle
                        className={`text-xl font-bold leading-tight text-center text-foreground transition-colors duration-300 sm:text-2xl lg:text-3xl group-hover:${service.color}`}
                      >
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-6 text-center">
                      <p className="text-sm font-bold leading-5 text-muted-foreground">{service.subtitle}</p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
