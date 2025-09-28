'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-lime-950 to-emerald-700 text-white py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Course Guidelines </h1>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"> Finding Your Perfect Path</h1>
                {/* <h2 className="text-2xl md:text-3xl font-semibold mb-8 opacity-90">ABROAD STUDY</h2>     */}
                <Button
                    variant="default"
                    className="bg-white text-green-700 hover:bg-emerald-50 font-bold py-3 px-8 text-lg rounded-full shadow-lg transition duration-300"
                >
                    APPLY NOW
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;