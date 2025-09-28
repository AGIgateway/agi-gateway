// @/app/Routes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/features/landing'; // or wherever your HomePage is
import AboutPage from '@/features/about/AboutPage';
import MainLayout from './layout/MainLayout';
import SimplePage from '@/features/page';
import PrivacyPolicyPage from '@/features/policy/PrivacyPolicyPage';
import TermsOfUsePage from '@/features/policy/TermsOfUsePage';



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        {/* Add other routes similarly */}
        <Route
          path="/page"
          element={
            <MainLayout>
              <SimplePage />
            </MainLayout>
          }
        />
        <Route
          path='/privacy-policy'
          element={
            <MainLayout>
              <PrivacyPolicyPage />
            </MainLayout>
          }
        />
        <Route
          path='/terms-of-use'
          element={
            <MainLayout>
              <TermsOfUsePage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter >
  );
};

export default AppRoutes;