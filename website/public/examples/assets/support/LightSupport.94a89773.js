import"../common.006007ed.js";import{C as h,a as p,g as e}from"../Vis.es.74edd40b.js";import"../three.b54e9ae7.js";import"../vis-three.36482fbe.js";new h({width:256,height:256}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(206, 42, 230)",t.font=" bold 68px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("LIGHT",128,128)}).preview();const i=new p().setDom(document.getElementById("app")).setSize().setStats(!0),n=e("AmbientLight",{intensity:.2}),o=e("PointLight",{position:{y:28},distance:20,color:"rgb(255, 0, 0)",intensity:.6}),s=e("SpotLight",{position:{x:20},distance:30,color:"rgb(0, 0, 255)",intensity:.6}),r=e("DirectionalLight",{color:"rgb(0, 255, 0)",intensity:.5,position:{x:0,y:0,z:-20}}),a=e("MeshStandardMaterial"),d=e("BoxGeometry",{width:20,height:20,depth:20}),g=e("Mesh",{material:a.vid,geometry:d.vid}),l=e("Scene",{children:[n.vid,o.vid,s.vid,r.vid,g.vid]});i.applyConfig(n,o,s,r,a,d,g,l);i.setScene(l.vid).play();
