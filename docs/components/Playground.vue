<script lang="ts" setup>
import Aliplayer from 'aliyun-aliplayer';
import 'aliyun-aliplayer/dist/skins/default/aliplayer-min.css'
import ArcoVue from '@arco-design/web-vue';
import { Spin, Collapse, CollapseItem, Row, Col } from '@arco-design/web-vue';
import { onMounted } from 'vue';
import { getModeForUsageLocation } from 'typescript';
// import '@arco-design/web-vue/dist/arco.css';
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function get_video_url(host_url): Promise<string> {
  return fetch(host_url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.play_urls.artc_play_url);
      return data.play_urls.artc_play_url;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return '';
    });
}

const loadPlayer = (video_url, player_id) => {
  var player = new Aliplayer({
    id: player_id,
    source: video_url, // 播放地址，使用超低延时直播（RTS）地址，协议是artc://。
    isLive: true, // 是否为直播播放。
    // rtsVersion: 'x.x.x', //可以手动指定RTS SDK的版本。
  }, function (player) {
    console.log('The player ' + player_id + 'is created.')
  });
  var spin = document.getElementById(player_id + '_spin');
  spin.parentNode.removeChild(spin);
}

onMounted(() => {
  console.log('mounted')
  const host_url = 'https://getvideo.0vo.lol/'
  
  get_video_url(host_url+'?app=ISSPA01').then(video_url => {
    setTimeout(() => {
      loadPlayer(video_url,'J_prismPlayer1')
    }, 1000)
  });
  get_video_url(host_url+'?app=ISSPA02').then(video_url => {
    setTimeout(() => {
      loadPlayer(video_url,'J_prismPlayer2')
    }, 1000)
  });
  // call loadPlayer() func after 1000ms

  // delect element which id is J_prismPlayer1_spin1

  // console.log('player', player)
})

</script>
<template>
  <div id="J_prismPlayer"></div>
  <Collapse :default-active-key="['1', '2']" style="margin: 5rem;">
    <CollapseItem header="Automotive Software Innovation Center(ASIC), Chongqing, China" key="1">
      <Row class="grid-player" justify="center">
        <Col :span="10">
        <div id="J_prismPlayer1"></div>
        <Spin id="J_prismPlayer1_spin" tip="Loading Web Camera..." />
        </Col>
        <Col :span="1">
        </Col>
        <Col :span="10">
        <div id="J_prismPlayer2"></div>
        <Spin id="J_prismPlayer2_spin" tip="Loading Web Camera..." />
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
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 300px;
  /* 设置容器高度 */
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