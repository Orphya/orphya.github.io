<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const EXTERNAL_URL_RE = /^(?:mailto:|tel:|[a-z]+:)?\/\//

function normalizeLink(url: string): string {
  if (EXTERNAL_URL_RE.test(url)) {
    return url
  }
  return withBase(url)
}

interface Props {
  tag?: string
  size?: 'medium' | 'big'
  theme?: 'brand' | 'alt' | 'sponsor'
  text: string
  href?: string
  target?: string
  rel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  theme: 'brand'
})

const component = computed(() => {
  return props.tag || (props.href ? 'a' : 'button')
})

const normalizedHref = computed(() => {
  return props.href ? normalizeLink(props.href) : undefined
})

const computedTarget = computed(() => {
  if (props.target) return props.target
  if (props.href && EXTERNAL_URL_RE.test(props.href)) return '_blank'
  return undefined
})

const computedRel = computed(() => {
  if (props.rel) return props.rel
  if (props.href && EXTERNAL_URL_RE.test(props.href)) return 'noopener noreferrer'
  return undefined
})
</script>

<template>
  <component
    :is="component"
    class="CustomButton"
    :class="[size, theme]"
    :href="normalizedHref"
    :target="computedTarget"
    :rel="computedRel"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.CustomButton {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.CustomButton:where(a) {
  text-decoration: none;
}

.CustomButton:active {
  transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}

.CustomButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.CustomButton.big {
  border-radius: 24px;
  padding: 0 24px;
  line-height: 46px;
  font-size: 16px;
}

.CustomButton.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.CustomButton.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.CustomButton.brand:active {
  border-color: var(--vp-button-brand-active-border);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-active-bg);
}

.CustomButton.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.CustomButton.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.CustomButton.alt:active {
  border-color: var(--vp-button-alt-active-border);
  color: var(--vp-button-alt-active-text);
  background-color: var(--vp-button-alt-active-bg);
}

.CustomButton.sponsor {
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.CustomButton.sponsor:hover {
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}

.CustomButton.sponsor:active {
  border-color: var(--vp-button-sponsor-active-border);
  color: var(--vp-button-sponsor-active-text);
  background-color: var(--vp-button-sponsor-active-bg);
}
</style>
