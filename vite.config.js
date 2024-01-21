import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://marianogarciagz.github.io/",
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layout"),
    },
  },
});
