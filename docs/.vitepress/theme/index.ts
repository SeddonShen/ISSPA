import mediumZoom from 'medium-zoom'
import 'medium-zoom/dist/style.css'
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
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    //  添加以下代码 --》
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.content-container p img', {
        background: 'var(--vp-c-bg)',
        container: document.body
      })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
    //  《--- 结束
  }
} satisfies Theme
