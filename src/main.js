import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { componentPlugin } from './components'
const app = createApp(App)

app.use(createPinia())

app.use(lazyPlugin)
app.use(componentPlugin)
app.use(router)

app.mount('#app')
