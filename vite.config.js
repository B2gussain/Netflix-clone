import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()], // Correctly included in the return object
    define: {
      __API_KEY__: JSON.stringify(env.VITE_API_KEY), // Use the environment variable here
    },
  };
});
