import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/custom.css'

import mediumZoom from 'medium-zoom'
import { useData, useRoute } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { onMounted, watch, nextTick } from 'vue'

export default {
  extends: DefaultTheme,

  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    giscusTalk(
      {
        repo: 'Orphya/orphya.github.io',
        repoId: 'R_kgDON1VLSw',
        category: 'Announcements',
        categoryId: 'DIC_kwDON1VLS84CmtwN',
        mapping: 'pathname',
        inputPosition: 'bottom'
      },
      {
        frontmatter, route
      },
      true
    );
  }
} satisfies Theme
