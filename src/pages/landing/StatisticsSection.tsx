"use client"

// @/components/StatisticsSection.tsx

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { slideInLeft, staggerContainer, staggerItem } from "@/lib/animations"

interface Statistic {
  id: string
  icon: string
  value: string
  label: string
}

const Counter: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString())

  // Extract numeric value from string
  const numericValue = Number.parseInt(value.replace(/,/g, ""))

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, numericValue, count])

  return (
    <motion.h3 ref={ref} className="text-xl sm:text-2xl font-bold text-foreground">
      {rounded}
    </motion.h3>
  )
}

const StatisticsSection: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: "1",
      icon: "/images/img_icon_teal_900_02.webp",
      value: "2,245,341",
      label: "Students",
    },
    {
      id: "2",
      icon: "/images/img_hand_icon.webp",
      value: "46,328",
      label: "Universities",
    },
    {
      id: "3",
      icon: "/images/img_icon_48x48.webp",
      value: "828,867",
      label: "Consult Bookings",
    },
    {
      id: "4",
      icon: "/images/img_icon_1.webp",
      value: "1,926,436",
      label: "Payments",
    },
  ]

  return (
    <section className="w-full bg-muted">
      {" "}
      {/* or use bg-[#F5F7FA] if not in theme */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-12 sm:py-16 lg:py-20">
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-start w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-foreground max-w-[66%]">
              <span className="text-foreground">Helping Students </span>
              <span className="text-primary">Across The World</span>
            </h2>
            <p className="text-sm sm:text-base font-normal text-muted-foreground mt-4">
              We reached here with our hard work and dedication
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            className="w-full lg:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {statistics.map((stat) => (
                <motion.div key={stat.id} variants={staggerItem}>
                  <Card className="bg-transparent border-none shadow-none hover:bg-background/50 transition-colors duration-200">
                    <CardContent className="p-0 flex gap-3 sm:gap-4 items-center">
                      <img
                        src={stat.icon || "/placeholder.svg"}
                        loading="lazy"
                        alt={stat.label}
                        className="w-10 sm:w-12 h-10 sm:h-12 object-contain flex-shrink-0"
                      />
                      <div className="flex flex-col gap-1">
                        <Counter value={stat.value} />
                        <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
