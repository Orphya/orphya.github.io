<template>
  <aside class="item-card" v-if="frontmatter.Item && frontmatter.ItemLocalName">
    <h3>
      {{ frontmatter.ItemLocalName }}
    </h3>
    <figure v-if="frontmatter.Img">
      <img :src="getImagePath()" alt="Item Image" @error="handleImageError">
    </figure>
    <div class="item-info" v-if="hasCategory || frontmatter.Effect">
      <div class="info-row" v-if="hasCategory">
        <span class="label">{{ translationMap.categoryText }}</span>
        <span class="value">
          <template v-for="(localName, index) in frontmatter.CategoryLocalName" :key="index">
            <a :href="getCategoryLink(frontmatter.Category[index])">{{ localName }}</a>
            <span v-if="index < frontmatter.CategoryLocalName.length - 1">{{ translationMap.commaText }}</span>
          </template>
        </span>
      </div>
      <div class="info-row" v-if="frontmatter.Effect">
        <span class="label">{{ translationMap.effectText }}</span>
        <span class="value">
          <span class="effect-item" v-for="(effect, index) in frontmatter.Effect" :key="index">{{ effect }}</span>  
        </span>
      </div>
      <div class="info-row">
        <span class="label">{{ translationMap.stackText }}</span>
        <span class="value">{{ hasStack() }}</span>
      </div>
    </div>
    <div class="item-desc">
      <h4>{{ translationMap.descText }}</h4>
      <p>{{ frontmatter.Desc && frontmatter.Desc.trim() ? frontmatter.Desc : translationMap.emptyText }}</p>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, lang } = useData()

const translationMap = computed(() => {
  switch (lang.value) {
    case 'zh-Hans':
      return {
        _braceLeft: '{',
        _braceRight: '}',
        _bracketLeft: '[',
        _bracketRight: ']',
        _parenLeft: '（',
        _parenRight: '）',
        categoryText: '类型',
        commaText: '，',
        descText: '描述',
        effectText: '效果',
        emptyText: '暂无',
        falseText: '否',
        stackText: '堆叠',
        trueText: '是',
      }
    case 'en-US':
    default:
      return {
        _braceLeft: '{',
        _braceRight: '}',
        _bracketLeft: '[',
        _bracketRight: ']',
        _parenLeft: ' (',
        _parenRight: ') ',
        categoryText: 'Category',
        commaText: ', ',
        descText: 'Description',
        effectText: 'Effect',
        emptyText: 'None',
        falseText: 'No',
        stackText: 'Stack',
        trueText: 'Yes',
      }
  }
})

const hasCategory = computed(() => (
  frontmatter.value.Category &&
  frontmatter.value.CategoryLocalName &&
  frontmatter.value.Category.length === frontmatter.value.CategoryLocalName.length
))
function getCategoryLink(C) {
  if (typeof C !== 'string') return 'category-list'
  return `category-${C.toLowerCase()}`
}

function hasStack() {
  if (frontmatter.value.Stack === 'inf') {
    return translationMap.value.trueText + translationMap.value._parenLeft + 'Inf' + translationMap.value._parenRight
  }
  if (frontmatter.value.Stack && typeof frontmatter.value.Stack === 'number' && !isNaN(frontmatter.value.Stack) && frontmatter.value.Stack > 0) {
    return translationMap.value.trueText + translationMap.value._parenLeft + frontmatter.value.Stack + translationMap.value._parenRight
  }
  return translationMap.value.falseText
}

const imagePath = ref('')
function getImagePath() {
  if (!imagePath.value) {
    imagePath.value = `/img/item/${frontmatter.value.Img}.webp`
  }
  return imagePath.value
}
function handleImageError() {
  imagePath.value = `/img/item/object.webp`
}
</script>

<style scoped>
.item-card {
  float: right;
  background-color: var(--vp-c-divider);
  border: 1px solid var(--vp-c-text-1);
  border-radius: 6px;
  width: 300px;
  margin: 0 0 20px 20px;
  clear: right;
}

h3 {
  background-color: var(--vp-c-tip-soft);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  border-bottom: 1px solid var(--vp-c-text-1);
  padding: 12px;
  color: var(--vp-c-text-1);
}

figure {
  margin: 0 0 15px 0;
  border-bottom: 1px solid var(--vp-c-text-1);
  text-align: center;
}

img {
  width: 75%;
  height: 75%;
  padding: 8px 25px;
  object-fit: contain;
  border-radius: 4px;
}

.item-info {
  margin: 0 0 15px 0;
  padding: 0 16px 8px 16px;
  border-bottom: 1px solid var(--vp-c-text-1);
}

.info-row {
  display: flex;
  align-items: flex-start;
  margin: 0 0 8px 0;
}

.label {
  font-weight: bold;
  width: 90px;
  flex-shrink: 0;
  color: var(--vp-c-text-1);
}

.value {
  flex-grow: 1;
  color: var(--vp-c-text-1);
}

.value a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.value a:hover {
  text-decoration: underline;
}

.item-desc {
  margin-top: 15px;
  padding: 0 16px 16px 16px;
}

.effect-item {
  display: block;
  margin-bottom: 4px;
}

.effect-item:last-child {
  margin-bottom: 0;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0 0 8px 0;
  color: var(--vp-c-text-1);
}

p {
  font-size: 14px;
  margin: 0; /* 无额外边距 */
  color: var(--vp-c-text-1);
  line-height: 1.5;
}
</style>
