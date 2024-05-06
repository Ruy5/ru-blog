import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "猹言猹语",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: "deep",
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/test.html' }
      // { text: '博客', items: [
      //   { text: '前端', link: '/blog/blog1' },
      //   { text: '后端', link: '/blog/blog2' }
      // ] }
    ],

    sidebar: { "/blog": set_sidebar("blog") },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruy5' }
    ],
    footer: {
      copyright: ".vitepress config.mjs 文件中 footer copyright 进行配置"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },

})
