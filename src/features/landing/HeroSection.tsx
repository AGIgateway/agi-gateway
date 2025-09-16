import type React from "react"
import { Badge } from "@/components/ui/badge"

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full bg-[#f5f4df] h-[calc(100vh-80px)] flex items-center"
      aria-label="Hero section"
      role="region"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center lg:pr-8">
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge
                variant="secondary"
                className="bg-[#c8e6c9] text-[#1b4d43] hover:bg-[#c8e6c9]/80 px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-[#1b4d43] rounded-full"></div>
                ACHIEVE
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#c8e6c9] text-[#1b4d43] hover:bg-[#c8e6c9]/80 px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-[#1b4d43] rounded-full"></div>
                GROW
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#c8e6c9] text-[#1b4d43] hover:bg-[#c8e6c9]/80 px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-[#1b4d43] rounded-full"></div>
                INSPIRE
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#1b4d43] mb-12 lg:mb-16">
              WE CONNECT BRILLIANT MINDS TO WORLD-CLASS EDUCATION
            </h1>
          </div>

          <div className="flex-1 lg:flex-[0_0_50%] xl:flex-[0_0_45%] flex items-stretch">
            <img
              src="/images/img_graduation_student.svg"
              alt="Smiling graduate in cap and gown holding diploma"
              className="w-full h-full object-cover object-left"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
