var l=Object.defineProperty;var c=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var i=(t,e,r)=>(c(t,typeof e!="symbol"?e+"":e,r),r);import{e as u,t as p}from"./index.a2f5d06c.js";import{C as d}from"./three.a7f96461.js";var n;(function(t){t.RENDER="render",t.PLAY="play",t.STOP="stop"})(n||(n={}));class F extends u{constructor(r=0){super();i(this,"clock",new d);i(this,"animationFrame",-1);i(this,"fps",0);i(this,"timer",null);i(this,"playFun",()=>{});i(this,"render",()=>{this.dispatchEvent({type:n.RENDER,delta:this.clock.getDelta(),total:this.clock.getElapsedTime()})});i(this,"play",()=>{if(this.hasRendering()){console.warn("render manager is rendering.");return}this.dispatchEvent({type:n.PLAY}),this.playFun()});i(this,"stop",()=>{this.animationFrame!==-1&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=-1),this.timer&&(clearTimeout(this.timer),this.timer=null),this.dispatchEvent({type:n.STOP})});i(this,"hasRendering",()=>Boolean(this.animationFrame!==-1||this.timer));i(this,"hasVaildRender",()=>this.useful());this.setFPS(r)}setFPS(r){let a=!1;return this.animationFrame!==-1&&(cancelAnimationFrame(this.animationFrame),a=!0),this.timer&&(clearTimeout(this.timer),a=!0),this.fps=r,r<=0?(this.fps=0,this.playFun=()=>{this.render(),this.animationFrame=requestAnimationFrame(this.playFun)}):this.playFun=()=>{const h=performance.now();let s=0;const o=()=>{s+=1;const m=performance.now();this.timer=setTimeout(o,r-(m-h-s*r)),this.render()};this.timer=setTimeout(o,r)},a&&this.playFun(),this}dispose(){this.hasRendering()&&this.stop(),this.clear()}}const f="@vis-three/render-manager-plugin",g=p(f),P=function(t={}){return{name:g,install(e){e.renderManager=new F,t.fps&&e.renderManager.setFPS(t.fps),e.render=function(){return this.renderManager.render(),this},e.play=function(){return this.renderManager.play(),this},e.stop=function(){return this.renderManager.stop(),this}},dispose(e){e.renderManager.stop(),e.renderManager.dispose()}}};export{P as R,g as a,n as b};
