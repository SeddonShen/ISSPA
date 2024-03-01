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
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
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
      link: '/guide/what-is-vitepress',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/site-config',
      activeMatch: '/reference/'
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

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}
