import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { componentPlugin } from './components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(lazyPlugin)
app.use(componentPlugin)
app.use(router)

app.mount('#app')
