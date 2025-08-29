<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="announcement">
    <div class="announcement-title" v-if="title || $slots.title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="announcement-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.announcement {
  border: 2px solid var(--vp-button-alt-bg);
  border-radius: 8px;
  margin: 1rem 0;
}

.announcement-title {
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  margin: 4px;
  padding: 12px 24px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid var(--vp-button-alt-bg);
  border-radius: 4px;
}

.announcement-content {
  padding: 20px 12px;
  text-align: center;
}

.announcement-content :deep(img),
.announcement-content :deep(a) {
  display: inline-block;
  margin: 0 auto;
}

.announcement-content :deep(*) {
  margin: 0.5rem 0;
}
</style>
