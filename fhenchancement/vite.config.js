import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import svgr from '@svgr/rollup'
import svgx from '@svgx/vite-plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    //plugins: [react(), svgr(), svgx()],
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    },
    //root: './src',
    //publicDir: 'mypublic',
    build: {
        outDir: './'
    },
    server: {
        open: true
    }
})
