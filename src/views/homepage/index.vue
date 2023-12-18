<template>
  <div class="homepage-view">
    <canvas id="canvas" class="canvas"></canvas>
    <typewriter></typewriter>
    <div class="copyright" @click="goLink">ICP备2023100166号</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { renderCanvas } from "./canvas";
import typewriter from "./components/typewriter.vue";
onMounted(() => {
  renderCanvas();
});

const goLink = () => {
  window.open("https://beian.miit.gov.cn/");
};
</script>

<style lang="scss" scoped>
canvas {
    display: block
}
.copyright{
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
}
</style>
