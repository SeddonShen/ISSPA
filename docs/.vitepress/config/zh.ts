import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: 'ISSPA 智能自动驾驶系统',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() }
    },

    editLink: {
      pattern: 'https://github.com/SeddonShen/ISSPA/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} ISSPA Team`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/zh/guide/quick-start',
      activeMatch: '/zh/guide/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/SeddonShen/ISSPA/blob/main/CHANGELOG.md'
        },
        {
          text: '参与贡献',
          link: 'https://github.com/SeddonShen/ISSPA/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '新手入门',
      collapsed: false,
      items: [
        { text: '快速开始', link: 'quick-start' },
        { text: '用户手册集', link: 'user-manual-collection' }
      ]
    },
    {
      text: 'ISSPA组件',
      collapsed: false,
      items: [
        { text: '底盘', link: 'chassis' },
        { text: '传感器', link: 'sensors' },
        { text: '地图', link: 'mapping' },
        { text: '导航', link: 'navigation' },
        { text: 'Segmentation', link: 'segmentation' }
      ]
    },
    {
      text: '附录',
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
      text: '参与贡献',
      collapsed: false,
      items: [
        { text: '地图插件', link: 'mapping-plugin' },
        { text: '导航插件', link: 'navigation-plugin' },
        { text: '目标检测插件', link: 'object-detection-plugin' }
      ]
    },
    {
      text: '关于',
      collapsed: false,
      items: [{ text: '团队', link: 'team' }]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
