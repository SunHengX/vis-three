import"../common.006007ed.js";import{J as b,M as o,b as n}from"../Vis.es.a3304217.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";const r=["/texture/katana/katana_BaseColor.png","/texture/katana/katana_Normal.png","/model/katana/katana.obj","/texture/katana/katana_Roughness.png","/texture/katana/katanal_Metallic.png"],f={"67b4de22-3e2e-44d3-9fd2-236c73daca00":{vid:"67b4de22-3e2e-44d3-9fd2-236c73daca00",type:"PerspectiveCamera",position:{y:15,z:50},rotation:{x:-.5},near:10,far:100}},s={"e05b44f7-626c-40d0-80dd-2d8e45506e4b":{vid:"e05b44f7-626c-40d0-80dd-2d8e45506e4b",type:"AmbientLight",position:{y:-10}},"8f2dcc15-c9b9-4600-b6a9-1f01c7d3e03f":{vid:"8f2dcc15-c9b9-4600-b6a9-1f01c7d3e03f",type:"PointLight",position:{y:-10,z:10},distance:100}},i={"422b0e9a-5d0d-483f-b18e-df0736127fed":{vid:"422b0e9a-5d0d-483f-b18e-df0736127fed",type:"LoadGeometry",url:"/model/katana/katana.obj.children.0.geometry"},"bf005806-f288-46dc-83a2-f2e7e2e7a988":{vid:"bf005806-f288-46dc-83a2-f2e7e2e7a988",type:"LoadGeometry",url:"/model/katana/katana.obj.children.1.geometry"},"a4ecb518-2b9a-4c6b-871d-743270368595":{vid:"a4ecb518-2b9a-4c6b-871d-743270368595",type:"LoadGeometry",url:"/model/katana/katana.obj.children.2.geometry"},"38953a5b-bd6c-4734-bf24-b936f8608216":{vid:"38953a5b-bd6c-4734-bf24-b936f8608216",type:"LoadGeometry",url:"/model/katana/katana.obj.children.3.geometry"},"bb10af6a-d777-49d7-b0a3-36b37551ed43":{vid:"bb10af6a-d777-49d7-b0a3-36b37551ed43",type:"LoadGeometry",url:"/model/katana/katana.obj.children.4.geometry"}},l={"25cd5785-6a4d-4dfe-8db2-ce9d74c0b64f":{vid:"25cd5785-6a4d-4dfe-8db2-ce9d74c0b64f",type:"ImageTexture",url:"/texture/katana/katana_BaseColor.png"},"c2bfae43-acee-4da7-a938-6b02b1c8c98d":{vid:"c2bfae43-acee-4da7-a938-6b02b1c8c98d",type:"ImageTexture",url:"/texture/katana/katana_Normal.png"},"51a29b5f-44f3-4e92-89b4-5c577c34111d":{vid:"51a29b5f-44f3-4e92-89b4-5c577c34111d",type:"ImageTexture",url:"/texture/katana/katana_Roughness.png"},"52de19e8-60fe-4392-b0f3-25deb310dbe2":{vid:"52de19e8-60fe-4392-b0f3-25deb310dbe2",type:"ImageTexture",url:"/texture/katana/katanal_Metallic.png"}},p={"3a2f661c-959a-4143-bb5a-017d7675b7b6":{vid:"3a2f661c-959a-4143-bb5a-017d7675b7b6",type:"MeshStandardMaterial",roughnessMap:"51a29b5f-44f3-4e92-89b4-5c577c34111d",normalMap:"c2bfae43-acee-4da7-a938-6b02b1c8c98d",metalnessMap:"52de19e8-60fe-4392-b0f3-25deb310dbe2",map:"25cd5785-6a4d-4dfe-8db2-ce9d74c0b64f"}},m={WebGLRenderer:{vid:"WebGLRenderer",type:"WebGLRenderer",clearColor:"rgba(0, 0, 0, 1)",shadowMap:{type:1}}},g={Scene:{vid:"Scene",type:"Scene",children:["e05b44f7-626c-40d0-80dd-2d8e45506e4b","8f2dcc15-c9b9-4600-b6a9-1f01c7d3e03f","559aa946-aaca-444f-b6cd-d885352e91c3","92153ffa-7efd-4ea9-bfa0-605de175c4e9","cd088c02-0270-4efe-bfc6-16b617bac074","616dd956-a5d9-4479-b5e5-e7fbea1bc572","f0fa42dd-44dc-424c-9226-1ab733d444cc","67b4de22-3e2e-44d3-9fd2-236c73daca00"]}},y={TransformControls:{vid:"TransformControls",type:"TransformControls"},OrbitControls:{vid:"OrbitControls",type:"OrbitControls",autoRotate:!0}},u={},h={},v={"559aa946-aaca-444f-b6cd-d885352e91c3":{vid:"559aa946-aaca-444f-b6cd-d885352e91c3",type:"Mesh",position:{x:-10},scale:{x:20,y:20,z:20},material:"3a2f661c-959a-4143-bb5a-017d7675b7b6",geometry:"422b0e9a-5d0d-483f-b18e-df0736127fed"},"92153ffa-7efd-4ea9-bfa0-605de175c4e9":{vid:"92153ffa-7efd-4ea9-bfa0-605de175c4e9",type:"Mesh",position:{x:-5},scale:{x:20,y:20,z:20},material:"3a2f661c-959a-4143-bb5a-017d7675b7b6",geometry:"bf005806-f288-46dc-83a2-f2e7e2e7a988"},"cd088c02-0270-4efe-bfc6-16b617bac074":{vid:"cd088c02-0270-4efe-bfc6-16b617bac074",type:"Mesh",scale:{x:20,y:20,z:20},material:"3a2f661c-959a-4143-bb5a-017d7675b7b6",geometry:"a4ecb518-2b9a-4c6b-871d-743270368595"},"616dd956-a5d9-4479-b5e5-e7fbea1bc572":{vid:"616dd956-a5d9-4479-b5e5-e7fbea1bc572",type:"Mesh",position:{x:5},scale:{x:20,y:20,z:20},material:"3a2f661c-959a-4143-bb5a-017d7675b7b6",geometry:"38953a5b-bd6c-4734-bf24-b936f8608216"},"f0fa42dd-44dc-424c-9226-1ab733d444cc":{vid:"f0fa42dd-44dc-424c-9226-1ab733d444cc",type:"Mesh",position:{x:10},scale:{x:20,y:20,z:20},material:"3a2f661c-959a-4143-bb5a-017d7675b7b6",geometry:"bb10af6a-d777-49d7-b0a3-36b37551ed43"}},k={},x={},M={};var S={assets:r,camera:f,light:s,geometry:i,texture:l,material:p,renderer:m,scene:g,controls:y,sprite:u,line:h,mesh:v,points:k,group:x,pass:M};const c=JSON.parse(JSON.stringify(S),b.parse),a=document.createElement("div");a.innerText="\u6B63\u5728\u52A0\u8F7D...";a.className="loadingDom";document.body.appendChild(a);const e=new o().setDom(document.getElementById("app")).setSize();e.loaderManager.setPath("/vis-three/examples/");e.loadConfigAsync(c).then(()=>{const t=e.dataSupportManager.getDataSupport(n.LIGHT).getData();for(const d in t)t[d].position.y=-10,t[d].distance=100;document.getElementById("exportConfig").innerText=e.toJSON().replace(/",/g,`",
`).replace(/"},/g,`"},
`).replace(/{"/g,`{"
`).replace(/,"/g,`,"
`).replace(/},"/g,`
},"`),document.body.removeChild(a),e.setScene(c.scene.Scene.vid).play(),console.log(e.toJSON())});
