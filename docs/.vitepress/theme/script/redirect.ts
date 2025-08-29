document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/') {
    const userLang: string = (navigator.language || (navigator as any).userLanguage || 'en').toLowerCase()
    const supportLangs: Record<string, string> = {
      'de':    '/de/',
      'en':    '/en/',
      'es':    '/es/',
      'fr':    '/fr/',
      'ja':    '/ja/',
      'ko':    '/ko/',
      'pt-br': '/pt/',
      'pt-pt': '/pt/',
      'ru':    '/ru/',
      'zh-cn': '/chs/',
      'zh-hk': '/cht/',
      'zh-tw': '/cht/',
    }

    for (const [lang, path] of Object.entries(supportLangs)) {
      if (userLang.startsWith(lang)) {
        window.location.replace(path)
        break
      }
    }
  }
})
