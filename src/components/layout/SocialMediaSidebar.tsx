import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialMediaSidebar: React.FC = () => {
    const socialLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            href: 'https://www.facebook.com/profile.php?id=61578970088384',
            bgColor: 'bg-[#3b5998]',
            hoverColor: 'hover:bg-[#2d4373]'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: 'https://twitter.com/agigateway',
            bgColor: 'bg-[#4099FF]',
            hoverColor: 'hover:bg-[#2d7acc]'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            href: 'http://instagram.com/agigateway',
            bgColor: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
            hoverColor: 'hover:opacity-90'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/company/agigateway',
            bgColor: 'bg-[#0976B4]',
            hoverColor: 'hover:bg-[#075885]'
        },
    ];

    return (
        <div className="fixed right-6 top-[35vh] z-40 hidden md:block">
            <div className="flex flex-col gap-4">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                group flex items-center
                w-[230px] h-12 -mr-[200px]
                ${social.bgColor} ${social.hoverColor}
                text-white
                transition-all duration-200 ease-in-out delay-200
                shadow-[0_0_6px_0_rgba(62,61,61,0.5)]
                hover:-mr-[30px]
                cursor-pointer
              `}
                            aria-label={social.name}
                        >
                            <div className="flex items-center w-full h-full px-4">
                                <Icon className="w-6 h-6 mr-4" />
                                <span className="text-sm font-normal leading-[3] flex-1">
                                    {social.name === 'Facebook' && 'Like on Facebook'}
                                    {social.name === 'Twitter' && 'Follow on Twitter'}
                                    {social.name === 'Instagram' && 'Follow on Instagram'}
                                    {social.name === 'LinkedIn' && 'Connect on LinkedIn'}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default SocialMediaSidebar;
