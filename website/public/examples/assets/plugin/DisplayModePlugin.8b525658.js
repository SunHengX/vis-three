import"../common.006007ed.js";import{aN as p,M as c,g as d,m as l,n as m,i as g,L as u,v as y,s as b}from"../three.fec063a1.js";import{f as w,o as n}from"../Vis.es.d8d395f3.js";import"../vis-three.59b4e7ed.js";const a=new w().install("DisplayMode").complete().setDom(document.getElementById("app")).setSize().play(),e=a.scene,j=new p().setPath("/vis-three/examples//texture/skyBox/snowVillage/").load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);e.background=j;const o=new c(new d(10,10,10),new l({color:"rgb(255, 105, 100)"}));o.position.x=10;e.add(o);const i=new m("rgb(255, 255, 255)",1,300,0);i.position.y=30;e.add(i);const x=new g(o.geometry,new u({color:"yellow"}));e.add(x);const r=new y(o.geometry,new b({color:"blue"}));r.position.x=-10;e.add(r);const h=document.getElementById("button-group");Object.keys(n).forEach(s=>{const t=document.createElement("button");t.innerText=n[s],t.onclick=()=>{a.setDisplayMode(n[s])},h.appendChild(t)});
