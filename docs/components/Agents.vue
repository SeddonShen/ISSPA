<script lang="ts" setup>
import ArcoVue from '@arco-design/web-vue';
import { Button } from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('ArcoVue', ArcoVue)
</script>
<template>
    <Button type="primary">Primary</Button>
    <Button>Secondary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="outline">Outline</Button>
    <Button type="text">Text</Button>
  <!-- <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space> -->
</template>
<!-- <template>
  <div class="home-wrapper">
    <div v-for="item in list" :key="item" class="home-item">{{item}}</div>
  </div>
</template>
<style>
.home-wrapper {
  text-align: center;
}
.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
</style> -->