// @/app/Routes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/features/landing'; // or wherever your HomePage is
import AboutPage from '@/features/about/AboutPage';
import MainLayout from './layout/MainLayout';
import SimplePage from '@/features/page';


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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;