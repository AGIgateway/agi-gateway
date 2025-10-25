import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'app': '/src/app',
      'assets': '/src/assets',
      'components': '/src/components',
      'config': '/src/config',
      'features': '/src/features',
      'hooks': '/src/hooks',
      'lib': '/src/lib',
      'pages': '/src/pages',
      'styles': '/src/styles',
      'types': '/src/features/types',
    },
  },
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true
  }
});
