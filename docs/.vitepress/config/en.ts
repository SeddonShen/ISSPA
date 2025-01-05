import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() }
    },

    editLink: {
      pattern: 'https://github.com/SeddonShen/ISSPA/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present, ISS Cloud Team'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Playground',
      link: '/playground',
      activeMatch: '/playground/'
    },
    {
      text: 'Agents',
      link: '/agents',
      activeMatch: '/agents/'
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return []
}
