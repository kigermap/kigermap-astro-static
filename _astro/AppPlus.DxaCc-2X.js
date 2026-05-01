import{j as e,L as r,o as d}from"./App.Dby-NZ7O.js";import{r as i}from"./index.BAnu8Lhe.js";const m={src:"https://cdn-astro-static.kigermap.cn/_astro/1.DLyPq-Mf.png",width:1206,height:2622,format:"png"},b={src:"https://cdn-astro-static.kigermap.cn/_astro/2.CzwxZOdU.png",width:1206,height:2622,format:"png"},u={src:"https://cdn-astro-static.kigermap.cn/_astro/3.CKMAEGEW.png",width:1206,height:2622,format:"png"},w={src:"https://cdn-astro-static.kigermap.cn/_astro/4.BNXIsGKf.png",width:1206,height:2622,format:"png"},v={src:"https://cdn-astro-static.kigermap.cn/_astro/5.3NoQ9yqK.png",width:1206,height:2622,format:"png"},j={src:"https://cdn-astro-static.kigermap.cn/_astro/6.B-SL_5UX.png",width:1206,height:2622,format:"png"},y={src:"https://cdn-astro-static.kigermap.cn/_astro/7.v5Sah1rH.png",width:1206,height:2622,format:"png"},k={src:"https://cdn-astro-static.kigermap.cn/_astro/8.DojOA7Ui.png",width:1206,height:2622,format:"png"},N={src:"https://cdn-astro-static.kigermap.cn/_astro/9.Cg2SOL0U.png",width:1206,height:2622,format:"png"},t=[m,b,u,w,v,j,y,k,N],c="https://dl.kigermap.cn/kigermap/kigermapplus/releases/download/1.2.5/app-release.apk",h="https://testflight.apple.com/join/SfXsUZMr",z=[{tag:"探索",title:"全球 Kigurumi 地图",desc:"实时查看全球 Kigurumi 爱好者分布，发现身边的同好。支持地图标记、距离筛选，让你随时找到附近的玩家。",highlights:["全球实时定位","附近玩家发现","地图交互探索"],screenshot:0},{tag:"发现",title:"优质工坊导航",desc:"收录全球头壳制作工坊，查看作品展示、价格参考与制作周期。一站式了解工坊信息，找到最适合你的工坊。",highlights:["工坊作品展示","价格区间参考","制作周期参考"],screenshot:2},{tag:"分享",title:"精彩时刻",desc:"记录你的每一次 Kigurumi 出行，分享打卡照片与心得。浏览其他玩家的精彩瞬间，发现更多灵感。",highlights:["照片打卡分享","地点标记记录","社区互动点赞"],screenshot:4},{tag:"连接",title:"聚会活动 & 社区",desc:"线下聚会信息实时汇总，扩列交友轻松连接。不错过任何一场同好活动，连接全球 Kigurumi 玩家。",highlights:["聚会活动日历","扩列交友匹配","同好社区互动"],screenshot:6}];function _(){const[o,p]=i.useState(0),[x,g]=i.useState(!1),n=i.useRef(null);return i.useEffect(()=>(document.title="KigerMap Plus - 全新体验 | 下载App",g(!0),()=>{document.title="KigerMap"}),[]),i.useEffect(()=>{const a=setInterval(()=>p(s=>(s+1)%t.length),3500);return()=>clearInterval(a)},[]),i.useEffect(()=>{if(!n.current)return;const a=n.current.children[o];if(!a)return;const s=n.current,l=a.offsetLeft-s.offsetWidth/2+a.offsetWidth/2;s.scrollTo({left:l,behavior:"smooth"})},[o]),e.jsxs("div",{className:"app-plus-page",style:{background:"#f0f7ff",fontFamily:"'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[e.jsx("style",{children:M}),e.jsxs("nav",{className:"ap-nav",children:[e.jsxs(r,{to:"/",className:"ap-nav-logo",children:[e.jsx("img",{src:d.src,alt:"KigerMap",width:32,height:32}),e.jsx("span",{children:"KigerMap"})]}),e.jsxs("div",{className:"ap-nav-links",children:[e.jsx(r,{to:"/",className:"ap-nav-link",children:"首页"}),e.jsx("a",{href:c,className:"ap-nav-dl",target:"_blank",rel:"noopener noreferrer",children:"下载 App"})]})]}),e.jsxs("section",{className:`ap-hero ${x?"ap-visible":""}`,children:[e.jsx("div",{className:"ap-hero-bg"}),e.jsxs("div",{className:"ap-hero-content",children:[e.jsxs("div",{className:"ap-hero-text",children:[e.jsx("div",{className:"ap-badge",children:"KigerMap Plus"}),e.jsxs("h1",{className:"ap-title",children:["探索 Kigurumi",e.jsx("br",{}),e.jsx("span",{className:"ap-title-accent",children:"全新世界"})]}),e.jsx("p",{className:"ap-subtitle",children:"全球最大的 Kigurumi 爱好者社区，发现身边的同好，探索优质工坊，分享你的精彩时刻。"}),e.jsxs("div",{className:"ap-dl-buttons",children:[e.jsxs("a",{href:c,className:"ap-btn ap-btn-primary",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M17.523 2.236a.5.5 0 0 0-.862.013L14.857 5.57a9.97 9.97 0 0 0-5.714 0L7.34 2.25a.5.5 0 0 0-.862-.013.5.5 0 0 0-.013.512l1.71 3.08A9.922 9.922 0 0 0 2 14h20a9.922 9.922 0 0 0-6.175-8.172l1.71-3.08a.5.5 0 0 0-.012-.512zM7 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM2 16v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4H2z"})}),"Android 下载"]}),e.jsxs("a",{href:h,className:"ap-btn ap-btn-secondary",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),"iOS TestFlight"]})]}),e.jsx("p",{className:"ap-hint",children:"支持 Android 7.0+ / iOS 15.0+"}),e.jsx("p",{className:"ap-hint",children:"iOS 版本现阶段通过 TestFlight 分发，后续将上架 App Store 及国内应用市场"})]}),e.jsx("div",{className:"ap-hero-phone",children:e.jsx("div",{className:"ap-phone-frame",children:e.jsx("img",{src:t[0].src,alt:"KigerMap Plus 界面预览",className:"ap-phone-screen"})})})]})]}),e.jsxs("section",{className:"ap-screenshots",children:[e.jsxs("div",{className:"ap-section-header",children:[e.jsx("h2",{className:"ap-section-title",children:"界面一览"}),e.jsx("p",{className:"ap-section-desc",children:"简洁优雅的设计，流畅的交互体验"})]}),e.jsxs("div",{className:"ap-carousel-container",children:[e.jsx("div",{className:"ap-carousel",ref:n,children:t.map((a,s)=>e.jsx("div",{className:`ap-shot ${s===o?"ap-shot-active":""}`,onClick:()=>p(s),children:e.jsx("img",{src:a.src,alt:`界面截图 ${s+1}`,loading:"lazy"})},s))}),e.jsx("div",{className:"ap-dots",children:t.map((a,s)=>e.jsx("button",{className:`ap-dot ${s===o?"ap-dot-active":""}`,onClick:()=>p(s),"aria-label":`查看截图 ${s+1}`},s))})]})]}),e.jsxs("section",{className:"ap-showcases",children:[e.jsxs("div",{className:"ap-section-header",children:[e.jsx("div",{className:"ap-section-tag",children:"功能亮点"}),e.jsxs("h2",{className:"ap-section-title",children:["为 Kigurumi 爱好者",e.jsx("br",{}),"量身打造的每一个细节"]}),e.jsx("p",{className:"ap-section-desc",children:"从地图探索到社区互动，覆盖你的全部需求"})]}),z.map((a,s)=>e.jsxs("div",{className:`ap-showcase ${s%2===1?"ap-showcase-reverse":""}`,children:[e.jsxs("div",{className:"ap-showcase-text",children:[e.jsx("span",{className:"ap-showcase-tag",children:a.tag}),e.jsx("h3",{className:"ap-showcase-title",children:a.title}),e.jsx("p",{className:"ap-showcase-desc",children:a.desc}),e.jsx("ul",{className:"ap-showcase-highlights",children:a.highlights.map((l,f)=>e.jsxs("li",{children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#3b82f6",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})}),l]},f))})]}),e.jsxs("div",{className:"ap-showcase-visual",children:[e.jsx("div",{className:"ap-showcase-glow"}),e.jsx("div",{className:"ap-showcase-phone",children:e.jsx("img",{src:t[a.screenshot].src,alt:a.title,loading:"lazy"})}),a.screenshot+1<t.length&&e.jsx("div",{className:"ap-showcase-phone-secondary",children:e.jsx("img",{src:t[a.screenshot+1].src,alt:"",loading:"lazy"})})]})]},s))]}),e.jsx("section",{className:"ap-cta",children:e.jsxs("div",{className:"ap-cta-inner",children:[e.jsx("h2",{className:"ap-cta-title",children:"开始你的 Kigurumi 之旅"}),e.jsx("p",{className:"ap-cta-desc",children:"加入全球 Kigurumi 爱好者社区，发现更多精彩"}),e.jsxs("div",{className:"ap-dl-buttons",style:{justifyContent:"center"},children:[e.jsxs("a",{href:c,className:"ap-btn ap-btn-primary",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M17.523 2.236a.5.5 0 0 0-.862.013L14.857 5.57a9.97 9.97 0 0 0-5.714 0L7.34 2.25a.5.5 0 0 0-.862-.013.5.5 0 0 0-.013.512l1.71 3.08A9.922 9.922 0 0 0 2 14h20a9.922 9.922 0 0 0-6.175-8.172l1.71-3.08a.5.5 0 0 0-.012-.512zM7 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM2 16v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4H2z"})}),"Android 下载"]}),e.jsxs("a",{href:h,className:"ap-btn ap-btn-secondary",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),"iOS TestFlight"]})]})]})}),e.jsx("footer",{className:"ap-footer",children:e.jsxs("div",{className:"ap-footer-inner",children:[e.jsxs("div",{className:"ap-footer-brand",children:[e.jsx("img",{src:d.src,alt:"",width:24,height:24,style:{borderRadius:6}}),e.jsx("span",{children:"KigerMap"})]}),e.jsxs("div",{className:"ap-footer-links",children:[e.jsx(r,{to:"/about",children:"关于"}),e.jsx(r,{to:"/privacy",children:"隐私政策"}),e.jsx(r,{to:"/terms",children:"服务条款"}),e.jsx(r,{to:"/feedback",children:"反馈"})]}),e.jsx("p",{className:"ap-footer-copy",children:"© 2025-2026 KigerMap. All rights reserved."})]})})]})}const M=`
/* ===== Reset & Base ===== */
.app-plus-page * { box-sizing: border-box; margin: 0; padding: 0; }
.app-plus-page { color: #1a2b4a; overflow-x: hidden; }

/* ===== Nav ===== */
.ap-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 clamp(20px, 5vw, 60px); height: 64px;
  background: rgba(240, 247, 255, 0.85); backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid rgba(59, 130, 246, 0.08);
}
.ap-nav-logo {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none; color: #1a2b4a; font-weight: 700; font-size: 17px;
}
.ap-nav-logo img { border-radius: 8px; }
.ap-nav-links { display: flex; align-items: center; gap: 24px; }
.ap-nav-link {
  text-decoration: none; color: #4b6a94; font-size: 14px; font-weight: 500;
  transition: color 0.2s;
}
.ap-nav-link:hover { color: #2563eb; }
.ap-nav-dl {
  text-decoration: none; padding: 8px 20px; border-radius: 20px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: #fff; font-size: 13px; font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}
.ap-nav-dl:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3); }

/* ===== Hero ===== */
.ap-hero {
  position: relative; padding: 100px clamp(20px, 5vw, 60px) 80px;
  overflow: hidden; opacity: 0; transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.ap-hero.ap-visible { opacity: 1; transform: translateY(0); }
.ap-hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 40%, rgba(147, 197, 253, 0.3), transparent),
    radial-gradient(ellipse 60% 50% at 80% 30%, rgba(96, 165, 250, 0.15), transparent),
    radial-gradient(ellipse 40% 40% at 50% 80%, rgba(191, 219, 254, 0.2), transparent);
}
.ap-hero-content {
  position: relative; z-index: 1; max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
}
.ap-hero-text { display: flex; flex-direction: column; gap: 20px; }
.ap-badge {
  display: inline-flex; align-items: center; width: fit-content;
  padding: 6px 16px; border-radius: 20px;
  background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.15);
  color: #2563eb; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;
}
.ap-title {
  font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.15;
  color: #0f172a; letter-spacing: -0.02em;
}
.ap-title-accent {
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.ap-subtitle {
  font-size: 16px; line-height: 1.7; color: #64748b; max-width: 440px;
}
.ap-dl-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
.ap-btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 28px; border-radius: 14px; font-size: 15px; font-weight: 600;
  text-decoration: none; transition: all 0.25s ease; cursor: pointer; border: none;
}
.ap-btn-primary {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff; box-shadow: 0 4px 20px rgba(37, 99, 235, 0.25);
}
.ap-btn-primary:hover {
  transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37, 99, 235, 0.35);
}
.ap-btn-secondary {
  background: #fff; color: #1e40af;
  border: 1.5px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}
.ap-btn-secondary:hover {
  transform: translateY(-2px); border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.12);
}
.ap-hint { font-size: 12px; color: #94a3b8; }

/* Phone mockup */
.ap-hero-phone { display: flex; justify-content: center; }
.ap-phone-frame {
  width: 280px; border-radius: 36px; overflow: hidden;
  background: #fff; padding: 8px;
  box-shadow: 0 20px 60px rgba(30, 64, 175, 0.12), 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.1);
}
.ap-phone-screen {
  width: 100%; border-radius: 28px; display: block;
}

/* ===== Section Header ===== */
.ap-section-header { text-align: center; margin-bottom: 48px; }
.ap-section-tag {
  display: inline-block; padding: 5px 14px; border-radius: 20px;
  background: rgba(59, 130, 246, 0.07); color: #2563eb;
  font-size: 13px; font-weight: 600; letter-spacing: 0.3px; margin-bottom: 16px;
}
.ap-section-title {
  font-size: clamp(24px, 3.5vw, 36px); font-weight: 800; color: #0f172a;
  letter-spacing: -0.01em; line-height: 1.3;
}
.ap-section-desc {
  font-size: 15px; color: #64748b; margin-top: 10px;
}

/* ===== Screenshots ===== */
.ap-screenshots {
  padding: 80px clamp(20px, 5vw, 60px);
  background: linear-gradient(180deg, #f0f7ff 0%, #e8f2ff 100%);
}
.ap-carousel-container { max-width: 1200px; margin: 0 auto; }
.ap-carousel {
  display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory;
  padding: 20px 0; scrollbar-width: none; -ms-overflow-style: none;
}
.ap-carousel::-webkit-scrollbar { display: none; }
.ap-shot {
  flex: 0 0 auto; width: 200px; scroll-snap-align: center;
  border-radius: 20px; overflow: hidden; cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0.5; transform: scale(0.9);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}
.ap-shot img { width: 100%; display: block; }
.ap-shot-active {
  opacity: 1; transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.18);
}
.ap-dots { display: flex; justify-content: center; gap: 8px; margin-top: 28px; }
.ap-dot {
  width: 8px; height: 8px; border-radius: 4px; border: none; cursor: pointer;
  background: #cbd5e1; transition: all 0.3s;
}
.ap-dot-active { background: #3b82f6; width: 24px; }

/* ===== Feature Showcases ===== */
.ap-showcases {
  padding: 100px clamp(20px, 5vw, 60px) 60px;
  background: #fff;
}
.ap-showcases .ap-section-header { margin-bottom: 72px; }
.ap-showcase {
  max-width: 1100px; margin: 0 auto 100px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
}
.ap-showcase:last-child { margin-bottom: 0; }
.ap-showcase-reverse { direction: rtl; }
.ap-showcase-reverse > * { direction: ltr; }

.ap-showcase-text { display: flex; flex-direction: column; gap: 16px; }
.ap-showcase-tag {
  display: inline-flex; width: fit-content;
  padding: 4px 12px; border-radius: 6px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(96, 165, 250, 0.08));
  color: #2563eb; font-size: 13px; font-weight: 700; letter-spacing: 0.5px;
}
.ap-showcase-title {
  font-size: clamp(24px, 3vw, 32px); font-weight: 800; color: #0f172a;
  line-height: 1.25; letter-spacing: -0.02em;
}
.ap-showcase-desc {
  font-size: 15px; line-height: 1.75; color: #64748b;
}
.ap-showcase-highlights {
  list-style: none; display: flex; flex-direction: column; gap: 10px;
  margin-top: 4px;
}
.ap-showcase-highlights li {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; font-weight: 500; color: #334155;
}
.ap-showcase-highlights svg { flex-shrink: 0; }

/* Showcase visual — phone mockup with depth */
.ap-showcase-visual {
  position: relative; display: flex; justify-content: center; align-items: center;
  min-height: 480px;
}
.ap-showcase-glow {
  position: absolute; width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(147, 197, 253, 0.35) 0%, transparent 70%);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  pointer-events: none;
}
.ap-showcase-phone {
  position: relative; z-index: 2; width: 240px;
  border-radius: 32px; overflow: hidden;
  background: #fff; padding: 6px;
  box-shadow:
    0 24px 64px rgba(30, 64, 175, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(59, 130, 246, 0.08);
  transition: transform 0.4s ease;
}
.ap-showcase:hover .ap-showcase-phone { transform: translateY(-6px); }
.ap-showcase-phone img {
  width: 100%; display: block; border-radius: 26px;
}
.ap-showcase-phone-secondary {
  position: absolute; z-index: 1; width: 200px;
  border-radius: 28px; overflow: hidden;
  background: #fff; padding: 5px;
  box-shadow: 0 16px 48px rgba(30, 64, 175, 0.1), 0 4px 16px rgba(0, 0, 0, 0.04);
  opacity: 0.55; transform: translateX(60%) translateY(10%) rotate(4deg) scale(0.92);
  transition: all 0.4s ease;
  pointer-events: none;
}
.ap-showcase:hover .ap-showcase-phone-secondary {
  opacity: 0.7; transform: translateX(65%) translateY(8%) rotate(3deg) scale(0.94);
}
.ap-showcase-reverse .ap-showcase-phone-secondary {
  transform: translateX(-60%) translateY(10%) rotate(-4deg) scale(0.92);
}
.ap-showcase-reverse:hover .ap-showcase-phone-secondary {
  transform: translateX(-65%) translateY(8%) rotate(-3deg) scale(0.94);
}
.ap-showcase-phone-secondary img {
  width: 100%; display: block; border-radius: 23px;
}

/* ===== CTA ===== */
.ap-cta {
  padding: 80px clamp(20px, 5vw, 60px);
  background: linear-gradient(180deg, #e8f2ff 0%, #dbeafe 100%);
}
.ap-cta-inner {
  max-width: 640px; margin: 0 auto; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.ap-cta-title {
  font-size: clamp(24px, 3.5vw, 34px); font-weight: 800; color: #0f172a;
}
.ap-cta-desc { font-size: 15px; color: #64748b; margin-bottom: 8px; }

/* ===== Footer ===== */
.ap-footer {
  padding: 40px clamp(20px, 5vw, 60px);
  background: #f0f7ff; border-top: 1px solid rgba(59, 130, 246, 0.06);
}
.ap-footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
}
.ap-footer-brand {
  display: flex; align-items: center; gap: 8px;
  font-weight: 700; font-size: 15px; color: #1a2b4a;
}
.ap-footer-brand img { border-radius: 6px; }
.ap-footer-links { display: flex; gap: 20px; }
.ap-footer-links a {
  text-decoration: none; color: #64748b; font-size: 13px;
  transition: color 0.2s;
}
.ap-footer-links a:hover { color: #2563eb; }
.ap-footer-copy { font-size: 12px; color: #94a3b8; }

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .ap-hero-content { grid-template-columns: 1fr; text-align: center; gap: 40px; }
  .ap-hero-text { align-items: center; }
  .ap-subtitle { max-width: 100%; }
  .ap-dl-buttons { justify-content: center; }
  .ap-phone-frame { width: 220px; }
  .ap-showcase { grid-template-columns: 1fr; gap: 40px; }
  .ap-showcase-reverse { direction: ltr; }
  .ap-showcase-text { text-align: center; align-items: center; }
  .ap-showcase-highlights { align-items: center; }
  .ap-showcase-visual { min-height: 380px; }
  .ap-showcase-phone { width: 200px; }
  .ap-showcase-phone-secondary { width: 160px; }
  .ap-shot { width: 160px; }
  .ap-footer-inner { flex-direction: column; text-align: center; }
}
@media (max-width: 480px) {
  .ap-btn { padding: 12px 20px; font-size: 14px; }
  .ap-phone-frame { width: 180px; }
  .ap-showcase-phone { width: 180px; }
  .ap-showcase-phone-secondary { display: none; }
  .ap-showcase-visual { min-height: 320px; }
  .ap-shot { width: 140px; }
}
`;export{_ as default};
