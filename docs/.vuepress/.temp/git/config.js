import { GitContributors } from "D:/learning/code/规范工程化/demo-xy/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_efc2807f9af042819b5d72599aecef47/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/learning/code/规范工程化/demo-xy/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_efc2807f9af042819b5d72599aecef47/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
