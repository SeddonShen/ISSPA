<script lang="ts" setup>
import ArcoVue from '@arco-design/web-vue';
import { Input, Button, Spin, Collapse, CollapseItem, Row, Col, Card } from '@arco-design/web-vue';
import { ref, onMounted } from 'vue';
import { getModeForUsageLocation } from 'typescript';
import { Modal, Notification } from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const nodeList = ref([]);
const authorizationCode = ref('');

function handleApplyISSPA() {
  console.log(authorizationCode.value)
  applyISSPA(authorizationCode.value);
}

async function get_nodelist(host_url: string): Promise<void> {
  try {
    const response = await fetch(host_url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    nodeList.value = data.nodes;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function applyISSPA(password: string): Promise<void> {
  try {
    const response = await fetch(`https://node.0vo.lol/http/121.43.183.241:8000/apply/?password=${password}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (data.password === false) {
      // 弹窗提示密码错误
      Notification.error({
        title: '密码错误',
        content: '请重新输入!',
      })
    } else if (data.status === false) {
      // 弹窗提示节点申请失败
      Notification.error({
        title: '节点申请失败！',
        content: '请联系管理员!',
      })
    } else {
      // 弹出 pods_info 和 services_info 字段内容
      console.log('Data:', data);
      console.log('Pods Info:', data.pods_info);
      console.log('Services Info:', data.services_info);
      Modal.success({
        title: data.machine + '节点申请成功',
        content: `
          在线RosBridge地址: ws://121.43.183.241:${data.services_info[1].nodePort} \n
          在线VSCode地址: http://121.43.183.241:${data.services_info[2].nodePort}
        `,
      });

    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



onMounted(() => {
  const host_url = 'https://node.0vo.lol/http/121.43.183.241:8000/nodelist/';
  get_nodelist(host_url);
});

</script>
<template>
  <div :style="{
    boxSizing: 'border-box',
    width: '100%',
    padding: '40px',
    backgroundColor: 'var(--color-fill-2)',
    display: 'flex',
  }">
    <div v-for="node in nodeList" :key="node.name">
      <Card :style="{ width: '360px' }" :title="node.name.toUpperCase()" class="card-isspa">
        <template #extra>
          <!-- <a-link>申请使用</a-link> -->
          <!-- <a-link :style="{ color: node.status === 'Unknown' ? 'red' : 'inherit' }">申请使用</a-link> -->
          <a-link :style="{ color: node.status === 'Unknown' ? 'red' : 'inherit' }">{{ node.status === 'Unknown' ? '离线'
    : '在线' }}</a-link>
        </template>
        <p v-if="node.nodeInfo">
          <b>Arch:</b> {{ node.nodeInfo.architecture }}<br>
          <b>Operating System:</b> {{ node.nodeInfo.operatingSystem.charAt(0).toUpperCase() +
    node.nodeInfo.operatingSystem.slice(1) }}<br>
          <b>OS Image:</b> {{ node.nodeInfo.osImage }}<br>
          <b>Kernel Version:</b> {{ node.nodeInfo.kernelVersion }}<br>
          <b>Container Runtime Version:</b> {{ node.nodeInfo.containerRuntimeVersion }}<br>
        </p>
      </Card>
    </div>
  </div>
  <div style="display: flex; justify-content: center; margin-top: 20px;">
    <Input v-model="authorizationCode" :style="{ width: '30%' }" placeholder="ISSPA使用授权码" allow-clear></Input>
  </div>
  <div style="display: flex; justify-content: center; margin-top: 20px;">
    <Button @click="handleApplyISSPA" type="primary" long :style="{ width: '30%' }">申请使用ISSPA</Button>
  </div>
</template>
<style scoped>
.card-isspa {
  width: 360px;
  margin-left: 24px;
  transition-property: all;
}
</style>