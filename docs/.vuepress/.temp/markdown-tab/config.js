import { CodeTabs } from "D:/learning/code/规范工程化/demo-xy/node_modules/.pnpm/@vuepress+plugin-markdown-t_7deb66ac2555fc708dfc4f6ee14d0598/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/learning/code/规范工程化/demo-xy/node_modules/.pnpm/@vuepress+plugin-markdown-t_7deb66ac2555fc708dfc4f6ee14d0598/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/learning/code/规范工程化/demo-xy/node_modules/.pnpm/@vuepress+plugin-markdown-t_7deb66ac2555fc708dfc4f6ee14d0598/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
