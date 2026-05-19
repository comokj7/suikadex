import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  resolve: {
    tsconfigPaths: true
  },
  server: {
    port: 3000,
    open: true,
  },
  base: '/suikadex/',
  
  define: {
    'process.env.PUBLIC_URL': JSON.stringify('/suikadex'),
  },
});