<template><div><h1 id="changelog-规范" tabindex="-1"><a class="header-anchor" href="#changelog-规范"><span>CHANGELOG 规范</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 <code v-pre>Changelog</code>）吗？</p>
<ol>
<li>如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 <code v-pre>Changelog</code> <code v-pre>是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog</code> 可以帮助他们了解新版本有哪些变化。</li>
<li>如果你在开发一个业务应用，那么 <code v-pre>Changelog</code> 不是必需的。然而提供一个 <code v-pre>Changelog</code> 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。</li>
</ol>
<p><RouteLink to="/engineering/git.html">Git 规范</RouteLink> 已经对 <code v-pre>Git</code> 提交日志的格式进行了约束，为何还要再约束 <code v-pre>Changelog</code> 的格式呢？</p>
<ol>
<li>即便是约束了 <code v-pre>Git log</code> 的格式，也无法直接将 <code v-pre>Git log</code> 导出一个良好的 <code v-pre>Changelog</code>。因为 <code v-pre>Changelog</code> 中描述的内容需要更加精炼和归纳，对信息降噪处理等等，因此手写 <code v-pre>Changelog</code> 仍然是更好的选择。</li>
<li>不管是手写还是自动生成，<code v-pre>Changelog</code> 的格式都不能直接照搬 <code v-pre>Git log</code> 的格式。这两者的区别与联系同在。</li>
</ol>
<h2 id="_1-文件" tabindex="-1"><a class="header-anchor" href="#_1-文件"><span>1. 文件</span></a></h2>
<ul>
<li>
<p>1.1.【强制】<code v-pre>Changelog</code> 文件必须取名为 <code v-pre>CHANGELOG.md</code></p>
<p>使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line">changelog.md</span>
<span class="line">Changelog.md</span>
<span class="line">ChangeLog.md</span>
<span class="line">CHANGELOG.MD</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line">CHANGELOG.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>1.2.【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 <code v-pre>.md</code> 作为后缀</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line">CHANGELOG.txt</span>
<span class="line">CHANGELOG.docx</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line">CHANGELOG.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>1.3.【强制】<code v-pre>Changelog</code> 文件必须存放在项目根目录下，和 <code v-pre>README.md</code>、<code v-pre>CONTRIBUTING.md</code> 等并列</p>
</li>
</ul>
<h2 id="_2-格式" tabindex="-1"><a class="header-anchor" href="#_2-格式"><span>2. 格式</span></a></h2>
<p>规范推荐的标准 <code v-pre>Changelog</code> 格式如下：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 更新日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [&lt;version>](version-diff-url) (&lt;date>)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> &lt;type></span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> &lt;type></span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细规则如下：</p>
<ul>
<li>
<p>2.1.【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> 修改日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> ChangeLog</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> 更新日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> Change Log</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>2.2【强制】<code v-pre>Changelog</code> 内容按版本号降序排列，最新版本放在最前面</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>2.3.【强制】版本号 <code v-pre>version</code> 需遵循 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">SemVer 规范</a></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.a</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 0.a.1</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 0.0.0.1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-rc.1</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-beta.2</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-beta.1</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-beta</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-alpha.beta</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-alpha.1</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0-alpha</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>2.4.【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 `diff</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>2.5.【强制】更新日期 <code v-pre>date</code> 采用 <code v-pre>yyyy-MM-dd</code> 格式</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- bad --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url) (20200905)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url) (2020-9-5)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url) (2020-09-05)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>2.6.【推荐】更新类型 <code v-pre>type</code> 与 Git message header 中的 <RouteLink to="/engineering/1.git.html#1.3.1-type"><code v-pre>type</code></RouteLink> 相关联，可以不一一对应</p>
<p><code v-pre>type</code> 用以说明更新的类型，推荐值如下：</p>
<ul>
<li>新增（<code v-pre>Features</code>）：新增功能。</li>
<li>修复（<code v-pre>Bug Fixes</code>）：修复 bug。</li>
<li>文档（<code v-pre>Documentation</code>）：文档新增或者修改。</li>
<li>变更（<code v-pre>Changed</code>）：对于某些已存在功能所发生的逻辑变化。</li>
<li>优化（<code v-pre>Refactored</code>）：性能或结构上的优化，并未带来功能的逻辑变化。</li>
<li>即将删除（<code v-pre>Deprecation Warnings</code>）：即将废弃功能。</li>
<li>删除（<code v-pre>Removed</code>）：已删除的功能。</li>
<li>重大变更（<code v-pre>Breaking Changes</code>）：破坏性变动。</li>
</ul>
</li>
<li>
<p>2.7.【推荐】更新描述 <code v-pre>desc</code> 内容需要注意以下几点：</p>
<ol>
<li>使用完整的句子。即在标点方面遵循一般的文档格式规范；如果使用英语，则句首大写。</li>
<li>时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。</li>
<li>句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。</li>
<li>注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。</li>
</ol>
</li>
</ul>
<h2 id="样本示例" tabindex="-1"><a class="header-anchor" href="#样本示例"><span>样本示例</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 更新日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [4.6.0](https://github.com/ant-design/ant-design/compare/4.5.4...4.6.0) (2020-08-23)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 新增</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 新增图片组件 Image。</span>
<span class="line"><span class="token list punctuation">-</span> Table 新增 <span class="token code-snippet code keyword">`sticky`</span> 属性以支持固定表头和滚动条。<span class="token url">[<span class="token content">#25939</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/25939</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 修复</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 修复 Pagination 字体相关样式问题。<span class="token url">[<span class="token content">#26230</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/26230</span>)</span></span>
<span class="line"><span class="token list punctuation">-</span> 修复 Space <span class="token code-snippet code keyword">`children`</span> 有时会重新渲染的问题。<span class="token url">[<span class="token content">#26219</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/26219</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 优化</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 用 hooks 重构 Upload。</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [4.5.4](https://github.com/ant-design/ant-design/compare/4.5.3...4.5.4)(2020-08-12)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 新增</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 新增 <span class="token code-snippet code keyword">`@badge-color`</span> Less 变量。</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 修复</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 修复 Form.Item 在 <span class="token code-snippet code keyword">`hidden`</span> 时引用 Less 样式时失效的问题。<span class="token url">[<span class="token content">#26152</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/26152</span>)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<ul>
<li><a href="https://keepachangelog.com/" target="_blank" rel="noopener noreferrer">Keep a Changelog</a></li>
<li><a href="https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Conventional Changelog</a></li>
<li><a href="https://github.com/angular/angular.js/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Angular Changelog</a></li>
<li><a href="https://github.com/ant-design/ant-design/blob/master/CHANGELOG.zh-CN.md" target="_blank" rel="noopener noreferrer">Ant Design Changelog</a></li>
</ul>
</div></template>


