---
layout: home

title: 'Dark Land Chronicle Wiki'
titleTemplate: ':title'

features:
  - icon: ''
    title: 'English'
    link: '/en'
    details: 'Progress: 0%'
  - icon: ''
    title: '简体中文'
    link: '/chs'
    details: '进度: Rebuild'
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Orphya.png',
    name: 'Orphya',
    title: 'Wiki Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Orphya' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
