import { DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: 'Dark Land Chronicle Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebar_Guidelines() },
      '/en/quest/': { base: '/en/quest/', items: sidebar_Quest() },
      '/en/region/': { base: '/en/region/', items: sidebar_Region() },
      '/en/item/': { base: '/en/item/', items: sidebar_Item() },
      '/en/npc/': { base: '/en/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Game Assets Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: 'Prev',
      next: 'Next'
    },

    outline: {
      label: 'Navigation'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Multi Language',
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Mode',
    lightModeSwitchTitle: 'Switch to Light Mode',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    skipToContentLabel: 'Jump to'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      activeMatch: '/en/guide/',
      link: '/en/guide/',
    },
    {
      text: 'Quest',
      activeMatch: '/en/quest/',
      link: '/en/quest/',
    },
    {
      text: 'Item',
      activeMatch: '/en/item/',
      link: '/en/item/',
    },
    {
      text: 'Region',
      activeMatch: '/en/region/',
      link: '/en/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/en/npc/',
      link: '/en/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guidelines',
      items: [
        { text: 'Basic Guides', link: 'basic-guidelines' },
        { text: 'Advanced Guides', link: 'advanced-guidelines' },
        { text: 'World Wiew', link: 'world-views' },
        { text: 'Game Settings', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Quest List',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Items',
      base: '/en/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'Agriculture', link: 'agriculture' },
        { text: 'Arrow', link: 'arrow' },
        { text: 'Books', link: 'book' },
        { text: 'Bow', link: 'bow' },
        { text: 'Cuisine', link: 'cuisine' },
        { text: 'Dye', link: 'dye' },
        { text: 'Equipment', link: 'equipment' },
        { text: 'Food', link: 'raw-food' },
        { text: 'Letter', link: 'letter' },
        { text: 'Magical Item', link: 'magical-item' },
        { text: 'Main Ingredient', link: 'main-ingredient' },
        { text: 'Map', link: 'map' },
        { text: 'Medical', link: 'medical' },
        { text: 'Mineral', link: 'mineral' },
        { text: 'Potion', link: 'potion' },
        { text: 'Quest Item', link: 'quest-item' },
        { text: 'Resource', link: 'resource' },
        { text: 'Spear', link: 'spear' },
        { text: 'Special', link: 'special' },
        { text: 'Subingredient', link: 'subingredient' },
        { text: 'Sword', link: 'sword' },
        { text: 'Tool', link: 'tool' },
        { text: 'Treasure', link: 'treasure' },
        { text: 'Whip', link: 'whip' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Region',
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
