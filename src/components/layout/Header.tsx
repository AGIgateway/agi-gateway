"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import LogoLight from "@/assets/global/logo_light.svg"
import LogoText from "@/assets/global/logo_text_light.svg"
import { FaWhatsapp } from "react-icons/fa"

// ✅ Fixed WhatsApp handler (removed extra space)
const handleWhatsAppClick = () => {
  const phoneNumber = "+64223134766"
  const message = encodeURIComponent("Hello! I would like to book a free consultation.")
  const url = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(url, "_blank", "noopener,noreferrer")
}

interface NavItem {
  name: string
  active: boolean
  href?: string
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", active: true, href: "/" },
  { name: "Services", active: true, href: "#services" }, // ✅ Same-page anchor
  { name: "Universities", active: true, href: "#university-partners" },
  { name: "Study in New Zealand", active: true, href: "#testimonials" },
  { name: "Let's Connect", active: true, href: "/contact" }, // Added Contact navigation item
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-secondary sticky top-0 z-50" role="banner" aria-label="Site header">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg">
                <img
                  src={LogoLight || "/placeholder.svg"}
                  alt="AGI Gateway Logo"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
              <img
                src={LogoText || "/placeholder.svg"}
                alt="AGI Gateway"
                className="h-6 w-auto sm:w-40"
                loading="eager"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.href?.startsWith("#") ? (
                      // Anchor link → use <a>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href!.substring(1))
                        }}
                        className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${item.active ? "text-primary font-semibold" : "text-muted-foreground"
                          }`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      // Route link → use NavigationMenuLink (or <Link>)
                      <NavigationMenuLink
                        href={item.href}
                        className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${item.active ? "text-primary font-semibold" : "text-muted-foreground"
                          }`}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] text-md text-black hover:bg-[#128C7E] hover:text-white rounded-md shadow hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex items-center gap-2 px-4 py-2"
            >
              <FaWhatsapp className="size-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-secondary/50 rounded-md"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-secondary border-l border-primary/20 rounded-l-lg shadow-lg p-6"
              >
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-primary">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.name} className="w-full">
                      {item.href?.startsWith("#") ? (
                        // Anchor → smooth scroll
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-left h-12 rounded-md px-3 ${item.active
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            }`}
                          onClick={() => {
                            scrollToSection(item.href!.substring(1))
                            setMobileMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </Button>
                      ) : (
                        // Home route → use Link
                        <Link to={item.href || "/"} onClick={() => setMobileMenuOpen(false)}>
                          <Button
                            variant="ghost"
                            className={`w-full justify-start text-left h-12 rounded-md px-3 ${item.active
                              ? "text-primary font-semibold bg-primary/10"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                              }`}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <Button
                    onClick={() => {
                      handleWhatsAppClick()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-[#25D366] text-black hover:bg-[#128C7E] rounded-md shadow hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 px-4 py-3"
                  >
                    <FaWhatsapp className="size-4" />
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
