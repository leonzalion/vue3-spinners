import 'virtual:windi.css';

import { createApp } from 'vue';

import App from './app.vue';

const app = createApp(App);
app.use(VueColor);
app.mount('#app');
