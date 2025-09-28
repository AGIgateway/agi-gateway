// @/components/layout/Footer.tsx
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import LogoDark from '@/assets/global/logo_dark.svg';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

interface Link {
  name: string;
  href: string;
}

interface SocialMediaItem {
  name: string;
  icon: React.ReactNode;
  href: string;
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
      { name: 'Help center', href: '/help' }, // or '#' if not built yet
      { name: 'Terms of service', href: '/terms-of-use' },
      { name: 'Legal', href: '/terms-of-use' }, // or a dedicated /legal page if needed
      { name: 'Privacy policy', href: '/privacy-policy' },
    ],
    []
  );

  const socialMedia: SocialMediaItem[] = useMemo(
    () => [
      {
        name: 'Facebook',
        icon: <Facebook className="w-5 h-5" />,
        href: 'https://www.facebook.com/profile.php?id=61578970088384'
      },
      {
        name: 'Twitter',
        icon: <Twitter className="w-5 h-5" />,
        href: 'https://twitter.com/agigateway'
      },
      {
        name: 'Instagram',
        icon: <Instagram className="w-5 h-5" />,
        href: 'http://instagram.com/agigateway'
      },
      {
        name: 'LinkedIn',
        icon: <Linkedin className="w-5 h-5" />,
        href: 'https://www.linkedin.com/company/agigateway'
      },
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
      <section className="w-full bg-primary">
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
        <p className="text-sm text-primary-foreground font-normal">Copyright © {new Date().getFullYear()} AGI Gateway ltd.</p>
        <p className="text-sm text-primary-foreground font-normal">All rights reserved</p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {socialMedia.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            aria-label={social.name}
          >
            {social.icon}
          </a>
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
      <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground">{title}</h3>
      <ul className="flex flex-col gap-3 lg:gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-primary-foreground font-normal hover:text-primary-foreground/80 transition-colors focus:outline-none focus:underline"
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
          <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground">Stay up to date</h3>
          <div className="flex justify-between items-center bg-background/50 rounded-lg px-3 py-2 lg:px-4 lg:py-3">
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              onKeyPress={onKeyPress}
              placeholder="Your email address"
              className="bg-transparent text-sm text-primary-foreground placeholder-primary-foreground/70 border-none outline-none flex-1 focus:outline-none"
              aria-label="Email subscription"
            />
            <button
              onClick={onSubscribe}
              // onKeyDown={onIconKeyDown}
              tabIndex={0}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              aria-label="Send email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="m22 2-7 20-4-9-9-4Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm text-primary-foreground font-normal mt-4 lg:mt-0">Status</p>
    </div>
  );
};

export default Footer;