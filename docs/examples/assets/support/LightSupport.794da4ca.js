import"../common.006007ed.js";import{C as h,M as c,g as t}from"../Vis.es.a3304217.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";new h({width:256,height:256}).draw(e=>{e.textBaseline="middle",e.textAlign="center",e.fillStyle="rgb(206, 42, 230)",e.font=" bold 68px \u5FAE\u8F6F\u96C5\u9ED1",e.fillText("LIGHT",128,128)});const i=new c().setDom(document.getElementById("app")).setSize().setStats(!0),n=t("AmbientLight",{intensity:.2}),o=t("PointLight",{position:{y:28},distance:20,color:"rgb(255, 0, 0)",intensity:.6}),s=t("SpotLight",{position:{x:20},distance:30,color:"rgb(0, 0, 255)",intensity:.6}),r=t("DirectionalLight",{color:"rgb(0, 255, 0)",intensity:.5,position:{x:0,y:0,z:-20}}),a=t("MeshStandardMaterial"),d=t("BoxGeometry",{width:20,height:20,depth:20}),g=t("Mesh",{material:a.vid,geometry:d.vid}),l=t("Scene",{children:[n.vid,o.vid,s.vid,r.vid,g.vid]});i.applyConfig(n,o,s,r,a,d,g,l);i.setScene(l.vid).play();
