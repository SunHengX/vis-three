import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{M as e}from"../index.06ca1071.js";import{A as m}from"../index.a7d17fbb.js";import{o as p}from"../Template.0387ac55.js";import"../index.a2f5d06c.js";import"../index.1a1708f8.js";import"../index.d8b4942b.js";import"../index.b6c2852c.js";import"../index.90c2f86e.js";import{l as n}from"../index.fdaaf24c.js";import{a}from"../index.d41f4f2a.js";import{m as r}from"../Antdv.35288747.js";import"../index.9427a589.js";import"../index.905449da.js";import"../three.a7f96461.js";import"../index.ac438749.js";import"../index.bc97152c.js";import"../index.eecf5bb8.js";import"../index.355261f2.js";import"../index.2afa8225.js";import"../index.774abea2.js";import"../index.7fa56c04.js";import"../index.248a65de.js";import"../index.72d4ac78.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";import"../index.512960c2.js";import"../index.7b782c3d.js";import"../index.725c43cc.js";import"../index.7e2f6976.js";import"../index.7c056589.js";import"../index.3d33b1b8.js";import"../index.82d0dfac.js";import"../index.16e30821.js";import"../index.3bb87df6.js";import"../index.56379ad5.js";import"../UnrealBloomPass.62a8742d.js";import"../index.f3cbbc88.js";import"../index.bbb1f9ff.js";import"../index.23480b0c.js";import"../index.15961e35.js";import"../index.8d77cd34.js";import"../G6.cf5ff0af.js";m.register(n);const o=new e().setDom(document.getElementById("app")).setSize();o.loaderManager.setPath("/vis-three/examples/");r.loading({content:"\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A0%",key:"loading",duration:0});o.loaderManager.addEventListener("loading",t=>{r.loading({content:`\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A${parseInt((t.loadSuccess/t.loadTotal*100).toString())}
      %`,key:"loading",duration:0})});o.loaderManager.addEventListener("loaded",t=>{r.success({content:"\u52A0\u8F7D\u5B8C\u6210\uFF01",key:"loading",duration:1})});a.get("/vis-three/examples/config/config-development.json").then(t=>{const i=p(t.data);o.loadConfigAsync(i).then(()=>{o.setCameraBySymbol(i.camera[0].vid).setSceneBySymbol(i.scene[0].vid).play()})});window.engine=o;
