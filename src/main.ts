
import { createApp } from 'vue'

// Pnia
import { createPinia } from 'pinia'

//Vue Router
import router from './router'

// Icons
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
  })

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.mount('#app')
