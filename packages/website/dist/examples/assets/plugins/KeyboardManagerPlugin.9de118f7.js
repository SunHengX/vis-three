import"../modulepreload-polyfill.b7f2da20.js";import{d as n}from"../index.7d48aff8.js";import{K as a}from"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../three.837c9bb0.js";import"../Antdv.a86c3c0d.js";const o=n({plugins:[a()]}),t=[];for(let e=0;e<=9;e+=1)t.push(String.fromCharCode(e));for(let e=97;e<=122;e+=1)t.push(String.fromCharCode(e));const d=document.querySelector(".keyboard-message");let r="window";t.forEach(e=>{o.keyboardManager.register({shortcutKey:[e],desp:`key ${e}`,keyup:p=>{d.innerHTML=`${r} touch '${e}'`}})});console.log(o.keyboardManager.getDocs());document.getElementById("app1").onclick=e=>{r="app1",o.keyboardManager.watch(document.getElementById("app1"))};document.getElementById("app2").onclick=e=>{r="app2",o.keyboardManager.watch(document.getElementById("app2"))};