import{M as E,a as F}from"./index.4307c196.js";import{P as k}from"./index.0593d06a.js";import{aw as C,a as w,v as s,ay as t,o as g,j as B,z as r,i as p,n as a,k as A,B as d}from"./index.7edc7c5f.js";import{C as D}from"./index.507d6dac.js";import"./index.7d213ee3.js";/* empty css              */import"./index.5763f186.js";import"./useWindowSizeFn.239d948d.js";import"./FullscreenOutlined.c3326f4e.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useSize.bf3cca2f.js";import"./eagerComputed.cd36c15f.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";import"./transButton.cc9c238d.js";import"./index.ecc6347f.js";import"./index.8a5a3b2d.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./useRefs.6a32bb24.js";import"./PlusOutlined.d684f682.js";const M=w({components:{MarkDown:E,PageWrapper:k,MarkdownViewer:F,ACard:D},setup(){const e=s(null),u=s(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function m(){const o=A(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function l(o){u.value=o}function i(){u.value=""}return{value:u,toggleTheme:m,markDownRef:e,handleChange:l,clearValue:i}}}),V=d(" \u9ED1\u6697\u4E3B\u9898 "),R=d(" \u6E05\u7A7A\u5185\u5BB9 "),b={class:"mt-2"};function P(e,u,m,l,i,o){const n=t("a-button"),c=t("MarkDown"),_=t("MarkdownViewer"),h=t("a-card"),f=t("PageWrapper");return g(),B(f,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[p("div",null,[a(n,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[V]),_:1},8,["onClick"]),a(n,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[R]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),p("div",b,[a(h,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[a(_,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var ue=C(M,[["render",P]]);export{ue as default};
