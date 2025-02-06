import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Dark Land Chronicle Wiki",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Language', link: '/' }
    ],

    sidebar: {
      '/chs/': [
        {
          collapsed: false,
          items: [
            { text: '主页', link: '/chs/' },
            { text: '教程', link: '/chs/教程/' },
            { text: '任务', link: '/chs/任务/' },
            { text: '背包', link: '/chs/背包/' },
            { text: '配方', link: '/chs/配方/' },
            { text: '地图', link: '/chs/地图/' },
            { text: 'NPC', link: '/chs/NPC/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/zfTxu5R6hn' },
      { icon: 'qq', link: 'https://qm.qq.com/q/mEHa0KzRkc' },
      { icon: 'github', link: 'https://github.com/Orphya/orphya.github.io' }
    ],

    footer: {
      copyright: "这是由玩家自发制作的数据库，游戏资源版权归原版权所有方 Winterfire Studio 所有。"
    }
  }
})
