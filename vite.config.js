import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  server: {
    strictPort: true, // Ensure the port is fixed for stability
  },
  resolve: {
    alias: {
      $lib: '/src/lib', // Adjust paths as needed
    },
  },
};
