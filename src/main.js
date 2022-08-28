import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VBotton from './components/VButton'

createApp(App).component('v-button', VBotton).use(store).use(router).mount('#app')
