import"../common.006007ed.js";import{C as r,a as d,g as e,m as n}from"../Vis.es.d8d395f3.js";import{g as a}from"../lil-gui.module.min.2e05211e.js";import"../three.fec063a1.js";import"../vis-three.59b4e7ed.js";new r({width:256,height:256}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(206, 42, 230)",t.font=" bold 68px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("PASS",128,128)}).preview();const i=new d().setDom(document.getElementById("app")).setSize().setStats(!0);e.injectEngine=i;const g=e("Scene");i.setScene(g.vid);e.injectScene=!0;e("PointLight",{position:{x:30,y:50},distance:100});const l=e(n.MESHSTANDARDMATERIAL,{color:"red"}),m=e(n.SPHEREGEOMETRY,{radius:10,widthSegments:64,heightSegments:64});e(n.MESH,{material:l.vid,geometry:m.vid});e(n.SMAAPASS);const o=e(n.UNREALBLOOMPASS,{strength:1});i.play();console.log(i);const s=new a;s.add(o,"strength",0,5,.1);s.add(o,"threshold",0,1,.01);s.add(o,"radius",0,5,.1);
