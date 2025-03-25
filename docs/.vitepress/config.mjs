import { defineConfig } from 'vitepress'

import { chs } from './locales/chs.ts'
import { cht } from './locales/cht.ts'
import { en } from './locales/en.ts'
import { es } from './locales/es.ts'
import { fr } from './locales/fr.ts'
import { ja } from './locales/ja.ts'
import { ko } from './locales/ko.ts'
import { pl } from './locales/pl.ts'
import { pt } from './locales/pt.ts'
import { ru } from './locales/ru.ts'

export default defineConfig({
  appearance: 'force-dark',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: { src: '/favicon.ico', width: 24, height: 24 },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/zfTxu5R6hn' },
      { icon: 'github', link: 'https://github.com/Orphya/orphya.github.io' },
    ],

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Game Assets Copyright © Winterfire Studio'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear the query',
                footer: {
                  navigateText: 'to navigate',
                  selectText: 'to select',
                  closeText: 'to close'
                }
              }
            }
          },
          chs: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  navigateText: '切换',
                  selectText: '选择',
                  closeText: '退出'
                }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    root: { label: '', title: 'Dark Land Chronicle Wiki' },
    chs: { label: '简体中文', ...chs },
    cht: { label: '繁體中文', ...cht },
    en: { label: 'English', ...en },
    es: { label: 'Español', ...es },
    fr: { label: 'Français', ...fr },
    ja: { label: '日本語', ...ja },
    ko: { label: '한국어', ...ko },
    pl: { label: 'Język Polski', ...pl },
    pt: { label: 'Português', ...pt },
    ru: { label: 'Русский язык', ...ru },
  }
})
