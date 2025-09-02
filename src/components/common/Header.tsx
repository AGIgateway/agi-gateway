import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-global-5 border border-black border-solid">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-[18px]">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Logo Stack */}
              <div className="relative w-[30px] h-[30px] flex items-center justify-center">
                <div className="absolute inset-0">
                  <img 
                    src="/images/img_vector_teal_900_6x7.svg" 
                    alt="Logo background" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-start justify-start w-full h-full">
                  <div className="flex justify-end items-center w-full mb-1">
                    <img 
                      src="/images/img_vector.svg" 
                      alt="Vector" 
                      className="w-[1px] h-[1px]"
                    />
                    <img 
                      src="/images/img_vector_teal_900.svg" 
                      alt="Vector" 
                      className="w-[1px] h-[1px]"
                    />
                  </div>
                  <div className="flex items-center w-full">
                    <img 
                      src="/images/img_vector_teal_900_01.svg" 
                      alt="Vector" 
                      className="w-[8px] h-[18px]"
                    />
                    <div className="relative ml-1">
                      <img 
                        src="/images/img_vector_teal_900_01_21x11.svg" 
                        alt="Vector background" 
                        className="w-[21px] h-[11px]"
                      />
                      <img 
                        src="/images/img_vector_teal_900_18x10.svg" 
                        alt="Vector" 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[10px] h-[18px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Logo Text */}
              <img 
                src="/images/img_group.svg" 
                alt="ACI Gateway" 
                className="w-[120px] sm:w-[150px] lg:w-[170px] h-[18px]"
              />
            </div>
            
            {/* Additional Logo Elements */}
            <div className="hidden sm:flex items-start gap-2 ml-4">
              <img 
                src="/images/img_group_teal_900.svg" 
                alt="Group" 
                className="w-[44px] h-[16px]"
              />
              <img 
                src="/images/img_group_teal_900_3x170.svg" 
                alt="Group" 
                className="w-[120px] sm:w-[150px] lg:w-[170px] h-[3px] mt-1"
              />
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-global-2 mb-1"></span>
              <span className="block w-5 h-0.5 bg-global-2 mb-1"></span>
              <span className="block w-5 h-0.5 bg-global-2"></span>
            </div>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-global-5 lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 p-4 lg:p-0">
              <button 
                role="menuitem"
                className="text-sm sm:text-base font-medium text-global-2 hover:text-opacity-80 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Home
              </button>
              <button 
                role="menuitem"
                className="text-sm sm:text-base font-normal text-global-2 hover:text-opacity-80 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Service
              </button>
              <button 
                role="menuitem"
                className="text-sm sm:text-base font-normal text-global-2 hover:text-opacity-80 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Universities
              </button>
              <button 
                role="menuitem"
                className="text-sm sm:text-base font-normal text-global-2 hover:text-opacity-80 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Success Stories
              </button>
              <button 
                role="menuitem"
                className="text-sm sm:text-base font-normal text-global-2 hover:text-opacity-80 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
              >
                Resources
              </button>
              
              {/* Contact Button */}
              <Button
                variant="primary"
                size="small"
                className="bg-global-2 text-global-7 rounded-md px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium w-full lg:w-auto mt-2 lg:mt-0"
              >
                Contact
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;