<template>
    <NavMenu></NavMenu>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu.vue'
import { onMounted } from 'vue'

onMounted(() => {
    //页面渲染完成时把loading隐藏掉
    const ele = document.getElementById('spinner')
    ele!.style.display = 'none'
})
</script>

<style scoped>
</style>
