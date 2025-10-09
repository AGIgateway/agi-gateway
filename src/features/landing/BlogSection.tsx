"use client"

// @/landing/BlogSection.tsx
import React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-global-3">
            Caring Is Our Moto
          </h2>
          <p className="text-sm sm:text-base font-normal leading-6 text-global-4 max-w-2xl mx-auto">
            AGI Gateway blog is the best place to read about the latest university and study insights, trends and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {memoizedPosts.map((post) => (
            <div key={post.id} className="flex flex-col items-center">
              {/* Blog Image */}
              <div className="w-full relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 lg:h-72 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              <Card className="flex flex-col gap-4 lg:gap-6 items-center bg-background border-none shadow-lg p-5 lg:p-6 -mt-16 mx-6 w-[calc(100%-3rem)] relative z-10">
                <CardContent className="p-0 flex flex-col gap-4 lg:gap-6 items-center w-full">
                  <CardTitle className="text-lg sm:text-xl font-semibold leading-7 text-center text-global-4">
                    {post.title}
                  </CardTitle>
                  {/* Readmore Button */}
                  <Button variant="ghost" className="flex gap-2 items-center py-2 h-auto p-0 hover:bg-transparent">
                    <span className="text-lg sm:text-xl font-semibold leading-tight text-global-1">Readmore</span>
                    <img
                      src="/images/img_24_arrows_directions_right.svg"
                      alt="Arrow right"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
