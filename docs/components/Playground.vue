<script lang="ts" setup>
// import $ from "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js";
import ArcoVue from '@arco-design/web-vue';
import { Collapse, CollapseItem, Row , Col} from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('ArcoVue', ArcoVue)
</script>
<template>
<Collapse :default-active-key="['1', '2']" style="margin: 5rem;">
    <CollapseItem header="Automotive Software Innovation Center(ASIC), Chongqing, China" key="1">
      <Row class="grid-demo" justify="center">
      <Col :span="10">
        <div>col - 8</div>
      </Col>
      <Col :span="1"></Col>
      <Col :span="10">
        <div>col - 8</div>
      </Col>
    </Row>
    </CollapseItem>
    <CollapseItem header="Institute of Software, Chinese Academy of Sciences(ISCAS), Beijing, China" key="2">
      <div>Coming soon...</div>
    </CollapseItem>
</Collapse>

</template>
<style scoped>
.grid-demo {
  background-color: var(--color-fill-2);
  margin-bottom: 40px;
}
.grid-demo:last-child {
  margin-bottom: 0px;
}
.grid-demo .arco-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-danger-light-3);
  text-align: center;
}

</style>