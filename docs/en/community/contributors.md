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

  const moderator = [
    {
      avatar: '/community/5e7433bfea393e20ffdaa881e4b13d4f.jpg',
      name: 'Orphia',
      title: '简体中文',
    }
  ]
  const contributor = [
    {
      avatar: '/community/5e7433bfea393e20ffdaa881e4b13d4f.jpg',
      name: 'Orphia',
      title: '简体中文',
    }
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title><b>贡献者们</b></template>
    <template #lead>
      黑暗大陆编年史百科是一个由粉丝建立和维护的数据库<br />
      每一位贡献者都为其倾注了大量的时间与精力<br />
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>内容版主</template>
    <template #members>
      <VPTeamMembers size="small" :members="moderator" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>内容贡献</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributor" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
