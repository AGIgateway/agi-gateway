// @/components/layout/PageLayout.tsx

import React from 'react';

interface PageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
    return (
        <section className="pb-32">
            {/* Full Width Hero */}
            <div className="bg-gradient-to-r from-lime-950 to-emerald-700 text-white py-32">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                </div>
            </div>

            {/* Optional Subtitle/Intro */}
            {subtitle && (
                <div className="py-16">
                    <div className="container px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl space-y-8 text-left">
                            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
                                {subtitle}
                            </h2>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="py-16">
                <div className="container px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">{children}</div>
                </div>
            </div>
        </section>
    );
};

export default PageLayout;