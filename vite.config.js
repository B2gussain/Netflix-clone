import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()], // Correctly included in the return object
    server: {
      port: process.env.PORT || 3000, // fallback to port 3000 if no PORT env variable is set
      host: true,
  },
    define: {
      __API_KEY__: JSON.stringify(env.VITE_API_KEY), // Use the environment variable here
    },
  };
});
