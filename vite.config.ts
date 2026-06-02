import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  resolve: {
    tsconfigPaths: true,
    alias: {
      // mdi-material-ui 같은 레거시 라이브러리가 v4 경로를 찾을 때 v5로 매핑해주는 치트키
      '@material-ui/core/SvgIcon': '@mui/material/SvgIcon',
      '@material-ui/core': '@mui/material',
    },
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