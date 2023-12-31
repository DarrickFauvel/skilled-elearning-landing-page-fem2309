/* eslint-disable no-undef */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components/**": path.resolve(__dirname, "./src/components/**"),
      "@/assets/**": path.resolve(__dirname, "./src/assets/**"),
      "@/vendor/**": path.resolve(__dirname, "./src/vendor/**"),
      "@/styles/**": path.resolve(__dirname, "./src/styles/**"),
    },
  },
  server: {
    host: true,
  },
})
