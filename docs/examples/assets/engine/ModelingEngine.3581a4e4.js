import"../common.006007ed.js";import{M as s,g as i,a2 as a,K as r,i as d,q as m}from"../three.75af7ea3.js";import{a as p}from"../Vis.es.a3304217.js";import"../vis-three.69d8f933.js";const c=new p().setDom(document.getElementById("app")).setSize().setStats(!0).play(),e=c.scene,t=new s(new i(10,10,10),new a({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const o=new r("rgb(255, 255, 255)",1,300,0);o.position.y=30;e.add(o);const g=new d(t.geometry);e.add(g);const n=new m(t.geometry);n.position.x=-10;e.add(n);
