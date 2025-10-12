import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/app': '/src/app',
      '@/assets': '/src/assets',
      '@/features': '/src/features',
      '@/styles': '/src/styles',
      '@/constants': '/src/constants',
      '@/shared': '/src/features/shared',
      '@/layouts': '/src/features/layouts',
    },
  },
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true
  }
});
