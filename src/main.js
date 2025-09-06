import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniapluginPersistedstate from 'pinia-plugin-persistedstate'
import routes from './router'

const pinia = createPinia()
pinia.use(piniapluginPersistedstate)

createApp(App)
    .use(pinia)
    .use(routes).mount('#app')
