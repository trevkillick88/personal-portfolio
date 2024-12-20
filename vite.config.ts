import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            treeshake: true  // Ensure tree shaking is enabled
        }
    },
    define: {
        'VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version),
    },
    plugins: [react(),ViteImageOptimizer({
        /* pass your config */
      }),],
    css: { modules: false },
    esbuild: { legalComments: 'none' },
})
