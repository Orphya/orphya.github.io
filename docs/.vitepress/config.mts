import footnote_plugin from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

// Locales
import chs from './config.chs.mts'
import en from './config.en.mts'

export default defineConfig({
  title: "Dark Land Chronicle",

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

  locales: {
    chs: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/chs/',
      themeConfig: chs.themeConfig,
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: en.themeConfig,
    },
  },

  markdown: {
    config: (md) => {
      md.use(footnote_plugin)
    }
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        }
      }
    }
  }
})
