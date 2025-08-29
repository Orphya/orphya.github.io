import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '黑暗大陆编年史',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    siteTitle: '黑暗大陆编年史',

    nav: [
      { text: '主页', link: '/chs/', activeMatch: '^/chs/$' },
      { text: '百科', link: '/chs/wiki/', activeMatch: '^/chs/wiki/' },
      { text: '社区',
        items: [
          { text: '团队', link: '/chs/community/team', activeMatch: '^/chs/community/team' },
          { text: '贡献者', link: '/chs/community/contributors', activeMatch: '^/chs/community/contributors' },
          { text: '规则', link: '/chs/community/rules', activeMatch: '^/chs/community/rules' },
          { text: 'Discord 服务器', link: 'https://discord.gg/zfTxu5R6hn' },
        ],
        activeMatch: '^/chs/community/' },
      { text: '更新日志', link: '/chs/changelog/', activeMatch: '^/chs/changelog/' },
    ],

    sidebar: {
      '/chs/wiki/item/': { base: '/chs/wiki/item/', items: sidebarItem() },
    },

    footer: {
      message: '社区内容除另有注明外，均在 CC-BY-SA 许可协议下提供。',
    },

    docFooter: {
      prev: '上一节',
      next: '下一节',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '重置搜索',
            footer: {
              selectText: '选择',
              navigateText: '导航',
            },
          },
        },
      },
    },
  },
})

function sidebarItem(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '生存', link: 'category.survival', collapsed: false, items: [
        { text: '主原料', link: 'class.ingredient' },
        { text: '副原料', link: 'class.subingredient' },
        { text: '农业', link: 'class.agriculture' },
        { text: '种子', link: 'class.seed' },
      ]
    },
    {
      text: '装备', link: 'category.equipment', collapsed: false, items: [
        { text: '装备', link: 'class.equipment' }
      ]
    },
    {
      text: '武器', link: 'category.weapon', collapsed: false, items: [
        { text: '鞭子', link: 'class.whip' },
        { text: '刀剑', link: 'class.sword' },
        { text: '弓', link: 'class.bow' },
        { text: '箭矢', link: 'class.arrow' },
        { text: '矛', link: 'class.spear' },
        { text: '近战武器', link: 'class.melee' },
        { text: '远程武器', link: 'class.range' }
      ]
    },
    {
      text: '工具', link: 'category.tool', collapsed: false, items: [
        { text: '工具', link: 'class.tool' },
        { text: '陷阱', link: 'class.trap' }
      ]
    },
    {
      text: '背包', link: 'category.backpack', collapsed: false, items: [
        { text: '地图', link: 'class.map' },
        { text: '矿石', link: 'class.mineral' },
        { text: '料理', link: 'class.cuisine' },
        { text: '食物', link: 'class.food' },
        { text: '书籍', link: 'class.book' },
        { text: '信件', link: 'class.letter' },
        { text: '药水', link: 'class.potion' },
        { text: '医药', link: 'class.medical' }
      ]
    },
    {
      text: '特殊', link: 'category.special', collapsed: false, items: [
        { text: '贵重物品', link: 'class.treasure' },
        { text: '建筑包', link: 'class.buildkit' },
        { text: '垃圾', link: 'class.garbage' },
        { text: '染色剂', link: 'class.dye' },
        { text: '魔法道具', link: 'class.magical' },
        { text: '任务道具', link: 'class.quest' },
        { text: '素材', link: 'class.resource' },
        { text: '特殊', link: 'class.special' }
      ]
    }
  ]
}
