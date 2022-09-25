import"../common.006007ed.js";import{D as a,g as t,n as l}from"../Vis.es.a3304217.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";var p={router:"engine",children:["/Engine.html","/ModelingEngine.html","/DisplayEngine.html","/ModelingEngineSupport.html","/DisplayEngineSupport.html"],position:{x:-70,y:20,z:-30},rotation:{y:Math.PI/180*35}},h={router:"plugin",children:["/WebGLRendererPlugin.html","/CSS3DRendererPlugin.html","/AxesHelperPlugin.html","/GridHelperPlugin.html","/ObjectHelperPlugin.html","/ViewpointPlugin.html","/DisplayModePlugin.html","/SelectionPlugin.html","/StatsPlugin.html","/TransformControlsPlugin.html"],position:{x:-60,y:-20,z:-20},rotation:{y:Math.PI/180*25}},m={router:"support",children:["/RendererSupport.html","/GeometrySupport.html","/MaterialSupport.html","/LightSupport.html","/GroupSupport.html","/EventSupport.html","/SceneSupport.html","/CSS3DSupport.html","/AnimationSupport.html","/SolidObjectSupport.html"]},u={router:"displayer",children:["/TextureDisplayer.html","/MaterialDisplayer.html"],position:{x:-70,y:-30,z:10},rotation:{y:Math.PI/180*35}},s={router:"convenient",children:["/History.html"],position:{x:-80,y:10},rotation:{y:Math.PI/180*25}},d={router:"manager",children:["/EventManager.html","/LoaderManager.html","/ResourceManager.html","/KeyboardManager.html"]},c={router:"modifier",children:["/BooleanModifier.html"],position:{x:45,z:-10,y:20},rotation:{y:Math.PI/180*-25}},y={router:"helper",children:["/PointLightHelper.html","/SpotLightHelper.html","/directionalLight.html","/CameraHelper.html","/GroupHelper.html"],position:{x:20,z:15},rotation:{y:Math.PI/180*-25}},g={router:"loader",children:["/VideoLoader.html"],position:{x:15,y:20,z:10},rotation:{y:Math.PI/180*-25}},S={router:"develop",children:["/configure.html","/Vue3.html","/Vue2.html","/CanvasExtends.html","/Vue2-ConfigExtends.html","/LocalUpload.html"],position:{x:60,y:-10},rotation:{y:Math.PI/180*-30}},v={router:"core",children:["/ProxyBroadcast.html"],position:{x:20,y:-30,z:20},rotation:{y:Math.PI/180*-25}},x={router:"test",children:["/Pressure-canvas.html","/Pressure-css3D.html"],position:{x:60,y:10,z:20},rotation:{y:Math.PI/180*-30}},P={router:"library",children:["/EventLibrary.html","/ShaderLibrary.html"],position:{x:60,y:30,z:20},rotation:{y:Math.PI/180*-30}},M={router:"extends",children:["/SelectiveBloomPass.html"],position:{x:20,y:35,z:10},rotation:{y:Math.PI/180*-20}},R={router:"homepage",children:["/vis.html"],position:{x:-40,y:35,z:-10},rotation:{y:Math.PI/180*30}},C={router:"dataview",children:["/Echarts.html","/AntdV-G6-Framework.html"],position:{x:-30,y:-40,z:0},rotation:{y:Math.PI/180*20}},z={router:"passSupport",children:["/UnrealBloomPass.html","/SelectiveBloomPass.html"],position:{x:-15,y:35,z:15},rotation:{y:Math.PI/180*25}},I={router:"geometrySupport",children:["/BoxGeometry.html","/SplineCurveGeometry.html"],position:{x:15,y:-25,z:-15},rotation:{y:Math.PI/180*-15}},b={router:"textureSupport",children:["/ImageTextureSupport.html","/VideoTextureSupport.html","/CubeTextureSupport.html","/CanvasTextureSupport.html","/LoadTextureSupport.html"],position:{x:75,y:-45,z:-15},rotation:{y:Math.PI/180*-15}},f={router:"CameraSupport",children:["/PerspectiveCameraSupport.html","/OrthographicCameraSupport.html"]},L={router:"controlsSupport",children:["/OrbitControlsSupport.html","/TransformControlsSupport.html"]},E={router:"LoaderSupport",children:["/gltf.html","/obj.html","/glb.html"]};const r=new a().complete().setDom(document.getElementById("app")).setSize();window.addEventListener("resize",()=>{r.setSize()});t.injectEngine=r;const D=t("Scene");r.setScene(D.vid);t.injectScene=!0;const G=t("PerspectiveCamera",{far:500,position:{y:10,z:120}});r.setCamera(G.vid);t("AmbientLight");t("SpotLight",{position:{y:15,x:50,z:50},intensity:2,distance:120});const T=t("MeshStandardMaterial",{color:"rgb(45, 0, 50)",roughness:.8}),j=t("BoxGeometry",{width:100,height:5,depth:40}),B=t("Mesh",{geometry:j.vid,material:T.vid});t("ScriptAnimation",{target:B.vid,attribute:".rotation.y",script:l.generateConfig("linearTime",{multiply:1})});r.play();const H=[p,h,m,u,s,d,c,y,g,S,v,x,P,M,R,C,z,I,b,f,L,E],w=document.getElementById("module-main");H.forEach(e=>{let i="";if(e.children&&e.children.length)for(let n of e.children)i+=`<a href="${e.router}${n}">${n.split("/").pop()}</a>`;const o=document.createElement("div");o.className="module-box",o.innerHTML=`
        <h3>${e.router.toLocaleUpperCase()}</h3>
        <div class="children-box">
          ${i}
        </div>
      `,w.appendChild(o)});
