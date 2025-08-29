<script setup lang="ts">
defineProps<{
  gap?: number;
}>();
</script>

<template>
  <div class="dropdown-group" :style="{ gap: `${gap || 4}px` }">
    <slot />
  </div>
</template>

<style scoped>
.dropdown-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.5rem 0;
}
</style>
