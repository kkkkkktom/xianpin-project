import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getCategory } from './apis/testAPI'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

getCategory().then(res=>{
  console.log(res)
})

app.mount('#app')
