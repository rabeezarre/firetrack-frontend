import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.scss';
import router from './router';

createApp(App).use(router).mount('#app');