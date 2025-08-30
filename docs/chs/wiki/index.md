---
layout: doc
aside: false
sidebar: false
---

# <span style="font-size: 3.5rem;">百科首页</span>

<CustomDropdownGroup>
  <CustomDropdown
    trigger-text="人物志"
    :items='[
      { text: "角色", link: "./" },
      { text: "派系", link: "./" },
      { text: "NPC 们", link: "./" },
    ]'
  />
  <CustomDropdown
    trigger-text="世界"
    :items='[
      { text: "乌里哈西斯大陆", link: "./" },
      { text: "传说", link: "./" },
      { text: "任务", link: "./" },
      { text: "活动", link: "./" },
      { text: "敌人", link: "./" },
      { text: "商店", link: "./" },
    ]'
  />
  <CustomDropdown
    trigger-text="物品"
    :items='[
      { text: "生存", link: "./item/category.survival" },
      { text: "装备", link: "./item/category.equipment" },
      { text: "武器", link: "./item/category.weapon" },
      { text: "工具", link: "./item/category.tool" },
      { text: "背包", link: "./item/category.backpack" },
      { text: "特殊", link: "./item/category.special" },
    ]'
  />
  <CustomDropdown
    trigger-text="其他"
    :items='[
      { text: "战斗", link: "./" },
      { text: "技能", link: "./" },
      { text: "制作", link: "./" },
      { text: "烹饪", link: "./" },
      { text: "设置", link: "./" },
    ]'
  />
</CustomDropdownGroup>

<CustomAnnouncement title="欢迎来到黑暗大陆编年史百科!">
  <img src="/wiki/banner/banner_logo.png" alt="wiki-banner" width="50%" height="50%" draggable="false" />
  <div style="font-size: 14px;">
    <a href="./" style="text-decoration: none;"><span style="font-weight: bold;">关于</span></a><span> • </span>
    <a href="https://store.steampowered.com/app/2922590" target="_blank" style="text-decoration: none;"><span style="font-weight: bold;">Steam 商店页面</span></a><span> • </span>
    <a href="https://ci-en.dlsite.com/creator/24629" target="_blank" style="text-decoration: none;"><span style="font-weight: bold;">Ci-en 页面</span></a><span> • </span>
    <a href="https://www.patreon.com/c/DarkLandChronicle" target="_blank" style="text-decoration: none;"><span style="font-weight: bold;">Patreon</span></a>
  </div>
  <div style="font-size: 14px;">
    <p>
      《黑暗大陆编年史：堕落精灵》是一款由 <a href="https://ci-en.dlsite.com/creator/24629" style="text-decoration: none;">冬火工作室</a> 制作的黑暗奇幻的等轴视角成人游戏，玩家将化身为为濒临灭绝的女精灵，踏入充满危险与邪恶的黑暗幻想世界中探险。<br />
      🚨 本百科是有关于游戏的<b>简体中文</b>信息源，在百科页面中可能存在有未标记的剧透内容。 🚨<br />
      当前语言分支共有 297 个页面。
    </p>
  </div>
  <div style="font-size: 18px; font-weight: bold;">
    <p>在讨论与编辑页面前，请先阅读我们的 <a href="/chs/community/rules" style="text-decoration: none; font-weight: bold;">规则书</a> ！</p>
  </div>
</CustomAnnouncement>

<CustomAnnouncement title="公告">
  本维基还在持续建设中！如有页面空白或错漏敬请包涵！
</CustomAnnouncement>

<!--
<CustomButtonGroup :gap="8">
  <CustomButton theme="alt" size="medium" text="按钮" href="./guide/start" />
  <CustomButton theme="alt" size="medium" text="按钮" href="./guide/start" />
  <CustomButton theme="alt" size="medium" text="按钮" href="./guide/start" />
</CustomButtonGroup>
-->
