import"../common.006007ed.js";import{D as a}from"../three.b54e9ae7.js";import{a as s,g as e}from"../Vis.es.74edd40b.js";import{g as m}from"../lil-gui.module.min.2e05211e.js";import"../vis-three.36482fbe.js";const r=new s().setDom(document.getElementById("app")).setSize().setStats(!0);e.injectEngine=r;const d=e("Scene");r.setScene(d.vid);e.injectScene=!0;e("AmbientLight");const t=e("ShaderMaterial",{shader:"uvPulseShader",side:a,uniforms:{time:{value:4.5}}});e("MeshStandardMaterial");const u=e("PlaneGeometry",{width:20,height:20});e("Mesh",{material:t.vid,geometry:u.vid});const l=e("SphereGeometry",{radius:10});e("Mesh",{material:t.vid,geometry:l.vid,position:{x:25}});const h=e("BoxGeometry",{width:20,height:20,depth:20});e("Mesh",{material:t.vid,geometry:h.vid,position:{x:-25}});const g=e("RingGeometry",{innerRadius:5,outerRadius:10,thetaSegments:32});e("Mesh",{material:t.vid,geometry:g.vid,position:{z:-25}});const c=e("ConeGeometry",{radius:10,height:10,radialSegments:32});e("Mesh",{material:t.vid,geometry:c.vid,position:{z:25}});r.play();window.engine=r;window.material=t;const o=new m,n={time:t.uniforms.time.value,width:t.uniforms.width.value,color:t.uniforms.color.value,centerX:t.uniforms.center.value.x,centerY:t.uniforms.center.value.y};o.add(n,"time",4,6,.01).onChange(i=>{t.uniforms.time.value=i});o.add(n,"width",0,.5,.01).onChange(i=>{t.uniforms.width.value=i});o.addColor(n,"color");o.add(n,"centerX",0,1,.01).onChange(i=>{t.uniforms.center.value.x=i});o.add(n,"centerY",0,1,.01).onChange(i=>{t.uniforms.center.value.y=i});
