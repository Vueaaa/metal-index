import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

//reset css
import 'modern-normalize';
import '@/style/style.css';

createApp(App).use(router).mount('#app')
