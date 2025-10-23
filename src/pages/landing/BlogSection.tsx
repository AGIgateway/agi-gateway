// @/landing/BlogSection.tsx
import React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

interface BlogPost {
  id: string
  image: string
  title: string
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      image: "/images/img_image_18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: "2",
      image: "/images/img_image_19.png",
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: "3",
      image: "/images/img_image_20.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ]

  const memoizedPosts = React.useMemo(() => blogPosts, [])

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3 sm:gap-4 lg:gap-6 text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">
            Caring Is Our Moto
          </h2>
          <p className="text-sm sm:text-base font-normal leading-6 text-muted-foreground max-w-2xl mx-auto">
            AGI Gateway blog is the best place to read about the latest university and study insights, trends and more.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {memoizedPosts.map((post) => (
            <motion.div key={post.id} className="flex flex-col items-center"
              variants={staggerItem}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Blog Image */}
              <div className="w-full relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 lg:h-72 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              <Card className="flex flex-col gap-4 lg:gap-6 items-center bg-card border-none shadow-lg p-5 lg:p-6 -mt-16 mx-6 w-[calc(100%-3rem)] relative z-10">
                <CardContent className="p-0 flex flex-col gap-4 lg:gap-6 items-center w-full">
                  <CardTitle className="text-lg sm:text-xl font-semibold leading-7 text-center text-muted-foreground">
                    {post.title}
                  </CardTitle>
                  {/* Readmore Button */}
                  <Button variant="ghost" className="flex gap-2 items-center py-2 h-auto p-0 hover:bg-transparent">
                    <span className="text-lg sm:text-xl font-semibold leading-tight text-primary">Readmore</span>
                    <img
                      src="/images/img_24_arrows_directions_right.svg"
                      alt="Arrow right"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      loading="lazy"
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section >
  )
}

export default BlogSection
