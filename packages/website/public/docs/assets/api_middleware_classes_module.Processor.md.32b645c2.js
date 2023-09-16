import{_ as e,o as t,c as a,O as d}from"./chunks/framework.c4814614.js";const u=JSON.parse('{"title":"Class: Processor<S, T, E, C>","description":"","frontmatter":{},"headers":[],"relativePath":"api/middleware/classes/module.Processor.md","filePath":"api/middleware/classes/module.Processor.md"}'),o={name:"api/middleware/classes/module.Processor.md"},r=d('<h1 id="class-processor-s-t-e-c" tabindex="-1">Class: Processor&lt;S, T, E, C&gt; <a class="header-anchor" href="#class-processor-s-t-e-c" aria-label="Permalink to &quot;Class: Processor&lt;S, T, E, C\\&gt;&quot;">​</a></h1><p><a href="./../modules/module.html">module</a>.Processor</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>object</code></td></tr><tr><td style="text-align:left;"><code>E</code></td><td style="text-align:left;">extends <a href="./engine.EngineSupport.html"><code>EngineSupport</code></a></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>S</code>, <code>T</code>&gt;</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Processor</strong>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;(<code>options</code>)</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>object</code></td></tr><tr><td style="text-align:left;"><code>E</code></td><td style="text-align:left;">extends <a href="./engine.EngineSupport.html"><code>EngineSupport</code></a>&lt;<code>E</code>&gt;</td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>S</code>, <code>T</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/module.ProcessorOptions.html"><code>ProcessorOptions</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:100</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;commands&quot;">​</a></h3><p>• <code>Optional</code> <strong>commands</strong>: <a href="./../interfaces/module.ProcessorCommands.html"><code>ProcessorCommands</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:96</p><hr><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>• <strong>config</strong>: () =&gt; <code>S</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (): <code>S</code></p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>S</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:95</p><hr><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h3><p>• <strong>create</strong>: (<code>config</code>: <code>S</code>, <code>engine</code>: <code>E</code>, <code>compiler</code>: <code>C</code>) =&gt; <code>T</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>config</code>, <code>engine</code>, <code>compiler</code>): <code>T</code></p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>S</code></td></tr><tr><td style="text-align:left;"><code>engine</code></td><td style="text-align:left;"><code>E</code></td></tr><tr><td style="text-align:left;"><code>compiler</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>T</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:97</p><hr><h3 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h3><p>• <strong>dispose</strong>: (<code>target</code>: <code>T</code>, <code>engine</code>: <code>E</code>, <code>compiler</code>: <code>C</code>) =&gt; <code>void</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>target</code>, <code>engine</code>, <code>compiler</code>): <code>void</code></p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>engine</code></td><td style="text-align:left;"><code>E</code></td></tr><tr><td style="text-align:left;"><code>compiler</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:98</p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>• <strong>type</strong>: <code>string</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:94</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>(<code>params</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>params</code></td><td style="text-align:left;"><a href="./../interfaces/module.ProcessParams.html"><code>ProcessParams</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:148</p><hr><h3 id="delete" tabindex="-1">delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;delete&quot;">​</a></h3><p>▸ <strong>delete</strong>(<code>params</code>): <code>void</code></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>params</code></td><td style="text-align:left;"><a href="./../interfaces/module.ProcessParams.html"><code>ProcessParams</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:180</p><hr><h3 id="expand" tabindex="-1">expand <a class="header-anchor" href="#expand" aria-label="Permalink to &quot;expand&quot;">​</a></h3><p>▸ <strong>expand</strong>&lt;<code>P</code>&gt;(<code>commands</code>): <a href="./module.Processor.html"><code>Processor</code></a>&lt;<code>P</code>, <code>T</code>, <code>E</code>, <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>P</code>, <code>T</code>&gt;&gt;</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>P</code></td><td style="text-align:left;">extends <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>commands</code></td><td style="text-align:left;"><a href="./../interfaces/module.ProcessorCommands.html"><code>ProcessorCommands</code></a>&lt;<code>P</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Processor.html"><code>Processor</code></a>&lt;<code>P</code>, <code>T</code>, <code>E</code>, <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>P</code>, <code>T</code>&gt;&gt;</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:196</p><hr><h3 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;process&quot;">​</a></h3><p>▸ <strong>process</strong>(<code>params</code>): <code>void</code></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>params</code></td><td style="text-align:left;"><a href="./../interfaces/module.ProcessParams.html"><code>ProcessParams</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:117</p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>(<code>params</code>): <code>void</code></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>params</code></td><td style="text-align:left;"><a href="./../interfaces/module.ProcessParams.html"><code>ProcessParams</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:164</p>',101),l=[r];function c(s,n,i,h,m,p){return t(),a("div",null,l)}const g=e(o,[["render",c]]);export{u as __pageData,g as default};
