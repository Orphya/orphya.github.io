---
layout: page
---

<script setup>
  const userLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const supportLangs = {
    'de': '/de/',
    'en': '/en/',
    'es': '/es/',
    'fr': '/fr/',
    'ja': '/ja/',
    'ko': '/ko/',
    'pt-br': '/pt/',
    'pt-pt': '/pt/',
    'ru': '/ru/',
    'zh-cn': '/chs/',
    'zh-hk': '/cht/',
    'zh-tw': '/cht/',
  };

  for (const [lang, path] of Object.entries(supportLangs)) {
    if (userLang.startsWith(lang)) {
      window.location.replace(path);
      break;
    }
  }
</script>
