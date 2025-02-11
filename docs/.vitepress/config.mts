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
            { text: '教程', link: '/chs/tutorial/' },
            { text: '任务', link: '/chs/quest/' },
            { text: '背包', link: '/chs/item/' },
            { text: '配方', link: '/chs/craft/' },
            { text: '地区', link: '/chs/region/' },
            { text: 'NPC', link: '/chs/npc/' }
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
      copyright: "A fan-made database made by players, all game assets are property of Winterfire Studio.<br />这是由玩家自发制作的数据库，游戏资源版权归原版权所有方 Winterfire Studio 所有。"
    }
  }
})
