---
outline: deep
---

# 站点配置 {#site-config}

站点配置可以定义站点的全局设置。应用配置选项适用于每个 VitePress 站点，无论它使用什么主题。例如根目录或站点的标题。

## 概览 {#overview}

### 配置解析 {#config-resolution}

配置文件总是从 `<root>/.vitepress/config.[ext]` 解析，其中 `<root>` 是 VitePress，`[ext]` 是支持的文件扩展名之一。开箱即用地支持 TypeScript。支持的扩展名包括 `.js`、`.ts`、`.mjs` 和 `.mts`。

建议在配置文件中使用 ES 模块语法。配置文件应该默认导出一个对象：