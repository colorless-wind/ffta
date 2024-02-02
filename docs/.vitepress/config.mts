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
      { text: 'Game Guide', link: '/overview' }
    ],

    sidebar: [
      {
        items: [
          { text: '汉化说明', link: '/overview' },
        ]
      },
      {
        text: '攻略手册',
        items: [
          { text: '职业一览', link: '/guide/transfer' },
          { text: '职业成长率', link: '/guide/upgrade' },
          { text: '全任务列表', link: '/guide/quest300' },
        ]
      },
      {
        text: '系统精研',
        items: [
          { text: '盗王之王', link: '/research/steal1' },
          { text: '空手接物', link: '/research/catch1' },
          { text: '人员招募研究', link: '/research/recruit' },
          { text: '行动顺序研究', link: '/research/clocktick-system' },
        ]
      },
      {
        text: '基本信息',
        items: [
          { text: '人物介绍', link: '/base/character' },
          { text: '特殊人物', link: '/base/secret-character' },
          { text: '菜单说明', link: '/base/menu' },
          { text: '战斗说明', link: '/base/battle' },
          { text: '市镇场所', link: '/base/place' },
          { text: '异常状态', link: '/base/status' },
          { text: '敌方一览', link: '/base/enemy' },
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
