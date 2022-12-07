import{B as b}from"./TableImg.d966849c.js";import{l as C}from"./BasicForm.aea8d131.js";import{u as g}from"./useTable.eacba3bd.js";import{c as _}from"./system.38e6aa28.js";import{u as w}from"./index.bc786a48.js";import{R as D,c as B,s as T}from"./RoleDrawer.82cf1206.js";import{aw as R,a as k,ay as t,o as d,h as y,n as a,z as m,j as S,l as E,B as v}from"./index.7edc7c5f.js";import"./index.47b2feb4.js";import"./Checkbox.bd2f519d.js";import"./index.413823ca.js";import"./index.8b47dc17.js";import"./eagerComputed.cd36c15f.js";import"./useForm.e8196da0.js";import"./index.0593d06a.js";import"./index.c0591782.js";import"./index.295e243a.js";import"./useSize.bf3cca2f.js";import"./useWindowSizeFn.239d948d.js";import"./useContentViewHeight.df8aef72.js";import"./ArrowLeftOutlined.d11a5ddb.js";import"./index.bcf664cb.js";import"./transButton.cc9c238d.js";import"./index.402a125d.js";import"./index.b18d4641.js";import"./index.2e0ede9d.js";import"./uuid.2b29000c.js";import"./index.c95ed132.js";import"./_baseIteratee.432463c6.js";import"./get.feed1269.js";import"./DeleteOutlined.170db873.js";import"./index.06ad4e6b.js";import"./useRefs.6a32bb24.js";import"./Form.d4dcaa0c.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./index.5763f186.js";import"./FullscreenOutlined.c3326f4e.js";import"./index.a32e4add.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.578b0165.js";import"./index.7d522144.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e1384056.js";import"./index.e10699f5.js";/* empty css              *//* empty css              */import"./index.7d0bbb35.js";import"./index.d9cdbe34.js";import"./index.be0743cb.js";import"./download.b339b2c2.js";import"./base64Conver.08b9f4ec.js";import"./index.e4785832.js";import"./index.8a5a3b2d.js";import"./uniqBy.0932857c.js";import"./index.4fc10e63.js";import"./index.008d9b18.js";import"./useContextMenu.8642624a.js";const A=k({name:"RoleManagement",components:{BasicTable:b,RoleDrawer:D,TableAction:C},setup(){const[o,{openDrawer:r}]=w(),[p,{reload:s}]=g({title:"\u89D2\u8272\u5217\u8868",api:_,columns:B,formConfig:{labelWidth:120,schemas:T},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function i(e){}function n(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}}),F=v(" \u65B0\u589E\u89D2\u8272 ");function $(o,r,p,s,l,c){const i=t("a-button"),n=t("TableAction"),e=t("BasicTable"),f=t("RoleDrawer");return d(),y("div",null,[a(e,{onRegister:o.registerTable},{toolbar:m(()=>[a(i,{type:"primary",onClick:o.handleCreate},{default:m(()=>[F]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),S(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Uo=R(A,[["render",$]]);export{Uo as default};
