import React, { useState, useCallback, useMemo } from 'react';
import Button from '../../shared/ui/Button';
import LogoDark from '@/assets/global/logo_dark.svg';

interface Link {
  name: string;
  href: string;
}

interface SocialMediaItem {
  name: string;
  src: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  // Memoize static data to prevent re-creation on every render
  const companyLinks: Link[] = useMemo(
    () => [
      { name: 'About us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Testimonials', href: '#' },
    ],
    []
  );

  const supportLinks: Link[] = useMemo(
    () => [
      { name: 'Help center', href: '#' },
      { name: 'Terms of service', href: '#' },
      { name: 'Legal', href: '#' },
      { name: 'Privacy policy', href: '#' },
    ],
    []
  );

  const socialMedia: SocialMediaItem[] = useMemo(
    () => [
      { name: 'Facebook', src: '/images/img_social_icons.png' },
      { name: 'Twitter', src: '/images/img_social_icons_white_a700.png' },
      { name: 'Instagram', src: '/images/img_social_icons_white_a700_24x32.png' },
      { name: 'LinkedIn', src: '/images/img_social_icons_24x32.png' },
    ],
    []
  );

  // Memoized event handlers to avoid recreating on every render
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubscribe = useCallback(() => {
    if (email.trim()) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  }, [email]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if in a form context
      handleSubscribe();
    }
  }, [handleSubscribe]);

  const handleIconKeyDown = useCallback((e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSubscribe();
    }
  }, [handleSubscribe]);

  return (
    <footer className="w-full mt-14 sm:mt-20 lg:mt-27">
      {/* Consultation CTA Section */}
      <section className="w-full bg-global-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-7 py-12 sm:py-16 lg:py-8">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-center text-footer-1 max-w-4xl">
              Book a Free Consultation
            </h2>
            <Button
              variant="primary"
              size="medium"
              className="bg-global-2 text-global-7 rounded-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-medium flex items-center gap-2"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 py-12 sm:py-16 lg:py-16">

            {/* Logo and Social Section */}
            <LogoAndSocialSection socialMedia={socialMedia} />

            {/* Company Links */}
            <LinkSection title="Company" links={companyLinks} />

            {/* Support and Newsletter Section */}
            <SupportAndNewsletterSection
              email={email}
              onEmailChange={handleEmailChange}
              onSubscribe={handleSubscribe}
              onKeyPress={handleKeyPress}
              onIconKeyDown={handleIconKeyDown}
              supportLinks={supportLinks}
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

// ========================
// Reusable Subcomponents
// ========================

interface LogoAndSocialSectionProps {
  socialMedia: SocialMediaItem[];
}

const LogoAndSocialSection: React.FC<LogoAndSocialSectionProps> = ({ socialMedia }) => {
  return (
    <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-3 w-full lg:max-w-xs">
      <div className="mt-8 sm:mt-10 lg:mt-0 mb-6 sm:mb-8 lg:mb-8">
        <img
          src={LogoDark}
          alt="AGI Gateway Logo"
          className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-28 object-contain"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm text-footer-3 font-normal">Copyright © 2025 AGI Gateway ltd.</p>
        <p className="text-sm text-footer-3 font-normal">All rights reserved</p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {socialMedia.map((social) => (
          <img
            key={social.name} // ✅ Use meaningful key (name), not index
            src={social.src}
            alt={social.name}
            className="w-8 h-6 cursor-pointer hover:opacity-80 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};

interface LinkSectionProps {
  title: string;
  links: Link[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 w-full lg:max-w-[100px]">
      <h3 className="text-lg sm:text-xl font-semibold text-global-7">{title}</h3>
      <ul className="flex flex-col gap-3 lg:gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-footer-3 font-normal hover:text-global-7 transition-colors focus:outline-none focus:underline"
              aria-label={`Visit ${link.name}`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SupportAndNewsletterSectionProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubscribe: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onIconKeyDown: (e: React.KeyboardEvent<HTMLImageElement>) => void;
  supportLinks: Link[];
}

const SupportAndNewsletterSection: React.FC<SupportAndNewsletterSectionProps> = ({
  email,
  onEmailChange,
  onSubscribe,
  onKeyPress,
  onIconKeyDown,
  supportLinks,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 w-full lg:w-1/2">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 w-full">
        {/* Support Links */}
        <LinkSection title="Support" links={supportLinks} />

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 w-full lg:w-3/4">
          <h3 className="text-lg sm:text-xl font-semibold text-global-7">Stay up to date</h3>
          <div className="flex justify-between items-center bg-global-8 rounded-lg px-3 py-2 lg:px-4 lg:py-3 w-full">
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              onKeyPress={onKeyPress}
              placeholder="Your email address"
              className="bg-transparent text-sm text-footer-2 placeholder-footer-2 border-none outline-none flex-1 focus:outline-none"
              aria-label="Email subscription"
            />
            <img
              src="/images/img_essential_icons.svg"
              alt="Send email"
              onClick={onSubscribe}
              onKeyDown={onIconKeyDown}
              tabIndex={0}
              role="button"
              className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>

      <p className="text-sm text-footer-3 font-normal mt-4 lg:mt-0">Status</p>
    </div>
  );
};

export default Footer;