"use client"

import type React from "react"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight } from "@/lib/animations"

const TestimonialSection: React.FC = () => {
  const testimonialLogos = [
    { id: "1", src: "/images/img_logo.webp", bgColor: "bg-accent" },
    { id: "2", src: "/images/img_logo_blue_gray_800_01.webp", bgColor: "bg-background" },
    { id: "3", src: "/images/img_logo_gray_100.webp", bgColor: "bg-muted" },
    { id: "4", src: "/images/img_logo_gray_100_48x48.webp", bgColor: "bg-muted" },
    { id: "5", src: "/images/img_logo_48x48.webp", bgColor: "bg-muted" },
    { id: "6", src: "/images/img_logo_1.webp", bgColor: "bg-muted" },
  ]

  return (
    <section className="w-full bg-secondary py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ">
          {/* Testimonial Image */}
          <motion.div
            className="flex justify-center lg:justify-start w-full lg:w-auto "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <img
              src="/images/img_graduations.webp"
              alt="Testimonial person"
              className="w-full h-[525px] object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Testimonial Content */}
          <motion.div
            className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full lg:w-2/3 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
              <h2
                id="testimonial-heading"
                className="text-xl font-semibold leading-tight text-foreground sm:text-2xl lg:text-3xl"
              >
                Their Journey. Their Words. Their Success.
              </h2>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                Every student has a story, a dream that began with a single question: “Can I really study abroad?”
                <p>
                  At AGI Gateway, we’ve guided countless students who turned that question into confidence. From their
                  first consultation to the moment they arrive in New Zealand, our students become part of our story.
                </p>
                <p>
                  Each testimonial is more than a success story and it’s a reflection of trust, growth, and the belief
                  that great futures begin with the right guidance.
                </p>
              </p>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
              {/* Logo Grid */}
              {/* <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
                {testimonialLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className={`${logo.bgColor} rounded-lg p-2 lg:p-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 flex items-center justify-center`}
                  >
                    <img
                      src={logo.src || "/placeholder.svg"}
                      alt="Company logo"
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 object-contain"
                    />
                  </div>
                ))}
              </div> */}

              {/* CTA Link */}
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                {/* <span className="text-lg sm:text-xl font-semibold text-primary">Students Testimonials</span> */}
                {/* <img
                  src="/images/img_24_arrows_directions_right.webp"
                  alt="Arrow right"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5"
                  loading="lazy"
                /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
