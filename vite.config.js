import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/demo-portfolio/",
    predeploy: "npm run build",
    deploy: "gh-pages -d dist",
});
