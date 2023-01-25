import"../modulepreload-polyfill.b7f2da20.js";import{az as lt,s as dt,ab as ut,h as Z,aS as ft}from"../three.a7f96461.js";import{C as K}from"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";import{D as pt}from"../index.6b6dcd28.js";import{E as y,g,v as ht}from"../index.7855cb86.js";import{d as V}from"../index.8b9e7665.js";import"../index.453e5660.js";import"../index.f27dc7ff.js";import"../index.9a3e1c8e.js";import"../index.6ff295ff.js";import{r as gt,d as yt,G as et}from"../G6.3fcc88ef.js";import"../index.a9490ea5.js";import"../index.071db2cc.js";import"../index.b701c9b3.js";import"../index.3f5976b9.js";import"../index.d73b554e.js";import"../index.4b35f5ef.js";import"../index.a270601c.js";import"../index.1e646713.js";import"../index.a5568c80.js";import"../UnrealBloomPass.cda4d03b.js";import"../index.b6aecce9.js";import"../index.4f6b3c96.js";import"../index.17bccc77.js";import"../Antdv.e37529d7.js";const mt={name:"addClass",params:{target:"",className:"",delay:0}},_t=function(t,i){const e=i.params,r=[];if(e.target==="all")t.scene.traverse(n=>{n instanceof V&&r.push(n)});else if(Array.isArray(e.target))e.target.forEach(n=>{const a=t.getObjectBySymbol(n);a?r.push(a):console.warn(`basic event AddClass: can not found vid object: ${e.target}`)});else{const n=t.getObjectBySymbol(e.target);if(!n)return console.warn(`basic event AddClass: can not found vid object: ${e.target}`),()=>{};if(!(n instanceof V))return console.warn("basic event AddClass: object is not a CSS3DObject."),()=>{};r.push(n)}return r.length?()=>{setTimeout(()=>{r.forEach(n=>{n.element.classList.add(e.className)})},e.delay)}:(console.warn(`basic event AddClass: can not found vid object: ${e.target}`),()=>{})};var bt=Object.freeze(Object.defineProperty({__proto__:null,config:mt,generator:_t},Symbol.toStringTag,{value:"Module"}));const vt={name:"visibleObject",params:{target:"",visible:!0,delay:0}},St=function(t,i){const e=i.params,r=t.getObjectBySymbol(e.target);return r?()=>{setTimeout(()=>{r.visible=e.visible},e.delay)}:(console.warn(`basic event visibleObject: can not found vid object: ${e.target}`),()=>{})};var Ct=Object.freeze(Object.defineProperty({__proto__:null,config:vt,generator:St},Symbol.toStringTag,{value:"Module"})),S={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}},Back:{In:function(t){var i=1.70158;return t*t*((i+1)*t-i)},Out:function(t){var i=1.70158;return--t*t*((i+1)*t+i)+1},InOut:function(t){var i=2.5949095;return(t*=2)<1?.5*(t*t*((i+1)*t-i)):.5*((t-=2)*t*((i+1)*t+i)+2)}},Bounce:{In:function(t){return 1-S.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?S.Bounce.In(t*2)*.5:S.Bounce.Out(t*2-1)*.5+.5}}},D;typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?D=function(){var t=process.hrtime();return t[0]*1e3+t[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?D=self.performance.now.bind(self.performance):Date.now!==void 0?D=Date.now:D=function(){return new Date().getTime()};var P=D,Tt=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var i=this;return Object.keys(this._tweens).map(function(e){return i._tweens[e]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(i){this._tweens[i.getId()]=i,this._tweensAddedDuringUpdate[i.getId()]=i},t.prototype.remove=function(i){delete this._tweens[i.getId()],delete this._tweensAddedDuringUpdate[i.getId()]},t.prototype.update=function(i,e){i===void 0&&(i=P()),e===void 0&&(e=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<r.length;n++){var a=this._tweens[r[n]],s=!e;a&&a.update(i,s)===!1&&!e&&delete this._tweens[r[n]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),G={Linear:function(t,i){var e=t.length-1,r=e*i,n=Math.floor(r),a=G.Utils.Linear;return i<0?a(t[0],t[1],r):i>1?a(t[e],t[e-1],e-r):a(t[n],t[n+1>e?e:n+1],r-n)},Bezier:function(t,i){for(var e=0,r=t.length-1,n=Math.pow,a=G.Utils.Bernstein,s=0;s<=r;s++)e+=n(1-i,r-s)*n(i,s)*t[s]*a(r,s);return e},CatmullRom:function(t,i){var e=t.length-1,r=e*i,n=Math.floor(r),a=G.Utils.CatmullRom;return t[0]===t[e]?(i<0&&(n=Math.floor(r=e*(1+i))),a(t[(n-1+e)%e],t[n],t[(n+1)%e],t[(n+2)%e],r-n)):i<0?t[0]-(a(t[0],t[0],t[1],t[1],-r)-t[0]):i>1?t[e]-(a(t[e],t[e],t[e-1],t[e-1],r-e)-t[e]):a(t[n?n-1:0],t[n],t[e<n+1?e:n+1],t[e<n+2?e:n+2],r-n)},Utils:{Linear:function(t,i,e){return(i-t)*e+t},Bernstein:function(t,i){var e=G.Utils.Factorial;return e(t)/e(i)/e(t-i)},Factorial:function(){var t=[1];return function(i){var e=1;if(t[i])return t[i];for(var r=i;r>1;r--)e*=r;return t[i]=e,e}}(),CatmullRom:function(t,i,e,r,n){var a=(e-t)*.5,s=(r-i)*.5,o=n*n,c=n*o;return(2*i-2*e+a+s)*c+(-3*i+3*e-2*a-s)*o+a*n+i}}},it=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),nt=new Tt,w=function(){function t(i,e){e===void 0&&(e=nt),this._object=i,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=S.Linear.None,this._interpolationFunction=G.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=it.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(i,e){return this._valuesEnd=Object.create(i),e!==void 0&&(this._duration=e),this},t.prototype.duration=function(i){return this._duration=i,this},t.prototype.start=function(i){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var e in this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=i!==void 0?typeof i=="string"?P()+parseFloat(i):i:P(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(i,e,r,n){for(var a in r){var s=i[a],o=Array.isArray(s),c=o?"array":typeof s,d=!o&&Array.isArray(r[a]);if(!(c==="undefined"||c==="function")){if(d){var u=r[a];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,s)),r[a]=[s].concat(u)}if((c==="object"||o)&&s&&!d){e[a]=o?[]:{};for(var p in s)e[a][p]=s[p];n[a]=o?[]:{},this._setupProperties(s,e[a],r[a],n[a])}else typeof e[a]=="undefined"&&(e[a]=s),o||(e[a]*=1),d?n[a]=r[a].slice().reverse():n[a]=e[a]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(i){return i===void 0&&(i=P()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=i,this._group&&this._group.remove(this),this)},t.prototype.resume=function(i){return i===void 0&&(i=P()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=i-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var i=0,e=this._chainedTweens.length;i<e;i++)this._chainedTweens[i].stop();return this},t.prototype.group=function(i){return this._group=i,this},t.prototype.delay=function(i){return this._delayTime=i,this},t.prototype.repeat=function(i){return this._initialRepeat=i,this._repeat=i,this},t.prototype.repeatDelay=function(i){return this._repeatDelayTime=i,this},t.prototype.yoyo=function(i){return this._yoyo=i,this},t.prototype.easing=function(i){return this._easingFunction=i,this},t.prototype.interpolation=function(i){return this._interpolationFunction=i,this},t.prototype.chain=function(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return this._chainedTweens=i,this},t.prototype.onStart=function(i){return this._onStartCallback=i,this},t.prototype.onUpdate=function(i){return this._onUpdateCallback=i,this},t.prototype.onRepeat=function(i){return this._onRepeatCallback=i,this},t.prototype.onComplete=function(i){return this._onCompleteCallback=i,this},t.prototype.onStop=function(i){return this._onStopCallback=i,this},t.prototype.update=function(i,e){if(i===void 0&&(i=P()),e===void 0&&(e=!0),this._isPaused)return!0;var r,n,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(i>a)return!1;e&&this.start(i)}if(this._goToEnd=!1,i<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(i-this._startTime)/this._duration,n=this._duration===0||n>1?1:n;var s=this._easingFunction(n);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,n),n===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=i+this._repeatDelayTime:this._startTime=i+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,c=this._chainedTweens.length;o<c;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(i,e,r,n){for(var a in r)if(e[a]!==void 0){var s=e[a]||0,o=r[a],c=Array.isArray(i[a]),d=Array.isArray(o),u=!c&&d;u?i[a]=this._interpolationFunction(o,n):typeof o=="object"&&o?this._updateProperties(i[a],s,o,n):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(i[a]=s+(o-s)*n))}},t.prototype._handleRelativeValue=function(i,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?i+parseFloat(e):parseFloat(e)},t.prototype._swapEndStartRepeatValues=function(i){var e=this._valuesStartRepeat[i],r=this._valuesEnd[i];typeof r=="string"?this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(r):this._valuesStartRepeat[i]=this._valuesEnd[i],this._valuesEnd[i]=e},t}();it.nextId;var A=nt;A.getAll.bind(A);A.removeAll.bind(A);A.add.bind(A);A.remove.bind(A);A.update.bind(A);var _;(function(t){t.EASING_LINEAR_NONE="EASING_LINEAR_NONE",t.EASING_QUARTIC_IN="EASING_QUARTIC_IN",t.EASING_QUARTIC_OUT="EASING_QUARTIC_OUT",t.EASING_QUARTIC_INOUT="EASING_QUARTIC_INOUT",t.EASING_QUADRATIC_IN="EASING_QUADRATIC_IN",t.EASING_QUADRATIC_OUT="EASING_QUADRATIC_OUT",t.EASING_QUADRATIC_INOUT="EASING_QUADRATIC_INOUT"})(_||(_={}));const x={EASING_LINEAR_NONE:S.Linear.None,EASING_QUARTIC_IN:S.Quartic.In,EASING_QUARTIC_OUT:S.Quartic.Out,EASING_QUARTIC_INOUT:S.Quartic.InOut,EASING_QUADRATIC_IN:S.Quadratic.In,EASING_QUADRATIC_OUT:S.Quadratic.Out,EASING_QUADRATIC_INOUT:S.Quadratic.InOut};_.EASING_QUADRATIC_INOUT;const At={name:"fadeObject",params:{target:"",direction:"out",delay:0,duration:300,timingFunction:_.EASING_QUADRATIC_INOUT,visible:!0}},wt=function(t,i){const e=i.params,r=t.getObjectBySymbol(e.target);if(!r)return console.warn(`real time animation fadeObject: can not found vid object: ${e.target}`),()=>{};const n=t.getObjectConfig(r);if(!n.material)return console.warn(`real time animation fadeObject: target can not support fade: ${e.target}`),()=>{};const a=[],s=[],o=Array.isArray(n.material)?[].concat(n.material):[n.material];for(const d of o){const u=t.getObjectBySymbol(d),p=t.getConfigBySymbol(d);if(!(u instanceof lt)){console.error(`real time animation fadeObject: object config material is not instanceof Material: ${d}`);continue}if(!p){console.error(`real time animation fadeObject: object config material can not found config: ${d}`);continue}a.push(u),s.push(p)}let c=!1;return()=>{if(c)return;c=!0;const d=t.renderManager;n.visible=!0,a.forEach((u,p,O)=>{u.visible=!0,u.transparent=!0,u.opacity=e.direction==="in"?0:1,u.needsUpdate=!0;const m=new w(u).to({opacity:e.direction==="in"?1:0}).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start(),b=C=>{m.update()};d.addEventListener("render",b),m.onComplete(()=>{d.removeEventListener("render",b),e.direction==="out"&&e.visible?(s[p].visible=!1,n.visible=!1):e.direction==="in"&&e.visible&&(s[p].visible=!0,n.visible=!0),s[p].opacity=e.direction==="in"?1:0,c=!1})})}};var xt=Object.freeze(Object.defineProperty({__proto__:null,config:At,generator:wt},Symbol.toStringTag,{value:"Module"}));const It={name:"focusObject",params:{target:"",camera:"",space:"world",offset:{x:0,y:0,z:20},delay:0,duration:1e3,timingFunction:_.EASING_QUADRATIC_INOUT,back:!0}},Ot=function(t,i){const e=i.params,r=t.getObjectBySymbol(e.target),n=t.orbitControls.target;if(!r)return console.warn(`real time animation focusObject: can not found vid object: ${e.target}`),()=>{};if(!(r instanceof dt))return console.warn(`real time animation focusObject: vid object is not a class of THREE.Object3D: ${e.target}`),()=>{};let a=!1;const s=new ut;return()=>{if(a)return;a=!0;let o=t.camera;e.camera&&(o=t.getObjectBySymbol(e.camera),o||(o=t.camera,console.warn(`real time animation focusObject: can not found camera config: ${e.camera}`)));const c=t.getObjectConfig(o),d=t.orbitControls&&t.orbitControls.object===o;c||console.warn("engine current camera can not found config.");const u=t.renderManager;let p={x:r.matrixWorld.elements[12]+e.offset.x,y:r.matrixWorld.elements[13]+e.offset.y,z:r.matrixWorld.elements[14]+e.offset.z};const O={x:o.position.x,y:o.position.y,z:o.position.z};if(e.space==="local"){const f=new Z(e.offset.x,e.offset.y,e.offset.z).applyEuler(s.setFromRotationMatrix(r.matrixWorld));p={x:r.matrixWorld.elements[12]+f.x,y:r.matrixWorld.elements[13]+f.y,z:r.matrixWorld.elements[14]+f.z}}const m=new w(o.position).to(p).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start();let b;const C={x:o.up.x,y:o.up.y,z:o.up.z};if(e.space==="local"){const f=new Z(0,1,0).applyEuler(s.setFromRotationMatrix(r.matrixWorld));b=new w(o.up).to({x:f.x,y:f.y,z:f.z}).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start()}let E;const L={x:n.x,y:n.y,z:n.z};d&&(E=new w(n).to({x:r.matrixWorld.elements[12],y:r.matrixWorld.elements[13],z:r.matrixWorld.elements[14]}).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start());let l;d&&e.space==="local"?l=f=>{m.update(),b.update(),E.update()}:d?l=f=>{m.update(),E.update()}:e.space==="local"?l=f=>{m.update(),b.update()}:l=f=>{m.update()},u.addEventListener("render",l),m.onComplete(()=>{if(u.removeEventListener("render",l),c&&(c.position.x=p.x,c.position.y=p.y,c.position.z=p.z),a=!1,e.back){const f=()=>{const j=new w(o.position).to(O).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start();let z;e.space==="local"&&(z=new w(o.up).to(C).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start());let B;d&&(B=new w(n).to(L).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start());const $=te=>{j.update(),z&&z.update(),B&&B.update()};j.onComplete(()=>{u.removeEventListener("render",$)}),u.addEventListener("render",$),document.removeEventListener("dblclick",f)};document.addEventListener("dblclick",f)}})}};var Et=Object.freeze(Object.defineProperty({__proto__:null,config:It,generator:Ot},Symbol.toStringTag,{value:"Module"}));const jt={name:"moveFromTo",params:{target:"",from:{x:0,y:0,z:0},to:{x:10,y:10,z:10},delay:0,duration:1e3,timingFunction:_.EASING_QUADRATIC_INOUT}},Mt=function(t,i){const e=i.params,n=t.compilerManager.getObjectBySymbol(e.target);if(!n)return console.warn(`real time animation moveTO: can not found vid object: ${e.target}`),()=>{};const a=t.renderManager,s=t.dataSupportManager.getConfigBySymbol(e.target);if(!s)return console.warn(`can not found object config: ${e.target}`),()=>{};let o=!1;return()=>{if(o)return;o=!0,n.position.set(e.from.x,e.from.y,e.from.z),n.updateMatrix(),n.updateMatrixWorld();const c=new w(n.position).to(e.to).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start(),d=u=>{c.update()};a.addEventListener("render",d),c.onComplete(()=>{a.removeEventListener("render",d),s.position.x=e.to.x,s.position.y=e.to.y,s.position.z=e.to.z,o=!1})}};var Nt=Object.freeze(Object.defineProperty({__proto__:null,config:jt,generator:Mt},Symbol.toStringTag,{value:"Module"}));_.EASING_QUADRATIC_INOUT;const zt={name:"moveTo",params:{target:"",position:{x:0,y:0,z:0},delay:0,duration:1e3,timingFunction:_.EASING_QUADRATIC_INOUT}},Rt=function(t,i){const e=i.params,n=t.compilerManager.getObjectBySymbol(e.target);if(!n)return console.warn(`real time animation moveTO: can not found vid object: ${e.target}`),()=>{};const a=t.renderManager,s=t.dataSupportManager.getConfigBySymbol(e.target);if(!s)return console.warn(`can not found object config: ${e.target}`),()=>{};let o=!1;return()=>{if(o)return;o=!0;const c=new w(n.position).to(e.position).duration(e.duration).delay(e.delay).easing(x[e.timingFunction]).start(),d=u=>{c.update()};a.addEventListener("render",d),c.onComplete(()=>{a.removeEventListener("render",d),s.position.x=e.position.x,s.position.y=e.position.y,s.position.z=e.position.z,o=!1})}};var Pt=Object.freeze(Object.defineProperty({__proto__:null,config:zt,generator:Rt},Symbol.toStringTag,{value:"Module"}));_.EASING_QUADRATIC_INOUT;_.EASING_QUADRATIC_INOUT;_.EASING_QUADRATIC_INOUT;_.EASING_QUADRATIC_INOUT;_.EASING_QUADRATIC_INOUT;_.EASING_QUADRATIC_INOUT;var Ut=function(t){var i=typeof t;return t!==null&&i==="object"||i==="function"};const Ft={A:"#9CFC72",B:"#44A5FF",C:"#FFBE4C"},Dt={nodes:[{id:"1",label:"Company1"},{id:"2",label:"Company2"},{id:"3",label:"Company3"},{id:"4",label:"Company4"},{id:"5",label:"Company5"},{id:"8",label:"Company8"},{id:"9",label:"Company9"}],edges:[{source:"1",target:"2",data:{type:"A",amount:"100,000 Yuan",date:"2019-08-03"}},{source:"1",target:"3",data:{type:"B",amount:"100,000 Yuan",date:"2019-08-03"}},{source:"2",target:"5",data:{type:"C",amount:"100,000 Yuan",date:"2019-08-03"}},{source:"3",target:"4",data:{type:"C",amount:"100,000 Yuan",date:"2019-08-03"}},{source:"1",target:"8",data:{type:"B",amount:"100,000 Yuan",date:"2019-08-03"}},{source:"1",target:"9",data:{type:"C",amount:"100,000 Yuan",date:"2019-08-03"}}]};gt("round-rect",{drawShape:function(i,e){const r=i.style.width,n=i.style.stroke,a=e.addShape("rect",{attrs:{x:-r/2,y:-15,width:r,height:30,radius:15,stroke:n,lineWidth:3,fillOpacity:1},name:"rect-shape"});return e.addShape("circle",{attrs:{x:-r/2,y:0,r:3,fill:n},name:"circle-shape"}),e.addShape("circle",{attrs:{x:r/2,y:0,r:3,fill:n},name:"circle-shape2"}),a},getAnchorPoints:function(){return[[0,.5],[1,.5]]},update:function(i,e){const n=e.getContainer().get("children"),a=n[0],s=n[1],o=n[2],c=i.style.stroke;c&&(a.attr("stroke",c),s.attr("fill",c),o.attr("fill",c))}},"single-node");yt("fund-polyline",{itemType:"edge",draw:function(i,e){const r=i.startPoint,n=i.endPoint,a=n.y-r.y,s=a!==0?Math.min(500/Math.abs(a),20):0,o=s>15?0:16,c=a<0?o:-o,d={x:r.x+s,y:n.y+c},u={x:d.x+o,y:n.y},p={x:(d.x-r.x)*(n.y-r.y)/(d.y-r.y)+r.x,y:n.y};let O=[["M",r.x,r.y],["L",d.x,d.y],["Q",p.x,p.y,u.x,u.y],["L",n.x,n.y]];Math.abs(a)<=5&&(O=[["M",r.x,r.y],["L",n.x,n.y]]);const m=(i==null?void 0:i.style)&&i.style.endArrow?i.style.endArrow:!1;Ut(m)&&(m.fill=stroke);const b=e.addShape("path",{attrs:{path:O,stroke:Ft[i.data&&i.data.type],lineWidth:3,endArrow:m},name:"path-shape"}),C=0,E=8,L=e.addShape("text",{attrs:{text:i.data&&i.data.amount,x:u.x+C,y:n.y-E-2,fontSize:14,textAlign:"left",textBaseline:"middle",fill:"white"},name:"text-shape-amount"});return e.addShape("text",{attrs:{text:i.data&&i.data.type,x:u.x+C,y:n.y-E-L.getBBox().height-2,fontSize:10,textAlign:"left",textBaseline:"middle",fill:"white"},name:"text-shape-type"}),e.addShape("text",{attrs:{text:i.data&&i.data.date,x:u.x+C,y:n.y+E+4,fontSize:12,fontWeight:300,textAlign:"left",textBaseline:"middle",fill:"white"},name:"text-shape-date"}),b}});const M=document.createElement("div");M.style.width="1024px";M.style.height="1024px";M.style.position="absolute";M.style.opacity=0;M.className="g6-tree";document.body.appendChild(M);const X=new et({container:M,layout:{type:"dagre",rankdir:"LR",nodesep:30,ranksep:100},fitView:!0,modes:{default:["drag-canvas"]},defaultNode:{type:"round-rect",labelCfg:{style:{fill:"white",fontSize:10}},style:{stroke:"#72CC4A",width:150}},defaultEdge:{type:"fund-polyline"}});X.data(Dt);X.render();const W=["rgb(91, 143, 249)","rgb(90, 216, 166)","rgb(93, 112, 146)","rgb(246, 189, 22)","rgb(232, 104, 74)","rgb(109, 200, 236)","rgb(146, 112, 202)","rgb(255, 157, 77)","rgb(38, 154, 153)","rgb(227, 137, 163)"],N=document.createElement("div");N.style.width="1024px";N.style.height="1024px";N.style.position="absolute";N.style.opacity=0;N.className="g6-tree";document.body.appendChild(N);const T=new et({container:N,linkCenter:!0,fitView:!0,modes:{default:[{type:"edge-tooltip",formatText:function(i){return"source: "+i.sourceName+"<br/> target: "+i.targetName}}]},defaultNode:{style:{opacity:.8,lineWidth:1,stroke:"#999"}},defaultEdge:{size:1,color:"#e2e2e2",style:{opacity:.6,lineAppendWidth:3}}});T.on("edge:mouseenter",function(t){const i=t.item;T.setItemState(i,"hover",!0)});T.on("edge:mouseleave",function(t){const i=t.item;T.setItemState(i,"hover",!1)});const Gt=1024,tt=1024;fetch("https://gw.alipayobjects.com/os/basement_prod/70cde3be-22e8-4291-98f1-4d5a5b75b62f.json").then(t=>t.json()).then(t=>{const i=t.edges,e=t.nodes,r=new Map,n=new Map;let a=0;const s=e.length,o=10,c=[o,tt*.7],d=[Gt-o,tt*.7],u=d[0]-c[0],p=d[1]-c[1],O=u/s,m=p/s;e.forEach(function(l,f){l.x=c[0]+f*O,l.y=c[1]+f*m,r.set(l.id,l),l.cluster&&n.get(l.cluster)===void 0&&(n.set(l.cluster,a),a++);const j=n.get(l.cluster);l.style?l.style.fill=W[j%W.length]:l.style={fill:W[j%W.length]},l.label=l.name,l.labelCfg={position:"bottom",offset:5,style:{rotate:Math.PI/2,textAlign:"start",fill:"white"}}}),i.forEach(l=>{l.type="arc";const f=r.get(l.source),j=r.get(l.target),z=(j.x-f.x)/O,$=(z<0?-1:1)*10*Math.ceil(Math.abs(z));l.curveOffset=$,l.color=f.style.fill,l.sourceName=f.name,l.targetName=j.name});let b=-9999,C=9999;e.forEach(function(l){b<l.value&&(b=l.value),C>l.value&&(C=l.value)}),kt(e,"size","value",[C,b],[3,25]),T.data(t),T.render(),typeof window!="undefined"&&(window.onresize=()=>{!T||T.get("destroyed")||!container||!container.scrollWidth||!container.scrollHeight||T.changeSize(container.scrollWidth,container.scrollHeight)})});function kt(t,i,e,r,n){const a=n[1]-n[0],s=r[1]-r[0];t.forEach(function(o){o[i]=(o[e]-r[0])*a/s+n[0]})}const Qt=new K({width:512,height:256,bgColor:"rgb(0, 0, 0)"}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(0, 255, 0)",t.font=" bold 54px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("\u6811\u67B6\u6784\u56FE\u8C31",256,128)}),Lt=new K({width:512,height:256,bgColor:"rgb(0, 0, 0)"}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(0, 255, 0)",t.font=" bold 54px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("\u98DE\u7EBF\u67B6\u6784\u56FE\u8C31",256,128)});y.register(Et).register(Pt).register(Nt).register(xt).register(Ct).register(bt);const Bt=new K({width:256,height:256,bgColor:"rgb(0, 0, 0)"}).draw(t=>{const i=t.createLinearGradient(0,0,0,256);i.addColorStop(0,"rgb(0, 0, 255)"),i.addColorStop(1,"rgb(0, 100, 0)"),t.fillStyle=i,t.fillRect(0,0,256,256)}),Q=new pt().setDom(document.getElementById("app")).setSize();Q.registerResources({hookAlpha:Bt.getDom(),treeGraph:X.get("canvas").cfg.el,arcGraph:T.get("canvas").cfg.el,treeTips:Qt.getDom(),arcTips:Lt.getDom()});g.injectEngine=Q;const $t=g("PerspectiveCamera",{far:1e4,position:{x:500,y:-300,z:500}});Q.setCameraBySymbol($t.vid).setSize();const Wt=g("Scene");Q.setSceneBySymbol(Wt.vid);g.injectScene=!0;g("AmbientLight");const rt=70,U=70,h=rt/2,v=10,I=U*2,Jt=g("CustomGeometry",{attribute:{position:[-h,0,-h,h,0,-h,h,0,h,-h,0,h,-h*v,I,-h*v,h*v,I,-h*v,h*v,I,h*v,-h*v,I,h*v],uv:[0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],index:[0,4,5,5,1,0,1,5,6,6,2,1,2,6,7,7,3,2,3,7,4,4,0,3]},rotation:{x:Math.PI/2},position:{z:1}}),Yt=g("CanvasTexture",{url:"hookAlpha"}),qt=g("MeshBasicMaterial",{color:"rgb(53, 193, 221)",side:ft,alphaMap:Yt.vid,transparent:!0}),at=g("Mesh",{geometry:Jt.vid,material:qt.vid,visible:!1}),ot=g("PlaneGeometry",{width:100,height:50,rotation:{x:Math.PI/2}}),Ht=g("CanvasTexture",{url:"treeTips"}),Kt=g("MeshBasicMaterial",{alphaMap:Ht.vid,transparent:!0}),q=g("Mesh",{geometry:ot.vid,material:Kt.vid,position:{z:I+10,y:-h*v+20,x:h*v-50},visible:!1}),k=g("CSS3DPlane",{element:"treeGraph",width:1024,height:1024,scale:{x:.7,y:.7,z:.7},position:{z:I+10},visible:!1}),Xt=g("CanvasTexture",{url:"arcTips"}),Zt=g("MeshBasicMaterial",{alphaMap:Xt.vid,transparent:!0}),H=g("Mesh",{geometry:ot.vid,material:Zt.vid,position:{z:I+120,y:-h*v+20,x:h*v-50},visible:!1}),F=g("CSS3DPlane",{element:"arcGraph",width:1024,height:1024,scale:{x:.7,y:.7,z:.7},position:{z:I+120},visible:!1}),Vt=g("Group",{children:[at.vid,q.vid,k.vid,H.vid,F.vid]}),J=6,R=10,Y=5,st=[],ct=[];for(let t=0;t<=J*R-1;t+=1){const i=document.createElement("div");i.className="app-brick",i.innerHTML=`<span class="title">title:${t}</span>
        <span class="tips">tips:${t}</span>`,document.body.appendChild(i),Q.registerResources({[`dom${t}`]:i});const e=ht();st.push(e);const r={x:R*(U+Y)*(t%R/R)-R*(U+Y)/2,y:J*(U+Y)*(Math.floor(t/R)/J)-J*(U+Y)/2,z:0},n=g("CSS3DPlane",{vid:e,element:`dom${t}`,width:rt,height:U,position:r,click:[y.generateConfig("focusObject",{params:{target:e,space:"local",offset:{y:-850,z:500}},back:!1}),y.generateConfig("moveTo",{params:{target:Vt.vid,position:{x:r.x,y:r.y,z:r.z},duration:0}}),y.generateConfig("moveFromTo",{params:{target:F.vid,to:{x:0,y:0,z:I+120},delay:500}}),y.generateConfig("moveFromTo",{params:{target:q.vid,to:JSON.parse(JSON.stringify(q.position)),delay:500}}),y.generateConfig("moveFromTo",{params:{target:k.vid,to:JSON.parse(JSON.stringify(k.position)),delay:500}}),y.generateConfig("moveFromTo",{params:{target:H.vid,to:JSON.parse(JSON.stringify(H.position)),delay:500}}),y.generateConfig("moveFromTo",{params:{target:F.vid,to:JSON.parse(JSON.stringify(F.position)),delay:500}}),y.generateConfig("fadeObject",{params:{target:at.vid,direction:"in",delay:500}}),y.generateConfig("fadeObject",{params:{target:H.vid,direction:"in",delay:500}}),y.generateConfig("visibleObject",{params:{target:F.vid,visible:!1}}),y.generateConfig("visibleObject",{params:{target:F.vid,visible:!0,delay:500}}),y.generateConfig("fadeObject",{params:{target:q.vid,direction:"in",delay:500}}),y.generateConfig("visibleObject",{params:{target:k.vid,visible:!1}}),y.generateConfig("visibleObject",{params:{target:k.vid,visible:!0,delay:500}}),y.generateConfig("addClass",{params:{target:e,className:"app-brick-focus"}})]});ct.push(n)}ct.forEach(t=>{const i=y.generateConfig("addClass",{params:{target:st.filter(e=>e!==t.vid),className:"app-brick-fade"}});t.click.push(i)});
