import{aw as P,a as h,aY as A,aZ as C,v as y,bW as I,ay as s,o as i,j as N,z as t,n as r,i as p,h as _,aB as b,t as f,F as k,l as g,B}from"./index.7edc7c5f.js";import{P as V}from"./index.0593d06a.js";import{T as v}from"./index.7d213ee3.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useSize.bf3cca2f.js";import"./eagerComputed.cd36c15f.js";import"./useWindowSizeFn.239d948d.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";import"./transButton.cc9c238d.js";import"./useRefs.6a32bb24.js";import"./PlusOutlined.d684f682.js";const W=h({name:"AccountDetail",components:{PageWrapper:V,ATabs:v,ATabPane:v.TabPane},setup(){var a;const e=A(),n=C(),c=y((a=e.params)==null?void 0:a.id),u=y("detail"),{setTitle:m}=I();m("\u8BE6\u60C5\uFF1A\u7528\u6237"+c.value);function d(){n("/system/account")}return{userId:c,currentKey:u,goBack:d}}}),$=B(" \u7981\u7528\u8D26\u53F7 "),w=B(" \u4FEE\u6539\u5BC6\u7801 "),D={class:"pt-4 m-4 desc-wrap"};function F(e,n,c,u,m,d){const a=s("a-button"),l=s("a-tab-pane"),T=s("a-tabs"),K=s("PageWrapper");return i(),N(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[r(a,{type:"primary",danger:""},{default:t(()=>[$]),_:1}),r(a,{type:"primary"},{default:t(()=>[w]),_:1})]),footer:t(()=>[r(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":n[0]||(n[0]=o=>e.currentKey=o)},{default:t(()=>[r(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),r(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[p("div",D,[e.currentKey=="detail"?(i(),_(k,{key:0},b(10,o=>p("div",{key:o},"\u8FD9\u662F\u7528\u6237"+f(e.userId)+"\u8D44\u6599Tab",1)),64)):g("",!0),e.currentKey=="logs"?(i(),_(k,{key:1},b(10,o=>p("div",{key:o},"\u8FD9\u662F\u7528\u6237"+f(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):g("",!0)])]),_:1},8,["title","onBack"])}var O=P(W,[["render",F]]);export{O as default};
