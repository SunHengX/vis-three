var g=Object.defineProperty;var f=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>(f(e,typeof t!="symbol"?t+"":t,s),s);import"../common.006007ed.js";import{M as h,g as b,m as w,n as j}from"../three.b54e9ae7.js";import{M as x,H as S,A as d}from"../Vis.es.74edd40b.js";import"../vis-three.36482fbe.js";const r=new x().setDom(document.getElementById("app")).setSize().setStats(!0).play(),u=r.scene,m=new h(new b(10,10,10),new w({color:"rgb(255, 105, 100)"}));m.position.x=10;u.add(m);const l=new j("rgb(255, 255, 255)",1,300,0);l.position.y=30;u.add(l);const c=new S(50),E=d.SectionAction,o=class extends E{constructor({objects:t,engine:s}){const y={oldObjects:[].concat(o.cacheSection),newObjects:[].concat(t),engine:s};super(y);o.cacheSection=[].concat(t)}next(){o.status=!0,super.next()}prev(){o.status=!0,super.prev()}};let n=o;i(n,"status",!1),i(n,"cacheSection",[]);r.addEventListener("selected",e=>{if(n.status){n.status=!1;return}c.apply(new n({objects:e.objects,engine:r}))});const p=r.transformControls,L=d.TransformAction;let a="";p.addEventListener("mouseDown",e=>{a=new L({transformControls:p}),a.generate("prev")});p.addEventListener("mouseUp",e=>{a.generate("next"),c.apply(a),a=""});r.keyboardManager.register({shortcutKey:["ctrl","z"],desp:"undo",keyup:e=>{e==null||e.preventDefault(),c.undo()}}).register({shortcutKey:["ctrl","y"],desp:"redo",keyup:e=>{e==null||e.preventDefault(),c.redo()}});
