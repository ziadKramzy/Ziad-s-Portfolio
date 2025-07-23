import{r as e,j as X}from"./index-B0DnFx1G.js";import{j as he,u as ce,c as ge,a as xe,n as ye,r as De}from"./image-BHKI4BDm.js";import{W as we,h as ie,e as Ue,S as Me,G as J,A as Se,D as $,i as q,P as Re,j as K,M as O,O as be,k as Te,d as Q,r as Ce,c as Le,a as Pe,t as ee,m as Ae,C as te,l as j,n as ke}from"./three-lAf56tG-.js";import{M as re}from"./route-DgkfEKbd.js";import{t as ze}from"./throttle-BgiUmwhn.js";import{u as ne}from"./use-spring-DegSYzPR.js";import{a as N}from"./animate-CVVRYMgw.js";import"./components-HTtfmZgm.js";import"./slice-app-placeholder-BfRsQMSa.js";import"./spr-lesson-builder-dark-placeholder-CxlvWxWS.js";import"./meta-BpWbT_-_.js";import"./config-DqxGbUba.js";import"./preload-helper-BXl3LOEh.js";import"./decoder-text-DJrNz1ba.js";import"./visually-hidden-yVmHAfOT.js";import"./useScrollToHash-DYDrbRfy.js";import"./divider-DRDX4q7F.js";import"./useWindowSize-BLpVEtdB.js";import"./index-Sos_u0WN.js";const Ee={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},_e={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},je="_model_fphsv_2",Be="_canvas_fphsv_11",ae={model:je,canvas:Be},se={Frame:"Frame",Screen:"Screen"},oe={stiffness:40,damping:20,mass:1.4,restSpeed:.001},at=({models:L,show:w=!0,showDelay:P=0,cameraPosition:h={x:0,y:0,z:8},style:A,className:k,onLoad:B,alt:G,...z})=>{const[U,F]=e.useState(!1),d=e.useRef(),l=e.useRef(),i=e.useRef(),g=e.useRef(),r=e.useRef(),t=e.useRef(),v=e.useRef(),f=e.useRef(),p=e.useRef(),x=e.useRef(),o=e.useRef(),u=e.useRef(),n=e.useRef(),m=e.useRef(),y=e.useRef(),a=e.useRef(),E=e.useRef(),Y=he(d,!1,{threshold:.2}),Z=ce(),M=ne(0,oe),S=ne(0,oe);e.useEffect(()=>{const{clientWidth:s,clientHeight:c}=d.current;t.current=new we({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(s,c),t.current.outputColorSpace=ie,i.current=new Ue(36,s/c,.1,100),i.current.position.set(h.x,h.y,h.z),r.current=new Me,g.current=new J,r.current.add(g.current);const D=new Se(16777215,1.2),b=new $(16777215,1.1),T=new $(16777215,.8);T.position.set(-6,2,2),b.position.set(.5,0,.866),y.current=[D,b,T],y.current.forEach(C=>r.current.add(C)),v.current=new J,r.current.add(v.current),v.current.position.set(0,0,-.8),v.current.rotateX(Math.PI/2);const _=512,I=8,H=8,ue=1.5,le=.8,ve=3;f.current=new q(_,_),f.current.texture.generateMipmaps=!1,p.current=new q(_,_),p.current.texture.generateMipmaps=!1;const V=new Re(I,H).rotateX(Math.PI/2),fe=new K({map:f.current.texture,opacity:le,transparent:!0});m.current=new O(V,fe),m.current.scale.y=-1,v.current.add(m.current),a.current=new O(V),a.current.visible=!1,v.current.add(a.current);const me=new K({color:16777215,opacity:0,transparent:!0});E.current=new O(V,me),E.current.rotateX(Math.PI),E.current.position.y-=1e-5,v.current.add(E.current),x.current=new be(-I/2,I/2,H/2,-H/2,0,ue),x.current.rotation.x=Math.PI/2,v.current.add(x.current),o.current=new Te,o.current.userData.darkness={value:ve},o.current.onBeforeCompile=C=>{C.uniforms.darkness=o.current.userData.darkness,C.fragmentShader=`
        uniform float darkness;
        ${C.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},o.current.depthTest=!1,o.current.depthWrite=!1,u.current=new Q(Ee),u.current.depthTest=!1,n.current=new Q(_e),n.current.depthTest=!1;const de=M.on("change",R),pe=S.on("change",R);return()=>{f.current.dispose(),p.current.dispose(),Ce(y.current),Le(r.current),Pe(t.current),de(),pe()}},[]);const W=e.useCallback(s=>{a.current.visible=!0,a.current.material=u.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,u.current.uniforms.h.value=s*(1/256),t.current.setRenderTarget(p.current),t.current.render(a.current,x.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=p.current.texture,n.current.uniforms.v.value=s*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,x.current),a.current.visible=!1},[]),R=e.useCallback(()=>{const c=r.current.background;r.current.background=null,r.current.overrideMaterial=o.current,t.current.setRenderTarget(f.current),t.current.render(r.current,x.current),r.current.overrideMaterial=null,W(5),W(5*.4),t.current.setRenderTarget(null),r.current.background=c,g.current.rotation.x=M.get(),g.current.rotation.y=S.get(),t.current.render(r.current,i.current)},[W,M,S]);return e.useEffect(()=>{const s=ze(c=>{const{innerWidth:D,innerHeight:b}=window,T={x:(c.clientX-D/2)/D,y:(c.clientY-b/2)/b};S.set(T.x/2),M.set(T.y/2)},100);return Y&&!Z&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[Y,Z,M,S]),e.useEffect(()=>{const s=()=>{if(!d.current)return;const{clientWidth:c,clientHeight:D}=d.current;t.current.setSize(c,D),i.current.aspect=c/D,i.current.updateProjectionMatrix(),R()};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[R]),X.jsxs("div",{className:xe(ae.model,k),"data-loaded":U,style:ge({delay:ye(P)},A),ref:d,role:"img","aria-label":G,...z,children:[X.jsx("canvas",{className:ae.canvas,ref:l}),L.map((s,c)=>X.jsx(Ge,{renderer:t,modelGroup:g,show:w,showDelay:P,renderFrame:R,index:c,setLoaded:F,onLoad:B,model:s},JSON.stringify(s.position)))]})},Ge=({renderer:L,model:w,modelGroup:P,renderFrame:h,index:A,showDelay:k,setLoaded:B,onLoad:G,show:z})=>{const[U,F]=e.useState(),d=ce(),l=e.createRef();e.useEffect(()=>{const i=async(r,t)=>{r.colorSpace=ie,r.flipY=!1,r.anisotropy=L.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await L.current.initTexture(r),t.material.color=new te(16777215),t.material.transparent=!0,t.material.map=r};F({start:async()=>{const{texture:r,position:t,url:v}=w;let f,p;const[x,o]=await Promise.all([await ee.loadAsync(r.placeholder),await Ae.loadAsync(v)]);P.current.add(o.scene),o.scene.traverse(async n=>{n.material&&(n.material.color=new te(2039845)),n.name===se.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,i(x,l.current),f=async()=>{const m=await De(r),y=await ee.loadAsync(m);await i(y,n),N(1,0,{onUpdate:a=>{l.current.material.opacity=a,h()}})})});const u=new j(t.x,t.y,t.z);return d&&o.scene.position.set(...u.toArray()),w.animation===re.SpringUp&&(p=()=>{const n=new j(u.x,u.y-1,u.z);o.scene.position.set(...n.toArray()),N(n.y,u.y,{type:"spring",delay:(300*A+k)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:m=>{o.scene.position.y=m,h()}})}),w.animation===re.LaptopOpen&&(p=()=>{const n=o.scene.children.find(a=>a.name===se.Frame),m=new j(ke.degToRad(90),0,0),y=new j(0,0,0);return o.scene.position.set(...u.toArray()),n.rotation.set(...m.toArray()),N(m.x,y.x,{type:"spring",delay:(300*A+k+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,h()}})}),{loadFullResTexture:f,playAnimation:p}}})},[]),e.useEffect(()=>{if(!U||!z)return;let i;const g=async()=>{const{loadFullResTexture:r,playAnimation:t}=await U.start();B(!0),G?.(),d||(i=t()),await r(),d&&h()};return e.startTransition(()=>{g()}),()=>{i?.stop()}},[U,z])};export{at as Model};
