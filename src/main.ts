
import { createApp } from 'vue'
import router from './router'

// import Contador from './examples/Contador_options.vue'
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

app.use(vuetify)
app.use(router)
app.mount('#app')
