const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["https://cdn-astro-static.kigermap.cn/_astro/pixiStage.B7YVp9eT.js","https://cdn-astro-static.kigermap.cn/_astro/App.CyOcvAbZ.js","https://cdn-astro-static.kigermap.cn/_astro/index.DX2FeEyA.js"])))=>i.map(i=>d[i]);
import{A as Br,j as d,x as ng,aO as fn,aQ as Io,o as Nh,Q as Il,X as Ih,aR as ig,a as sg,ap as rg,aP as Dh,e as Qr,k as Uh,ah as Vf}from"./App.CyOcvAbZ.js";import{r as O}from"./index.DX2FeEyA.js";import{P as ag}from"./plus.DdokmRd3.js";import{E as kh}from"./eye.DMBWnfqJ.js";import{E as Fh}from"./eye-off.OJ6_wcJc.js";import{T as og}from"./triangle-alert.DmqkqPOs.js";import{R as lg}from"./rotate-ccw.PB4E6nKn.js";import{R as cg}from"./refresh-cw.6-gcEc2z.js";import{C as dg}from"./check.BmOSHAsk.js";import{H as Oh}from"./history.BTWQW4Hj.js";const hg=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Nc=Br("box",hg);const ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],Bh=Br("clock-3",ug);const fg=[["path",{d:"M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",key:"4pqfef"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 12v-1",key:"1ej8lb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M8 7V6",key:"1nbb54"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]],pg=Br("file-archive",fg);const mg=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],Gf=Br("focus",mg);const gg=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],xg=Br("gauge",gg);const _g=[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],vg=Br("rotate-3d",_g),Mi=(i,e,t)=>Math.min(t,Math.max(e,i));function yg(){const i=typeof window<"u",e=typeof OffscreenCanvas<"u",t=typeof createImageBitmap<"u",n=typeof WebAssembly<"u",s=i&&window.crossOriginIsolated&&typeof SharedArrayBuffer<"u"&&(navigator.hardwareConcurrency||1)>1;let r=!1;if(i)try{r=!!document.createElement("canvas").getContext("webgl2")}catch{r=!1}return{backend:e?"offscreen-canvas":"canvas-2d",imageBitmap:t,offscreenCanvas:e,wasm:n,wasmThreads:s,webgl2:r}}function Mg(i){const e=Mi(Number.isFinite(i.width)?i.width:24,3,100),t=Mi(Number.isFinite(i.height)?i.height:e,3,100);return{centerX:Mi(Number.isFinite(i.centerX)?i.centerX:50,e/2,100-e/2),centerY:Mi(Number.isFinite(i.centerY)?i.centerY:50,t/2,100-t/2),width:e,height:t}}function bg(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>e(n),n.onerror=()=>t(new Error("细节参考图解码失败")),n.src=i})}function Sg(i,e){const t=Math.max(i,e),n=Math.min(1,1024/Math.max(1,t));return{width:Mi(Math.round(i*n),192,1024),height:Mi(Math.round(e*n),192,1024)}}async function Eg(i,e,t){return new Promise((n,s)=>{i.toBlob(r=>{r?n(r):s(new Error("细节切片导出失败"))},e,t)})}async function Tg({filename:i,imageUrl:e,region:t}){const n=await bg(e),s=Math.max(1,n.naturalWidth||n.width||1),r=Math.max(1,n.naturalHeight||n.height||1),a=Mg(t),o=Mi(a.width/100*s,8,s),l=Mi(a.height/100*r,8,r),c=Mi(a.centerX/100*s-o/2,0,s-o),u=Mi(a.centerY/100*r-l/2,0,r-l),h=Sg(o,l),f="image/webp";let p;if(typeof OffscreenCanvas<"u"){const b=new OffscreenCanvas(h.width,h.height),m=b.getContext("2d");if(!m)throw new Error("浏览器无法创建加速切片画布");m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.fillStyle="#ffffff",m.fillRect(0,0,h.width,h.height),m.drawImage(n,c,u,o,l,0,0,h.width,h.height),p=await b.convertToBlob({type:f,quality:.94})}else{const b=document.createElement("canvas");b.width=h.width,b.height=h.height;const m=b.getContext("2d");if(!m)throw new Error("浏览器无法创建细节切片画布");m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.fillStyle="#ffffff",m.fillRect(0,0,h.width,h.height),m.drawImage(n,c,u,o,l,0,0,h.width,h.height),p=await Eg(b,f,.94)}const _=i.replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"detail";return new File([p],`${_}.webp`,{type:p.type||f})}const Tn=(i,e,t)=>Math.min(t,Math.max(e,Number.isFinite(i)?i:0)),jf={centerX:.5,centerY:.5,height:1,width:1};let Dl=null;function wg(i){if(!i)return jf;const e=Tn(i.width/100,.03,1),t=Tn(i.height/100,.03,1);return{centerX:Tn(i.centerX/100,e/2,1-e/2),centerY:Tn(i.centerY/100,t/2,1-t/2),height:t,width:e}}function tr(i,e,t,n){const s=(n*e+t)*4;return(i[s]*.2126+i[s+1]*.7152+i[s+2]*.0722)/255}function Ag(i,e,t,n=jf){if(e<3||t<3||i.length!==e*t*4)return[0,0,0,0,0,0];const s=Tn(n.width,.03,1),r=Tn(n.height,.03,1),a=Tn(n.centerX,s/2,1-s/2),o=Tn(n.centerY,r/2,1-r/2),l=Math.max(0,Math.floor((a-s/2)*e)),c=Math.min(e,Math.ceil((a+s/2)*e)),u=Math.max(0,Math.floor((o-r/2)*t)),h=Math.min(t,Math.ceil((o+r/2)*t));let f=0,p=0,_=0,b=0,m=0;for(let k=u;k<h;k+=1)for(let z=l;z<c;z+=1){const q=tr(i,e,z,k);f+=1,p+=q,_+=q*q,q<.035&&(b+=1),q>.965&&(m+=1)}if(!f)return[0,0,0,0,0,0];const g=p/f,w=Math.max(0,_/f-g*g),L=Tn(Math.sqrt(w)/.24,0,1);let S=0,P=0;for(let k=u+1;k<h-1;k+=1)for(let z=l+1;z<c-1;z+=1){const q=tr(i,e,z,k)*4,W=tr(i,e,z-1,k)+tr(i,e,z+1,k)+tr(i,e,z,k-1)+tr(i,e,z,k+1);S+=Math.abs(q-W),P+=1}const T=P?Tn(S/P/.18,0,1):0,I=b/f,y=m/f,A=Tn(1-Math.abs(g-.55)/.55,0,1),D=Tn(I+y,0,1),N=Tn((A*.25+L*.28+T*.32+Tn(1-D*1.8,0,1)*.15)*100,0,100);return[g,L,T,I,y,N]}function Rg(i,e){const[t=0,n=0,s=0,r=0,a=0,o=0]=i,l=[];s<.22&&l.push("选区细节偏模糊"),n<.18&&l.push("局部对比度偏低"),t<.2&&l.push("选区曝光偏暗"),t>.86&&l.push("选区高光偏强"),r+a>.18&&l.push("存在较多纯黑或纯白区域");const c=Math.round(Tn(o,0,100));return{brightness:t,clippedDark:r,clippedLight:a,contrast:n,grade:c>=78?"excellent":c>=62?"good":c>=45?"fair":"poor",score:c,sharpness:s,source:e,warnings:l}}async function Cg(){const i=await fetch("/wasm/kigcraft_geometry.wasm");if(!i.ok)throw new Error(`WASM image quality kernel ${i.status}`);const e=await i.arrayBuffer(),n=(await WebAssembly.instantiate(e,{})).instance.exports;if(!n.kigcraft_analyze_image_region)throw new Error("WASM image quality export missing");return{source:"wasm",analyze(s,r,a,o){const l=n.kigcraft_alloc(s.byteLength);try{if(new Uint8Array(n.memory.buffer,l,s.byteLength).set(s),!n.kigcraft_analyze_image_region(l,s.byteLength,r,a,o.centerX,o.centerY,o.width,o.height))throw new Error("WASM image quality analysis failed");return Array.from(new Float32Array(n.memory.buffer,n.kigcraft_image_quality_ptr(),n.kigcraft_image_quality_len()))}finally{n.kigcraft_dealloc(l,s.byteLength)}}}}function Pg(){return Dl||(Dl=Cg().catch(()=>({source:"javascript",analyze:Ag}))),Dl}function Lg(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>e(n),n.onerror=()=>t(new Error("图片质量分析加载失败")),n.src=i})}async function Wf(i,e){const t=await Lg(i),s=Math.min(1,256/Math.max(t.naturalWidth,t.naturalHeight)),r=Math.max(3,Math.round(t.naturalWidth*s)),a=Math.max(3,Math.round(t.naturalHeight*s)),o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("图片质量分析 Canvas 初始化失败");l.drawImage(t,0,0,r,a);const c=l.getImageData(0,0,r,a).data,u=await Pg(),h=u.analyze(c,r,a,wg(e));return Rg(h,u.source)}const nr={accessory:"#8b5cf6",avoid:"#ef4444",ears:"#f59e0b",expression:"#fb7185",eyes:"#06b6d4",face:"#2563eb",hair:"#10b981",headwear:"#a855f7",other:"#64748b"},wn=(i,e,t)=>Math.min(t,Math.max(e,i)),ea=(i,e)=>Number.isFinite(i)?i:e;function Cs(i){const e=Math.max(1,ea(i.zoom,1)),t=wn(ea(i.cropWidth??100/e,100/e),3,100),n=wn(ea(i.cropHeight??t,t),3,100);return{centerX:wn(ea(i.cropX,50),t/2,100-t/2),centerY:wn(ea(i.cropY,50),n/2,100-n/2),height:n,width:t}}function qa(i){return{bottom:i.centerY+i.height/2,left:i.centerX-i.width/2,right:i.centerX+i.width/2,top:i.centerY-i.height/2}}function zh(i,e,t,n){const s=wn(Math.min(i,t),0,97),r=wn(Math.min(e,n),0,97),a=wn(Math.max(i,t),s+3,100),o=wn(Math.max(e,n),r+3,100);return{centerX:(s+a)/2,centerY:(r+o)/2,height:o-r,width:a-s}}function Ng(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>e(n),n.onerror=()=>t(new Error("参考图加载失败")),n.src=i})}function Ig(i,e,t,n){const s=Math.min(i/Math.max(1,t),e/Math.max(1,n)),r=t*s,a=n*s;return{height:a,left:(i-r)/2,top:(e-a)/2,width:r}}function Dg({busy:i=!1,busyLabel:e="正在生成正视图",detailKindLabels:t,onAddReference:n,onAnalyze:s,onCreate:r,onRemove:a,onReplace:o,onRestore:l,onSelect:c,onUpdate:u,references:h,referenceKindLabels:f,regions:p,selectedId:_}){const b=O.useRef(null),m=O.useRef(null),g=O.useRef({height:1,left:0,top:0,width:1}),[w,L]=O.useState(""),[S,P]=O.useState(!1),[T,I]=O.useState(null),[y,A]=O.useState({height:620,width:960}),[D,N]=O.useState(null),[k,z]=O.useState("focus"),[q,W]=O.useState(null),[ee,K]=O.useState(!1),[ce,ue]=O.useState("supplemental"),ye=O.useMemo(()=>yg(),[]),se=p.find(Z=>Z.id===_)||null,be=se?Cs(se):null,we=h.find(Z=>Z.id===w)||h[0]||null,Ke=O.useMemo(()=>p.filter(Z=>Z.sourceRefId===we?.id),[we?.id,p]),Be=O.useMemo(()=>p.filter(Z=>Z.sourceRefId===we?.id&&!Z.replaced),[we?.id,p]),$=p.filter(Z=>Z.locked).length,pe=h.filter(Z=>p.some(re=>re.sourceRefId===Z.id)).length,le=O.useMemo(()=>k==="none"?[]:k==="all"?Be:!se||se.replaced||se.sourceRefId!==we?.id?[]:Be.filter(Z=>Z.id===se.id),[we?.id,Be,se,k]);O.useEffect(()=>{if(!h.length){L("");return}if(se?.sourceRefId&&h.some(Z=>Z.id===se.sourceRefId)){L(se.sourceRefId);return}L(Z=>h.some(re=>re.id===Z)?Z:h[0].id)},[h,se?.sourceRefId]),O.useEffect(()=>{if(!we?.previewUrl){I(null);return}let Z=!0;return Ng(we.previewUrl).then(re=>{Z&&I(re)}).catch(()=>{Z&&I(null)}),()=>{Z=!1}},[we?.previewUrl]),O.useEffect(()=>{if(!we?.previewUrl||!se||!be||se.replaced||se.sourceRefId!==we.id){W(null),K(!1);return}let Z=!1;K(!0);const re=window.setTimeout(()=>{Wf(we.previewUrl,be).then(te=>{Z||W(te)}).catch(()=>{Z||W(null)}).finally(()=>{Z||K(!1)})},160);return()=>{Z=!0,window.clearTimeout(re)}},[we?.id,we?.previewUrl,se?.cropHeight,se?.cropWidth,se?.cropX,se?.cropY,se?.id,se?.replaced,se?.sourceRefId,se?.zoom]),O.useEffect(()=>{const Z=b.current;if(!Z)return;const re=()=>{const U=Z.getBoundingClientRect();!U.width||!U.height||A({height:U.height,width:U.width})};if(re(),typeof ResizeObserver>"u")return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re);const te=new ResizeObserver(re);return te.observe(Z),()=>te.disconnect()},[]),O.useEffect(()=>{const Z=b.current;if(!Z)return;const re=Math.max(1,Math.min(window.devicePixelRatio||1,2));Z.width=Math.max(1,Math.round(y.width*re)),Z.height=Math.max(1,Math.round(y.height*re));const te=Z.getContext("2d");if(!te)return;if(te.setTransform(re,0,0,re,0,0),te.clearRect(0,0,y.width,y.height),te.fillStyle="#f7fbff",te.fillRect(0,0,y.width,y.height),!T){te.fillStyle="#64748b",te.font="700 14px system-ui, sans-serif",te.textAlign="center",te.fillText("请选择一张参考图",y.width/2,y.height/2);return}const U=Ig(y.width-32,y.height-32,T.naturalWidth||T.width,T.naturalHeight||T.height);U.left+=16,U.top+=16,g.current=U,te.fillStyle="#ffffff",te.fillRect(U.left,U.top,U.width,U.height),te.drawImage(T,U.left,U.top,U.width,U.height);const vt=v=>{const H=qa(v);return{height:v.height/100*U.height,width:v.width/100*U.width,x:U.left+H.left/100*U.width,y:U.top+H.top/100*U.height}},rt=le.find(v=>v.id===_);if(k==="focus"&&rt){const v=vt(D?.id===rt.id?D.rect:Cs(rt)),H=U.left+U.width,j=U.top+U.height;te.save(),te.fillStyle="rgba(15, 23, 42, 0.16)",te.fillRect(U.left,U.top,U.width,Math.max(0,v.y-U.top)),te.fillRect(U.left,v.y,Math.max(0,v.x-U.left),v.height),te.fillRect(v.x+v.width,v.y,Math.max(0,H-v.x-v.width),v.height),te.fillRect(U.left,v.y+v.height,U.width,Math.max(0,j-v.y-v.height)),te.restore()}const R=(v,H)=>{const{height:j,width:ne,x:me,y:ge}=vt(H),Q=v.id===_,oe=nr[v.kind]||nr.other;te.save(),te.fillStyle=Q?"rgba(255, 255, 255, 0.04)":`${oe}0d`,te.fillRect(me,ge,ne,j),Q?(te.shadowColor="rgba(37, 99, 235, 0.26)",te.shadowBlur=12,te.strokeStyle="rgba(255, 255, 255, 0.96)",te.lineWidth=4,te.strokeRect(me,ge,ne,j),te.shadowBlur=0,te.strokeStyle="#2563eb",te.lineWidth=1.5,te.strokeRect(me+.5,ge+.5,Math.max(0,ne-1),Math.max(0,j-1))):(te.globalAlpha=.78,te.strokeStyle=oe,te.lineWidth=1.25,te.setLineDash(v.locked?[]:[5,4]),te.strokeRect(me+.5,ge+.5,Math.max(0,ne-1),Math.max(0,j-1)),te.setLineDash([]));const Se=v.label||t[v.kind]||"细节",ke=Q?`${Se} · ${v.locked?"强约束":"辅助"}`:Se;if(Q){const _e=Q?28:22;te.font=`${Q?760:720} ${Q?12:11}px system-ui, sans-serif`;const He=te.measureText(ke).width+(Q?34:18),$e=Q?196:Math.max(64,ne-12),Ee=Math.min(He,$e,U.width-12),F=wn(me+6,U.left+6,U.left+U.width-Ee-6),Me=ge+7,ae=j>=_e+16||ge-_e-6<U.top?Me:ge-_e-6;te.globalAlpha=1,te.shadowColor=Q?"rgba(15, 23, 42, 0.18)":"rgba(15, 23, 42, 0.12)",te.shadowBlur=Q?10:6,te.fillStyle=Q?"rgba(255, 255, 255, 0.96)":oe,te.beginPath(),typeof te.roundRect=="function"?te.roundRect(F,ae,Ee,_e,Q?6:5):te.rect(F,ae,Ee,_e),te.fill(),te.shadowBlur=0,Q&&(te.strokeStyle="rgba(37, 99, 235, 0.34)",te.lineWidth=1,te.stroke(),te.fillStyle=oe,te.beginPath(),te.arc(F+12,ae+_e/2,3.5,0,Math.PI*2),te.fill()),te.fillStyle=Q?"#172033":"#ffffff",te.textAlign="left",te.textBaseline="middle";const xe=F+(Q?22:9);te.fillText(ke,xe,ae+_e/2,Math.max(24,Ee-(Q?30:16)))}Q&&[[me,ge],[me+ne,ge],[me+ne,ge+j],[me,ge+j]].forEach(([He,$e])=>{te.shadowColor="rgba(37, 99, 235, 0.22)",te.shadowBlur=7,te.fillStyle="#ffffff",te.strokeStyle="#2563eb",te.lineWidth=1.75,te.beginPath(),te.arc(He,$e,5,0,Math.PI*2),te.fill(),te.shadowBlur=0,te.stroke()}),te.restore()};le.filter(v=>v.id!==_).concat(le.filter(v=>v.id===_)).forEach(v=>R(v,D?.id===v.id?D.rect:Cs(v))),D?.id==="__new__"&&R({cropX:D.rect.centerX,cropY:D.rect.centerY,id:"__new__",kind:"other",label:"新细节",locked:!0,sourceRefId:we?.id},D.rect)},[we?.id,T,y,t,le,D,_,k]);const ze=Z=>{const re=Z.currentTarget.getBoundingClientRect(),te=g.current,U=(Z.clientX-re.left-te.left)/te.width*100,vt=(Z.clientY-re.top-te.top)/te.height*100;return{x:wn(U,0,100),y:wn(vt,0,100)}},fe=Z=>{P(!1),z("focus"),c(Z)},je=Z=>{P(!1),L(Z);const re=p.find(te=>te.sourceRefId===Z&&!te.replaced)||p.find(te=>te.sourceRefId===Z)||null;c(re?.id||""),z(re&&!re.replaced?"focus":"none")},At=()=>{const Z=!S;P(Z),z(Z?"none":se&&!se.replaced?"focus":"none")},et=()=>{P(!1),z(Z=>Z==="all"?"none":"all")},_t=Z=>{if(!we||!T)return;const re=ze(Z);if(S){Z.currentTarget.setPointerCapture(Z.pointerId);const H={centerX:re.x,centerY:re.y,width:3,height:3};m.current={id:"__new__",mode:"create",origin:H,pointerId:Z.pointerId,startX:re.x,startY:re.y},N({id:"__new__",rect:H});return}const te=g.current,U=12/te.width*100,vt=12/te.height*100,rt=le.find(H=>H.id===_);if(rt){const H=Cs(rt),j=qa(H),me=[{mode:"nw",x:j.left,y:j.top},{mode:"ne",x:j.right,y:j.top},{mode:"se",x:j.right,y:j.bottom},{mode:"sw",x:j.left,y:j.bottom}].find(ge=>Math.abs(re.x-ge.x)<=U&&Math.abs(re.y-ge.y)<=vt);if(me){Z.currentTarget.setPointerCapture(Z.pointerId),m.current={id:rt.id,mode:me.mode,origin:H,pointerId:Z.pointerId,startX:re.x,startY:re.y},N({id:rt.id,rect:H});return}}const R=[...le].reverse().find(H=>{const j=qa(Cs(H));return re.x>=j.left&&re.x<=j.right&&re.y>=j.top&&re.y<=j.bottom});if(!R){c(""),z("none");return}const v=Cs(R);Z.currentTarget.setPointerCapture(Z.pointerId),fe(R.id),m.current={id:R.id,mode:"move",origin:v,pointerId:Z.pointerId,startX:re.x,startY:re.y},N({id:R.id,rect:v})},xt=Z=>{const re=m.current;if(!re||re.pointerId!==Z.pointerId)return;const te=ze(Z),U=te.x-re.startX,vt=te.y-re.startY,rt=qa(re.origin);let R=re.origin;if(re.mode==="create")R=zh(re.startX,re.startY,te.x,te.y);else if(re.mode==="move")R={...re.origin,centerX:wn(re.origin.centerX+U,re.origin.width/2,100-re.origin.width/2),centerY:wn(re.origin.centerY+vt,re.origin.height/2,100-re.origin.height/2)};else{const v=re.mode==="nw"||re.mode==="sw"?te.x:rt.left,H=re.mode==="ne"||re.mode==="se"?te.x:rt.right,j=re.mode==="nw"||re.mode==="ne"?te.y:rt.top,ne=re.mode==="sw"||re.mode==="se"?te.y:rt.bottom;R=zh(v,j,H,ne)}N({id:re.id,rect:R})},dt=Z=>{const re=m.current;if(!re||re.pointerId!==Z.pointerId)return;const te=D?.rect||re.origin;re.id==="__new__"?(r({...te,sourceRefId:w}),P(!1),z("focus")):u(re.id,{cropHeight:te.height,cropWidth:te.width,cropX:te.centerX,cropY:te.centerY,zoom:100/Math.max(te.width,te.height)}),m.current=null,N(null),Z.currentTarget.hasPointerCapture(Z.pointerId)&&Z.currentTarget.releasePointerCapture(Z.pointerId)},jt=Z=>{if(S&&(Z.key==="Enter"||Z.key===" ")){Z.preventDefault(),w&&(r({centerX:50,centerY:50,height:30,sourceRefId:w,width:30}),P(!1));return}if(!se||se.sourceRefId!==w)return;const re=Z.shiftKey?2:.5,te={ArrowDown:{x:0,y:re},ArrowLeft:{x:-re,y:0},ArrowRight:{x:re,y:0},ArrowUp:{x:0,y:-re}}[Z.key];if(!te)return;Z.preventDefault(),z("focus");const U=Cs(se);u(se.id,{cropX:wn(U.centerX+te.x,U.width/2,100-U.width/2),cropY:wn(U.centerY+te.y,U.height/2,100-U.height/2)})},Rt=(Z,re)=>{if(!se)return;const te=Number(re);Number.isFinite(te)&&u(se.id,{[Z]:te})},Yt=k==="all"?`显示全部 · ${le.length}/${Be.length}`:k==="none"?`选框已隐藏 · 0/${Be.length}`:le.length?`仅显示当前 · 1/${Be.length}`:`未选择选区 · 0/${Be.length}`;return d.jsxs("div",{className:"kigcraft-detail-canvas-workspace",children:[d.jsxs("aside",{className:"kigcraft-detail-source-rail","aria-label":"细节参考来源",children:[d.jsxs("div",{className:"kigcraft-detail-source-head",children:[d.jsx("span",{children:d.jsx(ng,{"aria-hidden":"true"})}),d.jsxs("div",{children:[d.jsx("strong",{children:"参考来源"}),d.jsxs("small",{children:[pe,"/",h.length," 已建立选区"]})]})]}),d.jsx("div",{className:"kigcraft-detail-source-list",children:h.map(Z=>{const re=p.filter(vt=>vt.sourceRefId===Z.id),te=re.length,U=re.filter(vt=>vt.locked).length;return d.jsxs("button",{type:"button",className:Z.id===w?"is-active":"","aria-pressed":Z.id===w,onClick:()=>je(Z.id),children:[d.jsx("img",{src:Z.previewUrl,alt:""}),d.jsxs("span",{children:[d.jsx("strong",{children:Z.label}),d.jsx("small",{children:f[Z.kind]||Z.kind}),d.jsx("em",{children:te?`${te} 区域 · ${U} 强约束`:"等待框选"})]})]},Z.id)})}),d.jsxs("div",{className:"kigcraft-detail-source-add",children:[d.jsx("select",{value:ce,"aria-label":"补充参考图类型",onChange:Z=>ue(Z.target.value),children:Object.entries(f).filter(([Z])=>Z!=="front").map(([Z,re])=>d.jsx("option",{value:Z,children:re},Z))}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>n(ce),children:[d.jsx(ag,{"aria-hidden":"true"})," 补充图片"]})]}),d.jsxs("div",{className:"kigcraft-detail-source-summary",children:[d.jsxs("span",{children:[d.jsx("strong",{children:p.length}),"全部区域"]}),d.jsxs("span",{children:[d.jsx("strong",{children:$}),"强约束"]})]})]}),d.jsxs("div",{className:"kigcraft-detail-canvas-main",children:[d.jsxs("div",{className:"kigcraft-detail-canvas-toolbar",children:[d.jsxs("div",{children:[d.jsx("strong",{children:"原图细节画布"}),d.jsx("span",{children:"在图片上拖出选区；拖动选区移动，拖动四角缩放。"})]}),d.jsxs("div",{className:"kigcraft-detail-canvas-actions",children:[d.jsx("span",{className:"kigcraft-acceleration-badge",title:`${ye.wasmThreads?"WASM 多线程":ye.wasm?"WASM":"兼容模式"} · ${ye.offscreenCanvas?"OffscreenCanvas":"Canvas"}`,children:"本地分析已就绪"}),d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:s,children:"重新智能识别"}),d.jsx("button",{type:"button",className:S?"kigcraft-primary is-active":"kigcraft-primary",onClick:At,disabled:!we,children:S?"在画布拖出选区":"+ 添加细节选区"})]})]}),d.jsxs("div",{className:`kigcraft-detail-canvas-frame is-${k}${S?" is-adding":""}${i?" is-busy":""}`,"aria-busy":i,children:[d.jsx("canvas",{ref:b,tabIndex:i?-1:0,"aria-label":"细节选区画布。方向键移动当前选区，按住 Shift 可加速移动；添加模式下按回车可创建居中选区。",onKeyDown:jt,onPointerCancel:dt,onPointerDown:_t,onPointerMove:xt,onPointerUp:dt}),S&&!i&&d.jsx("div",{className:"kigcraft-detail-canvas-tip",children:"按住并拖动，框选需要 AI 精确保留的细节"}),i&&d.jsx("div",{className:"kigcraft-detail-generation-mask",role:"status","aria-live":"polite",children:d.jsxs("div",{children:[d.jsx("span",{"aria-hidden":"true"}),d.jsx("strong",{children:e}),d.jsx("p",{children:"请不要离开页面，生成完成后将自动进入正视图编辑。"})]})})]}),d.jsxs("div",{className:"kigcraft-region-browser",children:[d.jsxs("div",{className:"kigcraft-region-chip-list","aria-label":"当前参考图的细节选区",children:[Ke.map(Z=>d.jsxs("button",{type:"button","aria-pressed":Z.id===_,className:`${Z.id===_?"is-active":""} ${Z.locked?"is-locked":""}`,onClick:()=>fe(Z.id),children:[d.jsx("span",{style:{background:nr[Z.kind]||nr.other}}),Z.label||t[Z.kind]||"未命名细节",d.jsx("small",{children:Z.replaced?"独立参考":Z.locked?"强约束":"辅助"})]},Z.id)),!Ke.length&&d.jsx("span",{className:"kigcraft-region-chip-empty",children:"当前参考图暂无选区"})]}),d.jsxs("div",{className:"kigcraft-region-visibility-bar",children:[d.jsxs("span",{className:`is-${k}`,"aria-live":"polite",children:[k==="focus"?d.jsx(Gf,{"aria-hidden":"true"}):k==="all"?d.jsx(kh,{"aria-hidden":"true"}):d.jsx(Fh,{"aria-hidden":"true"}),Yt]}),d.jsxs("button",{type:"button",className:"kigcraft-region-visibility-toggle","aria-pressed":k==="all",disabled:!Be.length||S,onClick:et,children:[k==="all"?d.jsx(Fh,{"aria-hidden":"true"}):d.jsx(kh,{"aria-hidden":"true"}),k==="all"?"隐藏全部":"显示全部"]})]})]})]}),d.jsx("aside",{className:"kigcraft-detail-region-inspector",children:se&&be?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"kigcraft-inspector-title",children:[d.jsx("span",{className:"kigcraft-region-kind-dot",style:{background:nr[se.kind]||nr.other}}),d.jsxs("div",{children:[d.jsx("h3",{children:se.label||"细节选区"}),d.jsx("p",{children:se.replaced?"独立上传的局部参考":"从原参考图实时裁切"})]})]}),!se.replaced&&d.jsxs("div",{className:`kigcraft-region-quality ${q?`is-${q.grade}`:""}`,children:[d.jsxs("div",{className:"kigcraft-region-quality-head",children:[d.jsx(xg,{"aria-hidden":"true"}),d.jsxs("span",{children:[d.jsx("strong",{children:"选区质量"}),d.jsx("small",{children:ee?"分析中":q?`${q.source==="wasm"?"WASM":"兼容"} · ${q.score} 分`:"等待分析"})]})]}),q&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"kigcraft-region-quality-meter","aria-label":`选区质量 ${q.score} 分`,children:d.jsx("span",{style:{width:`${q.score}%`}})}),d.jsxs("div",{className:"kigcraft-region-quality-metrics",children:[d.jsxs("span",{children:["清晰度 ",d.jsx("strong",{children:Math.round(q.sharpness*100)})]}),d.jsxs("span",{children:["对比度 ",d.jsx("strong",{children:Math.round(q.contrast*100)})]}),d.jsxs("span",{children:["亮度 ",d.jsx("strong",{children:Math.round(q.brightness*100)})]})]}),d.jsx("p",{children:q.warnings[0]||"当前区域适合作为细节参考。"})]})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"细节类型"}),d.jsx("select",{value:se.kind,onChange:Z=>u(se.id,{kind:Z.target.value}),children:Object.entries(t).map(([Z,re])=>d.jsx("option",{value:Z,children:re},Z))})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"选区名称"}),d.jsx("input",{value:se.label,maxLength:60,onChange:Z=>u(se.id,{label:Z.target.value}),placeholder:"例如：角色左眼、刘海分叉"})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"给 AI 的细节说明"}),d.jsx("textarea",{value:se.description,maxLength:280,onChange:Z=>u(se.id,{description:Z.target.value}),placeholder:"说明必须保留的形状、颜色、材质、侧别和遮挡关系。"}),d.jsxs("small",{children:[se.description.length,"/280"]})]}),!se.replaced&&d.jsxs("div",{className:"kigcraft-region-coordinate-grid",children:[d.jsxs("label",{children:["中心 X",d.jsx("input",{type:"number",min:"0",max:"100",step:"0.5",value:be.centerX.toFixed(1),onChange:Z=>Rt("cropX",Z.target.value)})]}),d.jsxs("label",{children:["中心 Y",d.jsx("input",{type:"number",min:"0",max:"100",step:"0.5",value:be.centerY.toFixed(1),onChange:Z=>Rt("cropY",Z.target.value)})]}),d.jsxs("label",{children:["宽度",d.jsx("input",{type:"number",min:"3",max:"100",step:"0.5",value:be.width.toFixed(1),onChange:Z=>Rt("cropWidth",Z.target.value)})]}),d.jsxs("label",{children:["高度",d.jsx("input",{type:"number",min:"3",max:"100",step:"0.5",value:be.height.toFixed(1),onChange:Z=>Rt("cropHeight",Z.target.value)})]})]}),d.jsxs("label",{className:"kigcraft-check kigcraft-lock-emphasis",children:[d.jsx("input",{type:"checkbox",checked:se.locked,onChange:Z=>u(se.id,{locked:Z.target.checked})}),d.jsx("span",{children:"作为强约束提交给 AI"})]}),d.jsxs("div",{className:"kigcraft-inspector-actions",children:[d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:()=>o(se.id),children:"上传独立局部图"}),d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:()=>l(se.id),disabled:!se.replaced,children:"恢复原图选区"})]}),d.jsx("button",{type:"button",className:"kigcraft-danger-button",onClick:()=>a(se.id),children:"删除此选区"})]}):d.jsxs("div",{className:"kigcraft-detail-inspector-empty",children:[d.jsx("strong",{children:"选择一个细节区域"}),d.jsx("p",{children:"点击画布中的选框或下方标签后，可以编辑名称、说明和锁定级别。"}),d.jsx("p",{children:"键盘用户可用方向键精确移动选区，Shift + 方向键可快速移动。"})]})})]})}var Hh={},Ug=(function(i,e,t,n,s){var r=new Worker(Hh[e]||(Hh[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(a){var o=a.data,l=o.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],s(c,null)}else s(null,o)},r.postMessage(t,n),r}),Rn=Uint8Array,Fs=Uint16Array,Xf=Int32Array,Cd=new Rn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pd=new Rn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qf=new Rn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$f=function(i,e){for(var t=new Fs(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Xf(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Yf=$f(Cd,2),Ld=Yf.b,kg=Yf.r;Ld[28]=258,kg[258]=28;var Fg=$f(Pd,0),Kf=Fg.b,Wo=new Fs(32768);for(var Gt=0;Gt<32768;++Gt){var rs=(Gt&43690)>>1|(Gt&21845)<<1;rs=(rs&52428)>>2|(rs&13107)<<2,rs=(rs&61680)>>4|(rs&3855)<<4,Wo[Gt]=((rs&65280)>>8|(rs&255)<<8)>>1}var wr=(function(i,e,t){for(var n=i.length,s=0,r=new Fs(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new Fs(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Fs(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=a[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Wo[h]>>l]=c}else for(o=new Fs(n),s=0;s<n;++s)i[s]&&(o[s]=Wo[a[i[s]-1]++]>>15-i[s]);return o}),Ra=new Rn(288);for(var Gt=0;Gt<144;++Gt)Ra[Gt]=8;for(var Gt=144;Gt<256;++Gt)Ra[Gt]=9;for(var Gt=256;Gt<280;++Gt)Ra[Gt]=7;for(var Gt=280;Gt<288;++Gt)Ra[Gt]=8;var Zf=new Rn(32);for(var Gt=0;Gt<32;++Gt)Zf[Gt]=5;var Jf=wr(Ra,9,1),Qf=wr(Zf,5,1),Do=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Xn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Uo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},ep=function(i){return(i+7)/8|0},sl=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Rn(i.subarray(e,t))},tp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(i,e,t){var n=new Error(e||tp[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},np=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Rn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Rn(s*3));var c=function(je){var At=t.length;if(je>At){var et=new Rn(Math.max(At*2,je));et.set(t),t=et}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,_=e.d,b=e.m,m=e.n,g=s*8;do{if(!p){u=Xn(i,h,1);var w=Xn(i,h+1,3);if(h+=3,w)if(w==1)p=Jf,_=Qf,b=9,m=5;else if(w==2){var T=Xn(i,h,31)+257,I=Xn(i,h+10,15)+4,y=T+Xn(i,h+5,31)+1;h+=14;for(var A=new Rn(y),D=new Rn(19),N=0;N<I;++N)D[qf[N]]=Xn(i,h+N*3,7);h+=I*3;for(var k=Do(D),z=(1<<k)-1,q=wr(D,k,1),N=0;N<y;){var W=q[Xn(i,h,z)];h+=W&15;var L=W>>4;if(L<16)A[N++]=L;else{var ee=0,K=0;for(L==16?(K=3+Xn(i,h,3),h+=2,ee=A[N-1]):L==17?(K=3+Xn(i,h,7),h+=3):L==18&&(K=11+Xn(i,h,127),h+=7);K--;)A[N++]=ee}}var ce=A.subarray(0,T),ue=A.subarray(T);b=Do(ce),m=Do(ue),p=wr(ce,b,1),_=wr(ue,m,1)}else Mn(1);else{var L=ep(h)+4,S=i[L-4]|i[L-3]<<8,P=L+S;if(P>s){l&&Mn(0);break}o&&c(f+S),t.set(i.subarray(L,P),f),e.b=f+=S,e.p=h=P*8,e.f=u;continue}if(h>g){l&&Mn(0);break}}o&&c(f+131072);for(var ye=(1<<b)-1,se=(1<<m)-1,be=h;;be=h){var ee=p[Uo(i,h)&ye],we=ee>>4;if(h+=ee&15,h>g){l&&Mn(0);break}if(ee||Mn(2),we<256)t[f++]=we;else if(we==256){be=h,p=null;break}else{var Ke=we-254;if(we>264){var N=we-257,Be=Cd[N];Ke=Xn(i,h,(1<<Be)-1)+Ld[N],h+=Be}var $=_[Uo(i,h)&se],pe=$>>4;$||Mn(3),h+=$&15;var ue=Kf[pe];if(pe>3){var Be=Pd[pe];ue+=Uo(i,h)&(1<<Be)-1,h+=Be}if(h>g){l&&Mn(0);break}o&&c(f+131072);var le=f+Ke;if(f<ue){var ze=r-ue,fe=Math.min(ue,le);for(ze+f<0&&Mn(3);f<fe;++f)t[f]=n[ze+f]}for(;f<le;++f)t[f]=t[f-ue]}}e.l=p,e.p=be,e.b=f,e.f=u,p&&(u=1,e.m=b,e.d=_,e.n=m)}while(!u);return f!=t.length&&a?sl(t,0,f):t.subarray(0,f)},Og=new Rn(0),Bg=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Vh=function(i,e,t){for(var n=i(),s=i.toString(),r=s.slice(s.indexOf("[")+1,s.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],l=r[a];if(typeof o=="function"){e+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var h in o.prototype)e+=";"+l+".prototype."+h+"="+o.prototype[h].toString()}else e+=c}else t[l]=o}return e},$a=[],zg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Hg=function(i,e,t,n){if(!$a[t]){for(var s="",r={},a=i.length-1,o=0;o<a;++o)s=Vh(i[o],s,r);$a[t]={c:Vh(i[a],s,r),e:r}}var l=Bg({},$a[t].e);return Ug($a[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,l,zg(l),n)},Vg=function(){return[Rn,Fs,Xf,Cd,Pd,qf,Ld,Kf,Jf,Qf,Wo,tp,wr,Do,Xn,Uo,ep,sl,Mn,np,Nd,ip,sp]},ip=function(i){return postMessage(i,[i.buffer])},sp=function(i){return i&&{out:i.size&&new Rn(i.size),dictionary:i.dictionary}},Gg=function(i,e,t,n,s,r){var a=Hg(t,n,s,function(o,l){a.terminate(),r(o,l)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},vi=function(i,e){return i[e]|i[e+1]<<8},$n=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Ul=function(i,e){return $n(i,e)+$n(i,e+4)*4294967296};function jg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Mn(7),Gg(i,e,[Vg],function(n){return ip(Nd(n.data[0],sp(n.data[1])))},1,t)}function Nd(i,e){return np(i,{i:2},e&&e.out,e&&e.dictionary)}var Ic=typeof TextDecoder<"u"&&new TextDecoder,Wg=0;try{Ic.decode(Og,{stream:!0}),Wg=1}catch{}var Xg=function(i){for(var e="",t=0;;){var n=i[t++],s=(n>127)+(n>223)+(n>239);if(t+s>i.length)return{s:e,r:sl(i,t-1)};s?s==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function qg(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Ic)return Ic.decode(i);var s=Xg(i),r=s.s,t=s.r;return t.length&&Mn(8),r}}var $g=function(i,e){return e+30+vi(i,e+26)+vi(i,e+28)},Yg=function(i,e,t){var n=vi(i,e+28),s=vi(i,e+30),r=qg(i.subarray(e+46,e+46+n),!(vi(i,e+8)&2048)),a=e+46+n,o=Kg(i,a,s,t,$n(i,e+20),$n(i,e+24),$n(i,e+42)),l=o[0],c=o[1],u=o[2];return[vi(i,e+10),l,c,r,a+s+vi(i,e+32),u]},Kg=function(i,e,t,n,s,r,a){var o=s==4294967295,l=r==4294967295,c=a==4294967295,u=e+t,h=o+l+c;if(n&&h){for(;e+4<u;e+=4+vi(i,e+2))if(vi(i,e)==1)return[o?Ul(i,e+4+8*l):s,l?Ul(i,e+4):r,c?Ul(i,e+4+8*(l+o)):a,1];n<2&&Mn(13)}return[s,r,a,0]},Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()};function Zg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Mn(7);var n=[],s=function(){for(var m=0;m<n.length;++m)n[m]()},r={},a=function(m,g){Gh(function(){t(m,g)})};Gh(function(){a=t});for(var o=i.length-22;$n(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(Mn(13,0,1),null),s;var l=vi(i,o+8);if(l){var c=l,u=$n(i,o+16),h=$n(i,o-20)==117853008;if(h){var f=$n(i,o-12);h=$n(i,f)==101075792,h&&(c=l=$n(i,f+32),u=$n(i,f+48))}for(var p=e&&e.filter,_=function(m){var g=Yg(i,u,h),w=g[0],L=g[1],S=g[2],P=g[3],T=g[4],I=g[5],y=$g(i,I);u=T;var A=function(N,k){N?(s(),a(N,null)):(k&&(r[P]=k),--l||a(null,r))};if(!p||p({name:P,size:L,originalSize:S,compression:w}))if(!w)A(null,sl(i,y,y+L));else if(w==8){var D=i.subarray(y,y+L);if(S<524288||L>.8*S)try{A(null,Nd(D,{out:new Rn(S)}))}catch(N){A(N,null)}else n.push(jg(D,{size:S},A))}else A(Mn(14,"unknown compression type "+w,1),null);else A(null,null)},b=0;b<c;++b)_(b)}else a(null,{});return s}const Id="185",Ar={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jg=0,jh=1,Qg=2,ko=1,ex=2,ua=3,wi=0,In=1,yi=2,ji=0,Rr=1,Wh=2,Xh=3,qh=4,tx=5,Us=100,nx=101,ix=102,sx=103,rx=104,ax=200,ox=201,lx=202,cx=203,Dc=204,Uc=205,dx=206,hx=207,ux=208,fx=209,px=210,mx=211,gx=212,xx=213,_x=214,kc=0,Fc=1,Oc=2,Dr=3,Bc=4,zc=5,Hc=6,Vc=7,Dd=0,vx=1,yx=2,Ei=0,rp=1,ap=2,op=3,Ud=4,lp=5,cp=6,dp=7,$h="attached",Mx="detached",hp=300,Hs=301,Ur=302,kl=303,Fl=304,rl=306,Vs=1e3,bi=1001,Xo=1002,nn=1003,up=1004,fa=1005,sn=1006,Fo=1007,zi=1008,On=1009,fp=1010,pp=1011,va=1012,kd=1013,Ai=1014,Yn=1015,Xi=1016,Fd=1017,Od=1018,ya=1020,mp=35902,gp=35899,xp=1021,_p=1022,Kn=1023,qi=1026,Os=1027,Bd=1028,zd=1029,Gs=1030,Hd=1031,Vd=1033,Oo=33776,Bo=33777,zo=33778,Ho=33779,Gc=35840,jc=35841,Wc=35842,Xc=35843,qc=36196,$c=37492,Yc=37496,Kc=37488,Zc=37489,qo=37490,Jc=37491,Qc=37808,ed=37809,td=37810,nd=37811,id=37812,sd=37813,rd=37814,ad=37815,od=37816,ld=37817,cd=37818,dd=37819,hd=37820,ud=37821,fd=36492,pd=36494,md=36495,gd=36283,xd=36284,$o=36285,_d=36286,Ma=2300,ba=2301,Ol=2302,Yh=2303,Kh=2400,Zh=2401,Jh=2402,bx=2500,Sx=0,vp=1,vd=2,Ex=3200,Yo=0,Tx=1,xs="",$t="srgb",zn="srgb-linear",Ko="linear",Nt="srgb",ir=7680,Qh=519,wx=512,Ax=513,Rx=514,Gd=515,Cx=516,Px=517,jd=518,Lx=519,yd=35044,eu="300 es",Si=2e3,Sa=2001;function Nx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ix(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dx(){const i=Ea("canvas");return i.style.display="block",i}const tu={};function Zo(...i){const e="THREE."+i.shift();console.log(e,...i)}function yp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=yp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=yp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cr(...i){const e=i.join(" ");e in tu||(tu[e]=!0,qe(...i))}function Ux(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const kx={[kc]:Fc,[Oc]:Hc,[Bc]:Vc,[Dr]:zc,[Fc]:kc,[Hc]:Oc,[Vc]:Bc,[zc]:Dr};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nu=1234567;const ga=Math.PI/180,kr=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function Wd(i,e){return(i%e+e)%e}function Fx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ox(i,e,t){return i!==e?(t-i)/(e-i):0}function xa(i,e,t){return(1-t)*i+t*e}function Bx(i,e,t,n){return xa(i,e,1-Math.exp(-t*n))}function zx(i,e=1){return e-Math.abs(Wd(i,e*2)-e)}function Hx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jx(i,e){return i+Math.random()*(e-i)}function Wx(i){return i*(.5-Math.random())}function Xx(i){i!==void 0&&(nu=i);let e=nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qx(i){return i*ga}function $x(i){return i*kr}function Yx(i){return(i&i-1)===0&&i!==0}function Kx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jx(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xd={DEG2RAD:ga,RAD2DEG:kr,generateUUID:oi,clamp:mt,euclideanModulo:Wd,mapLinear:Fx,inverseLerp:Ox,lerp:xa,damp:Bx,pingpong:zx,smoothstep:Hx,smootherstep:Vx,randInt:Gx,randFloat:jx,randFloatSpread:Wx,seededRandom:Xx,degToRad:qx,radToDeg:$x,isPowerOfTwo:Yx,ceilPowerOfTwo:Kx,floorPowerOfTwo:Zx,setQuaternionFromProperEuler:Jx,normalize:It,denormalize:ri};class tt{static{tt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],b=r[a+3];if(h!==b||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*b;m<0&&(f=-f,p=-p,_=-_,b=-b,m=-m);let g=1-o;if(m<.9995){const w=Math.acos(m),L=Math.sin(w);g=Math.sin(g*w)/L,o=Math.sin(o*w)/L,l=l*g+f*o,c=c*g+p*o,u=u*g+_*o,h=h*g+b*o}else{l=l*g+f*o,c=c*g+p*o,u=u*g+_*o,h=h*g+b*o;const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-o*p,e[t+2]=c*_+u*p+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{G.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new G,iu=new li;class lt{static{lt.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],b=s[0],m=s[3],g=s[6],w=s[1],L=s[4],S=s[7],P=s[2],T=s[5],I=s[8];return r[0]=a*b+o*w+l*P,r[3]=a*m+o*L+l*T,r[6]=a*g+o*S+l*I,r[1]=c*b+u*w+h*P,r[4]=c*m+u*L+h*T,r[7]=c*g+u*S+h*I,r[2]=f*b+p*w+_*P,r[5]=f*m+p*L+_*T,r[8]=f*g+p*S+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=t*h+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=h*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=f*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(e,t)),this}rotate(e){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new lt,su=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){const i={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Nt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Nt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xs?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zn]:{primaries:e,whitePoint:n,transfer:Ko,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const pt=Qx();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sr;class e0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=Ea("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t0=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hl(s[a].image)):r.push(Hl(s[a]))}else r=Hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?e0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let n0=0;const Vl=new G;class rn extends vs{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=bi,s=bi,r=sn,a=zi,o=Kn,l=On,c=rn.DEFAULT_ANISOTROPY,u=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=oi(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=hp;rn.DEFAULT_ANISOTROPY=1;class Ft{static{Ft.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],b=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(c+1)/2,S=(p+1)/2,P=(g+1)/2,T=(u+f)/4,I=(h+b)/4,y=(_+m)/4;return L>S&&L>P?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=T/n,r=I/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=y/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=I/r,s=y/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-b)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i0 extends vs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends i0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mp extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{static{ht.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,_,b,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,_,b,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=p,g[7]=_,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,_=o*u,b=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,b=c*h;t[0]=f+b*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,b=c*h;t[0]=f-b*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,_=o*u,b=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+b,t[1]=l*h,t[5]=b*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=b-f*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-b*h}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+b,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,a0)}lookAt(e,t,n){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),as.crossVectors(n,Un),as.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),as.crossVectors(n,Un)),as.normalize(),Ya.crossVectors(Un,as),s[0]=as.x,s[4]=Ya.x,s[8]=Un.x,s[1]=as.y,s[5]=Ya.y,s[9]=Un.y,s[2]=as.z,s[6]=Ya.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],b=n[6],m=n[10],g=n[14],w=n[3],L=n[7],S=n[11],P=n[15],T=s[0],I=s[4],y=s[8],A=s[12],D=s[1],N=s[5],k=s[9],z=s[13],q=s[2],W=s[6],ee=s[10],K=s[14],ce=s[3],ue=s[7],ye=s[11],se=s[15];return r[0]=a*T+o*D+l*q+c*ce,r[4]=a*I+o*N+l*W+c*ue,r[8]=a*y+o*k+l*ee+c*ye,r[12]=a*A+o*z+l*K+c*se,r[1]=u*T+h*D+f*q+p*ce,r[5]=u*I+h*N+f*W+p*ue,r[9]=u*y+h*k+f*ee+p*ye,r[13]=u*A+h*z+f*K+p*se,r[2]=_*T+b*D+m*q+g*ce,r[6]=_*I+b*N+m*W+g*ue,r[10]=_*y+b*k+m*ee+g*ye,r[14]=_*A+b*z+m*K+g*se,r[3]=w*T+L*D+S*q+P*ce,r[7]=w*I+L*N+S*W+P*ue,r[11]=w*y+L*k+S*ee+P*ye,r[15]=w*A+L*z+S*K+P*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],b=e[7],m=e[11],g=e[15],w=l*p-c*f,L=o*p-c*h,S=o*f-l*h,P=a*p-c*u,T=a*f-l*u,I=a*h-o*u;return t*(b*w-m*L+g*S)-n*(_*w-m*P+g*T)+s*(_*L-b*P+g*I)-r*(_*S-b*T+m*I)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],b=e[13],m=e[14],g=e[15],w=t*o-n*a,L=t*l-s*a,S=t*c-r*a,P=n*l-s*o,T=n*c-r*o,I=s*c-r*l,y=u*b-h*_,A=u*m-f*_,D=u*g-p*_,N=h*m-f*b,k=h*g-p*b,z=f*g-p*m,q=w*z-L*k+S*N+P*D-T*A+I*y;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/q;return e[0]=(o*z-l*k+c*N)*W,e[1]=(s*k-n*z-r*N)*W,e[2]=(b*I-m*T+g*P)*W,e[3]=(f*T-h*I-p*P)*W,e[4]=(l*D-a*z-c*A)*W,e[5]=(t*z-s*D+r*A)*W,e[6]=(m*S-_*I-g*L)*W,e[7]=(u*I-f*S+p*L)*W,e[8]=(a*k-o*D+c*y)*W,e[9]=(n*D-t*k-r*y)*W,e[10]=(_*T-b*S+g*w)*W,e[11]=(h*S-u*T-p*w)*W,e[12]=(o*A-a*N-l*y)*W,e[13]=(t*N-n*A+s*y)*W,e[14]=(b*L-_*P-m*w)*W,e[15]=(u*P-h*L+f*w)*W,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,_=r*h,b=a*u,m=a*h,g=o*h,w=l*c,L=l*u,S=l*h,P=n.x,T=n.y,I=n.z;return s[0]=(1-(b+g))*P,s[1]=(p+S)*P,s[2]=(_-L)*P,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(f+g))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(_+L)*I,s[9]=(m-w)*I,s[10]=(1-(f+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=rr.set(s[0],s[1],s[2]).length();const o=rr.set(s[4],s[5],s[6]).length(),l=rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ni.copy(this);const c=1/a,u=1/o,h=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Si,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let _,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===Si)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Sa)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Si,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===Si)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===Sa)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new G,ni=new ht,r0=new G(0,0,0),a0=new G(1,1,1),as=new G,Ya=new G,Un=new G,au=new ht,ou=new li;class $i{constructor(e=0,t=0,n=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const lu=new G,ar=new li,Di=new ht,Ka=new G,ta=new G,l0=new G,c0=new li,cu=new G(1,0,0),du=new G(0,1,0),hu=new G(0,0,1),uu={type:"added"},d0={type:"removed"},or={type:"childadded",child:null},Gl={type:"childremoved",child:null};class Xt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new G,t=new $i,n=new li,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new lt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ta,Ka,this.up):Di.lookAt(Ka,ta,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Di),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),or.child=e,this.dispatchEvent(or),or.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new G(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),g=this._getHandJoint(c,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Wd(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=Sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return pt.workingToColorSpace(yn.copy(this),e),Math.round(mt(yn.r*255,0,255))*65536+Math.round(mt(yn.g*255,0,255))*256+Math.round(mt(yn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(yn.copy(this),t);const n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=$t){pt.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,s=yn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Za);const n=xa(os.h,Za.h,t),s=xa(os.s,Za.s,t),r=xa(os.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Qe;Qe.NAMES=Sp;class u0 extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ii=new G,Ui=new G,Xl=new G,ki=new G,lr=new G,cr=new G,fu=new G,ql=new G,$l=new G,Yl=new G,Kl=new Ft,Zl=new Ft,Jl=new Ft;class ai{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Ui.subVectors(n,t),Xl.subVectors(e,t);const a=ii.dot(ii),o=ii.dot(Ui),l=ii.dot(Xl),c=Ui.dot(Ui),u=Ui.dot(Xl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Kl.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),Kl.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,n),Jl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kl,r.x),a.addScaledVector(Zl,r.y),a.addScaledVector(Jl,r.z),a}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Ui.subVectors(e,t),ii.cross(Ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ai.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;lr.subVectors(s,n),cr.subVectors(r,n),ql.subVectors(e,n);const l=lr.dot(ql),c=cr.dot(ql);if(l<=0&&c<=0)return t.copy(n);$l.subVectors(e,s);const u=lr.dot($l),h=cr.dot($l);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(lr,a);Yl.subVectors(e,r);const p=lr.dot(Yl),_=cr.dot(Yl);if(_>=0&&p<=_)return t.copy(r);const b=p*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(cr,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return fu.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(fu,o);const g=1/(m+b+f);return a=b*g,o=f*g,t.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ci{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Qa.subVectors(this.max,na),dr.subVectors(e.a,na),hr.subVectors(e.b,na),ur.subVectors(e.c,na),ls.subVectors(hr,dr),cs.subVectors(ur,hr),Ps.subVectors(dr,ur);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ps.z,Ps.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ps.z,0,-Ps.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ps.y,Ps.x,0];return!Ql(t,dr,hr,ur,Qa)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,dr,hr,ur,Qa))?!1:(eo.crossVectors(ls,cs),t=[eo.x,eo.y,eo.z],Ql(t,dr,hr,ur,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new G,new G,new G,new G,new G,new G,new G,new G],si=new G,Ja=new Ci,dr=new G,hr=new G,ur=new G,ls=new G,cs=new G,Ps=new G,na=new G,Qa=new G,eo=new G,Ls=new G;function Ql(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ls.fromArray(i,r);const o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const en=new G,to=new tt;let f0=0;class Cn extends vs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yd,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ep extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tp extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const p0=new Ci,ia=new G,ec=new G;class Pi{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):p0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ec)),this.expandByPoint(ia.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let m0=0;const jn=new ht,tc=new Xt,fr=new G,kn=new Ci,sa=new Ci,ln=new G;class Dn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nx(e)?Tp:Ep)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(kn.min,sa.min),kn.expandByPoint(ln),ln.addVectors(kn.max,sa.max),kn.expandByPoint(ln)):(kn.expandByPoint(sa.min),kn.expandByPoint(sa.max))}kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ln.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),ln.add(fr)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new G,l[y]=new G;const c=new G,u=new G,h=new G,f=new tt,p=new tt,_=new tt,b=new G,m=new G;function g(y,A,D){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,D),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),o[y].add(b),o[A].add(b),o[D].add(b),l[y].add(m),l[A].add(m),l[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let y=0,A=w.length;y<A;++y){const D=w[y],N=D.start,k=D.count;for(let z=N,q=N+k;z<q;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const L=new G,S=new G,P=new G,T=new G;function I(y){P.fromBufferAttribute(s,y),T.copy(P);const A=o[y];L.copy(A),L.sub(P.multiplyScalar(P.dot(A))).normalize(),S.crossVectors(T,A);const N=S.dot(l[y])<0?-1:1;a.setXYZW(y,L.x,L.y,L.z,N)}for(let y=0,A=w.length;y<A;++y){const D=w[y],N=D.start,k=D.count;for(let z=N,q=N+k;z<q;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let g=0;g<u;g++)f[_++]=c[p++]}return new Cn(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class g0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yd,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new G;class $d{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $d(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let x0=0;class Bn extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Rr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Uc,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new G,nc=new G,no=new G,ds=new G,ic=new G,io=new G,sc=new G;class Ca{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nc.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(nc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=ds.dot(this.direction),l=-ds.dot(no),c=ds.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const b=1/u;h*=b,f*=b,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nc).addScaledVector(no,f),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){ic.subVectors(t,e),io.subVectors(n,e),sc.crossVectors(ic,io);let a=this.direction.dot(sc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ds.subVectors(this.origin,e);const l=o*this.direction.dot(io.crossVectors(ds,io));if(l<0)return null;const c=o*this.direction.dot(ic.cross(ds));if(c<0||l+c>a)return null;const u=-o*ds.dot(sc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bs extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pu=new ht,Ns=new Ca,so=new Pi,mu=new G,ro=new G,ao=new G,oo=new G,rc=new G,lo=new G,gu=new G,co=new G;class cn extends Xt{constructor(e=new Dn,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(rc.fromBufferAttribute(h,e),a?lo.addScaledVector(rc,u):lo.addScaledVector(rc.sub(t),u))}t.add(lo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(so.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(so,mu)===null||Ns.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(pu),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const m=f[_],g=a[m.materialIndex],w=Math.max(m.start,p.start),L=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,P=L;S<P;S+=3){const T=o.getX(S),I=o.getX(S+1),y=o.getX(S+2);s=ho(this,g,e,n,c,u,h,T,I,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=_,g=b;m<g;m+=3){const w=o.getX(m),L=o.getX(m+1),S=o.getX(m+2);s=ho(this,a,e,n,c,u,h,w,L,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const m=f[_],g=a[m.materialIndex],w=Math.max(m.start,p.start),L=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,P=L;S<P;S+=3){const T=S,I=S+1,y=S+2;s=ho(this,g,e,n,c,u,h,T,I,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=_,g=b;m<g;m+=3){const w=m,L=m+1,S=m+2;s=ho(this,a,e,n,c,u,h,w,L,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function _0(i,e,t,n,s,r,a,o){let l;if(e.side===In?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;co.copy(o),co.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ro),i.getVertexPosition(l,ao),i.getVertexPosition(c,oo);const u=_0(i,e,t,n,ro,ao,oo,gu);if(u){const h=new G;ai.getBarycoord(gu,ro,ao,oo,h),s&&(u.uv=ai.getInterpolatedAttribute(s,o,l,c,h,new tt)),r&&(u.uv1=ai.getInterpolatedAttribute(r,o,l,c,h,new tt)),a&&(u.normal=ai.getInterpolatedAttribute(a,o,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};ai.getNormal(ro,ao,oo,f.normal),u.face=f,u.barycoord=h}return u}const ra=new Ft,xu=new Ft,_u=new Ft,v0=new Ft,vu=new ht,uo=new G,ac=new Pi,yu=new ht,oc=new Ca;class y0 extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$h,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ac.copy(this.boundingSphere),ac.applyMatrix4(s),e.ray.intersectsSphere(ac)!==!1&&(yu.copy(s).invert(),oc.copy(e.ray).applyMatrix4(yu),!(this.boundingBox!==null&&oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mx?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;xu.fromBufferAttribute(s.attributes.skinIndex,e),_u.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ra.copy(t),t.set(0,0,0,0)):(ra.set(...t,1),t.set(0,0,0)),ra.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=_u.getComponent(r);if(a!==0){const o=xu.getComponent(r);vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(v0.copy(ra).applyMatrix4(vu),a)}}return t.isVector4&&(t.w=ra.w),t.applyMatrix4(this.bindMatrixInverse)}}class wp extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yd extends rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,u=nn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=new ht,M0=new ht;class Kd{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:M0;Mu.multiplyMatrices(o,t[r]),Mu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yd(t,e,e,Kn,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(qe("Skeleton: No bone found with UUID:",r),a=new wp),this.bones.push(a),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Md extends Cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new ht,bu=new ht,fo=[],Su=new Ci,b0=new ht,aa=new cn,oa=new Pi;class S0 extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Md(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,b0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Su.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),oa.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),bu.multiplyMatrices(n,pr),aa.matrixWorld=bu,aa.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){const l=fo[a];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Md(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yd(new Float32Array(s*this.count),s,this.count,Bd,Yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lc=new G,E0=new G,T0=new lt;class gs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=lc.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||T0.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Pi,w0=new tt(.5,.5),po=new G;class Zd{constructor(e=new gs,t=new gs,n=new gs,s=new gs,r=new gs,a=new gs){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],b=r[9],m=r[10],g=r[11],w=r[12],L=r[13],S=r[14],P=r[15];if(s[0].setComponents(c-a,p-u,g-_,P-w).normalize(),s[1].setComponents(c+a,p+u,g+_,P+w).normalize(),s[2].setComponents(c+o,p+h,g+b,P+L).normalize(),s[3].setComponents(c-o,p-h,g-b,P-L).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,p-f,g-m,P-S).normalize();else if(s[4].setComponents(c-l,p-f,g-m,P-S).normalize(),t===Si)s[5].setComponents(c+l,p+f,g+m,P+S).normalize();else if(t===Sa)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=w0.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _a extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jo=new G,Qo=new G,Eu=new ht,la=new Ca,mo=new Pi,cc=new G,Tu=new G;class Jd extends Xt{constructor(e=new Dn,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jo.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jo.distanceTo(Qo);e.setAttribute("lineDistance",new pn(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Eu.copy(s).invert(),la.copy(e.ray).applyMatrix4(Eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let b=p,m=_-1;b<m;b+=c){const g=u.getX(b),w=u.getX(b+1),L=go(this,e,la,l,g,w,b);L&&t.push(L)}if(this.isLineLoop){const b=u.getX(_-1),m=u.getX(p),g=go(this,e,la,l,b,m,_-1);g&&t.push(g)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let b=p,m=_-1;b<m;b+=c){const g=go(this,e,la,l,b,b+1,b);g&&t.push(g)}if(this.isLineLoop){const b=go(this,e,la,l,_-1,p,_-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function go(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Jo.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),t.distanceSqToSegment(Jo,Qo,cc,Tu)>n)return;cc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cc);if(!(c<e.near||c>e.far))return{distance:c,point:Tu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const wu=new G,Au=new G;class bd extends Jd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wu.fromBufferAttribute(t,s),Au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Au);e.setAttribute("lineDistance",new pn(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A0 extends Jd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tr extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ru=new ht,Sd=new Ca,xo=new Pi,_o=new G;class Vo extends Xt{constructor(e=new Dn,t=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Ru.copy(s).invert(),Sd.copy(e.ray).applyMatrix4(Ru);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,b=p;_<b;_++){const m=c.getX(_);_o.fromBufferAttribute(h,m),Cu(_o,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,b=p;_<b;_++)_o.fromBufferAttribute(h,_),Cu(_o,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cu(i,e,t,n,s,r,a){const o=Sd.distanceSqToPoint(i);if(o<t){const l=new G;Sd.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ap extends rn{constructor(e=[],t=Hs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fr extends rn{constructor(e,t,n=Ai,s,r,a,o=nn,l=nn,c,u=qi,h=1){if(u!==qi&&u!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class R0 extends Fr{constructor(e,t=Ai,n=Hs,s,r,a=nn,o=nn,l,c=qi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rp extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pa extends Dn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function _(b,m,g,w,L,S,P,T,I,y,A){const D=S/I,N=P/y,k=S/2,z=P/2,q=T/2,W=I+1,ee=y+1;let K=0,ce=0;const ue=new G;for(let ye=0;ye<ee;ye++){const se=ye*N-z;for(let be=0;be<W;be++){const we=be*D-k;ue[b]=we*w,ue[m]=se*L,ue[g]=q,c.push(ue.x,ue.y,ue.z),ue[b]=0,ue[m]=0,ue[g]=T>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(be/I),h.push(1-ye/y),K+=1}}for(let ye=0;ye<y;ye++)for(let se=0;se<I;se++){const be=f+se+W*ye,we=f+se+W*(ye+1),Ke=f+(se+1)+W*(ye+1),Be=f+(se+1)+W*ye;l.push(be,we,Be),l.push(we,Ke,Be),ce+=6}o.addGroup(p,ce,A),p+=ce,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class al extends Dn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],_=[],b=[],m=[];for(let g=0;g<u;g++){const w=g*f-a;for(let L=0;L<c;L++){const S=L*h-r;_.push(S,-w,0),b.push(0,0,1),m.push(L/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<o;w++){const L=w+c*g,S=w+c*(g+1),P=w+1+c*(g+1),T=w+1+c*g;p.push(L,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(b,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}function Or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Pu(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=Or(i[t]);for(const s in n)e[s]=n[s]}return e}function Pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function C0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const P0={clone:Or,merge:En};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class I0 extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ol extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends ol{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pp extends Bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Dd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class D0 extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U0 extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function vo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function k0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function F0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class zr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class O0 extends zr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zh:r=e,o=2*t-n;break;case Jh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:a=e,l=2*n-t;break;case Jh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),b=_*_,m=b*_,g=-f*m+2*f*b-f*_,w=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*_+1,L=(-1-p)*m+(1.5+p)*b+.5*_,S=p*m-p*b;for(let P=0;P!==o;++P)r[P]=g*a[u+P]+w*a[c+P]+L*a[l+P]+S*a[h+P];return r}}class B0 extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class z0 extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class H0 extends zr{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const _=(n-t)/(s-t),b=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*_;return r}const f=o*2,p=e-1;for(let _=0;_!==o;++_){const b=a[c+_],m=a[l+_],g=p*f+_*2,w=h[g],L=h[g+1],S=e*f+_*2,P=u[S],T=u[S+1];let I=(n-t)/(s-t),y,A,D,N,k;for(let z=0;z<8;z++){y=I*I,A=y*I,D=1-I,N=D*D,k=N*D;const W=k*t+3*N*I*w+3*D*y*P+A*s-n;if(Math.abs(W)<1e-10)break;const ee=3*N*(w-t)+6*D*I*(P-w)+3*y*(s-P);if(Math.abs(ee)<1e-10)break;I=I-W/ee,I=Math.max(0,Math.min(1,I))}r[_]=k*b+3*N*I*L+3*D*y*T+A*m}return r}}class di{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new B0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new O0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new H0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break;case Yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){it("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ix(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){it("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ol,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){const b=t[h+_];if(b!==t[f+_]||b!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ba;class Hr extends di{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Ma;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lp extends di{constructor(e,t,n,s){super(e,t,n,s)}}Lp.prototype.ValueTypeName="color";class Ta extends di{constructor(e,t,n,s){super(e,t,n,s)}}Ta.prototype.ValueTypeName="number";class V0 extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)li.slerpFlat(r,0,a,c-o,a,c,l);return r}}class wa extends di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new V0(this.times,this.values,this.getValueSize(),e)}}wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends di{constructor(e,t,n){super(e,t,n)}}Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Ma;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class el extends di{constructor(e,t,n,s){super(e,t,n,s)}}el.prototype.ValueTypeName="vector";class G0{constructor(e="",t=-1,n=[],s=bx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(W0(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(di.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=k0(l);l=Lu(l,1,u),c=Lu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ta(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function j0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ta;case"vector":case"vector2":case"vector3":case"vector4":return el;case"color":return Lp;case"quaternion":return wa;case"bool":case"boolean":return Hr;case"string":return Vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function W0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=j0(i.type);if(i.times===void 0){const t=[],n=[];F0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Nu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Nu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Np{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ip=new Np;class ys{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class X0 extends Error{constructor(e,t){super(e),this.response=t}}class ll extends ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let b=0;const m=new ReadableStream({start(g){w();function w(){h.read().then(({done:L,value:S})=>{if(L)g.close();else{b+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:b,total:p});for(let T=0,I=u.length;T<I;T++){const y=u[T];y.onProgress&&y.onProgress(P)}g.enqueue(S),w()}},L=>{g.error(L)})}}});return new Response(m)}else throw new X0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Vi.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mr=new WeakMap;class q0 extends ys{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=mr.get(a);h===void 0&&(h=[],mr.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Ea("img");function l(){u(),t&&t(this);const h=mr.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}mr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Vi.remove(`image:${e}`);const f=mr.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(h)}mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Dp extends ys{constructor(e){super(e)}load(e,t,n,s){const r=new rn,a=new q0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class cl extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $0 extends cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const dc=new ht,Iu=new G,Du=new G;class Qd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Sa||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yo=new G,Mo=new li,mi=new G;class Up extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,Mo,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,Mo,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hs=new G,Uu=new tt,ku=new tt;class An extends Up{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,ku),t.subVectors(ku,Uu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Y0 extends Qd{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class K0 extends cl{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Y0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Z0 extends Qd{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class J0 extends cl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Z0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dl extends Up{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q0 extends Qd{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Go extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Q0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const hc=new WeakMap;class e_ extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{hc.has(a)===!0?(s&&s(hc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),hc.set(l,c),Vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const gr=-90,xr=1;class t_ extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(gr,xr,e,t);s.layers=this.layers,this.add(s);const r=new An(gr,xr,e,t);r.layers=this.layers,this.add(r);const a=new An(gr,xr,e,t);a.layers=this.layers,this.add(a);const o=new An(gr,xr,e,t);o.layers=this.layers,this.add(o);const l=new An(gr,xr,e,t);l.layers=this.layers,this.add(l);const c=new An(gr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class n_ extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const eh="\\[\\]\\.:\\/",i_=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",s_="[^"+eh.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",th),a_=/(WCOD+)?/.source.replace("WCOD",s_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),c_=new RegExp("^"+r_+a_+o_+l_+"$"),d_=["material","materials","bones","map"];class h_{constructor(e,t,n){const s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){const t=c_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;it("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=h_;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kp{static{kp.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}class u_ extends vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ou(i,e,t,n){const s=f_(n);switch(t){case xp:return i*e;case Bd:return i*e/s.components*s.byteLength;case zd:return i*e/s.components*s.byteLength;case Gs:return i*e*2/s.components*s.byteLength;case Hd:return i*e*2/s.components*s.byteLength;case _p:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case Vd:return i*e*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case Xc:return Math.max(i,16)*Math.max(e,8)/4;case Gc:case Wc:return Math.max(i,8)*Math.max(e,8)/2;case qc:case $c:case Kc:case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yc:case qo:case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fd:case pd:case md:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gd:case xd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $o:case _d:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f_(i){switch(i){case On:case fp:return{byteLength:1,components:1};case va:case pp:case Xi:return{byteLength:2,components:1};case Fd:case Od:return{byteLength:2,components:4};case Ai:case kd:case Yn:return{byteLength:4,components:1};case mp:case gp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function Fp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function p_(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],b=h[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,h[f]=b)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const b=h[p];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,by=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:x_,alphamap_pars_fragment:__,alphatest_fragment:v_,alphatest_pars_fragment:y_,aomap_fragment:M_,aomap_pars_fragment:b_,batching_pars_vertex:S_,batching_vertex:E_,begin_vertex:T_,beginnormal_vertex:w_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:I_,color_fragment:D_,color_pars_fragment:U_,color_pars_vertex:k_,color_vertex:F_,common:O_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:H_,displacementmap_vertex:V_,emissivemap_fragment:G_,emissivemap_pars_fragment:j_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:q_,envmap_common_pars_fragment:$_,envmap_pars_fragment:Y_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:ov,envmap_vertex:Z_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:rv,lights_pars_begin:av,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:dv,lights_phong_pars_fragment:hv,lights_physical_fragment:uv,lights_physical_pars_fragment:fv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:xv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:Mv,map_fragment:bv,map_pars_fragment:Sv,map_particle_fragment:Ev,map_particle_pars_fragment:Tv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Nv,normal_fragment_begin:Iv,normal_fragment_maps:Dv,normal_pars_fragment:Uv,normal_pars_vertex:kv,normal_vertex:Fv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Bv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Vv,opaque_fragment:Gv,packing:jv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:$v,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Jv,shadowmap_vertex:Qv,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:ay,tonemapping_fragment:oy,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:dy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:xy,backgroundCube_frag:_y,cube_vert:vy,cube_frag:yy,depth_vert:My,depth_frag:by,distance_vert:Sy,distance_frag:Ey,equirect_vert:Ty,equirect_frag:wy,linedashed_vert:Ay,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Py,meshlambert_vert:Ly,meshlambert_frag:Ny,meshmatcap_vert:Iy,meshmatcap_frag:Dy,meshnormal_vert:Uy,meshnormal_frag:ky,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:Hy,meshtoon_frag:Vy,points_vert:Gy,points_frag:jy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:$y},Ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},_i={basic:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:En([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:En([Ne.lights,Ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};_i.physical={uniforms:En([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const bo={r:0,b:0,g:0},Yy=new ht,Op=new lt;Op.set(-1,0,0,0,1,0,0,0,1);function Ky(i,e,t,n,s,r){const a=new Qe(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function p(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const S=w.backgroundBlurriness>0;L=e.get(L,S)}return L}function _(w){let L=!1;const S=p(w);S===null?m(a,o):S&&S.isColor&&(m(S,1),L=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,L){const S=p(L);S&&(S.isCubeTexture||S.mapping===rl)?(c===void 0&&(c=new cn(new Pa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Or(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(L.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Op),c.material.toneMapped=pt.getTransfer(S.colorSpace)!==Nt,(u!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new cn(new al(2,2),new Ri({name:"BackgroundMaterial",uniforms:Or(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=pt.getTransfer(S.colorSpace)!==Nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,L){w.getRGB(bo,Cp(i)),t.buffers.color.setClear(bo.r,bo.g,bo.b,L,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,L=1){a.set(w),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:b,dispose:g}}function Zy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(N,k,z,q,W){let ee=!1;const K=h(N,q,z,k);r!==K&&(r=K,c(r.object)),ee=p(N,q,z,W),ee&&_(N,q,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,S(N,k,z,q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function h(N,k,z,q){const W=q.wireframe===!0;let ee=n[k.id];ee===void 0&&(ee={},n[k.id]=ee);const K=N.isInstancedMesh===!0?N.id:0;let ce=ee[K];ce===void 0&&(ce={},ee[K]=ce);let ue=ce[z.id];ue===void 0&&(ue={},ce[z.id]=ue);let ye=ue[W];return ye===void 0&&(ye=f(l()),ue[W]=ye),ye}function f(N){const k=[],z=[],q=[];for(let W=0;W<t;W++)k[W]=0,z[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:q,object:N,attributes:{},index:null}}function p(N,k,z,q){const W=r.attributes,ee=k.attributes;let K=0;const ce=z.getAttributes();for(const ue in ce)if(ce[ue].location>=0){const se=W[ue];let be=ee[ue];if(be===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),se===void 0||se.attribute!==be||be&&se.data!==be.data)return!0;K++}return r.attributesNum!==K||r.index!==q}function _(N,k,z,q){const W={},ee=k.attributes;let K=0;const ce=z.getAttributes();for(const ue in ce)if(ce[ue].location>=0){let se=ee[ue];se===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));const be={};be.attribute=se,se&&se.data&&(be.data=se.data),W[ue]=be,K++}r.attributes=W,r.attributesNum=K,r.index=q}function b(){const N=r.newAttributes;for(let k=0,z=N.length;k<z;k++)N[k]=0}function m(N){g(N,0)}function g(N,k){const z=r.newAttributes,q=r.enabledAttributes,W=r.attributeDivisors;z[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),W[N]!==k&&(i.vertexAttribDivisor(N,k),W[N]=k)}function w(){const N=r.newAttributes,k=r.enabledAttributes;for(let z=0,q=k.length;z<q;z++)k[z]!==N[z]&&(i.disableVertexAttribArray(z),k[z]=0)}function L(N,k,z,q,W,ee,K){K===!0?i.vertexAttribIPointer(N,k,z,W,ee):i.vertexAttribPointer(N,k,z,q,W,ee)}function S(N,k,z,q){b();const W=q.attributes,ee=z.getAttributes(),K=k.defaultAttributeValues;for(const ce in ee){const ue=ee[ce];if(ue.location>=0){let ye=W[ce];if(ye===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ye!==void 0){const se=ye.normalized,be=ye.itemSize,we=e.get(ye);if(we===void 0)continue;const Ke=we.buffer,Be=we.type,$=we.bytesPerElement,pe=Be===i.INT||Be===i.UNSIGNED_INT||ye.gpuType===kd;if(ye.isInterleavedBufferAttribute){const le=ye.data,ze=le.stride,fe=ye.offset;if(le.isInstancedInterleavedBuffer){for(let je=0;je<ue.locationSize;je++)g(ue.location+je,le.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let je=0;je<ue.locationSize;je++)m(ue.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let je=0;je<ue.locationSize;je++)L(ue.location+je,be/ue.locationSize,Be,se,ze*$,(fe+be/ue.locationSize*je)*$,pe)}else{if(ye.isInstancedBufferAttribute){for(let le=0;le<ue.locationSize;le++)g(ue.location+le,ye.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let le=0;le<ue.locationSize;le++)m(ue.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let le=0;le<ue.locationSize;le++)L(ue.location+le,be/ue.locationSize,Be,se,be*$,be/ue.locationSize*le*$,pe)}}else if(K!==void 0){const se=K[ce];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(ue.location,se);break;case 3:i.vertexAttrib3fv(ue.location,se);break;case 4:i.vertexAttrib4fv(ue.location,se);break;default:i.vertexAttrib1fv(ue.location,se)}}}}w()}function P(){A();for(const N in n){const k=n[N];for(const z in k){const q=k[z];for(const W in q){const ee=q[W];for(const K in ee)u(ee[K].object),delete ee[K];delete q[W]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const k=n[N.id];for(const z in k){const q=k[z];for(const W in q){const ee=q[W];for(const K in ee)u(ee[K].object),delete ee[K];delete q[W]}}delete n[N.id]}function I(N){for(const k in n){const z=n[k];for(const q in z){const W=z[q];if(W[N.id]===void 0)continue;const ee=W[N.id];for(const K in ee)u(ee[K].object),delete ee[K];delete W[N.id]}}}function y(N){for(const k in n){const z=n[k],q=N.isInstancedMesh===!0?N.id:0,W=z[q];if(W!==void 0){for(const ee in W){const K=W[ee];for(const ce in K)u(K[ce].object),delete K[ce];delete W[ee]}delete z[q],Object.keys(z).length===0&&delete n[k]}}}function A(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:m,disableUnusedAttributes:w}}function Jy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Kn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const y=I===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==On&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Yn&&!y)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:S,maxSamples:P,samples:T}}function eM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new gs,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,L=w*4;let S=g.clippingState||null;l.value=S,S=u(_,f,L,p);for(let P=0;P!==L;++P)S[P]=t[P];g.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,_!==!0||m===null){const g=p+b*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<g)&&(m=new Float32Array(g));for(let L=0,S=p;L!==b;++L,S+=4)a.copy(h[L]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const _s=4,Bu=[.125,.215,.35,.446,.526,.582],ks=20,tM=256,ca=new dl,zu=new Qe;let uc=null,fc=0,pc=0,mc=!1;const nM=new G;class Hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=nM}=r;uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,fc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Xi,format:Kn,colorSpace:zn,depthBuffer:!1},s=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iM(r)),this._blurMaterial=rM(r,e,t),this._ggxMaterial=sM(r,e,t)}return s}_compileMaterial(e){const t=new cn(new Dn,e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,s,r){const l=new An(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(zu),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Pa,new Bs({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let g=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,g=!0):(m.color.copy(zu),g=!0);for(let L=0;L<6;L++){const S=L%3;S===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[L],r.y,r.z)):S===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[L]));const P=this._cubeSize;_r(s,S*P,L>2?P:0,P,P),h.setRenderTarget(s),g&&h.render(b,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hs||e.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:_}=this,b=this._sizeLods[n],m=3*b*(n>_-_s?n-_+_s:0),g=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,_r(r,m,g,3*b,2*b),s.setRenderTarget(r),s.render(o,ca),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,_r(e,m,g,3*b,2*b),s.setRenderTarget(e),s.render(o,ca)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ks-1),b=r/_,m=isFinite(r)?1+Math.floor(u*b):ks;m>ks&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const g=[];let w=0;for(let I=0;I<ks;++I){const y=I/b,A=Math.exp(-y*y/2);g.push(A),I===0?w+=A:I<m&&(w+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:L}=this;f.dTheta.value=_,f.mipInt.value=L-n;const S=this._sizeLods[s],P=3*S*(s>L-_s?s-L+_s:0),T=4*(this._cubeSize-S);_r(t,P,T,3*S,2*S),l.setRenderTarget(t),l.render(h,ca)}}function iM(i){const e=[],t=[],n=[];let s=i;const r=i-_s+1+Bu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-_s?l=Bu[a-i+_s-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,b=3,m=2,g=1,w=new Float32Array(b*_*p),L=new Float32Array(m*_*p),S=new Float32Array(g*_*p);for(let T=0;T<p;T++){const I=T%3*2/3-1,y=T>2?0:-1,A=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];w.set(A,b*_*T),L.set(f,m*_*T);const D=[T,T,T,T,T,T];S.set(D,g*_*T)}const P=new Dn;P.setAttribute("position",new Cn(w,b)),P.setAttribute("uv",new Cn(L,m)),P.setAttribute("faceIndex",new Cn(S,g)),n.push(new cn(P,null)),s>_s&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Vu(i,e,t){const n=new Ti(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sM(i,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rM(i,e,t){const n=new Float32Array(ks),s=new G(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Gu(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ju(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bp extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ap(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pa(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:ji});r.uniforms.tEquirect.value=t;const a=new cn(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=sn),new t_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function aM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===kl||p===Fl)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const b=new Bp(_.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===kl||p===Fl,b=p===Hs||p===Ur;if(_||b){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Hu(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const w=f.image;return _&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new Hu(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===kl?f.mapping=Hs:p===Fl&&(f.mapping=Ur),f}function l(f){let p=0;const _=6;for(let b=0;b<_;b++)f[b]!==void 0&&p++;return p===_}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function oM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function lM(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let b=0;if(_===void 0)return;if(p!==null){const w=p.array;b=p.version;for(let L=0,S=w.length;L<S;L+=3){const P=w[L+0],T=w[L+1],I=w[L+2];f.push(P,T,T,I,I,P)}}else{const w=_.array;b=_.version;for(let L=0,S=w.length/3-1;L<S;L+=3){const P=L+0,T=L+1,I=L+2;f.push(P,T,T,I,I,P)}}const m=new(_.count>=65535?Tp:Ep)(f,1);m.version=b;const g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function cM(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let b=0;for(let m=0;m<p;m++)b+=f[m];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hM(i,e,t){const n=new WeakMap,s=new Ft;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let A=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let L=0;p===!0&&(L=1),_===!0&&(L=2),b===!0&&(L=3);let S=o.attributes.position.count*L,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*P*4*h),I=new Mp(T,S,P,h);I.type=Yn,I.needsUpdate=!0;const y=L*4;for(let D=0;D<h;D++){const N=m[D],k=g[D],z=w[D],q=S*P*4*D;for(let W=0;W<N.count;W++){const ee=W*y;p===!0&&(s.fromBufferAttribute(N,W),T[q+ee+0]=s.x,T[q+ee+1]=s.y,T[q+ee+2]=s.z,T[q+ee+3]=0),_===!0&&(s.fromBufferAttribute(k,W),T[q+ee+4]=s.x,T[q+ee+5]=s.y,T[q+ee+6]=s.z,T[q+ee+7]=0),b===!0&&(s.fromBufferAttribute(z,W),T[q+ee+8]=s.x,T[q+ee+9]=s.y,T[q+ee+10]=s.z,T[q+ee+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new tt(S,P)},n.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function uM(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const fM={[rp]:"LINEAR_TONE_MAPPING",[ap]:"REINHARD_TONE_MAPPING",[op]:"CINEON_TONE_MAPPING",[Ud]:"ACES_FILMIC_TONE_MAPPING",[cp]:"AGX_TONE_MAPPING",[dp]:"NEUTRAL_TONE_MAPPING",[lp]:"CUSTOM_TONE_MAPPING"};function pM(i,e,t,n,s,r){const a=new Ti(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Fr(e,t):void 0}),o=new Ti(e,t,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),l=new Dn;l.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pn([0,2,0,0,2,0],2));const c=new I0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new cn(l,c),h=new dl(-1,1,1,-1,0,1);let f=null,p=null,_=!1,b,m=null,g=[],w=!1;this.setSize=function(L,S){a.setSize(L,S),o.setSize(L,S);for(let P=0;P<g.length;P++){const T=g[P];T.setSize&&T.setSize(L,S)}},this.setEffects=function(L){g=L,w=g.length>0&&g[0].isRenderPass===!0;const S=a.width,P=a.height;for(let T=0;T<g.length;T++){const I=g[T];I.setSize&&I.setSize(S,P)}},this.begin=function(L,S){if(_||L.toneMapping===Ei&&g.length===0)return!1;if(m=S,S!==null){const P=S.width,T=S.height;(a.width!==P||a.height!==T)&&this.setSize(P,T)}return w===!1&&L.setRenderTarget(a),b=L.toneMapping,L.toneMapping=Ei,!0},this.hasRenderPass=function(){return w},this.end=function(L,S){L.toneMapping=b,_=!0;let P=a,T=o;for(let I=0;I<g.length;I++){const y=g[I];if(y.enabled!==!1&&(y.render(L,T,P,S),y.needsSwap!==!1)){const A=P;P=T,T=A}}if(f!==L.outputColorSpace||p!==L.toneMapping){f=L.outputColorSpace,p=L.toneMapping,c.defines={},pt.getTransfer(f)===Nt&&(c.defines.SRGB_TRANSFER="");const I=fM[p];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(m),L.render(u,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const zp=new rn,Ed=new Fr(1,1),Hp=new Mp,Vp=new s0,Gp=new Ap,Wu=[],Xu=[],qu=new Float32Array(16),$u=new Float32Array(9),Yu=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ul(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function xM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function vM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Yu.set(n),i.uniformMatrix2fv(this.addr,!1,Yu),on(t,n)}}function yM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),on(t,n)}}function MM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),on(t,n)}}function bM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function SM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function TM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function wM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function AM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function RM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function PM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ed.compareFunction=t.isReversedDepthBuffer()?jd:Gd,r=Ed):r=zp,t.setTexture2D(e||r,s)}function LM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vp,s)}function NM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gp,s)}function IM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hp,s)}function DM(i){switch(i){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return _M;case 35674:return vM;case 35675:return yM;case 35676:return MM;case 5124:case 35670:return bM;case 35667:case 35671:return SM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return IM}}function UM(i,e){i.uniform1fv(this.addr,e)}function kM(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function FM(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function OM(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function BM(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zM(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function HM(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function VM(i,e){i.uniform1iv(this.addr,e)}function GM(i,e){i.uniform2iv(this.addr,e)}function jM(i,e){i.uniform3iv(this.addr,e)}function WM(i,e){i.uniform4iv(this.addr,e)}function XM(i,e){i.uniform1uiv(this.addr,e)}function qM(i,e){i.uniform2uiv(this.addr,e)}function $M(i,e){i.uniform3uiv(this.addr,e)}function YM(i,e){i.uniform4uiv(this.addr,e)}function KM(i,e,t){const n=this.cache,s=e.length,r=ul(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ed:a=zp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ZM(i,e,t){const n=this.cache,s=e.length,r=ul(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vp,r[a])}function JM(i,e,t){const n=this.cache,s=e.length,r=ul(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gp,r[a])}function QM(i,e,t){const n=this.cache,s=e.length,r=ul(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hp,r[a])}function eb(i){switch(i){case 5126:return UM;case 35664:return kM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return zM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return jM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return $M;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}class tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class nb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eb(t.type)}}class ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function sb(i,e,t){const n=i.name,s=n.length;for(gc.lastIndex=0;;){const r=gc.exec(n),a=gc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ku(t,c===void 0?new tb(o,i,e):new nb(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ib(o),Ku(t,h)),t=h}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sb(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rb=37297;let ab=0;function ob(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ju=new lt;function lb(i){pt._getMatrix(Ju,pt.workingColorSpace,i);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Ko:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ob(i.getShaderSource(e),o)}else return r}function cb(i,e){const t=lb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const db={[rp]:"Linear",[ap]:"Reinhard",[op]:"Cineon",[Ud]:"ACESFilmic",[cp]:"AgX",[dp]:"Neutral",[lp]:"Custom"};function hb(i,e){const t=db[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new G;function ub(){pt.getLuminanceCoefficients(So);const i=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function pb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pa(i){return i!==""}function ef(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(i){return i.replace(gb,_b)}const xb=new Map;function _b(i,e){let t=ft[e];if(t===void 0){const n=xb.get(e);if(n!==void 0)t=ft[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Td(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(vb,yb)}function yb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Mb={[ko]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function bb(i){return Mb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sb={[Hs]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function Eb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tb={[Ur]:"ENVMAP_MODE_REFRACTION"};function wb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ab={[Dd]:"ENVMAP_BLENDING_MULTIPLY",[vx]:"ENVMAP_BLENDING_MIX",[yx]:"ENVMAP_BLENDING_ADD"};function Rb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ab[i.combine]||"ENVMAP_BLENDING_NONE"}function Cb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bb(t),c=Eb(t),u=wb(t),h=Rb(t),f=Cb(t),p=fb(t),_=pb(r),b=s.createProgram();let m,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pa).join(`
`),g.length>0&&(g+=`
`)):(m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),g=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ei?hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,cb("linearToOutputTexel",t.outputColorSpace),ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=Td(a),a=ef(a,t),a=tf(a,t),o=Td(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=w+m+a,S=w+g+o,P=Zu(s,s.VERTEX_SHADER,L),T=Zu(s,s.FRAGMENT_SHADER,S);s.attachShader(b,P),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(N){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(b)||"",z=s.getShaderInfoLog(P)||"",q=s.getShaderInfoLog(T)||"",W=k.trim(),ee=z.trim(),K=q.trim();let ce=!0,ue=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,P,T);else{const ye=Qu(s,P,"vertex"),se=Qu(s,T,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+ye+`
`+se)}else W!==""?qe("WebGLProgram: Program Info Log:",W):(ee===""||K==="")&&(ue=!1);ue&&(N.diagnostics={runnable:ce,programLog:W,vertexShader:{log:ee,prefix:m},fragmentShader:{log:K,prefix:g}})}s.deleteShader(P),s.deleteShader(T),y=new jo(s,b),A=mb(s,b)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(b,rb)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=T,this}let Lb=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ib(e),t.set(e,n)),n}}class Ib{constructor(e){this.id=Lb++,this.code=e,this.usedTimes=0}}function Db(i){return i===Gs||i===qo||i===$o}function Ub(i,e,t,n,s,r){const a=new bp,o=new Nb,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,A,D,N,k,z){const q=N.fog,W=k.geometry,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ce=e.get(y.envMap||ee,K),ue=ce&&ce.mapping===rl?ce.image.height:null,ye=p[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,be=se!==void 0?se.length:0;let we=0;W.morphAttributes.position!==void 0&&(we=1),W.morphAttributes.normal!==void 0&&(we=2),W.morphAttributes.color!==void 0&&(we=3);let Ke,Be,$,pe;if(ye){const he=_i[ye];Ke=he.vertexShader,Be=he.fragmentShader}else{Ke=y.vertexShader,Be=y.fragmentShader;const he=o.getVertexShaderStage(y),Mt=o.getFragmentShaderStage(y);o.update(y,he,Mt),$=he.id,pe=Mt.id}const le=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),fe=k.isInstancedMesh===!0,je=k.isBatchedMesh===!0,At=!!y.map,et=!!y.matcap,_t=!!ce,xt=!!y.aoMap,dt=!!y.lightMap,jt=!!y.bumpMap&&y.wireframe===!1,Rt=!!y.normalMap,Yt=!!y.displacementMap,Z=!!y.emissiveMap,re=!!y.metalnessMap,te=!!y.roughnessMap,U=y.anisotropy>0,vt=y.clearcoat>0,rt=y.dispersion>0,R=y.iridescence>0,v=y.sheen>0,H=y.transmission>0,j=U&&!!y.anisotropyMap,ne=vt&&!!y.clearcoatMap,me=vt&&!!y.clearcoatNormalMap,ge=vt&&!!y.clearcoatRoughnessMap,Q=R&&!!y.iridescenceMap,oe=R&&!!y.iridescenceThicknessMap,Se=v&&!!y.sheenColorMap,ke=v&&!!y.sheenRoughnessMap,Re=!!y.specularMap,_e=!!y.specularColorMap,He=!!y.specularIntensityMap,$e=H&&!!y.transmissionMap,Ee=H&&!!y.thicknessMap,F=!!y.gradientMap,Me=!!y.alphaMap,ae=y.alphaTest>0,xe=!!y.alphaHash,Le=!!y.extensions;let de=Ei;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(de=i.toneMapping);const Fe={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:Ke,fragmentShader:Be,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:je,batchingColor:je&&k._colorsTexture!==null,instancing:fe,instancingColor:fe&&k.instanceColor!==null,instancingMorph:fe&&k.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:et,envMap:_t,envMapMode:_t&&ce.mapping,envMapCubeUVHeight:ue,aoMap:xt,lightMap:dt,bumpMap:jt,normalMap:Rt,displacementMap:Yt,emissiveMap:Z,normalMapObjectSpace:Rt&&y.normalMapType===Tx,normalMapTangentSpace:Rt&&y.normalMapType===Yo,packedNormalMap:Rt&&y.normalMapType===Yo&&Db(y.normalMap.format),metalnessMap:re,roughnessMap:te,anisotropy:U,anisotropyMap:j,clearcoat:vt,clearcoatMap:ne,clearcoatNormalMap:me,clearcoatRoughnessMap:ge,dispersion:rt,iridescence:R,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:v,sheenColorMap:Se,sheenRoughnessMap:ke,specularMap:Re,specularColorMap:_e,specularIntensityMap:He,transmission:H,transmissionMap:$e,thicknessMap:Ee,gradientMap:F,opaque:y.transparent===!1&&y.blending===Rr&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ae,alphaHash:xe,combine:y.combine,mapUv:At&&_(y.map.channel),aoMapUv:xt&&_(y.aoMap.channel),lightMapUv:dt&&_(y.lightMap.channel),bumpMapUv:jt&&_(y.bumpMap.channel),normalMapUv:Rt&&_(y.normalMap.channel),displacementMapUv:Yt&&_(y.displacementMap.channel),emissiveMapUv:Z&&_(y.emissiveMap.channel),metalnessMapUv:re&&_(y.metalnessMap.channel),roughnessMapUv:te&&_(y.roughnessMap.channel),anisotropyMapUv:j&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(y.sheenRoughnessMap.channel),specularMapUv:Re&&_(y.specularMap.channel),specularColorMapUv:_e&&_(y.specularColorMap.channel),specularIntensityMapUv:He&&_(y.specularIntensityMap.channel),transmissionMapUv:$e&&_(y.transmissionMap.channel),thicknessMapUv:Ee&&_(y.thicknessMap.channel),alphaMapUv:Me&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Rt||U),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(At||Me),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&Rt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ze,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===Nt,decodeVideoTextureEmissive:Z&&y.emissiveMap.isVideoTexture===!0&&pt.getTransfer(y.emissiveMap.colorSpace)===Nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yi,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)A.push(D),A.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(A,y),w(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function w(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function L(y){const A=p[y.type];let D;if(A){const N=_i[A];D=P0.clone(N.uniforms)}else D=y.uniforms;return D}function S(y,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new Pb(i,A,y,s),c.push(D),u.set(A,D)),D}function P(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function I(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:L,acquireProgram:S,releaseProgram:P,releaseShaderCache:T,programs:c,dispose:I}}function kb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function af(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,b,m,g){let w=i[e];return w===void 0?(w={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:g},i[e]=w):(w.id=f.id,w.object=f,w.geometry=p,w.material=_,w.materialVariant=a(f),w.groupOrder=b,w.renderOrder=f.renderOrder,w.z=m,w.group=g),e++,w}function l(f,p,_,b,m,g){const w=o(f,p,_,b,m,g);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(f,p,_,b,m,g){const w=o(f,p,_,b,m,g);_.transmission>0?n.unshift(w):_.transparent===!0?s.unshift(w):t.unshift(w)}function u(f,p,_){t.length>1&&t.sort(f||Fb),n.length>1&&n.sort(p||rf),s.length>1&&s.sort(p||rf),_&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let f=e,p=i.length;f<p;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Ob(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new af,i.set(n,[a])):s>=r.length?(a=new af,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Qe};break;case"SpotLight":t={position:new G,direction:new G,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function zb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hb=0;function Vb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gb(i){const e=new Bb,t=zb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new ht,a=new ht;function o(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,_=0,b=0,m=0,g=0,w=0,L=0,S=0,P=0,T=0,I=0;c.sort(Vb);for(let A=0,D=c.length;A<D;A++){const N=c[A],k=N.color,z=N.intensity,q=N.distance;let W=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Gs?W=N.shadow.map.texture:W=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*z,h+=k.g*z,f+=k.b*z;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(N.sh.coefficients[ee],z);I++}else if(N.isDirectionalLight){const ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,ce=t.get(N);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize=K.mapSize,n.directionalShadow[p]=ce,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=N.shadow.matrix,w++}n.directional[p]=ee,p++}else if(N.isSpotLight){const ee=e.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(k).multiplyScalar(z),ee.distance=q,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,n.spot[b]=ee;const K=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,K.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[b]=K.matrix,N.castShadow){const ce=t.get(N);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize=K.mapSize,n.spotShadow[b]=ce,n.spotShadowMap[b]=W,S++}b++}else if(N.isRectAreaLight){const ee=e.get(N);ee.color.copy(k).multiplyScalar(z),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=ee,m++}else if(N.isPointLight){const ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){const K=N.shadow,ce=t.get(N);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize=K.mapSize,ce.shadowCameraNear=K.camera.near,ce.shadowCameraFar=K.camera.far,n.pointShadow[_]=ce,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=N.shadow.matrix,L++}n.point[_]=ee,_++}else if(N.isHemisphereLight){const ee=e.get(N);ee.skyColor.copy(N.color).multiplyScalar(z),ee.groundColor.copy(N.groundColor).multiplyScalar(z),n.hemi[g]=ee,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const y=n.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==b||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==w||y.numPointShadows!==L||y.numSpotShadows!==S||y.numSpotMaps!==P||y.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=S+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,y.directionalLength=p,y.pointLength=_,y.spotLength=b,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=w,y.numPointShadows=L,y.numSpotShadows=S,y.numSpotMaps=P,y.numLightProbes=I,n.version=Hb++)}function l(c,u){let h=0,f=0,p=0,_=0,b=0;const m=u.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){const L=c[g];if(L.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(L.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(L.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(L.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(L.width*.5,0,0),S.halfHeight.set(0,L.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(L.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(m),f++}else if(L.isHemisphereLight){const S=n.hemi[b];S.direction.setFromMatrixPosition(L.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function of(i){const e=new Gb(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jb(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new of(i),e.set(s,[o])):r>=a.length?(o=new of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],$b=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],lf=new ht,da=new G,xc=new G;function Yb(i,e,t){let n=new Zd;const s=new tt,r=new tt,a=new Ft,o=new D0,l=new U0,c={},u=t.maxTextureSize,h={[wi]:In,[In]:wi,[yi]:yi},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Dn;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new cn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let g=this.type;this.render=function(T,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ex&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ko);const A=i.getRenderTarget(),D=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ji),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=g!==this.type;z&&I.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(W=>W.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,W=T.length;q<W;q++){const ee=T[q],K=ee.shadow;if(K===void 0){qe("WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ce=K.getFrameExtents();s.multiply(ce),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,K.mapSize.y=r.y));const ue=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ue,K.map===null||z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ua){if(ee.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ti(s.x,s.y,{format:Gs,type:Xi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),K.map.texture.name=ee.name+".shadowMap",K.map.depthTexture=new Fr(s.x,s.y,Yn),K.map.depthTexture.name=ee.name+".shadowMapDepth",K.map.depthTexture.format=qi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=nn,K.map.depthTexture.magFilter=nn}else ee.isPointLight?(K.map=new Bp(s.x),K.map.depthTexture=new R0(s.x,Ai)):(K.map=new Ti(s.x,s.y),K.map.depthTexture=new Fr(s.x,s.y,Ai)),K.map.depthTexture.name=ee.name+".shadowMap",K.map.depthTexture.format=qi,this.type===ko?(K.map.depthTexture.compareFunction=ue?jd:Gd,K.map.depthTexture.minFilter=sn,K.map.depthTexture.magFilter=sn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=nn,K.map.depthTexture.magFilter=nn);K.camera.updateProjectionMatrix()}const ye=K.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ye;se++){if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,se),i.clear();else{se===0&&(i.setRenderTarget(K.map),i.clear());const be=K.getViewport(se);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),k.viewport(a)}if(ee.isPointLight){const be=K.camera,we=K.matrix,Ke=ee.distance||be.far;Ke!==be.far&&(be.far=Ke,be.updateProjectionMatrix()),da.setFromMatrixPosition(ee.matrixWorld),be.position.copy(da),xc.copy(be.position),xc.add(qb[se]),be.up.copy($b[se]),be.lookAt(xc),be.updateMatrixWorld(),we.makeTranslation(-da.x,-da.y,-da.z),lf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),K._frustum.setFromProjectionMatrix(lf,be.coordinateSystem,be.reversedDepth)}else K.updateMatrices(ee);n=K.getFrustum(),S(I,y,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===ua&&w(K,y),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(A,D,N)};function w(T,I){const y=e.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y,{format:Gs,type:Xi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,y,f,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,y,p,b,null)}function L(T,I,y,A){let D=null;const N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)D=N;else if(D=y.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=D.uuid,z=I.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let W=q[z];W===void 0&&(W=D.clone(),q[z]=W,I.addEventListener("dispose",P)),D=W}if(D.visible=I.visible,D.wireframe=I.wireframe,A===ua?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:h[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=i.properties.get(D);k.light=y}return D}function S(T,I,y,A,D){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===ua)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const z=e.update(T),q=T.material;if(Array.isArray(q)){const W=z.groups;for(let ee=0,K=W.length;ee<K;ee++){const ce=W[ee],ue=q[ce.materialIndex];if(ue&&ue.visible){const ye=L(T,ue,A,D);T.onBeforeShadow(i,T,I,y,z,ye,ce),i.renderBufferDirect(y,null,z,ye,T,ce),T.onAfterShadow(i,T,I,y,z,ye,ce)}}}else if(q.visible){const W=L(T,q,A,D);T.onBeforeShadow(i,T,I,y,z,W,null),i.renderBufferDirect(y,null,z,W,T,null),T.onAfterShadow(i,T,I,y,z,W,null)}}const k=T.children;for(let z=0,q=k.length;z<q;z++)S(k[z],I,y,A,D)}function P(T){T.target.removeEventListener("dispose",P);for(const y in c){const A=c[y],D=T.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function Kb(i,e){function t(){let F=!1;const Me=new Ft;let ae=null;const xe=new Ft(0,0,0,0);return{setMask:function(Le){ae!==Le&&!F&&(i.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){F=Le},setClear:function(Le,de,Fe,he,Mt){Mt===!0&&(Le*=he,de*=he,Fe*=he),Me.set(Le,de,Fe,he),xe.equals(Me)===!1&&(i.clearColor(Le,de,Fe,he),xe.copy(Me))},reset:function(){F=!1,ae=null,xe.set(-1,0,0,0)}}}function n(){let F=!1,Me=!1,ae=null,xe=null,Le=null;return{setReversed:function(de){if(Me!==de){const Fe=e.get("EXT_clip_control");de?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Me=de;const he=Le;Le=null,this.setClear(he)}},getReversed:function(){return Me},setTest:function(de){de?le(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(de){ae!==de&&!F&&(i.depthMask(de),ae=de)},setFunc:function(de){if(Me&&(de=kx[de]),xe!==de){switch(de){case kc:i.depthFunc(i.NEVER);break;case Fc:i.depthFunc(i.ALWAYS);break;case Oc:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Bc:i.depthFunc(i.EQUAL);break;case zc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case Vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=de}},setLocked:function(de){F=de},setClear:function(de){Le!==de&&(Le=de,Me&&(de=1-de),i.clearDepth(de))},reset:function(){F=!1,ae=null,xe=null,Le=null,Me=!1}}}function s(){let F=!1,Me=null,ae=null,xe=null,Le=null,de=null,Fe=null,he=null,Mt=null;return{setTest:function(St){F||(St?le(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(St){Me!==St&&!F&&(i.stencilMask(St),Me=St)},setFunc:function(St,Zt,qt){(ae!==St||xe!==Zt||Le!==qt)&&(i.stencilFunc(St,Zt,qt),ae=St,xe=Zt,Le=qt)},setOp:function(St,Zt,qt){(de!==St||Fe!==Zt||he!==qt)&&(i.stencilOp(St,Zt,qt),de=St,Fe=Zt,he=qt)},setLocked:function(St){F=St},setClear:function(St){Mt!==St&&(i.clearStencil(St),Mt=St)},reset:function(){F=!1,Me=null,ae=null,xe=null,Le=null,de=null,Fe=null,he=null,Mt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f={},p=new WeakMap,_=[],b=null,m=!1,g=null,w=null,L=null,S=null,P=null,T=null,I=null,y=new Qe(0,0,0),A=0,D=!1,N=null,k=null,z=null,q=null,W=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ce=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ue)[1]),K=ce>=1):ue.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),K=ce>=2);let ye=null,se={};const be=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ke=new Ft().fromArray(be),Be=new Ft().fromArray(we);function $(F,Me,ae,xe){const Le=new Uint8Array(4),de=i.createTexture();i.bindTexture(F,de),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ae;Fe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Me+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return de}const pe={};pe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Dr),jt(!1),Rt(jh),le(i.CULL_FACE),xt(ji);function le(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ze(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function fe(F,Me){return f[F]!==Me?(i.bindFramebuffer(F,Me),f[F]=Me,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Me),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function je(F,Me){let ae=_,xe=!1;if(F){ae=p.get(Me),ae===void 0&&(ae=[],p.set(Me,ae));const Le=F.textures;if(ae.length!==Le.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Fe=Le.length;de<Fe;de++)ae[de]=i.COLOR_ATTACHMENT0+de;ae.length=Le.length,xe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ae)}function At(F){return b!==F?(i.useProgram(F),b=F,!0):!1}const et={[Us]:i.FUNC_ADD,[nx]:i.FUNC_SUBTRACT,[ix]:i.FUNC_REVERSE_SUBTRACT};et[sx]=i.MIN,et[rx]=i.MAX;const _t={[ax]:i.ZERO,[ox]:i.ONE,[lx]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[px]:i.SRC_ALPHA_SATURATE,[ux]:i.DST_COLOR,[dx]:i.DST_ALPHA,[cx]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[fx]:i.ONE_MINUS_DST_COLOR,[hx]:i.ONE_MINUS_DST_ALPHA,[mx]:i.CONSTANT_COLOR,[gx]:i.ONE_MINUS_CONSTANT_COLOR,[xx]:i.CONSTANT_ALPHA,[_x]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(F,Me,ae,xe,Le,de,Fe,he,Mt,St){if(F===ji){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(le(i.BLEND),m=!0),F!==tx){if(F!==g||St!==D){if((w!==Us||P!==Us)&&(i.blendEquation(i.FUNC_ADD),w=Us,P=Us),St)switch(F){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xh:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qh:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}L=null,S=null,T=null,I=null,y.set(0,0,0),A=0,g=F,D=St}return}Le=Le||Me,de=de||ae,Fe=Fe||xe,(Me!==w||Le!==P)&&(i.blendEquationSeparate(et[Me],et[Le]),w=Me,P=Le),(ae!==L||xe!==S||de!==T||Fe!==I)&&(i.blendFuncSeparate(_t[ae],_t[xe],_t[de],_t[Fe]),L=ae,S=xe,T=de,I=Fe),(he.equals(y)===!1||Mt!==A)&&(i.blendColor(he.r,he.g,he.b,Mt),y.copy(he),A=Mt),g=F,D=!1}function dt(F,Me){F.side===yi?ze(i.CULL_FACE):le(i.CULL_FACE);let ae=F.side===In;Me&&(ae=!ae),jt(ae),F.blending===Rr&&F.transparent===!1?xt(ji):xt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(F){N!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),N=F)}function Rt(F){F!==Jg?(le(i.CULL_FACE),F!==k&&(F===jh?i.cullFace(i.BACK):F===Qg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),k=F}function Yt(F){F!==z&&(K&&i.lineWidth(F),z=F)}function Z(F,Me,ae){F?(le(i.POLYGON_OFFSET_FILL),(q!==Me||W!==ae)&&(q=Me,W=ae,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,ae))):ze(i.POLYGON_OFFSET_FILL)}function re(F){F?le(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function te(F){F===void 0&&(F=i.TEXTURE0+ee-1),ye!==F&&(i.activeTexture(F),ye=F)}function U(F,Me,ae){ae===void 0&&(ye===null?ae=i.TEXTURE0+ee-1:ae=ye);let xe=se[ae];xe===void 0&&(xe={type:void 0,texture:void 0},se[ae]=xe),(xe.type!==F||xe.texture!==Me)&&(ye!==ae&&(i.activeTexture(ae),ye=ae),i.bindTexture(F,Me||pe[F]),xe.type=F,xe.texture=Me)}function vt(){const F=se[ye];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function H(){try{i.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function me(){try{i.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ge(){try{i.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Q(){try{i.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function oe(){try{i.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Se(F){return h[F]!==void 0?h[F]:i.getParameter(F)}function ke(F,Me){h[F]!==Me&&(i.pixelStorei(F,Me),h[F]=Me)}function Re(F){Ke.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function _e(F){Be.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function He(F,Me){let ae=c.get(Me);ae===void 0&&(ae=new WeakMap,c.set(Me,ae));let xe=ae.get(F);xe===void 0&&(xe=i.getUniformBlockIndex(Me,F.name),ae.set(F,xe))}function $e(F,Me){const xe=c.get(Me).get(F);l.get(Me)!==xe&&(i.uniformBlockBinding(Me,xe,F.__bindingPointIndex),l.set(Me,xe))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},ye=null,se={},f={},p=new WeakMap,_=[],b=null,m=!1,g=null,w=null,L=null,S=null,P=null,T=null,I=null,y=new Qe(0,0,0),A=0,D=!1,N=null,k=null,z=null,q=null,W=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:ze,bindFramebuffer:fe,drawBuffers:je,useProgram:At,setBlending:xt,setMaterial:dt,setFlipSided:jt,setCullFace:Rt,setLineWidth:Yt,setPolygonOffset:Z,setScissorTest:re,activeTexture:te,bindTexture:U,unbindTexture:vt,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:Q,texImage3D:oe,pixelStorei:ke,getParameter:Se,updateUBOMapping:He,uniformBlockBinding:$e,texStorage2D:me,texStorage3D:ge,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:j,compressedTexSubImage3D:ne,scissor:Re,viewport:_e,reset:Ee}}function Zb(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,h=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,v){return _?new OffscreenCanvas(R,v):Ea("canvas")}function m(R,v,H){let j=1;const ne=rt(R);if((ne.width>H||ne.height>H)&&(j=H/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const me=Math.floor(j*ne.width),ge=Math.floor(j*ne.height);f===void 0&&(f=b(me,ge));const Q=v?b(me,ge):f;return Q.width=me,Q.height=ge,Q.getContext("2d").drawImage(R,0,0,me,ge),qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+me+"x"+ge+")."),Q}else return"data"in R&&qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function g(R){return R.generateMipmaps}function w(R){i.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,v,H,j,ne,me=!1){if(R!==null){if(i[R]!==void 0)return i[R];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;j&&(ge=e.get("EXT_texture_norm16"),ge||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8),H===i.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),H===i.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),v===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8),H===i.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),H===i.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),H===i.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){const oe=me?Ko:pt.getTransfer(ne);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=oe===Nt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),H===i.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function P(R,v){let H;return R?v===null||v===Ai||v===ya?H=i.DEPTH24_STENCIL8:v===Yn?H=i.DEPTH32F_STENCIL8:v===va&&(H=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ai||v===ya?H=i.DEPTH_COMPONENT24:v===Yn?H=i.DEPTH_COMPONENT32F:v===va&&(H=i.DEPTH_COMPONENT16),H}function T(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function I(R){const v=R.target;v.removeEventListener("dispose",I),A(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function y(R){const v=R.target;v.removeEventListener("dispose",y),N(v)}function A(R){const v=n.get(R);if(v.__webglInit===void 0)return;const H=R.source,j=p.get(H);if(j){const ne=j[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(R),Object.keys(j).length===0&&p.delete(H)}n.remove(R)}function D(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const H=R.source,j=p.get(H);delete j[v.__cacheKey],a.memory.textures--}function N(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ne=0;ne<v.__webglFramebuffer[j].length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[j][ne]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=R.textures;for(let j=0,ne=H.length;j<ne;j++){const me=n.get(H[j]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(R)}let k=0;function z(){k=0}function q(){return k}function W(R){k=R}function ee(){const R=k;return R>=s.maxTextures&&qe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function K(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ce(R,v){const H=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const j=R.image;if(j===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(H,R,v);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function ue(R,v){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ze(H,R,v);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ye(R,v){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ze(H,R,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function se(R,v){const H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){fe(H,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const be={[Vs]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},we={[nn]:i.NEAREST,[up]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Ke={[wx]:i.NEVER,[Lx]:i.ALWAYS,[Ax]:i.LESS,[Gd]:i.LEQUAL,[Rx]:i.EQUAL,[jd]:i.GEQUAL,[Cx]:i.GREATER,[Px]:i.NOTEQUAL};function Be(R,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Fo||v.magFilter===fa||v.magFilter===zi||v.minFilter===sn||v.minFilter===Fo||v.minFilter===fa||v.minFilter===zi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,be[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,be[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,be[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,we[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,we[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==fa&&v.minFilter!==zi||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",I));const j=v.source;let ne=p.get(j);ne===void 0&&(ne={},p.set(j,ne));const me=K(v);if(me!==R.__cacheKey){ne[me]===void 0&&(ne[me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[me].usedTimes++;const ge=ne[R.__cacheKey];ge!==void 0&&(ne[R.__cacheKey].usedTimes--,ge.usedTimes===0&&D(v)),R.__cacheKey=me,R.__webglTexture=ne[me].texture}return H}function pe(R,v,H){return Math.floor(Math.floor(R/H)/v)}function le(R,v,H,j){const me=R.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,j,v.data);else{me.sort((ke,Re)=>ke.start-Re.start);let ge=0;for(let ke=1;ke<me.length;ke++){const Re=me[ge],_e=me[ke],He=Re.start+Re.count,$e=pe(_e.start,v.width,4),Ee=pe(Re.start,v.width,4);_e.start<=He+1&&$e===Ee&&pe(_e.start+_e.count-1,v.width,4)===$e?Re.count=Math.max(Re.count,_e.start+_e.count-Re.start):(++ge,me[ge]=_e)}me.length=ge+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ke=0,Re=me.length;ke<Re;ke++){const _e=me[ke],He=Math.floor(_e.start/4),$e=Math.ceil(_e.count/4),Ee=He%v.width,F=Math.floor(He/v.width),Me=$e,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ee,F,Me,ae,H,j,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function ze(R,v,H){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);const ne=$(R,v),me=v.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+H);const ge=n.get(me);if(me.version!==ge.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ae=pt.getPrimaries(pt.workingColorSpace),xe=v.colorSpace===xs?null:pt.getPrimaries(v.colorSpace),Le=v.colorSpace===xs||ae===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=m(v.image,!1,s.maxTextureSize);oe=vt(v,oe);const Se=r.convert(v.format,v.colorSpace),ke=r.convert(v.type);let Re=S(v.internalFormat,Se,ke,v.normalized,v.colorSpace,v.isVideoTexture);Be(j,v);let _e;const He=v.mipmaps,$e=v.isVideoTexture!==!0,Ee=ge.__version===void 0||ne===!0,F=me.dataReady,Me=T(v,oe);if(v.isDepthTexture)Re=P(v.format===Os,v.type),Ee&&($e?t.texStorage2D(i.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Re,oe.width,oe.height,0,Se,ke,null));else if(v.isDataTexture)if(He.length>0){$e&&Ee&&t.texStorage2D(i.TEXTURE_2D,Me,Re,He[0].width,He[0].height);for(let ae=0,xe=He.length;ae<xe;ae++)_e=He[ae],$e?F&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,Se,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ae,Re,_e.width,_e.height,0,Se,ke,_e.data);v.generateMipmaps=!1}else $e?(Ee&&t.texStorage2D(i.TEXTURE_2D,Me,Re,oe.width,oe.height),F&&le(v,oe,Se,ke)):t.texImage2D(i.TEXTURE_2D,0,Re,oe.width,oe.height,0,Se,ke,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Re,He[0].width,He[0].height,oe.depth);for(let ae=0,xe=He.length;ae<xe;ae++)if(_e=He[ae],v.format!==Kn)if(Se!==null)if($e){if(F)if(v.layerUpdates.size>0){const Le=Ou(_e.width,_e.height,v.format,v.type);for(const de of v.layerUpdates){const Fe=_e.data.subarray(de*Le/_e.data.BYTES_PER_ELEMENT,(de+1)*Le/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,de,_e.width,_e.height,1,Se,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,oe.depth,Se,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Re,_e.width,_e.height,oe.depth,0,_e.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,oe.depth,Se,ke,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Re,_e.width,_e.height,oe.depth,0,Se,ke,_e.data)}else{$e&&Ee&&t.texStorage2D(i.TEXTURE_2D,Me,Re,He[0].width,He[0].height);for(let ae=0,xe=He.length;ae<xe;ae++)_e=He[ae],v.format!==Kn?Se!==null?$e?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Re,_e.width,_e.height,0,_e.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?F&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,Se,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ae,Re,_e.width,_e.height,0,Se,ke,_e.data)}else if(v.isDataArrayTexture)if($e){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Re,oe.width,oe.height,oe.depth),F)if(v.layerUpdates.size>0){const ae=Ou(oe.width,oe.height,v.format,v.type);for(const xe of v.layerUpdates){const Le=oe.data.subarray(xe*ae/oe.data.BYTES_PER_ELEMENT,(xe+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,oe.width,oe.height,1,Se,ke,Le)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,ke,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,Se,ke,oe.data);else if(v.isData3DTexture)$e?(Ee&&t.texStorage3D(i.TEXTURE_3D,Me,Re,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,ke,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,Se,ke,oe.data);else if(v.isFramebufferTexture){if(Ee)if($e)t.texStorage2D(i.TEXTURE_2D,Me,Re,oe.width,oe.height);else{let ae=oe.width,xe=oe.height;for(let Le=0;Le<Me;Le++)t.texImage2D(i.TEXTURE_2D,Le,Re,ae,xe,0,Se,ke,null),ae>>=1,xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),h.add(v),ae.onpaint=xe=>{const Le=xe.changedElements;for(const de of h)Le.includes(de.image)&&(de.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{const Le=i.RGBA,de=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,de,Fe,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(He.length>0){if($e&&Ee){const ae=rt(He[0]);t.texStorage2D(i.TEXTURE_2D,Me,Re,ae.width,ae.height)}for(let ae=0,xe=He.length;ae<xe;ae++)_e=He[ae],$e?F&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se,ke,_e):t.texImage2D(i.TEXTURE_2D,ae,Re,Se,ke,_e);v.generateMipmaps=!1}else if($e){if(Ee){const ae=rt(oe);t.texStorage2D(i.TEXTURE_2D,Me,Re,ae.width,ae.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ke,oe)}else t.texImage2D(i.TEXTURE_2D,0,Re,Se,ke,oe);g(v)&&w(j),ge.__version=me.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function fe(R,v,H){if(v.image.length!==6)return;const j=$(R,v),ne=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const me=n.get(ne);if(ne.version!==me.__version||j===!0){t.activeTexture(i.TEXTURE0+H);const ge=pt.getPrimaries(pt.workingColorSpace),Q=v.colorSpace===xs?null:pt.getPrimaries(v.colorSpace),oe=v.colorSpace===xs||ge===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ke=v.image[0]&&v.image[0].isDataTexture,Re=[];for(let de=0;de<6;de++)!Se&&!ke?Re[de]=m(v.image[de],!0,s.maxCubemapSize):Re[de]=ke?v.image[de].image:v.image[de],Re[de]=vt(v,Re[de]);const _e=Re[0],He=r.convert(v.format,v.colorSpace),$e=r.convert(v.type),Ee=S(v.internalFormat,He,$e,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,Me=me.__version===void 0||j===!0,ae=ne.dataReady;let xe=T(v,_e);Be(i.TEXTURE_CUBE_MAP,v);let Le;if(Se){F&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ee,_e.width,_e.height);for(let de=0;de<6;de++){Le=Re[de].mipmaps;for(let Fe=0;Fe<Le.length;Fe++){const he=Le[Fe];v.format!==Kn?He!==null?F?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,Ee,he.width,he.height,0,he.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,0,0,he.width,he.height,He,$e,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,Ee,he.width,he.height,0,He,$e,he.data)}}}else{if(Le=v.mipmaps,F&&Me){Le.length>0&&xe++;const de=rt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ee,de.width,de.height)}for(let de=0;de<6;de++)if(ke){F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Re[de].width,Re[de].height,He,$e,Re[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,Re[de].width,Re[de].height,0,He,$e,Re[de].data);for(let Fe=0;Fe<Le.length;Fe++){const Mt=Le[Fe].image[de].image;F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,0,0,Mt.width,Mt.height,He,$e,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,Ee,Mt.width,Mt.height,0,He,$e,Mt.data)}}else{F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,He,$e,Re[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,He,$e,Re[de]);for(let Fe=0;Fe<Le.length;Fe++){const he=Le[Fe];F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,0,0,He,$e,he.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,Ee,He,$e,he.image[de])}}}g(v)&&w(i.TEXTURE_CUBE_MAP),me.__version=ne.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function je(R,v,H,j,ne,me){const ge=r.convert(H.format,H.colorSpace),Q=r.convert(H.type),oe=S(H.internalFormat,ge,Q,H.normalized,H.colorSpace),Se=n.get(v),ke=n.get(H);if(ke.__renderTarget=v,!Se.__hasExternalTextures){const Re=Math.max(1,v.width>>me),_e=Math.max(1,v.height>>me);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,me,oe,Re,_e,v.depth,0,ge,Q,null):t.texImage2D(ne,me,oe,Re,_e,0,ge,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),te(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ne,ke.__webglTexture,0,re(v)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ne,ke.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(R,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const j=v.depthTexture,ne=j&&j.isDepthTexture?j.type:null,me=P(v.stencilBuffer,ne),ge=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(v),me,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(v),me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,me,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{const j=v.textures;for(let ne=0;ne<j.length;ne++){const me=j[ne],ge=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),oe=S(me.internalFormat,ge,Q,me.normalized,me.colorSpace);te(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(v),oe,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(v),oe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,oe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(R,v,H){const j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=n.get(v.depthTexture);if(ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Be(i.TEXTURE_CUBE_MAP,v.depthTexture);const Se=r.convert(v.depthTexture.format),ke=r.convert(v.depthTexture.type);let Re;v.depthTexture.format===qi?Re=i.DEPTH_COMPONENT24:v.depthTexture.format===Os&&(Re=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,v.width,v.height,0,Se,ke,null)}}else ce(v.depthTexture,0);const me=ne.__webglTexture,ge=re(v),Q=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,oe=v.depthTexture.format===Os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===qi)te(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Q,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Q,me,0);else if(v.depthTexture.format===Os)te(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Q,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(R){const v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=j}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let j=0;j<6;j++)et(v.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?et(v.__webglFramebuffer[0],R,0):et(v.__webglFramebuffer,R,0)}else if(H){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),At(v.__webglDepthbuffer[j],R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,me)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),At(v.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(R,v,H){const j=n.get(R);v!==void 0&&je(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&_t(R)}function dt(R){const v=R.texture,H=n.get(R),j=n.get(v);R.addEventListener("dispose",y);const ne=R.textures,me=R.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,a.memory.textures++),me){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let oe=0;oe<v.mipmaps.length;oe++)H.__webglFramebuffer[Q][oe]=i.createFramebuffer()}else H.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)H.__webglFramebuffer[Q]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ge)for(let Q=0,oe=ne.length;Q<oe;Q++){const Se=n.get(ne[Q]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&te(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){const oe=ne[Q];H.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const Se=r.convert(oe.format,oe.colorSpace),ke=r.convert(oe.type),Re=S(oe.internalFormat,Se,ke,oe.normalized,oe.colorSpace,R.isXRRenderTarget===!0),_e=re(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Re,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),At(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Be(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)je(H.__webglFramebuffer[Q][oe],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe);else je(H.__webglFramebuffer[Q],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(v)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let Q=0,oe=ne.length;Q<oe;Q++){const Se=ne[Q],ke=n.get(Se);let Re=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ke.__webglTexture),Be(Re,Se),je(H.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+Q,Re,0),g(Se)&&w(Re)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,j.__webglTexture),Be(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)je(H.__webglFramebuffer[oe],R,v,i.COLOR_ATTACHMENT0,Q,oe);else je(H.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,Q,0);g(v)&&w(Q),t.unbindTexture()}R.depthBuffer&&_t(R)}function jt(R){const v=R.textures;for(let H=0,j=v.length;H<j;H++){const ne=v[H];if(g(ne)){const me=L(R),ge=n.get(ne).__webglTexture;t.bindTexture(me,ge),w(me),t.unbindTexture()}}}const Rt=[],Yt=[];function Z(R){if(R.samples>0){if(te(R)===!1){const v=R.textures,H=R.width,j=R.height;let ne=i.COLOR_BUFFER_BIT;const me=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),Q=v.length>1;if(Q)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const oe=R.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const ke=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,ne,i.NEAREST),l===!0&&(Rt.length=0,Yt.length=0,Rt.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Rt.push(me),Yt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const ke=n.get(v[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function re(R){return Math.min(s.maxSamples,R.samples)}function te(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function vt(R,v){const H=R.colorSpace,j=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==zn&&H!==xs&&(pt.getTransfer(H)===Nt?(j!==Kn||ne!==On)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",H)),v}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=z,this.getTextureUnits=q,this.setTextureUnits=W,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=ye,this.setTextureCube=se,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=je,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jb(i,e){function t(n,s=xs){let r;const a=pt.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Fd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Od)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fp)return i.BYTE;if(n===pp)return i.SHORT;if(n===va)return i.UNSIGNED_SHORT;if(n===kd)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===xp)return i.ALPHA;if(n===_p)return i.RGB;if(n===Kn)return i.RGBA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Bd)return i.RED;if(n===zd)return i.RED_INTEGER;if(n===Gs)return i.RG;if(n===Hd)return i.RG_INTEGER;if(n===Vd)return i.RGBA_INTEGER;if(n===Oo||n===Bo||n===zo||n===Ho)if(a===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===jc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===$c||n===Yc||n===Kc||n===Zc||n===qo||n===Jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===$c)return a===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qo)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qc||n===ed||n===td||n===nd||n===id||n===sd||n===rd||n===ad||n===od||n===ld||n===cd||n===dd||n===hd||n===ud)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ed)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===td)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nd)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===id)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sd)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rd)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ad)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===od)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ld)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cd)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dd)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hd)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ud)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fd||n===pd||n===md)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fd)return a===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===md)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gd||n===xd||n===$o||n===_d)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gd)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_d)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ya?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:Qb,fragmentShader:eS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new al(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nS extends vs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const b=typeof XRWebGLBinding<"u",m=new tS,g={},w=t.getContextAttributes();let L=null,S=null;const P=[],T=[],I=new tt;let y=null;const A=new An;A.viewport=new Ft;const D=new An;D.viewport=new Ft;const N=[A,D],k=new n_;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pe=P[$];return pe===void 0&&(pe=new jl,P[$]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function($){let pe=P[$];return pe===void 0&&(pe=new jl,P[$]=pe),pe.getGripSpace()},this.getHand=function($){let pe=P[$];return pe===void 0&&(pe=new jl,P[$]=pe),pe.getHandSpace()};function W($){const pe=T.indexOf($.inputSource);if(pe===-1)return;const le=P[pe];le!==void 0&&(le.update($.inputSource,$.frame,c||a),le.dispatchEvent({type:$.type,data:$.inputSource}))}function ee(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",K);for(let $=0;$<P.length;$++){const pe=T[$];pe!==null&&(T[$]=null,P[$].disconnect(pe))}z=null,q=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(L),p=null,f=null,h=null,s=null,S=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ze=null,fe=null;w.depth&&(fe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=w.stencil?Os:qi,ze=w.stencil?ya:Ai);const je={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ti(f.textureWidth,f.textureHeight,{format:Kn,type:On,depthTexture:new Fr(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let pe=0;pe<$.removed.length;pe++){const le=$.removed[pe],ze=T.indexOf(le);ze>=0&&(T[ze]=null,P[ze].disconnect(le))}for(let pe=0;pe<$.added.length;pe++){const le=$.added[pe];let ze=T.indexOf(le);if(ze===-1){for(let je=0;je<P.length;je++)if(je>=T.length){T.push(le),ze=je;break}else if(T[je]===null){T[je]=le,ze=je;break}if(ze===-1)break}const fe=P[ze];fe&&fe.connect(le)}}const ce=new G,ue=new G;function ye($,pe,le){ce.setFromMatrixPosition(pe.matrixWorld),ue.setFromMatrixPosition(le.matrixWorld);const ze=ce.distanceTo(ue),fe=pe.projectionMatrix.elements,je=le.projectionMatrix.elements,At=fe[14]/(fe[10]-1),et=fe[14]/(fe[10]+1),_t=(fe[9]+1)/fe[5],xt=(fe[9]-1)/fe[5],dt=(fe[8]-1)/fe[0],jt=(je[8]+1)/je[0],Rt=At*dt,Yt=At*jt,Z=ze/(-dt+jt),re=Z*-dt;if(pe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(Z),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),fe[10]===-1)$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const te=At+Z,U=et+Z,vt=Rt-re,rt=Yt+(ze-re),R=_t*et/U*te,v=xt*et/U*te;$.projectionMatrix.makePerspective(vt,rt,R,v,te,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,pe){pe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let pe=$.near,le=$.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(le=m.depthFar)),k.near=D.near=A.near=pe,k.far=D.far=A.far=le,(z!==k.near||q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,q=k.far),k.layers.mask=$.layers.mask|6,A.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const ze=$.parent,fe=k.cameras;se(k,ze);for(let je=0;je<fe.length;je++)se(fe[je],ze);fe.length===2?ye(k,A,D):k.projectionMatrix.copy(A.projectionMatrix),be($,k,ze)};function be($,pe,le){le===null?$.matrix.copy(pe.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(pe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=kr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return g[$]};let we=null;function Ke($,pe){if(u=pe.getViewerPose(c||a),_=pe,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ze=!1;le.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let et=0;et<le.length;et++){const _t=le[et];let xt=null;if(p!==null)xt=p.getViewport(_t);else{const jt=h.getViewSubImage(f,_t);xt=jt.viewport,et===0&&(e.setRenderTargetTextures(S,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(S))}let dt=N[et];dt===void 0&&(dt=new An,dt.layers.enable(et),dt.viewport=new Ft,N[et]=dt),dt.matrix.fromArray(_t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(_t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),et===0&&(k.matrix.copy(dt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(dt)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const et=h.getDepthInformation(le[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(fe&&fe.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let et=0;et<le.length;et++){const _t=le[et].camera;if(_t){let xt=g[_t];xt||(xt=new Rp,g[_t]=xt);const dt=h.getCameraImage(_t);xt.sourceTexture=dt}}}}for(let le=0;le<P.length;le++){const ze=T[le],fe=P[le];ze!==null&&fe!==void 0&&fe.update(ze,pe,c||a)}we&&we($,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}const Be=new Fp;Be.setAnimationLoop(Ke),this.setAnimationLoop=function($){we=$},this.dispose=function(){}}}const iS=new ht,jp=new lt;jp.set(-1,0,0,0,1,0,0,0,1);function sS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Cp(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,w,L,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),b(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,w,L):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===In&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===In&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const w=e.get(g),L=w.envMap,S=w.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(S)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,w,L){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*w,m.scale.value=L*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,w){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){const w=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rS(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,P){const T=P.program;n.uniformBlockBinding(S,T)}function c(S,P){let T=s[S.id];T===void 0&&(m(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",w));const I=P.program;n.updateUBOMapping(S,I);const y=e.render.frame;r[S.id]!==y&&(f(S),r[S.id]=y)}function u(S){const P=h();S.__bindingPointIndex=P;const T=i.createBuffer(),I=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const P=s[S.id],T=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let y=0,A=T.length;y<A;y++){const D=T[y];if(Array.isArray(D))for(let N=0,k=D.length;N<k;N++)p(D[N],y,N,I);else p(D,y,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,P,T,I){if(b(S,P,T,I)===!0){const y=S.__offset,A=S.value;if(Array.isArray(A)){let D=0;for(let N=0;N<A.length;N++){const k=A[N],z=g(k);_(k,S.__data,D),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function _(S,P,T){typeof S=="number"||typeof S=="boolean"?P[0]=S:S.isMatrix3?(P[0]=S.elements[0],P[1]=S.elements[1],P[2]=S.elements[2],P[3]=0,P[4]=S.elements[3],P[5]=S.elements[4],P[6]=S.elements[5],P[7]=0,P[8]=S.elements[6],P[9]=S.elements[7],P[10]=S.elements[8],P[11]=0):ArrayBuffer.isView(S)?P.set(new S.constructor(S.buffer,S.byteOffset,P.length)):S.toArray(P,T)}function b(S,P,T,I){const y=S.value,A=P+"_"+T;if(I[A]===void 0)return typeof y=="number"||typeof y=="boolean"?I[A]=y:ArrayBuffer.isView(y)?I[A]=y.slice():I[A]=y.clone(),!0;{const D=I[A];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return I[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(S){const P=S.uniforms;let T=0;const I=16;for(let A=0,D=P.length;A<D;A++){const N=Array.isArray(P[A])?P[A]:[P[A]];for(let k=0,z=N.length;k<z;k++){const q=N[k],W=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,K=W.length;ee<K;ee++){const ce=W[ee],ue=g(ce),ye=T%I,se=ye%ue.boundary,be=ye+se;T+=se,be!==0&&I-be<ue.storage&&(T+=I-be),q.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=ue.storage}}}const y=T%I;return y>0&&(T+=I-y),S.__size=T,S.__cache={},this}function g(S){const P={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(P.boundary=4,P.storage=4):S.isVector2?(P.boundary=8,P.storage=8):S.isVector3||S.isColor?(P.boundary=16,P.storage=12):S.isVector4?(P.boundary=16,P.storage=16):S.isMatrix3?(P.boundary=48,P.storage=48):S.isMatrix4?(P.boundary=64,P.storage=64):S.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(P.boundary=16,P.storage=S.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",S),P}function w(S){const P=S.target;P.removeEventListener("dispose",w);const T=a.indexOf(P.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function L(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:L}}const aS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function oS(){return gi===null&&(gi=new Yd(aS,16,16,Gs,Xi),gi.name="DFG_LUT",gi.minFilter=sn,gi.magFilter=sn,gi.wrapS=bi,gi.wrapT=bi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class lS{constructor(e={}){const{canvas:t=Dx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=On}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const b=p,m=new Set([Vd,Hd,zd]),g=new Set([On,Ai,va,ya,Fd,Od]),w=new Uint32Array(4),L=new Int32Array(4),S=new G;let P=null,T=null;const I=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1,k=null,z=null,q=null,W=null;this._outputColorSpace=$t;let ee=0,K=0,ce=null,ue=-1,ye=null;const se=new Ft,be=new Ft;let we=null;const Ke=new Qe(0);let Be=0,$=t.width,pe=t.height,le=1,ze=null,fe=null;const je=new Ft(0,0,$,pe),At=new Ft(0,0,$,pe);let et=!1;const _t=new Zd;let xt=!1,dt=!1;const jt=new ht,Rt=new G,Yt=new Ft,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function te(){return ce===null?le:1}let U=n;function vt(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),U===null){const V="webgl2";if(U=vt(V,E),U===null)throw vt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw it("WebGLRenderer: "+E.message),E}let rt,R,v,H,j,ne,me,ge,Q,oe,Se,ke,Re,_e,He,$e,Ee,F,Me,ae,xe,Le,de;function Fe(){rt=new oM(U),rt.init(),xe=new Jb(U,rt),R=new Qy(U,rt,e,xe),v=new Kb(U,rt),R.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),z=U.createFramebuffer(),q=U.createFramebuffer(),W=U.createFramebuffer(),H=new dM(U),j=new kb,ne=new Zb(U,rt,v,j,R,xe,H),me=new aM(D),ge=new p_(U),Le=new Zy(U,ge),Q=new lM(U,ge,H,Le),oe=new uM(U,Q,ge,Le,H),F=new hM(U,R,ne),He=new eM(j),Se=new Ub(D,me,rt,R,Le,He),ke=new sS(D,j),Re=new Ob,_e=new jb(rt),Ee=new Ky(D,me,v,oe,_,l),$e=new Yb(D,oe,R),de=new rS(U,H,R,v),Me=new Jy(U,rt,H),ae=new cM(U,rt,H),H.programs=Se.programs,D.capabilities=R,D.extensions=rt,D.properties=j,D.renderLists=Re,D.shadowMap=$e,D.state=v,D.info=H}Fe(),b!==On&&(A=new pM(b,t.width,t.height,o,s,r));const he=new nS(D,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(E){E!==void 0&&(le=E,this.setSize($,pe,!1))},this.getSize=function(E){return E.set($,pe)},this.setSize=function(E,V,J=!0){if(he.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,pe=V,t.width=Math.floor(E*le),t.height=Math.floor(V*le),J===!0&&(t.style.width=E+"px",t.style.height=V+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set($*le,pe*le).floor()},this.setDrawingBufferSize=function(E,V,J){$=E,pe=V,le=J,t.width=Math.floor(E*J),t.height=Math.floor(V*J),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(b===On){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(se)},this.getViewport=function(E){return E.copy(je)},this.setViewport=function(E,V,J,X){E.isVector4?je.set(E.x,E.y,E.z,E.w):je.set(E,V,J,X),v.viewport(se.copy(je).multiplyScalar(le).round())},this.getScissor=function(E){return E.copy(At)},this.setScissor=function(E,V,J,X){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,V,J,X),v.scissor(be.copy(At).multiplyScalar(le).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){v.setScissorTest(et=E)},this.setOpaqueSort=function(E){ze=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,J=!0){let X=0;if(E){let Y=!1;if(ce!==null){const Pe=ce.texture.format;Y=m.has(Pe)}if(Y){const Pe=ce.texture.type,Ue=g.has(Pe),Ce=Ee.getClearColor(),Ve=Ee.getClearAlpha(),Ge=Ce.r,nt=Ce.g,st=Ce.b;Ue?(w[0]=Ge,w[1]=nt,w[2]=st,w[3]=Ve,U.clearBufferuiv(U.COLOR,0,w)):(L[0]=Ge,L[1]=nt,L[2]=st,L[3]=Ve,U.clearBufferiv(U.COLOR,0,L))}else X|=U.COLOR_BUFFER_BIT}V&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),Ee.dispose(),Re.dispose(),_e.dispose(),j.dispose(),me.dispose(),oe.dispose(),Le.dispose(),de.dispose(),Se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ws),he.removeEventListener("sessionend",Jn),bt.stop()};function Mt(E){E.preventDefault(),Zo("WebGLRenderer: Context Lost."),N=!0}function St(){Zo("WebGLRenderer: Context Restored."),N=!1;const E=H.autoReset,V=$e.enabled,J=$e.autoUpdate,X=$e.needsUpdate,Y=$e.type;Fe(),H.autoReset=E,$e.enabled=V,$e.autoUpdate=J,$e.needsUpdate=X,$e.type=Y}function Zt(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){const V=E.target;V.removeEventListener("dispose",qt),jr(V)}function jr(E){pl(E),j.remove(E)}function pl(E){const V=j.get(E).programs;V!==void 0&&(V.forEach(function(J){Se.releaseProgram(J)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,J,X,Y,Pe){V===null&&(V=Z);const Ue=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ce=Es(E,V,J,X,Y);v.setMaterial(X,Ue);let Ve=J.index,Ge=1;if(X.wireframe===!0){if(Ve=Q.getWireframeAttribute(J),Ve===void 0)return;Ge=2}const nt=J.drawRange,st=J.attributes.position;let We=nt.start*Ge,wt=(nt.start+nt.count)*Ge;Pe!==null&&(We=Math.max(We,Pe.start*Ge),wt=Math.min(wt,(Pe.start+Pe.count)*Ge)),Ve!==null?(We=Math.max(We,0),wt=Math.min(wt,Ve.count)):st!=null&&(We=Math.max(We,0),wt=Math.min(wt,st.count));const Et=wt-We;if(Et<0||Et===1/0)return;Le.setup(Y,X,Ce,J,Ve);let Ot,Ct=Me;if(Ve!==null&&(Ot=ge.get(Ve),Ct=ae,Ct.setIndex(Ot)),Y.isMesh)X.wireframe===!0?(v.setLineWidth(X.wireframeLinewidth*te()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(Y.isLine){let Jt=X.linewidth;Jt===void 0&&(Jt=1),v.setLineWidth(Jt*te()),Y.isLineSegments?Ct.setMode(U.LINES):Y.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else Y.isPoints?Ct.setMode(U.POINTS):Y.isSprite&&Ct.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Jt=Y._multiDrawStarts,De=Y._multiDrawCounts,dn=Y._multiDrawCount,ut=Ve?ge.get(Ve).bytesPerElement:1,bn=j.get(X).currentProgram.getUniforms();for(let Ht=0;Ht<dn;Ht++)bn.setValue(U,"_gl_DrawID",Ht),Ct.render(Jt[Ht]/ut,De[Ht])}else if(Y.isInstancedMesh)Ct.renderInstances(We,Et,Y.count);else if(J.isInstancedBufferGeometry){const Jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,De=Math.min(J.instanceCount,Jt);Ct.renderInstances(We,Et,De)}else Ct.render(We,Et)};function js(E,V,J){E.transparent===!0&&E.side===yi&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,Qn(E,V,J),E.side=wi,E.needsUpdate=!0,Qn(E,V,J),E.side=yi):Qn(E,V,J)}this.compile=function(E,V,J=null){J===null&&(J=E),T=_e.get(J),T.init(V),y.push(T),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),E!==J&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights();const X=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Pe=Y.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const Ce=Pe[Ue];js(Ce,J,Y),X.add(Ce)}else js(Pe,J,Y),X.add(Pe)}),T=y.pop(),X},this.compileAsync=function(E,V,J=null){const X=this.compile(E,V,J);return new Promise(Y=>{function Pe(){if(X.forEach(function(Ue){j.get(Ue).currentProgram.isReady()&&X.delete(Ue)}),X.size===0){Y(E);return}setTimeout(Pe,10)}rt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Hn=null;function Zn(E){Hn&&Hn(E)}function Ws(){bt.stop()}function Jn(){bt.start()}const bt=new Fp;bt.setAnimationLoop(Zn),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(E){Hn=E,he.setAnimationLoop(E),E===null?bt.stop():bt.start()},he.addEventListener("sessionstart",Ws),he.addEventListener("sessionend",Jn),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(E,V);const J=he.enabled===!0&&he.isPresenting===!0,X=A!==null&&(ce===null||J)&&A.begin(D,ce);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,V,ce),T=_e.get(E,y.length),T.init(V),T.state.textureUnits=ne.getTextureUnits(),y.push(T),jt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),_t.setFromProjectionMatrix(jt,Si,V.reversedDepth),dt=this.localClippingEnabled,xt=He.init(this.clippingPlanes,dt),P=Re.get(E,I.length),P.init(),I.push(P),he.enabled===!0&&he.isPresenting===!0){const Ue=D.xr.getDepthSensingMesh();Ue!==null&&Xs(Ue,V,-1/0,D.sortObjects)}Xs(E,V,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(ze,fe,V.reversedDepth),re=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,re&&Ee.addToRenderList(P,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&He.beginShadows();const Y=T.state.shadowsArray;if($e.render(Y,E,V),xt===!0&&He.endShadows(),(X&&A.hasRenderPass())===!1){const Ue=P.opaque,Ce=P.transmissive;if(T.setupLights(),V.isArrayCamera){const Ve=V.cameras;if(Ce.length>0)for(let Ge=0,nt=Ve.length;Ge<nt;Ge++){const st=Ve[Ge];Ms(Ue,Ce,E,st)}re&&Ee.render(E);for(let Ge=0,nt=Ve.length;Ge<nt;Ge++){const st=Ve[Ge];Pn(P,E,st,st.viewport)}}else Ce.length>0&&Ms(Ue,Ce,E,V),re&&Ee.render(E),Pn(P,E,V)}ce!==null&&K===0&&(ne.updateMultisampleRenderTarget(ce),ne.updateRenderTargetMipmap(ce)),X&&A.end(D),E.isScene===!0&&E.onAfterRender(D,E,V),Le.resetDefaultState(),ue=-1,ye=null,y.pop(),y.length>0?(T=y[y.length-1],ne.setTextureUnits(T.state.textureUnits),xt===!0&&He.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?P=I[I.length-1]:P=null,k!==null&&k.renderEnd()};function Xs(E,V,J,X){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_t.intersectsSprite(E)){X&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(jt);const Ue=oe.update(E),Ce=E.material;Ce.visible&&P.push(E,Ue,Ce,J,Yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_t.intersectsObject(E))){const Ue=oe.update(E),Ce=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Yt.copy(Ue.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(jt)),Array.isArray(Ce)){const Ve=Ue.groups;for(let Ge=0,nt=Ve.length;Ge<nt;Ge++){const st=Ve[Ge],We=Ce[st.materialIndex];We&&We.visible&&P.push(E,Ue,We,J,Yt.z,st)}}else Ce.visible&&P.push(E,Ue,Ce,J,Yt.z,null)}}const Pe=E.children;for(let Ue=0,Ce=Pe.length;Ue<Ce;Ue++)Xs(Pe[Ue],V,J,X)}function Pn(E,V,J,X){const{opaque:Y,transmissive:Pe,transparent:Ue}=E;T.setupLightsView(J),xt===!0&&He.setGlobalState(D.clippingPlanes,J),X&&v.viewport(se.copy(X)),Y.length>0&&Yi(Y,V,J),Pe.length>0&&Yi(Pe,V,J),Ue.length>0&&Yi(Ue,V,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ms(E,V,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const We=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Ti(1,1,{generateMipmaps:!0,type:We?Xi:On,minFilter:zi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Pe=T.state.transmissionRenderTarget[X.id],Ue=X.viewport||se;Pe.setSize(Ue.z*D.transmissionResolutionScale,Ue.w*D.transmissionResolutionScale);const Ce=D.getRenderTarget(),Ve=D.getActiveCubeFace(),Ge=D.getActiveMipmapLevel();D.setRenderTarget(Pe),D.getClearColor(Ke),Be=D.getClearAlpha(),Be<1&&D.setClearColor(16777215,.5),D.clear(),re&&Ee.render(J);const nt=D.toneMapping;D.toneMapping=Ei;const st=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),xt===!0&&He.setGlobalState(D.clippingPlanes,X),Yi(E,J,X),ne.updateMultisampleRenderTarget(Pe),ne.updateRenderTargetMipmap(Pe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let wt=0,Et=V.length;wt<Et;wt++){const Ot=V[wt],{object:Ct,geometry:Jt,material:De,group:dn}=Ot;if(De.side===yi&&Ct.layers.test(X.layers)){const ut=De.side;De.side=In,De.needsUpdate=!0,Ki(Ct,J,X,Jt,De,dn),De.side=ut,De.needsUpdate=!0,We=!0}}We===!0&&(ne.updateMultisampleRenderTarget(Pe),ne.updateRenderTargetMipmap(Pe))}D.setRenderTarget(Ce,Ve,Ge),D.setClearColor(Ke,Be),st!==void 0&&(X.viewport=st),D.toneMapping=nt}function Yi(E,V,J){const X=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Pe=E.length;Y<Pe;Y++){const Ue=E[Y],{object:Ce,geometry:Ve,group:Ge}=Ue;let nt=Ue.material;nt.allowOverride===!0&&X!==null&&(nt=X),Ce.layers.test(J.layers)&&Ki(Ce,V,J,Ve,nt,Ge)}}function Ki(E,V,J,X,Y,Pe){E.onBeforeRender(D,V,J,X,Y,Pe),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(D,V,J,X,E,Pe),Y.transparent===!0&&Y.side===yi&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,D.renderBufferDirect(J,V,X,Y,E,Pe),Y.side=wi,Y.needsUpdate=!0,D.renderBufferDirect(J,V,X,Y,E,Pe),Y.side=yi):D.renderBufferDirect(J,V,X,Y,E,Pe),E.onAfterRender(D,V,J,X,Y,Pe)}function Qn(E,V,J){V.isScene!==!0&&(V=Z);const X=j.get(E),Y=T.state.lights,Pe=T.state.shadowsArray,Ue=Y.state.version,Ce=Se.getParameters(E,Y.state,Pe,V,J,T.state.lightProbeGridArray),Ve=Se.getProgramCacheKey(Ce);let Ge=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,X.fog=V.fog;const nt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=me.get(E.envMap||X.environment,nt),X.envMapRotation=X.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",qt),Ge=new Map,X.programs=Ge);let st=Ge.get(Ve);if(st!==void 0){if(X.currentProgram===st&&X.lightsStateVersion===Ue)return Ss(E,Ce),st}else Ce.uniforms=Se.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,J,Ce),E.onBeforeCompile(Ce,D),st=Se.acquireProgram(Ce,Ve),Ge.set(Ve,st),X.uniforms=Ce.uniforms;const We=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=He.uniform),Ss(E,Ce),X.needsLights=Wr(E),X.lightsStateVersion=Ue,X.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=st,X.uniformsList=null,st}function bs(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=jo.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Ss(E,V){const J=j.get(E);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function qs(E,V){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let J=0,X=E.length;J<X;J++){const Y=E[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function Es(E,V,J,X,Y){V.isScene!==!0&&(V=Z),ne.resetTextureUnits();const Pe=V.fog,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?V.environment:null,Ce=ce===null?D.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:pt.workingColorSpace,Ve=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ge=me.get(X.envMap||Ue,Ve),nt=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),We=!!J.morphAttributes.position,wt=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let Ot=Ei;X.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ot=D.toneMapping);const Ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Jt=Ct!==void 0?Ct.length:0,De=j.get(X),dn=T.state.lights;if(xt===!0&&(dt===!0||E!==ye)){const Tt=E===ye&&X.id===ue;He.setState(X,E,Tt)}let ut=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==dn.state.version||De.outputColorSpace!==Ce||Y.isBatchedMesh&&De.batching===!1||!Y.isBatchedMesh&&De.batching===!0||Y.isBatchedMesh&&De.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&De.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||Y.isInstancedMesh&&De.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&De.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&De.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&De.instancingMorph===!1&&Y.morphTexture!==null||De.envMap!==Ge||X.fog===!0&&De.fog!==Pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==He.numPlanes||De.numIntersection!==He.numIntersection)||De.vertexAlphas!==nt||De.vertexTangents!==st||De.morphTargets!==We||De.morphNormals!==wt||De.morphColors!==Et||De.toneMapping!==Ot||De.morphTargetsCount!==Jt||!!De.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,De.__version=X.version);let bn=De.currentProgram;ut===!0&&(bn=Qn(X,V,Y),k&&X.isNodeMaterial&&k.onUpdateProgram(X,bn,De));let Ht=!1,mn=!1,Zi=!1;const yt=bn.getUniforms(),Wt=De.uniforms;if(v.useProgram(bn.program)&&(Ht=!0,mn=!0,Zi=!0),X.id!==ue&&(ue=X.id,mn=!0),De.needsLights){const Tt=qs(T.state.lightProbeGridArray,Y);De.lightProbeGrid!==Tt&&(De.lightProbeGrid=Tt,mn=!0)}if(Ht||ye!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",E.projectionMatrix),yt.setValue(U,"viewMatrix",E.matrixWorldInverse);const gn=yt.map.cameraPosition;gn!==void 0&&gn.setValue(U,Rt.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),ye!==E&&(ye=E,mn=!0,Zi=!0)}if(De.needsLights&&(dn.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",dn.state.directionalShadowMap,ne),dn.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",dn.state.spotShadowMap,ne),dn.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",dn.state.pointShadowMap,ne)),Y.isSkinnedMesh){yt.setOptional(U,Y,"bindMatrix"),yt.setOptional(U,Y,"bindMatrixInverse");const Tt=Y.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),yt.setValue(U,"boneTexture",Tt.boneTexture,ne))}Y.isBatchedMesh&&(yt.setOptional(U,Y,"batchingTexture"),yt.setValue(U,"batchingTexture",Y._matricesTexture,ne),yt.setOptional(U,Y,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",Y._indirectTexture,ne),yt.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",Y._colorsTexture,ne));const hi=J.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&F.update(Y,J,bn),(mn||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,yt.setValue(U,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&V.environment!==null&&(Wt.envMapIntensity.value=V.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=oS()),mn){if(yt.setValue(U,"toneMappingExposure",D.toneMappingExposure),De.needsLights&&ml(Wt,Zi),Pe&&X.fog===!0&&ke.refreshFogUniforms(Wt,Pe),ke.refreshMaterialUniforms(Wt,X,le,pe,T.state.transmissionRenderTarget[E.id]),De.needsLights&&De.lightProbeGrid){const Tt=De.lightProbeGrid;Wt.probesSH.value=Tt.texture,Wt.probesMin.value.copy(Tt.boundingBox.min),Wt.probesMax.value.copy(Tt.boundingBox.max),Wt.probesResolution.value.copy(Tt.resolution)}jo.upload(U,bs(De),Wt,ne)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(jo.upload(U,bs(De),Wt,ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(U,"center",Y.center),yt.setValue(U,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(U,"normalMatrix",Y.normalMatrix),yt.setValue(U,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const Tt=X.uniformsGroups;for(let gn=0,Ji=Tt.length;gn<Ji;gn++){const Li=Tt[gn];de.update(Li,bn),de.bind(Li,bn)}}return bn}function ml(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Wr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(E,V,J){const X=j.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),j.get(E.texture).__webglTexture=V,j.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const J=j.get(E);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,J=0){ce=E,ee=V,K=J;let X=null,Y=!1,Pe=!1;if(E){const Ce=j.get(E);if(Ce.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,Ce.__webglFramebuffer),se.copy(E.viewport),be.copy(E.scissor),we=E.scissorTest,v.viewport(se),v.scissor(be),v.setScissorTest(we),ue=-1;return}else if(Ce.__webglFramebuffer===void 0)ne.setupRenderTarget(E);else if(Ce.__hasExternalTextures)ne.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const nt=E.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&j.has(nt)&&(E.width!==nt.image.width||E.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(E)}}const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const Ge=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?X=Ge[V][J]:X=Ge[V],Y=!0):E.samples>0&&ne.useMultisampledRTT(E)===!1?X=j.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?X=Ge[J]:X=Ge,se.copy(E.viewport),be.copy(E.scissor),we=E.scissorTest}else se.copy(je).multiplyScalar(le).floor(),be.copy(At).multiplyScalar(le).floor(),we=et;if(J!==0&&(X=z),v.bindFramebuffer(U.FRAMEBUFFER,X)&&v.drawBuffers(E,X),v.viewport(se),v.scissor(be),v.setScissorTest(we),Y){const Ce=j.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,J)}else if(Pe){const Ce=V;for(let Ve=0;Ve<E.textures.length;Ve++){const Ge=j.get(E.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,Ge.__webglTexture,J,Ce)}}else if(E!==null&&J!==0){const Ce=j.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ce.__webglTexture,J)}ue=-1},this.readRenderTargetPixels=function(E,V,J,X,Y,Pe,Ue,Ce=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){v.bindFramebuffer(U.FRAMEBUFFER,Ve);try{const Ge=E.textures[Ce],nt=Ge.format,st=Ge.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),!R.textureFormatReadable(nt)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(st)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-X&&J>=0&&J<=E.height-Y&&U.readPixels(V,J,X,Y,xe.convert(nt),xe.convert(st),Pe)}finally{const Ge=ce!==null?j.get(ce).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,V,J,X,Y,Pe,Ue,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(V>=0&&V<=E.width-X&&J>=0&&J<=E.height-Y){v.bindFramebuffer(U.FRAMEBUFFER,Ve);const Ge=E.textures[Ce],nt=Ge.format,st=Ge.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),!R.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.bufferData(U.PIXEL_PACK_BUFFER,Pe.byteLength,U.STREAM_READ),U.readPixels(V,J,X,Y,xe.convert(nt),xe.convert(st),0);const wt=ce!==null?j.get(ce).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,wt);const Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ux(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Pe),U.deleteBuffer(We),U.deleteSync(Et),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,J=0){const X=Math.pow(2,-J),Y=Math.floor(E.image.width*X),Pe=Math.floor(E.image.height*X),Ue=V!==null?V.x:0,Ce=V!==null?V.y:0;ne.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Ue,Ce,Y,Pe),v.unbindTexture()},this.copyTextureToTexture=function(E,V,J=null,X=null,Y=0,Pe=0){let Ue,Ce,Ve,Ge,nt,st,We,wt,Et;const Ot=E.isCompressedTexture?E.mipmaps[Pe]:E.image;if(J!==null)Ue=J.max.x-J.min.x,Ce=J.max.y-J.min.y,Ve=J.isBox3?J.max.z-J.min.z:1,Ge=J.min.x,nt=J.min.y,st=J.isBox3?J.min.z:0;else{const Wt=Math.pow(2,-Y);Ue=Math.floor(Ot.width*Wt),Ce=Math.floor(Ot.height*Wt),E.isDataArrayTexture?Ve=Ot.depth:E.isData3DTexture?Ve=Math.floor(Ot.depth*Wt):Ve=1,Ge=0,nt=0,st=0}X!==null?(We=X.x,wt=X.y,Et=X.z):(We=0,wt=0,Et=0);const Ct=xe.convert(V.format),Jt=xe.convert(V.type);let De;V.isData3DTexture?(ne.setTexture3D(V,0),De=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ne.setTexture2DArray(V,0),De=U.TEXTURE_2D_ARRAY):(ne.setTexture2D(V,0),De=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const dn=v.getParameter(U.UNPACK_ROW_LENGTH),ut=v.getParameter(U.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(U.UNPACK_SKIP_PIXELS),Ht=v.getParameter(U.UNPACK_SKIP_ROWS),mn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ge),v.pixelStorei(U.UNPACK_SKIP_ROWS,nt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,st);const Zi=E.isDataArrayTexture||E.isData3DTexture,yt=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Wt=j.get(E),hi=j.get(V),Tt=j.get(Wt.__renderTarget),gn=j.get(hi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let Ji=0;Ji<Ve;Ji++)Zi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(E).__webglTexture,Y,st+Ji),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(V).__webglTexture,Pe,Et+Ji)),U.blitFramebuffer(Ge,nt,Ue,Ce,We,wt,Ue,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||j.has(E)){const Wt=j.get(E),hi=j.get(V);v.bindFramebuffer(U.READ_FRAMEBUFFER,q),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Tt=0;Tt<Ve;Tt++)Zi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,Y,st+Tt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wt.__webglTexture,Y),yt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hi.__webglTexture,Pe,Et+Tt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hi.__webglTexture,Pe),Y!==0?U.blitFramebuffer(Ge,nt,Ue,Ce,We,wt,Ue,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):yt?U.copyTexSubImage3D(De,Pe,We,wt,Et+Tt,Ge,nt,Ue,Ce):U.copyTexSubImage2D(De,Pe,We,wt,Ge,nt,Ue,Ce);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(De,Pe,We,wt,Et,Ue,Ce,Ve,Ct,Jt,Ot.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(De,Pe,We,wt,Et,Ue,Ce,Ve,Ct,Ot.data):U.texSubImage3D(De,Pe,We,wt,Et,Ue,Ce,Ve,Ct,Jt,Ot):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Pe,We,wt,Ue,Ce,Ct,Jt,Ot.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Pe,We,wt,Ot.width,Ot.height,Ct,Ot.data):U.texSubImage2D(U.TEXTURE_2D,Pe,We,wt,Ue,Ce,Ct,Jt,Ot);v.pixelStorei(U.UNPACK_ROW_LENGTH,dn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(U.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),v.pixelStorei(U.UNPACK_SKIP_IMAGES,mn),Pe===0&&V.generateMipmaps&&U.generateMipmap(De),v.unbindTexture()},this.initRenderTarget=function(E){j.get(E).__webglFramebuffer===void 0&&ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ne.setTextureCube(E,0):E.isData3DTexture?ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ne.setTexture2DArray(E,0):ne.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){ee=0,K=0,ce=null,v.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const cf={type:"change"},nh={type:"start"},Wp={type:"end"},Eo=new Ca,df=new gs,cS=Math.cos(70*Xd.DEG2RAD),tn=new G,Nn=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_c=1e-6;class dS extends u_{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new li,this._lastTargetPosition=new G,this._quat=new li().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fu,this._sphericalDelta=new Fu,this._scale=1,this._panOffset=new G,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new G,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uS.bind(this),this._onPointerDown=hS.bind(this),this._onPointerUp=fS.bind(this),this._onContextMenu=yS.bind(this),this._onMouseWheel=gS.bind(this),this._onKeyDown=xS.bind(this),this._onTouchStart=_S.bind(this),this._onTouchMove=vS.bind(this),this._onMouseDown=pS.bind(this),this._onMouseMove=mS.bind(this),this._interceptControlDown=MS.bind(this),this._interceptControlUp=bS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cf),this.update(),this.state=kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=tn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<cS?this.object.lookAt(this.target):(df.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(df,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_c||this._lastTargetPosition.distanceToSquared(this.target)>_c?(this.dispatchEvent(cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function uS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wp),this.state=kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=kt.DOLLY;break;case Ar.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=kt.ROTATE}break;case Ar.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(nh)}function mS(i){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gS(i){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(i.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wp))}function xS(i){this.enabled!==!1&&this._handleKeyDown(i)}function _S(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=kt.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=kt.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(nh)}function vS(i){switch(this._trackPointer(i),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=kt.NONE}}function yS(i){this.enabled!==!1&&i.preventDefault()}function MS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hf(i,e){if(e===Sx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===vd||e===vp){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===vd)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function SS(i){const e=new Map,t=new Map,n=i.clone();return Xp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Xp(i.children[n],e.children[n],t)}class ES extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new uf(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uf(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new VS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Lr.extractUrlBase(e);a=Lr.resolveURL(c,this.path)}else a=Lr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ll(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qp){try{a[gt.KHR_BINARY_GLTF]=new GS(e)}catch(h){s&&s(h);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new nE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:a[h]=new AS;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[h]=new jS(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[h]=new WS;break;case gt.KHR_MESH_QUANTIZATION:a[h]=new XS;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function TS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wS{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],zn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Go(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new J0(u),c.distance=h;break;case"spot":c=new K0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class AS{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bs}extendParams(e,t,n){const s=[];e.color=new Qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,$t))}return Promise.all(s)}}class RS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class CS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(r,r)}return Promise.all(s)}}class PS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class LS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class NS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,$t)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class IS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class DS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(r[0],r[1],r[2],zn),Promise.all(s)}}class US{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class kS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(r[0],r[1],r[2],zn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,$t)),Promise.all(s)}}class FS{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class OS{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class BS{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class zS{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class HS{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class uf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class VS{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of h){const b=new ht,m=new G,g=new li,w=new G(1,1,1),L=new S0(_.geometry,_.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&w.fromBufferAttribute(l.SCALE,S),L.setMatrixAt(S,b.compose(m,g,w));for(const S in l)if(S==="_COLOR_0"){const P=l[S];L.instanceColor=new Md(P.array,P.itemSize,P.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);Xt.prototype.copy.call(L,_),this.parser.assignFinalMaterial(L),p.push(L)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const qp="glTF",ha=12,ff={JSON:1313821514,BIN:5130562};class GS{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ha,r=new DataView(e,ha);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===ff.JSON){const c=new Uint8Array(e,ha+a,o);this.content=n.decode(c)}else if(l===ff.BIN){const c=ha+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=wd[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=wd[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Nr[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(const _ in p.attributes){const b=p.attributes[_],m=l[_];m!==void 0&&(b.normalized=m)}h(p)},o,c,zn,f)})})}}class WS{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XS{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class $p extends zr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,_=e*c,b=_-c,m=-2*p+3*f,g=p-f,w=1-m,L=g-f+h;for(let S=0;S!==o;S++){const P=a[b+S+o],T=a[b+S+l]*u,I=a[_+S+o],y=a[_+S]*u;r[S]=w*P+L*T+m*I+g*y}return r}}const qS=new li;class $S extends $p{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return qS.fromArray(r).normalize().toArray(r),r}}const qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pf={9728:nn,9729:sn,9984:up,9985:Fo,9986:fa,9987:zi},mf={33071:bi,33648:Xo,10497:Vs},vc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YS={CUBICSPLINE:void 0,LINEAR:ba,STEP:Ma},yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ol({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),i.DefaultMaterial}function Ds(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function JS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QS(i){let e;const t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mc(t.attributes):e=i.indices+":"+Mc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mc(i.targets[n]);return e}function Mc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tE=new ht;class nE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Dp(this.options.manager):this.textureLoader=new e_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ll(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ds(r,o,s),xi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Lr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=vc[s.type],o=Nr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Cn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=vc[s.type],c=Nr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let b,m;if(p&&p!==h){const g=Math.floor(f/p),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let L=t.cache.get(w);L||(b=new c(o,g*p,s.count*p/u),L=new g0(b,p/u),t.cache.add(w,L)),m=new $d(L,l,f%p/u,_)}else o===null?b=new c(s.count*l):b=new c(o,f,s.count*l),m=new Cn(b,l,_);if(s.sparse!==void 0){const g=vc.SCALAR,w=Nr[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,P=new w(a[1],L,s.sparse.count*g),T=new c(a[2],S,s.sparse.count*l);o!==null&&(m=new Cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,y=P.length;I<y;I++){const A=P[I];if(m.setX(A,T[I*l]),l>=2&&m.setY(A,T[I*l+1]),l>=3&&m.setZ(A,T[I*l+2]),l>=4&&m.setW(A,T[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=pf[f.magFilter]||sn,u.minFilter=pf[f.minFilter]||zi,u.wrapS=mf[f.wrapS]||Vs,u.wrapT=mf[f.wrapT]||Vs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==sn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(b){const m=new rn(b);m.needsUpdate=!0,f(m)}),t.load(Lr.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),xi(h,a),h.userData.mimeType=a.mimeType||eE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Tr,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _a,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ol}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){const h=s[gt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],zn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,$t)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=yi);const u=r.alphaMode||yc.OPAQUE;if(u===yc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===yc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bs&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Bs&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bs){const h=r.emissiveFactor;o.emissive=new Qe().setRGB(h[0],h[1],h[2],zn)}return r.emissiveTexture!==void 0&&a!==Bs&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,$t)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),xi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ds(s,h,r),h})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return gf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=QS(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=gf(new Dn,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?KS(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const b=u[p],m=a[p];let g;const w=c[p];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new y0(b,w):new cn(b,w),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?g.geometry=hf(g.geometry,vp):m.mode===qn.TRIANGLE_FAN&&(g.geometry=hf(g.geometry,vd));else if(m.mode===qn.LINES)g=new bd(b,w);else if(m.mode===qn.LINE_STRIP)g=new Jd(b,w);else if(m.mode===qn.LINE_LOOP)g=new A0(b,w);else if(m.mode===qn.POINTS)g=new Vo(b,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&JS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),xi(g,r),m.extensions&&Ds(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Ds(s,h[0],r),h[0];const f=new Hi;r.extensions&&Ds(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(Xd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new dl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new ht;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kd(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const p=s.channels[h],_=s.samplers[p.sampler],b=p.target,m=b.node,g=s.parameters!==void 0?s.parameters[_.input]:_.input,w=s.parameters!==void 0?s.parameters[_.output]:_.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",w)),c.push(_),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],b=h[3],m=h[4],g=[];for(let L=0,S=f.length;L<S;L++){const P=f[L],T=p[L],I=_[L],y=b[L],A=m[L];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const D=n._createAnimationTracks(P,T,I,y,A);if(D)for(let N=0;N<D.length;N++)g.push(D[N])}const w=new G0(r,void 0,g);return xi(w,s),w})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,tE)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){const p=u.userData.pivot,_=h[0];u.pivot=new G().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],_.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new wp:c.length>1?u=new Hi:c.length===1?u=c[0]:u=new Xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),xi(u,r),r.extensions&&Ds(n,u,r),r.matrix!==void 0){const h=new ht;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Hi;n.name&&(r.name=s.createUniqueName(n.name)),xi(r,n),n.extensions&&Ds(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const f=l[u];f.parent!==null?r.add(SS(f)):r.add(f)}const c=u=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof Bn||f instanceof rn)&&h.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}us[r.path]===us.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(us[r.path]){case us.weights:u=Ta;break;case us.rotation:u=wa;break;case us.translation:case us.scale:u=el;break;default:n.itemSize===1?u=Ta:u=el;break}const h=s.interpolation!==void 0?YS[s.interpolation]:ba,f=this._getArrayFromAccessor(n);for(let p=0,_=l.length;p<_;p++){const b=new u(l[p]+"."+us[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ad(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof wa?$S:$p;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iE(i,e,t){const n=e.attributes,s=new Ci;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){const u=Ad(Nr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new G,l=new G;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const b=Ad(Nr[f.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Pi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function gf(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=wd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return pt.workingColorSpace!==zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),xi(i,e),iE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ZS(i,e.targets,t):i})}class sE extends ys{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?Lr.extractUrlBase(e):this.path,o=new ll(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let s={};const r=/\s+/,a={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let h=u>=0?c.substring(0,u):c;h=h.toLowerCase();let f=u>=0?c.substring(u+1):"";if(f=f.trim(),h==="newmtl")s={name:f},a[f]=s;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const p=f.split(r,3);s[h]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else s[h]=f}const o=new rE(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}}class rE{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:wi,this.wrap=this.options.wrap!==void 0?this.options.wrap:Vs}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const s=e[n],r={};t[n]=r;for(const a in s){let o=!0,l=s[a];const c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break}o&&(r[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],s={name:e,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(s[o])return;const c=t.getTextureParams(l,s),u=t.loadTexture(r(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(o==="map"||o==="emissiveMap")&&(u.colorSpace=$t),s[o]=u}for(const o in n){const l=n[o];let c;if(l!=="")switch(o.toLowerCase()){case"kd":s.color=pt.colorSpaceToWorking(new Qe().fromArray(l),$t);break;case"ks":s.specular=pt.colorSpaceToWorking(new Qe().fromArray(l),$t);break;case"ke":s.emissive=pt.colorSpaceToWorking(new Qe().fromArray(l),$t);break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"disp":a("displacementMap",l);break;case"map_d":a("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break}}return this.materials[e]=new Pp(s),this.materials[e]}getTextureParams(e,t){const n={scale:new tt(1,1),offset:new tt(0,0)},s=e.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-mm"),r>=0&&(t.displacementBias=parseFloat(s[r+1]),t.displacementScale=parseFloat(s[r+2]),s.splice(r,3)),r=s.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),n.url=s.join(" ").trim(),n}loadTexture(e,t,n,s,r){const a=this.manager!==void 0?this.manager:Ip;let o=a.getHandler(e);o===null&&(o=new Dp(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const l=o.load(e,n,s,r);return t!==void 0&&(l.mapping=t),l}}const aE=/^[og]\s*(.+)?/,oE=/^mtllib /,lE=/^usemtl /,cE=/^usemap /,xf=/\s+/,_f=new G,bc=new G,vf=new G,yf=new G,Wn=new G,To=new Qe;function dE(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;_f.fromArray(s,e),bc.fromArray(s,t),vf.fromArray(s,n),Wn.subVectors(vf,bc),yf.subVectors(_f,bc),Wn.cross(yf),Wn.normalize(),r.push(Wn.x,Wn.y,Wn.z),r.push(Wn.x,Wn.y,Wn.z),r.push(Wn.x,Wn.y,Wn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),o!==void 0&&o!==""){const _=this.normals.length;h=this.parseNormalIndex(o,_),f=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),p=this.parseUVIndex(a,_),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class hE extends ys{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new ll(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new dE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(xf);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(To.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),$t),t.colors.push(To.r,To.g,To.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(xf),p=[];for(let b=0,m=f.length;b<m;b++){const g=f[b];if(g.length>0){const w=g.split("/");p.push(w)}}const _=p[0];for(let b=1,m=p.length-1;b<m;b++){const g=p[b],w=p[b+1];t.addFace(_[0],g[0],w[0],_[1],g[1],w[1],_[2],g[2],w[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=h;else for(let _=0,b=h.length;_<b;_++){const m=h[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=aE.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(lE.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(oE.test(c))t.materialLibraries.push(c.substring(7).trim());else if(cE.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Hi;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,h=c.materials,f=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const b=new Dn;b.setAttribute("position",new pn(u.vertices,3)),u.normals.length>0&&b.setAttribute("normal",new pn(u.normals,3)),u.colors.length>0&&(_=!0,b.setAttribute("color",new pn(u.colors,3))),u.hasUVIndices===!0&&b.setAttribute("uv",new pn(u.uvs,2));const m=[];for(let w=0,L=h.length;w<L;w++){const S=h[w],P=S.name+"_"+S.smooth+"_"+_;let T=t.materials[P];if(this.materials!==null){if(T=this.materials.create(S.name),f&&T&&!(T instanceof _a)){const I=new _a;Bn.prototype.copy.call(I,T),I.color.copy(T.color),T=I}else if(p&&T&&!(T instanceof Tr)){const I=new Tr({size:10,sizeAttenuation:!1});Bn.prototype.copy.call(I,T),I.color.copy(T.color),I.map=T.map,T=I}}T===void 0&&(f?T=new _a:p?T=new Tr({size:1,sizeAttenuation:!1}):T=new Pp,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=_,t.materials[P]=T),m.push(T)}let g;if(m.length>1){for(let w=0,L=h.length;w<L;w++){const S=h[w];b.addGroup(S.groupStart,S.groupCount,w)}f?g=new bd(b,m):p?g=new Vo(b,m):g=new cn(b,m)}else f?g=new bd(b,m[0]):p?g=new Vo(b,m[0]):g=new cn(b,m[0]);g.name=c.name,r.add(g)}else if(t.vertices.length>0){const o=new Tr({size:1,sizeAttenuation:!1}),l=new Dn;l.setAttribute("position",new pn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new pn(t.colors,3)),o.vertexColors=!0);const c=new Vo(l,o);r.add(c)}return r}}function wo(i){return decodeURIComponent(i.split(/[?#]/)[0]||"").replace(/\\/g,"/").replace(/^\.\//,"").replace(/^\//,"")}function uE(i){const e=i.toLowerCase().split(".").pop();return e==="glb"?"model/gltf-binary":e==="gltf"?"model/gltf+json":e==="bin"?"application/octet-stream":e==="png"?"image/png":e==="jpg"||e==="jpeg"?"image/jpeg":e==="webp"?"image/webp":e==="mtl"||e==="obj"?"text/plain":"application/octet-stream"}function fE(i){return new Promise((e,t)=>{Zg(i,(n,s)=>{n?t(n):e(s)})})}function Sc(i){i.traverse(e=>{if(!(e instanceof cn))return;e.geometry?.dispose();const t=e.userData.kigformSourceMaterial;(Array.isArray(t)?t:t?[t]:Array.isArray(e.material)?e.material:[e.material]).forEach(s=>{Object.values(s).forEach(r=>{r instanceof rn&&r.dispose()}),s.dispose()})})}function Mf(i){const e=new Ci().setFromObject(i.modelRoot);if(e.isEmpty())return;const t=e.getCenter(new G),n=e.getSize(new G);i.modelRoot.position.sub(t);const s=Math.max(n.x,n.y,n.z,.1),r=Xd.degToRad(i.camera.fov),a=s/(2*Math.tan(r/2))*1.72;i.camera.position.set(a*.5,s*.06,a),i.camera.near=Math.max(.01,a/100),i.camera.far=Math.max(100,a*20),i.camera.updateProjectionMatrix(),i.controls.target.set(0,0,0),i.controls.minDistance=Math.max(s*.45,.2),i.controls.maxDistance=Math.max(s*8,8),i.controls.update()}function pE({job:i}){const e=O.useRef(null),t=O.useRef(null),n=O.useRef([]),[s,r]=O.useState(!1),[a,o]=O.useState("loading"),[l,c]=O.useState("正在读取模型包"),[u,h]=O.useState("source"),[f,p]=O.useState(!0);return O.useEffect(()=>{const _=e.current;if(!_)return;let b=0;const m=new u0;m.background=new Qe(15199214);const g=new An(32,1,.01,1e3);g.position.set(2.4,.3,4.8);let w;try{w=new lS({antialias:!0,powerPreference:"high-performance"})}catch{o("error"),c("当前浏览器或显卡无法初始化 WebGL");return}w.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),w.outputColorSpace=$t,w.toneMapping=Ud,w.toneMappingExposure=1.08,w.shadowMap.enabled=!0,w.domElement.setAttribute("aria-label","真实 3D 头壳模型预览"),w.domElement.dataset.kigform3d="ready",_.replaceChildren(w.domElement);const L=new dS(g,w.domElement);L.enableDamping=!0,L.dampingFactor=.07,L.enablePan=!1,L.autoRotate=!0,L.autoRotateSpeed=.85;const S=new Hi;m.add(S);const P=new ci({color:15330543,roughness:.42,metalness:.02,clearcoat:.28,clearcoatRoughness:.52}),T=new ol({color:2448760,roughness:.68,metalness:.04,wireframe:!0});m.add(new $0(16777215,6713978,2.2));const I=new Go(16777215,4.2);I.position.set(4,5,5),I.castShadow=!0,m.add(I);const y=new Go(13428991,2.1);y.position.set(-4,1.5,3),m.add(y);const A=new Go(16768450,1.8);A.position.set(2,3,-5),m.add(A);const D={scene:m,camera:g,renderer:w,controls:L,modelRoot:S,studioMaterial:P,wireMaterial:T,resetView:()=>Mf(D)};t.current=D;const N=()=>{const q=Math.max(_.clientWidth,1),W=Math.max(_.clientHeight,1);g.aspect=q/W,g.updateProjectionMatrix(),w.setSize(q,W,!1)};N();const k=new ResizeObserver(N);k.observe(_);const z=()=>{L.update(),w.render(m,g),b=requestAnimationFrame(z)};return z(),r(!0),()=>{cancelAnimationFrame(b),k.disconnect(),L.dispose(),Sc(S),P.dispose(),T.dispose(),w.dispose(),t.current=null,_.replaceChildren()}},[]),O.useEffect(()=>{const _=t.current;if(!s||!_)return;let b=!1;return o("loading"),c("正在读取模型包"),n.current.forEach(URL.revokeObjectURL),n.current=[],Sc(_.modelRoot),_.modelRoot.clear(),fn.getKigForm3DArchive(i.jobId).then(async m=>{if(b)return;if(m.data.byteLength>300*1024*1024)throw new Error("模型包超过浏览器预览限制");c("正在解包 GLB / OBJ 与纹理");const g=await fE(new Uint8Array(m.data)),w=Object.entries(g).filter(([D])=>{const N=wo(D);return N&&!N.startsWith("../")&&!N.includes("/../")});if(!w.length||w.length>512)throw new Error("模型包文件数量异常");const L=`.${i.result?.fileFormat||"glb"}`,S=w.find(([D])=>D.toLowerCase().endsWith(L));if(!S)throw new Error(`模型包中未找到 ${L.toUpperCase()} 文件`);const P=new Map;for(const[D,N]of w){const k=wo(D),z=URL.createObjectURL(new Blob([Uint8Array.from(N).buffer],{type:uE(k)}));n.current.push(z),P.set(k,z),P.set(k.split("/").pop()||k,z)}const T=new Np;T.setURLModifier(D=>{if(D.startsWith("blob:"))return D;const N=wo(D);return P.get(N)||P.get(N.split("/").pop()||N)||D});const[I,y]=S;let A;if(L===".glb"){const D=P.get(wo(I));if(!D)throw new Error("GLB 文件地址创建失败");A=await new Promise((N,k)=>{new ES(T).load(D,z=>N(z.scene),void 0,k)})}else{const D=new TextDecoder,N=new hE(T),k=w.find(([z])=>z.toLowerCase().endsWith(".mtl"));if(k){const z=new sE(T).parse(D.decode(k[1]),"");z.preload(),N.setMaterials(z)}A=N.parse(D.decode(y))}if(b){Sc(A);return}A.traverse(D=>{D instanceof cn&&(D.castShadow=!0,D.receiveShadow=!0,D.userData.kigformSourceMaterial=D.material)}),_.modelRoot.add(A),Mf(_),o("ready"),c("模型已就绪")}).catch(m=>{b||(o("error"),c(m instanceof Error?m.message:"模型加载失败"))}),()=>{b=!0,n.current.forEach(URL.revokeObjectURL),n.current=[]}},[i.jobId,i.result?.fileFormat,s]),O.useEffect(()=>{const _=t.current;_&&(_.controls.autoRotate=f)},[f]),O.useEffect(()=>{const _=t.current;_&&_.modelRoot.traverse(b=>{b instanceof cn&&(u==="studio"?b.material=_.studioMaterial:u==="wireframe"?b.material=_.wireMaterial:b.userData.kigformSourceMaterial&&(b.material=b.userData.kigformSourceMaterial))})},[u,a]),d.jsxs("div",{className:"kigform-model-preview",children:[d.jsxs("div",{className:"kigform-model-preview-toolbar",children:[d.jsxs("div",{className:"kigform-segmented",role:"group","aria-label":"模型材质显示",children:[d.jsx("button",{type:"button",className:u==="source"?"is-active":"",onClick:()=>h("source"),children:"原始材质"}),d.jsx("button",{type:"button",className:u==="studio"?"is-active":"",onClick:()=>h("studio"),children:"结构灰模"}),d.jsx("button",{type:"button",className:u==="wireframe"?"is-active":"",onClick:()=>h("wireframe"),children:"线框"})]}),d.jsxs("div",{className:"kigform-preview-actions",children:[d.jsx("button",{type:"button",className:f?"is-active":"",onClick:()=>p(_=>!_),title:"切换自动旋转",children:d.jsx(vg,{size:17})}),d.jsx("button",{type:"button",onClick:()=>t.current?.resetView(),title:"重置观察视角",children:d.jsx(Gf,{size:17})})]})]}),d.jsx("div",{ref:e,className:"kigform-model-preview-canvas"}),a!=="ready"&&d.jsxs("div",{className:`kigform-model-preview-state is-${a}`,children:[a==="loading"?d.jsx(Io,{className:"is-spinning"}):d.jsx(og,{}),d.jsx("strong",{children:a==="loading"?"准备真实 3D 模型":"模型暂时无法预览"}),d.jsx("span",{children:l})]}),a==="ready"&&d.jsxs("div",{className:"kigform-model-preview-caption",children:[d.jsx(Nc,{size:16})," 拖动旋转 · 滚轮缩放 · ",i.result?.polygonCount?.toLocaleString()," 面"]})]})}const Yp={created:"正在准备",queued:"等待处理",running:"构建中",succeeded:"可预览",failed:"生成失败",canceled:"已取消"},Ec=new Set(["created","queued","running"]);function mE(i){return i?i>=1024*1024*1024?`${(i/1024/1024/1024).toFixed(1)} GB`:i>=1024*1024?`${(i/1024/1024).toFixed(1)} MB`:`${Math.ceil(i/1024)} KB`:"-"}function gE(i){return i?new Intl.DateTimeFormat("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(i)):"-"}function xE(i){return i?new Intl.DateTimeFormat("zh-CN",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Shanghai"}).format(new Date(i)):"每日 00:00"}function _E(i){const e=Math.floor(i/60),t=i%60;return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function vE(i,e){return i?i.status==="created"||i.status==="queued"?{title:"任务已进入生成队列",description:"系统正在分配生成资源。通常需要约 5-15 分钟，复杂头壳可能需要更久。"}:i.status==="running"&&e<180?{title:"正在建立头壳基础结构",description:"正在分析轮廓、五官与主要体积关系。可以离开页面，任务会继续处理。"}:i.status==="running"&&e<480?{title:"正在完善表面与材质细节",description:"正在整理头发、配件和表面表现。通常需要约 5-15 分钟。"}:i.status==="running"?{title:"正在整理高精度模型",description:"当前任务仍在正常处理，请继续等待；复杂结构可能需要更长时间。"}:i.status==="failed"?{title:"本次生成未完成",description:"生成次数已进入自动返还流程，请稍后重新尝试。"}:i.status==="canceled"?{title:"任务已取消",description:"本次任务已停止，可重新选择精度和格式后再次提交。"}:{title:Yp[i.status],description:"模型已完成，可以预览和下载。"}:{title:"等待第一个 3D 头壳",description:"选择精度与格式后提交。完成后可以直接旋转、缩放、检查材质和下载。"}}function yE(){const i=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,""):Math.random().toString(36).slice(2);return`kigform3d:${Date.now()}:${i}`}function Ao(i,e){const t=i;return t.response?.data?.error||t.message||e}function ME({frontMasterId:i,masterVersion:e,quotaRemaining:t,onBackToFront:n,onQuotaChanged:s}){const[r,a]=O.useState([]),[o,l]=O.useState(null),[c,u]=O.useState(""),[h,f]=O.useState("low"),[p,_]=O.useState("glb"),[b,m]=O.useState(!0),[g,w]=O.useState(!1),[L,S]=O.useState(""),[P,T]=O.useState(!1),[I,y]=O.useState(""),[A,D]=O.useState(""),[N,k]=O.useState(()=>Date.now()),z=h==="medium"?30:15,q=O.useMemo(()=>r.find($=>$.jobId===c)||null,[r,c]),W=r.find($=>Ec.has($.status)),ee=o?.certified===!0,K=o?.remaining[h]??0,ce=o?.limits[h]??(h==="medium"?1:3),ue=!!o&&K<=0,ye=q?Math.max(0,Math.floor((N-Date.parse(q.createdAt))/1e3)):0,se=vE(q,ye),be=O.useCallback(async($=!1)=>{$||m(!0);try{const pe=await fn.listKigForm3DJobs(40),le=pe.data.jobs||[];l(pe.data.policy||null),a(le),u(ze=>ze&&le.some(fe=>fe.jobId===ze)?ze:le.find(fe=>Ec.has(fe.status))?.jobId||le.find(fe=>fe.status==="succeeded")?.jobId||le[0]?.jobId||""),$||D("")}catch(pe){$||D(Ao(pe,"读取 3D 生成历史失败"))}finally{$||m(!1)}},[]);O.useEffect(()=>{be()},[be]),O.useEffect(()=>{if(!W)return;const $=window.setInterval(()=>{be(!0)},8e3);return()=>window.clearInterval($)},[W?.jobId,be]),O.useEffect(()=>{if(!W)return;k(Date.now());const $=window.setInterval(()=>k(Date.now()),1e3);return()=>window.clearInterval($)},[W?.jobId]),O.useEffect(()=>{o?.certified&&(o.remaining[h]>0||(h==="low"&&o.remaining.medium>0&&f("medium"),h==="medium"&&o.remaining.low>0&&f("low")))},[o,h]);const we=async()=>{if(!i){D("请先回到正视图确认母版");return}w(!0),D(""),y("");try{const $=await fn.createKigForm3DJob({frontMasterId:i,subdivisionLevel:h,fileFormat:p,clientRequestId:yE()});a(pe=>[$.data,...pe.filter(le=>le.jobId!==$.data.jobId)]),u($.data.jobId),y("任务已提交。完成后可在生成历史中预览和下载，你可以安全离开当前页面。"),T(!1),await s?.(),await be(!0)}catch($){D(Ao($,"创建 3D 模型任务失败"))}finally{w(!1)}},Ke=async $=>{D("");try{const pe=await fn.cancelKigForm3DJob($.jobId);a(le=>le.map(ze=>ze.jobId===$.jobId?pe.data:ze)),y("任务已取消，已扣配额会按任务状态自动返还。"),await s?.(),await be(!0)}catch(pe){D(Ao(pe,"当前任务无法取消"))}},Be=async $=>{S($.jobId),D("");try{const pe=await fn.getKigForm3DDownload($.jobId),le=document.createElement("a");le.href=pe.data.url,le.download=pe.data.filename,le.rel="noopener noreferrer",document.body.appendChild(le),le.click(),le.remove()}catch(pe){D(Ao(pe,"模型下载地址签发失败"))}finally{S("")}};return d.jsxs("section",{className:"kigform-model-workspace",children:[d.jsxs("header",{className:"kigform-model-header",children:[d.jsxs("div",{children:[d.jsx("span",{children:"步骤 4 · 真实三维资产"}),d.jsx("h2",{children:"3D 头壳模型"}),d.jsx("p",{children:"以已确认正视母版生成可长期保存的 GLB 或 OBJ 模型包，并在浏览器内进行真实网格旋转与检查。"})]}),d.jsxs("div",{className:"kigform-model-header-actions",children:[d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:n,children:[d.jsx(lg,{size:17})," 返回修改母版"]}),d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:()=>{be()},disabled:b,title:"刷新任务状态",children:d.jsx(cg,{size:17,className:b?"is-spinning":""})})]})]}),A&&d.jsx("div",{className:"kigform-model-notice is-error",children:A}),I&&d.jsxs("div",{className:"kigform-model-notice is-success",children:[d.jsx(dg,{size:17})," ",I]}),o&&!ee&&d.jsxs("div",{className:"kigform-model-notice is-certification",children:[d.jsx(Nh,{size:17}),d.jsxs("span",{children:[d.jsx("strong",{children:"完成身份认证后可生成 3D 头壳"}),d.jsx("small",{children:"认证用户可使用每日低精度 3 次、中精度 1 次的生成额度。"})]}),d.jsx("a",{href:"/profile/certification",children:"前往认证"})]}),d.jsxs("div",{className:"kigform-model-grid",children:[d.jsxs("aside",{className:"kigform-model-config","aria-label":"3D 模型生成设置",children:[d.jsxs("div",{className:"kigform-config-master",children:[d.jsx(Nh,{size:19}),d.jsxs("span",{children:[d.jsxs("strong",{children:["正视母版 v",e||1]}),d.jsx("small",{children:i?"已锁定为本次生成基准":"尚未确认母版"})]})]}),d.jsxs("fieldset",{disabled:!!W||g||!i||!ee,children:[d.jsx("legend",{children:"网格精度"}),d.jsxs("button",{type:"button",disabled:!!o&&o.remaining.low<=0,className:h==="low"?"is-active":"",onClick:()=>f("low"),children:[d.jsxs("span",{children:[d.jsx("strong",{children:"低精度"}),d.jsx("small",{children:"100,000 面 · 优先保留五官、轮廓与纹理细节"})]}),d.jsxs("b",{children:["今日 ",o?.remaining.low??"-","/",o?.limits.low??3]})]}),d.jsxs("button",{type:"button",disabled:!!o&&o.remaining.medium<=0,className:h==="medium"?"is-active":"",onClick:()=>f("medium"),children:[d.jsxs("span",{children:[d.jsx("strong",{children:"中精度"}),d.jsx("small",{children:"500,000 面 · 细节检查与后续制作"})]}),d.jsxs("b",{children:["今日 ",o?.remaining.medium??"-","/",o?.limits.medium??1]})]})]}),d.jsxs("fieldset",{disabled:!!W||g||!i||!ee,children:[d.jsx("legend",{children:"模型格式"}),d.jsxs("div",{className:"kigform-format-options",children:[d.jsxs("button",{type:"button",className:p==="glb"?"is-active":"",onClick:()=>_("glb"),children:[d.jsx(Nc,{size:18}),d.jsx("strong",{children:"GLB"}),d.jsx("small",{children:"推荐网页预览"})]}),d.jsxs("button",{type:"button",className:p==="obj"?"is-active":"",onClick:()=>_("obj"),children:[d.jsx(pg,{size:18}),d.jsx("strong",{children:"OBJ"}),d.jsx("small",{children:"通用制作交换"})]})]})]}),d.jsxs("div",{className:"kigform-cost-summary",children:[d.jsx("span",{children:"本次生成"}),d.jsxs("strong",{children:[z," 次"]}),d.jsxs("small",{children:["今日该精度剩余 ",K,"/",ce," 次，",xE(o?.resetsAt)," 重置；账户剩余 ",t??"-"," 次。"]})]}),d.jsxs("button",{type:"button",className:"kigcraft-primary kigform-generate-button",disabled:!!W||g||!i||!ee||ue||t!=null&&t<z,onClick:()=>T(!0),children:[d.jsx(Il,{size:18}),W?"已有任务处理中":ee?ue?"今日该精度次数已用完":`消耗 ${z} 次并生成`:"完成身份认证后可生成"]}),!i&&d.jsx("small",{className:"kigform-config-blocker",children:"只有确认正视母版后才能生成 3D 模型。"}),ee&&ue&&d.jsx("small",{className:"kigform-config-blocker",children:"今日该精度生成次数已用完，将在北京时间 00:00 重置。"})]}),d.jsxs("main",{className:"kigform-model-stage",children:[q?.status==="succeeded"&&q.result?.downloadReady?d.jsx(pE,{job:q}):d.jsxs("div",{className:"kigform-model-stage-empty",children:[q&&["created","queued","running"].includes(q.status)?d.jsx(Io,{className:"is-spinning"}):d.jsx(Nc,{}),d.jsx("strong",{children:se.title}),d.jsx("span",{children:se.description}),q&&Ec.has(q.status)&&d.jsxs("div",{className:"kigform-model-progress-meta","aria-live":"polite",children:[d.jsxs("span",{children:[d.jsx(Bh,{size:14})," 已处理 ",_E(ye)]}),d.jsx("span",{children:"预计用时 5-15 分钟"})]}),q?.status==="queued"&&d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>{Ke(q)},children:[d.jsx(Ih,{size:17})," 取消排队任务"]})]}),q?.status==="succeeded"&&d.jsxs("div",{className:"kigform-model-stage-meta",children:[d.jsx("span",{children:q.result?.fileFormat.toUpperCase()}),d.jsx("span",{children:q.result?.subdivisionLevel==="medium"?"中精度":"低精度"}),d.jsx("span",{children:mE(q.result?.archiveSize)}),d.jsxs("button",{type:"button",onClick:()=>{Be(q)},disabled:L===q.jobId,children:[d.jsx(ig,{size:17})," ",L===q.jobId?"准备下载":"下载模型包"]})]})]}),d.jsxs("aside",{className:"kigform-model-history","aria-label":"3D 模型生成历史",children:[d.jsxs("div",{className:"kigform-history-title",children:[d.jsx(Oh,{size:18}),d.jsx("strong",{children:"生成历史"}),d.jsx("span",{children:r.length})]}),b&&!r.length?d.jsxs("div",{className:"kigform-history-empty",children:[d.jsx(Io,{className:"is-spinning"})," 正在读取历史"]}):r.length?d.jsx("div",{className:"kigform-history-list",children:r.map($=>d.jsxs("button",{type:"button",className:$.jobId===c?"is-active":"",onClick:()=>u($.jobId),children:[d.jsxs("span",{className:`kigform-job-status is-${$.status}`,children:[d.jsx(Bh,{size:14})," ",Yp[$.status]]}),d.jsxs("strong",{children:[$.result?.fileFormat?.toUpperCase()||"3D"," · ",$.result?.subdivisionLevel==="medium"?"中精度":"低精度"]}),d.jsxs("small",{children:[gE($.createdAt)," · ",$.quotaCost," 次"]})]},$.jobId))}):d.jsxs("div",{className:"kigform-history-empty",children:[d.jsx(Oh,{})," 尚无 3D 生成记录"]})]})]}),P&&d.jsx("div",{className:"kigform-confirm-backdrop",role:"presentation",onMouseDown:()=>!g&&T(!1),children:d.jsxs("div",{className:"kigform-confirm-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"kigform-confirm-title",onMouseDown:$=>$.stopPropagation(),children:[d.jsx("button",{type:"button",className:"kigform-confirm-close",onClick:()=>T(!1),title:"关闭",children:d.jsx(Ih,{size:18})}),d.jsx(Il,{className:"kigform-confirm-mark"}),d.jsx("h3",{id:"kigform-confirm-title",children:"确认生成 3D 头壳"}),d.jsxs("p",{children:["将使用正视母版 v",e||1," 生成 ",h==="medium"?"500,000":"100,000"," 面 ",p.toUpperCase()," 模型。"]}),d.jsxs("div",{children:[d.jsx("span",{children:"本次消耗"}),d.jsxs("strong",{children:[z," 次 AI 配额"]})]}),d.jsx("small",{children:"任务进入正式构建前可以取消；开始构建后需要等待处理完成。"}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>{we()},disabled:g,children:[g?d.jsx(Io,{className:"is-spinning"}):d.jsx(Il,{}),g?"正在提交":"确认并开始生成"]})]})})]})}function bE({assets:i,onDownload:e}){const[t,n]=O.useState("front");if(O.useEffect(()=>{i.some(r=>r.view===t)||i[0]&&n(i[0].view)},[i,t]),!i.length)return null;const s=i.find(r=>r.view===t)||i[0];return d.jsxs("section",{className:"kigcraft-view-assets","aria-labelledby":"kigcraft-view-assets-title",children:[d.jsxs("div",{className:"kigcraft-view-assets-head",children:[d.jsxs("div",{children:[d.jsx("h3",{id:"kigcraft-view-assets-title",children:"逐视图检查"}),d.jsx("p",{children:"选择一个视角在主舞台检查，缩略图保持固定位置，便于快速对照。"})]}),d.jsxs("span",{children:[i.length,"/4"]})]}),d.jsxs("div",{className:"kigcraft-view-inspector",children:[d.jsxs("div",{className:"kigcraft-view-inspector-stage",children:[d.jsx("img",{src:s.url,alt:`${s.label}头壳视图`}),d.jsx("span",{children:s.label}),d.jsxs("div",{children:[d.jsx("a",{href:s.url,target:"_blank",rel:"noreferrer",children:"查看原图"}),d.jsx("button",{type:"button",onClick:()=>{e(s)},children:"下载当前视图"})]})]}),d.jsx("div",{className:"kigcraft-view-assets-grid",role:"tablist","aria-label":"四个独立视角",children:i.map(r=>d.jsxs("button",{type:"button",role:"tab","aria-selected":r.view===s.view,className:r.view===s.view?"is-active":"",onClick:()=>n(r.view),children:[d.jsx("img",{src:r.url,alt:"",loading:"lazy"}),d.jsx("strong",{children:r.label})]},r.view))})]})]})}function bf(i){return Math.min(1,Math.max(0,i))}function SE(i,e,t,n){return{x:bf(i/Math.max(1,t)),y:bf(e/Math.max(1,n))}}function Aa(i,e,t){return{x:i.x*e,y:i.y*t}}function EE(i,e,t,n){const s=Aa(e.start,t,n),r=Aa(e.end,t,n),a=Math.min(s.x,r.x),o=Math.min(s.y,r.y),l=Math.max(1,Math.abs(r.x-s.x)),c=Math.max(1,Math.abs(r.y-s.y)),u=Math.max(2,e.strokeWidth*.55);i.save(),i.strokeStyle=e.color,i.fillStyle=e.color,i.lineWidth=u,i.lineCap="round",i.lineJoin="round",i.setLineDash([Math.max(4,u*1.4),Math.max(4,u*1.15)]),i.beginPath(),e.kind==="ellipse"?i.ellipse(a+l/2,o+c/2,l/2,c/2,0,0,Math.PI*2):i.rect(a,o,l,c),i.globalAlpha=.12,i.fill(),i.globalAlpha=1,i.stroke(),i.restore()}function TE(i,e,t,n){if(!e.points.length)return;i.save(),i.strokeStyle=e.color,i.fillStyle=e.color,i.lineWidth=e.strokeWidth,i.lineCap="round",i.lineJoin="round",i.beginPath();const s=Aa(e.points[0],t,n);i.moveTo(s.x,s.y);for(let r=1;r<e.points.length;r+=1){const a=e.points[r],o=Aa(a,t,n);i.lineTo(o.x,o.y)}e.points.length===1?(i.arc(s.x,s.y,e.strokeWidth/2,0,Math.PI*2),i.fill()):i.stroke(),i.restore()}function wE(i,e,t,n){const s=Aa(e.point,t,n),r=Math.max(12,e.fontSize);i.save(),i.font=`800 ${r}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,i.textAlign=s.x>t*.72?"right":"left",i.textBaseline=s.y>n*.86?"bottom":"top",i.lineJoin="round",i.lineWidth=Math.max(3,r*.16),i.strokeStyle=e.color.toLowerCase()==="#ffffff"?"rgba(15, 23, 42, 0.9)":"rgba(255, 255, 255, 0.94)",i.fillStyle=e.color,i.strokeText(e.text,s.x,s.y),i.fillText(e.text,s.x,s.y),i.restore()}function Tc(i,e){const t=i.getBoundingClientRect(),n=Math.max(1,parseFloat(i.style.width)||t.width||1),s=Math.max(1,parseFloat(i.style.height)||t.height||1),r=Math.max(1,i.width/n),a=i.getContext("2d");a&&(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,i.width,i.height),a.setTransform(r,0,0,r,0,0),e.forEach(o=>{o.kind==="ellipse"||o.kind==="rect"?EE(a,o,n,s):o.kind==="brush"?TE(a,o,n,s):o.kind==="text"&&wE(a,o,n,s)}))}function Sf(i){return i.map((e,t)=>{if(e.kind==="text")return`${t+1}. 文字“${e.text}”位于 ${Math.round(e.point.x*100)}%, ${Math.round(e.point.y*100)}%`;if(e.kind==="brush"){const o=e.points[Math.floor(e.points.length/2)]||e.points[0];return`${t+1}. 画笔标记位于 ${Math.round((o?.x??.5)*100)}%, ${Math.round((o?.y??.5)*100)}%`}const n=Math.min(e.start.x,e.end.x),s=Math.min(e.start.y,e.end.y),r=Math.abs(e.end.x-e.start.x),a=Math.abs(e.end.y-e.start.y);return`${t+1}. ${e.kind==="ellipse"?"圈选":"方框"}区域 ${Math.round(n*100)}%, ${Math.round(s*100)}%, 宽 ${Math.round(r*100)}%, 高 ${Math.round(a*100)}%`}).join("；")}const Kp=["front","side","back","expression","accessory"];function Ef(i){return Kp.find(e=>!i.has(e))||"supplemental"}function AE(i,e,t=null){const n=new Set(i);return Array.from({length:Math.max(0,e)},(s,r)=>{const a=t?t==="front"&&r>0?Ef(n):t:Ef(n);return n.add(a),a})}function fs(i,e,t,n){return{x:i*t,y:e*n}}function ih(i,e){return{leftEye:fs(i,e,.42,.42),rightEye:fs(i,e,.58,.42),chin:fs(i,e,.5,.7),jawLeft:fs(i,e,.39,.6),jawRight:fs(i,e,.61,.6),mouthCenter:fs(i,e,.5,.57),mouthLeft:fs(i,e,.47,.57),mouthRight:fs(i,e,.53,.57)}}function fl(i){const e=ih(1,1),t=i.leftEye??e.leftEye,n=i.rightEye??e.rightEye,s=i.chin??e.chin,r=i.jawLeft??e.jawLeft,a=i.jawRight??e.jawRight,o={x:(t.x+n.x)/2,y:(t.y+n.y)/2},l=Math.max(.1,Math.abs(s.y-o.y)),c=Math.max(.08,Math.abs(a.x-r.x)),u=i.mouthCenter??{x:(o.x+s.x)/2,y:o.y+l*.52},h=Math.max(.025,c*.18);return{leftEye:t,rightEye:n,chin:s,jawLeft:r,jawRight:a,mouthCenter:u,mouthLeft:i.mouthLeft??{x:u.x-h,y:u.y},mouthRight:i.mouthRight??{x:u.x+h,y:u.y},eyeRegions:i.eyeRegions}}const Zp=["faceWidth","faceLength","midFaceLength","smallFace","cheekbone","chinLength","chinPoint","vLine","jawAngle"],RE=["eyeSize","eyeHeight","eyeWidth","eyeDistance","eyeVertical","eyeTilt","eyeRegionScale"],Jp=["mouthHorizontal","mouthVertical","mouthWidth","mouthSize","mouthSmile"],CE={eyeDistance:0,eyeHeight:0,eyeRegionScale:20,eyeSize:0,eyeTilt:0,eyeVertical:0,eyeWidth:0},PE={cheekbone:{max:.4,min:-.4,precision:3},chinLength:{max:.4,min:-.4,precision:3},chinPoint:{max:.4,min:-.4,precision:3},faceLength:{max:.6,min:-.6,precision:3},faceWidth:{max:.4,min:-.4,precision:3},jawAngle:{max:.4,min:-.4,precision:3},midFaceLength:{max:.4,min:-.4,precision:3},smallFace:{max:.4,min:0,precision:3},vLine:{max:.4,min:0,precision:3}},LE={eyeDistance:{max:.1,min:-.1,precision:4},eyeHeight:{max:.6,min:-.6,precision:4},eyeRegionScale:{max:120,min:-80,precision:0},eyeSize:{max:.6,min:-.6,precision:4},eyeTilt:{max:1,min:-1,precision:4},eyeVertical:{max:.1,min:-.1,precision:4},eyeWidth:{max:1,min:-1,precision:4}},NE={mouthHorizontal:{max:.05,min:-.05,precision:4},mouthVertical:{max:.06,min:-.06,precision:4},mouthWidth:{max:.45,min:-.45,precision:4},mouthSize:{max:.35,min:-.35,precision:4},mouthSmile:{max:.08,min:-.08,precision:4}};function Tf(i){return Object.fromEntries(i.map(e=>[e,0]))}function IE(){return{accessoryNote:"",calibrationMode:!1,manualLandmarkEdit:!1,preserveHairEdges:!0,preserveSkinTexture:!0,protectAccessories:!0,protectBangs:!0,refineIntensity:.35,regions:[]}}function Qp(){return{face:Tf(Zp),eyes:{...CE},mouth:Tf(Jp),liquify:[],annotations:[],details:IE(),landmarks:void 0}}function DE(i){const e=Qp();if(!i)return e;const t=i.eyes,s=t?.eyeSize===void 0&&typeof t?.eyeHeight=="number"?{...e.eyes,...t,eyeHeight:0,eyeSize:t.eyeHeight}:{...e.eyes,...t};return{face:UE({...e.face,...i.face}),eyes:kE(s),mouth:FE({...e.mouth,...i.mouth}),liquify:Array.isArray(i.liquify)?i.liquify:[],annotations:Array.isArray(i.annotations)?i.annotations:[],details:{...e.details,...i.details,regions:Array.isArray(i.details?.regions)?i.details.regions:[]},landmarks:i.landmarks?fl(i.landmarks):void 0}}function sh(i,e){return Math.min(e.max,Math.max(e.min,Number(i.toFixed(e.precision))))}function UE(i){return Object.fromEntries(Zp.map(e=>[e,sh(i[e],PE[e])]))}function kE(i){return Object.fromEntries(RE.map(e=>[e,sh(i[e],LE[e])]))}function FE(i){return Object.fromEntries(Jp.map(e=>[e,sh(i[e],NE[e])]))}function wf(i){return Math.min(1,Math.max(0,Number(i.toFixed(4))))}function Af(i,e,t){return Math.min(t,Math.max(e,Number(i.toFixed(4))))}function OE(i){return Math.min(1,Math.max(-1,Number(i.toFixed(2))))}function tl(i){return Math.min(.35,Math.max(-.35,Number(i.toFixed(4))))}function em(i){return Math.min(1,Math.max(0,Number(i.toFixed(4))))}function rh({x:i,y:e,radius:t,strength:n,mode:s,deltaX:r,deltaY:a,scale:o}){return{...r===void 0?{}:{deltaX:tl(r)},...a===void 0?{}:{deltaY:tl(a)},x:wf(i),y:wf(e),...o===void 0?{}:{scale:OE(o)},radius:Af(t,4,240),strength:Af(n,0,1),mode:s}}function BE({from:i,radius:e,strength:t=1,to:n}){const s=tl(n.x-i.x),r=tl(n.y-i.y),a=Math.hypot(s,r);return rh({deltaX:s,deltaY:r,mode:"warp",radius:e,strength:a>0?t:0,x:(i.x+n.x)/2,y:(i.y+n.y)/2})}function zE(i){const e=fl(i.landmarks??ih(1,1)),t=(e.leftEye.x+e.rightEye.x)/2;return em((e.chin.x+e.mouthCenter.x+t)/3)}function HE(i,e){return i.mode!=="warp"?i:rh({...i,deltaX:-(i.deltaX??0),deltaY:i.deltaY??0,x:em(e)*2-i.x,y:i.y})}const VE={chin:"chin","face-left":"jawLeft","face-right":"jawRight","left-eye":"leftEye","mouth-center":"mouthCenter","mouth-left":"mouthLeft","mouth-right":"mouthRight","right-eye":"rightEye"};function Gi(i,e,t){return Math.min(t,Math.max(e,i))}function nl(i,e=0){return Number.isFinite(i)?i:e}function zs(i,e=4){return Number(i.toFixed(e))}function GE(i){return{x:zs(Gi(nl(i.x),0,1)*100,2),y:zs(Gi(nl(i.y),0,1)*100,2)}}function il(i){return zs(Gi(nl(i),0,100)/100)}function un(i,e,t,n,s){return zs(Gi((i.get(e)??0)/t,n,s),4)}function jE(i){const e=ih(1,1),t={};return i.forEach(n=>{const s=VE[n.id];if(!s)return;const r={x:il(n.x),y:il(n.y)};t[s]=r}),fl({...e,...t})}function WE(i,e){const t=fl(e),n={x:(t.leftEye.x+t.rightEye.x)/2,y:(t.leftEye.y+t.rightEye.y)/2},s=Math.max(.08,Math.abs(t.rightEye.x-t.leftEye.x)),r={x:(t.jawLeft.x+t.jawRight.x)/2,y:(t.jawLeft.y+t.jawRight.y)/2},a=Gi((n.x+t.chin.x+r.x)/3,.04,.96),o=Math.max(.12,Math.abs(t.chin.y-n.y)),l=Math.max(.035,s*.27),c=r.y+(t.chin.y-r.y)*.5,u={chin:t.chin,"face-left":t.jawLeft,"face-right":t.jawRight,"left-eye":t.leftEye,"left-eye-tail":{x:t.leftEye.x-l,y:t.leftEye.y},"liquify-fringe":{x:a,y:n.y-o*.42},"liquify-jaw":{x:a,y:c},"mouth-center":t.mouthCenter,"mouth-left":t.mouthLeft,"mouth-right":t.mouthRight,"right-eye":t.rightEye,"right-eye-tail":{x:t.rightEye.x+l,y:t.rightEye.y},"hair-volume":{x:a,y:n.y-o*.48},"jaw-soften":{x:a,y:c}};return i.map(h=>{const f=u[h.id];if(!f)return h;const p=GE(f);return{...h,x:p.x,y:p.y}})}function XE({anchors:i,liquifyStrokes:e=[],localRegenerate:t,tuningParams:n,wigCleanup:s}){const r=new Map(n.map(p=>[p.id,nl(p.value)])),a=jE(i),o=Gi((r.get("liquify-strength")??0)/100,0,1),l=Gi(r.get("liquify-radius")??36,8,160),c=Gi((r.get("liquify-softness")??52)/100,0,1),u=i.filter(p=>p.tool==="liquify"),h=zs(o*(.55+c*.45),4),f=o>0&&u.length?u.map(p=>{const _=p.id.includes("jaw")||p.id.includes("chin"),b={radius:zs(l*(_?1.18:1),2),strength:zs(o*(_?.74:1),4),x:il(p.x),y:il(p.y)};return _?{...b,mode:"shrink"}:{...b,mode:"scale",scale:h}}):[];return DE({...Qp(),details:{accessoryNote:"",calibrationMode:!1,manualLandmarkEdit:!0,preserveHairEdges:s,preserveSkinTexture:!0,protectAccessories:!0,protectBangs:!0,refineIntensity:t?.58:.35,regions:[]},face:{cheekbone:un(r,"jaw-softness",100,-.4,.4),chinLength:un(r,"chin-length",100,-.4,.4),chinPoint:0,faceLength:un(r,"face-length",100,-.6,.6),faceWidth:un(r,"face-width",100,-.4,.4),jawAngle:un(r,"jaw-softness",-100,-.4,.4),midFaceLength:0,smallFace:Math.max(0,un(r,"face-width",-140,0,.4)),vLine:Math.max(0,un(r,"chin-length",-120,0,.4))},eyes:{eyeDistance:un(r,"eye-distance",240,-.1,.1),eyeHeight:un(r,"eye-height",100,-.6,.6),eyeRegionScale:Gi(r.get("eye-size")??0,-80,120),eyeSize:un(r,"eye-size",100,-.6,.6),eyeTilt:un(r,"eye-tilt",18,-1,1),eyeVertical:un(r,"eye-height",240,-.1,.1),eyeWidth:un(r,"eye-width",35,-1,1)},landmarks:a,liquify:[...f,...e],mouth:{mouthHorizontal:0,mouthSize:un(r,"mouth-open",100,-.35,.35),mouthSmile:un(r,"mouth-curve",300,-.08,.08),mouthVertical:un(r,"lower-face-softness",300,-.06,.06),mouthWidth:un(r,"mouth-width",100,-.45,.45)}})}function qE(i){return[["faceWidth",i.face.faceWidth],["faceLength",i.face.faceLength],["chinLength",i.face.chinLength],["eyeSize",i.eyes.eyeSize],["eyeWidth",i.eyes.eyeWidth],["eyeDistance",i.eyes.eyeDistance],["eyeTilt",i.eyes.eyeTilt],["mouthWidth",i.mouth.mouthWidth],["mouthSize",i.mouth.mouthSize],["mouthSmile",i.mouth.mouthSmile]].filter(([,t])=>Math.abs(t)>1e-4).map(([t,n])=>`${t}: ${n}`)}const wc={themes:[],editorActions:[],headReferenceTemplates:[],categories:[],aspectRatios:[{id:"1:1",name:"1:1",icon:"□"},{id:"3:4",name:"3:4",icon:"▯"},{id:"4:3",name:"4:3",icon:"▭"}],workflowModes:[]},$E=1200,Ac="kighub.cn",Rf=72,Rc=0,YE="warp",Cf=.2,KE=[{id:"kigcraft-front-design",name:"KigCraft 正视图",icon:"F",description:"根据角色参考图生成 Kigurumi 头壳正视预览。",category:"head_reference",workflowMode:"head_reference",defaultAspectRatio:"3:4"},{id:"kigcraft-front-revision",name:"Kig配置 正视图修订",icon:"R",description:"根据编辑标注和补充说明重绘正视图。",category:"head_reference",workflowMode:"head_reference",defaultAspectRatio:"3:4"},{id:"kigcraft-turnaround",name:"KigCraft 四视图",icon:"4",description:"从正视图和参考素材生成一致的头壳四视图。",category:"head_reference",workflowMode:"head_reference",defaultAspectRatio:"4:3"},{id:"kigcraft-geometry-analysis",name:"KigCraft 3D 几何辅助",icon:"3D",description:"从已确认正视母版生成深度、法线和轮廓辅助图。",category:"head_reference",workflowMode:"head_reference",defaultAspectRatio:"16:9"}],ZE=[{id:"public-a1",displayName:"头壳参考 A1",icon:"A",description:"稳定整理角色结构和头壳预览。"},{id:"public-b2",displayName:"头壳参考 B2",icon:"B",description:"更重视五官、发型和配件细节。"},{id:"public-c3",displayName:"头壳参考 C3",icon:"C",description:"快速尝试不同参考方向。"}],vr=[{id:"references",title:"参考素材",desc:"上传角色正面、侧面、背面、表情与配件图。"},{id:"details",title:"细节确认",desc:"锁定发型、眼睛、表情、耳朵、头饰与避坑点。"},{id:"front",title:"正视图",desc:"生成、标注、微调并重新生成正视预览。"},{id:"turnaround",title:"输出资产",desc:"基于已确认正视母版生成四视图，或创建可预览与下载的真实三维头壳。"}],yr=[{id:"front",label:"正面",purpose:"角色身份与五官比例",required:!0},{id:"side",label:"侧面",purpose:"耳后、鬓角与侧面轮廓"},{id:"back",label:"背面",purpose:"后脑、发长与背面结构"},{id:"expression",label:"表情",purpose:"眼神、嘴型与情绪"},{id:"accessory",label:"配件",purpose:"发饰、耳机与特殊元素"},{id:"supplemental",label:"补充细节",purpose:"局部特写与其他证据"}],Ro={hair:"发型",eyes:"眼睛",expression:"表情",ears:"耳朵",headwear:"头饰",accessory:"配件",face:"脸型",avoid:"避免",other:"其他"},JE=[{id:"hair",kind:"hair",label:"发型与发色",description:"",locked:!0},{id:"eyes",kind:"eyes",label:"眼睛与瞳色",description:"",locked:!0},{id:"expression",kind:"expression",label:"表情气质",description:"",locked:!0},{id:"ears",kind:"ears",label:"耳朵/兽耳",description:"",locked:!1},{id:"headwear",kind:"headwear",label:"头饰/发饰",description:"",locked:!1},{id:"accessory",kind:"accessory",label:"其他配件",description:"",locked:!1},{id:"avoid",kind:"avoid",label:"不要改变",description:"",locked:!0}],QE=[{id:"slice-head",kind:"face",label:"完整头部",description:"确认头部轮廓、脸颊比例、发型外轮廓和耳机/头饰整体参考。",cropX:50,cropY:44,zoom:1.18,locked:!0},{id:"slice-hair-front",kind:"hair",label:"刘海与顶发",description:"锁定刘海分叉、遮挡眉眼的位置、发束层次和顶部高光。",cropX:48,cropY:20,zoom:2.05,locked:!0},{id:"slice-eyes",kind:"eyes",label:"双眼与瞳色",description:"保留眼型、左右瞳色、睫毛方向、虹膜高光和眼距。",cropX:50,cropY:43,zoom:2.42,locked:!0},{id:"slice-mouth",kind:"expression",label:"嘴巴与脸红",description:"确认嘴型弧度、张合程度、脸颊红晕和整体表情气质。",cropX:50,cropY:60,zoom:2.58,locked:!0},{id:"slice-left-accessory",kind:"accessory",label:"左侧配件",description:"保留画面左侧耳机、发饰或侧发的形状、颜色和遮挡关系。",cropX:22,cropY:43,zoom:2.34,locked:!1},{id:"slice-right-accessory",kind:"headwear",label:"右侧配件",description:"保留画面右侧耳机、发饰、发束边缘和发光装饰。",cropX:78,cropY:43,zoom:2.34,locked:!1}],Cc={brushColor:"#38bdf8",brushSize:12,note:"",faceWidth:0,eyeScale:0,mouthCurve:0,wigCleanup:!0,localRegenerate:!1},Pc=[{id:"annotate",label:"标注",desc:"圈选需要保留、修正或重点观察的区域。",icon:"brush"},{id:"face",label:"脸型",desc:"调整脸宽、下巴、颌线和头部轮廓。",icon:"face"},{id:"eyes",label:"眼睛",desc:"调整眼睛大小、高度、宽度、距离和倾斜角。",icon:"eye"},{id:"mouth",label:"嘴巴",desc:"调整嘴型、开合、弧度和下半脸表情。",icon:"smile"},{id:"liquify",label:"液化",desc:"控制局部推拉、柔化和细节保持强度。",icon:"wand"}],Co=[{id:"face-left",tool:"face",label:"左脸颊",x:34,y:58,color:"#60a5fa"},{id:"face-right",tool:"face",label:"右脸颊",x:66,y:58,color:"#60a5fa"},{id:"chin",tool:"face",label:"下巴",x:50,y:76,color:"#60a5fa"},{id:"left-eye",tool:"eyes",label:"左眼",x:41,y:49,color:"#22d3ee"},{id:"right-eye",tool:"eyes",label:"右眼",x:59,y:49,color:"#22d3ee"},{id:"left-eye-tail",tool:"eyes",label:"左眼尾",x:35,y:48,color:"#22d3ee"},{id:"right-eye-tail",tool:"eyes",label:"右眼尾",x:65,y:48,color:"#22d3ee"},{id:"mouth-left",tool:"mouth",label:"左嘴角",x:45,y:66,color:"#f97316"},{id:"mouth-right",tool:"mouth",label:"右嘴角",x:55,y:66,color:"#f97316"},{id:"mouth-center",tool:"mouth",label:"嘴型中心",x:50,y:66,color:"#f97316"},{id:"liquify-fringe",tool:"liquify",label:"刘海压线",x:50,y:34,color:"#a855f7"},{id:"liquify-jaw",tool:"liquify",label:"下颌柔化",x:50,y:70,color:"#a855f7"}];function Rd(i){const e=`${i.id} ${i.displayName} ${i.icon} ${i.description}`.toLowerCase();return i.id.toLowerCase()==="public-a1"||e.includes("头壳参考 a1")||e.includes("星绘 a1")?1e3:e.includes("gpt-image-2")||e.includes("gpt image 2")||e.includes("gpt_image_2")?100:e.includes("image2")||e.includes("image-2")||e.includes("image_2")?92:e.includes("gpt")&&e.includes("image")?86:e.includes("openai")?74:e.includes("gpt")?68:0}function eT(i){return[...i].map(e=>({model:e,score:Rd(e)})).sort((e,t)=>t.score-e.score)[0]?.model||i[0]}function Po(i){if(!i)return 1;const e=Number(i.quotaCost||0);if(e>1)return Math.max(1,e);const t=`${i.id} ${i.displayName}`.toLowerCase();return i.id==="public-b2"||t.includes("pro")?3:1}function Lo(i,e,t,n){const s=Je(t,3,94),r=Je(n,3,94);return{height:`${r}%`,left:`${Je(i,2,98-s)}%`,top:`${Je(e,2,98-r)}%`,width:`${s}%`}}function tm(i,e,t,n){const s=Math.max(1,i),r=Math.max(1,e),a=Math.max(1,t),o=Math.max(1,n),l=Math.min(s/a,r/o),c=a*l,u=o*l;return{left:(s-c)/2,top:(r-u)/2,width:c,height:u}}function tT(i){return i?{height:`${i.height}px`,left:`${i.left}px`,top:`${i.top}px`,width:`${i.width}px`}:{}}function nT(i,e){const t=e.getBoundingClientRect(),n=parseFloat(e.style.width)||t.width||1,s=parseFloat(e.style.height)||t.height||1;return{x:(i.clientX-t.left)/Math.max(1,t.width)*n,y:(i.clientY-t.top)/Math.max(1,t.height)*s}}function iT(i){const e=new Map(i.map(h=>[h.id,h])),t=e.get("left-eye"),n=e.get("right-eye"),s=e.get("mouth-left"),r=e.get("mouth-right"),a=e.get("mouth-center"),o=e.get("face-left"),l=e.get("face-right"),c=e.get("chin"),u=[];if(o&&l&&c&&t&&n){const h=Math.min(t.y,n.y),f=Je(c.y-h,18,28)*.76,p=Math.min(o.x,l.x)-8,_=Math.max(o.x,l.x)+8,b=h-f,m=c.y+7;u.push({id:"face-guide",kind:"face",style:Lo(p,b,_-p,m-b)})}if(t&&n){const h=Math.abs(n.x-t.x),f=Je(h*.66,9.5,18),p=Je(h*.36,5.4,9.5);u.push({id:"left-eye-guide",kind:"eye",style:Lo(t.x-f/2,t.y-p/2,f,p)}),u.push({id:"right-eye-guide",kind:"eye",style:Lo(n.x-f/2,n.y-p/2,f,p)})}if(a||s&&r){const h=a?.x??(s.x+r.x)/2,f=a?.y??(s.y+r.y)/2,p=s&&r?Je(Math.abs(r.x-s.x)+5,8,18):10,_=Je(p*.42,4.2,8);u.push({id:"mouth-guide",kind:"mouth",style:Lo(h-p/2,f-_/2,p,_)})}return u}function br(i){return{sourceRefId:i,x:50,y:48,width:58,height:68,rotation:0,confidence:36,method:"fallback",confirmed:!1,updatedAt:Date.now()}}function sT(i,e){const t=(e.box.x+e.box.width/2)/e.imageWidth*100,n=(e.box.y+e.box.height/2)/e.imageHeight*100,s=Je(e.box.width/e.imageWidth*100*1.82,34,88),r=Je(e.box.height/e.imageHeight*100*2.08,38,92);return{sourceRefId:i,x:Je(t,s/2+2,98-s/2),y:Je(n-r*.1,r/2+2,98-r/2),width:s,height:r,rotation:0,confidence:e.usedFallback?42:Je(Math.round(e.score*100),48,96),method:e.usedFallback?"fallback":"vision",confirmed:!1,updatedAt:Date.now()}}function Pf(i){const e=Je(i.width,28,92),t=Je(i.height,34,96);return{...i,width:e,height:t,x:Je(i.x,e/2+2,98-e/2),y:Je(i.y,t/2+2,98-t/2),rotation:Je(i.rotation,-18,18)}}async function Lf(i){const e=await Ir(i.previewUrl),{detectAnimeFaceBox:t}=await ma(),n=await t(e);return n?sT(i.id,n):br(i.id)}function Nf(i){return i?i.confirmed?"已确认":i.method==="vision"?"本地识别建议":i.method==="manual"?"人工微调":"启发式建议":"等待参考图"}function rT(i){return i?`头部范围:中心${Math.round(i.x)},${Math.round(i.y)};宽${Math.round(i.width)}高${Math.round(i.height)};${i.confirmed?"用户已确认":"待确认"}`:""}function aT(i,e){if(!e)return i;const t=Je(108/Math.max(e.width,e.height),1.1,1.78),n=Je(156/e.width,1.65,2.82),s=Je(142/e.width,1.5,2.72);return i.id==="slice-head"?{...i,cropX:e.x,cropY:e.y,zoom:t}:i.id==="slice-hair-front"?{...i,cropX:e.x,cropY:Je(e.y-e.height*.32,5,95),zoom:Je(n*.94,1.45,2.64)}:i.id==="slice-eyes"?{...i,cropX:e.x,cropY:Je(e.y-e.height*.08,5,95),zoom:n}:i.id==="slice-mouth"?{...i,cropX:e.x,cropY:Je(e.y+e.height*.2,5,96),zoom:Je(n*1.06,1.7,3)}:i.id==="slice-left-accessory"?{...i,cropX:Je(e.x-e.width*.42,5,95),cropY:Je(e.y-e.height*.02,5,95),zoom:s}:i.id==="slice-right-accessory"?{...i,cropX:Je(e.x+e.width*.42,5,95),cropY:Je(e.y-e.height*.02,5,95),zoom:s}:i}const Mr=[{id:"face-width",tool:"face",label:"脸型宽度",value:0,min:-35,max:35,step:1,unit:"%"},{id:"face-length",tool:"face",label:"脸部长度",value:0,min:-24,max:24,step:1,unit:"%"},{id:"chin-length",tool:"face",label:"下巴长度",value:0,min:-24,max:24,step:1,unit:"%"},{id:"jaw-softness",tool:"face",label:"颌线柔和度",value:0,min:-20,max:20,step:1,unit:"%"},{id:"eye-size",tool:"eyes",label:"眼睛大小",value:0,min:-35,max:35,step:1,unit:"%"},{id:"eye-height",tool:"eyes",label:"眼高",value:0,min:-24,max:24,step:1,unit:"%"},{id:"eye-width",tool:"eyes",label:"眼宽",value:0,min:-24,max:24,step:1,unit:"%"},{id:"eye-distance",tool:"eyes",label:"眼距",value:0,min:-24,max:24,step:1,unit:"%"},{id:"eye-tilt",tool:"eyes",label:"眼角倾斜",value:0,min:-18,max:18,step:1,unit:"deg"},{id:"mouth-width",tool:"mouth",label:"嘴巴宽度",value:0,min:-24,max:24,step:1,unit:"%"},{id:"mouth-open",tool:"mouth",label:"嘴巴开合",value:0,min:-24,max:24,step:1,unit:"%"},{id:"mouth-curve",tool:"mouth",label:"嘴角弧度",value:0,min:-24,max:24,step:1,unit:"%"},{id:"lower-face-softness",tool:"mouth",label:"下半脸柔和度",value:0,min:-18,max:18,step:1,unit:"%"},{id:"liquify-strength",tool:"liquify",label:"推拉强度",value:0,min:0,max:100,step:1,unit:"%"},{id:"liquify-radius",tool:"liquify",label:"影响半径",value:36,min:8,max:96,step:1,unit:"px"},{id:"liquify-softness",tool:"liquify",label:"边缘柔化",value:52,min:0,max:100,step:1,unit:"%"}];function Sr(i,e){return i?i.data!==void 0?i.data:i:e}function ps(i){return typeof i=="number"?Math.max(0,Math.trunc(i)):typeof i=="string"?Math.max(0,Number.parseInt(i,10)||0):0}function If(i){const e=Sr(i,i);return e?.quota?{used:ps(e.quota.totalUsed),remaining:ps(e.quota.totalRemaining),limit:ps(e.quota.totalCap),exchangeRemaining:ps(e.quota.exchangeRemaining)}:{used:ps(e?.used),remaining:ps(e?.remaining),limit:ps(e?.limit),exchangeRemaining:ps(e?.exchangeRemaining)}}function oT(i){const e=i.name.match(/\.[a-zA-Z0-9]+$/)?.[0];return e?e.toLowerCase():i.type==="image/png"?".png":i.type==="image/webp"?".webp":i.type==="image/gif"?".gif":".jpg"}function Fn(i,e){return i?.response?.data?.error||i?.message||e}const lT="kigcraft:generation:";function Df(i){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${i}:${e}`}function nm(i){return`${lT}${i}`}function cT(i){if(typeof window>"u")return Df(i);const e=nm(i),t=window.localStorage.getItem(e);if(t)return t;const n=Df(i);return window.localStorage.setItem(e,n),n}function No(i){typeof window>"u"||!i||window.localStorage.removeItem(nm(i))}function dT(i){const e=JSON.stringify(i)||"empty";let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function hT(){const i="https://api.kigermap.cn/v1";try{return new URL(i,window.location.origin).origin}catch{return""}}function Uf(i){const e=(i||"").trim();return!e||e.startsWith("http")||e.startsWith("blob:")||e.startsWith("data:image/")?e:`${hT()}${e.startsWith("/")?e:`/${e}`}`}function Je(i,e,t){return Math.min(t,Math.max(e,i))}function kf(i,e="%"){return i===0?`0${e}`:`${i>0?"+":""}${i}${e}`}function uT(i){const e=Math.max(0,Math.floor(i/1e3)),t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Ff(i){return Array.from(i).length}function im(i){return i.replace(/\s+/g," ").trim()}function ms(i,e){const t=im(i);if(e<=0)return"";const n=Array.from(t);return n.length<=e?t:`${n.slice(0,Math.max(0,e-1)).join("")}…`}function Of(i,e=$E){const t=[];for(const n of i){const s=im(n);if(!s)continue;const r=t.length?1:0,a=Ff(t.join(`
`)),o=e-a-r;if(o<=0)break;const l=ms(s,o);if(!l||(t.push(l),Ff(l)>=o))break}return t.join(`
`)}function Bf(i,e,t){return i==="kigcraft-geometry-analysis"?"16:9":i==="kigcraft-turnaround"?"4:3":i==="kigcraft-front-design"||i==="kigcraft-front-revision"?"3:4":e}function fT(i){const e=new Set(i.map(n=>n.kind)),t=[];return e.has("front")||t.push({id:"missing-front",severity:"warning",text:"未标记清晰正面图，五官比例、脸型中心线和刘海遮挡关系会更依赖模型推断。"}),!e.has("side")&&!e.has("back")&&t.push({id:"missing-side-back",severity:"warning",text:"缺少侧面或背面参考，后脑、耳后、发长和头饰侧面结构需要人工确认。"}),e.has("accessory")||t.push({id:"missing-accessory",severity:"info",text:"未单独标记配件参考，耳机、发饰、兽耳或特殊装饰建议用切片替换补充。"}),i.length<3&&t.push({id:"few-refs",severity:"info",text:"参考图数量较少，建议额外补充表情、局部五官或配件截图来稳定生成结果。"}),t}function pT(i,e,t){const n=new Set(e.map(o=>o.kind)),s=n.has("accessory"),r=t.trim(),a={hair:"保留整体发色、刘海分叉、发束层次、头顶轮廓和侧发遮挡关系；侧后参考不足时不要臆造复杂背发。",eyes:"保留眼型比例、左右瞳色、瞳孔高光、睫毛方向、眼距和眼神气质，避免变成陌生角色。",expression:r?`围绕整体要求确认表情：${r}`:"保持原角色的表情气质，嘴型、脸红和眉眼情绪要和参考一致。",ears:n.has("side")?"侧面参考用于确认耳后、鬓角和头壳边缘结构。":"耳后与侧脸结构需要谨慎推断，生成后优先检查。",headwear:s?"按配件参考保留头饰、耳机、发夹或兽耳的位置、材质和遮挡层级。":"如有头饰、耳机或兽耳，请在细节切片中补充替换图。",accessory:s?"保留配件的颜色、发光区域、镜面材质、左右位置和与发束的遮挡关系。":"暂无独立配件参考，生成时仅按主图可见区域保守处理。",avoid:"不要改变角色发色、眼型、瞳色、脸型气质和标志性配件；不要生成真人 cos、摄影写真或过度写实皮肤。",face:"头壳正视图需要保持对称、干净、适合工坊沟通，脸颊和下巴比例以后续锚点微调为准。",other:r||"保留参考图中最能识别角色身份的细节。"};return a[i.id]||a[i.kind]||a.other}function zf(i,e,t){const n=i.find(c=>c.kind==="front")||i[0];if(!n)return e;const s=i.find(c=>c.kind==="accessory")||n,r=i.find(c=>c.kind==="side")||i.find(c=>c.kind==="back")||n,a=new Map(e.map(c=>[c.id,c])),o=QE.map(c=>{const u=aT(c,t),h=a.get(u.id);if(h?.replaced)return h;const f=u.kind==="accessory"||u.kind==="headwear"?s:u.kind==="ears"?r:n;return h?.sourceRefId===f.id?{...h,previewUrl:f.previewUrl,replaced:!1}:{...u,previewUrl:f.previewUrl,sourceRefId:f.id,replaced:!1}}),l=i.filter(c=>c.id!==n.id).map(c=>{const u=`slice-reference-${c.id}`,h=a.get(u);if(h)return{...h,previewUrl:h.replaced?h.previewUrl:c.previewUrl,sourceRefId:c.id};const f=c.kind==="expression"?"expression":c.kind==="accessory"?"accessory":c.kind==="side"||c.kind==="back"?"hair":"other",p=c.kind==="side"?"确认侧面轮廓、耳后结构、鬓角和发束遮挡关系。":c.kind==="back"?"确认后脑轮廓、背面发长、分层和配件背面结构。":c.kind==="expression"?"保留该参考图中的眼神、嘴型、脸红和表情气质。":c.kind==="accessory"?"保留配件的形状、颜色、材质、侧别和遮挡关系。":"将这张补充图作为局部结构和颜色参考。";return{id:u,kind:f,label:`${c.label||"补充参考"}重点`,description:c.note.trim()||p,previewUrl:c.previewUrl,sourceRefId:c.id,cropX:50,cropY:50,cropWidth:88,cropHeight:88,zoom:1.14,locked:!1,replaced:!1}});return[...o,...l,...e.filter(c=>c.id.startsWith("slice-custom-"))]}function Ir(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("图片解码失败")),n.crossOrigin="anonymous",n.src=i})}function mT(i){return[i.previewUrl,i.cropX.toFixed(2),i.cropY.toFixed(2),(i.cropWidth??100/Math.max(1,i.zoom)).toFixed(2),(i.cropHeight??i.cropWidth??100/Math.max(1,i.zoom)).toFixed(2),i.zoom.toFixed(3)].join("|")}async function gT(i){const e=100/Je(i.zoom,1,4);return Tg({filename:`kigcraft-${i.kind}-${i.id}-${Date.now()}`,imageUrl:i.previewUrl,region:{centerX:i.cropX,centerY:i.cropY,width:i.cropWidth??e,height:i.cropHeight??i.cropWidth??e}})}function xT(i,e){return e?"primary_front":i.kind==="side"?"side":i.kind==="back"?"back":i.kind==="expression"?"expression":i.kind==="accessory"?"accessory":i.kind==="front"?"front":"detail"}function _T(i,e,t,n){const s=tm(i,e,t,n);return{height:s.height,left:s.left,top:s.top,width:s.width}}function ah(i,e,t={}){const n=t.repeat!==!1,s=t.corner!==!1,r=t.compact===!0,a=Math.max(1,Math.min(e.width,e.height)),o=Je(a*(r?.055:.045),12,34),l=Je(a*(r?.07:.038),13,32);if(i.save(),i.beginPath(),i.rect(e.left,e.top,e.width,e.height),i.clip(),n&&(i.save(),i.font=`800 ${o}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,i.fillStyle="rgba(17, 24, 39, 0.07)",i.textAlign="center",i.textBaseline="middle",(r?[[.28,.3],[.72,.7]]:[[.24,.24],[.74,.34],[.3,.7],[.76,.78]]).forEach(([u,h])=>{i.save(),i.translate(e.left+e.width*u,e.top+e.height*h),i.rotate(-24*Math.PI/180),i.fillText(Ac,0,0),i.restore()}),i.restore()),s){const c=Je(a*.035,14,42);i.save(),i.font=`900 ${l}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,i.textAlign="right",i.textBaseline="alphabetic",i.lineWidth=Math.max(2,l*.16),i.strokeStyle="rgba(255, 255, 255, 0.72)",i.fillStyle="rgba(17, 17, 17, 0.68)",i.strokeText(Ac,e.left+e.width-c,e.top+e.height-c),i.fillText(Ac,e.left+e.width-c,e.top+e.height-c),i.restore()}i.restore()}function vT(i,e,t={}){i.style.removeProperty("width"),i.style.removeProperty("height");const n=i.getBoundingClientRect(),s=i.parentElement,r=Math.max(1,Math.round(n.width||s?.clientWidth||e.naturalWidth||1)),a=Math.max(1,Math.round(n.height||s?.clientHeight||e.naturalHeight||1)),o=Math.max(1,Math.min(window.devicePixelRatio||1,2));i.width=Math.max(1,Math.round(r*o)),i.height=Math.max(1,Math.round(a*o));const l=i.getContext("2d");if(!l)return;l.setTransform(o,0,0,o,0,0),l.clearRect(0,0,r,a),l.fillStyle="#ffffff",l.fillRect(0,0,r,a);const c=e.naturalWidth||e.width||r,u=e.naturalHeight||e.height||a,h=_T(r,a,c,u);l.drawImage(e,h.left,h.top,h.width,h.height),ah(l,h,t)}function yT(i){const e=i.getBoundingClientRect(),t=i.parentElement,n=Math.max(1,Math.round(t?.clientWidth||e.width||1)),s=Math.max(1,Math.round(t?.clientHeight||e.height||1)),r=Math.max(1,Math.min(window.devicePixelRatio||1,2));i.width=Math.max(1,Math.round(n*r)),i.height=Math.max(1,Math.round(s*r)),i.style.width=`${n}px`,i.style.height=`${s}px`;const a=i.getContext("2d");a&&(a.setTransform(r,0,0,r,0,0),a.clearRect(0,0,n,s),ah(a,{height:s,left:0,top:0,width:n},{corner:!0,repeat:!0}))}async function sm(i){const e=await Ir(i),t=Math.max(1,e.naturalWidth||e.width||1),n=Math.max(1,e.naturalHeight||e.height||1),s=document.createElement("canvas");s.width=t,s.height=n;const r=s.getContext("2d");if(!r)throw new Error("浏览器不支持水印导出");return r.fillStyle="#ffffff",r.fillRect(0,0,t,n),r.drawImage(e,0,0,t,n),ah(r,{height:n,left:0,top:0,width:t}),new Promise((a,o)=>{try{s.toBlob(l=>{if(l){a(l);return}o(new Error("水印图片导出失败"))},"image/png")}catch(l){o(l)}})}function Hf(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=()=>e(String(n.result||"")),n.onerror=()=>t(new Error("图片读取失败")),n.readAsDataURL(i)})}function MT(i,e){const t=document.createElement("a");t.href=i,t.download=e,t.click()}async function bT(i,e){const t=await sm(i),n=URL.createObjectURL(t);try{MT(n,e)}finally{window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}}function Lc({alt:i,className:e="",compact:t=!1,onReady:n,src:s}){const r=O.useRef(null),a=O.useRef(n);return O.useEffect(()=>{a.current=n},[n]),O.useEffect(()=>{const o=r.current;if(!o||!s)return;let l=!1,c=null,u=null;return Ir(s).then(h=>{if(l)return;u=h,a.current?.({height:h.naturalHeight||h.height||0,width:h.naturalWidth||h.width||0});const f=()=>{!u||l||vT(o,u,{compact:t})};f(),c=new ResizeObserver(f),c.observe(o),o.parentElement&&c.observe(o.parentElement)}).catch(()=>{const h=o.getContext("2d");if(!h)return;const f=Math.max(1,o.clientWidth||320),p=Math.max(1,o.clientHeight||240);o.width=f,o.height=p,h.clearRect(0,0,f,p)}),()=>{l=!0,c?.disconnect()}},[t,s]),d.jsx("canvas",{ref:r,"aria-label":i,className:`kigcraft-watermarked-canvas ${e}`,role:"img"})}function ST({className:i="",style:e}){const t=O.useRef(null);return O.useEffect(()=>{const n=t.current;if(!n)return;const s=()=>yT(n);s();const r=new ResizeObserver(s);return r.observe(n),n.parentElement&&r.observe(n.parentElement),()=>r.disconnect()},[e]),d.jsx("canvas",{ref:t,"aria-hidden":"true",className:`kigcraft-watermark-overlay ${i}`,style:e})}function ma(){return Vf(()=>import("./animeLandmarkDetector.B_sdFYAp.js"),[],import.meta.url)}function ET(i=0){return Vf(()=>import("./pixiStage.B7YVp9eT.js"),__vite__mapDeps([0,1,2]),import.meta.url)}function Ae({name:i}){const e={upload:d.jsx("path",{d:"M12 16V4m0 0 4 4m-4-4-4 4M5 16v3h14v-3"}),list:d.jsx("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),brush:d.jsx("path",{d:"m15 4 5 5-9 9H6v-5l9-9ZM14 5l5 5"}),grid:d.jsx("path",{d:"M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"}),spark:d.jsx("path",{d:"M12 3l2.2 6.2L20 12l-5.8 2.8L12 21l-2.2-6.2L4 12l5.8-2.8L12 3Z"}),download:d.jsx("path",{d:"M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"}),share:d.jsx("path",{d:"M8 12h8M16 12l-3-3m3 3-3 3M5 5h14v14H5V5Z"}),trash:d.jsx("path",{d:"M5 7h14M10 11v6m4-6v6M8 7l1-3h6l1 3m-9 0 1 13h8l1-13"}),plus:d.jsx("path",{d:"M12 5v14M5 12h14"}),eye:d.jsx("path",{d:"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),face:d.jsx("path",{d:"M7.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 16c1.2 1.1 2.5 1.6 4 1.6s2.8-.5 4-1.6M4 11.8C4 6.8 7.2 3.5 12 3.5s8 3.3 8 8.3c0 5.2-3.5 8.7-8 8.7s-8-3.5-8-8.7Z"}),smile:d.jsx("path",{d:"M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm5-1h.01M15 11h.01M8.5 14.2c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"}),wand:d.jsx("path",{d:"m15 4 5 5M3 21l9.5-9.5M13 6l5 5L7 22H2v-5L13 6Zm4-3 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"}),replace:d.jsx("path",{d:"M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7M5 8V6a3 3 0 0 1 3-3h3M19 16v2a3 3 0 0 1-3 3h-3"}),reset:d.jsx("path",{d:"M4 4v6h6M5 10a7 7 0 1 0 2.1-5"}),save:d.jsx("path",{d:"M5 4h12l2 2v14H5V4Zm3 0v6h8V4M8 20v-6h8v6"}),target:d.jsx("path",{d:"M12 3v3m0 12v3M3 12h3m12 0h3M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm3 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"}),crop:d.jsx("path",{d:"M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14M6 6h9"}),alert:d.jsx("path",{d:"M12 4 3 20h18L12 4Zm0 5v5m0 3h.01"}),image:d.jsx("path",{d:"M4 5h16v14H4V5Zm3 10 3.5-4 3 3 2-2.5L20 16M8.5 9.5h.01"}),expand:d.jsx("path",{d:"M8 3H3v5M3 3l6 6M16 3h5v5M21 3l-6 6M8 21H3v-5M3 21l6-6M16 21h5v-5M21 21l-6-6"}),close:d.jsx("path",{d:"M6 6l12 12M18 6 6 18"})};return d.jsx("svg",{"aria-hidden":"true",className:"kigcraft-icon",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8",viewBox:"0 0 24 24",children:e[i]})}function TT(){const{user:i}=sg(),e=O.useRef(null),t=O.useRef(null),n=O.useRef(null),s=O.useRef(null),r=O.useRef(null),a=O.useRef(null),o=O.useRef(null),l=O.useRef(null),c=O.useRef(null),u=O.useRef([]),h=O.useRef(null),f=O.useRef(null),p=O.useRef(null),_=O.useRef(!1),b=O.useRef(0),m=O.useRef(!1),g=O.useRef(!1),w=O.useRef(null),L=O.useRef(""),S=O.useRef([]),P=O.useRef([]),T=O.useRef([]),I=O.useRef(""),y=O.useRef(""),[A,D]=O.useState(wc),[N,k]=O.useState("references"),[z,q]=O.useState([]),[W,ee]=O.useState(JE),[K,ce]=O.useState(""),[ue,ye]=O.useState(""),[se,be]=O.useState("3:4"),[we,Ke]=O.useState("idle"),[Be,$]=O.useState(null),[pe,le]=O.useState(0),[ze,fe]=O.useState(""),[je,At]=O.useState(null),[et,_t]=O.useState([]),[xt,dt]=O.useState(""),[jt,Rt]=O.useState(""),[Yt,Z]=O.useState(""),[re,te]=O.useState(null),[U,vt]=O.useState(null),[rt,R]=O.useState(""),[v,H]=O.useState("turnaround"),[j,ne]=O.useState(!1),[me,ge]=O.useState(!1),[Q,oe]=O.useState(!1),[Se,ke]=O.useState(""),[Re,_e]=O.useState(""),[He,$e]=O.useState(""),[Ee,F]=O.useState(Cc),[Me,ae]=O.useState([]),[xe,Le]=O.useState(!1),[de,Fe]=O.useState(null),[he,Mt]=O.useState(null),[St,Zt]=O.useState("idle"),[qt,jr]=O.useState(null),[pl,js]=O.useState(!1),[Hn,Zn]=O.useState([]),[Ws,Jn]=O.useState(""),[bt,Xs]=O.useState("annotate"),[Pn,Ms]=O.useState(Co),[Yi,Ki]=O.useState("left-eye"),[Qn,bs]=O.useState(Mr),[Ss,qs]=O.useState(!1),[Es,ml]=O.useState(!0),[Wr,E]=O.useState(95),[V,J]=O.useState("ellipse"),[X,Y]=O.useState([]),[Pe,Ue]=O.useState(""),[Ce,Ve]=O.useState(28),Ge=X.length>0,[nt,st]=O.useState(!1),[We,wt]=O.useState(!1),[Et,Ot]=O.useState("idle"),[Ct,Jt]=O.useState(null),[De,dn]=O.useState(null),[ut,bn]=O.useState({width:0,height:0}),[Ht,mn]=O.useState("idle"),[Zi,yt]=O.useState(""),[Wt,hi]=O.useState(0),[Tt,gn]=O.useState([]),[Ji,Li]=O.useState([]),[Vn,$s]=O.useState(Rf),[Qi,oh]=O.useState(YE),[gl,La]=O.useState(Cf),[Ys,Xr]=O.useState(Rc),[qr,Ts]=O.useState(null),[Ks,Na]=O.useState(null),[Ia,rm]=O.useState(!0),[am,Da]=O.useState(null),[om,Ni]=O.useState(null),xl=O.useMemo(()=>{const x=A.headReferenceTemplates?.length?A.headReferenceTemplates:[],M=new Map;return[...x,...KE].forEach(C=>M.set(C.id,C)),Array.from(M.values()).sort((C,B)=>{const ie=["kigcraft-front-design","kigcraft-front-revision","kigcraft-turnaround","kigcraft-geometry-analysis","head-ref-step1","head-ref-step2","head-ref-step3"];return(ie.indexOf(C.id)===-1?99:ie.indexOf(C.id))-(ie.indexOf(B.id)===-1?99:ie.indexOf(B.id))})},[A.headReferenceTemplates]),es=O.useMemo(()=>A.headReferenceModels?.length?A.headReferenceModels:ZE,[A.headReferenceModels]),Zs=O.useMemo(()=>eT(es),[es]),ts=es.find(x=>x.id===ue)||Zs||es[0],lm=rg(i)||!!A.userCapabilities?.isCertified,Ua=!!i&&(!!A.userCapabilities?.canUseHeadReference||lm),ei=we==="uploading"||we==="generating"||we==="publishing",_l=!!Be&&(we==="uploading"||we==="generating"),vl=_l&&Be?.kind==="turnaround",lh=_l&&Be?.kind==="geometry",yl=_l&&Be?.kind==="front",cm=et.find(x=>x.id===xt)||null,Ye=et.find(x=>x.id===jt)||null,ti=et.find(x=>x.id===Yt)||null,ch=et.find(x=>x.id===rt)||null,Pt=cm||ch||Ye,dh=!!i&&Ua&&z.length>0&&!!ts,ka=N==="front",Ml=N==="turnaround"?"kigcraft-turnaround":N==="front"?"kigcraft-front-revision":"kigcraft-front-design",dm=xl.find(x=>x.id===Ml)||xl[0],hh=Bf(Ml,se,g.current),ui=z.find(x=>x.kind==="front")||null,Lt=ui,uh=O.useMemo(()=>{const x=new Map;return z.forEach(M=>x.set(M.kind,(x.get(M.kind)||0)+1)),x},[z]),fh=Kp.filter(x=>(uh.get(x)||0)>0).length,Fa=Math.max(0,vr.findIndex(x=>x.id===N)),Oa=vr[Fa]||vr[0],ws=W.filter(x=>x.locked&&x.description.trim()).length,$r=Hn.filter(x=>x.locked).length,xn=Ge||Ee.note.trim().length>0||Tt.length>0||!!qr||Qn.some(x=>{const M=Mr.find(C=>C.id===x.id);return M?Math.abs(x.value-M.value)>1e-4:!1}),Ba=Ge||Ee.note.trim().length>0,Vt=!!Ye&&Ye.id===ti?.id&&!!re&&ti.frontMasterId===re.id&&!xn;O.useEffect(()=>{if(!yl)return;const x=M=>{M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[yl]);const za=O.useCallback(x=>x===N||x==="references"?!0:x==="details"?!!ui&&!!he?.confirmed:x==="front"?!!Ye:x==="turnaround"?!!ti&&!!re:!1,[ti,N,ui,Ye,he?.confirmed,re]),hm={references:Lt?he?.confirmed?"范围已确认":"待确认范围":"待上传正面图",details:xe?"分析中":de?`${ws} 项锁定`:"待分析确认",front:Vt?`母版 v${re?.version||1} 已确认`:Ye?xn?"编辑草稿未提交":"待确认母版":"待生成正视图",turnaround:Vt?"可生成四视图或 3D":"待确认母版"},bl=[{id:"reference",label:"正面参考",ready:!!ui,value:ui?ui.label||"已上传":"请标记一张正面图"},{id:"calibration",label:"头部范围",ready:!!he?.confirmed,value:he?.confirmed?"已确认":"需确认"},{id:"details",label:"特征锁定",ready:!!de&&ws>0&&$r>0,value:`${ws} 项特征 / ${$r} 个切片`},{id:"front",label:"正视母版",ready:Vt,value:Vt?"已确认，可生成四视图或 3D 头壳":Ye?xn?"存在未提交修改":"需确认母版":"待生成"}],um=O.useCallback(x=>{if(za(x)){k(x);return}fe(x==="details"?"请先上传正面身份图并确认头部范围，再进入细节确认。":x==="front"?"请先完成细节确认并生成正视图，再进入正视图编辑。":"请先确认正视图母版，再生成四视图或 3D 头壳。")},[za]),Ii=Pc.find(x=>x.id===bt)||Pc[0],_n=Pn.find(x=>x.id===Yi)||null,fm=Qn.filter(x=>x.tool===bt),pm=Es?bt==="annotate"||Ss?Pn:Pn.filter(x=>x.tool===bt):[],ph=O.useMemo(()=>[...Tt.flatMap(x=>x.strokes),...qr?[qr]:[]],[qr,Tt]),ns=O.useMemo(()=>XE({anchors:Pn,liquifyStrokes:ph,localRegenerate:Ee.localRegenerate,tuningParams:Qn,wigCleanup:Ee.wigCleanup}),[Pn,Ee.localRegenerate,Ee.wigCleanup,ph,Qn]),Ha=O.useMemo(()=>qE(ns),[ns]),mm=Pn.filter(x=>x.tool==="liquify"),gm=O.useMemo(()=>zE(ns),[ns]),Js=Je(am??gm,.35,.65),As=bt==="liquify"?Qi==="scale"&&Ks?{active:!1,mode:"scale",radius:Vn,x:Ks.x,y:Ks.y}:om:null,Sl=Tt.reduce((x,M)=>x+M.strokes.length,0)+(qr?1:0),xm=O.useMemo(()=>iT(Pn),[Pn]),Va=O.useMemo(()=>tT(De),[De]),is=O.useCallback((x,M)=>{le(0),$({kind:x,label:M,phase:"queued",startedAt:Date.now()})},[]),Gn=O.useCallback(x=>{$(M=>!M||x&&M.kind!==x?M:null)},[]),_m=Ht==="ready"?"is-ready":Ht==="mounting"?"is-busy":Ht==="fallback"?"is-fallback":Ht==="error"?"is-error":"",vm=Et==="ready"?"is-ready":Et==="detecting"?"is-busy":Et==="error"?"is-fallback":"",ym=Et==="ready"?`已识别 ${Ct?.points.length||0} 点 / ${Ct?.detectionMs||0}ms`:Et==="detecting"?"自动识别中":Et==="error"?"启发式锚点，可手动微调":Ye?"启发式锚点，等待自动识别":"等待正视图",Mm=St==="detecting"?"正在识别头部范围":St==="error"?"识别失败，可手动调整":he?`${Nf(he)} · 置信 ${Math.round(he.confidence)}%`:"等待正面参考图";O.useEffect(()=>{if(!Be||we!=="uploading"&&we!=="generating")return;const x=()=>{le(Date.now()-Be.startedAt)};x();const M=window.setInterval(x,1e3);return()=>window.clearInterval(M)},[Be,we]),O.useEffect(()=>{bt!=="annotate"&&Ki(x=>Pn.find(C=>C.id===x)?.tool===bt?x:Pn.find(C=>C.tool===bt)?.id||x)},[bt,Pn]),O.useEffect(()=>{let x=!0;return fn.getCatalog().then(M=>{if(!x)return;const C=Sr(M.data,wc);D({...wc,...C})}).catch(()=>{}),()=>{x=!1}},[i?.id,i?.communityCertificationCompleted,i?.communityIdentities?.length]),O.useEffect(()=>{i&&fn.getUsage().then(x=>At(If(x.data))).catch(()=>{})},[i]),O.useEffect(()=>{if(typeof window>"u"||!z.length)return;let x=!1;return window.requestIdleCallback?.(()=>{x||ma().then(M=>M.warmupAnimeLandmarkModels()).catch(()=>{})})??window.setTimeout(()=>{x||ma().then(M=>M.warmupAnimeLandmarkModels()).catch(()=>{})},1200),()=>{x=!0}},[z.length]),O.useEffect(()=>{if(!Lt){Mt(null),Zt("idle"),I.current="";return}if(Mt(C=>C?.sourceRefId===Lt.id?C:br(Lt.id)),I.current===Lt.id)return;I.current=Lt.id;let x=!1;const M=window.setTimeout(()=>{Zt("detecting"),Lf(Lt).then(C=>{x||(Mt(B=>B?.sourceRefId===Lt.id&&B.confirmed?B:C),Zt("ready"))}).catch(()=>{x||(Mt(C=>C?.sourceRefId===Lt.id?C:br(Lt.id)),Zt("error"))})},260);return()=>{x=!0,window.clearTimeout(M)}},[Lt?.id,Lt?.previewUrl]),O.useEffect(()=>{if(!Lt?.previewUrl||!he){jr(null),js(!1);return}let x=!1;js(!0);const M=window.setTimeout(()=>{Wf(Lt.previewUrl,{centerX:he.x,centerY:he.y,height:he.height,width:he.width}).then(C=>{x||jr(C)}).catch(()=>{x||jr(null)}).finally(()=>{x||js(!1)})},180);return()=>{x=!0,window.clearTimeout(M)}},[he?.height,he?.sourceRefId,he?.width,he?.x,he?.y,Lt?.previewUrl]),O.useEffect(()=>{ye(x=>{const M=Zs?.id||es[0]?.id||"";if(!x)return M;const C=es.find(B=>B.id===x);return C?!m.current&&Zs&&Rd(Zs)>Rd(C)?Zs.id:x:M})},[es,Zs]),O.useEffect(()=>{S.current=z},[z]),O.useEffect(()=>{P.current=Hn},[Hn]),O.useEffect(()=>{T.current=et},[et]),O.useEffect(()=>{u.current=X;const x=s.current;x&&Tc(x,X)},[X]),O.useEffect(()=>()=>{S.current.forEach(x=>{x.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(x.previewUrl)}),P.current.forEach(x=>{x.replaced&&x.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(x.previewUrl)}),T.current.forEach(x=>{x.displayUrl.startsWith("blob:")&&URL.revokeObjectURL(x.displayUrl)})},[]),O.useEffect(()=>{const x=s.current,M=r.current;if(!x||!M||N!=="front"||!Ye?.displayUrl){c.current=null,dn(null);return}const C=()=>{const ie=M.getBoundingClientRect(),Ie=ut.width||ie.width,Xe=ut.height||ie.height,Oe=tm(ie.width,ie.height,Ie,Xe),Ze=Math.max(1,Math.min(window.devicePixelRatio||1,2));x.width=Math.max(1,Math.round(Oe.width*Ze)),x.height=Math.max(1,Math.round(Oe.height*Ze)),x.style.left=`${Oe.left}px`,x.style.top=`${Oe.top}px`,x.style.width=`${Oe.width}px`,x.style.height=`${Oe.height}px`,Tc(x,u.current),c.current=Oe,dn(at=>at&&Math.abs(at.left-Oe.left)<.5&&Math.abs(at.top-Oe.top)<.5&&Math.abs(at.width-Oe.width)<.5&&Math.abs(at.height-Oe.height)<.5?at:Oe)};C();const B=new ResizeObserver(C);return B.observe(M),()=>B.disconnect()},[N,ut.height,ut.width,Ye?.displayUrl]),O.useEffect(()=>{const x=o.current;if(!x||!Ye?.displayUrl||N!=="front"){mn("idle"),yt("");return}let M=!1,C=null;return mn("mounting"),yt(""),ET(Wt).then(B=>B.mountPixiStage(x)).then(async B=>{if(C=B,M){B.destroy();return}l.current=B,await B.setImageUrl(Ye.displayUrl),!M&&(B.applyRecipe(ns),B.supportsLocalDeformation?(mn("ready"),yt("")):B.initializationError?(mn("error"),yt(B.initializationError)):mn("fallback"))}).catch(B=>{M||(mn("error"),yt(B instanceof Error?B.message:String(B)))}),()=>{M=!0,l.current===C&&(l.current=null),C?.destroy(),x.replaceChildren()}},[N,Ye?.displayUrl,Wt]);const bm=O.useCallback(()=>{yt(""),mn("mounting"),hi(Date.now())},[]);O.useEffect(()=>{l.current?.applyRecipe(ns)},[ns]),O.useEffect(()=>{if(!Ks){Ts(null);return}Ts(Ll(Ks,Ys))},[Vn,Ys,Ks]),O.useEffect(()=>{Ot("idle"),Jt(null),bn({width:0,height:0}),c.current=null,dn(null),Ms(Co)},[Ye?.displayUrl]);const El=O.useCallback(async()=>{if(i)try{const x=await fn.getUsage();At(If(x.data))}catch{}},[i]),Tl=O.useCallback(async(x,M)=>{fe("");try{await bT(x,M)}catch(C){fe(Fn(C,"水印图片导出失败，请确认图片可访问后再试"))}},[]),fi=O.useCallback(async x=>{const M=await fn.requestUserUploadCredentials(oT(x)),C=Sr(M.data,M.data),B=C.credentials||{},ie=B.accessKeyId||C.accessKeyId,Ie=B.securityToken||C.securityToken;if(!C.host||!C.objectKey||!C.uploadToken||!C.policy||!C.signature||!ie)throw new Error("图片上传准备失败，请稍后重试");const Xe=new FormData;Xe.append("key",C.objectKey),Xe.append("OSSAccessKeyId",ie),Xe.append("policy",C.policy),Xe.append("signature",C.signature),Ie&&Xe.append("x-oss-security-token",Ie),Xe.append("file",x);const Oe=await fetch(C.host,{method:"POST",body:Xe});if(!Oe.ok&&Oe.status!==204)throw new Error("图片上传失败，请稍后重试");const Ze=await fn.confirmUpload({uploadToken:C.uploadToken,objectKey:C.objectKey});return Sr(Ze.data,{}).url||(C.customDomain?`https://${C.customDomain}/${C.objectKey}`:`${C.host}/${C.objectKey}`)},[]),mh=O.useCallback(async x=>{if(x.remoteUrl)return x.remoteUrl;const M=await fi(x.file);return q(C=>C.map(B=>B.id===x.id?{...B,remoteUrl:M}:B)),M},[fi]),gh=O.useCallback(async x=>{const M=mT(x);if(x.remoteUrl&&x.remoteFingerprint===M)return x.remoteUrl;const C=await gT(x),B=await fi(C);return Zn(ie=>ie.map(Ie=>Ie.id===x.id?{...Ie,remoteUrl:B,remoteFingerprint:M}:Ie)),B},[fi]),Qs=O.useCallback(async(x,M)=>{const C={front:0,side:1,back:2,accessory:3,expression:4,supplemental:5},B={"slice-head":0,"slice-hair-front":1,"slice-eyes":2,"slice-mouth":3,"slice-left-accessory":4,"slice-right-accessory":5},ie=z.find(ve=>ve.kind==="front")||null,Ie=z.filter(ve=>ve.id!==ie?.id).sort((ve,ot)=>C[ve.kind]-C[ot.kind]),Xe=Hn.filter(ve=>ve.locked).sort((ve,ot)=>ve.replaced!==ot.replaced?ve.replaced?-1:1:(B[ve.id]??99)-(B[ot.id]??99)),Oe=(ve,ot=!1)=>({key:`reference:${ve.id}`,resolve:async()=>({url:await mh(ve),manifest:{role:xT(ve,ot),label:ve.label,description:ve.note,locked:ot}})}),Ze=ve=>({key:`slice:${ve.id}`,resolve:async()=>({url:await gh(ve),manifest:{role:"detail",kind:ve.kind,label:ve.label,description:ve.description,locked:ve.locked,sourceReferenceId:ve.sourceRefId,region:{x:ve.cropX,y:ve.cropY,width:ve.cropWidth??100/Math.max(1,ve.zoom),height:ve.cropHeight??ve.cropWidth??100/Math.max(1,ve.zoom)}}})}),at=M?[{key:`leading:${M.manifest.role}`,resolve:async()=>M}]:[],Bt=Xe.filter(ve=>ve.replaced),Ut=Xe.filter(ve=>!ve.replaced);let Te=[];if(x==="front")Te=[...ie?[Oe(ie,!0)]:[],...Bt.map(Ze),...Ie.map(ve=>Oe(ve)),...Ut.map(Ze)];else if(x==="revision")Te=[...at,...Bt.map(Ze),...ie?[Oe(ie)]:[],...Ie.map(ve=>Oe(ve)),...Ut.map(Ze)];else{const ve=Ie.filter(ct=>["side","back","accessory","expression"].includes(ct.kind)),ot=Ie.filter(ct=>!ve.some(zt=>zt.id===ct.id));Te=[...at,...ve.map(ct=>Oe(ct)),...Bt.map(Ze),...Ut.map(Ze),...ie?[Oe(ie)]:[],...ot.map(ct=>Oe(ct))]}const Qt=Te.filter((ve,ot,ct)=>ct.findIndex(zt=>zt.key===ve.key)===ot);return Promise.all(Qt.slice(0,8).map(ve=>ve.resolve()))},[z,Hn,mh,gh]),Yr=O.useCallback(async x=>{if(x.resultToken)try{const M=await fn.getResultBlob(x.resultToken);return URL.createObjectURL(M.data)}catch{if(!x.resultUrl)throw new Error("生成结果访问凭证已过期")}return Uf(x.resultUrl||"")},[]),wl=O.useCallback((x=!0)=>{Fe(null),ae([]),x&&(Zn([]),Jn(""))},[]),xh=O.useCallback((x,M=null)=>{const C=new Set(["image/jpeg","image/png","image/webp"]),B=Array.from(x),ie=B.filter(Te=>C.has(Te.type));if(!ie.length){fe("请选择 JPG、PNG 或 WebP 图片");return}if(ie.some(Te=>Te.size>20*1024*1024))throw new Error("单张图片不能超过 20MB");const Ie=new Set(z.map(Te=>`${Te.file.name}:${Te.file.size}:${Te.file.lastModified}`)),Xe=ie.filter(Te=>{const Qt=`${Te.name}:${Te.size}:${Te.lastModified}`;return Ie.has(Qt)?!1:(Ie.add(Qt),!0)}),Oe=Math.max(0,8-z.length),Ze=Xe.slice(0,Oe);if(!Ze.length){fe(z.length>=8?"参考素材已达到 8 张上限":"已忽略重复上传的图片");return}const at=AE(z.map(Te=>Te.kind),Ze.length,M),Bt=Ze.map((Te,Qt)=>{const ve=at[Qt]||"supplemental",ot=yr.find(ct=>ct.id===ve)?.label||"参考";return{id:`${Te.name}-${Te.lastModified}-${Math.random().toString(36).slice(2)}`,file:Te,previewUrl:URL.createObjectURL(Te),kind:ve,label:ot,note:""}});q(Te=>[...M==="front"&&Bt.some(ve=>ve.kind==="front")?Te.map(ve=>ve.kind==="front"?{...ve,kind:"supplemental",label:ve.label==="正面"?"补充细节":ve.label}:ve):Te,...Bt]),wl(!1);const Ut=B.length-Ze.length;fe(Ut>0?`已添加 ${Ze.length} 张，另有 ${Ut} 张因重复、格式或数量上限被忽略`:"")},[wl,z]),Rs=O.useCallback((x=null)=>{t.current=x,e.current?.click()},[]),_h=(x,M)=>{q(C=>C.map(B=>B.id===x?{...B,...M}:B)),Fe(null),ae([])},Sm=(x,M)=>{q(C=>C.map(B=>{if(B.id===x){const ie=yr.find(Xe=>Xe.id===B.kind)?.label,Ie=yr.find(Xe=>Xe.id===M)?.label;return{...B,kind:M,label:(!B.label.trim()||B.label===ie)&&Ie||B.label}}return M==="front"&&B.kind==="front"?{...B,kind:"supplemental",label:B.label==="正面"?"补充细节":B.label}:B})),wl()},Em=x=>{q(M=>{const C=M.find(B=>B.id===x);return C?.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(C.previewUrl),M.filter(B=>B.id!==x)}),Zn(M=>M.filter(C=>C.replaced||C.sourceRefId!==x)),Jn(M=>P.current.some(ie=>ie.id===M&&(ie.replaced||ie.sourceRefId!==x))?M:P.current.find(ie=>ie.replaced||ie.sourceRefId!==x)?.id||""),Fe(null),ae([])},Ga=(x,M)=>{ee(C=>C.map(B=>B.id===x?{...B,...M}:B))},Tm=()=>{ee(x=>[...x,{id:`detail-${Date.now()}`,kind:"other",label:"补充细节",description:"",locked:!0}])},wm=x=>{ee(M=>M.filter(C=>C.id!==x))},Kr=x=>{Mt(M=>M&&Pf({...M,...x,confirmed:!1,method:"manual",updatedAt:Date.now()})),Zt("ready")},pi=(x,M)=>{if(!he||_.current)return;const C=a.current?.getBoundingClientRect();if(!C?.width||!C.height)return;_.current=!0,M.preventDefault(),M.stopPropagation();const B=he,ie=M.clientX,Ie=M.clientY,Xe=(Bt,Ut)=>{const Te=(Bt-ie)/C.width*100,Qt=(Ut-Ie)/C.height*100,ve=B.x-B.width/2,ot=B.x+B.width/2,ct=B.y-B.height/2,zt=B.y+B.height/2;let hn={...B,confirmed:!1,method:"manual",updatedAt:Date.now()};if(x==="move")hn={...hn,x:B.x+Te,y:B.y+Qt};else if(x==="left"){const Ln=Math.min(ve+Te,ot-28);hn={...hn,x:(Ln+ot)/2,width:ot-Ln}}else if(x==="right"){const Ln=Math.max(ot+Te,ve+28);hn={...hn,x:(ve+Ln)/2,width:Ln-ve}}else if(x==="top"){const Ln=Math.min(ct+Qt,zt-34);hn={...hn,y:(Ln+zt)/2,height:zt-Ln}}else if(x==="bottom"){const Ln=Math.max(zt+Qt,ct+34);hn={...hn,y:(ct+Ln)/2,height:Ln-ct}}Mt(Pf(hn)),Zt("ready")},Oe=Bt=>{Xe(Bt.clientX,Bt.clientY)},Ze=Bt=>{Xe(Bt.clientX,Bt.clientY)},at=()=>{_.current=!1,window.removeEventListener("pointermove",Oe),window.removeEventListener("mousemove",Ze),window.removeEventListener("pointerup",at),window.removeEventListener("mouseup",at),window.removeEventListener("pointercancel",at)};window.addEventListener("pointermove",Oe),window.addEventListener("mousemove",Ze),window.addEventListener("pointerup",at),window.addEventListener("mouseup",at),window.addEventListener("pointercancel",at)},Am=O.useCallback(async()=>{if(!Lt){fe("请先上传一张清晰正面参考图");return}Zt("detecting"),fe("");try{const x=await Lf(Lt);Mt(x),Zt("ready"),I.current=Lt.id}catch(x){Mt(M=>M?.sourceRefId===Lt.id?{...M,confirmed:!1,method:"manual"}:br(Lt.id)),Zt("error"),fe(Fn(x,"头部范围识别失败，可先手动调整范围"))}},[Lt]),Rm=()=>{const x=K.trim();ee(M=>M.map(C=>C.description.trim()?C:C.id==="avoid"?{...C,description:"不要改变角色发色、眼型、表情气质和标志性配件。"}:C.id==="expression"?{...C,description:x?`参考整体要求：${x}`:"保持角色原本的表情气质，避免变成陌生角色。"}:C))},Zr=O.useCallback(async(x=!1,M)=>{if(!z.length){fe("请先上传至少 1 张参考图"),k("references");return}Le(!0),fe("");try{const C=M!==void 0?M:he?.sourceRefId===Lt?.id?he:null,B=fT(z);C&&B.unshift({id:"head-calibration",severity:C.confirmed?"info":"warning",text:C.confirmed?`已使用你确认的头部范围作为参考切片基准：中心 ${Math.round(C.x)}%, ${Math.round(C.y)}%，宽 ${Math.round(C.width)}%，高 ${Math.round(C.height)}%。生成后的编辑锚点会基于正视图重新识别。`:"头部范围尚未确认，建议先修正绿色头部框再进入细节分析，可减少五官和脸型识别偏差。"});const ie=z.find(Xe=>Xe.kind==="front")||z[0];try{const Xe=await Ir(ie.previewUrl),{detectAnimeLandmarks:Oe}=await ma(),Ze=await Oe(Xe);Ze&&B.push({id:"local-landmark-ok",severity:"info",text:`本地视觉模型已识别 ${Ze.debug.points.length} 个关键点，用时 ${Ze.debug.detectionMs}ms；可在正视图阶段继续微调锚点。`})}catch{B.push({id:"local-landmark-fallback",severity:"info",text:"本地关键点模型未能稳定识别参考图，已保留启发式特征分析；后续正视图仍可手动调整锚点。"})}const Ie=zf(z,P.current,C);ae(B),ee(Xe=>Xe.map(Oe=>!x&&Oe.description.trim()?Oe:{...Oe,description:pT(Oe,z,K)})),Zn(Ie),Jn(Xe=>Ie.some(Oe=>Oe.id===Xe)?Xe:Ie[0]?.id||""),Fe(Date.now()),k("details")}finally{Le(!1)}},[K,he,Lt?.id,z]),Al=O.useCallback(async(x=!1)=>{if(!z.length){fe("请先上传至少 1 张参考图"),k("references");return}const M=he?{...he,confirmed:!0,updatedAt:Date.now()}:Lt?{...br(Lt.id),confirmed:!0}:null;Mt(M),await Zr(x,M)},[he,Lt,z.length,Zr]),Cm=x=>{Jn(x),n.current?.click()},Pm=O.useCallback(x=>{const M=x?.[0];if(!M)return;if(!M.type.startsWith("image/")){fe("请选择图片文件替换切片");return}if(M.size>20*1024*1024){fe("单张切片图片不能超过 20MB");return}const C=URL.createObjectURL(M);Zn(B=>B.map(ie=>ie.id!==Ws?ie:(ie.replaced&&ie.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(ie.previewUrl),{...ie,file:M,previewUrl:C,remoteUrl:void 0,remoteFingerprint:void 0,replaced:!0,cropX:50,cropY:50,cropWidth:100,cropHeight:100,zoom:1.05,locked:!0}))),fe("")},[Ws]),Lm=x=>{const M=P.current.find(B=>B.id===x);M?.replaced&&M.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(M.previewUrl);const C=zf(z,P.current.map(B=>B.id===x?{...B,replaced:!1,file:void 0,remoteUrl:void 0,remoteFingerprint:void 0}:B),he);Zn(C),Jn(B=>C.some(ie=>ie.id===B)?B:C[0]?.id||"")},Nm=x=>{const M=z.find(ie=>ie.id===x.sourceRefId);if(!M)return;const C=`slice-custom-${Date.now()}`,B={id:C,kind:"other",label:"新细节",description:"说明此区域需要 AI 精确保留的形状、颜色、材质和遮挡关系。",previewUrl:M.previewUrl,sourceRefId:M.id,cropX:x.centerX,cropY:x.centerY,cropWidth:x.width,cropHeight:x.height,zoom:100/Math.max(x.width,x.height),locked:!0,replaced:!1};Zn(ie=>[...ie,B]),Jn(C)},Im=(x,M)=>{Zn(C=>C.map(B=>{if(B.id!==x)return B;const ie=M.cropX!==void 0||M.cropY!==void 0||M.cropWidth!==void 0||M.cropHeight!==void 0||M.zoom!==void 0||M.sourceRefId!==void 0||M.previewUrl!==void 0;return{...B,...M,...ie?{remoteUrl:void 0,remoteFingerprint:void 0}:{}}}))},Dm=x=>{const M=P.current.find(C=>C.id===x);M?.replaced&&M.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(M.previewUrl),Zn(C=>C.filter(B=>B.id!==x)),Jn(C=>C!==x?C:P.current.find(B=>B.id!==x)?.id||"")},er=O.useCallback(x=>{const M={front:"目标:生成单张Kigurumi头壳正视图,适合工坊沟通。",revision:"目标:按标注和锚点修订正视图,保持角色一致。",turnaround:"目标:基于已确认正视母版生成前、左侧、右侧、后四个正交视图,顺序固定且角色一致。"}[x],C=W.filter(Te=>Te.locked&&Te.description.trim()).slice(0,6).map(Te=>`${Te.label}/${Ro[Te.kind]}:${ms(Te.description,70)}`),B=z.filter(Te=>Te.note.trim()).slice(0,4).map(Te=>`${Te.label}:${ms(Te.note,44)}`),ie=Hn.filter(Te=>Te.locked&&Te.description.trim()).slice(0,6).map(Te=>`${Te.label}/${Ro[Te.kind]}${Te.replaced?"/用户替换":"/自动裁切"}:${ms(Te.description,58)}`),Ie=new Set(z.map(Te=>Te.kind)),Xe=["side","back"].filter(Te=>!Ie.has(Te)),Oe=Xe.length?`缺失${Xe.map(Te=>Te==="side"?"侧面":"背面").join("和")}参考:未知结构仅做最小、对称、工艺可行推断,不得新增配件、发色块或改变发长。`:"侧面与背面有参考:按对应视角保留发长、遮挡、配件位置和不对称细节。",Ze=rT(he),at=Qn.filter(Te=>(Te.tool!=="liquify"||["liquify-strength"].includes(Te.id))&&Te.value!==0).slice(0,5).map(Te=>`${Te.label}${kf(Te.value,Te.unit)}`),Bt=Sf(X),Ut=x==="revision"||x==="turnaround"?[Bt?`画面标注:${ms(Bt,180)}`:"",Ee.note.trim()?`标注:${ms(Ee.note,120)}`:"",Ee.faceWidth!==0?`脸型${Ee.faceWidth>0?"加宽":"收窄"}${Math.abs(Ee.faceWidth)}%`:"",Ee.eyeScale!==0?`眼睛${Ee.eyeScale>0?"放大":"缩小"}${Math.abs(Ee.eyeScale)}%`:"",Ee.mouthCurve!==0?`嘴型${Ee.mouthCurve>0?"上扬":"克制"}${Math.abs(Ee.mouthCurve)}%`:"",at.length?`微调:${at.join("；")}`:"",Ha.length?`本地变形:${Ha.slice(0,2).map(Te=>ms(Te,42)).join("；")}`:"",Ee.wigCleanup?"清理杂毛并保持发束走向":"",Ee.localRegenerate?"标注区局部重绘,未标注区域保持稳定":""].filter(Boolean):[];return Of([M,K.trim()?`整体:${ms(K,180)}`:"",C.length?`锁定:${C.join("；")}`:"",ie.length?`切片:${ie.join("；")}`:"",Ze?`校准:${Ze}`:"",`推断边界:${Oe}`,B.length?`参考:${B.join("；")}`:"",Ut.length?`编辑:${Ut.join("；")}`:"",x==="turnaround"?"成品标准:单张白底棚拍四视图;从左到右严格为正面、左侧面、右侧面、背面;四个头壳同尺寸同基线同光照,禁止三分之四视角、镜像复用和重复正面。":"成品标准:白色无缝背景上的实体animegao kigurumi头壳产品摄影;不透明FRP/树脂硬壳,底漆+色漆+缎面清漆,眼口开孔有真实壳厚和干净切边,眼片为内嵌印刷亚克力或网布;假发呈合成纤维根部密度、发帽体积、分层发束、单丝断裂感和顺发丝方向的各向异性高光;发际线、眼片、耳朵和配件连接处有窄接触阴影;85-120mm产品镜头、柔光箱反射、真实曝光、无泛光无美颜;完整头发耳朵配件入镜,无脖子身体支架;不是动漫头像、2D插画、真人cos、瓷娃娃或PVC手办。"])},[X,W,Ha,Ee,K,he,z,Hn,Qn]),vh=x=>{_t(M=>[x,...M].slice(0,12)),dt(x.id),$e(""),ke(`${x.label}成果图`),_e(x.prompt.slice(0,180))},ss=O.useCallback(async({label:x,sourceInputs:M,templateId:C,prompt:B,nextStep:ie,markAs:Ie,frontMasterId:Xe})=>{if(!i)return Ke("idle"),fe("请先登录后使用 KigForm 头壳工坊"),null;if(!Ua)return Ke("idle"),fe("KigCraft 头壳参考功能需要完成社区身份认证后使用"),null;if(!M.length)return Ke("idle"),fe("请至少上传 1 张角色参考图"),null;const Oe=Po(ts);if(je&&je.remaining<Oe)return Ke("idle"),fe(`当前模型每张消耗 ${Oe} 次，剩余 AI 次数不足`),null;Ke("generating"),fe("");const Ze=Of(B.split(`
`)),at=Bf(C,se,g.current),Bt=cT(C);let Ut="";try{const Te=await fn.generate({mode:"head_reference",imageUrl:M[0].url,imageUrls:M.map(zt=>zt.url),referenceManifest:M.map(zt=>zt.manifest),themeId:C,templateId:C,modelProfileId:ts?.id,customPrompt:Ze,aspectRatio:at,idempotencyKey:Bt,frontMasterId:Xe}),Qt=Sr(Te.data,Te.data);Ut=Qt.jobId||"",Ut&&$(zt=>zt&&{...zt,jobId:Ut,templateId:C,phase:Qt.status==="queued"||Qt.status==="created"?"queued":zt.phase});const ve=await Dh(Qt,zt=>{$(hn=>{if(!hn)return hn;const Ln=zt.stage==="quality_check"?"quality_check":zt.status==="queued"?"queued":"running";return hn.phase===Ln?hn:{...hn,phase:Ln}})});if(!ve.success&&!ve.resultUrl&&!ve.resultToken)throw new Error("生成结果为空");const ot=await Yr(ve),ct={id:`${C}-${Date.now()}`,label:x,templateId:C,displayUrl:ot,remoteUrl:ve.resultUrl,result:ve,prompt:Ze,createdAt:Date.now(),frontMasterId:Xe};return Ie==="geometry"?vt(ct):vh(ct),No(C),Ie==="front"&&(Rt(ct.id),Z(""),te(null),vt(null),Y([]),st(!1),F(Cc),bs(Mr),gn([]),Li([]),Na(null),Ts(null)),Ie==="turnaround"&&R(ct.id),At(zt=>({used:Math.max(0,(ve.limit||zt?.limit||0)-ve.remaining),remaining:ve.remaining,limit:ve.limit||zt?.limit||0,exchangeRemaining:zt?.exchangeRemaining})),Ke("ready"),k(ie),ct}catch(Te){return Ut&&No(C),Ke("error"),fe(Fn(Te,"AI 生成失败，请稍后重试")),await El(),null}},[se,Ua,Yr,El,ts?.id,ts?.quotaCost,je,i]);O.useEffect(()=>{const x=i?.id||"";if(!x||y.current===x)return;y.current=x;let M=!1;return(async()=>{try{const[B,ie]=await Promise.all([fn.getLatestKigCraftFrontMaster(),fn.listJobs({workflowType:"head_reference",limit:10})]);if(M)return;const Ie=B.data.master;if(Ie){const ot={id:`kigcraft-front-master-${Ie.id}`,label:`已确认正视母版 v${Ie.version}`,templateId:"kigcraft-front-master",displayUrl:Uf(Ie.assetUrl),remoteUrl:Ie.assetUrl,result:{success:!0,resultUrl:Ie.assetUrl,remaining:0,limit:0,workflowType:"head_reference",promptText:"服务端已确认正视母版",themeId:"kigcraft-front-master",themeName:"已确认正视母版",themeIcon:"",aspectRatio:"3:4",mode:"head_reference",actionId:"kigcraft-front-master",generationId:Ie.sourceGenerationId,frontMasterId:Ie.id},prompt:"从服务端恢复的不可变正视母版。",createdAt:Date.parse(Ie.createdAt)||Date.now(),frontMasterId:Ie.id,frontMasterVersion:Ie.version};te(Ie),_t(ct=>ct.some(zt=>zt.frontMasterId===Ie.id)?ct:[ot,...ct].slice(0,12)),Rt(ct=>ct||ot.id),Z(ct=>ct||ot.id),dt(ct=>ct||ot.id)}const Xe=Ie?ie.data.jobs.find(ot=>ot.templateId==="kigcraft-geometry-analysis"&&ot.status==="succeeded"&&ot.frontMasterId===Ie.id&&!!ot.result):null;if(Xe?.result){const ot=await Yr(Xe.result);if(M)return;vt({id:`kigcraft-geometry-analysis-${Xe.jobId}`,label:"3D 几何辅助",templateId:"kigcraft-geometry-analysis",displayUrl:ot,remoteUrl:Xe.result.resultUrl,result:Xe.result,prompt:Xe.result.promptText||"从服务端恢复的几何辅助图。",createdAt:Xe.updatedAt?Date.parse(Xe.updatedAt):Date.now(),frontMasterId:Xe.frontMasterId})}const Oe=ie.data.jobs.find(ot=>["created","queued","running"].includes(ot.status)&&["kigcraft-front-design","kigcraft-front-revision","kigcraft-turnaround","kigcraft-geometry-analysis"].includes(ot.templateId||""));if(!Oe||M)return;const Ze=Oe.templateId||"kigcraft-front-design",at=Ze==="kigcraft-turnaround"?"turnaround":Ze==="kigcraft-geometry-analysis"?"geometry":Ze==="kigcraft-front-revision"?"revision":"front",Bt=Oe.createdAt?Date.parse(Oe.createdAt):Date.now();$({kind:at,label:at==="turnaround"?"四视图":at==="geometry"?"3D 几何辅助":at==="revision"?"正视图修订":"正视图",phase:Oe.stage==="quality_check"?"quality_check":Oe.status==="queued"?"queued":"running",startedAt:Number.isFinite(Bt)?Bt:Date.now(),jobId:Oe.jobId,templateId:Ze}),Ke("generating");const Ut={success:!0,async:!0,jobId:Oe.jobId,status:Oe.status,remaining:0,limit:0,workflowType:"head_reference",promptText:"",themeId:Ze,themeName:"",themeIcon:"",aspectRatio:Ze==="kigcraft-turnaround"?"4:3":Ze==="kigcraft-geometry-analysis"?"16:9":"3:4",mode:"head_reference",actionId:Ze},Te=await Dh(Ut,ot=>{M||$(ct=>ct&&{...ct,phase:ot.stage==="quality_check"?"quality_check":ot.status==="queued"?"queued":"running"})});if(M)return;const Qt=await Yr(Te),ve={id:`${Ze}-${Te.generationId||Oe.jobId}`,label:at==="turnaround"?"四视图":at==="geometry"?"3D 几何辅助":at==="revision"?"正视图修订":"正视图",templateId:Ze,displayUrl:Qt,remoteUrl:Te.resultUrl,result:Te,prompt:Te.promptText||"从服务端恢复的生成结果。",createdAt:Date.now(),frontMasterId:Oe.frontMasterId};at==="geometry"?(vt(ve),k("front")):at==="turnaround"?(_t(ot=>[ve,...ot.filter(ct=>ct.id!==ve.id)].slice(0,12)),dt(ve.id),R(ve.id),H("turnaround"),k("turnaround")):(_t(ot=>[ve,...ot.filter(ct=>ct.id!==ve.id)].slice(0,12)),dt(ve.id),Rt(ve.id),Z(""),te(null),vt(null),k("front")),No(Ze),Ke("ready")}catch(B){M||(Ke(ie=>ie==="generating"?"error":ie),fe(Fn(B,"恢复生成任务失败，请稍后刷新重试")))}finally{M||Gn()}})(),()=>{M=!0}},[Gn,Yr,i?.id]);const yh=O.useCallback(async()=>{const x=Be?.jobId;if(x){fe("");try{const C=(await fn.cancelJob(x)).data;No(Be.templateId),C.status==="canceled"?(Gn(),Ke("idle"),fe("生成任务已取消，本次已扣配额将自动返还。")):fe("取消请求已提交；上游处理结束后将停止保存结果并自动返还配额。")}catch(M){fe(Fn(M,"取消生成任务失败，请稍后重试"))}}},[Gn,Be?.jobId,Be?.templateId]),Mh=O.useCallback(async()=>{if(!ui){fe("请先把一张清晰参考图标记为“正面”，它将作为角色身份母图"),k("references");return}if(!he?.confirmed){fe("请先确认绿色头部范围，再进入细节确认并生成正视图"),k("references");return}if(!de||ws===0||$r===0){fe("请先完成参考预检，并至少保留 1 项锁定特征和 1 个锁定切片"),k("details");return}is("front","正视图");try{Ke("uploading");const x=await Qs("front");await ss({label:"正视图",sourceInputs:x,templateId:"kigcraft-front-design",prompt:er("front"),nextStep:"front",markAs:"front"})}catch(x){Ke("error"),fe(Fn(x,"上传参考图失败，请稍后重试"))}finally{Gn("front")}},[de,Qs,er,ui,he?.confirmed,ws,$r,ss,Gn,is]),Rl=O.useCallback(async(x={})=>{if(!Ye)throw new Error("请先生成或选择正视图");let M="",C=Ye.displayUrl;try{const ve=await l.current?.exportImage();ve&&(M=URL.createObjectURL(ve),C=M)}catch{}const B=await Ir(C),ie=document.createElement("canvas"),Ie=B.naturalWidth||B.width,Xe=B.naturalHeight||B.height,Oe=1280,Ze=Math.min(Oe/Ie,Oe/Xe),at=Ie*Ze,Bt=Xe*Ze;ie.width=Math.max(1,Math.round(at)),ie.height=Math.max(1,Math.round(Bt));const Ut=ie.getContext("2d");if(!Ut)throw new Error("浏览器不支持图片编辑导出");Ut.fillStyle="#ffffff",Ut.fillRect(0,0,ie.width,ie.height),Ut.filter="brightness(100%) contrast(100%)",Ut.drawImage(B,0,0,ie.width,ie.height),Ut.filter="none";const Te=s.current;x.includeAnnotations!==!1&&Te&&(Ut.globalAlpha=.92,Ut.drawImage(Te,0,0,Te.width,Te.height,0,0,ie.width,ie.height),Ut.globalAlpha=1);const Qt=await new Promise((ve,ot)=>{ie.toBlob(ct=>{if(!ct){ot(new Error("图片导出失败"));return}ve(new File([ct],`kigcraft-front-edited-${Date.now()}.png`,{type:"image/png"}))},"image/png",.96)});return M&&URL.revokeObjectURL(M),Qt},[Ye]),ja=O.useCallback(async(x={})=>{const M=x.silent===!0;if(!Ye){M||fe("请先生成正视图后再识别关键点");return}Ot("detecting"),M||fe("");try{const C=await Ir(Ye.displayUrl),{detectAnimeLandmarks:B}=await ma(),ie=await B(C);if(!ie)throw new Error("未识别到稳定的头部关键点");Ms(WE(Co,ie.controls)),Jt(ie.debug),Ki("left-eye"),M||(qs(!0),Xs("eyes")),Ot("ready")}catch(C){Ot("error"),Jt(null),M||fe(Fn(C,"关键点识别失败，可继续手动拖动锚点调整"))}},[Ye]);O.useEffect(()=>{if(N!=="front"||!Ye?.displayUrl||L.current===Ye.id)return;L.current=Ye.id;const x=window.setTimeout(()=>{ja({silent:!0})},280);return()=>window.clearTimeout(x)},[N,Ye?.displayUrl,Ye?.id,ja]);const Um=O.useCallback(async()=>{if(!Ye){fe("请先生成正视图");return}is("revision","正视图修订");try{Ke("uploading");const x=await Rl({includeAnnotations:!0}),M=await fi(x),C=await Qs("revision",{url:M,manifest:{role:"edited_front",label:"用户编辑后的正视图",description:[Sf(X),Ee.note.trim()].filter(Boolean).join("；")||"保留未标注区域，只按可见编辑与锁定细节修订",locked:!0}});await ss({label:"正视图修订",sourceInputs:C,templateId:"kigcraft-front-revision",prompt:er("revision"),nextStep:"front",markAs:"front"}),Wa()}catch(x){Ke("error"),fe(Fn(x,"正视图修订失败，请稍后重试"))}finally{Gn("revision")}},[Rl,Qs,X,er,Ee.note,Ye,Gn,ss,is,fi]),Cl=O.useCallback(async()=>{if(H("turnaround"),!Ye){fe("请先生成或选择正视图");return}if(!Vt||!ti||!re){fe(xn?"当前正视图还有未提交修改，请先应用标注并确认为正视母版":"请先将当前正视候选确认为母版，再生成四视图"),k("front");return}is("turnaround","四视图");try{Ke("uploading");let x=ti.remoteUrl||ti.result.resultUrl||"";if(!x){const C=await fetch(ti.displayUrl).then(B=>B.blob());x=await fi(new File([C],`kigcraft-front-${Date.now()}.png`,{type:C.type||"image/png"}))}const M=await Qs("turnaround",{url:x,manifest:{role:"approved_front",label:"已确认正视母版",description:"四个视图必须保持相同脸型、眼睛、表情、发色分区、发型轮廓和可见配件",locked:!0}});await ss({label:"四视图",sourceInputs:M,templateId:"kigcraft-turnaround",prompt:er("turnaround"),nextStep:"turnaround",markAs:"turnaround",frontMasterId:re.id})}catch(x){Ke("error"),fe(Fn(x,"四视图生成失败，请稍后重试"))}finally{Gn("turnaround")}},[Qs,er,ti,re,xn,Gn,Ye,Vt,ss,is,fi]);O.useCallback(async()=>{if(!Vt||!ti||!re){fe(xn?"当前正视图还有未提交修改，请先提交并确认新母版":"请先将当前正视候选确认为母版，再生成 3D 几何辅助图");return}is("geometry","3D 几何辅助");try{Ke("generating"),await ss({label:"3D 几何辅助",sourceInputs:[{url:re.assetUrl,manifest:{role:"approved_front",label:`已确认正视母版 v${re.version}`,description:"只提取当前母版可见正面表面的深度、法线和完整头部轮廓，不重新设计角色",locked:!0,sourceReferenceId:re.id}}],templateId:"kigcraft-geometry-analysis",prompt:"保持当前正视母版的像素级构图、头部轮廓、五官、发型、耳朵与头部配件；输出严格对齐的 Depth、Normal、Mask 三联图。",nextStep:"front",markAs:"geometry",frontMasterId:re.id})}catch(x){Ke("error"),fe(Fn(x,"3D 几何辅助生成失败，请稍后重试"))}finally{Gn("geometry")}},[re,ti,xn,Gn,Vt,ss,is]);const km=O.useCallback(async()=>{if(!Pt||we==="publishing")return;const x=Se.trim(),M=Re.trim();if(!x){fe("请输入作品标题");return}Ke("publishing"),fe("");try{let C=Pt.remoteUrl||Pt.result.resultUrl||"";try{C=await Hf(await sm(Pt.displayUrl))}catch(Ie){console.warn("KigCraft watermarked publish export failed",Ie)}if(!C){const Ie=await fetch(Pt.displayUrl).then(Xe=>Xe.blob());C=await Hf(Ie)}const B=await fn.share({resultUrl:C,themeId:Pt.templateId,title:x,description:M,promptText:Pt.result.promptText||Pt.prompt,sourceImageUrl:z[0]?.remoteUrl,workflowType:Pt.result.workflowType||"head_reference",aspectRatio:Pt.result.aspectRatio||se}),ie=Sr(B.data,{});$e(ie.id||"published"),oe(!1),Ke("ready")}catch(C){Ke("error"),fe(Fn(C,"保存作品失败，请稍后重试"))}},[se,Pt,Re,Se,z,we]);function Wa(){h.current=null,f.current=null,Y([])}const bh=()=>{h.current=null,f.current=null,Y(x=>x.slice(0,-1))},Sh=(x,M)=>{const C=nT(x,M),B=parseFloat(M.style.width)||M.getBoundingClientRect().width||1,ie=parseFloat(M.style.height)||M.getBoundingClientRect().height||1;return SE(C.x,C.y,B,ie)},Pl=x=>{const M=s.current;M&&Tc(M,x?[...u.current,x]:u.current)},Fm=x=>{if(!Ye||bt!=="annotate"||x.button!==0)return;const M=s.current;if(!M)return;const C=Sh(x,M),B=`annotation-${Date.now()}-${u.current.length+1}`;if(fe(""),V==="text"){const Ie=Pe.trim();if(!Ie){fe("请先输入需要放到画面上的标注文字");return}Y(Xe=>[...Xe,{id:B,kind:"text",color:Ee.brushColor,fontSize:Ce,point:C,text:Ie.slice(0,48)}]);return}f.current=x.pointerId,M.setPointerCapture(x.pointerId);const ie=V==="brush"?{id:B,kind:"brush",color:Ee.brushColor,points:[C],strokeWidth:Ee.brushSize}:{id:B,kind:V,color:Ee.brushColor,start:C,end:C,strokeWidth:Ee.brushSize};h.current=ie,Pl(ie)},Om=x=>{const M=s.current,C=h.current;if(!M||!C||f.current!==x.pointerId)return;const B=Sh(x,M),ie=C.kind==="brush"?(()=>{const Ie=C.points[C.points.length-1];return Ie&&Math.hypot(B.x-Ie.x,B.y-Ie.y)<.0015||C.points.push(B),C})():C.kind==="text"?C:{...C,end:B};h.current=ie,Pl(ie)},Bm=x=>{if(f.current!==x.pointerId)return;const M=h.current;if(h.current=null,f.current=null,x.currentTarget.hasPointerCapture(x.pointerId)&&x.currentTarget.releasePointerCapture(x.pointerId),!M)return;let C=M;if(M.kind==="ellipse"||M.kind==="rect"){const B=Math.abs(M.end.x-M.start.x),ie=Math.abs(M.end.y-M.start.y);B<.01&&ie<.01&&(C={...M,start:{x:Je(M.start.x-.06,0,1),y:Je(M.start.y-.04,0,1)},end:{x:Je(M.start.x+.06,0,1),y:Je(M.start.y+.04,0,1)}})}Y(B=>[...B,C])},zm=x=>{h.current=null,f.current=null,x.currentTarget.hasPointerCapture(x.pointerId)&&x.currentTarget.releasePointerCapture(x.pointerId),Pl(null)},Eh=()=>{Wa(),Ue(""),F(Cc),bs(Mr),Nl(),st(!1)},Hm=async()=>{if(!Ye)return fe("请先生成正视候选"),!1;if(Ge||Ee.note.trim())return fe("当前包含标注或文字修订要求，请先点击“应用标注并重新生成”，再确认母版"),!1;fe(""),wt(!0);try{Ke("uploading");let x=Ye,M=Ye.remoteUrl||Ye.result.resultUrl||"",C=Ye.templateId.includes("revision")?"revision":"candidate",B={};if(xn){const Ze=await Rl({includeAnnotations:!1});M=await fi(Ze);const at=URL.createObjectURL(Ze);B=ns,C="local_edit",x={...Ye,id:`kigcraft-front-master-${Date.now()}`,label:"已确认正视母版",templateId:"kigcraft-front-master",displayUrl:at,remoteUrl:M,result:{...Ye.result,resultUrl:M,themeId:"kigcraft-front-master",themeName:"已确认正视母版"},prompt:`${Ye.prompt}
用户已确认本地五官与轮廓微调。`,createdAt:Date.now()}}else if(!M){const Ze=await fetch(Ye.displayUrl).then(at=>at.blob());M=await fi(new File([Ze],`kigcraft-front-master-${Date.now()}.png`,{type:Ze.type||"image/png"})),x={...Ye,remoteUrl:M}}const ie=Ye.result.generationId;if(!ie)throw new Error("当前正视候选缺少服务端生成记录，无法确认为母版");const Ie=`master:${ie}:${dT({assetUrl:M,recipe:B})}`,Oe=(await fn.createKigCraftFrontMaster({assetUrl:M,sourceGenerationId:ie,sourceKind:C,clientRequestId:Ie,editRecipe:B})).data.master;return x={...x,frontMasterId:Oe.id,frontMasterVersion:Oe.version},te(Oe),vt(null),x.id===Ye.id?_t(Ze=>Ze.map(at=>at.id===x.id?x:at)):vh(x),Rt(x.id),Z(x.id),xn&&Eh(),Ke("ready"),!0}catch(x){return Ke("error"),fe(Fn(x,"正视母版保存失败，请稍后重试")),!1}finally{wt(!1)}},Vm=x=>{dt(x.id),ke(`${x.label}成果图`),_e(x.prompt.slice(0,180)),oe(!1),x.templateId.includes("front")&&Rt(x.id),x.templateId.includes("turnaround")&&H("turnaround"),x.templateId.includes("turnaround")&&R(x.id)},Xa=(x,M)=>{bs(C=>C.map(B=>{if(B.id!==x)return B;const ie=Je(M,B.min,B.max);return{...B,value:ie}})),x==="face-width"&&F(C=>({...C,faceWidth:M})),x==="eye-size"&&F(C=>({...C,eyeScale:M})),x==="mouth-curve"&&F(C=>({...C,mouthCurve:M}))},Gm=x=>{bs(M=>M.map(C=>{const B=Mr.find(ie=>ie.id===C.id);return C.tool===x&&B?{...C,value:B.value}:C})),x==="face"&&F(M=>({...M,faceWidth:0})),x==="eyes"&&F(M=>({...M,eyeScale:0})),x==="mouth"&&F(M=>({...M,mouthCurve:0})),x==="liquify"&&Nl()},Th=()=>{Ms(Co),Ki("left-eye"),Ye&&ja({silent:!0})},Jr=(x,M)=>{Ms(C=>C.map(B=>B.id===x?{...B,...M}:B))},jm=(x,M)=>{x.preventDefault(),x.stopPropagation(),p.current=M,Ki(M),x.currentTarget.setPointerCapture(x.pointerId)},Wm=x=>{const M=p.current,C=r.current;if(!M||!C)return;const ie=x.currentTarget.closest(".kigcraft-anchor-layer")?.getBoundingClientRect()||C.getBoundingClientRect(),Ie=Je((x.clientX-ie.left)/ie.width*100,4,96),Xe=Je((x.clientY-ie.top)/ie.height*100,4,96);Jr(M,{x:Ie,y:Xe})},wh=x=>{p.current=null,x.currentTarget.hasPointerCapture(x.pointerId)&&x.currentTarget.releasePointerCapture(x.pointerId)},Ah=x=>{const M=r.current;if(!M)return null;const B=(M.querySelector(".kigcraft-canvas-plane")||M).getBoundingClientRect();if(!B.width||!B.height)return null;const ie=ut.width||B.width,Ie=ut.height||B.height,Xe=Math.min(B.width/ie,B.height/Ie),Oe=ie*Xe,Ze=Ie*Xe,at=B.left+(B.width-Oe)/2,Bt=B.top+(B.height-Ze)/2;return{x:Je((x.clientX-at)/Oe,0,1),y:Je((x.clientY-Bt)/Ze,0,1)}},Xm=(x,M)=>{M.length&&(gn(C=>C.map(B=>B.id===x?{...B,strokes:[...B.strokes,...M].slice(-520)}:B)),Li([]))};function Ll(x,M){const C=Je(M/10,-1,1);return Math.abs(C)<.001?null:rh({mode:"scale",radius:Vn,scale:C,strength:Math.abs(C),x:x.x,y:x.y})}const qm=x=>{if(!Ye||bt!=="liquify")return;const M=Ah(x);if(!M)return;if(x.preventDefault(),x.currentTarget.setPointerCapture(x.pointerId),Ni({active:!0,mode:Qi,radius:Vn,x:M.x,y:M.y}),Qi==="scale"){Na(M),Ts(Ll(M,Ys));return}const C=++b.current;w.current={batchId:C,last:M,pointerId:x.pointerId},gn(B=>[...B,{id:C,strokes:[]}].slice(-80)),Li([])},$m=x=>{if(!Ye||bt!=="liquify")return;const M=Ah(x);if(!M)return;if(Qi==="scale"){const ie=x.currentTarget.hasPointerCapture(x.pointerId);Ni({active:ie,mode:"scale",radius:Vn,x:M.x,y:M.y}),ie&&(Na(M),Ts(Ll(M,Ys)));return}const C=w.current;if(C?.pointerId!==x.pointerId){Ni({active:!1,mode:"warp",radius:Vn,x:M.x,y:M.y});return}x.preventDefault();const B=BE({from:C.last,radius:Vn,strength:gl,to:M});if(C.last=M,B.strength>0){const ie=Ia?[B,HE(B,Js)]:[B];Xm(C.batchId,ie)}Ni({active:!0,mode:"warp",radius:Vn,x:M.x,y:M.y})},Rh=x=>{bt==="liquify"&&(x.currentTarget.hasPointerCapture(x.pointerId)&&x.currentTarget.releasePointerCapture(x.pointerId),w.current?.pointerId===x.pointerId&&(w.current=null,gn(M=>M.filter(C=>C.strokes.length>0))),Ni(M=>M&&{...M,active:!1}))},Ym=()=>{bt!=="liquify"||w.current||Ni(null)},Ch=()=>{gn(x=>{const M=[...x];let C=M.pop();for(;C&&C.strokes.length===0;)C=M.pop();return C?(Li(B=>[C,...B].slice(0,40)),M):x})},Ph=()=>{Li(x=>{const[M,...C]=x;return M?(gn(B=>[...B,M].slice(-80)),C):x})};function Nl(){w.current=null,gn([]),Li([]),Xr(Rc),Na(null),Ts(null),Ni(null)}O.useEffect(()=>{if(N!=="front")return;const x=ie=>ie instanceof HTMLElement&&(ie.isContentEditable||ie.tagName==="INPUT"||ie.tagName==="TEXTAREA"||ie.tagName==="SELECT"),M=ie=>{if(!x(ie.target)){if(ie.code==="Space"){ie.preventDefault(),st(!0);return}if(bt==="liquify"){if((ie.metaKey||ie.ctrlKey)&&ie.key.toLowerCase()==="z"){ie.preventDefault(),ie.shiftKey?Ph():Ch();return}ie.key==="["?(ie.preventDefault(),$s(Ie=>Je(Ie-2,12,96))):ie.key==="]"&&(ie.preventDefault(),$s(Ie=>Je(Ie+2,12,96)))}}},C=ie=>{ie.code==="Space"&&st(!1)},B=()=>st(!1);return window.addEventListener("keydown",M),window.addEventListener("keyup",C),window.addEventListener("blur",B),()=>{window.removeEventListener("keydown",M),window.removeEventListener("keyup",C),window.removeEventListener("blur",B)}},[bt,N]);const Km=()=>bt==="annotate"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"kigcraft-inspector-title",children:[d.jsx(Ae,{name:Ii.icon}),d.jsxs("div",{children:[d.jsx("h3",{children:Ii.label}),d.jsx("p",{children:Ii.desc})]})]}),d.jsxs("div",{className:"kigcraft-mark-tools","aria-label":"标注工具",children:[d.jsxs("button",{type:"button",className:V==="ellipse"?"is-active":"",onClick:()=>J("ellipse"),"aria-pressed":V==="ellipse",children:[d.jsx(Ae,{name:"target"})," 圈选"]}),d.jsxs("button",{type:"button",className:V==="rect"?"is-active":"",onClick:()=>J("rect"),"aria-pressed":V==="rect",children:[d.jsx(Ae,{name:"crop"})," 方框"]}),d.jsxs("button",{type:"button",className:V==="brush"?"is-active":"",onClick:()=>J("brush"),"aria-pressed":V==="brush",children:[d.jsx(Ae,{name:"brush"})," 画笔"]}),d.jsxs("button",{type:"button",className:V==="text"?"is-active":"",onClick:()=>J("text"),"aria-pressed":V==="text",children:[d.jsx("strong",{children:"A"})," 文字"]})]}),d.jsxs("div",{className:"kigcraft-annotation-status","aria-live":"polite",children:[d.jsxs("span",{children:[X.length," 项标注"]}),d.jsxs("div",{children:[d.jsxs("button",{type:"button",onClick:bh,disabled:!X.length,children:[d.jsx(Ae,{name:"reset"})," 撤销"]}),d.jsxs("button",{type:"button",onClick:Wa,disabled:!X.length,children:[d.jsx(Ae,{name:"trash"})," 清空"]})]})]}),d.jsx("div",{className:"kigcraft-color-swatches","aria-label":"标注颜色",children:["#ef4444","#f97316","#facc15","#22c55e","#38bdf8","#a855f7","#ffffff"].map(x=>d.jsx("button",{type:"button",className:Ee.brushColor===x?"is-active":"",style:{background:x},onClick:()=>F(M=>({...M,brushColor:x})),"aria-label":`选择颜色 ${x}`},x))}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"标注颜色"}),d.jsx("input",{type:"color",value:Ee.brushColor,onChange:x=>F(M=>({...M,brushColor:x.target.value}))})]}),V==="text"&&d.jsxs(d.Fragment,{children:[d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"标注文字"}),d.jsx("input",{type:"text",value:Pe,maxLength:48,onChange:x=>Ue(x.target.value),placeholder:"例如：缩短左侧刘海"})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:["文字大小 ",Ce,"px"]}),d.jsx("input",{type:"range",min:"14",max:"56",value:Ce,onChange:x=>Ve(Number(x.target.value))})]})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:[V==="brush"?"画笔":"线条","粗细 ",Ee.brushSize,"px"]}),d.jsx("input",{type:"range",min:"2",max:"28",value:Ee.brushSize,onChange:x=>F(M=>({...M,brushSize:Number(x.target.value)}))})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"补充说明"}),d.jsx("textarea",{value:Ee.note,onChange:x=>F(M=>({...M,note:x.target.value.slice(0,500)})),placeholder:"例如：把左侧刘海收短一点，眼睛更圆，嘴角更柔和。"})]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>Rs(),children:[d.jsx(Ae,{name:"image"})," 上传参考图"]})]}):bt==="liquify"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"kigcraft-inspector-title",children:[d.jsx(Ae,{name:Ii.icon}),d.jsxs("div",{children:[d.jsx("h3",{children:Ii.label}),d.jsx("p",{children:Ii.desc})]})]}),d.jsxs("div",{className:"kigcraft-liquify-mode","aria-label":"液化模式",children:[d.jsx("button",{type:"button",className:Qi==="warp"?"is-active":"",onClick:()=>{oh("warp"),Ni(null)},children:"变形笔刷"}),d.jsx("button",{type:"button",className:Qi==="scale"?"is-active":"",onClick:()=>{oh("scale"),Ni(null)},children:"局部缩放"})]}),d.jsxs("div",{className:"kigcraft-param-list",children:[d.jsxs("label",{className:"kigcraft-param-row",children:[d.jsxs("span",{children:[d.jsx("strong",{children:"笔刷半径"}),d.jsxs("em",{children:[Math.round(Vn),"px"]})]}),d.jsxs("div",{children:[d.jsx("button",{type:"button",onClick:()=>$s(x=>Je(x-4,12,160)),"aria-label":"笔刷半径减少",children:"‹"}),d.jsx("input",{type:"range",min:"12",max:"160",step:"1",value:Vn,onChange:x=>$s(Number(x.target.value))}),d.jsx("button",{type:"button",onClick:()=>$s(x=>Je(x+4,12,160)),"aria-label":"笔刷半径增加",children:"›"}),d.jsx("button",{type:"button",onClick:()=>$s(Rf),"aria-label":"笔刷半径重置",children:d.jsx(Ae,{name:"reset"})})]})]}),Qi==="warp"?d.jsxs(d.Fragment,{children:[d.jsxs("label",{className:"kigcraft-param-row",children:[d.jsxs("span",{children:[d.jsx("strong",{children:"变形强度"}),d.jsx("em",{children:gl.toFixed(2)})]}),d.jsxs("div",{children:[d.jsx("button",{type:"button",onClick:()=>La(x=>Je(Number((x-.02).toFixed(2)),0,.5)),"aria-label":"变形强度减少",children:"‹"}),d.jsx("input",{type:"range",min:"0",max:"0.5",step:"0.01",value:gl,onChange:x=>La(Number(x.target.value))}),d.jsx("button",{type:"button",onClick:()=>La(x=>Je(Number((x+.02).toFixed(2)),0,.5)),"aria-label":"变形强度增加",children:"›"}),d.jsx("button",{type:"button",onClick:()=>La(Cf),"aria-label":"变形强度重置",children:d.jsx(Ae,{name:"reset"})})]})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ia,onChange:x=>rm(x.target.checked)}),d.jsx("span",{children:"对称液化"})]}),Ia&&d.jsxs("label",{className:"kigcraft-param-row",children:[d.jsxs("span",{children:[d.jsx("strong",{children:"脸中线"}),d.jsxs("em",{children:[Math.round(Js*100),"%"]})]}),d.jsxs("div",{children:[d.jsx("button",{type:"button",onClick:()=>Da(x=>Je((x??Js)-.01,.35,.65)),"aria-label":"脸中线左移",children:"‹"}),d.jsx("input",{type:"range",min:"0.35",max:"0.65",step:"0.001",value:Js,onChange:x=>Da(Number(x.target.value))}),d.jsx("button",{type:"button",onClick:()=>Da(x=>Je((x??Js)+.01,.35,.65)),"aria-label":"脸中线右移",children:"›"}),d.jsx("button",{type:"button",onClick:()=>Da(null),"aria-label":"脸中线重置",children:d.jsx(Ae,{name:"reset"})})]})]})]}):d.jsxs("label",{className:"kigcraft-param-row",children:[d.jsxs("span",{children:[d.jsx("strong",{children:"缩放强度"}),d.jsx("em",{children:Ys.toFixed(1)})]}),d.jsxs("div",{children:[d.jsx("button",{type:"button",onClick:()=>Xr(x=>Je(Number((x-.5).toFixed(1)),-10,10)),"aria-label":"缩放强度减少",children:"‹"}),d.jsx("input",{type:"range",min:"-10",max:"10",step:"0.1",value:Ys,onChange:x=>Xr(Number(x.target.value))}),d.jsx("button",{type:"button",onClick:()=>Xr(x=>Je(Number((x+.5).toFixed(1)),-10,10)),"aria-label":"缩放强度增加",children:"›"}),d.jsx("button",{type:"button",onClick:()=>{Xr(Rc),Ts(null)},"aria-label":"缩放强度重置",children:d.jsx(Ae,{name:"reset"})})]})]})]}),d.jsxs("div",{className:"kigcraft-liquify-status",children:[d.jsxs("span",{children:["已记录 ",d.jsx("strong",{children:Sl})," 笔"]}),Ht!=="ready"&&d.jsx("em",{children:"当前未连接 Pixi Mesh"})]}),d.jsxs("div",{className:"kigcraft-inspector-actions",children:[d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Ch,disabled:!Tt.some(x=>x.strokes.length>0),children:[d.jsx(Ae,{name:"reset"})," 撤销一笔"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Ph,disabled:!Ji.length,children:[d.jsx(Ae,{name:"target"})," 重做"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Nl,disabled:!Sl,children:[d.jsx(Ae,{name:"trash"})," 清空液化"]})]}),_n&&d.jsxs("div",{className:"kigcraft-anchor-inspector",children:[d.jsxs("div",{children:[d.jsx("strong",{children:_n.label}),d.jsxs("span",{children:[Math.round(_n.x),"%,"," ",Math.round(_n.y),"%"]})]}),d.jsxs("label",{children:["X",d.jsx("input",{type:"range",min:"4",max:"96",value:_n.x,onChange:x=>Jr(_n.id,{x:Number(x.target.value)})})]}),d.jsxs("label",{children:["Y",d.jsx("input",{type:"range",min:"4",max:"96",value:_n.y,onChange:x=>Jr(_n.id,{y:Number(x.target.value)})})]})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ss,onChange:x=>qs(x.target.checked)}),d.jsx("span",{children:"显示全部锚点"})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ee.wigCleanup,onChange:x=>F(M=>({...M,wigCleanup:x.target.checked}))}),d.jsx("span",{children:"清理假发杂毛"})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ee.localRegenerate,onChange:x=>F(M=>({...M,localRegenerate:x.target.checked}))}),d.jsx("span",{children:"优先局部修正"})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"kigcraft-inspector-title",children:[d.jsx(Ae,{name:Ii.icon}),d.jsxs("div",{children:[d.jsx("h3",{children:Ii.label}),d.jsx("p",{children:Ii.desc})]})]}),d.jsx("div",{className:"kigcraft-param-list",children:fm.map(x=>d.jsxs("label",{className:"kigcraft-param-row",children:[d.jsxs("span",{children:[d.jsx("strong",{children:x.label}),d.jsx("em",{children:kf(x.value,x.unit)})]}),d.jsxs("div",{children:[d.jsx("button",{type:"button",onClick:()=>Xa(x.id,x.value-x.step),"aria-label":`${x.label}减少`,children:"‹"}),d.jsx("input",{type:"range",min:x.min,max:x.max,step:x.step,value:x.value,onChange:M=>Xa(x.id,Number(M.target.value))}),d.jsx("button",{type:"button",onClick:()=>Xa(x.id,x.value+x.step),"aria-label":`${x.label}增加`,children:"›"}),d.jsx("button",{type:"button",onClick:()=>{const M=Mr.find(C=>C.id===x.id);Xa(x.id,M?.value??0)},"aria-label":`${x.label}重置`,children:d.jsx(Ae,{name:"reset"})})]})]},x.id))}),_n&&d.jsxs("div",{className:"kigcraft-anchor-inspector",children:[d.jsxs("div",{children:[d.jsx("strong",{children:_n.label}),d.jsxs("span",{children:[Math.round(_n.x),"%, ",Math.round(_n.y),"%"]})]}),d.jsxs("label",{children:["X",d.jsx("input",{type:"range",min:"4",max:"96",value:_n.x,onChange:x=>Jr(_n.id,{x:Number(x.target.value)})})]}),d.jsxs("label",{children:["Y",d.jsx("input",{type:"range",min:"4",max:"96",value:_n.y,onChange:x=>Jr(_n.id,{y:Number(x.target.value)})})]})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ss,onChange:x=>qs(x.target.checked)}),d.jsx("span",{children:"显示全部锚点"})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ee.wigCleanup,onChange:x=>F(M=>({...M,wigCleanup:x.target.checked}))}),d.jsx("span",{children:"清理假发杂毛"})]}),d.jsxs("label",{className:"kigcraft-check",children:[d.jsx("input",{type:"checkbox",checked:Ee.localRegenerate,onChange:x=>F(M=>({...M,localRegenerate:x.target.checked}))}),d.jsx("span",{children:"优先局部修正"})]}),d.jsxs("div",{className:"kigcraft-inspector-actions",children:[d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>Gm(bt),children:[d.jsx(Ae,{name:"reset"})," 重置参数"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Th,children:[d.jsx(Ae,{name:"target"})," 重置锚点"]})]})]}),Lh=(x="inline")=>{if(!vl&&!lh)return null;const M=lh,C=we==="uploading"?"uploading":Be?.phase,B=C==="uploading"?M?"正在准备正视母版":"正在准备四视图素材":C==="queued"?"任务已提交，正在排队":C==="quality_check"?"正在检查四视图质量":M?"正在生成 Depth / Normal / Mask":"正在生成四个正交视图",ie=C==="uploading"?M?"任务只使用服务端已确认的不可变正视母版。":"正在上传已确认母版、锁定选区和原始参考图。":C==="quality_check"?"正在检查视图数量、顺序、白底、清晰度和基本构图。":M?"后台模型正在估计可见正面表面的深度、法线与完整头部轮廓。":"后台正在生成正面、角色左侧面、角色右侧面和背面；当前母版版本不会被后续编辑影响。";return d.jsxs("div",{className:`kigcraft-turnaround-progress is-${x}`,role:"status","aria-live":"polite",children:[d.jsxs("div",{className:"kigcraft-turnaround-progress-mark",children:[d.jsx("span",{}),d.jsx(Ae,{name:M?"spark":"grid"})]}),d.jsxs("div",{className:"kigcraft-turnaround-progress-body",children:[d.jsxs("div",{children:[d.jsx("strong",{children:B}),d.jsxs("small",{children:["已等待 ",uT(pe)]})]}),d.jsx("p",{children:ie}),d.jsx("div",{className:"kigcraft-progress-track is-indeterminate",role:"progressbar","aria-label":B,children:d.jsx("span",{})})]}),d.jsxs("div",{className:"kigcraft-turnaround-progress-actions",children:[d.jsx("strong",{className:"kigcraft-turnaround-progress-value",children:C==="quality_check"?"质检中":"处理中"}),Be?.jobId&&d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:()=>{yh()},children:"取消任务"})]})]})},Zm=()=>{if(!Lt||!he)return null;const x=St==="detecting",M={height:`${he.height}%`,left:`${he.x}%`,top:`${he.y}%`,transform:`translate(-50%, -50%) rotate(${he.rotation}deg)`,width:`${he.width}%`};return d.jsxs("section",{className:"kigcraft-head-calibration",children:[d.jsxs("div",{className:"kigcraft-section-title",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"头部范围确认"}),d.jsx("p",{children:"先确认头部、发型和脸部的大体范围，再进入细节分析，可减少后续切片和关键点误差。"})]}),d.jsx("span",{className:`kigcraft-calibration-badge ${he.confirmed?"is-confirmed":""} ${x?"is-detecting":""}`,children:Mm})]}),d.jsxs("div",{className:"kigcraft-calibration-layout",children:[d.jsxs("div",{className:"kigcraft-calibration-preview",children:[d.jsxs("div",{ref:a,className:"kigcraft-calibration-image-frame",children:[d.jsx("img",{src:Lt.previewUrl,alt:"头部范围参考图",draggable:!1}),d.jsxs("div",{className:"kigcraft-head-mask",style:M,onPointerDown:C=>pi("move",C),onMouseDown:C=>pi("move",C),role:"presentation",children:[d.jsx("button",{type:"button",className:"is-top","aria-label":"拖动调整头部范围上边缘",onPointerDown:C=>pi("top",C),onMouseDown:C=>pi("top",C)}),d.jsx("button",{type:"button",className:"is-right","aria-label":"拖动调整头部范围右边缘",onPointerDown:C=>pi("right",C),onMouseDown:C=>pi("right",C)}),d.jsx("button",{type:"button",className:"is-bottom","aria-label":"拖动调整头部范围下边缘",onPointerDown:C=>pi("bottom",C),onMouseDown:C=>pi("bottom",C)}),d.jsx("button",{type:"button",className:"is-left","aria-label":"拖动调整头部范围左边缘",onPointerDown:C=>pi("left",C),onMouseDown:C=>pi("left",C)}),d.jsx("span",{className:"kigcraft-head-mask-label",children:"有效头壳范围"})]})]}),x&&d.jsx("div",{className:"kigcraft-calibration-loading",children:"识别中"})]}),d.jsxs("aside",{className:"kigcraft-calibration-controls",children:[d.jsxs("div",{className:"kigcraft-analysis-status",children:[d.jsx(Ae,{name:"target"}),d.jsxs("div",{children:[d.jsx("strong",{children:Nf(he)}),d.jsx("span",{children:"当前范围会用于细节切片、正视图锚点初值和生成提示词。"})]}),d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:Am,disabled:x,children:"重新识别"})]}),d.jsxs("div",{className:`kigcraft-image-quality ${qt?`is-${qt.grade}`:""}`,children:[d.jsxs("div",{className:"kigcraft-image-quality-head",children:[d.jsx(Ae,{name:"target"}),d.jsxs("span",{children:[d.jsx("strong",{children:"头部范围质量"}),d.jsx("small",{children:pl?"正在分析":qt?`${qt.source==="wasm"?"WASM":"兼容"} · ${qt.score} 分`:"等待图片"})]})]}),qt&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"kigcraft-image-quality-meter","aria-label":`头部范围质量 ${qt.score} 分`,children:d.jsx("span",{style:{width:`${qt.score}%`}})}),d.jsxs("div",{className:"kigcraft-image-quality-metrics",children:[d.jsxs("span",{children:["清晰度 ",d.jsx("strong",{children:Math.round(qt.sharpness*100)})]}),d.jsxs("span",{children:["对比度 ",d.jsx("strong",{children:Math.round(qt.contrast*100)})]}),d.jsxs("span",{children:["亮度 ",d.jsx("strong",{children:Math.round(qt.brightness*100)})]})]}),d.jsx("p",{children:qt.warnings[0]||"当前范围适合进入细节分析。"})]})]}),d.jsxs("div",{className:"kigcraft-calibration-ranges",children:[d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:["中心 X ",Math.round(he.x),"%"]}),d.jsx("input",{type:"range",min:"8",max:"92",value:he.x,onChange:C=>Kr({x:Number(C.target.value)})})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:["中心 Y ",Math.round(he.y),"%"]}),d.jsx("input",{type:"range",min:"8",max:"92",value:he.y,onChange:C=>Kr({y:Number(C.target.value)})})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:["范围宽度 ",Math.round(he.width),"%"]}),d.jsx("input",{type:"range",min:"28",max:"92",value:he.width,onChange:C=>Kr({width:Number(C.target.value)})})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:["范围高度 ",Math.round(he.height),"%"]}),d.jsx("input",{type:"range",min:"34",max:"96",value:he.height,onChange:C=>Kr({height:Number(C.target.value)})})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsxs("span",{children:["倾斜角度 ",Math.round(he.rotation),"deg"]}),d.jsx("input",{type:"range",min:"-18",max:"18",value:he.rotation,onChange:C=>Kr({rotation:Number(C.target.value)})})]})]}),d.jsxs("div",{className:"kigcraft-inspector-actions",children:[d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>Mt(br(Lt.id)),children:[d.jsx(Ae,{name:"reset"})," 默认范围"]}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>Al(!1),disabled:xe||x,children:[d.jsx(Ae,{name:"spark"})," ",xe?"分析中...":"确认范围并分析"]})]})]})]})]})},Jm=()=>{if(N==="references")return d.jsxs("section",{className:"kigcraft-panel kigcraft-reference-panel",children:[d.jsxs("div",{className:"kigcraft-panel-head",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"参考素材"}),d.jsx("p",{children:"按用途整理角色身份、结构和局部细节，生成时会按素材角色分别约束模型。"})]}),d.jsxs("div",{className:"kigcraft-inline-actions",children:[d.jsxs("span",{className:"kigcraft-reference-count",children:[z.length," / 8 张 · ",fh," / 5 类"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>Rs(),disabled:z.length>=8,children:[d.jsx(Ae,{name:"upload"})," 添加图片"]}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>Al(!1),disabled:!ui||xe||St==="detecting",children:[d.jsx(Ae,{name:"spark"})," ",xe?"分析中...":"确认范围并分析"]})]})]}),d.jsxs("div",{className:"kigcraft-reference-workspace",children:[d.jsxs("section",{className:"kigcraft-reference-library","aria-label":"参考素材库",children:[d.jsxs("div",{className:"kigcraft-reference-library-head",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"素材槽位"}),d.jsx("p",{children:"点击槽位可直接按对应用途添加图片。"})]}),d.jsxs("span",{children:[fh,"/5"]})]}),d.jsx("div",{className:"kigcraft-reference-kind-grid",children:yr.map(M=>{const C=uh.get(M.id)||0;return d.jsxs("button",{type:"button",className:`kigcraft-reference-kind-card ${C?"is-filled":""} ${M.required?"is-required":""}`,onClick:()=>Rs(M.id),disabled:z.length>=8,"aria-label":`添加${M.label}参考图`,children:[d.jsx("span",{className:"kigcraft-reference-kind-icon",children:d.jsx(Ae,{name:C?"image":"plus"})}),d.jsxs("span",{children:[d.jsx("strong",{children:M.label}),d.jsx("small",{children:M.purpose})]}),d.jsx("em",{children:C||(M.required?"必需":"可选")})]},M.id)})}),d.jsxs("div",{className:"kigcraft-reference-batch-drop",onClick:()=>Rs(),onDragOver:M=>M.preventDefault(),onDrop:M=>{M.preventDefault(),M.dataTransfer.files?.length&&xh(M.dataTransfer.files)},role:"button",tabIndex:0,onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),Rs())},children:[d.jsx(Ae,{name:"upload"}),d.jsxs("span",{children:[d.jsx("strong",{children:z.length?"批量补充素材":"批量导入参考图"}),d.jsx("small",{children:"JPG / PNG / WebP · 单张 20MB · 最多 8 张"})]})]}),z.length>0&&d.jsx("div",{className:"kigcraft-reference-asset-list",children:z.map((M,C)=>d.jsxs("article",{className:`kigcraft-reference-asset ${M.kind==="front"?"is-primary":""}`,children:[d.jsxs("div",{className:"kigcraft-reference-asset-preview",children:[d.jsx("img",{src:M.previewUrl,alt:`参考图 ${C+1}`}),d.jsx("span",{children:C+1})]}),d.jsxs("div",{className:"kigcraft-reference-asset-fields",children:[d.jsxs("div",{className:"kigcraft-reference-asset-row",children:[d.jsx("select",{value:M.kind,"aria-label":`参考图 ${C+1} 用途`,onChange:B=>Sm(M.id,B.target.value),children:yr.map(B=>d.jsx("option",{value:B.id,children:B.label},B.id))}),d.jsx("button",{type:"button",className:"kigcraft-icon-button",onClick:()=>Em(M.id),"aria-label":`删除参考图 ${C+1}`,children:d.jsx(Ae,{name:"trash"})})]}),d.jsx("input",{value:M.label,onChange:B=>_h(M.id,{label:B.target.value}),placeholder:"素材标签","aria-label":`参考图 ${C+1} 标签`}),d.jsxs("details",{className:"kigcraft-reference-note",open:!!M.note,children:[d.jsx("summary",{children:M.note?"已填写生成重点":"添加生成重点"}),d.jsx("textarea",{value:M.note,onChange:B=>_h(M.id,{note:B.target.value}),placeholder:"例如：保持发饰角度、异色瞳、刘海分叉或配件侧别。",maxLength:240})]}),d.jsx("small",{className:"kigcraft-reference-file-name",title:M.file.name,children:M.file.name})]})]},M.id))}),d.jsxs("label",{className:"kigcraft-field kigcraft-reference-brief",children:[d.jsx("span",{children:"整体生成要求"}),d.jsx("textarea",{value:K,onChange:M=>{ce(M.target.value.slice(0,800)),Fe(null)},placeholder:"描述必须保留的发色、表情、头饰、材质和不希望改变的细节。"}),d.jsxs("small",{children:[K.length,"/800"]})]})]}),d.jsx("section",{className:"kigcraft-reference-calibration-stage","aria-label":"正面头部范围校准",children:Zm()||d.jsxs("div",{className:"kigcraft-reference-calibration-empty",children:[d.jsx(Ae,{name:"target"}),d.jsx("strong",{children:"等待正面身份图"}),d.jsx("span",{children:"正面图用于确定角色身份、脸型比例和头部分析范围。"}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>Rs("front"),children:[d.jsx(Ae,{name:"upload"})," 上传正面图"]})]})})]}),d.jsx("div",{className:"kigcraft-action-row",children:d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>Al(!1),disabled:!ui||xe||St==="detecting",children:[d.jsx(Ae,{name:"spark"})," ",xe?"分析中...":"确认头部范围并进入确认"]})})]});if(N==="details")return d.jsxs("section",{className:"kigcraft-panel kigcraft-detail-panel",children:[d.jsxs("div",{className:"kigcraft-panel-head",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"细节确认"}),d.jsx("p",{children:"系统会先做本地参考预检并整理风险点；你可以锁定文字项、替换局部切片，再生成正视图。"})]}),d.jsxs("div",{className:"kigcraft-inline-actions",children:[d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:()=>k("references"),children:"返回上传"}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>Zr(!0),disabled:!z.length||xe,children:[d.jsx(Ae,{name:"reset"})," ",xe?"分析中...":"重新分析"]}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:Mh,disabled:!dh||ei,children:[d.jsx(Ae,{name:"spark"})," ",we==="uploading"?"上传中...":we==="generating"?"生成中...":"生成正视图"]})]})]}),d.jsxs("div",{className:"kigcraft-detail-step-overview",children:[d.jsxs("div",{className:"kigcraft-analysis-status",children:[d.jsx(Ae,{name:"spark"}),d.jsxs("div",{children:[d.jsx("strong",{children:xe?"本地视觉模型分析中":de?"参考预检已完成":"等待参考预检"}),d.jsx("span",{children:xe?"正在尝试 MediaPipe/ONNX 关键点识别，并整理特征与切片。":de?new Date(de).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}):"上传参考图后点击预检，系统会生成特征和真实裁切草稿。"})]}),!de&&d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>Zr(!1),disabled:!z.length||xe,children:[d.jsx(Ae,{name:"spark"})," ",xe?"分析中...":"开始分析"]})]}),d.jsxs("div",{className:"kigcraft-detail-readiness-grid",children:[d.jsxs("span",{children:[d.jsx("strong",{children:z.length}),"参考来源"]}),d.jsxs("span",{children:[d.jsx("strong",{children:ws}),"文字强约束"]}),d.jsxs("span",{children:[d.jsx("strong",{children:$r}),"图像强约束"]}),d.jsxs("span",{children:[d.jsx("strong",{children:Me.filter(M=>M.severity==="warning").length}),"待确认风险"]})]}),d.jsxs("details",{className:"kigcraft-detail-warning-drawer",children:[d.jsxs("summary",{children:[d.jsxs("span",{children:[d.jsx(Ae,{name:"alert"})," 分析提示"]}),d.jsxs("em",{children:[Me.length||1," 项"]})]}),d.jsx("div",{className:"kigcraft-warning-list",children:Me.length?Me.map(M=>d.jsxs("div",{className:M.severity==="warning"?"is-warning":"",children:[d.jsx(Ae,{name:"alert"}),d.jsx("span",{children:M.text})]},M.id)):d.jsxs("div",{children:[d.jsx(Ae,{name:"target"}),d.jsx("span",{children:"暂无明显缺失项，请继续检查各来源图片的选区和侧别。"})]})})]})]}),d.jsxs("details",{className:"kigcraft-detail-constraint-drawer",children:[d.jsxs("summary",{children:[d.jsxs("span",{children:[d.jsx("strong",{children:"文字约束与整体要求"}),d.jsx("small",{children:"确认角色特征、材质、表情和禁止改变项"})]}),d.jsxs("em",{children:[ws,"/",W.length," 已锁定"]})]}),d.jsxs("div",{className:"kigcraft-detail-constraint-body",children:[d.jsxs("label",{className:"kigcraft-field kigcraft-brief",children:[d.jsx("span",{children:"整体要求"}),d.jsx("textarea",{value:K,onChange:M=>ce(M.target.value.slice(0,800)),placeholder:"例如：保留蓝色渐变发色、温柔冷静表情、头顶小发饰；正视图要像白底棚拍的成品头壳产品照。"})]}),d.jsxs("div",{className:"kigcraft-section-title",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"角色特征"}),d.jsx("p",{children:"锁定项作为强约束，参考项只作为辅助说明。"})]}),d.jsxs("div",{className:"kigcraft-inline-actions",children:[d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:Rm,children:"整理草稿"}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Tm,children:[d.jsx(Ae,{name:"plus"})," 新增"]})]})]}),d.jsx("div",{className:"kigcraft-detail-list",children:W.map(M=>d.jsxs("article",{className:`kigcraft-detail-row ${M.locked?"is-locked":""}`,children:[d.jsx("button",{type:"button",className:"kigcraft-lock",onClick:()=>Ga(M.id,{locked:!M.locked}),children:M.locked?"锁定":"参考"}),d.jsx("select",{value:M.kind,onChange:C=>Ga(M.id,{kind:C.target.value}),children:Object.entries(Ro).map(([C,B])=>d.jsx("option",{value:C,children:B},C))}),d.jsx("input",{value:M.label,onChange:C=>Ga(M.id,{label:C.target.value})}),d.jsx("textarea",{value:M.description,onChange:C=>Ga(M.id,{description:C.target.value}),placeholder:"描述需要保留或避免的细节"}),d.jsx("button",{type:"button",className:"kigcraft-icon-button",onClick:()=>wm(M.id),"aria-label":"删除细节",children:d.jsx(Ae,{name:"trash"})})]},M.id))})]})]}),d.jsx("div",{className:"kigcraft-section-title kigcraft-slice-title",children:d.jsxs("div",{children:[d.jsx("h3",{children:"原图细节选区"}),d.jsx("p",{children:"直接在每张参考图上框选需要保留的细节；系统会实时裁切选区，并把切片、标签和说明按同一顺序提交给 AI。"})]})}),d.jsx(Dg,{busy:yl,busyLabel:we==="uploading"?"正在准备正视图素材":"正在生成正视图",detailKindLabels:Ro,references:z,referenceKindLabels:Object.fromEntries(yr.map(M=>[M.id,M.label])),regions:Hn,selectedId:Ws,onAddReference:M=>Rs(M),onAnalyze:()=>{Zr(!0)},onCreate:Nm,onRemove:Dm,onReplace:Cm,onRestore:Lm,onSelect:Jn,onUpdate:(M,C)=>Im(M,C)}),d.jsxs("div",{className:"kigcraft-action-row",children:[d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:Mh,disabled:!dh||ei,children:[d.jsx(Ae,{name:"spark"})," ",we==="uploading"?"上传中...":we==="generating"?"生成中...":"生成正视图"]}),d.jsx("button",{type:"button",className:"kigcraft-ghost",onClick:()=>k("front"),disabled:!Ye,children:"前往编辑"})]})]});if(N==="front")return d.jsxs("section",{className:"kigcraft-panel kigcraft-editor-panel",children:[d.jsxs("div",{className:"kigcraft-panel-head",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"正视图编辑"}),d.jsx("p",{children:"在预览上画出要调整的位置，或用 ONNX 关键点与 Pixi 本地变形微调。重新生成会把本地编辑图和原参考图一起送入后台模型。"})]}),d.jsxs("div",{className:"kigcraft-inline-actions",children:[d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Th,disabled:!Ye,children:[d.jsx(Ae,{name:"reset"})," 重置锚点"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>ja(),disabled:!Ye||Et==="detecting",children:[d.jsx(Ae,{name:"target"})," ",Et==="detecting"?"识别中...":Et==="ready"||Et==="error"?"重新识别关键点":"识别关键点"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:Um,disabled:!Ye||ei,children:[d.jsx(Ae,{name:"brush"})," 应用标注并重新生成"]})]})]}),d.jsxs("div",{className:"kigcraft-tech-status",children:[d.jsxs("div",{className:_m,title:Zi||void 0,children:[d.jsx(Ae,{name:"wand"}),d.jsxs("span",{children:["本地编辑：",Ht==="ready"?"已就绪":Ht==="mounting"?"初始化中":Ht==="fallback"?"基础预览模式":Ht==="error"?"加载失败":"等待正视图"]}),(Ht==="fallback"||Ht==="error")&&d.jsxs("button",{type:"button",className:"kigcraft-status-action",onClick:bm,disabled:!Ye,children:[d.jsx(Ae,{name:"reset"})," 重新加载"]})]}),d.jsxs("div",{className:vm,children:[d.jsx(Ae,{name:"target"}),d.jsxs("span",{children:["特征定位：",ym]})]})]}),d.jsxs("details",{className:"kigcraft-diagnostics",children:[d.jsx("summary",{children:"性能诊断"}),d.jsxs("span",{children:["渲染：",Ht==="ready"?"Pixi GPU":"Canvas 兼容"]}),d.jsx("span",{children:"关键点：ONNX Runtime WASM"}),d.jsx("span",{children:"曲面与质量分析：Rust/WASM，失败时自动降级"})]}),Lh("inline"),d.jsxs("div",{className:"kigcraft-editor-layout",children:[d.jsxs("nav",{className:"kigcraft-tool-rail","aria-label":"正视图编辑工具",children:[d.jsx("span",{children:"工具"}),Pc.map(M=>d.jsxs("button",{type:"button",className:bt===M.id?"is-active":"",onClick:()=>Xs(M.id),children:[d.jsx(Ae,{name:M.icon}),d.jsx("strong",{children:M.label})]},M.id))]}),d.jsxs("div",{className:"kigcraft-editor-stage",children:[d.jsxs("div",{className:"kigcraft-canvas-toolbar",children:[d.jsxs("div",{className:"kigcraft-toolbar-group",children:[d.jsx("button",{type:"button",onClick:()=>ml(M=>!M),className:Es?"is-active":"","aria-label":Es?"隐藏辅助点":"显示辅助点",title:Es?"隐藏全部锚点和辅助线":"显示锚点和辅助线",children:d.jsx(Ae,{name:"eye"})}),d.jsx("button",{type:"button",onClick:()=>qs(M=>!M),className:Ss?"is-active":"","aria-label":"显示全部锚点",title:"切换当前工具锚点与全部锚点",children:d.jsx(Ae,{name:"target"})}),d.jsx("button",{type:"button",onClick:bh,disabled:!X.length,"aria-label":"撤销上一项标注",title:"撤销上一项标注",children:d.jsx(Ae,{name:"reset"})}),d.jsx("button",{type:"button",onClick:Wa,disabled:!X.length,"aria-label":"清空全部标注",title:"清空全部标注",children:d.jsx(Ae,{name:"trash"})})]}),d.jsxs("label",{className:"kigcraft-zoom-control",children:[d.jsxs("span",{children:[Wr,"%"]}),d.jsx("input",{type:"range",min:"72",max:"118",value:Wr,onChange:M=>E(Number(M.target.value))})]}),d.jsx("button",{type:"button",className:"kigcraft-toolbar-icon",onClick:()=>E(100),"aria-label":"重置缩放",children:d.jsx(Ae,{name:"expand"})})]}),d.jsx("div",{ref:r,className:`kigcraft-editor-canvas is-tool-${bt} ${Ht==="ready"?"has-pixi-preview":""} ${nt?"is-before-preview":""}`,children:d.jsxs("div",{className:"kigcraft-canvas-plane",style:{transform:`scale(${Wr/100})`},onPointerDown:qm,onPointerMove:$m,onPointerUp:Rh,onPointerCancel:Rh,onPointerLeave:Ym,children:[Ye?d.jsxs(d.Fragment,{children:[d.jsx(Lc,{className:"kigcraft-editor-fallback-image",src:Ye.displayUrl,alt:"正视图",onReady:M=>{bn({width:M.width,height:M.height})}}),d.jsx("div",{ref:o,className:"kigcraft-pixi-stage","aria-label":"Pixi 本地变形预览",style:Va}),Ht==="ready"&&d.jsx(ST,{className:"is-editor-watermark",style:Va}),d.jsx("span",{className:"kigcraft-comparison-label",children:nt?"调整前":"调整后"})]}):d.jsxs("div",{className:"kigcraft-empty-state",children:[d.jsx(Ae,{name:"spark"}),d.jsx("strong",{children:"还没有正视图"}),d.jsx("span",{children:"先上传参考并生成正视图。"})]}),d.jsx("canvas",{ref:s,className:bt==="annotate"?`kigcraft-annotation-canvas is-enabled is-mode-${V}`:"kigcraft-annotation-canvas",style:Va,onPointerDown:Fm,onPointerMove:Om,onPointerUp:Bm,onPointerCancel:zm}),Ye&&Es&&d.jsxs("div",{className:`kigcraft-anchor-layer is-tool-${bt}`,style:Va,children:[xm.map(M=>d.jsx("div",{className:`kigcraft-guide kigcraft-guide-${M.kind}`,style:M.style},M.id)),bt==="liquify"&&Qi==="warp"&&Ia&&d.jsx("div",{className:"kigcraft-liquify-symmetry-line",style:{left:`${Js*100}%`}}),bt==="liquify"&&mm.map(M=>d.jsx("div",{className:`kigcraft-guide-liquify ${Yi===M.id?"is-active":""}`,style:{borderColor:M.color,height:`${Vn*2}px`,left:`${M.x}%`,top:`${M.y}%`,width:`${Vn*2}px`}},`liquify-guide-${M.id}`)),As&&d.jsx("div",{className:["kigcraft-guide-liquify","is-cursor",As.active?"is-active":"",As.mode==="scale"?"is-scale":""].filter(Boolean).join(" "),style:{height:`${As.radius*2}px`,left:`${As.x*100}%`,top:`${As.y*100}%`,width:`${As.radius*2}px`}}),pm.map(M=>d.jsx("button",{type:"button",className:Yi===M.id?"is-active":"",style:{left:`${M.x}%`,top:`${M.y}%`,backgroundColor:M.color},onPointerDown:C=>jm(C,M.id),onPointerMove:Wm,onPointerUp:wh,onPointerCancel:wh,onClick:()=>Ki(M.id),"aria-label":M.label,children:d.jsx("span",{children:M.label})},M.id))]})]})})]}),d.jsx("aside",{className:"kigcraft-editor-controls",children:Km()})]}),d.jsxs("div",{className:`kigcraft-editor-session ${xn?"is-dirty":Vt?"is-saved":"is-candidate"}`,children:[d.jsx("span",{className:"kigcraft-editor-session-dot"}),d.jsxs("div",{children:[d.jsx("strong",{children:xn?"本地草稿尚未提交":Vt?`正视母版 v${re?.version||1}`:"正视候选等待确认"}),d.jsxs("small",{children:[Ha.length," 项参数 · ",Sl," 笔液化 · ",Ge?"包含标注":"无标注"]})]}),d.jsxs("div",{className:"kigcraft-editor-session-actions",children:[d.jsxs("button",{type:"button",className:nt?"kigcraft-ghost is-active":"kigcraft-ghost",onClick:()=>st(M=>!M),disabled:!Ye,"aria-pressed":nt,children:[d.jsx(Ae,{name:"eye"})," ",nt?"查看调整后":"查看调整前"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",disabled:!xn,onClick:()=>{window.confirm("放弃当前本地草稿并恢复默认编辑状态？")&&Eh()},children:[d.jsx(Ae,{name:"reset"})," 放弃草稿"]})]})]}),d.jsxs("div",{className:`kigcraft-front-master-gate ${Vt?"is-confirmed":""}`,children:[d.jsxs("div",{className:"kigcraft-front-master-copy",children:[d.jsx("span",{className:"kigcraft-front-master-icon",children:d.jsx(Ae,{name:Vt?"save":"alert"})}),d.jsxs("div",{children:[d.jsx("strong",{children:Vt?`正视母版 v${re?.version||1} 已确认`:Ba?"请先应用标注和文字修订要求":xn?"将当前本地微调保存为新母版":"确认母版后才能生成四视图或 3D 头壳"}),d.jsx("p",{children:Vt?"四视图与 3D 头壳都会以这个已确认版本作为结构、配色与材质基准。":Ba?"画面标注和补充说明需要先重新生成；参数、锚点和液化微调可以直接保存为母版。":xn?"当前参数、锚点和液化效果将被导出并保存，不需要额外重新生成。":"请检查五官、轮廓、发型和材质。确认后仍可返回修改并生成新的母版版本。"})]})]}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>{Hm()},disabled:!Ye||ei||We||Vt||Ba,title:Ba?"请先应用画面标注和补充说明，生成新的正视候选":xn?"保存当前参数、锚点和液化后的可见效果":void 0,children:[d.jsx(Ae,{name:"save"}),We?"正在保存母版":Vt?"母版已确认":xn?"保存当前微调为正视母版":"确认当前效果为正视母版"]})]}),d.jsxs("div",{className:"kigcraft-action-row kigcraft-front-final-actions",children:[!Vt&&d.jsxs("span",{className:"kigcraft-action-requirement",children:[d.jsx(Ae,{name:"alert"})," 需要先完成上方母版确认"]}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>{Cl()},disabled:!Vt||ei,title:Vt?void 0:"请先确认当前正视母版，并提交未保存的编辑草稿",children:[d.jsx(Ae,{name:"grid"})," ",vl?"正在生成四视图":"生成四视图"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>{H("model3d"),k("turnaround")},disabled:!Vt||ei,title:Vt?void 0:"请先确认当前正视母版",children:[d.jsx(Ae,{name:"spark"})," 生成 3D 头壳"]}),Ye&&d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>{Tl(Ye.displayUrl,`kigcraft-front-${Date.now()}.png`)},children:[d.jsx(Ae,{name:"download"})," 下载正视图"]})]})]});const x=ch?.result.viewAssets||[];return d.jsxs("section",{className:"kigcraft-output-workspace",children:[d.jsxs("header",{className:"kigcraft-output-header",children:[d.jsxs("div",{children:[d.jsx("span",{children:"步骤 4 · 交付资产"}),d.jsx("h2",{children:"选择输出类型"}),d.jsx("p",{children:"四视图适合工坊沟通与结构核对，3D 头壳适合浏览器旋转检查和模型文件交付。"})]}),d.jsxs("div",{className:"kigcraft-output-switch",role:"tablist","aria-label":"输出类型",children:[d.jsxs("button",{type:"button",role:"tab","aria-selected":v==="turnaround",className:v==="turnaround"?"is-active":"",onClick:()=>H("turnaround"),children:[d.jsx(Ae,{name:"grid"})," 四视图"]}),d.jsxs("button",{type:"button",role:"tab","aria-selected":v==="model3d",className:v==="model3d"?"is-active":"",onClick:()=>H("model3d"),children:[d.jsx(Ae,{name:"spark"})," 3D 头壳"]})]})]}),v==="turnaround"?d.jsxs("div",{className:"kigcraft-four-view-output",role:"tabpanel",children:[Lh("inline"),x.length?d.jsxs(d.Fragment,{children:[d.jsx(bE,{assets:x,onDownload:async M=>{await Tl(M.url,`kigform-${M.view}-${Date.now()}.png`)}}),d.jsxs("div",{className:"kigcraft-four-view-actions",children:[d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>{Cl()},disabled:ei,children:[d.jsx(Ae,{name:"reset"})," 重新生成四视图"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>k("front"),children:[d.jsx(Ae,{name:"brush"})," 返回修改母版"]})]})]}):vl?null:d.jsxs("div",{className:"kigcraft-output-empty",children:[d.jsx(Ae,{name:"grid"}),d.jsx("strong",{children:"生成正面、左侧、右侧和背面四个视角"}),d.jsx("span",{children:"四个视角会继承已确认母版与锁定参考细节，不再使用旧的图片旋转预览。"}),d.jsxs("button",{type:"button",className:"kigcraft-primary",onClick:()=>{Cl()},disabled:!Vt||ei,children:[d.jsx(Ae,{name:"spark"})," 开始生成四视图"]})]})]}):d.jsx("div",{role:"tabpanel",children:d.jsx(ME,{frontMasterId:re?.id,masterVersion:re?.version,quotaRemaining:je?.remaining,onBackToFront:()=>k("front"),onQuotaChanged:El})})]})},Qm=()=>d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"kigcraft-result-head",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"结果与历史"}),d.jsx("p",{children:Pt?Pt.label:"等待生成"})]}),d.jsx("span",{className:ei?"is-busy":Pt?"is-ready":"",children:ei?"处理中":Pt?"Ready":"Idle"})]}),d.jsxs("div",{className:"kigcraft-result-preview",children:[Pt?d.jsx(Lc,{src:Pt.displayUrl,alt:Pt.label}):d.jsxs("div",{className:"kigcraft-empty-state",children:[d.jsx(Ae,{name:"spark"}),d.jsx("strong",{children:"等待生成"}),d.jsx("span",{children:"上传参考图并确认细节后开始生成。"})]}),ei&&d.jsxs("div",{className:"kigcraft-loading",children:[d.jsx("span",{}),we==="uploading"?"上传素材中":we==="publishing"?"保存作品中":"AI 生成中",we==="generating"&&Be?.jobId&&d.jsx("button",{type:"button",onClick:()=>{yh()},children:"取消任务"})]})]}),Pt&&d.jsxs("div",{className:"kigcraft-result-meta",children:[d.jsxs("span",{children:[d.jsx("strong",{children:Pt.label}),d.jsx("small",{children:Pt.templateId.includes("turnaround")?"四视图资产":Pt.templateId.includes("front")?"正视图资产":"生成资产"})]}),d.jsxs("span",{children:[d.jsx("strong",{children:new Date(Pt.createdAt).toLocaleDateString("zh-CN")}),d.jsx("small",{children:new Date(Pt.createdAt).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})})]})]}),d.jsxs("div",{className:"kigcraft-result-actions",children:[d.jsxs("button",{type:"button",disabled:!Pt,onClick:()=>Pt&&void Tl(Pt.displayUrl,`kigcraft-${Pt.templateId}-${Date.now()}.png`),children:[d.jsx(Ae,{name:"download"})," 下载"]}),d.jsxs("button",{type:"button",disabled:!Pt||we==="publishing"||!!He,onClick:()=>oe(x=>!x),children:[d.jsx(Ae,{name:"share"})," ",He?"已保存":Q?"收起保存设置":"保存到作品"]})]}),Pt&&Q&&!He&&d.jsxs("div",{className:"kigcraft-publish-form",children:[d.jsxs("div",{className:"kigcraft-publish-form-head",children:[d.jsx("strong",{children:"保存作品信息"}),d.jsx("span",{children:"补充标题和说明后保存到个人作品。"})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"作品标题"}),d.jsx("input",{value:Se,onChange:x=>ke(x.target.value)})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"作品说明"}),d.jsx("textarea",{value:Re,onChange:x=>_e(x.target.value),rows:3})]}),d.jsxs("button",{type:"button",className:"kigcraft-primary",disabled:we==="publishing"||!Se.trim(),onClick:()=>{km()},children:[d.jsx(Ae,{name:"save"})," ",we==="publishing"?"正在保存":"确认保存作品"]})]}),d.jsxs("div",{className:"kigcraft-history",children:[d.jsxs("div",{className:"kigcraft-side-title",children:[d.jsx(Ae,{name:"list"}),d.jsxs("span",{children:["本次任务 ",d.jsx("small",{children:et.length})]})]}),et.length?et.map(x=>d.jsxs("button",{type:"button",className:xt===x.id?"is-active":"",onClick:()=>Vm(x),children:[d.jsx(Lc,{src:x.displayUrl,alt:`${x.label}缩略图`,compact:!0}),d.jsxs("span",{children:[d.jsx("strong",{children:x.label}),d.jsx("small",{children:new Date(x.createdAt).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})})]})]},x.id)):d.jsx("p",{children:"暂无生成记录。"})]})]}),eg=()=>me?d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",className:"kigcraft-drawer-backdrop","aria-label":"关闭结果抽屉",onClick:()=>ge(!1)}),d.jsxs("aside",{className:"kigcraft-result-drawer","aria-label":"KigCraft 结果与历史",children:[d.jsxs("div",{className:"kigcraft-result-drawer-top",children:[d.jsxs("div",{children:[d.jsx("strong",{children:"结果工作台"}),d.jsx("span",{children:"检查图片资产、下载与保存作品"})]}),d.jsx("button",{type:"button",className:"kigcraft-toolbar-icon",onClick:()=>ge(!1),"aria-label":"关闭结果抽屉",children:d.jsx(Ae,{name:"close"})})]}),d.jsx("div",{className:"kigcraft-result-panel kigcraft-result-drawer-panel",children:Qm()})]})]}):null,tg=()=>d.jsxs("section",{className:["kigcraft-runbar",ka?"is-compact":"",j?"is-open":"is-collapsed"].filter(Boolean).join(" "),"aria-label":"生成设置",children:[d.jsxs("button",{type:"button",className:"kigcraft-runbar-summary",onClick:()=>ne(x=>!x),"aria-expanded":j,children:[d.jsxs("span",{children:[d.jsx(Ae,{name:"list"}),"生成配置"]}),d.jsx("strong",{children:ts?.displayName||"默认模型"}),d.jsx("em",{children:dm?.name||"KigCraft 模板"}),d.jsx("small",{children:hh})]}),j&&d.jsxs(d.Fragment,{children:[d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"模型方案"}),d.jsx("select",{value:ts?.id||"",onChange:x=>{m.current=!0,ye(x.target.value)},children:es.map(x=>d.jsxs("option",{value:x.id,children:[x.displayName,Po(x)>1?` · ${Po(x)} 次/张`:""]},x.id))}),d.jsxs("small",{className:"kigcraft-model-cost",children:["当前方案每张消耗 ",Po(ts)," 次 AI 配额"]})]}),d.jsxs("label",{className:"kigcraft-field",children:[d.jsx("span",{children:"输出比例（流程锁定）"}),d.jsx("select",{value:hh,disabled:!0,onChange:x=>{g.current=!0,be(x.target.value)},children:A.aspectRatios.map(x=>d.jsx("option",{value:x.id,children:x.name},x.id))})]}),d.jsx("div",{className:"kigcraft-runbar-templates","aria-label":"模板方案",children:xl.slice(0,6).map(x=>d.jsxs("div",{className:x.id===Ml?"is-active":"",children:[d.jsx("span",{children:x.icon||"•"}),d.jsx("p",{children:x.name})]},x.id))})]})]});return d.jsx("div",{className:`kigcraft-page ${ka?"is-editor-step":""}`,children:d.jsxs("main",{className:"kigcraft-shell",children:[d.jsxs("header",{className:"kigcraft-header",children:[d.jsxs("div",{className:"kigcraft-brand",children:[d.jsx(Qr,{to:"/tools",className:"kigcraft-brand-mark","aria-label":"返回工具集",children:"K"}),d.jsxs("div",{children:[d.jsx("h1",{children:"KigForm 头壳工坊"}),d.jsx("p",{children:"@KigerMap AI 制作台 · 参考素材 / 正视精修 / 真实 3D 头壳"})]})]}),d.jsxs("div",{className:"kigcraft-header-actions",children:[d.jsxs("span",{className:"kigcraft-quota",children:["剩余 ",d.jsx("strong",{children:je?.remaining??"-"})]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>ge(!0),children:[d.jsx(Ae,{name:"image"})," 结果",et.length?` ${et.length}`:""]}),i?d.jsx(Qr,{to:"/points-exchange",className:"kigcraft-ghost",children:"兑换次数"}):d.jsx(Qr,{to:Uh(),className:"kigcraft-primary",children:"登录使用"})]})]}),d.jsxs("div",{className:`kigcraft-studio-frame ${N==="turnaround"?"is-model-step":""}`,children:[d.jsxs("aside",{className:"kigcraft-studio-sidebar","aria-label":"制作流程导航",children:[d.jsxs("div",{className:"kigcraft-studio-sidebar-title",children:[d.jsx("span",{children:"制作流程"}),d.jsxs("small",{children:[Fa+1," / ",vr.length]})]}),d.jsx("section",{className:"kigcraft-flowbar","aria-label":"KigForm 头壳生成流程",children:vr.map((x,M)=>d.jsxs("button",{type:"button",className:[N===x.id?"is-active":"",M<Fa?"is-done":"",za(x.id)?"":"is-disabled"].filter(Boolean).join(" "),"aria-current":N===x.id?"step":void 0,"aria-disabled":!za(x.id),onClick:()=>um(x.id),children:[d.jsx("span",{children:M+1}),d.jsx("strong",{children:x.title}),d.jsx("small",{children:hm[x.id]})]},x.id))}),d.jsxs("div",{className:"kigcraft-studio-sidebar-foot",children:[d.jsx(Ae,{name:ka?"brush":"spark"}),d.jsxs("span",{children:[d.jsx("strong",{children:Oa.title}),d.jsx("small",{children:Oa.desc})]})]})]}),d.jsxs("section",{className:"kigcraft-studio-main",children:[d.jsxs("div",{className:"kigcraft-contextbar",children:[d.jsxs("div",{className:"kigcraft-workspace-summary",children:[d.jsxs("span",{children:["步骤 ",Fa+1," / ",vr.length]}),d.jsx("strong",{children:Oa.title}),d.jsx("small",{children:Oa.desc})]}),d.jsxs("div",{className:"kigcraft-contextbar-status",children:[d.jsxs("span",{className:Vt?"is-ready":"",children:[d.jsx(Ae,{name:Vt?"target":"alert"}),Vt?"母版已确认":"流程进行中"]}),d.jsxs("button",{type:"button",className:"kigcraft-ghost",onClick:()=>ge(!0),children:[d.jsx(Ae,{name:"image"})," 生成记录"]})]})]}),!i&&d.jsxs("div",{className:"kigcraft-alert",children:["登录后可使用 KigForm 头壳工坊、保存作品并消耗你的 AI 次数。",d.jsx(Qr,{to:Uh(),children:"去登录"})]}),i&&!Ua&&d.jsxs("div",{className:"kigcraft-alert",children:["KigCraft 头壳参考功能需要完成社区身份认证后使用。",d.jsx(Qr,{to:"/profile/certification",children:"去认证"})]}),ze&&d.jsx("div",{className:"kigcraft-error",children:ze}),d.jsx("input",{ref:e,type:"file",accept:"image/jpeg,image/png,image/webp",multiple:!0,hidden:!0,onChange:x=>{if(x.target.files?.length)try{xh(x.target.files,t.current)}catch(M){fe(Fn(M,"图片读取失败"))}t.current=null,x.target.value=""}}),d.jsx("input",{ref:n,type:"file",accept:"image/jpeg,image/png,image/webp,image/gif",hidden:!0,onChange:x=>{Pm(x.target.files),x.target.value=""}}),d.jsx("div",{className:`kigcraft-layout ${ka?"is-editor-focus":N==="turnaround"?"is-model-focus":"is-workflow-focus"}`,children:d.jsx("section",{className:"kigcraft-workbench",children:Jm()})})]}),N!=="turnaround"&&d.jsxs("aside",{className:"kigcraft-studio-inspector","aria-label":"任务检查与生成配置",children:[d.jsxs("div",{className:"kigcraft-studio-inspector-title",children:[d.jsxs("span",{children:[d.jsx("strong",{children:"任务检查"}),d.jsx("small",{children:"完成全部条件后进入下一步"})]}),d.jsxs("em",{children:[bl.filter(x=>x.ready).length,"/",bl.length]})]}),d.jsx("section",{className:"kigcraft-checkpoints","aria-label":"任务就绪检查",children:bl.map(x=>d.jsxs("div",{className:x.ready?"is-ready":"is-pending",children:[d.jsx(Ae,{name:x.ready?"target":"alert"}),d.jsxs("span",{children:[d.jsx("strong",{children:x.label}),d.jsx("small",{children:x.value})]})]},x.id))}),tg()]})]}),eg()]})})}const kT=Object.freeze(Object.defineProperty({__proto__:null,default:TT},Symbol.toStringTag,{value:"Module"}));export{kT as K,ih as c,LE as e,NE as m};
