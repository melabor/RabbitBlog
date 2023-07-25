import { defineConfig } from 'vitepress'
const path = require('path')

export default defineConfig({
  srcDir: './src',
  title: '兔子前端',
  description: '欢迎来到兔子前端',
  themeConfig: {
    lastUpdatedText: '',
    nav: [
      {
        text: '免费路线',
        link: path.join('/', 'learn_path', '/'),
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
    sidebar: {
      '/learn_path/': [
        {
          // text: '开始',
          items: [
            { text: 'Html', link: '/learn_path/' },
            { text: 'Css', link: '/learn_path/Css' },
            { text: 'JavaScript', link: '/learn_path/JavaScript' },
            { text: 'TypeScript', link: '/learn_path/TypeScript' },
            { text: 'Vue', link: '/learn_path/Vue' },
          ],
        },
      ],
      '/guide/': [
        {
          // text: '开始',
          items: [
            { text: 'AAA', link: '/guide/' },
            { text: 'Vue', link: '/guide/getting-started' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/RabbitCodeHole' }],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You',
    // },
    search: {
      provider: 'local',
    },
    displayAllHeaders: true,
  },

  docFooter: { prev: '上一篇', next: '下一篇' },
})
// module.exports = {

// }
