export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/coding/html.html", { loader: () => import(/* webpackChunkName: "coding_html.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/coding/html.html.js"), meta: {"title":"HTML 编码规范"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
