// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    //樱花 Quaint 修改版
    app.mixin({
      mounted() {
        // 挂载阶段触发樱花效果，并且出发后销毁樱花函数，使其不再触发
        window.startSakura()
        window.startSakura = () => {}
      },
    })

  }
}
