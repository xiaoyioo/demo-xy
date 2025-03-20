export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/coding/css.html", { loader: () => import(/* webpackChunkName: "coding_css.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/coding/css.html.js"), meta: {"title":"CSS 编码规范"} }],
  ["/coding/html.html", { loader: () => import(/* webpackChunkName: "coding_html.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/coding/html.html.js"), meta: {"title":"HTML 编码规范"} }],
  ["/coding/javascript.html", { loader: () => import(/* webpackChunkName: "coding_javascript.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/coding/javascript.html.js"), meta: {"title":"JavaScript 编码规范"} }],
  ["/coding/node.html", { loader: () => import(/* webpackChunkName: "coding_node.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/coding/node.html.js"), meta: {"title":"Node 编码规范"} }],
  ["/coding/typescript.html", { loader: () => import(/* webpackChunkName: "coding_typescript.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/coding/typescript.html.js"), meta: {"title":"TypeScript 编码规范"} }],
  ["/engineering/changelog.html", { loader: () => import(/* webpackChunkName: "engineering_changelog.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/engineering/changelog.html.js"), meta: {"title":"CHANGELOG 规范"} }],
  ["/engineering/doc.html", { loader: () => import(/* webpackChunkName: "engineering_doc.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/engineering/doc.html.js"), meta: {"title":"文档规范"} }],
  ["/engineering/git.html", { loader: () => import(/* webpackChunkName: "engineering_git.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/engineering/git.html.js"), meta: {"title":"Git 规范"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/learning/code/规范工程化/demo-xy/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
