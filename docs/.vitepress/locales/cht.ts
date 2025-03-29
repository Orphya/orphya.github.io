import { DefaultTheme, defineConfig } from 'vitepress'

export const cht = defineConfig({
  lang: 'zh-Hant',
  title: '暗黑大陸編年史 Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/cht/guide/': { base: '/cht/guide/', items: sidebar_Guidelines() },
      '/cht/quest/': { base: '/cht/quest/', items: sidebar_Quest() },
      '/cht/region/': { base: '/cht/region/', items: sidebar_Region() },
      '/cht/item/': { base: '/cht/item/', items: sidebar_Item() },
      '/cht/npc/': { base: '/cht/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: '游戲資產 Copyright © 冬火工房'
    },

    docFooter: {
      prev: '上一節',
      next: '下一節'
    },

    outline: {
      label: '頁面導航'
    },

    lastUpdated: {
      text: '最後更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多語言',
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '菜單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    skipToContentLabel: '跳轉到内容'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      activeMatch: '/cht/guide/',
      link: '/cht/guide/',
    },
    {
      text: '任務',
      activeMatch: '/cht/quest/',
      link: '/cht/quest/',
    },
    {
      text: '物品',
      activeMatch: '/cht/item/',
      link: '/cht/item/',
    },
    {
      text: '地區',
      activeMatch: '/cht/region/',
      link: '/cht/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/cht/npc/',
      link: '/cht/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '基礎指南', link: 'basic-guidelines' },
        { text: '進階指南', link: 'advanced-guidelines' },
        { text: '世界觀', link: 'world-views' },
        { text: '游戲輸入', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: '任務列表',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '物品',
      base: '/cht/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: '鞭子', link: 'whip' },
        { text: '刀劍', link: 'sword' },
        { text: '地圖', link: 'map' },
        { text: '副原料', link: 'subingredient' },
        { text: '工具', link: 'tool' },
        { text: '弓', link: 'bow' },
        { text: '貴重物品', link: 'treasure' },
        { text: '箭矢', link: 'arrow' },
        { text: '礦石', link: 'mineral' },
        { text: '料理', link: 'cuisine' },
        { text: '矛', link: 'spear' },
        { text: '魔法道具', link: 'magical-item' },
        { text: '農業', link: 'agriculture' },
        { text: '染色劑', link: 'dye' },
        { text: '任務道具', link: 'quest-item' },
        { text: '食物', link: 'raw-food' },
        { text: '書籍', link: 'book' },
        { text: '素材', link: 'resource' },
        { text: '特殊', link: 'special' },
        { text: '信件', link: 'letter' },
        { text: '藥水', link: 'potion' },
        { text: '醫藥', link: 'medical' },
        { text: '主原料', link: 'main-ingredient' },
        { text: '裝備', link: 'equipment' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '地區',
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
