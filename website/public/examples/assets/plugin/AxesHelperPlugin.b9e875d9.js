import"../common.006007ed.js";import{f as t}from"../Vis.es.74edd40b.js";import"../three.b54e9ae7.js";import"../vis-three.36482fbe.js";const s=new t().install("AxesHelper",{length:200}).complete().setDom(document.getElementById("app")).setSize().play();let e=!0;document.getElementById("operate").onclick=n=>{e=!e,s.setAxesHelper({show:e})};
