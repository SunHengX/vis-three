import"../modulepreload-polyfill.b7f2da20.js";import{M as S}from"../index.7fc95210.js";import{g as i}from"../vis-three.middleware.es.2585b78e.js";import{g as B}from"../lil-gui.module.min.095a7f3d.js";import"../index.be5e1784.js";import"../index.5fd0e639.js";import"../three.837c9bb0.js";import"../index.db239e15.js";import"../Pass.1ae4f2a0.js";import"../index.d505a6dc.js";import"../index.6bd8d818.js";import"../index.1d1f4865.js";import"../index.476759d5.js";import"../index.3e934afa.js";import"../index.8a974fac.js";import"../index.0eec027b.js";import"../vis-three.plugin-keyboard-manager.es.358da2a0.js";import"../Antdv.a86c3c0d.js";import"../index.32011c09.js";import"../CSS3DRenderer.d266155a.js";import"../index.813bc471.js";import"../index.e6c950f1.js";import"../index.c0066b9f.js";import"../index.80c3482e.js";import"../index.83518642.js";import"../index.5dfe0d36.js";import"../index.df02a99b.js";import"../vis-three.plugin-pointer-manager.es.9009bd78.js";import"../index.ca59a760.js";import"../index.c30fef9c.js";import"../index.66ce3d50.js";import"../index.9299f102.js";import"../index.7bdd9bd7.js";import"../vis-three.module-animation-action.es.6d7baff5.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.9947652a.js";import"../index.a7251911.js";import"../vis-three.strategy-orbit-controls-support.es.feebca3b.js";import"../index.cc89943f.js";import"../vis-three.library-parser.es.152102aa.js";import"../vis-three.strategy-multi-renderer.es.35c3b855.js";import"../vis-three.plugin-loader-manager.es.dd5ac293.js";import"../G6.7a2bba98.js";const m=new S().setDom(document.getElementById("app")).setStats(!0).setSize().play();i.injectEngine=m;const d=i("Scene");m.setSceneBySymbol(d.vid);i.injectScene=d.vid;i("PointLight",{position:{y:30},distance:50});const e=i("MeshBasicMaterial",{color:"rgb(200, 100, 100)"}),p=i("PointsMaterial",{color:"rgb(100, 200, 100)"}),n=i("SpriteMaterial",{color:"rgb(100, 100, 200)"}),t=i("BoxGeometry",{width:20,height:10,depth:20}),s=i("Mesh",{material:e.vid,geometry:t.vid,position:{x:-15}}),l=i("Line",{material:e.vid,geometry:t.vid,position:{x:15}}),c=i("Points",{material:p.vid,geometry:t.vid,position:{z:25}}),b=i("Sprite",{material:n.vid,geometry:t.vid,position:{z:-25},scale:{x:15,y:15}}),r=i("SphereGeometry",{radius:7}),a=i("ConeGeometry",{radius:7,height:10,radialSegments:16}),v=i("MeshStandardMaterial",{color:"red"});i("SpriteMaterial",{color:"orange"});const x=i("LineBasicMaterial",{color:"yellow"}),M=i("PointsMaterial",{color:"yellow"}),o=new B,g=o.addFolder("Mesh");g.add(s,"geometry",{box:t.vid,sphere:r.vid,cone:a.vid});g.add(s,"material",{meshBasicMaterial:e.vid,meshStandardMaterial:v.vid});const h=o.addFolder("Line");h.add(l,"geometry",{box:t.vid,sphere:r.vid,cone:a.vid});h.add(l,"material",{lineBasicMaterial:x.vid,meshBasicMaterial:e.vid,meshStandardMaterial:v.vid});const y=o.addFolder("Points");y.add(c,"geometry",{box:t.vid,sphere:r.vid,cone:a.vid});y.add(c,"material",{pointsMaterial:p.vid,pointsMaterial2:M.vid});const F=o.addFolder("Sprite");F.add(b,"material",{spriteMaterial:n.vid,spriteMaterial2:M.vid});