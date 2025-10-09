'use client';

import React from 'react';

const InfoSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-foreground mb-8 text-serif">Course Guidelines – Finding Your Perfect Path</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                    Your future is unique, and your study journey should reflect that. At AGI Gateway, we go beyond suggesting “popular courses.” We take time to understand your passions, strengths, and long-term goals. Using our deep local knowledge of New Zealand’s industries and global trends, we help you choose programs that lead to real careers, not just classrooms. Whether you’re starting a new degree, upskilling, or pursuing a PhD, we design a personalised roadmap for your success.
                </p>
            </div>
        </section>
    );
};

export default InfoSection;