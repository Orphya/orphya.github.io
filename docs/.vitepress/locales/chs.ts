import { DefaultTheme, defineConfig } from 'vitepress'

export const chs = defineConfig({
  lang: 'zh-Hans',
  title: '暗黑大陆编年史 Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/chs/guide/': { base: '/chs/guide/', items: sidebar_Guidelines() },
      '/chs/quest/': { base: '/chs/quest/', items: sidebar_Quest() },
      '/chs/region/': { base: '/chs/region/', items: sidebar_Region() },
      '/chs/data/': { base: '/chs/data/', items: sidebar_Data() },
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
      items: [
        { text: '基础指南', link: '/chs/guide/basic-guidelines'},
        { text: '进阶指南', link: '/chs/guide/advanced-guidelines'},
        { text: '世界观', link: '/chs/guide/world-views'},
        { text: '按键输入', link: '/chs/guide/game-input'}
      ]
    },
    {
      text: '任务',
      activeMatch: '/chs/quest/',
      link: '/chs/quest/list'
    },
    {
      text: '地区',
      activeMatch: '/chs/region/',
      link: '/chs/region/list'
    },
    {
      text: '智库',
      activeMatch: '/chs/data/',
      items: [
        { text: '物品', link: '/chs/data/inventory/list'},
        { text: '配方', link: '/chs/data/formula/list'}
      ]
    },
    {
      text: 'NPC',
      activeMatch: '/chs/npc/',
      link: '/chs/npc/list'
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
      items: [
        { text: '地下室里的东西', link: 'basement-things' },
        { text: '寒冷的夜', link: 'cold-night' },
        { text: '染料来源', link: 'collect-purple-flower' },
        { text: '看不见的战争', link: 'exchange-prisoner' },
        { text: '无骨之母', link: 'feed-boneless' },
        { text: '干柴烈火', link: 'find-guy' },
        { text: '森林警备队的试炼', link: 'forest-squad-final-training' },
        { text: '加入森林警备队', link: 'forest-squad-join' },
        { text: '森林警备队战技训练', link: 'forest-squad-training' },
        { text: '黄金项链', link: 'gold-necklace' },
        { text: '欢悦人生', link: 'happy-life' },
        { text: '调查异端', link: 'investigate-cult' },
        { text: '山中的男人', link: 'investigate-fat' },
        { text: '遗失的书籍', link: 'lost-book' },
        { text: '残破的归乡路', link: 'save-poor-daughter' },
        { text: '造访异兽牧场', link: 'visit-ranch' }
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '地区',
      link: 'list',
      items: [
        { text: '青铜道', link: 'bronze-path' },
        { text: '格罗加格森林外围', link: 'elf-forest-environs' },
        { text: '格罗加格森林小径', link: 'elf-forest-path' },
        { 
          text: '南部林地',
          link: 'goblin-forest',
          collapsed: true,
          items: [
            { text: '南部林地A', link: 'goblin-forest-a' },
            { text: '南部林地B', link: 'goblin-forest-b' },
            { text: '南部林地C', link: 'goblin-forest-c' },
            { text: '南部林地D', link: 'goblin-forest-d' }
          ]
        },
        { text: '哥布林监视营地', link: 'goblin-forest-environs' },
        { text: '哥布林村庄', link: 'goblin-village' },
        { text: '赫伦索尔', link: 'mini-south-village' },
        { 
          text: '枯瘦山棱',
          link: 'skinny-edge',
          collapsed: true,
          items: [
            { text: '母乳神庙', link: 'boneless-site-lactation' }
          ]
        },
        { text: '卡曼贾斯', link: 'south-village' },
        { text: '卡曼贾斯郊外', link: 'south-village-environs' },
        { text: '荒野十字路口', link: 'wildcross' }
      ]
    }
  ]
}

function sidebar_Data(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '物品',
      base: '/chs/data/inventory/',
      link: 'list',
      collapsed: false,
      items: [
        { text: '农业', link: 'agriculture' },
        { text: '箭矢', link: 'arrow' },
        { text: '书籍', link: 'book' },
        { text: '弓', link: 'bow' },
        { text: '料理', link: 'cuisine' },
        { text: '染色剂', link: 'dye' },
        { text: '装备', link: 'equipment' },
        { text: '信件', link: 'letter' },
        { text: '魔法道具', link: 'magical-item' },
        { text: '主原料', link: 'main-ingredient' },
        { text: '地图', link: 'map' },
        { text: '医药', link: 'medical' },
        { text: '矿石', link: 'mineral' },
        { text: '药水', link: 'potion' },
        { text: '任务道具', link: 'quest-item' },
        { text: '食物', link: 'raw-food' },
        { text: '素材', link: 'resource' },
        { text: '矛', link: 'spear' },
        { text: '特殊', link: 'special' },
        { text: '副原料', link: 'subingredient' },
        { text: '刀剑', link: 'sword' },
        { text: '工具', link: 'tool' },
        { text: '贵重物品', link: 'treasure' },
        { text: '鞭子', link: 'whip' }
      ]
    },
    {
      text: '配方',
      base: '/chs/data/formula/',
      link: 'list',
      collapsed: false,
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
