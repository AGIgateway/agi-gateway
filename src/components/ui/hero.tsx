// src/component/ui/hero.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle
}) => {
    return (
        <section className="bg-gradient-to-r from-lime-950 to-emerald-700 text-white py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                    {title}
                </h1>
                {subtitle && (
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 opacity-90">
                        {subtitle}
                    </h2>
                )}
            </div>
        </section>
    );
};

export default HeroSection;