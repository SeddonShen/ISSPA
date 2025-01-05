---
layout: home

title: ISS Cloud
titleTemplate: Intelligent Self-driving System empowering Physical Agents

hero:
  name: ISS Cloud
  text: Intelligent Self-driving System empowering Physical Agents
  tagline: An experimental platform for self-driving physical agents
  actions:
    - theme: alt
      text: View on GitHub
      link: https://github.com/iscas-tis/ISS-PA
    - theme: brand
      text: ISS Cloud Studio
      link: https://isspa-studio.vercel.app/
  image:
    src: /car.png
    alt: ISS Cloud

features:
  - icon: 🛠️
    title: Alternative Solutions
    details: Selection of solutions based on the application scenarios, such as grid maps or high-definition maps.
  - icon: 🌐
    title: Cloud Access
    details: Remote research and development in the cloud to browse visualization data like point cloud maps.
  - icon: 👨‍💻
    title: Code Tutorials
    details: Introduces ISS Cloud in the form of code snippets so that you can use it easily.
  - icon: 🔍
    title: Research Oriented
    details: Create an indoor sand table to simulate corner cases of automated driving, like damaged lane lines, for research.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff); */
  --vp-home-hero-name-background: -webkit-linear-gradient(315deg,#647eff 25%,#42d392);
  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); */
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
