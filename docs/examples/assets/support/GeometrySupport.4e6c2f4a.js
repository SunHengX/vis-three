import"../common.006007ed.js";import{M as p,g as e,i as t}from"../Vis.es.a3304217.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";const i=new p().setDom(document.getElementById("app")).setSize().setStats(!0).play();e.injectEngine=i;const s=e("Scene");i.setScene(s.vid);e.injectScene=!0;e("PointLight",{position:{y:50},distance:150});const o=e("MeshStandardMaterial"),l=[t.BOXGEOMETRY,t.SPHEREGEOMETRY,t.PLANEGEOMETRY,t.CIRCLEGEOMETRY,t.CONEGEOMETRY,t.CYLINDERGEOMETRY,t.RINGGEOMETRY,t.TORUSGEOMETRY],m=15;l.forEach((z,c)=>{const n=e(z),r=c+1,a=e("Mesh",{material:o.vid,geometry:n.vid,position:{x:r%2?-(Math.floor(r/2)+1)*m:Math.floor(r/2)*m},scale:{x:2,y:2,z:2}});i.applyConfig(n,a),s.children.push(a.vid)});const y=e("LineBasicMaterial",{color:"white"}),x=e("LineCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),d=e("SplineCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),E=e("CubicBezierCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:20,z:5},{x:0,y:-15,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10},{x:10,y:0,z:10},{x:0,y:0,z:20},{x:10,y:0,z:10}]}),v=e("QuadraticBezierCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),h=e("SplineTubeGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}],radialSegments:8}),G=e("LineTubeGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}],radialSegments:8});e("Line",{geometry:x.vid,material:y.vid});e("Line",{geometry:d.vid,material:y.vid,position:{y:10}});e("Line",{geometry:E.vid,material:y.vid,position:{y:20}});e("Line",{geometry:v.vid,material:y.vid,position:{y:30}});e("Mesh",{geometry:h.vid,material:o.vid,position:{y:-10}});e("Mesh",{geometry:G.vid,material:o.vid,position:{y:-20}});const g=e("LineShapeGeometry",{path:[{x:-5,y:5},{x:0,y:10},{x:5,y:5},{x:5,y:-5},{x:-5,y:-5}]});e("Mesh",{geometry:g.vid,material:o.vid,position:{x:15,y:20}});window.reactData=x;console.log(i);
