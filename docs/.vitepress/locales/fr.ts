import { DefaultTheme, defineConfig } from 'vitepress'

export const fr = defineConfig({
  lang: 'fr-FR',
  title: 'Dark Land Chronicle Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/fr/guide/': { base: '/fr/guide/', items: sidebar_Guidelines() },
      '/fr/quest/': { base: '/fr/quest/', items: sidebar_Quest() },
      '/fr/region/': { base: '/fr/region/', items: sidebar_Region() },
      '/fr/item/': { base: '/fr/item/', items: sidebar_Item() },
      '/fr/npc/': { base: '/fr/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Ressources du jeu Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    outline: {
      label: 'Navigation'
    },

    lastUpdated: {
      text: 'Dernière mise à jour le',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Multilingue',
    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Thème',
    lightModeSwitchTitle: 'Passer en mode clair',
    darkModeSwitchTitle: 'Passer en mode sombre',
    skipToContentLabel: 'Aller à'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      activeMatch: '/fr/guide/',
      link: '/fr/guide/',
    },
    {
      text: 'Quête',
      activeMatch: '/fr/quest/',
      link: '/fr/quest/',
    },
    {
      text: 'Objet',
      activeMatch: '/fr/item/',
      link: '/fr/item/',
    },
    {
      text: 'Région',
      activeMatch: '/fr/region/',
      link: '/fr/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/fr/npc/',
      link: '/fr/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Guide de base', link: 'basic-guidelines' },
        { text: 'Guide avancé', link: 'advanced-guidelines' },
        { text: 'Vision du monde', link: 'world-views' },
        { text: 'Paramètres du jeu', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Liste des quêtes',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Objet',
      base: '/fr/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'Agriculture', link: 'agriculture' },
        { text: 'Arc', link: 'bow' },
        { text: 'Carte', link: 'map' },
        { text: 'Colorant', link: 'dye' },
        { text: 'Cuisine', link: 'cuisine' },
        { text: 'Épée', link: 'sword' },
        { text: 'Équipement', link: 'equipment' },
        { text: 'Flèche', link: 'arrow' },
        { text: 'Fouet', link: 'whip' },
        { text: 'Ingrédient principal', link: 'main-ingredient' },
        { text: 'Lance', link: 'spear' },
        { text: 'Lettre', link: 'letter' },
        { text: 'Livres', link: 'book' },
        { text: 'Médical', link: 'medical' },
        { text: 'Minéral', link: 'mineral' },
        { text: 'Nourriture', link: 'raw-food' },
        { text: 'Objet de quête', link: 'quest-item' },
        { text: 'Objet magique', link: 'magical-item' },
        { text: 'Outil', link: 'tool' },
        { text: 'Potion', link: 'potion' },
        { text: 'Ressource', link: 'resource' },
        { text: 'Sous-ingrédient', link: 'subingredient' },
        { text: 'Spécial', link: 'special' },
        { text: 'Trésor', link: 'treasure' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Région',
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
