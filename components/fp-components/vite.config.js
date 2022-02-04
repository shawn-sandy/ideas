import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  lib: {
    entry: path.resolve(__dirname, './ src / components / index.js'),
    name: 'App',
    fileName: (format) => `my-lib.${format}.js`
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['react', 'react-dom']
  }

})
