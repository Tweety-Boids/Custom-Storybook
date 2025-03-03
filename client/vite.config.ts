import { defineConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  test: {
    globals: true, // Enables global test functions like describe, it, expect
    environment: "jsdom", // Use 'node' for backend tests
    coverage: {
      reporter: ["text", "json", "html"], // Optional: Enable coverage reporting
    },
  },

});
