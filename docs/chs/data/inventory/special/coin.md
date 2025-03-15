---
layout: doc
prev: false
next: false

Item: 'coin'
ItemLocalName: '金币'
Category: 'special'
CategoryLocalName: '特殊'
Quality: 1
Img: 'coin'
Desc: '这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述,这是一段描述.'
---

<aside class="infobox">
  <h3>{{ $frontmatter.ItemLocalName }}</h3>
  <figure><img :src=" '/item/'+$frontmatter.Img+'.webp' " :alt=" $frontmatter.Img "></figure>
  <section>
    <div class="desc-item">
      <h3>类型</h3>
      <a :href=" '../'+$frontmatter.Category ">{{ $frontmatter.CategoryLocalName }}</a>
    </div>
    <div class="desc-item">
      <h3>品质</h3>
      <p v-for="star in $frontmatter.Quality "><span>⭐</span></p>
    </div>
  </section>
  <section>
    <div class="desc-title">描述</div>
    <div class="desc-content">{{ $frontmatter.Desc }}</div>
  </section>
</aside>

# 金币 {#title}

[[toc]]

## 获取地点 {#location}

这是一段描述

## 配方 {#recipe}

这是一段描述

## 购买 {#shop}

这是一段描述

## 制作 {#craft}

这是一段描述

## 琐事 {#trivia}

这是一段描述
