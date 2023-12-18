<template>
  <div class="resume-warbler">
    <div class="header">
      <div class="avatar"></div>
      <div class="job">前端工程师</div>
    </div>
    <div class="info">
      <div class="info-item">姓名：XXX</div>
      <div class="info-item">昵称：XXXX</div>
      <div class="info-item">年龄：XX</div>
      <div class="info-item">坐标：XX</div>
      <div class="info-item">邮箱：XXXXXX</div>
      <div class="info-item">微信：XXXXXX</div>
      <div class="info-item">学校：XXXX</div>
      <div class="info-item">专业：XXXX</div>
    </div>
    <div class="concat">
      <div class="words">XXXXXXXX<strong>XXXXXXX</strong></div>
    </div>
    <div class="icons">
      <i class="iconfont icon icon-juejin" @click="goLink('juejin')"></i>
      <i class="iconfont icon icon-huaban88" @click="goLink('github')"></i>
      <i class="iconfont icon icon-weixin" @click="goLink('wechat')"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goLink = (type: string) => {
  if (type === "juejin") window.open("https://baidu.com");
  if (type === "github") window.open("https://github.com/Vueaaa");
  if (type === "wechat") router.push({ path: "/contact" });
};
</script>
<style lang="scss" scoped>
.resume-warbler{
  width: 100%;
  strong {
    color: var(--warbler-brand);
    margin: 0 5px;
  }
  .header{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: url('@/assets/image/fengjing.webp');
      background-size: 100%;
      background-position: -20px 0;
    }
    .job {
      font-size: 24px;
      margin: 16px 0;
      font-weight: bold;
    }
  }
  .info {
    margin: 8px 0 16px 0;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    padding-bottom: 16px;
    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 900px) {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill,220px);
    }
    .info-item {
      margin-top: 8px;
    }
  }
  .concat{
    .words {
      line-height: 1.4;
      letter-spacing: 1px;
    }
  }
  .icons {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    .icon{
      cursor: pointer;
      font-size: 24px;
      margin: 8px;
      &:hover {
        color: var(--warbler-brand);
      }
    }
  }
}
</style>
