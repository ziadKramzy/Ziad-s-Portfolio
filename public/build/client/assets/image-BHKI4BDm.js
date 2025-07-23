import{j as p,r as s}from"./index-B0DnFx1G.js";import{L as fe}from"./components-HTtfmZgm.js";const de="/assets/gotham-bold-italic-C_msAlmW.woff2",me="/assets/gotham-bold-D1kvQ7KV.woff2",pe="/assets/gotham-book-italic-Bm2IEtSK.woff2",he="/assets/gotham-book-Bnaws0Ef.woff2",xe="/assets/gotham-medium-italic-Dok430ou.woff2",ge="/assets/gotham-medium-0VT3RO8I.woff2",ye="/assets/ipa-gothic-DimHCOud.woff2",q={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400},Se=e=>`${e}px`,d=e=>`${e/16}rem`,Et=e=>Number(e.replace("ms","")),W=e=>`${e}ms`;function O(e,t={}){let n={};const o=Object.keys(e);for(const a of o){let r=e[a];typeof r=="number"&&a==="delay"&&(r=W(r)),typeof r=="number"&&a!=="opacity"&&(r=Se(r)),typeof r=="number"&&a==="opacity"&&(r=`${r*100}%`),n[`--${a}`]=r}return{...n,...t}}function E(...e){return e.filter(Boolean).join(" ")}const be={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:d(140),fontSizeH1:d(100),fontSizeH2:d(58),fontSizeH3:d(38),fontSizeH4:d(28),fontSizeH5:d(24),fontSizeBodyXL:d(22),fontSizeBodyL:d(20),fontSizeBodyM:d(18),fontSizeBodyS:d(16),fontSizeBodyXS:d(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},ve={fontSizeH0:d(120),fontSizeH1:d(80)},ke={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:d(100),fontSizeH1:d(70),fontSizeH2:d(50),fontSizeH3:d(36),fontSizeH4:d(26),fontSizeH5:d(22)},we={fontSizeH0:d(80),fontSizeH1:d(60),fontSizeH2:d(48),fontSizeH3:d(32),fontSizeH4:d(24),fontSizeH5:d(20)},ze={spaceOuter:"24px",fontSizeH0:d(56),fontSizeH1:d(40),fontSizeH2:d(34),fontSizeH3:d(28),fontSizeH4:d(22),fontSizeH5:d(18),fontSizeBodyL:d(17),fontSizeBodyM:d(16),fontSizeBodyS:d(14)},Re={spaceOuter:"16px",fontSizeH0:d(42),fontSizeH1:d(38),fontSizeH2:d(28),fontSizeH3:d(24),fontSizeH4:d(20)},Me={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"oklch(84.42% 0.19 202.24)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},Ee={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},Y={base:be,desktop:ve,laptop:ke,tablet:we,mobile:ze,mobileS:Re},A={dark:Me,light:Ee},Z=s.createContext({}),_t=({theme:e="dark",children:t,className:n,as:o="div",toggleTheme:a,...r})=>{const c=ee(),i=!c.theme;return p.jsxs(Z.Provider,{value:{theme:e,toggleTheme:a||c.toggleTheme},children:[i&&t,!i&&p.jsx(o,{className:E(n),"data-theme":e,...r,children:t})]})};function ee(){return s.useContext(Z)}function j(e){return e.replace(/\s\s+/g," ")}function G(e){return j(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function _e(){return j(Object.keys(q).map(e=>`
        @media (max-width: ${q[e]}px) {
          :root {
            ${G(Y[e])}
          }
        }
      `).join(`
`))}const $e=j(`
  @layer theme, base, components, layout;
`),Ce=j(`
  :root {
    ${G(Y.base)}
  }

  ${_e()}

  [data-theme='dark'] {
    ${G(A.dark)}
  }

  [data-theme='light'] {
    ${G(A.light)}
  }
`),je=j(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${he}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${pe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${ge}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${xe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${me}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${de}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${ye}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),$t=j(`
  ${$e}

  @layer theme {
    ${Ce}
    ${je}
  }
`),He="_icon_1tdl1_2",Te={icon:He},Le="/assets/icons-Dcqdontj.svg",V=s.forwardRef(({icon:e,className:t,size:n,...o},a)=>p.jsx("svg",{"aria-hidden":!0,ref:a,className:E(Te.icon,t),width:n||24,height:n||24,...o,children:p.jsx("use",{href:`${Le}#${e}`})})),Ie="_text_13dm1_2",Pe={text:Ie},Be=({children:e,size:t="m",as:n="span",align:o="auto",weight:a="auto",secondary:r,className:c,...i})=>p.jsx(n,{className:E(Pe.text,c),"data-align":o,"data-size":t,"data-weight":a,"data-secondary":r,...i,children:e}),te=s.createContext(null),ne=typeof document<"u",oe=ne?s.useLayoutEffect:s.useEffect;class Q{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Fe(e){let t=new Q,n=new Q,o=0,a=!1,r=!1;const c=new WeakSet,i={schedule:(f,m=!1,u=!1)=>{const l=u&&a,h=l?t:n;return m&&c.add(f),h.add(f)&&l&&a&&(o=t.order.length),f},cancel:f=>{n.remove(f),c.delete(f)},process:f=>{if(a){r=!0;return}if(a=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let m=0;m<o;m++){const u=t.order[m];c.has(u)&&(i.schedule(u),e()),u(f)}a=!1,r&&(r=!1,i.process(f))}};return i}const N=["prepare","read","update","preRender","render","postRender"],Ne=40;function Ge(e,t){let n=!1,o=!0;const a={delta:0,timestamp:0,isProcessing:!1},r=N.reduce((l,h)=>(l[h]=Fe(()=>n=!0),l),{}),c=l=>{r[l].process(a)},i=()=>{const l=performance.now();n=!1,a.delta=o?1e3/60:Math.max(Math.min(l-a.timestamp,Ne),1),a.timestamp=l,a.isProcessing=!0,N.forEach(c),a.isProcessing=!1,n&&t&&(o=!1,e(i))},f=()=>{n=!0,o=!0,a.isProcessing||e(i)};return{schedule:N.reduce((l,h)=>{const y=r[h];return l[h]=(b,S=!1,v=!1)=>(n||f(),y.schedule(b,S,v)),l},{}),cancel:l=>N.forEach(h=>r[h].cancel(l)),state:a,steps:r}}const We=s.createContext({});function Oe(e){const t=s.useRef(null);return t.current===null&&(t.current=e()),t.current}const Xe=e=>e,{schedule:Ue,cancel:Ct,state:jt}=Ge(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xe,!0);function Ve(){const e=s.useContext(te);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:o}=e,a=s.useId();return s.useEffect(()=>o(a),[]),!t&&n?[!1,()=>n&&n(a)]:[!0]}const K={current:null},se={current:!1};function Ke(){if(se.current=!0,!!ne)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>K.current=e.matches;e.addListener(t),t()}else K.current=!1}function re(){const e=s.useRef(!1);return oe(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function De(){const e=re(),[t,n]=s.useState(0),o=s.useCallback(()=>{e.current&&n(t+1)},[t]);return[s.useCallback(()=>Ue.postRender(o),[o]),t]}class qe extends s.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ae({children:e,isPresent:t}){const n=s.useId(),o=s.useRef(null),a=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:r,height:c,top:i,left:f}=a.current;if(t||!o.current||!r||!c)return;o.current.dataset.motionPopId=n;const m=document.createElement("style");return document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${c}px !important;
            top: ${i}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),s.createElement(qe,{isPresent:t,childRef:o,sizeRef:a},s.cloneElement(e,{ref:o}))}const X=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:a,presenceAffectsLayout:r,mode:c})=>{const i=Oe(Qe),f=s.useId(),m=s.useMemo(()=>({id:f,initial:t,isPresent:n,custom:a,onExitComplete:u=>{i.set(u,!0);for(const l of i.values())if(!l)return;o&&o()},register:u=>(i.set(u,!1),()=>i.delete(u))}),r?void 0:[n]);return s.useMemo(()=>{i.forEach((u,l)=>i.set(l,!1))},[n]),s.useEffect(()=>{!n&&!i.size&&o&&o()},[n]),c==="popLayout"&&(e=s.createElement(Ae,{isPresent:n},e)),s.createElement(te.Provider,{value:m},e)};function Qe(){return new Map}function Je(e){return s.useEffect(()=>()=>e(),[])}const $=e=>e.key||"";function Ye(e,t){e.forEach(n=>{const o=$(n);t.set(o,n)})}function Ze(e){const t=[];return s.Children.forEach(e,n=>{s.isValidElement(n)&&t.push(n)}),t}const et=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:a,presenceAffectsLayout:r=!0,mode:c="sync"})=>{const i=s.useContext(We).forceRender||De()[0],f=re(),m=Ze(e);let u=m;const l=s.useRef(new Map).current,h=s.useRef(u),y=s.useRef(new Map).current,b=s.useRef(!0);if(oe(()=>{b.current=!1,Ye(m,y),h.current=u}),Je(()=>{b.current=!0,y.clear(),l.clear()}),b.current)return s.createElement(s.Fragment,null,u.map(x=>s.createElement(X,{key:$(x),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:r,mode:c},x)));u=[...u];const S=h.current.map($),v=m.map($),k=S.length;for(let x=0;x<k;x++){const g=S[x];v.indexOf(g)===-1&&!l.has(g)&&l.set(g,void 0)}return c==="wait"&&l.size&&(u=[]),l.forEach((x,g)=>{if(v.indexOf(g)!==-1)return;const w=y.get(g);if(!w)return;const z=S.indexOf(g);let R=x;if(!R){const I=()=>{l.delete(g);const H=Array.from(y.keys()).filter(_=>!v.includes(_));if(H.forEach(_=>y.delete(_)),h.current=m.filter(_=>{const P=$(_);return P===g||H.includes(P)}),!l.size){if(f.current===!1)return;i(),o&&o()}};R=s.createElement(X,{key:$(w),isPresent:!1,onExitComplete:I,custom:t,presenceAffectsLayout:r,mode:c},w),l.set(g,R)}u.splice(z,0,R)}),u=u.map(x=>{const g=x.key;return l.has(g)?x:s.createElement(X,{key:$(x),isPresent:!0,presenceAffectsLayout:r,mode:c},x)}),s.createElement(s.Fragment,null,l.size?u:u.map(x=>s.cloneElement(x)))};function ae(){!se.current&&Ke();const[e]=s.useState(K.current);return e}const tt="_loader_1o1zt_2",nt="_text_1o1zt_17",ot="_span_1o1zt_43",U={loader:tt,text:nt,span:ot},st=s.forwardRef(({className:e,style:t,width:n=32,height:o=4,text:a="Loading...",center:r,...c},i)=>ae()?p.jsx(Be,{className:E(U.text,e),weight:"medium",...c,children:a}):p.jsx("div",{ref:i,className:E(U.loader,e),"data-center":r,style:O({width:n,height:o},t),...c,children:p.jsx("div",{className:U.span})})),rt=({children:e,in:t,unmount:n,initial:o=!0,...a})=>{const r=s.useRef(),c=s.useRef();return s.useEffect(()=>{clearTimeout(t?c.current:r.current)},[t]),p.jsx(et,{children:(t||!n)&&p.jsx(at,{enterTimeout:r,exitTimeout:c,in:t,initial:o,...a,children:e})})},at=({children:e,timeout:t=0,enterTimeout:n,exitTimeout:o,onEnter:a,onEntered:r,onExit:c,onExited:i,initial:f,nodeRef:m,in:u})=>{const[l,h]=s.useState(f?"exited":"entered"),[y,b]=Ve(),[S,v]=s.useState(!f),k=typeof t=="object",x=s.useRef(null),g=m||x,w=S&&u?y:!1;return s.useEffect(()=>{if(S||!u)return;const z=k?t.enter:t;clearTimeout(n.current),clearTimeout(o.current),v(!0),h("entering"),a?.(),g.current?.offsetHeight,n.current=setTimeout(()=>{h("entered"),r?.()},z)},[a,r,t,l,u]),s.useEffect(()=>{if(y&&u)return;const z=k?t.exit:t;clearTimeout(n.current),clearTimeout(o.current),h("exiting"),c?.(),g.current?.offsetHeight,o.current=setTimeout(()=>{h("exited"),b?.(),i?.()},z)},[y,c,b,t,i,u]),e({visible:w,status:l,nodeRef:g})},ct="_button_1l2e3_2",it="_text_1l2e3_132",lt="_loader_1l2e3_145",ut="_icon_1l2e3_158",L={button:ct,text:it,loader:lt,icon:ut};function ce(e){return e?.includes("://")}const ft=s.forwardRef(({href:e,...t},n)=>ce(e)||!e?p.jsx(J,{href:e,ref:n,...t}):p.jsx(J,{unstable_viewTransition:!0,as:fe,prefetch:"intent",to:e,ref:n,...t})),J=s.forwardRef(({className:e,as:t,secondary:n,loading:o,loadingText:a="loading",icon:r,iconEnd:c,iconHoverShift:i,iconOnly:f,children:m,rel:u,target:l,href:h,disabled:y,...b},S)=>{const v=ce(h),x=t||(h?"a":"button");return p.jsxs(x,{className:E(L.button,e),"data-loading":o,"data-icon-only":f,"data-secondary":n,"data-icon":r,href:h,rel:u||v?"noopener noreferrer":void 0,target:l||v?"_blank":void 0,disabled:y,ref:S,...b,children:[!!r&&p.jsx(V,{className:L.icon,"data-start":!f,"data-shift":i,icon:r}),!!m&&p.jsx("span",{className:L.text,children:m}),!!c&&p.jsx(V,{className:L.icon,"data-end":!f,"data-shift":i,icon:c}),p.jsx(rt,{unmount:!0,in:o,children:({visible:g,nodeRef:w})=>p.jsx(st,{ref:w,className:L.loader,size:32,text:a,"data-visible":g})})]})}),dt="_heading_e2qtd_2",mt={heading:dt},Ht=({children:e,level:t=1,as:n,align:o="auto",weight:a="medium",className:r,...c})=>{const i=Math.min(Math.max(t,0),5),f=n||`h${Math.max(i,1)}`;return p.jsx(s.Fragment,{children:p.jsx(f,{className:E(mt.heading,r),"data-align":o,"data-weight":a,"data-level":i,...c,children:e})})};function pt(){const[e,t]=s.useState(!1);return s.useEffect(()=>{t(!0)},[]),e}function ht(e,t,n={},o=!0){const[a,r]=s.useState(!1),[c,i]=s.useState(!1);return s.useEffect(()=>{if(!e?.current)return;const f=new IntersectionObserver(([m])=>{const{isIntersecting:u,target:l}=m;r(u),u&&t&&(f.unobserve(l),i(!0))},n);return!c&&o&&f.observe(e.current),()=>f.disconnect()},[e,t,n,c,o]),a}async function xt({src:e,srcSet:t,sizes:n}){return new Promise((o,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let r=new Image;e&&(r.src=e),t&&(r.srcset=t),n&&(r.sizes=n);const c=()=>{r.removeEventListener("load",c);const i=r.currentSrc;r=null,o(i)};r.addEventListener("load",c)}catch(r){a(`Error loading ${t}: ${r}`)}})}async function gt(e=1,t=1){return new Promise(n=>{const o=document.createElement("canvas"),a=o.getContext("2d");o.width=e,o.height=t,a.fillStyle="rgba(0, 0, 0, 0)",a.fillRect(0,0,e,t),o.toBlob(async r=>{if(!r)throw new Error("Video thumbnail failed to load");const c=URL.createObjectURL(r);o.remove(),n(c)})})}async function yt({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async c=>{const[i,f]=c.split(" "),m=Number(f.replace("w","")),u=await gt(m);return{src:i,image:u,width:f}})),o=n.map(({image:c,width:i})=>`${c} ${i}`).join(", "),a=await xt({srcSet:o,sizes:t});return n.find(c=>c.image===a).src}const St="_image_4szht_2",bt="_elementWrapper_4szht_49",vt="_placeholder_4szht_71",kt="_element_4szht_49",wt="_button_4szht_104",C={image:St,elementWrapper:bt,placeholder:vt,element:kt,button:wt},Tt=({className:e,style:t,reveal:n,delay:o=0,raised:a,src:r,srcSet:c,placeholder:i,...f})=>{const[m,u]=s.useState(!1),{theme:l}=ee(),h=s.useRef(),y=r||c.split(" ")[0],b=ht(h,!ie(y)),S=s.useCallback(()=>{u(!0)},[]);return p.jsx("div",{className:E(C.image,e),"data-visible":b||m,"data-reveal":n,"data-raised":a,"data-theme":l,style:O({delay:W(o)},t),ref:h,children:p.jsx(zt,{delay:o,onLoad:S,loaded:m,inViewport:b,reveal:n,src:y,srcSet:c,placeholder:i,...f})})},zt=({onLoad:e,loaded:t,inViewport:n,srcSet:o,placeholder:a,delay:r,src:c,alt:i,play:f=!0,restartOnPause:m,reveal:u,sizes:l,width:h,height:y,noPauseButton:b,cover:S,...v})=>{const k=ae(),[x,g]=s.useState(!0),[w,z]=s.useState(!k),[R,I]=s.useState(),[H,_]=s.useState(!1),P=s.useRef(),M=s.useRef(),T=ie(c),D=n,le=pt();s.useEffect(()=>{T&&o?(async()=>{const F=await yt({srcSet:o,sizes:l});I(F)})():T&&I(c)},[T,l,c,o]),s.useEffect(()=>{if(!M.current||!R)return;const B=()=>{z(!0),M.current.play()},F=()=>{z(!1),M.current.pause()};f||(F(),m&&(M.current.currentTime=0)),!H&&(n?n&&!k&&f&&B():F())},[n,f,k,m,H,R]);const ue=B=>{B.preventDefault(),_(!0),M.current.paused?(z(!0),M.current.play()):(z(!1),M.current.pause())};return p.jsxs("div",{className:C.elementWrapper,"data-reveal":u,"data-visible":n||t,style:O({delay:W(r+1e3)}),children:[T&&le&&p.jsxs(s.Fragment,{children:[p.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:C.element,"data-loaded":t,"data-cover":S,autoPlay:!k,onLoadStart:e,src:R,"aria-label":i,ref:M,...v}),!b&&p.jsxs(ft,{className:C.button,onClick:ue,children:[p.jsx(V,{icon:w?"pause":"play"}),w?"Pause":"Play"]})]}),!T&&p.jsx("img",{className:C.element,"data-loaded":t,"data-cover":S,onLoad:e,decoding:"async",src:D?c:void 0,srcSet:D?o:void 0,width:h,height:y,alt:i,sizes:l,...v}),x&&p.jsx("img",{"aria-hidden":!0,className:C.placeholder,"data-loaded":t,"data-cover":S,style:O({delay:W(r)}),ref:P,src:a,width:h,height:y,onTransitionEnd:()=>g(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function ie(e){return typeof e=="string"&&e.includes(".mp4")}export{ft as B,ge as G,Ht as H,Tt as I,st as L,rt as T,E as a,Be as b,O as c,Oe as d,oe as e,jt as f,ee as g,q as h,_t as i,ht as j,V as k,he as l,Et as m,W as n,$t as o,Se as p,Xe as q,yt as r,Ct as s,Y as t,ae as u,Ue as v,ne as w,se as x,Ke as y,K as z};
