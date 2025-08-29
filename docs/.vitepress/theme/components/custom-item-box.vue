<template>
  <aside v-if="item.name" class="infobox" role="region" :aria-label="t.ariaLabel + item.name">
    <h3 class="infobox-title">{{ item.name }}</h3>

    <img v-if="item.icon" :src="item.icon" :alt="`${item.name} icon`" class="infobox-image" />

    <section v-if="item.type || item.description" class="infobox-section">
      <h3 style="text-align: center; padding-top: 12px; border-top: 1px solid var(--vp-c-border);">{{ t.basicInfo }}</h3>
      <p v-if="item.type"><strong>{{ t.type }}:</strong> {{ item.type }}</p>
      <p v-if="item.description">{{ item.description }}</p>
    </section>

    <section v-if="item.params" class="infobox-section">
      <h3>{{ t.itemParams }}</h3>
      <p v-if="item.params.healing && item.params.healing > 0">{{ t.healing.replace('{value}', item.params.healing) }}</p>
      <p v-if="item.params.mana && item.params.mana > 0">{{ t.mana.replace('{value}', item.params.mana) }}</p>
      <p v-if="item.params.stack && item.params.stack > 1">{{ t.stack.replace('{value}', item.params.stack) }}</p>
      <p v-if="item.params.stack && item.params.stack <= 1">{{ t.unstack.replace('{value}', item.params.stack) }}</p>
      <p v-if="item.params.durability && item.params.durability > 0">{{ t.durability.replace('{value}', item.params.durability) }}</p>
    </section>

    <section v-if="hasObtainSources" class="infobox-section">
      <h3 style="text-align: center; padding-top: 12px; border-top: 1px solid var(--vp-c-border);">{{ t.howToObtain }}</h3>
      <ul>
        <li v-for="(location, index) in item.obtain.found" :key="'found-' + index">
          {{ location }}
        </li>
        <li v-for="(npc, index) in filteredNpcs" :key="'npc-' + index">
          {{ t.npcGiven.replace('{npc}', npc.name).replace('{quantity}', npc.quantity).replace('{item}', item.name) }}
        </li>
        <li v-for="(shop, index) in filteredShops" :key="'shop-' + index">
          {{ t.shop.replace('{npc}', shop.npc) }}
          <table>
            <tbody>
              <tr>
                <th>{{ t.tableCost }}</th>
                <th>{{ t.tableStock }}</th>
                <th>{{ t.tableNotes }}</th>
              </tr>
              <tr>
                <td>{{ shop.cost }}</td>
                <td>{{ shop.stock }}</td>
                <td>{{ shop.notes }}</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li v-for="(gardening, index) in filteredGardenings" :key="'gardening-' + index">
          {{ t.gardening.replace('{method}', gardening.method).replace('{time}', gardening.time) }}
        </li>
      </ul>
    </section>
  </aside>
  <p v-else class="error">{{ t.error }}</p>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const lang = computed(() => {
  const path = route.path
  if (path.includes('/chs/')) return 'chs'
  if (path.includes('/cht/')) return 'cht'
  return 'en'
})

const translations = {
  chs: {
    ariaLabel: '物品信息：',
    basicInfo: '基本信息',
    type: '类型',
    itemParams: '物品属性',
    healing: '回复 {value} 点血量',
    mana: '回复 {value} 点魔力',
    stack: '最大堆叠数量 {value}',
    unstack: '不可堆叠',
    durability: '耐久度 {value}',
    howToObtain: '获取方式',
    npcGiven: '由{npc}赠送（{quantity}个{item}）',
    shop: '商店：{npc}',
    gardening: '种植：{method}（{time}）',
    tableItem: '物品',
    tableCost: '花费',
    tableStock: '库存',
    tableNotes: '备注',
    error: '未提供有效的物品数据'
  },
  cht: {
    ariaLabel: '物品資訊：',
    basicInfo: '基本資訊',
    type: '類型',
    itemParams: '物品屬性',
    healing: '回復 {value} 點血量',
    mana: '回復 {value} 點魔力',
    stack: '最大堆疊數量 {value}',
    unstack: '不可堆疊',
    durability: '耐久度 {value}',
    howToObtain: '獲取方式',
    npcGiven: '由{npc}贈送（{quantity}個{item}）',
    shop: '商店：{npc}',
    gardening: '種植：{method}（{time}）',
    tableItem: '物品',
    tableCost: '花費',
    tableStock: '庫存',
    tableNotes: '備註',
    error: '未提供有效的物品數據'
  },
  en: {
    ariaLabel: 'Information for ',
    basicInfo: 'Basic Info',
    type: 'Type',
    itemParams: 'Item Properties',
    healing: 'Restores {value} Health',
    mana: 'Restores {value} Mana',
    stack: 'Max Stack Size {value}',
    unstack: 'Unstackable',
    durability: 'Durability {value}',
    howToObtain: 'How to Obtain',
    npcGiven: 'Given by {npc} ({quantity} {item})',
    shop: 'Shop: {npc}',
    gardening: 'Gardening: {method} ({time})',
    tableItem: 'Item',
    tableCost: 'Cost',
    tableStock: 'Stock',
    tableNotes: 'Notes',
    error: 'No valid item data provided'
  }
}

const t = computed(() => translations[lang.value])
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      icon: '',
      type: '',
      description: '',
      params: {},
      obtain: {
        found: [],
        npc: [],
        shop: [],
        gardening: []
      }
    })
  }
})

const filteredNpcs = computed(() => props.item.obtain.npc.filter(npc => npc.name))
const filteredShops = computed(() => props.item.obtain.shop.filter(shop => shop.npc))
const filteredGardenings = computed(() => props.item.obtain.gardening.filter(gardening => gardening.method))
const hasObtainSources = computed(() => (
  props.item.obtain.found?.length ||
  filteredNpcs.value.length ||
  filteredShops.value.length ||
  filteredGardenings.value.length
))
</script>

<style scoped>
.infobox {
  float: right;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  padding: 20px;
  width: 320px;
  margin: 0 0 20px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-shadow: 0 2px 4px var(--vp-c-shadow-1);
}

.infobox-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.infobox-image {
  display: block;
  -ms-user-drag: none;
  -moz-user-drag: none;
  -webkit-user-drag: none;
  margin: 0 auto 12px;
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.infobox-section {
  margin-bottom: 16px;
}

.infobox-section h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.infobox-section p, .infobox-section ul {
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.infobox-section ul {
  list-style: disc;
  padding-left: 20px;
}

.infobox-section table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: 0.875rem;
}

.infobox-section th, .infobox-section td {
  border: 1px solid var(--vp-c-border);
  padding: 6px;
  text-align: left;
}

.infobox-section th {
  background: var(--vp-c-bg-soft);
  font-weight: 500;
}

.error {
  color: var(--vp-c-danger-1);
  font-size: 0.875rem;
  clear: both;
}

@media (max-width: 640px) {
  .infobox {
    float: none;
    width: 100%;
    margin: 0 auto 20px;
  }
}
</style>
