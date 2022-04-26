import { createApp } from 'vue'
import { routes } from './routes'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@cf/config-tailwind/index.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router).mount('#app')
