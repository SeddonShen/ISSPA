---
layout: home

title: ISSPA
titleTemplate: ISSPA 智能自动驾驶系统

hero:
  name: ISSPA
  text: ISSPA 智能自动驾驶系统
  tagline: 物理实验平台
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/quick-start
    - theme: alt
      text: GitHub
      link: https://github.com/chenhengwei1999/ISSPA
    - theme: alt
      text: 可视化平台
      link: https://isspa.0vo.lol
  image:
      src: /car.png
      alt: ISSPA

features:
  - icon: 🛠️
    title: 高自由度
    details: 根据应用场景选择解决方案，如网格地图或高清地图。
  - icon: 🌐
    title: 云端访问
    details: 在云端进行远程研发，浏览点云图等可视化数据。
  - icon: 👨‍💻
    title: 详细教程
    details: 以代码片段的形式介绍 ISSPA，方便您使用。
  - icon: 🔍
    title: 科研友好
    details: 创建一个室内沙盘，用于模拟自动驾驶中的一些紧急情况，如车道线受损等，以供研究之用。
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(315deg,#647eff 25%,#42d392);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #647eff 50%,  #42d392 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
