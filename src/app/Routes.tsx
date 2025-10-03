// src/app/Routes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/features/landing';
import SimplePage from '@/features/page';
import PrivacyPolicyPage from '@/features/policy/PrivacyPolicyPage';
import TermsOfUsePage from '@/features/policy/TermsOfUsePage';
import MainLayout from './layout/MainLayout';
import { Service1 } from '@/features/policy/service';

// Route config
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/page', element: <SimplePage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/terms-of-use', element: <TermsOfUsePage /> },
  { path: '/service', element: <Service1 /> },

];

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout>{element}</MainLayout>}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;