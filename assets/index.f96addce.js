var d=(e,s,o)=>new Promise((p,r)=>{var a=t=>{try{i(o.next(t))}catch(m){r(m)}},u=t=>{try{i(o.throw(t))}catch(m){r(m)}},i=t=>t.done?p(t.value):Promise.resolve(t.value).then(a,u);i((o=o.apply(e,s)).next())});import{P as _}from"./index.0593d06a.js";import{B as F}from"./BasicForm.aea8d131.js";import{u as C}from"./useForm.e8196da0.js";import{aw as h,a as w,ay as n,o as E,j as g,z as c,i as f,n as l,B}from"./index.7edc7c5f.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useSize.bf3cca2f.js";import"./eagerComputed.cd36c15f.js";import"./useWindowSizeFn.239d948d.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";import"./transButton.cc9c238d.js";/* empty css              *//* empty css              */import"./index.a32e4add.js";import"./index.47b2feb4.js";import"./Checkbox.bd2f519d.js";import"./index.413823ca.js";import"./index.2e0ede9d.js";import"./index.402a125d.js";import"./index.b18d4641.js";import"./index.7d0bbb35.js";import"./get.feed1269.js";import"./index.8b47dc17.js";import"./index.c95ed132.js";import"./_baseIteratee.432463c6.js";import"./DeleteOutlined.170db873.js";import"./index.06ad4e6b.js";import"./useRefs.6a32bb24.js";import"./Form.d4dcaa0c.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./index.d9cdbe34.js";import"./index.5763f186.js";import"./FullscreenOutlined.c3326f4e.js";import"./index.be0743cb.js";import"./index.7d522144.js";import"./uuid.2b29000c.js";import"./download.b339b2c2.js";import"./base64Conver.08b9f4ec.js";import"./index.e4785832.js";import"./index.8a5a3b2d.js";import"./uniqBy.0932857c.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,o)=>o?o!==e.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")}]}],b=w({name:"ChangePassword",components:{BasicForm:F,PageWrapper:_},setup(){const[e,{validate:s,resetFields:o}]=C({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:P});function p(){return d(this,null,function*(){try{const r=yield s(),{passwordOld:a,passwordNew:u}=r}catch(r){}})}return{register:e,resetFields:o,handleSubmit:p}}}),A={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"},v=B(" \u91CD\u7F6E "),D=B(" \u786E\u8BA4 ");function k(e,s,o,p,r,a){const u=n("BasicForm"),i=n("a-button"),t=n("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",A,[l(u,{onRegister:e.register},null,8,["onRegister"]),f("div",y,[l(i,{onClick:e.resetFields},{default:c(()=>[v]),_:1},8,["onClick"]),l(i,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:c(()=>[D]),_:1},8,["onClick"])])])]),_:1})}var go=h(b,[["render",k]]);export{go as default};
