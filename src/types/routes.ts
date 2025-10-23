// src/types/route.ts
import { ReactNode } from 'react';

export interface RouteMeta {
    title: string;
    requiresAuth?: boolean;
    description?: string;
}

export interface RouteConfig {
    path: string;
    element: ReactNode;
    meta: RouteMeta;
}