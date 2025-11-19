// src/app/layout/MainLayout.tsx

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SocialMediaSidebar from '@/components/layout/SocialMediaSidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex-1" role="main">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <SocialMediaSidebar />
        </>
    );
};

export default MainLayout;
