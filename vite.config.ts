import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clean output directory before building
  },
  server: {
    port: 3000, // Optional: Local development server port
  },
});
