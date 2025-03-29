import { DefaultTheme, defineConfig } from 'vitepress'

export const pt = defineConfig({
  lang: 'pt-PT',
  title: 'Crônica da Terra Sombria Semana',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/pt/guide/': { base: '/pt/guide/', items: sidebar_Guidelines() },
      '/pt/quest/': { base: '/pt/quest/', items: sidebar_Quest() },
      '/pt/region/': { base: '/pt/region/', items: sidebar_Region() },
      '/pt/item/': { base: '/pt/item/', items: sidebar_Item() },
      '/pt/npc/': { base: '/pt/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Ativos do jogo Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: 'Seção anterior',
      next: 'Próxima secção'
    },

    outline: {
      label: 'Navegação de página'
    },

    lastUpdated: {
      text: 'Última atualização em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Multilíngue',
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Mudar para o modo claro',
    darkModeSwitchTitle: 'Mudar para o modo escuro',
    skipToContentLabel: 'Saltar para'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guia',
      activeMatch: '/pt/guide/',
      link: '/pt/guide/',
    },
    {
      text: 'Missões',
      activeMatch: '/pt/quest/',
      link: '/pt/quest/',
    },
    {
      text: 'Coisa',
      activeMatch: '/pt/item/',
      link: '/pt/item/',
    },
    {
      text: 'Região',
      activeMatch: '/pt/region/',
      link: '/pt/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/pt/npc/',
      link: '/pt/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guia',
      items: [
        { text: 'Guia Básico', link: 'basic-guidelines' },
        { text: 'Guia Avançado', link: 'advanced-guidelines' },
        { text: 'Visão do mundo', link: 'world-views' },
        { text: 'Configurações do jogo', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Lista de missões',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Coisa',
      base: '/pt/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'Agricultura', link: 'agriculture' },
        { text: 'Arco', link: 'bow' },
        { text: 'Carta', link: 'letter' },
        { text: 'Chicote', link: 'whip' },
        { text: 'Comida', link: 'raw-food' },
        { text: 'Cozinha', link: 'cuisine' },
        { text: 'Equipamento', link: 'equipment' },
        { text: 'Espada', link: 'sword' },
        { text: 'Especial', link: 'special' },
        { text: 'Ferramenta', link: 'tool' },
        { text: 'Ingrediente principal', link: 'main-ingredient' },
        { text: 'Item de missão', link: 'quest-item' },
        { text: 'Item Mágico', link: 'magical-item' },
        { text: 'Lança', link: 'spear' },
        { text: 'Livros', link: 'book' },
        { text: 'Mapa', link: 'map' },
        { text: 'Médico', link: 'medical' },
        { text: 'Mineral', link: 'mineral' },
        { text: 'Poção', link: 'potion' },
        { text: 'Recurso', link: 'resource' },
        { text: 'Seta', link: 'arrow' },
        { text: 'Subingrediente', link: 'subingredient' },
        { text: 'Tesouro', link: 'treasure' },
        { text: 'Tingir', link: 'dye' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Região',
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
