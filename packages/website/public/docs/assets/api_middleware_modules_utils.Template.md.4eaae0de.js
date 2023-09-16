import{_ as e,o as t,c as a,O as o}from"./chunks/framework.c4814614.js";const u=JSON.parse('{"title":"Namespace: Template","description":"","frontmatter":{},"headers":[],"relativePath":"api/middleware/modules/utils.Template.md","filePath":"api/middleware/modules/utils.Template.md"}'),l={name:"api/middleware/modules/utils.Template.md"},n=o('<h1 id="namespace-template" tabindex="-1">Namespace: Template <a class="header-anchor" href="#namespace-template" aria-label="Permalink to &quot;Namespace: Template&quot;">​</a></h1><p><a href="./utils.html">utils</a>.Template</p><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/utils.Template.CloneResult.html">CloneResult</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="clone" tabindex="-1">clone <a class="header-anchor" href="#clone" aria-label="Permalink to &quot;clone&quot;">​</a></h3><p>▸ <strong>clone</strong>(<code>object</code>, <code>options?</code>): <a href="./../interfaces/utils.Template.CloneResult.html"><code>CloneResult</code></a> | <a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></p><p>克隆整个配置单</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></td><td style="text-align:left;">EngineSupportLoadOptions</td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">额外选项 - detail:bolean 返回clone映射 - fillName 是否填充未命名的单位</td></tr><tr><td style="text-align:left;"><code>options.detail?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>options.fillName?</code></td><td style="text-align:left;"><code>boolean</code> | (<code>SymbolConfig</code>: <code>any</code>) =&gt; <code>string</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/utils.Template.CloneResult.html"><code>CloneResult</code></a> | <a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></p><p>EngineSupportLoadOptions | CloneResult</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/utils/template.ts#L21" target="_blank" rel="noreferrer">packages/middleware/utils/template.ts:21</a></p><hr><h3 id="handler" tabindex="-1">handler <a class="header-anchor" href="#handler" aria-label="Permalink to &quot;handler&quot;">​</a></h3><p>▸ <strong>handler</strong>(<code>object</code>, <code>handler</code>, <code>options?</code>): <a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></p><p>对配置单中的每个配置项做处理</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></td></tr><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;">(<code>config</code>: <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a>) =&gt; <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.assets?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>options.clone?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/utils/template.ts#L77" target="_blank" rel="noreferrer">packages/middleware/utils/template.ts:77</a></p><hr><h3 id="observable" tabindex="-1">observable <a class="header-anchor" href="#observable" aria-label="Permalink to &quot;observable&quot;">​</a></h3><p>▸ <strong>observable</strong>(<code>object</code>, <code>obCallback?</code>): <a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><code>string</code> | <a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></td></tr><tr><td style="text-align:left;"><code>obCallback?</code></td><td style="text-align:left;">(<code>config</code>: <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a>) =&gt; <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./engine.html#enginesupportloadoptions"><code>EngineSupportLoadOptions</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/utils/template.ts#L118" target="_blank" rel="noreferrer">packages/middleware/utils/template.ts:118</a></p><hr><h3 id="planish" tabindex="-1">planish <a class="header-anchor" href="#planish" aria-label="Permalink to &quot;planish&quot;">​</a></h3><p>▸ <strong>planish</strong>(<code>configs</code>): <code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a>&gt;</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>configs</code></td><td style="text-align:left;"><a href="./plugin_DataSupportManagerPlugin.html#loadoptions"><code>LoadOptions</code></a></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/utils/template.ts#L104" target="_blank" rel="noreferrer">packages/middleware/utils/template.ts:104</a></p>',43),d=[n];function r(i,s,c,h,p,f){return t(),a("div",null,d)}const g=e(l,[["render",r]]);export{u as __pageData,g as default};
