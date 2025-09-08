import React, { useState } from 'react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      // Handle subscription logic here
      console.log('Subscribing email:', email);
      setEmail(''); // Clear input after submission
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  // Navigation data
  const companyLinks = [
    { name: 'About us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact us', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
  ];

  const supportLinks = [
    { name: 'Help center', href: '#' },
    { name: 'Terms of service', href: '#' },
    { name: 'Legal', href: '#' },
    { name: 'Privacy policy', href: '#' },
  ];

  const socialMedia = [
    { name: 'Facebook', src: '/images/img_social_icons.png' },
    { name: 'Twitter', src: '/images/img_social_icons_white_a700.png' },
    { name: 'Instagram', src: '/images/img_social_icons_white_a700_24x32.png' },
    { name: 'LinkedIn', src: '/images/img_social_icons_24x32.png' },
  ];

  return (
    <footer className="w-full mt-[54px] sm:mt-[80px] lg:mt-[108px]">
      {/* Consultation CTA Section */}
      <section className="w-full bg-global-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-[26px] py-12 sm:py-16 lg:py-[24px]">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-semibold leading-tight text-center text-footer-1 max-w-4xl">
              Book a Free Consultation
            </h2>
            <Button
              variant="primary"
              size="medium"
              className="bg-global-2 text-global-7 rounded px-6 sm:px-8 lg:px-12 py-3 sm:py-3.5 lg:py-[14px] text-sm sm:text-base font-medium flex items-center gap-2"
              rightIcon={
                <img
                  src="/images/img_16_arrows_directions_right.svg"
                  alt="Arrow right"
                  className="w-4 h-4"
                />
              }
              onClick={handleSubscribe}
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="w-full bg-footer-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 py-12 sm:py-16 lg:py-[64px]">

            {/* Logo and Social Section */}
            <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-3 w-full lg:w-[32%]">
              <div className="mt-12 sm:mt-16 lg:mt-[0px] mb-6 sm:mb-8 lg:mb-[32px]">
                <img
                  src="/images/img_group_2229.svg"
                  alt="AGI Gateway Logo"
                  className="w-[80px] sm:w-[90px] lg:w-[106px] h-[82px] sm:w-[95px] lg:h-[110px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm text-footer-3 font-normal">
                  Copyright © 2025 AGI Gateway ltd.
                </p>
                <p className="text-sm text-footer-3 font-normal">
                  All rights reserved
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                {socialMedia.map((social, index) => (
                  <img
                    key={index}
                    src={social.src}
                    alt={social.name}
                    className="w-8 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[8%]">
              <h3 className="text-lg sm:text-xl font-semibold text-global-7">
                Company
              </h3>
              <ul className="flex flex-col gap-3 lg:gap-[12px]">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-footer-3 font-normal hover:text-global-7 transition-colors focus:outline-none focus:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support and Newsletter Section */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] w-full lg:w-[40%]">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 w-full">

                {/* Support Links */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[24%]">
                  <h3 className="text-lg sm:text-xl font-semibold text-global-7">
                    Support
                  </h3>
                  <ul className="flex flex-col gap-3 lg:gap-[12px]">
                    {supportLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-sm text-footer-3 font-normal hover:text-global-7 transition-colors focus:outline-none focus:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[56%]">
                  <h3 className="text-lg sm:text-xl font-semibold text-global-7">
                    Stay up to date
                  </h3>
                  <div className="flex justify-between items-center bg-global-8 rounded-lg px-3 py-2 lg:px-[12px] lg:py-[8px] w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Your email address"
                      className="bg-transparent text-sm text-footer-2 placeholder-footer-2 border-none outline-none flex-1 focus:outline-none"
                      aria-label="Email subscription"
                    />
                    <img
                      src="/images/img_essential_icons.svg"
                      alt="Send"
                      onClick={handleSubscribe}
                      className="w-[18px] h-[18px] cursor-pointer hover:opacity-80 transition-opacity"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? handleSubscribe() : null}
                    />
                  </div>
                </div>
              </div>

              <p className="text-sm text-footer-3 font-normal mt-4 lg:mt-0">
                Status
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;