import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp().mount({
  router,
  store,
  render: h => h(App),
}, '#app');
