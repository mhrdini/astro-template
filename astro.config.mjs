import path from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// import { loadEnv } from 'vite'

// const {
//   <-- insert environment variable values here -->
//  } = loadEnv(
//   import.meta.env.MODE,
//   process.cwd(),
//   '',
// )

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
})
