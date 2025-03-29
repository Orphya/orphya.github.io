import { DefaultTheme, defineConfig } from 'vitepress'

export const ja = defineConfig({
  lang: 'ja-JP',
  title: 'ダークランド・クロニクル Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ja/guide/': { base: '/ja/guide/', items: sidebar_Guidelines() },
      '/ja/quest/': { base: '/ja/quest/', items: sidebar_Quest() },
      '/ja/region/': { base: '/ja/region/', items: sidebar_Region() },
      '/ja/item/': { base: '/ja/item/', items: sidebar_Item() },
      '/ja/npc/': { base: '/ja/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'ゲームアセット Copyright © 冬火工房'
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },

    outline: {
      label: 'ナビゲーション'
    },

    lastUpdated: {
      text: '最終更新日',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多言語',
    returnToTopLabel: 'トップに戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替える',
    darkModeSwitchTitle: 'ダークモードに切り替える',
    skipToContentLabel: 'ジャンプ'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'ガイド',
      activeMatch: '/ja/guide/',
      link: '/ja/guide/',
    },
    {
      text: '課題',
      activeMatch: '/ja/quest/',
      link: '/ja/quest/',
    },
    {
      text: 'こと',
      activeMatch: '/ja/item/',
      link: '/ja/item/',
    },
    {
      text: '地域',
      activeMatch: '/ja/region/',
      link: '/ja/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/ja/npc/',
      link: '/ja/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ガイド',
      items: [
        { text: '基本ガイド', link: 'basic-guidelines' },
        { text: '上級ガイド', link: 'advanced-guidelines' },
        { text: '世界観', link: 'world-views' },
        { text: 'ゲーム設定', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'クエストリスト',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'こと',
      base: '/ja/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'クエストアイテム', link: 'quest-item' },
        { text: 'ホイップ', link: 'whip' },
        { text: 'ミネラル', link: 'mineral' },
        { text: 'リソース', link: 'resource' },
        { text: '本', link: 'book' },
        { text: '道具', link: 'tool' },
        { text: '地図', link: 'map' },
        { text: '副原料', link: 'subingredient' },
        { text: '弓', link: 'bow' },
        { text: '貴重品', link: 'treasure' },
        { text: '剣', link: 'sword' },
        { text: '料理', link: 'cuisine' },
        { text: '魔法のアイテム', link: 'magical-item' },
        { text: '農業', link: 'agriculture' },
        { text: '槍', link: 'spear' },
        { text: '染料', link: 'dye' },
        { text: '食べ物', link: 'raw-food' },
        { text: '矢印', link: 'arrow' },
        { text: '手紙', link: 'letter' },
        { text: '特別', link: 'special' },
        { text: '薬', link: 'potion' },
        { text: '医学', link: 'medical' },
        { text: '主成分', link: 'main-ingredient' },
        { text: '装置', link: 'equipment' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '地域',
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
