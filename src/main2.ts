import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Contador from './Contador.vue'   
import router from './router'

const app = createApp(App)
const app = createApp(Contador)

app.use(createPinia())
app.use(router)

app.mount('#app')
