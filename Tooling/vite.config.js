// Template for config.js
import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        mainJS: resolve(__dirname, 'main.js'),
      },
    },
  },
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js', './src/**/*.vue', './src/**/*.jsx'], // Scan these files for used classes
      safelist: ['important-class', /^dynamic-/], // Optional: Safelist classes or patterns
    }),
  ],
});
