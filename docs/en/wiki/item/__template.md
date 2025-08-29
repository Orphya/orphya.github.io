---
layout: doc
---

<CustomItemBox :item="{
  name: '紫百合',
  icon: '/images/purple-lili.png',
  type: '花卉',
  description: '一种神秘的花卉。',
  params: {
    healing: 10,
    mana: 20
  },
  obtain: {
    found: ['农田', '野外', '村庄', '宝箱'],
    npc: [
      { name: '小孩', quantity: 5 },
      { name: '农夫', quantity: 3 },
      { name: '裁缝', quantity: 2 }
    ],
    shop: [
      { npc: '老人', cost: '50,000 金币', stock: 3, notes: '每月刷新' },
      { npc: '商人', cost: '60,000 金币', stock: 2, notes: '每周刷新' },
      { npc: '行医', cost: '55,000 金币', stock: 5, notes: '每日刷新' }
    ],
    gardening: [
      { method: '农田', time: '2天22小时' },
      { method: '种植箱', time: '3天' }
    ]
  }
}" />

# 示例
