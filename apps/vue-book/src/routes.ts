import { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('./book/**/*.vue')
export const routes: RouteRecordRaw[] = []
for (const [key, component] of Object.entries(modules)) {
  const path = '/' + key.split('/')[2]
  const route: RouteRecordRaw = {
    path,
    component: component,
  }
  routes.push(route)
}
