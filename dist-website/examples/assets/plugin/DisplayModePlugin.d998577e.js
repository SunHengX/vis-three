import"../common.006007ed.js";import{bm as p,M as c,g as l,a2 as d,K as m,i as g,L as u,q as y,n as b}from"../three.75af7ea3.js";import{f as w,o as n}from"../Vis.es.a3304217.js";import"../vis-three.69d8f933.js";const a=new w().install("DisplayMode").complete().setDom(document.getElementById("app")).setSize().play(),e=a.scene,j=new p().setPath("/vis-three/examples//texture/skyBox/snowVillage/").load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);e.background=j;const o=new c(new l(10,10,10),new d({color:"rgb(255, 105, 100)"}));o.position.x=10;e.add(o);const i=new m("rgb(255, 255, 255)",1,300,0);i.position.y=30;e.add(i);const x=new g(o.geometry,new u({color:"yellow"}));e.add(x);const r=new y(o.geometry,new b({color:"blue"}));r.position.x=-10;e.add(r);const h=document.getElementById("button-group");Object.keys(n).forEach(s=>{const t=document.createElement("button");t.innerText=n[s],t.onclick=()=>{a.setDisplayMode(n[s])},h.appendChild(t)});
