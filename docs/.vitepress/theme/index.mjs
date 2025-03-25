import DefaultTheme from 'vitepress/theme'
import './style/custom-theme.css'

import { onMounted, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

// Components
//--// Item Analysis
import ItemCallOut from './components/analysis-item-callout.vue'
import ItemTrivia from './components/analysis-item-trivia.vue'
//--// Custom Badge
import ColorBadge from './components/color-badge.vue'

// Medium Zoom
import mediumZoom from 'medium-zoom'
import './style/medium-zoom.css'

// Giscus Comment
import giscusTalk from 'vitepress-plugin-comment-with-giscus'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('ItemCallOut', ItemCallOut)
    app.component('ItemTrivia', ItemTrivia)
    app.component('ColorBadge', ColorBadge)
  },

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
}
