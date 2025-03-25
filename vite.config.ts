import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { compression } from 'vite-plugin-compression2'
import legacy from '@vitejs/plugin-legacy'
import basicSsl from '@vitejs/plugin-basic-ssl'
import {version} from './package.json';

// https://vite.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit:700,
        rollupOptions: {
            treeshake: true  // Ensure tree shaking is enabled
        },
        sourcemap: true,
    },
    define: {
        'VITE_APP_VERSION': JSON.stringify(version),
        'VITE_APP_ID': JSON.stringify(process.env.VITE_APP_ID)
    },
    plugins: [basicSsl(), react(), Sitemap({ 
        hostname: 'https://trevkillick.dev',
        readable:true,
        outDir: './dist',
        exclude: ['/assets'] 
    }), ViteImageOptimizer({
        /* pass your config */
    }), compression(), legacy({
        targets: ['defaults', 'not IE 11'],
    }), sentryVitePlugin({
        org: "trev-killick",
        project: "personal-portfolio"
    })],
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