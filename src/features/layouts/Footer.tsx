// @/components/footer/Footer.tsx
import React, { useState, useCallback, useMemo } from 'react';
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

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubscribe = useCallback(() => {
    if (email.trim()) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  }, [email]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubscribe();
      }
    },
    [handleSubscribe]
  );

  const handleIconKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLImageElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSubscribe();
      }
    },
    [handleSubscribe]
  );

  return (
    <footer className="w-full mt-14 sm:mt-20 lg:mt-27">
      <section className="w-full bg-footer-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 py-12 sm:py-16 lg:py-16">
            <LogoAndSocialSection socialMedia={socialMedia} />
            <LinkSection title="Company" links={companyLinks} />
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
        <p className="text-sm text-footer-2 font-normal">Copyright © 2025 AGI Gateway ltd.</p>
        <p className="text-sm text-footer-2 font-normal">All rights reserved</p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {socialMedia.map((social) => (
          <img
            key={social.name}
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
      <h3 className="text-lg sm:text-xl font-semibold text-footer-3">{title}</h3>
      <ul className="flex flex-col gap-3 lg:gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-footer-2 font-normal hover:text-footer-3 transition-colors focus:outline-none focus:underline"
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
        <LinkSection title="Support" links={supportLinks} />

        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 w-full lg:w-3/4">
          <h3 className="text-lg sm:text-xl font-semibold text-footer-3">Stay up to date</h3>
          <div className="flex justify-between items-center bg-footer-1/50 rounded-lg px-3 py-2 lg:px-4 lg:py-3 w-full">
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

      <p className="text-sm text-footer-2 font-normal mt-4 lg:mt-0">Status</p>
    </div>
  );
};

export default Footer;