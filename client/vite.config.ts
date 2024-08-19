import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tasks': {
        target: 'https://task-manager-0h1b.onrender.com', // Replace with your backend server URL
        changeOrigin: true,  // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/tasks/, '/tasks'),  // Rewrite the path if needed
      },
    },
  },
});
