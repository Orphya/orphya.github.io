import { defineConfig } from 'vitepress'

import { en } from './locales/en'
import { chs } from './locales/chs'

export default defineConfig({
  appearance: 'force-dark',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: {src: '/favicon.ico', width: 24, height: 24},
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/zfTxu5R6hn' },
      { icon: 'qq', link: 'https://qm.qq.com/q/mEHa0KzRkc' },
      { icon: 'github', link: 'https://github.com/Orphya/orphya.github.io' },
      { icon: 'crowdin', link: 'https://crowdin.com/project/dark-land-chronical-wiki' }
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
    root: {
      label: '',
      title: 'Dark Land Chronicle Wiki'
    },
    en: { label: 'English', ...en },
    chs: { label: '简体中文', ...chs }
  }
})
