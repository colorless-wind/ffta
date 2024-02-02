import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FFTA",
  description: "An adventure of the Ivalice World",
  base: '/ffta/',
  appearance: 'dark',
  head: [
    // [
    //   'link',
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://static.yicode.tech/vitepress/vitepress.css'
    //   }
    // ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/ffta/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    search: {
      provider: 'local'
    }
  }
})
