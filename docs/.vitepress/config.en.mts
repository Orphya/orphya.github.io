import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Dark Land Chronicle',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    siteTitle: 'Dark Land Chronicle',

    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Wiki', link: '/en/wiki/' },
      { text: 'Change Log', link: '/en/changelog/' },
    ],

    sidebar: {
      '/en/wiki': [],
    },

    footer: {
      message: '',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search',
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate',
            },
          },
        },
      },
    },
  },
})
