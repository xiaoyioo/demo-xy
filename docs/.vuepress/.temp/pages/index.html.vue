<template><div><h2 id="设计目的" tabindex="-1"><a class="header-anchor" href="#设计目的"><span>⭐ 设计目的</span></a></h2>
<p>随着前端技术的发展，前端项目正在变得越来越复杂。<code v-pre>JavaScript</code> 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。</p>
<p>那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。</p>
</br>
<h2 id="为什要学习前端工程化" tabindex="-1"><a class="header-anchor" href="#为什要学习前端工程化"><span>💡 为什要学习前端工程化</span></a></h2>
<p>通过本套课程，您可以学会：</p>
<ol>
<li>学习如何通过 <code v-pre>monorepo</code> 和 <code v-pre>pnpm</code> 的多包管理方式开发一套多 <code v-pre>npm</code> 包的管理方式，以及如何将发包流程植入 <code v-pre>CI</code> 实现自动化发布，以及<code v-pre>CHANGLOG</code>的自动化更新部署；</li>
<li>学习现有前端前沿的研发流程下，我们可以通过哪些工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于<code v-pre>eslint</code>、<code v-pre>stylelint</code>、<code v-pre>commitlint</code>、<code v-pre>markdownlint</code>、<code v-pre>husky</code>等，以及如何将单元测试植入配套工具的具体实现；</li>
<li>学习如何通过脚手架的方式，以交互式形式一键接入，实现对<code v-pre>JavaScript</code>、<code v-pre>Typescript</code>、<code v-pre>React</code>、<code v-pre>Vue</code>等不同类型的前端项目下的标准的语法限制；</li>
<li>学习如何对存量项目进行优化：对于存量代码不符合规范的问题，支持一键扫描和一键修复，一键式的修复存量问题，最小化存量代码的更新成本；</li>
<li>学习如何对新项目添加规范：支持一键接入新增项目，通过结合<code v-pre>gitpre-commit</code>钩子，对提交文件进行编码规范的扫描；同时通过<code v-pre>husky</code>的<code v-pre>commit-msg</code>钩子，对本次代码提交<code v-pre>message</code>的格式进行扫描。</li>
</ol>
</br>
<h2 id="配套工具" tabindex="-1"><a class="header-anchor" href="#配套工具"><span>🛋️ 配套工具</span></a></h2>
<p>我们引入了多个业界流行的 <code v-pre>Linter</code> 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：</p>
<table>
<thead>
<tr>
<th>规范</th>
<th>Lint 工具</th>
<th>NPM 包</th>
</tr>
</thead>
<tbody>
<tr>
<td>JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范</td>
<td><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a></td>
<td><a href="https://www.npmjs.com/package/encode-fe-eslint-config" target="_blank" rel="noopener noreferrer">encode-fe-eslint-config</a></td>
</tr>
<tr>
<td>CSS 编码规范</td>
<td><a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">stylelint</a></td>
<td><a href="https://www.npmjs.com/package/encode-fe-stylelint-config" target="_blank" rel="noopener noreferrer">encode-fe-stylelint-config</a></td>
</tr>
<tr>
<td>Git 规范</td>
<td><a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">commitlint</a></td>
<td><a href="https://www.npmjs.com/package/encode-fe-commitlint-config" target="_blank" rel="noopener noreferrer">encode-fe-commitlint-config</a></td>
</tr>
<tr>
<td>文档规范</td>
<td><a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noopener noreferrer">markdownlint</a></td>
<td><a href="https://www.npmjs.com/package/encode-fe-markdownlint-config" target="_blank" rel="noopener noreferrer">encode-fe-markdownlint-config</a></td>
</tr>
<tr>
<td>Eslint 插件</td>
<td><a href="https://eslint.org/docs/latest/extend/plugins" target="_blank" rel="noopener noreferrer">ESlint Plugin</a></td>
<td><a href="https://www.npmjs.com/package/encode-fe-eslint-plugin" target="_blank" rel="noopener noreferrer">encode-fe-eslint-plugin</a></td>
</tr>
</tbody>
</table>
<p><a href="https://www.npmjs.com/package/encode-fe-lint" target="_blank" rel="noopener noreferrer">encode-fe-lint</a> 收敛屏蔽了上述依赖和配置细节，提供简单的 <code v-pre>CLI</code> 和 <code v-pre>Node.js API</code>，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。</p>
<p>您可以使用<a href="https://www.npmjs.com/package/encode-fe-lint" target="_blank" rel="noopener noreferrer">encode-fe-lint</a> 方便地为项目接入全部规范。</p>
</div></template>


