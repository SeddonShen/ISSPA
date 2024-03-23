import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// import mediumZoom from 'medium-zoom'
// import 'medium-zoom/dist/style.css'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { onMounted, watch, nextTick } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  }
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
  // setup() {
  //   //  添加以下代码 --》
  //   const route = useRoute()
  //   const initZoom = () => {
  //     mediumZoom('.content-container p img', {
  //       background: 'var(--vp-c-bg)',
  //       container: document.body
  //     })
  //   }
  //   onMounted(() => {
  //     // when initialize
  //   //   <head>
  //   //   <link rel="stylesheet" href="https://g.alicdn.com/apsara-media-box/imp-web-player/2.16.3/skins/default/aliplayer-min.css" />  //（可选）如果您的使用场景需要用到H5模式的播放器，则需引用此css文件。
  //   // </head>
  //     initZoom()
  //     // addScript()
  //   })
  //   watch(
  //     // when change path
  //     () => route.path,
  //     () => nextTick(() => initZoom())
  //   )
  // }
} satisfies Theme
