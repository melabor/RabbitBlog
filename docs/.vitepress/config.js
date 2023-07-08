module.exports = {
  title: '兔子前端',
  description: '欢迎来到兔子前端',
  themeConfig: {
    lastUpdatedText: '',
    nav: [
      {
        text: '免费路线',
        link: '/free/freeIndex.md',
        activeMatch: '',
      },
      {
        text: '前端',
        items: [
          { text: 'Vue', link: '', activeMatch: '' },
          { text: 'React', link: '', activeMatch: '' },
          { text: '微信小程序', link: '', activeMatch: '' },
          { text: 'UniApp', link: '', activeMatch: '' },
          { text: 'Taro', link: '', activeMatch: '' },
        ],
      },
      {
        text: '前端工具库',
        items: [
          { text: 'dayJs', link: '' },
          { text: 'bigJs', link: '' },
          { text: 'bigJs', link: '' },
          { text: 'bigJs', link: '' },
        ],
      },
      {
        text: 'Nodejs',
        items: [
          { text: 'Chinese', link: '' },
          { text: 'Japanese', link: '' },
        ],
      },
      {
        text: 'webGL',
        items: [
          { text: 'Chinese', link: '' },
          { text: 'Japanese', link: '' },
        ],
      },
      {
        text: 'npm',
        items: [
          { text: 'Chinese', link: '' },
          { text: 'Japanese', link: '' },
        ],
      },
      {
        text: '面试题',
        items: [
          { text: 'Chinese', link: '' },
          { text: 'Japanese', link: '' },
        ],
      },
      {
        text: '关于',
        items: [
          { text: 'Chinese', link: '' },
          { text: 'Japanese', link: '' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Vue',
        items: [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }],
        collapsible: 'true',
      },
      {
        text: 'React',
        items: [{ text: '' }],
      },
      {
        text: '小程序',
        items: [{ text: '' }],
      },
      {
        text: 'UniApp',
        items: [{ text: '' }],
      },
      {
        text: 'Taro',
        items: [{ text: '' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/RabbitCodeHole' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
  docFooter: { prev: '上一篇', next: '下一篇' },
}
