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
      '/en/data/': { base: '/en/data/', items: sidebar_Data() },
      '/en/npc/': { base: '/en/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Game Assets Copyright © 冬火工房'
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    outline: {
      label: 'On This Page'
    },

    lastUpdated: {
      text: 'LastuUpdated:',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Multi Languages',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    skipToContentLabel: 'Jump to'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guides',
      activeMatch: '/en/guide/',
      items: [
        { text: 'Basic Guides', link: '/en/guide/basic-guidelines'},
        { text: 'Advanced Guides', link: '/en/guide/advanced-guidelines'},
        { text: 'World Views', link: '/en/guide/world-views'},
        { text: 'Game Input', link: '/en/guide/game-input'}
      ]
    },
    {
      text: 'Quests',
      activeMatch: '/en/quest/',
      link: '/en/quest/list'
    },
    {
      text: 'Regions',
      activeMatch: '/en/region/',
      link: '/en/region/list'
    },
    {
      text: 'Data Bank',
      activeMatch: '/en/data/',
      items: [
        { text: '物品', link: '/en/data/inventory/list'},
        { text: '配方', link: '/en/data/formula/list'}
      ]
    },
    {
      text: 'NPC',
      activeMatch: '/en/npc/',
      link: '/en/npc/list'
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guides',
      items: [
        { text: 'Basic Guides', link: 'basic-guidelines' },
        { text: 'Advanced Guides', link: 'advanced-guidelines' },
        { text: 'Game Views', link: 'world-views' },
        { text: 'Game Input', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Quest List',
      link: 'list',
      items: [
        { text: 'Underground Basement', link: 'basement-things' },
        { text: 'Cold Night', link: 'cold-night' },
        { text: 'Dye Source', link: 'collect-purple-flower' },
        { text: 'Invisible War', link: 'exchange-prisoner' },
        { text: 'Mother of the Boneless Ones', link: 'feed-boneless' },
        { text: 'Burning Desires', link: 'find-guy' },
        { text: 'Trial of the Forest Ranger', link: 'forest-squad-final-training' },
        { text: 'Joining the Forest Ranger', link: 'forest-squad-join' },
        { text: 'Forest Ranger Combat Training', link: 'forest-squad-training' },
        { text: 'Gold Necklace', link: 'gold-necklace' },
        { text: 'A Joyful Life', link: 'happy-life' },
        { text: 'Investigate Heresy', link: 'investigate-cult' },
        { text: 'The Man in the Mountains', link: 'investigate-fat' },
        { text: 'The Lost Book', link: 'lost-book' },
        { text: 'The Dilapidated Road Home', link: 'save-poor-daughter' },
        { text: 'Visit the Arcane Beast Ranch', link: 'visit-ranch' }
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Regions',
      link: 'list',
      items: [
        { text: 'Bronzepass', link: 'bronze-path' },
        { text: 'Groggar Forest Perimeter', link: 'elf-forest-environs' },
        { text: 'Grogga Forest Trail', link: 'elf-forest-path' },
        { 
          text: 'Southern Timberland',
          link: 'goblin-forest',
          collapsed: true,
          items: [
            { text: 'Southern Timberland A', link: 'goblin-forest-a' },
            { text: 'Southern Timberland B', link: 'goblin-forest-b' },
            { text: 'Southern Timberland C', link: 'goblin-forest-c' },
            { text: 'Southern Timberland D', link: 'goblin-forest-d' }
          ]
        },
        { text: 'Goblin Surveillance Camp', link: 'goblin-forest-environs' },
        { text: 'Goblin Village', link: 'goblin-village' },
        { text: 'Hrunthall', link: 'mini-south-village' },
        { 
          text: 'Skinny Edge',
          link: 'skinny-edge',
          collapsed: true,
          items: [
            { text: 'Lactation Temple', link: 'boneless-site-lactation' }
          ]
        },
        { text: 'Kharmangas', link: 'south-village' },
        { text: 'Kharmangas Environs', link: 'south-village-environs' },
        { text: 'Wildcross', link: 'wildcross' }
      ]
    }
  ]
}

function sidebar_Data(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Item Category',
      base: '/en/data/inventory/',
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
        { text: 'Letter', link: 'letter' },
        { text: 'Magical Item', link: 'magical-item' },
        { text: 'Main Ingredient', link: 'main-ingredient' },
        { text: 'Map', link: 'map' },
        { text: 'Medical', link: 'medical' },
        { text: 'Mineral', link: 'mineral' },
        { text: 'Potion', link: 'potion' },
        { text: 'Quest Item', link: 'quest-item' },
        { text: 'Food', link: 'raw-food' },
        { text: 'Resource', link: 'resource' },
        { text: 'Spear', link: 'spear' },
        { text: 'Special', link: 'special' },
        { text: 'Subingredient', link: 'subingredient' },
        { text: 'Sword', link: 'sword' },
        { text: 'Tool', link: 'tool' },
        { text: 'Treasure', link: 'treasure' },
        { text: 'Whip', link: 'whip' }
      ]
    },
    {
      text: 'Crafting',
      base: '/en/data/formula/',
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
