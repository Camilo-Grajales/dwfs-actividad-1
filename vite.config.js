/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets'),
      'features': path.resolve(__dirname, './src/features'),
      'libs': path.resolve(__dirname, './src/libs'),
      'shared': path.resolve(__dirname, './src/shared'),
      'router': path.resolve(__dirname, './src/router'),
    },
  },
})
