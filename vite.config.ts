// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
// Never set ssr.external or resolve.external. Never add compression plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages user site (deep19901985.github.io) is served from the domain root.
  vite: { base: "/" },
  tanstackStart: {
    server: { entry: "server" },
    // Static export for GitHub Pages: every page is rendered to HTML at build time.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
