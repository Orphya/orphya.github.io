<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  gap?: number;
}>();
</script>

<template>
  <div class="button-group" :style="{ gap: `${gap || 4}px`}">
    <slot />
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.5rem 0;
}
</style>
