export const context = require.context('./pages', true, /\.tsx$/)
export const pages = context.keys().map((key) => {
  const path = key.slice(1, -4)
  return `/pages${path}`
})
