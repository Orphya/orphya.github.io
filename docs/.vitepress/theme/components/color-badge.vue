<template>
  <span class="custom-badge" :style="badgeStyle">
    <span v-if="isLink" @click="linkClick" class="custom-link">{{ '🔗' + linkText + '&thinsp;' }}</span>
    <span v-else>{{ props.text }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'gray'
  },
  text: {
    type: String,
    default: ''
  }
})

const colorMap = {
  red: {
    bg: 'rgba(244, 63, 94, 0.16)',
    text: '#f66f81'
  },
  yellow: {
    bg: 'rgba(234, 179, 8, 0.16)',
    text: '#f9b44e;'
  },
  green: {
    bg: 'rgba(16, 185, 129, 0.16)',
    text: '#3dd68c'
  },
  blue: {
    bg: 'rgba(100, 108, 255, 0.16)',
    text: '#a8b1ff'
  },
  gray: {
    bg: 'rgba(101, 117, 133, 0.16)',
    text: '#515c67'
  },
  purple: {
    bg: 'rgba(159, 122, 234, 0.16)',
    text: '#c8abfa'
  },
}

const badgeStyle = computed(() => {
  const colorKey = props.color.toLowerCase()
  const colors = colorMap[colorKey] || colorMap.gray
  return { backgroundColor: colors.bg, color: colors.text }
})

const slotContent = computed(() => {
  const content = props.text || ''
  return typeof content === 'string' ? content.trim() : ''
})
const isLink = computed(() => {
  return /^\[.*?\]\(.*?\)$/.test(slotContent.value)
})
const linkText = computed(() => {
  const match = slotContent.value.match(/^\[(.*?)\]/)
  return match ? match[1] : ''
})
const linkUrl = computed(() => {
  const match = slotContent.value.match(/\((.*?)\)/)
  return match ? match[1] : ''
})
function linkClick() {
  if (linkUrl.value) { window.location.href = linkUrl.value }
}
</script>

<style scoped>
.custom-badge {
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  transform: translateY(-2px);
}

.custom-link {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
}

.custom-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
