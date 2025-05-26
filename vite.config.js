// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/zadanie_12/', // needed for GitHub Pages!
    build: {
        outDir: 'dist',
    },
    plugins: [
        tailwindcss(),
    ],
})