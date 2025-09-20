// @/components/ui/WhatsAppButton.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircleIcon } from 'lucide-react';

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        // Replace with your WhatsApp Business number (with country code, no + or -)
        const phoneNumber = '+642885183100'; // Example: 8801712345678 for Bangladesh
        const message = encodeURIComponent('Hello! I would like to book a free consultation.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            onClick={handleWhatsAppClick}
            aria-label="Chat on WhatsApp"
            role="link"
        >
            <MessageCircleIcon className="h-7 w-7" />
        </Button>
    );
};

export default WhatsAppButton;