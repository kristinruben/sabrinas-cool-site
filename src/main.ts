import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// @ts-ignore
const app = createApp(App);

app.use(router);
app.mount('#app');
