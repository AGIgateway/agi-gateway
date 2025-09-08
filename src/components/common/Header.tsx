import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navigation items data
  const navItems = [
    { name: 'Home', active: true },
    { name: 'Services', active: false },
    { name: 'Universities', active: false },
    { name: 'Study in New Zealand', active: false },
    // { name: 'Resources', active: false },
  ];

  return (
    <header className="w-full bg-global-5 border border-black border-solid">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-[18px]">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Logo */}
              <div className="relative w-[30px] h-[30px] flex items-center justify-center">
                <img
                  src="/favicon.svg"
                  alt="AGI Gateway Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Logo Text */}
              <img
                src="/images/img_group.svg"
                alt="AGI Gateway"
                className="w-[120px] sm:w-[150px] lg:w-[170px] h-[18px]"
              />
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-global-2 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-global-2 mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-global-2 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-global-5 lg:bg-transparent z-50 lg:z-auto`}
            aria-label="Main navigation"
          >
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 p-4 lg:p-0">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  role="menuitem"
                  className={`text-sm sm:text-base font-${item.active ? 'medium' : 'normal'} text-global-2 hover:text-opacity-80 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0`}
                  onClick={closeMenu}
                >
                  {item.name}
                </button>
              ))}

              {/* Contact Button */}
              <Button
                variant="primary"
                size="small"
                className="bg-global-2 text-global-7 rounded-md px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium w-full lg:w-auto mt-2 lg:mt-0"
                onClick={closeMenu}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;