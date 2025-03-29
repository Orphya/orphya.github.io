import { DefaultTheme, defineConfig } from 'vitepress'

export const ru = defineConfig({
  lang: 'ru-RU',
  title: 'Хроники Темных земель Неделя',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ru/guide/': { base: '/ru/guide/', items: sidebar_Guidelines() },
      '/ru/quest/': { base: '/ru/quest/', items: sidebar_Quest() },
      '/ru/region/': { base: '/ru/region/', items: sidebar_Region() },
      '/ru/item/': { base: '/ru/item/', items: sidebar_Item() },
      '/ru/npc/': { base: '/ru/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: 'Игровые активы Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: 'Предыдущий раздел',
      next: 'Следующий раздел'
    },

    outline: {
      label: 'Навигация по странице'
    },

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Многоязычный',
    returnToTopLabel: 'Вернуться наверх',
    sidebarMenuLabel: 'Mеню',
    darkModeSwitchLabel: 'Tема',
    lightModeSwitchTitle: 'Переключиться в светлый режим',
    darkModeSwitchTitle: 'Переключиться в темный режим',
    skipToContentLabel: 'Перейти к'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Гид',
      activeMatch: '/ru/guide/',
      link: '/ru/guide/',
    },
    {
      text: 'Квесты',
      activeMatch: '/ru/quest/',
      link: '/ru/quest/',
    },
    {
      text: 'Предмет',
      activeMatch: '/ru/item/',
      link: '/ru/item/',
    },
    {
      text: 'Область',
      activeMatch: '/ru/region/',
      link: '/ru/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/ru/npc/',
      link: '/ru/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Гид',
      items: [
        { text: 'Базовое руководство', link: 'basic-guidelines' },
        { text: 'Расширенное руководство', link: 'advanced-guidelines' },
        { text: 'Мировоззрение', link: 'world-views' },
        { text: 'Настройки игры', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: 'Список квестов',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Предмет',
      base: '/ru/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: 'Главный ингридиент', link: 'main-ingredient' },
        { text: 'Еда', link: 'raw-food' },
        { text: 'Зелье', link: 'potion' },
        { text: 'Инструмент', link: 'tool' },
        { text: 'Карта', link: 'map' },
        { text: 'Квестовый предмет', link: 'quest-item' },
        { text: 'Книги', link: 'book' },
        { text: 'Копье', link: 'spear' },
        { text: 'Краситель', link: 'dye' },
        { text: 'Кухня', link: 'cuisine' },
        { text: 'Магический предмет', link: 'magical-item' },
        { text: 'Медицинский', link: 'medical' },
        { text: 'Меч', link: 'sword' },
        { text: 'Минеральная', link: 'mineral' },
        { text: 'Оборудование', link: 'equipment' },
        { text: 'Особенный', link: 'special' },
        { text: 'Письмо', link: 'letter' },
        { text: 'Поклон', link: 'bow' },
        { text: 'Ресурс', link: 'resource' },
        { text: 'Cельское хозяйство', link: 'agriculture' },
        { text: 'Сокровище', link: 'treasure' },
        { text: 'Стрелка', link: 'arrow' },
        { text: 'Cубингредиент', link: 'subingredient' },
        { text: 'Хлыст', link: 'whip' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Область',
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
