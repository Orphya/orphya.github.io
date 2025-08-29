<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';

interface MenuItem {
  text: string;
  link?: string;
  action?: () => void;
}

defineProps<{
  items: MenuItem[];
  triggerText: string;
}>();

const isOpen = ref(false);

const selectItem = (item: MenuItem) => {
  if (item.action) item.action();
  isOpen.value = false;
};
</script>

<template>
  <div class="dropdown" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <button class="dropdown-trigger">
      {{ triggerText }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="item in items" :key="item.text" class="dropdown-item">
        <a v-if="item.link" :href="item.link">{{ item.text }}</a>
        <button v-else @click="selectItem(item)">{{ item.text }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.dropdown-trigger {
  position: relative;
  padding: 4px 30px 4px 12px;
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-weight: bold;
  white-space: nowrap;
}

.dropdown-trigger::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--vp-button-alt-text);
  transition: border-top-color 0.2s ease, border-bottom-color 0.2s ease, transform 0.2s ease;
}

.dropdown-trigger:hover {
  background-color: var(--vp-button-alt-hover-bg);
  color: var(--vp-button-alt-hover-text);
}

.dropdown-trigger:hover::after {
  border-top-color: var(--vp-button-alt-hover-text);
}

.dropdown:hover .dropdown-trigger::after {
  border-top: none;
  border-bottom: 4px solid var(--vp-button-alt-text);
}

.dropdown:hover .dropdown-trigger:hover::after {
  border-bottom-color: var(--vp-button-alt-hover-text);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0px);
  left: 0;
  z-index: 1000;
  min-width: 160px;
  padding: 4px;
  margin: 0;
  background-color: var(--vp-button-alt-bg);
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 8px var(--vp-c-shadow-2);
  list-style: none;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown:not(:hover) .dropdown-menu {
  opacity: 0;
  visibility: hidden;
}

.dropdown-item {
  padding: 6px 12px;
  margin: 0;
}

.dropdown-item a,
.dropdown-item button {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vp-button-alt-text);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.dropdown-item:hover {
  background-color: var(--vp-button-alt-hover-bg);
  color: var(--vp-button-alt-hover-text);
  border-radius: 4px;
}
</style>
