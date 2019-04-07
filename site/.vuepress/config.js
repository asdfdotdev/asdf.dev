let path = require('path')

module.exports = {
  evergreen: true,
  dest: '_build',

  markdown: {
    anchor: { permalink: false },
  },

  css: {
    loaderOptions: {
      sass: {
        includePaths: [
          path.resolve(__dirname, 'theme/styles')
        ]
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@fabric': '@flickerbox/fabric'
      }
    },
  },

  head: [
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/assets/images/favicons/apple-touch-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/assets/images/favicons/apple-touch-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/assets/images/favicons/apple-touch-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/assets/images/favicons/apple-touch-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/assets/images/favicons/apple-touch-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/assets/images/favicons/apple-touch-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/assets/images/favicons/apple-touch-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/assets/images/favicons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/images/favicons/favicon-196x196.png', sizes: '196x196' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/images/favicons/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/images/favicons/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/images/favicons/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/images/favicons/favicon-128.png', sizes: '128x128' }],
    ['meta', { name: 'application-name', content: 'asdf.dev' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1f0149' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/images/favicons/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-square70x70logo', content: '/assets/images/favicons/mstile-70x70.png' }],
    ['meta', { name: 'msapplication-square150x150logo', content: '/assets/images/favicons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-wide310x150logo', content: '/assets/images/favicons/mstile-310x150.png' }],
    ['meta', { name: 'msapplication-square310x310logo', content: '/assets/images/favicons/mstile-310x310.png' }],
    ['meta', { property: 'og:title', content: 'asdf dot dev' }],
    ['meta', { property: 'og:description', content: 'A website.' }],
    ['meta', { property: 'og:url', content: 'https://asdf.dev' }],
    ['meta', { property: 'og:image', content: 'https://asdf.dev/assets/images/social/asdf-dot-dev.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'asdf dot dev' }],
    ['meta', { name: 'twitter:description', content: 'A website.' }],
    ['meta', { name: 'twitter:url', content: 'https://asdf.dev' }],
    ['meta', { name: 'twitter:image', content: 'https://asdf.dev/assets/images/social/asdf-dot-dev.png' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' }],
],
}
