import { DefaultTheme, defineConfig } from 'vitepress'

export const pl = defineConfig({
  lang: 'pl-PL',
  title: 'Kroniki Mrocznego Lądu Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/pl/guide/': { base: '/pl/guide/', items: sidebar_Guidelines() },
      '/pl/quest/': { base: '/pl/quest/', items: sidebar_Quest() },
      '/pl/region/': { base: '/pl/region/', items: sidebar_Region() },
      '/pl/item/': { base: '/pl/item/', items: sidebar_Item() },
      '/pl/npc/': { base: '/pl/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Zasoby gry Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: 'Poprzedni rozdział',
      next: 'Następny rozdział'
    },

    outline: {
      label: 'Nawigacja strony'
    },

    lastUpdated: {
      text: 'Ostatnia aktualizacja',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Wielojęzyczny',
    returnToTopLabel: 'Powrót na górę',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Motyw',
    lightModeSwitchTitle: 'Przełącz na tryb jasny',
    darkModeSwitchTitle: 'Przełącz na tryb ciemny',
    skipToContentLabel: 'Przejdź do'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Przewodnik',
      activeMatch: '/pl/guide/',
      link: '/pl/guide/',
    },
    {
      text: 'Questy',
      activeMatch: '/pl/quest/',
      link: '/pl/quest/',
    },
    {
      text: 'Przedmiot',
      activeMatch: '/pl/item/',
      link: '/pl/item/',
    },
    {
      text: 'Region',
      activeMatch: '/pl/region/',
      link: '/pl/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/pl/npc/',
      link: '/pl/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Przewodnik',
      items: [
        { text: 'Podstawowy przewodnik', link: 'basic-guidelines' },
        { text: 'Zaawansowany przewodnik', link: 'advanced-guidelines' },
        { text: 'Światopogląd', link: 'world-views' },
        { text: 'Ustawienia gry', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Lista questów',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Przedmiot',
      base: '/pl/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'barwnik', link: 'dye' },
        { text: 'bicz', link: 'whip' },
        { text: 'główny składnik', link: 'main-ingredient' },
        { text: 'książka', link: 'book' },
        { text: 'kuchnia', link: 'cuisine' },
        { text: 'list', link: 'letter' },
        { text: 'łuk', link: 'bow' },
        { text: 'magiczny przedmiot', link: 'magical-item' },
        { text: 'mapa', link: 'map' },
        { text: 'medyczny', link: 'medical' },
        { text: 'miecz', link: 'sword' },
        { text: 'mikstura', link: 'potion' },
        { text: 'minerał', link: 'mineral' },
        { text: 'narzędzie', link: 'tool' },
        { text: 'podskładnik', link: 'subingredient' },
        { text: 'przedmiot zadania', link: 'quest-item' },
        { text: 'rolnictwo', link: 'agriculture' },
        { text: 'skarb', link: 'treasure' },
        { text: 'specjalny', link: 'special' },
        { text: 'sprzęt', link: 'equipment' },
        { text: 'strzała', link: 'arrow' },
        { text: 'surowe jedzenie', link: 'raw-food' },
        { text: 'włócznia', link: 'spear' },
        { text: 'zasób', link: 'resource' },
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
