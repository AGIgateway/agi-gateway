import React, { useState, useEffect, useRef } from 'react';
import Button from '@/features/shared/ui/Button';
import LogoLight from '@/assets/global/logo_light.svg';
import LogoText from '@/assets/global/logo_text_light.svg';

interface NavItem {
  name: string;
  active: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', active: true },
  { name: 'Services', active: false },
  { name: 'Universities', active: false },
  { name: 'Study in New Zealand', active: false },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className="w-full border border-black bg-global-5"
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
                  src={LogoLight}
                  alt="AGI Gateway Logo"
                  className="h-full w-full object-contain"
                  loading="eager"
                  width={32}
                  height={32}
                />
              </div>
              <img
                src={LogoText}
                alt="AGI Gateway"
                className="h-5 w-32 sm:w-40 lg:w-44"
                loading="eager"
                width={176}
                height={20}
              />
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="block rounded p-2 lg:hidden focus:outline-none focus:ring-2 focus:ring-global-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={toggleMenu}
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              <span
                className={`block h-0.5 w-5 bg-global-2 transition-transform ${menuOpen
                  ? 'rotate-45 translate-y-1.5'
                  : 'mb-1'
                  }`}
              />
              <span
                className={`block h-0.5 w-5 bg-global-2 transition-opacity ${menuOpen ? 'opacity-0' : 'my-1'}`}
              />
              <span
                className={`block h-0.5 w-5 bg-global-2 transition-transform ${menuOpen
                  ? '-rotate-45 -translate-y-1.5'
                  : ''
                  }`}
              />
            </div>
          </button>

          {/* Navigation Menu */}
          <nav
            id="main-nav"
            ref={navRef}
            className={`${menuOpen ? 'block animate-fadeIn' : 'hidden'} 
              absolute left-0 top-full z-50 w-full bg-global-5 
              lg:relative lg:top-auto lg:left-auto lg:block lg:w-auto lg:bg-transparent lg:z-0
              transition-all duration-300 ease-in-out`}
            aria-label="Main navigation"
            role="navigation"
          >
            <ul className="flex flex-col items-center gap-4 p-4 lg:flex-row lg:gap-5 lg:p-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.name} className="w-full lg:w-auto">
                  <button
                    type="button"
                    role="menuitem"
                    aria-current={item.active ? 'page' : undefined}
                    className={`w-full rounded px-4 py-2 text-center text-sm font-${item.active ? 'medium' : 'normal'} text-global-2 transition-colors hover:text-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-global-2 sm:text-base lg:w-auto lg:px-0 lg:py-0 lg:text-left`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </button>
                </li>
              ))}

              <li className="mt-2 w-full lg:mt-0 lg:w-auto">
                <Button
                  variant="primary"
                  size="small"
                  className="w-full rounded-md bg-global-2 px-4 py-2 text-sm font-medium text-global-7 sm:px-5 sm:py-2.5 lg:w-auto"
                  onClick={closeMenu}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;