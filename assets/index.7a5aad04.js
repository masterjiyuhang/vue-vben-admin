import{B as k,A as y}from"./BasicForm.aea8d131.js";import{aw as R,v as c,f as F,ah as C,k as d,a as M,cD as w,cV as _,bt as O,ay as r,o as V,j,z as t,n as i,E as H}from"./index.7edc7c5f.js";import{P as U}from"./index.0593d06a.js";import{o as B,t as q}from"./tree.b097bf33.js";/* empty css              *//* empty css              */import"./index.a32e4add.js";import"./index.47b2feb4.js";import"./Checkbox.bd2f519d.js";import"./index.413823ca.js";import"./index.2e0ede9d.js";import"./index.402a125d.js";import"./index.b18d4641.js";import"./index.7d0bbb35.js";import"./get.feed1269.js";import"./index.8b47dc17.js";import"./eagerComputed.cd36c15f.js";import"./index.c95ed132.js";import"./_baseIteratee.432463c6.js";import"./DeleteOutlined.170db873.js";import"./index.06ad4e6b.js";import"./useRefs.6a32bb24.js";import"./Form.d4dcaa0c.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./useSize.bf3cca2f.js";import"./transButton.cc9c238d.js";import"./index.d9cdbe34.js";import"./index.5763f186.js";import"./useWindowSizeFn.239d948d.js";import"./FullscreenOutlined.c3326f4e.js";import"./index.be0743cb.js";import"./index.7d522144.js";import"./uuid.2b29000c.js";import"./download.b339b2c2.js";import"./base64Conver.08b9f4ec.js";import"./index.e4785832.js";import"./index.8a5a3b2d.js";import"./uniqBy.0932857c.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";const A=c([]),P=c([]),E=c([]);for(let e=1;e<10;e++)E.value.push({label:"\u9009\u9879"+e,value:`${e}`});const G=F(()=>C(d(E)).map(e=>(e.disabled=d(P).indexOf(e.value)!==-1,e))),$=F(()=>C(d(E)).map(e=>(e.disabled=d(A).indexOf(e.value)!==-1,e))),f=[{id:"guangdong",label:"\u5E7F\u4E1C\u7701",value:"1",key:"1"},{id:"jiangsu",label:"\u6C5F\u82CF\u7701",value:"2",key:"2"}],h={guangdong:[{label:"\u73E0\u6D77\u5E02",value:"1",key:"1"},{label:"\u6DF1\u5733\u5E02",value:"2",key:"2"},{label:"\u5E7F\u5DDE\u5E02",value:"3",key:"3"}],jiangsu:[{label:"\u5357\u4EAC\u5E02",value:"1",key:"1"},{label:"\u65E0\u9521\u5E02",value:"2",key:"2"},{label:"\u82CF\u5DDE\u5E02",value:"3",key:"3"}]},I=[{field:"divider-basic",component:"Divider",label:"\u57FA\u7840\u5B57\u6BB5",colProps:{span:24}},{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:({schema:e,formModel:n})=>({placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:l=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"\u5E26\u540E\u7F00",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"\u5929"},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"Checkbox",label:"\u5B57\u6BB58",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"\u5B57\u6BB59",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"\u5B57\u6BB510",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field11",component:"Cascader",label:"\u5B57\u6BB511",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6F14\u793A",colProps:{span:24}},{field:"field30",component:"ApiSelect",label:"\u61D2\u52A0\u8F7D\u8FDC\u7A0B\u4E0B\u62C9",required:!0,componentProps:{api:B,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!1,onChange:e=>{},onOptionsChange:e=>{e.length}},colProps:{span:8},defaultValue:"0"},{field:"field31",component:"Input",label:"\u4E0B\u62C9\u672C\u5730\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u8FDC\u7A0B\u6570\u636E\u6E90\u672C\u5730\u641C\u7D22","\u53EA\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u83B7\u53D6\u6240\u6709\u9009\u9879"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"\u4E0B\u62C9\u8FDC\u7A0B\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u5C06\u5173\u952E\u8BCD\u53D1\u9001\u5230\u63A5\u53E3\u8FDB\u884C\u8FDC\u7A0B\u641C\u7D22"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",helpMessage:["ApiTreeSelect\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:q,resultField:"list"},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0},colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"\u5B57\u6BB5\u8054\u52A8",colProps:{span:24}},{field:"province",component:"Select",label:"\u7701\u4EFD",colProps:{span:8},componentProps:({formModel:e,formActionType:n})=>({options:f,placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8",onChange:l=>{let p=l==1?h[f[0].id]:h[f[1].id];l===void 0&&(p=[]),e.city=void 0;const{updateSchema:m}=n;m({field:"city",componentProps:{options:p}})}})},{field:"city",component:"Select",label:"\u57CE\u5E02",colProps:{span:8},componentProps:{options:[],placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8"}},{field:"divider-selects",component:"Divider",label:"\u4E92\u65A5\u591A\u9009",helpMessage:["\u4E24\u4E2ASelect\u5171\u7528\u6570\u636E\u6E90","\u4F46\u4E0D\u53EF\u9009\u62E9\u5BF9\u65B9\u5DF2\u9009\u4E2D\u7684\u9879\u76EE"],colProps:{span:24}},{field:"selectA",component:"Select",label:"\u4E92\u65A5SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"\u4E92\u65A5SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-deconstruct",component:"Divider",label:"\u5B57\u6BB5\u89E3\u6784",helpMessage:["\u5982\u679C\u7EC4\u4EF6\u7684\u503C\u662F array \u6216\u8005 object","\u53EF\u4EE5\u6839\u636E ES6 \u7684\u89E3\u6784\u8BED\u6CD5\u5206\u522B\u53D6\u503C"],colProps:{span:24}},{field:"[startTime, endTime]",label:"\u65F6\u95F4\u8303\u56F4",component:"RangePicker",componentProps:{format:"YYYY-MM-DD HH:mm:ss",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],showTime:{format:"HH:mm:ss"}}},{field:"divider-others",component:"Divider",label:"\u5176\u5B83",colProps:{span:24}},{field:"field20",component:"InputNumber",label:"\u5B57\u6BB520",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"\u5B57\u6BB521",componentProps:{min:0,max:100,range:!0,marks:{20:"20\xB0C",60:"60\xB0C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"\u5B57\u6BB522",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}],x=M({components:{BasicForm:k,CollapseContainer:w,PageWrapper:U,ApiSelect:y,ASelect:_},setup(){const e=c(null),{createMessage:n}=H(),l=c(""),p=F(()=>({keyword:d(l)}));function m(s){l.value=s}return{schemas:I,optionsListApi:B,optionsA:G,optionsB:$,valueSelectA:A,valueSelectB:P,onSearch:O(m,300),searchParams:p,handleReset:()=>{l.value=""},handleSubmit:s=>{n.success("click search,values:"+JSON.stringify(s))},check:e}}});function z(e,n,l,p,m,s){const v=r("a-select"),b=r("ApiSelect"),g=r("BasicForm"),D=r("CollapseContainer"),S=r("PageWrapper");return V(),j(S,{title:"\u8868\u5355\u57FA\u7840\u793A\u4F8B",contentFullHeight:""},{default:t(()=>[i(D,{title:"\u57FA\u7840\u793A\u4F8B"},{default:t(()=>[i(g,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset},{selectA:t(({model:u,field:o})=>[i(v,{options:e.optionsA,mode:"multiple",value:u[o],"onUpdate:value":a=>u[o]=a,onChange:a=>e.valueSelectA=u[o],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:t(({model:u,field:o})=>[i(v,{options:e.optionsB,mode:"multiple",value:u[o],"onUpdate:value":a=>u[o]=a,onChange:a=>e.valueSelectB=u[o],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),localSearch:t(({model:u,field:o})=>[i(b,{api:e.optionsListApi,showSearch:"",value:u[o],"onUpdate:value":a=>u[o]=a,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),remoteSearch:t(({model:u,field:o})=>[i(b,{api:e.optionsListApi,showSearch:"",value:u[o],"onUpdate:value":a=>u[o]=a,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,onSearch:e.onSearch},null,8,["api","value","onUpdate:value","params","onSearch"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}var Ve=R(x,[["render",z]]);export{Ve as default};
