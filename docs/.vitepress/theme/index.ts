// import mediumZoom from "medium-zoom";
// import "medium-zoom/dist/style.css";
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { onMounted, watch, nextTick } from 'vue'

export default {
  extends: DefaultTheme
} satisfies Theme
