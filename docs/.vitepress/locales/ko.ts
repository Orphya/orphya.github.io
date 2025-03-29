import { DefaultTheme, defineConfig } from 'vitepress'

export const ko = defineConfig({
  lang: 'ko-KR',
  title: '다크 랜드 크로니 위키',
  description: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ko/guide/': { base: '/ko/guide/', items: sidebar_Guidelines() },
      '/ko/quest/': { base: '/ko/quest/', items: sidebar_Quest() },
      '/ko/region/': { base: '/ko/region/', items: sidebar_Region() },
      '/ko/item/': { base: '/ko/item/', items: sidebar_Item() },
      '/ko/npc/': { base: '/ko/npc/', items: sidebar_NPC() }
    },

    footer: {
      message: '<a href="https://github.com/Orphya/orphya.github.io"><img alt="Views" src="https://hits.sh/orphya.github.io.svg?label=Views&color=161618"></a>',
      copyright: '게임 자산 Copyright © Winterfire Studio'
    },

    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    },

    outline: {
      label: '항해술'
    },

    lastUpdated: {
      text: '마지막 업데이트 날짜',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '다국어',
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '메뉴',
    darkModeSwitchLabel: '주제',
    lightModeSwitchTitle: '라이트 모드로 전환',
    darkModeSwitchTitle: '다크 모드로 전환',
    skipToContentLabel: '점프하다'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '가이드',
      activeMatch: '/ko/guide/',
      link: '/ko/guide/',
    },
    {
      text: '퀘스트',
      activeMatch: '/ko/quest/',
      link: '/ko/quest/',
    },
    {
      text: '한항',
      activeMatch: '/ko/item/',
      link: '/ko/item/',
    },
    {
      text: '지역',
      activeMatch: '/ko/region/',
      link: '/ko/region/',
    },
    {
      text: 'NPC',
      activeMatch: '/ko/npc/',
      link: '/ko/npc/',
    }
  ]
}

function sidebar_Guidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '가이드',
      items: [
        { text: '기본 가이드', link: 'basic-guidelines' },
        { text: '고급 가이드', link: 'advanced-guidelines' },
        { text: '세계관', link: 'world-views' },
        { text: '게임 설정', link: 'game-input' }
      ]
    }
  ]
}

function sidebar_Quest(): DefaultTheme.SidebarItem[] {
  return[
    {
      text: '퀘스트 목록',
      link: 'list',
      items: []
    }
  ]
}

function sidebar_Item(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '한항',
      base: '/ko/item/category-',
      link: 'list',
      collapsed: false,
      items: [
        { text: '검', link: 'sword' },
        { text: '광물', link: 'mineral' },
        { text: '귀중품', link: 'treasure' },
        { text: '농업', link: 'agriculture' },
        { text: '도구', link: 'tool' },
        { text: '마법 아이템', link: 'magical-item' },
        { text: '먹이다', link: 'dye' },
        { text: '물약', link: 'potion' },
        { text: '서적', link: 'book' },
        { text: '요리', link: 'cuisine' },
        { text: '음식', link: 'raw-food' },
        { text: '의료', link: 'medical' },
        { text: '자원', link: 'resource' },
        { text: '장비', link: 'equipment' },
        { text: '절하다', link: 'bow' },
        { text: '주요 성분', link: 'main-ingredient' },
        { text: '지도', link: 'map' },
        { text: '창', link: 'spear' },
        { text: '채찍', link: 'whip' },
        { text: '퀘스트 아이템', link: 'quest-item' },
        { text: '특별한', link: 'special' },
        { text: '편지', link: 'letter' },
        { text: '하위 성분', link: 'subingredient' },
        { text: '화살', link: 'arrow' },
      ]
    }
  ]
}

function sidebar_Region(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '지역',
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
