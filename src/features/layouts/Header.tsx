// @/features/layouts/Header.tsx

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';
import LogoLight from '@/assets/global/logo_light.svg';
import LogoText from '@/assets/global/logo_text_light.svg';
import { FaWhatsapp } from 'react-icons/fa';

// ✅ Define WhatsApp click handler
const handleWhatsAppClick = () => {
  const phoneNumber = '+642885183100';
  const message = encodeURIComponent('Hello! I would like to book a free consultation.');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

interface NavItem {
  name: string;
  active: boolean;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', active: true, href: '/' },
  { name: 'Services', active: false, href: '/#services' },
  { name: 'Universities', active: false, href: '#university-partners' },
  { name: 'Study in New Zealand', active: false, href: '#testimonials' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="w-full bg-secondary sticky top-0 z-50"
      role="banner"
      aria-label="Site header"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5 lg:py-5">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg">
                <img
                  src={LogoLight || '/placeholder.svg'}
                  alt="AGI Gateway Logo"
                  className="h-full w-full object-contain"
                  loading="eager"
                  width={32}
                  height={32}
                />
              </div>
              <img
                src={LogoText || '/placeholder.svg'}
                alt="AGI Gateway"
                className="h-5 w-32 sm:w-40 lg:w-44"
                loading="eager"
                width={176}
                height={20}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${item.active
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground'
                        }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* ✅ WhatsApp-styled Desktop Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] text-black hover:bg-[#128C7E] rounded-md 
                         shadow hover:shadow-md hover:scale-[1.02] transition-all duration-200
                         flex items-center gap-2 px-4 py-2 "
            >
              <FaWhatsapp className="!size-4" />
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
                className="w-[300px] bg-secondary border-l border-primary/20 rounded-l-lg shadow-lg"
              >
                <SheetHeader>
                  <SheetTitle className="text-primary text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  {NAV_ITEMS.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={`justify-start text-left h-12 rounded-md ${item.active
                        ? 'text-primary font-semibold bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    {/* ✅ WhatsApp-styled Mobile Button */}
                    <Button
                      onClick={() => {
                        handleWhatsAppClick();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] rounded-md 
                                 shadow hover:shadow-md transition-all duration-200
                                 flex items-center gap-2 px-4 py-2"
                    >
                      <FaWhatsapp className="!size-4" />
                      Get Started
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;