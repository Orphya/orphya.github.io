import { DefaultTheme, defineConfig } from 'vitepress'

export const ko = defineConfig({
  lang: 'zh-Hans',
  title: '暗黑大陆编年史 Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/chs/guide/': { base: '/chs/guide/', items: sidebar_Guidelines() },
      '/chs/quest/': { base: '/chs/quest/', items: sidebar_Quest() },
      '/chs/region/': { base: '/chs/region/', items: sidebar_Region() },
      '/chs/item/': { base: '/chs/item/', items: sidebar_Item() },
      '/chs/npc/': { base: '/chs/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: '游戏资产 Copyright © 冬火工房'
    },

    docFooter: {
      prev: '上一节',
      next: '下一节'
    },

    outline: {
      label: '页面导航'
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
    skipToContentLabel: '跳转到内容'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      activeMatch: '/chs/guide/',
      link: '/chs/guide/',
    },
    {
      text: '任务',
      activeMatch: '/chs/quest/',
      link: '/chs/quest/',
    },
    {
      text: '物品',
      activeMatch: '/chs/item/',
      link: '/chs/item/',
    },
    {
      text: '地区',
      activeMatch: '/chs/region/',
      link: '/chs/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/chs/npc/',
      link: '/chs/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '基础指南', link: 'basic-guidelines' },
        { text: '进阶指南', link: 'advanced-guidelines' },
        { text: '世界观', link: 'world-views' },
        { text: '游戏输入', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: '任务列表',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '物品',
      base: '/chs/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: '鞭子', link: 'whip' },
        { text: '刀剑', link: 'sword' },
        { text: '地图', link: 'map' },
        { text: '副原料', link: 'subingredient' },
        { text: '工具', link: 'tool' },
        { text: '弓', link: 'bow' },
        { text: '贵重物品', link: 'treasure' },
        { text: '箭矢', link: 'arrow' },
        { text: '矿石', link: 'mineral' },
        { text: '料理', link: 'cuisine' },
        { text: '矛', link: 'spear' },
        { text: '魔法道具', link: 'magical-item' },
        { text: '农业', link: 'agriculture' },
        { text: '染色剂', link: 'dye' },
        { text: '任务道具', link: 'quest-item' },
        { text: '食物', link: 'raw-food' },
        { text: '书籍', link: 'book' },
        { text: '素材', link: 'resource' },
        { text: '特殊', link: 'special' },
        { text: '信件', link: 'letter' },
        { text: '药水', link: 'potion' },
        { text: '医药', link: 'medical' },
        { text: '主原料', link: 'main-ingredient' },
        { text: '装备', link: 'equipment' }
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '地区',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_NPC(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'NPC',
      link: 'list',
      items: []
    }
  ]
}
