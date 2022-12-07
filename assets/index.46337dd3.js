import{a as R,G as s,R as H,S as f,aj as J,n as o,_,ck as L,T as j,dj as Z,ar as q,J as K,cH as Q,f as V,dZ as X,c7 as Y,c1 as tt}from"./index.7edc7c5f.js";import{P as et}from"./index.06ad4e6b.js";var st=globalThis&&globalThis.__rest||function(g,t){var u={};for(var e in g)Object.prototype.hasOwnProperty.call(g,e)&&t.indexOf(e)<0&&(u[e]=g[e]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,e=Object.getOwnPropertySymbols(g);v<e.length;v++)t.indexOf(e[v])<0&&Object.prototype.propertyIsEnumerable.call(g,e[v])&&(u[e[v]]=g[e[v]]);return u},nt=R({name:"Steps",props:{type:s.string.def("default"),prefixCls:s.string.def("vc-steps"),iconPrefix:s.string.def("vc"),direction:s.string.def("horizontal"),labelPlacement:s.string.def("horizontal"),status:s.string.def("process"),size:s.string.def(""),progressDot:s.oneOfType([s.looseBool,s.func]).def(void 0),initial:s.number.def(0),current:s.number.def(0),icons:s.shape({finish:s.any,error:s.any}).loose,stepIcon:Function},slots:["stepIcon","progressDot"],emits:["change"],setup:function(t,u){var e=u.slots,v=u.emit,D=function(n){var a=t.current;a!==n&&v("change",n)};return function(){var x,n,a=t.prefixCls,d=t.direction,l=t.type,y=t.labelPlacement,r=t.iconPrefix,c=t.status,k=t.size,i=t.current,m=t.progressDot,p=m===void 0?e.progressDot:m,z=t.initial,w=t.icons,C=t.stepIcon,P=C===void 0?e.stepIcon:C,h=l==="navigation",I=p?"vertical":y,N=H(a,"".concat(a,"-").concat(d),(x={},f(x,"".concat(a,"-").concat(k),k),f(x,"".concat(a,"-label-").concat(I),d==="horizontal"),f(x,"".concat(a,"-dot"),!!p),f(x,"".concat(a,"-navigation"),h),x)),O=J((n=e.default)===null||n===void 0?void 0:n.call(e));return o("div",{class:N},[O.map(function(F,T){var $=F.props||{},B=$.prefixCls,A=B===void 0?a:B,E=st($,["prefixCls"]),S=z+T,b=_(_({},E),{stepNumber:S+1,stepIndex:S,key:S,prefixCls:A,iconPrefix:r,progressDot:p,icons:w,stepIcon:P,onStepClick:D});return c==="error"&&T===i-1&&(b.class="".concat(a,"-next-error")),E.status||(S===i?b.status=c:S<i?b.status="finish":b.status="wait"),b.active=S===i,L(F,b)})])}}});function W(g){return typeof g=="string"}function it(){}var G=function(){return{prefixCls:String,wrapperStyle:{type:Object,default:void 0},itemWidth:String,active:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},status:String,iconPrefix:String,icon:s.any,adjustMarginRight:String,stepNumber:Number,stepIndex:Number,description:s.any,title:s.any,subTitle:s.any,progressDot:Z(s.oneOfType([s.looseBool,s.func])),tailContent:s.any,icons:s.shape({finish:s.any,error:s.any}).loose,onClick:Function,onStepClick:Function,stepIcon:Function}},at=R({name:"Step",props:G(),slots:["title","subTitle","description","tailContent","stepIcon","progressDot"],emits:["click","stepClick"],setup:function(t,u){var e=u.slots,v=u.emit,D=function(a){v("click",a),v("stepClick",t.stepIndex)},x=function(a){var d,l=a.icon,y=a.title,r=a.description,c=t.prefixCls,k=t.stepNumber,i=t.status,m=t.iconPrefix,p=t.icons,z=t.progressDot,w=z===void 0?e.progressDot:z,C=t.stepIcon,P=C===void 0?e.stepIcon:C,h,I=(d={},f(d,"".concat(c,"-icon"),!0),f(d,"".concat(m,"icon"),!0),f(d,"".concat(m,"icon-").concat(l),l&&W(l)),f(d,"".concat(m,"icon-check"),!l&&i==="finish"&&p&&!p.finish),f(d,"".concat(m,"icon-close"),!l&&i==="error"&&p&&!p.error),d),N=o("span",{class:"".concat(c,"-icon-dot")},null);return w?typeof w=="function"?h=o("span",{class:"".concat(c,"-icon")},[w({iconDot:N,index:k-1,status:i,title:y,description:r,prefixCls:c})]):h=o("span",{class:"".concat(c,"-icon")},[N]):l&&!W(l)?h=o("span",{class:"".concat(c,"-icon")},[l]):p&&p.finish&&i==="finish"?h=o("span",{class:"".concat(c,"-icon")},[p.finish]):p&&p.error&&i==="error"?h=o("span",{class:"".concat(c,"-icon")},[p.error]):l||i==="finish"||i==="error"?h=o("span",{class:I},null):h=o("span",{class:"".concat(c,"-icon")},[k]),P&&(h=P({index:k-1,status:i,title:y,description:r,node:h})),h};return function(){var n,a,d,l,y,r=t.prefixCls,c=t.itemWidth,k=t.active,i=t.status,m=i===void 0?"wait":i,p=t.tailContent,z=t.adjustMarginRight,w=t.disabled,C=t.title,P=C===void 0?(a=e.title)===null||a===void 0?void 0:a.call(e):C,h=t.description,I=h===void 0?(d=e.description)===null||d===void 0?void 0:d.call(e):h,N=t.subTitle,O=N===void 0?(l=e.subTitle)===null||l===void 0?void 0:l.call(e):N,F=t.icon,T=F===void 0?(y=e.icon)===null||y===void 0?void 0:y.call(e):F,$=t.onClick,B=t.onStepClick,A=(n={},f(n,"".concat(r,"-item"),!0),f(n,"".concat(r,"-item-").concat(m),!0),f(n,"".concat(r,"-item-custom"),T),f(n,"".concat(r,"-item-active"),k),f(n,"".concat(r,"-item-disabled"),w===!0),n),E={class:A},S={};c&&(S.width=c),z&&(S.marginRight=z);var b={onClick:$||it};return B&&!w&&(b.role="button",b.tabindex=0,b.onClick=D),o("div",j(j({},E),{},{style:S}),[o("div",j(j({},b),{},{class:"".concat(r,"-item-container")}),[o("div",{class:"".concat(r,"-item-tail")},[p]),o("div",{class:"".concat(r,"-item-icon")},[x({icon:T,title:P,description:I})]),o("div",{class:"".concat(r,"-item-content")},[o("div",{class:"".concat(r,"-item-title")},[P,O&&o("div",{title:O,class:"".concat(r,"-item-subtitle")},[O])]),I&&o("div",{class:"".concat(r,"-item-description")},[I])])])])}}}),ot=function(){return{prefixCls:String,iconPrefix:String,current:Number,initial:Number,percent:Number,responsive:{type:Boolean,default:void 0},labelPlacement:String,status:String,size:String,direction:String,progressDot:{type:[Boolean,Function],default:void 0},type:String,onChange:Function,"onUpdate:current":Function}},U=R({name:"ASteps",inheritAttrs:!1,props:q(ot(),{current:0,responsive:!0,labelPlacement:"horizontal"}),slots:["progressDot"],setup:function(t,u){var e=u.attrs,v=u.slots,D=u.emit,x=K("steps",t),n=x.prefixCls,a=x.direction,d=x.configProvider,l=Q(),y=V(function(){return t.responsive&&l.value.xs?"vertical":t.direction}),r=V(function(){return d.getPrefixCls("",t.iconPrefix)}),c=function(m){D("update:current",m),D("change",m)},k=function(m){var p=m.node,z=m.status;if(z==="process"&&t.percent!==void 0){var w=t.size==="small"?32:40,C=o("div",{class:"".concat(n,"-progress-icon")},[o(et,{type:"circle",percent:t.percent,width:w,strokeWidth:4,format:function(){return null}},null),p]);return C}return p};return function(){var i,m=H((i={},f(i,"".concat(n.value,"-rtl"),a.value==="rtl"),f(i,"".concat(n.value,"-with-progress"),t.percent!==void 0),i),e.class),p={finish:o(X,{class:"".concat(n,"-finish-icon")},null),error:o(Y,{class:"".concat(n,"-error-icon")},null)};return o(nt,j(j({icons:p},tt(t,["percent","responsive"])),{},{direction:y.value,prefixCls:n.value,iconPrefix:r.value,class:m,onChange:c}),_(_({},v),{stepIcon:k}))}}}),M=R(_(_({},at),{name:"AStep",props:G()})),lt=_(U,{Step:M,install:function(t){return t.component(U.name,U),t.component(M.name,M),t}});export{lt as S};
