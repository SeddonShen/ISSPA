<script lang="ts" setup>
import Aliplayer from 'aliyun-aliplayer';
import 'aliyun-aliplayer/dist/skins/default/aliplayer-min.css'
import ArcoVue from '@arco-design/web-vue';
import { Spin, Collapse, CollapseItem, Row , Col} from '@arco-design/web-vue';
import { onMounted } from 'vue';
// import '@arco-design/web-vue/dist/arco.css';
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const loadPlayer = () => {
  var player = new Aliplayer({
        id: 'J_prismPlayer1',
        source: 'artc://camera.0vo.lol/ISSPA01/ISSPA01?auth_key=1711269114-0-0-aa102080d5f0a506cb86d0bf07c39d58', // 播放地址，使用超低延时直播（RTS）地址，协议是artc://。
        isLive: true, // 是否为直播播放。
        // rtsVersion: 'x.x.x', //可以手动指定RTS SDK的版本。
      }, function (player) {
        console.log('The player is created.')
      });
      var spin = document.getElementById('J_prismPlayer1_spin1');
      spin.parentNode.removeChild(spin);
    }

onMounted(() => {
  console.log('mounted')
  // call loadPlayer() func after 1000ms
  setTimeout(() => {
    loadPlayer()
  }, 1000)
    // delect element which id is J_prismPlayer1_spin1

    // console.log('player', player)
})

console.log('ArcoVue', ArcoVue)
</script>
<template>
<div id="J_prismPlayer"></div>
<Collapse :default-active-key="['1', '2']" style="margin: 5rem;">
    <CollapseItem header="Automotive Software Innovation Center(ASIC), Chongqing, China" key="1">
      <Row class="grid-player" justify="center">
      <Col :span="10">
        <div id="J_prismPlayer1"></div>
        <Spin id="J_prismPlayer1_spin1" tip="Loading Web Camera..."/>
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
.grid-player {
  /* background-color: var(--color-fill-2); */
  display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 300px; /* 设置容器高度 */
    text-align: center;
  /* margin-bottom: 40px; */
}
/* .grid-demo:last-child {
  margin-bottom: 0px;
} */
/* .grid-demo .arco-col {
  height: 10rem;
  line-height: 48px;
  color: var(--color-danger-light-3);
  text-align: center;
} */

</style>