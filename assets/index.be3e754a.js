import{a as _,aG as v,v as t,b,f as x,k as e,o as w,h as y,n as H,z as k,i as z,q as c,bm as l,b1 as S,aw as R}from"./index.7edc7c5f.js";import{u as C}from"./useWindowSizeFn.239d948d.js";import{a as B}from"./useContentViewHeight.df8aef72.js";const L=["src"],$=_({__name:"index",props:{frameSrc:v.string.def("")},setup(p){const i=t(!0),g=t(50),s=t(window.innerHeight),o=t(),{headerHeightRef:m}=B(),{prefixCls:r}=b("iframe-page");C(d,150,{immediate:!0});const f=x(()=>({height:`${e(s)}px`}));function d(){const n=e(o);if(!n)return;const a=m.value;g.value=a,s.value=window.innerHeight-a;const u=document.documentElement.clientHeight-a;n.style.height=`${u}px`}function h(){i.value=!1,d()}return(n,a)=>(w(),y("div",{class:c(e(r)),style:l(e(f))},[H(e(S),{spinning:i.value,size:"large",style:l(e(f))},{default:k(()=>[z("iframe",{src:p.frameSrc,class:c(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:h},null,42,L)]),_:1},8,["spinning","style"])],6))}});var V=R($,[["__scopeId","data-v-179381bf"]]);export{V as default};
