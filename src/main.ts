import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import App from './App.vue'
import router from './router'
import 'mdui'
import 'mdui/dist/css/mdui.min.css'
import '@/assets/scss/index.scss'

createApp(App).use(PrimeVue).use(router).mount('#app')
