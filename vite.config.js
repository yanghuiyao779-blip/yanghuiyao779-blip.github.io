import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

function resolveBase() {
  if (process.env.VITE_BASE_PATH) return process.env.VITE_BASE_PATH
  if (!process.env.GITHUB_ACTIONS) return '/'

  const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/')
  if (!repo || repo === `${owner}.github.io`) return '/'
  return `/${repo}/`
}

export default defineConfig({
  plugins: [tailwindcss()],
  base: resolveBase(),
  build: {
    sourcemap: false,
  },
})
