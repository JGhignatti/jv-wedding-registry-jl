import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    commonjsOptions: {
      include: ['node_modules/**/*.js'],
    },
  },
});
