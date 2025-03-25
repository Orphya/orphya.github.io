<template>
  <div>
    <div v-if="loading">...</div>
    <div v-else v-html="content"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import { marked } from 'marked'

const loading = ref(true)

const { lang } = useData()
const route = useRoute()

const content = ref('')
onMounted(async () => {
  try {
    const fileName = route.path.split('/').pop() || 'index'
    let langPrefix = ''
    switch (lang.value) {
      case 'zh-Hans':
        langPrefix = 'chs'
        break
      case 'en-US':
      default:
        langPrefix = 'en'
        break
    }
    const filePath = `/trivia/${langPrefix}/${fileName}.md?raw`
    const response = await fetch(filePath)
    console.log(response)
    if (!response.ok) throw new Error('No Such File.')
    const markdownContent = await response.text()
    content.value = marked(markdownContent)
  } catch (error) {
    switch (lang.value) {
      case 'zh-Hans':
        content.value = '琐事加载失败。'
        break
      case 'en-US':
      default:
        content.value = 'Trivia loading failed.'
        break
    }
  } finally {
    loading.value = false
  }
})
</script>
