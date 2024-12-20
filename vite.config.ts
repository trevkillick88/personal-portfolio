import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap'

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
    plugins: [react(),
        Sitemap({ 
            hostname: 'https://trevkillick.dev',
            exclude: ['/assets'] 
        }),
        ViteImageOptimizer({
        /* pass your config */
      }),],
    css: { modules: false },
    esbuild: { legalComments: 'none' },
})
