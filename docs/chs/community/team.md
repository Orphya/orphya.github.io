---
layout: page
---
<script setup>
  import {
    VPTeamMembers,
    VPTeamPage,
    VPTeamPageSection,
    VPTeamPageTitle
  } from 'vitepress/theme'

  const developer = [
    {
      avatar: '/community/e83a16b0a50a7c2d1e5ca6d1cf3ce8bf.jpg',
      name: 'Murag',
      title: '制作人 / 剧本 / 程序',
    },
    {
      avatar: '/community/4327224fb9636cc07224a731a067ec2a.jpg',
      name: 'ENIShi',
      title: '美术',
    }
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title><b>开发团队</b></template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="developer" />
</VPTeamPage>
