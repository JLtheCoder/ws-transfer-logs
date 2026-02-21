import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        }
      ],
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
        contentScript: './src/contentScript.ts',
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === 'contentScript') {
            return 'contentScript.js';
          }
          return "assets/[name]-[hash].js";
        }
      },
    },
  },
});