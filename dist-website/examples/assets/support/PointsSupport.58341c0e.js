import"../common.006007ed.js";import{C as m,a as d,g as e}from"../Vis.es.824ecc78.js";import"../three.988821a1.js";import"../vis-three.8be35a0c.js";const p=new m({width:256,height:256}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(206, 42, 230)",t.font=" bold 62px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("POINTS",128,128)}).preview(),n=new d().setDom(document.getElementById("app")).setSize().setStats(!0).registerResources({"example.canvas":p.get()}),i=e("PointLight",{position:{x:30,y:50},distance:100}),s=e("CanvasTexture",{url:"example.canvas"}),a=e("PointsMaterial",{map:s.vid,size:15}),o=e("BoxGeometry",{width:100,height:100,depth:100,widthSegments:3,heightSegments:3,depthSegments:3}),r=e("Points",{material:a.vid,geometry:o.vid}),g=e("Scene",{children:[i.vid,r.vid]});n.applyConfig(i,s,a,o,r,g);n.setScene(g.vid).play();
