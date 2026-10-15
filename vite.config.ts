import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react(), {
    name: 'hanlin-production-csp',
    transformIndexHtml(html, context) {
      if (context.server) return html;
      return [{ tag: 'meta', attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; media-src 'self' blob:; worker-src 'self' blob:; object-src 'none'; base-uri 'none'; form-action 'none'",
      }, injectTo: 'head' }];
    },
  }],
  base: './',
  build: { sourcemap: true, chunkSizeWarningLimit: 900 },
  server: { port: 5173, strictPort: true },
});
