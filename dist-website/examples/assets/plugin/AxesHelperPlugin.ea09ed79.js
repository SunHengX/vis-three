import"../common.006007ed.js";import{f as t}from"../Vis.es.824ecc78.js";import"../three.988821a1.js";import"../vis-three.8be35a0c.js";const s=new t().install("AxesHelper",{length:200}).complete().setDom(document.getElementById("app")).setSize().play();let e=!0;document.getElementById("operate").onclick=n=>{e=!e,s.setAxesHelper({show:e})};
