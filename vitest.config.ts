import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    environment: "jsdom",
    coverage: {
      provider: "v8",
      exclude: [
        "**/.eslintrc.cjs",
        "vitest.config.ts",
        "next.config.mjs",
        "next-env.d.ts",
        "dist",
        "**/*.test.{js,jsx,ts,tsx}",
      ],
    },
  },
});
