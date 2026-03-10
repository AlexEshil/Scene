import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pageEntries = [
  "index.html",
  "company/index.html",
  "services/index.html",
  "projects/index.html",
  "insights/index.html",
  "careers/index.html",
  "careers/labor/index.html",
  "subcontractors/index.html",
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: pageEntries.reduce<Record<string, string>>((accumulator, entry) => {
        const key = entry === "index.html" ? "home" : entry.replace(/\/index\.html$/, "").replace(/\//g, "-");
        accumulator[key] = path.resolve(__dirname, entry);
        return accumulator;
      }, {}),
    },
  },
});
