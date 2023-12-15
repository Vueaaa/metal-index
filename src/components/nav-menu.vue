<template>
  <div class="nav-menu">
    <div class="mask"></div>
    <div class="logo cp" @click="goHome">
      <div class="logo-img-box">
        <img
          src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg"
          class="logo-img"
        />
      </div>
      <div class="logo-titie fwb">Warbler-FE</div>
    </div>
    <div class="navs show-title">
      <div
        v-for="(nav, index) in navs"
        :key="index"
        :class="{ active: index === currentIndex }"
        class="nav cp"
        @click="changeCurrentNab(nav.path)"
      >
        {{ nav.title }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const navs = [
  {
    title: "前端导航",
    path: "/navigation",
  },
  {
    title: "warbler-js",
    path: "/warbler/js",
  },
  {
    title: "warbler-cli",
    path: "/warbler/cli",
  },
  // {
  //   title: '数据中心',
  //   path: '/dataCenter',
  // },
  {
    title: "金石未开",
    path: "/warblerCenter",
  },
];

const router = useRouter();
const route = useRoute();

//点击 Tab 切换页面
const changeCurrentNab = (path: string) => {
  router.push({ path });
};
//回到首页
const goHome = () => {
  router.push({ path: "/" });
};
//动态计算当前激活的导航，用来高亮当前导航
const currentIndex = computed(() =>
  navs.findIndex((nav) => nav.path === route.path)
);
</script>
<style lang="scss" scoped>
.nav-menu {
  width: 100%;
  height: var(--warbler-header-height);
  position: fixed;
  top: 0;
  .mask {
    width: 100%;
    height: 100%;
    background-color: var(--warbler-bg-half-opacity);
    // box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1);
    // backdrop-filter CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。
    backdrop-filter: blur(12px);
  }
  .logo {
    display: flex;
    justify-content: flex-start;/* 从行首起始位置开始排列 */
    align-items: center;/* 控制子元素在交叉轴上的对齐 */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left:var(--page-padding) .logo-img-box {
      width: 32px;
      height: 32px;
      .logo-img {
        width: 100%;
        height: 100%;
      }
      .logo-title {
        font-size: 24px;
        margin-left: 8px;
        background: linear-gradient(-60deg, #8700ff 0, #ff009e 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .navs {
    display: flex;
    // justify-content: flex-start;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--page-padding);
    .nav {
      margin-left: 16px;
      &:hover {
        color: var(--warbler-brand);
      }
    }
    .active {
      color: var(--warbler-brand);
    }
  }
}
</style>
