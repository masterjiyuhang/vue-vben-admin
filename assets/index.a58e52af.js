var k=(h,n,t)=>new Promise((e,p)=>{var f=r=>{try{i(t.next(r))}catch(a){p(a)}},d=r=>{try{i(t.throw(r))}catch(a){p(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,n)).next())});import{dK as x,a as T,v as C,c as B,fs as D,a7 as A,al as R,ah as V,ay as I,o as u,h as _,F as S,aB as j,x as M,y as N,n as s,k as o,z as m,B as y,t as b,j as F,l as $}from"./index.7edc7c5f.js";import z from"./DetailModal.6f2737c4.js";import{B as H}from"./TableImg.d966849c.js";import{l as K}from"./BasicForm.aea8d131.js";import{u as q}from"./useTable.eacba3bd.js";import{b as G}from"./index.5763f186.js";import{getColumns as J}from"./data.6fce43ab.js";import"./index.42bead84.js";import"./index.a64e4612.js";import"./get.feed1269.js";import"./useDescription.c29ad771.js";import"./index.47b2feb4.js";import"./Checkbox.bd2f519d.js";import"./index.413823ca.js";import"./index.8b47dc17.js";import"./eagerComputed.cd36c15f.js";import"./useForm.e8196da0.js";import"./index.0593d06a.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useSize.bf3cca2f.js";import"./useWindowSizeFn.239d948d.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";import"./transButton.cc9c238d.js";import"./index.402a125d.js";import"./index.b18d4641.js";import"./index.2e0ede9d.js";import"./uuid.2b29000c.js";import"./index.c95ed132.js";import"./_baseIteratee.432463c6.js";import"./DeleteOutlined.170db873.js";import"./index.06ad4e6b.js";import"./useRefs.6a32bb24.js";import"./Form.d4dcaa0c.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./index.a32e4add.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.578b0165.js";import"./FullscreenOutlined.c3326f4e.js";import"./index.7d522144.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e1384056.js";import"./index.e10699f5.js";/* empty css              *//* empty css              */import"./index.7d0bbb35.js";import"./index.d9cdbe34.js";import"./index.be0743cb.js";import"./download.b339b2c2.js";import"./base64Conver.08b9f4ec.js";import"./index.e4785832.js";import"./index.8a5a3b2d.js";import"./uniqBy.0932857c.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],Zr=T({__name:"index",setup(h){const n=C(),t=C([]),{t:e}=B(),p=D(),[f,{setTableData:d}]=q({title:e("sys.errorLog.tableTitle"),columns:J(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=G();A(()=>p.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){n.value=l,r(!0)}function E(){throw new Error("fire vue error!")}function L(){t.value.push(`${new Date().getTime()}.png`)}function v(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=I("a-button");return u(),_("div",P,[(u(!0),_(S,null,j(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),s(z,{info:n.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:m(()=>[s(g,{onClick:E,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),s(g,{onClick:L,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),s(g,{onClick:v,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:m(({column:c,record:w})=>[c.key==="action"?(u(),F(o(K),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,w)}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"])])}}});export{Zr as default};
