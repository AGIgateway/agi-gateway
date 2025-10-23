// src/hooks/useRouteMetadata.ts
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { routes } from '@/app/AppRoutes';

export function useRouteMetadata() {
    const location = useLocation();

    useEffect(() => {
        const route = routes.find(r => r.path === location.pathname);
        if (route?.meta.title) {
            document.title = route.meta.title;
        }
        // Optional: update meta description
        if (route?.meta.description) {
            const meta = document.querySelector('meta[name="description"]');
            if (meta) {
                meta.setAttribute('content', route.meta.description);
            }
        }
    }, [location.pathname]);
}