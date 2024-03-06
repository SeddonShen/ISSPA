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
      copyright: 'Copyright © 2024-present, ISSPA Team'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/quick-start',
      activeMatch: '/guide/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/SeddonShen/ISSPA/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/SeddonShen/ISSPA/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Tutorials',
      collapsed: false,
      items: [
        { text: 'Quick Start', link: 'quick-start' },
        { text: 'User Manual Collection', link: 'user-manual-collection' }
      ]
    },
    {
      text: 'ISSPA Components',
      collapsed: false,
      items: [
        { text: 'Chassis', link: 'chassis' },
        { text: 'Sensors', link: 'sensors' },
        { text: 'Mapping', link: 'mapping' },
        { text: 'Navigation', link: 'navigation' },
        { text: 'Segmentation', link: 'segmentation' }
      ]
    },
    {
      text: 'ISSPA Appendix',
      collapsed: false,
      items: [
        { text: 'PAVS User Manual', link: 'pavs-user-manual' },
        {
          text: 'ISSPA Libraries(Python and C++)',
          link: 'isspa-libraries'
        },
        { text: 'Compilation Tools', link: 'compilation-tools' },
        { text: 'Issue and Troubleshooting', link: 'issue-and-troubleshooting' }
      ]
    },
    {
      text: 'Contributed to ISSPA',
      collapsed: false,
      items: [
        { text: 'Mapping Plugin', link: 'mapping-plugin' },
        { text: 'Navigation Plugin', link: 'navigation-plugin' },
        { text: 'Object Detection Plugin', link: 'object-detection-plugin' }
      ]
    },
    {
      text: 'About',
      collapsed: false,
      items: [{ text: 'Team', link: 'team' }]
    }
  ]
}
