import { DefaultTheme, defineConfig } from 'vitepress'

export const es = defineConfig({
  lang: 'es-ES',
  title: 'Crónica de la Tierra Oscura Wiki',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/es/guide/': { base: '/es/guide/', items: sidebar_Guidelines() },
      '/es/quest/': { base: '/es/quest/', items: sidebar_Quest() },
      '/es/region/': { base: '/es/region/', items: sidebar_Region() },
      '/es/item/': { base: '/es/item/', items: sidebar_Item() },
      '/es/npc/': { base: '/es/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Recursos del juego Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },

    outline: {
      label: 'Navegación'
    },

    lastUpdated: {
      text: 'Última actualización el',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Plurilingüe',
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Cambiar al modo claro',
    darkModeSwitchTitle: 'Cambiar al modo oscuro',
    skipToContentLabel: 'Saltar al'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guía',
      activeMatch: '/es/guide/',
      link: '/es/guide/',
    },
    {
      text: 'Tarea',
      activeMatch: '/es/quest/',
      link: '/es/quest/',
    },
    {
      text: 'Cosa',
      activeMatch: '/es/item/',
      link: '/es/item/',
    },
    {
      text: 'Región',
      activeMatch: '/es/region/',
      link: '/es/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/es/npc/',
      link: '/es/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guía',
      items: [
        { text: 'Guía básica', link: 'basic-guidelines' },
        { text: 'Guía avanzada', link: 'advanced-guidelines' },
        { text: 'Visión del mundo', link: 'world-views' },
        { text: 'Configuración del juego', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Tareas',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Cosa',
      base: '/es/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'Agricultura', link: 'agriculture' },
        { text: 'Alimento', link: 'raw-food' },
        { text: 'Arco', link: 'bow' },
        { text: 'Carta', link: 'letter' },
        { text: 'Cocina', link: 'cuisine' },
        { text: 'Equipo', link: 'equipment' },
        { text: 'Espada', link: 'sword' },
        { text: 'Especial', link: 'special' },
        { text: 'Flecha', link: 'arrow' },
        { text: 'Herramienta', link: 'tool' },
        { text: 'Ingrediente principal', link: 'main-ingredient' },
        { text: 'Lanza', link: 'spear' },
        { text: 'Látigo', link: 'whip' },
        { text: 'Libros', link: 'book' },
        { text: 'Mapa', link: 'map' },
        { text: 'Médico', link: 'medical' },
        { text: 'Mineral', link: 'mineral' },
        { text: 'Objeto de misión', link: 'quest-item' },
        { text: 'Objeto mágico', link: 'magical-item' },
        { text: 'Poción', link: 'potion' },
        { text: 'Recurso', link: 'resource' },
        { text: 'Subingrediente', link: 'subingredient' },
        { text: 'Teñir', link: 'dye' },
        { text: 'Tesoro', link: 'treasure' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Región',
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
