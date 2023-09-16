import{_ as s,o as n,c as a,O as l}from"./chunks/framework.c4814614.js";const C=JSON.parse('{"title":"配置化开发","description":"","frontmatter":{},"headers":[],"relativePath":"start/middleware.md","filePath":"start/middleware.md"}'),p={name:"start/middleware.md"},o=l(`<h1 id="配置化开发" tabindex="-1">配置化开发 <a class="header-anchor" href="#配置化开发" aria-label="Permalink to &quot;配置化开发&quot;">​</a></h1><p>配置化开发根据配置化去形成场景结构与可视化面，还能够在运行期通过对配置的更改去影响 3D 场景，如何进行配置化开发，下面进行介绍。</p><h2 id="生成配置" tabindex="-1">生成配置 <a class="header-anchor" href="#生成配置" aria-label="Permalink to &quot;生成配置&quot;">​</a></h2><p>配置化开发的首要部分就是各种配置单的生成和配置单对应的对象功能，配置生成需要用到<code>@vis-three/middleware</code>中的<code>generateConfig</code>方法来生成配置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DisplayEngineSupport } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { generateConfig, CONFIGTYPE } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/middleware&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DisplayEngineSupport</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">setDom</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">material</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESHSTANDARDMATERIAL</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#9ECBFF;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">BOXGEOMETRY</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  depth: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mesh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESH</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">  material: material.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scene</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">SCENE</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [mesh.vid],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { DisplayEngineSupport } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { generateConfig, CONFIGTYPE } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/middleware&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DisplayEngineSupport</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">setDom</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">play</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">material</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESHSTANDARDMATERIAL</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  color: </span><span style="color:#032F62;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">BOXGEOMETRY</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  depth: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mesh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESH</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#24292E;">  material: material.vid,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scene</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">SCENE</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  children: [mesh.vid],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>配置化开发需要使用支持配置化的引擎，也就是继承<code>EngineSupport</code>的引擎。</li><li><code>generateConfig</code>是生成配置的统一 api。</li><li><code>CONFIGTYPE</code>中枚举了当下支持的所有物体配置单。</li><li><code>generateConfig</code>详情请参考 API 文档</li></ul></div><h2 id="应用配置" tabindex="-1">应用配置 <a class="header-anchor" href="#应用配置" aria-label="Permalink to &quot;应用配置&quot;">​</a></h2><p>生成配置以后，就是如何应用配置，应用配置我们可以手动应用。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">applyConfig</span><span style="color:#E1E4E8;">(material, geometry, mesh, scene);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">applyConfig</span><span style="color:#24292E;">(material, geometry, mesh, scene);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>手动应用配置注意应用配置的先后顺序，比如<code>mesh</code>需要依赖<code>material</code>, <code>geometry</code>这两个配置，那么<code>mesh</code>的应用要在<code>material</code>和<code>geometry</code>之后。</p></div><p>手动应用配置对应与复杂的项目场景是有必要的，能够让我们更好的跟踪配置的加入移除，那么对于简单一点的项目或者 demo 来说，我们可以使用自动应用配置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DisplayEngineSupport } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { generateConfig, CONFIGTYPE } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/middleware&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DisplayEngineSupport</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">setDom</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">generateConfig.injectEngine </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> engine;</span></span>
<span class="line"><span style="color:#E1E4E8;">generateConfig.autoInject </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">material</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESHSTANDARDMATERIAL</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#9ECBFF;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">BOXGEOMETRY</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  depth: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mesh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESH</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">  material: material.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scene</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">SCENE</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [mesh.vid],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { DisplayEngineSupport } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { generateConfig, CONFIGTYPE } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/middleware&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DisplayEngineSupport</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">setDom</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">play</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">generateConfig.injectEngine </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> engine;</span></span>
<span class="line"><span style="color:#24292E;">generateConfig.autoInject </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">material</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESHSTANDARDMATERIAL</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  color: </span><span style="color:#032F62;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">BOXGEOMETRY</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  depth: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mesh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESH</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#24292E;">  material: material.vid,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scene</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">SCENE</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  children: [mesh.vid],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="编辑配置" tabindex="-1">编辑配置 <a class="header-anchor" href="#编辑配置" aria-label="Permalink to &quot;编辑配置&quot;">​</a></h2><p>通过<code>generateConfig</code>生成的配置，其实就是一个很简单的对象，我们只用操作这个对象的相关属性，就能够影响 3D 场景中对象做出相关的变化。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mesh.position.x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">mesh.rotation.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">scene.children.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mesh.position.x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">mesh.rotation.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">scene.children.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这里要注意，对于<code>generateConfig</code>生成的配置不要直接替换整个配置对象里面的引用对象，比如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mesh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESH</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">mesh.position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, z: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> };</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mesh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESH</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">mesh.position </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { x: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, y: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, z: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> };</span></span></code></pre></div><p>主要是因为：</p><ol><li><p>直接替换掉整个引用，会造成额外性能开销。</p></li><li><p>直接替换引用，在相应模块内可能会丢失对象的跟踪处理。</p></li><li><p>在配置对象版本更新的时候，会缺失新版本的配置属性。</p></li></ol></div><h2 id="保存配置" tabindex="-1">保存配置 <a class="header-anchor" href="#保存配置" aria-label="Permalink to &quot;保存配置&quot;">​</a></h2><p>配置化开发的一大特点就是，只要有相关的配置的，在哪里都能够复现当前的场景，那么首要的部分就是配置单的保存。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">json</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> engine.</span><span style="color:#B392F0;">toJSON</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 直接导出json配置单</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">jsObject</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> engine.</span><span style="color:#B392F0;">exportConfig</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 导出干净的js对象</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">json</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> engine.</span><span style="color:#6F42C1;">toJSON</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 直接导出json配置单</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">jsObject</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> engine.</span><span style="color:#6F42C1;">exportConfig</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 导出干净的js对象</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>有很多的需求是在保存之前需要对配置单进行统一的操作，可以直接操作<code>jsObject</code>对象，<code>exportConfig</code>导出的 js 对象是深拷贝对象，不会影响运行期的配置。</p></div><h2 id="导入配置" tabindex="-1">导入配置 <a class="header-anchor" href="#导入配置" aria-label="Permalink to &quot;导入配置&quot;">​</a></h2><p>如何通过配置单还原整个场景？我们只用调用几个<code>api</code>就能搞定！</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> jsonConfig </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;jsonConfig.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { generateConfig, Template, JSONHanlder } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/middleware&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Template.</span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">(JSONHanlder.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">(jsonConfig), (</span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(c.type, c)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">loadConfig</span><span style="color:#E1E4E8;">(config, (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">loadConfigAsync</span><span style="color:#E1E4E8;">(config).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> jsonConfig </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;jsonConfig.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { generateConfig, Template, JSONHanlder } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/middleware&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Template.</span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">(JSONHanlder.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">(jsonConfig), (</span><span style="color:#E36209;">c</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(c.type, c)</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">loadConfig</span><span style="color:#24292E;">(config, (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">loadConfigAsync</span><span style="color:#24292E;">(config).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li><p>在应用配置单之前，我们需要通过<code>JSONHanlder</code>处理一次，因为比如<code>Infinity</code>, <code>-Infinity</code>等的数字对象在普通的<code>json</code>化过程中会丢失，所以需要特殊处理。</p></li><li><p>有很多的需求是在导入配置完成之后，还会对配置进行相关处理，所以目前的加载函数不会对配置进行自动的响应式转译，需要手动进行，这里可以使用<code>Template</code>模板处理方法进行。</p></li></ol></div>`,24),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{C as __pageData,g as default};
