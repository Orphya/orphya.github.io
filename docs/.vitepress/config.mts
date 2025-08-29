import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Dark Land Chronicle",
  base: '/',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  
  themeConfig: {
    logo: {
      src: '/favicon.ico',
      width: 24,
      height: 24,
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Orphya/orphya.github.io' }
    ]
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        }
      }
    }
  }
})
