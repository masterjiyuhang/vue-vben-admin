import{B as n}from"./BasicForm.aea8d131.js";import{aw as u,a as l,cD as c,ay as r,o as d,j as f,z as p,n as i,bS as C,E as _}from"./index.7edc7c5f.js";import{M as h}from"./index.4307c196.js";import{P as b}from"./index.0593d06a.js";/* empty css              *//* empty css              */import"./index.a32e4add.js";import"./index.47b2feb4.js";import"./Checkbox.bd2f519d.js";import"./index.413823ca.js";import"./index.2e0ede9d.js";import"./index.402a125d.js";import"./index.b18d4641.js";import"./index.7d0bbb35.js";import"./get.feed1269.js";import"./index.8b47dc17.js";import"./eagerComputed.cd36c15f.js";import"./index.c95ed132.js";import"./_baseIteratee.432463c6.js";import"./DeleteOutlined.170db873.js";import"./index.06ad4e6b.js";import"./useRefs.6a32bb24.js";import"./Form.d4dcaa0c.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./useSize.bf3cca2f.js";import"./transButton.cc9c238d.js";import"./index.d9cdbe34.js";import"./index.5763f186.js";import"./useWindowSizeFn.239d948d.js";import"./FullscreenOutlined.c3326f4e.js";import"./index.be0743cb.js";import"./index.7d522144.js";import"./uuid.2b29000c.js";import"./download.b339b2c2.js";import"./base64Conver.08b9f4ec.js";import"./index.e4785832.js";import"./index.8a5a3b2d.js";import"./uniqBy.0932857c.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function w(o,t,e,B,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:p(()=>[i(m,{title:"MarkDown\u8868\u5355"},{default:p(()=>[i(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var _o=u(k,[["render",w]]);export{_o as default};
