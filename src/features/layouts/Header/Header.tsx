'use client';

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

interface NavItem {
  name: string;
  active: boolean;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', active: true, href: '#' },
  { name: 'Services', active: false, href: '#services' },
  { name: 'Universities', active: false, href: '#universities' },
  { name: 'Study in New Zealand', active: false, href: '#study' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="w-full bg-[#f5f4df] sticky top-0 z-50"
      role="banner"
      aria-label="Site header"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5 lg:py-5">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center">
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

          {/* Desktop Navigation Menu - Using ShadCN NavigationMenu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                        item.active ? 'text-global-2 font-semibold' : 'text-global-2/80'
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="default"
              size="default"
              className="bg-global-2 text-global-7 hover:bg-global-2/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu - Using ShadCN Sheet component */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-global-2 hover:bg-global-2/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-global-5 border-l border-global-2/20"
              >
                <SheetHeader>
                  <SheetTitle className="text-global-2 text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {NAV_ITEMS.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={`justify-start text-left h-12 ${
                        item.active
                          ? 'text-global-2 font-semibold bg-global-2/10'
                          : 'text-global-2/80 hover:text-global-2 hover:bg-global-2/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <div className="mt-4 pt-4 border-t border-global-2/20">
                    <Button
                      className="w-full bg-global-2 text-global-7 hover:bg-global-2/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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
