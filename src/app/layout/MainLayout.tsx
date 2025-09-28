// src/app/layout/MainLayout.tsx

import React from 'react';
import Header from '@/features/layouts/Header';
import Footer from '@/features/layouts/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

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
        </>
    );
};

export default MainLayout;