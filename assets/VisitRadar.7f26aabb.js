import{a as r,v as i,a7 as u,o as n,j as s,z as l,i as m,bm as d,k as p}from"./index.7edc7c5f.js";import{C as f}from"./index.507d6dac.js";import"./index.7d213ee3.js";/* empty css              */import{u as c}from"./useECharts.69f15a90.js";import"./index.ecc6347f.js";import"./index.8a5a3b2d.js";import"./Col.b6ca2923.js";import"./useFlexGapSupport.9fdad57c.js";import"./useRefs.6a32bb24.js";import"./PlusOutlined.d684f682.js";const z=r({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=i(null),{setOptions:o}=c(t);return u(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"\u7535\u8111"},{name:"\u5145\u7535\u5668"},{name:"\u8033\u673A"},{name:"\u624B\u673A"},{name:"Ipad"},{name:"\u8033\u673A"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(h,g)=>(n(),s(p(f),{title:"\u8F6C\u5316\u7387",loading:a.loading},{default:l(()=>[m("div",{ref_key:"chartRef",ref:t,style:d({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};
