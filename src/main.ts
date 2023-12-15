import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

// 阿里图标库
import './assets/iconfont/iconfont.css';

//reset css
import 'modern-normalize';
import '@/style/style.css';

createApp(App).use(router).mount('#app')
