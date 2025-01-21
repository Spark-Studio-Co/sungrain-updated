// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';



export default defineConfig({
  server: {
    host: true, // Ensures the server binds to all network interfaces
    port: 3000, // You can set any available port
  },
  integrations: [react(), tailwind()]
});