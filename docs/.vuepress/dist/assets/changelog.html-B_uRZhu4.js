import{_ as t,c,a as e,b as s,e as i,d as a,w as p,r as d,o}from"./app-BfN8xWX-.js";const r={};function u(v,n){const l=d("RouteLink");return o(),c("div",null,[n[14]||(n[14]=e('<h1 id="changelog-规范" tabindex="-1"><a class="header-anchor" href="#changelog-规范"><span>CHANGELOG 规范</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 <code>Changelog</code>）吗？</p><ol><li>如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 <code>Changelog</code> <code>是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog</code> 可以帮助他们了解新版本有哪些变化。</li><li>如果你在开发一个业务应用，那么 <code>Changelog</code> 不是必需的。然而提供一个 <code>Changelog</code> 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。</li></ol>',4)),s("p",null,[i(l,{to:"/engineering/git.html"},{default:p(()=>n[0]||(n[0]=[a("Git 规范")])),_:1}),n[1]||(n[1]=a(" 已经对 ")),n[2]||(n[2]=s("code",null,"Git",-1)),n[3]||(n[3]=a(" 提交日志的格式进行了约束，为何还要再约束 ")),n[4]||(n[4]=s("code",null,"Changelog",-1)),n[5]||(n[5]=a(" 的格式呢？"))]),n[15]||(n[15]=e(`<ol><li>即便是约束了 <code>Git log</code> 的格式，也无法直接将 <code>Git log</code> 导出一个良好的 <code>Changelog</code>。因为 <code>Changelog</code> 中描述的内容需要更加精炼和归纳，对信息降噪处理等等，因此手写 <code>Changelog</code> 仍然是更好的选择。</li><li>不管是手写还是自动生成，<code>Changelog</code> 的格式都不能直接照搬 <code>Git log</code> 的格式。这两者的区别与联系同在。</li></ol><h2 id="_1-文件" tabindex="-1"><a class="header-anchor" href="#_1-文件"><span>1. 文件</span></a></h2><ul><li><p>1.1.【强制】<code>Changelog</code> 文件必须取名为 <code>CHANGELOG.md</code></p><p>使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">changelog.md</span>
<span class="line">Changelog.md</span>
<span class="line">ChangeLog.md</span>
<span class="line">CHANGELOG.MD</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">CHANGELOG.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.2.【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 <code>.md</code> 作为后缀</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">CHANGELOG.txt</span>
<span class="line">CHANGELOG.docx</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">CHANGELOG.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.3.【强制】<code>Changelog</code> 文件必须存放在项目根目录下，和 <code>README.md</code>、<code>CONTRIBUTING.md</code> 等并列</p></li></ul><h2 id="_2-格式" tabindex="-1"><a class="header-anchor" href="#_2-格式"><span>2. 格式</span></a></h2><p>规范推荐的标准 <code>Changelog</code> 格式如下：</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 更新日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [&lt;version&gt;](version-diff-url) (&lt;date&gt;)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> &lt;type&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> &lt;type&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token list punctuation">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细规则如下：</p>`,7)),s("ul",null,[n[12]||(n[12]=e(`<li><p>2.1.【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> 修改日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> ChangeLog</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> 更新日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> Change Log</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.2【强制】<code>Changelog</code> 内容按版本号降序排列，最新版本放在最前面</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.3.【强制】版本号 <code>version</code> 需遵循 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">SemVer 规范</a></p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1.0.a</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 0.a.1</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 0.0.0.1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.4.【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 \`diff</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.5.【强制】更新日期 <code>date</code> 采用 <code>yyyy-MM-dd</code> 格式</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url) (20200905)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url) (2020-9-5)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [2.0.0](https://version-diff-url) (2020-09-05)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,5)),s("li",null,[s("p",null,[n[7]||(n[7]=a("2.6.【推荐】更新类型 ")),n[8]||(n[8]=s("code",null,"type",-1)),n[9]||(n[9]=a(" 与 Git message header 中的 ")),i(l,{to:"/engineering/1.git.html#1.3.1-type"},{default:p(()=>n[6]||(n[6]=[s("code",null,"type",-1)])),_:1}),n[10]||(n[10]=a(" 相关联，可以不一一对应"))]),n[11]||(n[11]=e("<p><code>type</code> 用以说明更新的类型，推荐值如下：</p><ul><li>新增（<code>Features</code>）：新增功能。</li><li>修复（<code>Bug Fixes</code>）：修复 bug。</li><li>文档（<code>Documentation</code>）：文档新增或者修改。</li><li>变更（<code>Changed</code>）：对于某些已存在功能所发生的逻辑变化。</li><li>优化（<code>Refactored</code>）：性能或结构上的优化，并未带来功能的逻辑变化。</li><li>即将删除（<code>Deprecation Warnings</code>）：即将废弃功能。</li><li>删除（<code>Removed</code>）：已删除的功能。</li><li>重大变更（<code>Breaking Changes</code>）：破坏性变动。</li></ul>",2))]),n[13]||(n[13]=s("li",null,[s("p",null,[a("2.7.【推荐】更新描述 "),s("code",null,"desc"),a(" 内容需要注意以下几点：")]),s("ol",null,[s("li",null,"使用完整的句子。即在标点方面遵循一般的文档格式规范；如果使用英语，则句首大写。"),s("li",null,"时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。"),s("li",null,"句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。"),s("li",null,"注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。")])],-1))]),n[16]||(n[16]=e(`<h2 id="样本示例" tabindex="-1"><a class="header-anchor" href="#样本示例"><span>样本示例</span></a></h2><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 更新日志</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [4.6.0](https://github.com/ant-design/ant-design/compare/4.5.4...4.6.0) (2020-08-23)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 新增</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 新增图片组件 Image。</span>
<span class="line"><span class="token list punctuation">-</span> Table 新增 <span class="token code-snippet code keyword">\`sticky\`</span> 属性以支持固定表头和滚动条。<span class="token url">[<span class="token content">#25939</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/25939</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 修复</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 修复 Pagination 字体相关样式问题。<span class="token url">[<span class="token content">#26230</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/26230</span>)</span></span>
<span class="line"><span class="token list punctuation">-</span> 修复 Space <span class="token code-snippet code keyword">\`children\`</span> 有时会重新渲染的问题。<span class="token url">[<span class="token content">#26219</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/26219</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 优化</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 用 hooks 重构 Upload。</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [4.5.4](https://github.com/ant-design/ant-design/compare/4.5.3...4.5.4)(2020-08-12)</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 新增</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 新增 <span class="token code-snippet code keyword">\`@badge-color\`</span> Less 变量。</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 修复</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> 修复 Form.Item 在 <span class="token code-snippet code keyword">\`hidden\`</span> 时引用 Less 样式时失效的问题。<span class="token url">[<span class="token content">#26152</span>](<span class="token url">https://github.com/ant-design/ant-design/pull/26152</span>)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://keepachangelog.com/" target="_blank" rel="noopener noreferrer">Keep a Changelog</a></li><li><a href="https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Conventional Changelog</a></li><li><a href="https://github.com/angular/angular.js/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Angular Changelog</a></li><li><a href="https://github.com/ant-design/ant-design/blob/master/CHANGELOG.zh-CN.md" target="_blank" rel="noopener noreferrer">Ant Design Changelog</a></li></ul>`,4))])}const g=t(r,[["render",u]]),b=JSON.parse('{"path":"/engineering/changelog.html","title":"CHANGELOG 规范","lang":"en-US","frontmatter":{"title":"CHANGELOG 规范","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"澄怀","link":"https://github.com/encode-studio-fe/fe-spec"}},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 文件","slug":"_1-文件","link":"#_1-文件","children":[]},{"level":2,"title":"2. 格式","slug":"_2-格式","link":"#_2-格式","children":[]},{"level":2,"title":"样本示例","slug":"样本示例","link":"#样本示例","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{},"filePathRelative":"engineering/changelog.md"}');export{g as comp,b as data};
