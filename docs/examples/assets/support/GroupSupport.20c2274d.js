import"../common.006007ed.js";import{C as g,M as h,g as e}from"../Vis.es.a3304217.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";new g({width:256,height:256}).draw(i=>{i.textBaseline="middle",i.textAlign="center",i.fillStyle="rgb(206, 42, 230)",i.font=" bold 72px \u5FAE\u8F6F\u96C5\u9ED1",i.fillText("GROUP",128,128)}).preview();const n=new h().setDom(document.getElementById("app")).setSize().setStats(!0),s=e("PointLight",{position:{x:30,y:50},distance:100}),t=e("MeshStandardMaterial"),o=e("BoxGeometry",{width:20,height:20,depth:20}),r=e("Mesh",{material:t.vid,geometry:o.vid,position:{z:-20}}),d=e("Mesh",{material:t.vid,geometry:o.vid,position:{z:20,x:20}}),a=e("Mesh",{material:t.vid,geometry:o.vid,position:{z:20,x:-20}}),m=e("Group",{children:[r.vid,d.vid,a.vid],position:{y:20}}),p=e("Scene",{children:[m.vid,s.vid]});n.applyConfig(t,o,s,r,d,a,m,p);n.setScene(p.vid).play();window.engine=n;
