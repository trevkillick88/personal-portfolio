import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { compression } from 'vite-plugin-compression2'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            treeshake: true  // Ensure tree shaking is enabled
        },
        sourcemap: true,
    },
    define: {
        'VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
        react(),
        Sitemap({ 
            hostname: 'https://trevkillick.dev',
            exclude: ['/assets'] 
        }),
        ViteImageOptimizer({
            /* pass your config */
        }),
        compression(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    css: { 
        postcss: {
            plugins: [
                tailwind(),
                autoprefixer({}) // add options if needed
            ],
        },
        modules: false 
    },
    esbuild: { legalComments: 'none' },
})
