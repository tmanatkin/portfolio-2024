import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-2024/",
  build: {
    // keep Create React App's output folder so .gitignore and the gh-pages deploy script still work
    outDir: "build",
  },
});
