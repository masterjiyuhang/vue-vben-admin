import{aw as _,a as m,cV as S,ez as f,eA as T,eB as x,eC as h,eD as R,eE as X,eF as y,eG as b,eH as w,eI as B,eJ as C,eK as E,eL as Y,v as n,ay as o,o as r,j as i,z as t,i as l,n as p,aI as g,x as k,y as F,B as $}from"./index.7edc7c5f.js";import{P as A}from"./index.0593d06a.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useSize.bf3cca2f.js";import"./eagerComputed.cd36c15f.js";import"./useWindowSizeFn.239d948d.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";import"./transButton.cc9c238d.js";const P=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],V=P.map(e=>({label:e,value:e,key:e})),D=m({components:{Select:S,PageWrapper:A,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:y,ScrollXTransition:b,SlideXReverseTransition:w,ScrollXReverseTransition:B,ScaleRotateTransition:C,ExpandXTransition:E,ExpandTransition:Y},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:V,value:e,start:s,show:a}}}),I={class:"flex"},N=$(" start "),W={class:"box"};function z(e,a,s,L,j,G){const c=o("Select"),d=o("a-button"),u=o("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",I,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[N]),_:1},8,["onClick"])]),(r(),i(g(`${e.value}Transition`),null,{default:t(()=>[k(l("div",W,null,512),[[F,e.show]])]),_:1}))]),_:1})}var oe=_(D,[["render",z],["__scopeId","data-v-45b1f032"]]);export{oe as default};
