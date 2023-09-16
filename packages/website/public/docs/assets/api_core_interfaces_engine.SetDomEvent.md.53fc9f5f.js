import{_ as e,o as a,c as n,O as s}from"./chunks/framework.c4814614.js";const y=JSON.parse('{"title":"Interface: SetDomEvent","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/interfaces/engine.SetDomEvent.md","filePath":"api/core/interfaces/engine.SetDomEvent.md"}'),t={name:"api/core/interfaces/engine.SetDomEvent.md"},o=s(`<h1 id="interface-setdomevent" tabindex="-1">Interface: SetDomEvent <a class="header-anchor" href="#interface-setdomevent" aria-label="Permalink to &quot;Interface: SetDomEvent&quot;">​</a></h1><p><a href="./../modules/engine.html">engine</a>.SetDomEvent</p><p>设置Dom事件的触发对象接口</p><p><strong><code>Example</code></strong></p><p>可以将其作为泛型传入Engine的EventDispatcher方法中</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">SetDomEvent</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;setDom&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event.dom);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">SetDomEvent</span><span style="color:#24292E;">&gt;(</span><span style="color:#032F62;">&#39;setDom&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event.dom);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></p><p>↳ <strong><code>SetDomEvent</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="dom" tabindex="-1">dom <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;dom&quot;">​</a></h3><p>• <strong>dom</strong>: <code>HTMLElement</code></p><p>设置时传入的dom对象</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/engine/index.ts#L20" target="_blank" rel="noreferrer">engine/index.ts:20</a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>• <strong>type</strong>: <code>&quot;setDom&quot;</code></p><p>事件类型</p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./eventDispatcher.BaseEvent.html">BaseEvent</a>.<a href="./eventDispatcher.BaseEvent.html#type">type</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/engine/index.ts#L18" target="_blank" rel="noreferrer">engine/index.ts:18</a></p>`,22),r=[o];function l(p,i,c,d,h,E){return a(),n("div",null,r)}const f=e(t,[["render",l]]);export{y as __pageData,f as default};
