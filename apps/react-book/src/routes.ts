import { lazy } from 'react'

const modules = import.meta.glob('./book/**/*.tsx')
export const routes: any[] = []
for (const [key, component] of Object.entries(modules)) {
  const path = key.split('/')[2]
  const route = {
    path,
    Page: lazy(component as any),
  }
  routes.push(route)
}
